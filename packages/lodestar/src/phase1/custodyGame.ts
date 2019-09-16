// Helpers
import {intDiv} from "../util/math";
import {
  BeaconState,
  BLSSignature,
  bytes,
  Crosslink,
  Epoch,
  Hash,
  uint64,
  ValidatorIndex
} from "@chainsafe/eth2.0-types";
import {hash} from "@chainsafe/ssz";
import assert from "assert";
import {getCurrentEpoch} from "../chain/stateTransition/util";
import {IBeaconConfig} from "@chainsafe/eth2.0-config";

const ceillog2 = (n: number): number => {
  return n.toString(2).length;
};

// Misc
const BLS12_381_Q = 4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559787;
const MINOR_REWARD_QUOTIENT = 2**8; // 256

// Custody Game Params
const BYTES_PER_SHARD_BLOCK = 2**14; // 16,384
const BYTES_PER_CUSTODY_CHUNK = 2**9; // 512
const BYTES_PER_CUSTODY_SUBCHUNK = 48;
const CHUNKS_PER_EPOCH = intDiv((2 * BYTES_PER_SHARD_BLOCK * SLOTS_PER_EPOCH),  BYTES_PER_CUSTODY_CHUNK);
const MAX_CUSTODY_CHUNKS = MAX_EPOCHS_PER_CROSSLINK * CHUNKS_PER_EPOCH;
const CUSTODY_DATA_DEPTH = ceillog2(MAX_CUSTODY_CHUNKS) + 1;
const CUSTODY_CHUNK_BIT_DEPTH = ceillog2(intDiv(MAX_EPOCHS_PER_CROSSLINK * CHUNKS_PER_EPOCH, 256)) + 2;

// Time Params
const MAX_CHUNK_CHALLENGE_DELAY = 2*11; // 2048 epochs
const CUSTODY_RESPONSE_DEADLINE = 2**14; // 16,384 epochs
const RANDAO_PENALTY_EPOCHS = 2**1; // 2 epochs
const EARLY_DERIVED_SECRET_PENALTY_MAX_FUTURE_EPOCHS = 2**14; // 16,384 epochs
const EPOCHS_PER_CUSTODY_PERIOD = 2**11 // 2048 epochs
const CUSTODY_PERIOD_TO_RANDAO_PADDING = 2**11; // 2048 epochs
const MAX_REVEAL_LATENESS_DECREMENT = 2**7; // 128 epochs

// Max Operations per block
const MAX_CUSTODY_KEY_REVEALS = 2**4; // 16
const MAX_EARLY_DERIVED_SECRET_REVEALS = 1;
const MAX_CUSTODY_CHUNK_CHALLENGES = 2**2; // 4
const MAX_CUSTODY_BIT_CHALLENGES = 2**2; // 4
const MAX_CUSTODY_RESPONSES = 2**5; // 32

// Reward and Penalty Quotients
const EARLY_DERIVED_SECRET_REVEAL_SLOT_REWARD_MULTIPLE = 2**1; // 2

// Signature Domain Types
const DOMAIN_CUSTODY_BIT_CHALLENGE = 6;

// Placeholder
const PLACEHOLDER = 2**32;

// Helpers
function isValidMerkleBranchWithMixin(
  leaf: Hash,
  branch: Hash[],
  depth: uint64,
  index: uint64,
  root: Hash,
  mixin: uint64): Boolean {
  let value = leaf;
  for (let i=0; i < depth.toNumber(); i++) {
    if (index.divn((2**i)).modn(2)) {
      value = branch[i] + value;
    } else {
      value = hash(value + branch[i]);
    }
  }
  const buf = new Buffer.alloc();
  value = hash(value + buf.writeUInt16LE(mixin));
  return value === root;
}

function getCrosslinkChunkCount(crosslink: Crosslink): int {
  const crosslinkLength = Math.min(MAX_EPOCHS_PER_CROSSLINK, crosslink.endEpoch - crosslink.startEpoch);
  return crosslinkLength * CHUNKS_PER_EPOCH;
}

function legendreBit(a: number, q: number): number {
  if (a >= q) {
    return legendreBit(a % q, q);
  }
  if (a === 0) {
    return 0;
  }
  assert((q > a && a > 0) && q % 2 === 1);
  let t = 1;
  let n = q;
  // let b = a;

  while (a !== 0) {
    while (a % 2 === 0) {
      a = intDiv(a, 2);
      let r = n % 8;
      if (r === 3 || r === 5) {
        t = -t;
      }
    }
    let oldA = a;
    n = oldA;
    a = n;
    // TODO figure this out
    if (a % 4 == n) {
      t = -t;
    }
    a = a % n;
  }
  if (n === 1) {
    return intDiv((t + 1), 2);
  }
  return 0;
}

// function custodySubchunkify(bytez: bytes) {}

// function getCustodyChunkBit(key: BLSSignature, chunk: bytes) {
//   full_G2_element = bls_signature_to_G2(key)
//   s = full_G2_element[0].coeffs
//   bits = [legendre_bit((i + 1) * s[i % 2] + int.from_bytes(subchunk, "little"), BLS12_381_Q)
//   for i, subchunk in enumerate(custody_subchunkify(chunk))]
//
//   return bool(sum(bits) % 2)
// }

// def get_chunk_bits_root(chunk_bits: Bitlist[MAX_CUSTODY_CHUNKS]) -> bit:
//   aggregated_bits = 0
// for i, b in enumerate(chunk_bits):
// aggregated_bits += 2**i * b
// return legendre_bit(aggregated_bits, BLS12_381_Q)

function getRandaoEpochForCustodyPeriod(
  state: BeaconState,
  config: IBeaconConfig,
  period: uint64,
  validatorIndex: ValidatorIndex,
  epoch?: Epoch
): number {
  if (!epoch) {
    epoch = getCurrentEpoch(config, state);
  }
  return intDiv((epoch + validatorIndex % EPOCHS_PER_CUSTODY_PERIOD), EPOCHS_PER_CUSTODY_PERIOD);
}

// fix this
const isZero = (c) => { return false };

function replaceEmptyOrAppend(list: any[], newElement: any): number {
  for (let i = 0; i < list.length; i++) {
    if (isZero(list[i])) {
      list[i] = newElement;
      return i;
    }
  }
  list.push(newElement);
  return list.length - 1;
}

