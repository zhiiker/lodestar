import {readonlyValues} from "@chainsafe/ssz";
import {allForks, phase0} from "@chainsafe/lodestar-types";
import {computeSigningRoot, getDomain, ISignatureSet, SignatureSetType, verifySignatureSet} from "../../util";
import {CachedBeaconState} from "../util";

export function verifyVoluntaryExitSignature(
  state: CachedBeaconState<allForks.BeaconState>,
  signedVoluntaryExit: phase0.SignedVoluntaryExit
): boolean {
  return verifySignatureSet(getVoluntaryExitSignatureSet(state, signedVoluntaryExit));
}

/**
 * Extract signatures to allow validating all block signatures at once
 */
export function getVoluntaryExitSignatureSet(
  state: CachedBeaconState<allForks.BeaconState>,
  signedVoluntaryExit: phase0.SignedVoluntaryExit
): ISignatureSet {
  const {config, epochCtx} = state;
  const domain = getDomain(config, state, config.params.DOMAIN_VOLUNTARY_EXIT, signedVoluntaryExit.message.epoch);

  return {
    type: SignatureSetType.single,
    pubkey: epochCtx.index2pubkey[signedVoluntaryExit.message.validatorIndex],
    signingRoot: computeSigningRoot(config, config.types.phase0.VoluntaryExit, signedVoluntaryExit.message, domain),
    signature: signedVoluntaryExit.signature.valueOf() as Uint8Array,
  };
}

export function getVoluntaryExitsSignatureSets(
  state: CachedBeaconState<allForks.BeaconState>,
  signedBlock: allForks.SignedBeaconBlock
): ISignatureSet[] {
  return Array.from(readonlyValues(signedBlock.message.body.voluntaryExits), (voluntaryExit) =>
    getVoluntaryExitSignatureSet(state, voluntaryExit)
  );
}
