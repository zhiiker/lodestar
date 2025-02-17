import {readonlyValues} from "@chainsafe/ssz";
import {allForks, phase0} from "@chainsafe/lodestar-types";
import {CachedBeaconState, verifyIndexedAttestationSignature} from "../../../fast";

/**
 * Check if `indexedAttestation` has sorted and unique indices and a valid aggregate signature.
 */
export function isValidIndexedAttestation(
  state: CachedBeaconState<allForks.BeaconState>,
  indexedAttestation: phase0.IndexedAttestation,
  verifySignature = true
): boolean {
  const {config} = state;
  const {MAX_VALIDATORS_PER_COMMITTEE} = config.params;
  const indices = Array.from(readonlyValues(indexedAttestation.attestingIndices));

  // verify max number of indices
  if (!(indices.length > 0 && indices.length <= MAX_VALIDATORS_PER_COMMITTEE)) {
    return false;
  }
  // verify indices are sorted and unique.
  // Just check if they are monotonically increasing,
  // instead of creating a set and sorting it. Should be (O(n)) instead of O(n log(n))
  let prev = -1;
  for (const index of indices) {
    if (index <= prev) return false;
    prev = index;
  }
  // check if indices are out of bounds, by checking the highest index (since it is sorted)
  if (indices[indices.length - 1] >= state.validators.length) {
    return false;
  }
  // verify aggregate signature
  if (!verifySignature) {
    return true;
  }

  return verifyIndexedAttestationSignature(state, indexedAttestation, indices);
}
