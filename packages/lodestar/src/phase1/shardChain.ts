import {
  BeaconState,
  BLSSignature,
  bytes,
  Epoch,
  Gwei,
  Hash,
  Shard,
  uint64,
  ValidatorIndex
} from "@chainsafe/eth2.0-types";
import {BitVector} from "@chainsafe/bit-utils";
import {intDiv} from "../util/math";
import {IBeaconConfig} from "@chainsafe/eth2.0-config";
import {computeCommittee, getActiveValidatorIndices, getSeed} from "../chain/stateTransition/util";
import {hashTreeRoot} from "@chainsafe/ssz";
import assert = require("assert");
import {kMaxLength} from "buffer";

// Custom types
type ShardSlot = uint64;

// Misc
const SHARD_SLOTS_PER_BEACON_SLOT = 2**1; // 2
const TARGET_PERSISTENT_COMMITTEE_SIZE = 2**7; // 128
const SHARD_HEADER_SIZE = 2**9; // 512
const SHARD_BLOCK_SIZE_TARGET = 2**14; // 16,384
const SHARD_BLOCK_SIZE_LIMIT = 2**16; // 65,536

// Initial values
const PHASE_1_FORK_EPOCH = "TBD"; // Epoch
const PHASE_1_FORK_SLOT = "TBD"; // Slot

// Time parameters
const CROSSLINK_LOOKBACK = 2**0; // 1 Epochs
const EPOCHS_PER_SHARD_PERIOD = 2**8; // 256

// State list lengths
const HISTORY_ACCUMULATOR_VECTOR = 2**6; // State tree maximum depth

// Rewards and penalties
const BASEFEE_ADJUSTMENT_FACTOR = 2**3; // 8
const REWARD_COEFFICIENT_BASE = 2**20; // 1,048,576

// Signature Domain Types
const DOMAIN_SHARD_PROPOSER = 128;
const DOMAIN_SHARD_ATTESTER = 129;

// TODO Placeholder
const PLACEHOLDER = 2**3;

interface ShardBlockHeader {
  core: ShardBlockCore;
  signatures: ShardBlockSignatures;
}

interface Shardblock {
  core: ExtendedShardBlockCore;
  signatures: ShardBlockSignatures;
}

interface ShardBlockSignatures {
  attestationSignature: BLSSignature;
  proposerSignature: BLSSignature;
}

interface ShardBlockCore {
  slot: ShardSlot;
  beaconChainRoot: Hash;
  parentRoot: Hash;
  dataRoot: Hash;
  stateRoot: Hash;
  totalBytes: Hash;
  attesterBitfield: BitVector[TARGET_PERSISTENT_COMMITTEE_SIZE * 2]
}

interface ExtendedShardBlockCore {
  slot: ShardSlot;
  beaconChainRoot: Hash;
  parentRoot: Hash;
  data: bytes[SHARD_BLOCK_SIZE_LIMIT - SHARD_HEADER_SIZE];
  stateRoot: Hash;
  totalBytes: uint64;
  attesterBitfield: BitVector[TARGET_PERSISTENT_COMMITTEE_SIZE * 2];
}

interface ShardState {
  historyAccumulator: Vector[Hash, HISTORY_ACCUMULATOR_VECTOR];
  earlierCommittee_rewards: List[uint64, TARGET_PERSISTENT_COMMITTEE_SIZE];
  laterCommittee_rewards: List[uint64, TARGET_PERSISTENT_COMMITTEE_SIZE];
  earlierCommitteeFees: List[Gwei, TARGET_PERSISTENT_COMMITTEE_SIZE];
  laterCommitteeFees: List[Gwei, TARGET_PERSISTENT_COMMITTEE_SIZE];
  basefee: Gwei;
  slot: ShardSlot;
  shard: Shard;
  mostRecent_block_core: ShardBlockCore;
  receiptRoot: Hash;
  totalBytes: uint64;
}

interface ShardReceiptDelta {
  index: ValidatorIndex;
  rewardCoefficient: uint64;
  blockFee: Gwei;
}

function computeSlotOfShardSlot(slot: ShardSlot): Epoch {
  return slot.divn(SHARD_SLOTS_PER_BEACON_SLOT).toNumber();
}

function computeEpochOfShardSlot(config: IBeaconConfig, slot: ShardSlot) {
  return slot.divn(SHARD_SLOTS_PER_BEACON_SLOT).divn(config.params.SLOTS_PER_EPOCH);
}

function getShardPeriodStartEpoch(epoch: Epoch, lookback: number = 0): Epoch {
  return epoch - (epoch % EPOCHS_PER_SHARD_PERIOD) - (lookback * EPOCHS_PER_SHARD_PERIOD);
}

function getPeriodCommittee(config: IBeaconConfig, state: BeaconState, epoch: Epoch, shard: Shard): ValidatorIndex[] {
  const fullCommittee = computeCommittee(
    config,
    getActiveValidatorIndices(state, epoch),
    getSeed(config, state, epoch),
    shard,
    config.params.SHARD_COUNT
  );
  return fullCommittee.slice(0, TARGET_PERSISTENT_COMMITTEE_SIZE);
}

function getPersistentCommittee(config: IBeaconConfig, state: BeaconState, shard: Shard, slot: ShardSlot): ValidatorIndex[] {
  const epoch = computeEpochOfShardSlot(config, slot);
  const earlierCommittee = getPeriodCommittee(
    config,
    state,
    getShardPeriodStartEpoch(epoch.toNumber(), 2),
    shard);
  const laterCommittee = getPeriodCommittee(
    config,
    state,
    getShardPeriodStartEpoch(epoch.toNumber(), 1),
    shard);
  // Take not-yet-cycled-out validators from earlier committee and already-cycled-in validators from
  // later committee; return a sorted list of the union of the two, deduplicated
  // return sorted(set(
  //   [i for i in earlier_committee if epoch % EPOCHS_PER_SHARD_PERIOD < i % EPOCHS_PER_SHARD_PERIOD]
  // + [i for i in later_committee if epoch % EPOCHS_PER_SHARD_PERIOD >= i % EPOCHS_PER_SHARD_PERIOD]
}

function getShardHeader(block: Shardblock): ShardBlockHeader {
  return {
    core: {
      slot: block.core.slot,
      beaconChainRoot: block.core.beaconChainRoot,
      parentRoot: block.core.parentRoot,
      dataRoot: hashTreeRoot(block.core.data),
      stateRoot: block.core.stateRoot,
      totalBytes: block.core.totalBytes
    },
    signatures: block.signatures
  };
}

function pad(x: bytes, length: number): bytes {
  assert(x.length <= length);
  return x + "b\x00" * (length - x.length);
}

function flattenShardHeader(header: ShardBlockHeader): bytes[SHARD_HEADER_SIZE] {
  const committeeSize = header.core.attesterBitfield.bitLength;
  const attesterBits = [...Array(256).keys()].map((v, i) => {
    if (i < committeeSize) {
      return header.core.attesterBitfield[i];
    }
  });
  const attesterBytes: bytes = Buffer.alloc(32);
  for (let i = 0; i < 256; i += 8) {
    let count = 0;
    for (let j = 0; j < 8; j++) {
      count += attesterBits[i + j] << j;
    }
    attesterBytes.conc
  }
}
