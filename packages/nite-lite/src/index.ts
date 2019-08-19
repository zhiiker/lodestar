import BN from "bn.js";
import {config} from "@chainsafe/eth2.0-config/lib/presets/mainnet";
import {
  bool, CompactCommittee, Epoch, Gwei, ValidatorIndex, CompactValidator, BLSPubkey, Shard, BeaconBlockHeader,
} from "@chainsafe/eth2.0-types";

export interface UncompactValidator {
  index: ValidatorIndex;
  slashed: bool;
  effectiveBalance: Gwei;
}

export interface LightClientMemory {
  shard: Shard;
  header: BeaconBlockHeader;
  previousCommittee: CompactCommittee;
  currentCommittee: CompactCommittee;
  nextCommittee: CompactCommittee;
}


/**
 * Return the index, slashed, effective_balance // EFFECTIVE_BALANCE_INCREMENT of ``compact_validator``.
 */
export function unpackCompactValidator(compactValidator: CompactValidator): UncompactValidator {
  return {
    index: compactValidator.shrn(16).toNumber(),
    slashed: compactValidator.shrn(15).modn(2) === 1,
    effectiveBalance: compactValidator.and(new BN(2**15 - 1))
  };
}

export interface PubkeysAndBalances {
  pubkeys: BLSPubkey[];
  balances: Gwei[];
}

/**
 * Return pubkeys and balances for the persistent committee at ``epoch``.
 */
export function getPersistentCommitteePubkeysAndBalances(memory: LightClientMemory, epoch: Epoch): PubkeysAndBalances {
  const {EPOCHS_PER_SHARD_PERIOD} = config.params;
  const currentPeriod = intDiv(computeEpochOfSlot(memory.header.slot), EPOCHS_PER_SHARD_PERIOD);

  const nextPeriod = intDiv(epoch, EPOCHS_PER_SHARD_PERIOD);
  let earlierCommittee: CompactCommittee;
  let laterCommittee: CompactCommittee;
  if (nextPeriod === currentPeriod) {
    earlierCommittee = memory.previousCommittee;
    laterCommittee = memory.currentCommittee;
  } else {
    earlierCommittee = memory.currentCommittee;
    laterCommittee = memory.nextCommittee;
  }
  let pubkeys: BLSPubkey[] = [];
  let balances: Gwei[] = [];
  const appendCommitteePubkeysAndBalances = (committee: CompactCommittee, fn: (epoch: Epoch, index: ValidatorIndex) => boolean) => {
    for (let i = 0; i < committee.pubkeys.length; i++) {
      const pubkey = committee.pubkeys[i];
      const compactValidator = committee.compactValidators[i];
      const {index, effectiveBalance} = unpackCompactValidator(compactValidator);
      if (fn(epoch, index)) {
        pubkeys.push(pubkey);
        balances.push(effectiveBalance);
      }
    }
  }
  appendCommitteePubkeysAndBalances(
    earlierCommittee,
    (epoch: Epoch, index: ValidatorIndex) => epoch % EPOCHS_PER_SHARD_PERIOD < index % EPOCHS_PER_SHARD_PERIOD
  );
  appendCommitteePubkeysAndBalances(
    laterCommittee,
    (epoch: Epoch, index: ValidatorIndex) => epoch % EPOCHS_PER_SHARD_PERIOD >= index % EPOCHS_PER_SHARD_PERIOD
  );
  return {
    pubkeys,
    balances,
  };
}
