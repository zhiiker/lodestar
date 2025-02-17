import {SecretKey} from "@chainsafe/bls";
import {computeDomain, computeEpochAtSlot, computeSigningRoot} from "@chainsafe/lodestar-beacon-state-transition";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {BLSPubkey, BLSSignature, DomainType, Epoch, phase0, Root, Slot} from "@chainsafe/lodestar-types";
import {Genesis} from "@chainsafe/lodestar-types/phase0";
import {List, toHexString} from "@chainsafe/ssz";
import {ISlashingProtection} from "../slashingProtection";
import {BLSKeypair, PubkeyHex} from "../types";
import {IForkService} from "./fork";
import {getAggregationBits, mapSecretKeysToValidators} from "./utils";

/**
 * Service that sets up and handles validator attester duties.
 */
export class ValidatorStore {
  private readonly config: IBeaconConfig;
  private readonly forkService: IForkService;
  private readonly validators: Map<PubkeyHex, BLSKeypair>;
  private readonly slashingProtection: ISlashingProtection;
  private readonly genesisValidatorsRoot: Root;

  constructor(
    config: IBeaconConfig,
    forkService: IForkService,
    slashingProtection: ISlashingProtection,
    secretKeys: SecretKey[],
    genesis: Genesis
  ) {
    this.config = config;
    this.forkService = forkService;
    this.validators = mapSecretKeysToValidators(secretKeys);
    this.slashingProtection = slashingProtection;
    this.genesisValidatorsRoot = genesis.genesisValidatorsRoot;
  }

  votingPubkeys(): BLSPubkey[] {
    return Array.from(this.validators.values()).map((keypair) => keypair.publicKey);
  }

  hasVotingPubkey(pubkeyHex: PubkeyHex): boolean {
    return this.validators.has(pubkeyHex);
  }

  async signBlock(pubkey: BLSPubkey, block: phase0.BeaconBlock, currentSlot: Slot): Promise<phase0.SignedBeaconBlock> {
    // Make sure the block slot is not higher than the current slot to avoid potential attacks.
    if (block.slot > currentSlot) {
      throw Error(`Not signing block with slot ${block.slot} greater than current slot ${currentSlot}`);
    }

    const proposerDomain = await this.getDomain(
      this.config.params.DOMAIN_BEACON_PROPOSER,
      computeEpochAtSlot(this.config, block.slot)
    );
    const signingRoot = computeSigningRoot(this.config, this.config.types.phase0.BeaconBlock, block, proposerDomain);

    const secretKey = this.getSecretKey(pubkey); // Get before writing to slashingProtection
    await this.slashingProtection.checkAndInsertBlockProposal(pubkey, {slot: block.slot, signingRoot});

    return {
      message: block,
      signature: secretKey.sign(signingRoot).toBytes(),
    };
  }

  async signRandao(pubkey: BLSPubkey, slot: Slot): Promise<BLSSignature> {
    const epoch = computeEpochAtSlot(this.config, slot);
    const randaoDomain = await this.getDomain(this.config.params.DOMAIN_RANDAO, epoch);
    const randaoSigningRoot = computeSigningRoot(this.config, this.config.types.Epoch, epoch, randaoDomain);

    return this.getSecretKey(pubkey).sign(randaoSigningRoot).toBytes();
  }

  async signAttestation(
    duty: phase0.AttesterDuty,
    attestationData: phase0.AttestationData,
    currentEpoch: Epoch
  ): Promise<phase0.Attestation> {
    // Make sure the target epoch is not higher than the current epoch to avoid potential attacks.
    if (attestationData.target.epoch > currentEpoch) {
      throw Error(
        `Not signing attestation with target epoch ${attestationData.target.epoch} greater than current epoch ${currentEpoch}`
      );
    }

    this.validateAttestationDuty(duty, attestationData);

    const domain = await this.getDomain(this.config.params.DOMAIN_BEACON_ATTESTER, attestationData.target.epoch);
    const signingRoot = computeSigningRoot(
      this.config,
      this.config.types.phase0.AttestationData,
      attestationData,
      domain
    );

    const secretKey = this.getSecretKey(duty.pubkey); // Get before writing to slashingProtection
    await this.slashingProtection.checkAndInsertAttestation(duty.pubkey, {
      sourceEpoch: attestationData.target.epoch,
      targetEpoch: attestationData.target.epoch,
      signingRoot,
    });

    return {
      aggregationBits: getAggregationBits(duty.committeeLength, duty.validatorCommitteeIndex) as List<boolean>,
      data: attestationData,
      signature: secretKey.sign(signingRoot).toBytes(),
    };
  }

  async signAggregateAndProof(
    duty: phase0.AttesterDuty,
    selectionProof: BLSSignature,
    aggregate: phase0.Attestation
  ): Promise<phase0.SignedAggregateAndProof> {
    this.validateAttestationDuty(duty, aggregate.data);

    const aggregateAndProof: phase0.AggregateAndProof = {
      aggregate,
      aggregatorIndex: duty.validatorIndex,
      selectionProof,
    };

    const domain = await this.getDomain(
      this.config.params.DOMAIN_AGGREGATE_AND_PROOF,
      computeEpochAtSlot(this.config, aggregate.data.slot)
    );
    const signingRoot = computeSigningRoot(
      this.config,
      this.config.types.phase0.AggregateAndProof,
      aggregateAndProof,
      domain
    );

    return {
      message: aggregateAndProof,
      signature: this.getSecretKey(duty.pubkey).sign(signingRoot).toBytes(),
    };
  }

  async signSelectionProof(pubkey: BLSPubkey, slot: Slot): Promise<BLSSignature> {
    const domain = await this.getDomain(
      this.config.params.DOMAIN_SELECTION_PROOF,
      computeEpochAtSlot(this.config, slot)
    );
    const signingRoot = computeSigningRoot(this.config, this.config.types.Slot, slot, domain);
    return this.getSecretKey(pubkey).sign(signingRoot).toBytes();
  }

  private async getDomain(domainType: DomainType, epoch: Epoch): Promise<Buffer> {
    // Get fork from cache or in very rare cases fetch from Beacon node API
    const fork = await this.forkService.getFork();
    const forkVersion = epoch < fork.epoch ? fork.previousVersion : fork.currentVersion;
    return computeDomain(this.config, domainType, forkVersion, this.genesisValidatorsRoot);
  }

  private getSecretKey(pubkey: BLSPubkey): SecretKey {
    const pubkeyHex = toHexString(pubkey);
    const validator = this.validators.get(pubkeyHex);

    if (!validator) {
      throw Error(`Validator ${pubkeyHex} not in local validators map`);
    }

    return validator.secretKey;
  }

  /** Prevent signing bad data sent by the Beacon node */
  private validateAttestationDuty(duty: phase0.AttesterDuty, data: phase0.AttestationData): void {
    if (duty.slot !== data.slot) {
      throw Error(`Inconsistent duties during signing: duty.slot ${duty.slot} != att.slot ${data.slot}`);
    }
    if (duty.committeeIndex != data.index) {
      throw Error(
        `Inconsistent duties during signing: duty.committeeIndex ${duty.committeeIndex} != att.committeeIndex ${data.index}`
      );
    }
  }
}
