import {PublicKey} from "@chainsafe/bls";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {altair, Root} from "@chainsafe/lodestar-types";
import {BeaconBlockHeader} from "@chainsafe/lodestar-types/phase0";
import {ArrayLike, BitVector} from "@chainsafe/ssz";
import {SyncCommitteeFast} from "../client/types";

export function sumBits(bits: ArrayLike<boolean>): number {
  let sum = 0;
  for (const bit of bits) {
    if (bit) {
      sum++;
    }
  }
  return sum;
}

export function isZeroHash(root: Root): boolean {
  for (let i = 0; i < root.length; i++) {
    if (root[i] !== 0) {
      return false;
    }
  }
  return true;
}

export function assertZeroHashes(rootArray: ArrayLike<Root>, expectedLength: number, errorMessage: string): void {
  if (rootArray.length !== expectedLength) {
    throw Error(`Wrong length ${errorMessage}`);
  }

  for (const root of rootArray) {
    if (!isZeroHash(root)) {
      throw Error(`Not zeroed ${errorMessage}`);
    }
  }
}

/**
 * Util to guarantee that all bits have a corresponding pubkey
 */
export function getParticipantPubkeys<T>(pubkeys: ArrayLike<T>, bits: BitVector): T[] {
  const participantPubkeys: T[] = [];
  for (let i = 0; i < bits.length; i++) {
    if (bits[i]) {
      if (!pubkeys[i]) throw Error(`No pubkey ${i} in syncCommittee`);
      participantPubkeys.push(pubkeys[i]);
    }
  }

  return participantPubkeys;
}

export function toBlockHeader(config: IBeaconConfig, block: altair.BeaconBlock): BeaconBlockHeader {
  return {
    slot: block.slot,
    proposerIndex: block.proposerIndex,
    parentRoot: block.parentRoot,
    stateRoot: block.stateRoot,
    bodyRoot: config.types.altair.BeaconBlockBody.hashTreeRoot(block.body),
  };
}

function deserializePubkeys(pubkeys: altair.LightClientUpdate["nextSyncCommittee"]["pubkeys"]): PublicKey[] {
  return Array.from(pubkeys).map((pk) => PublicKey.fromBytes(pk.valueOf() as Uint8Array));
}

function serializePubkeys(pubkeys: PublicKey[]): altair.LightClientUpdate["nextSyncCommittee"]["pubkeys"] {
  return pubkeys.map((pk) => pk.toBytes());
}

export function deserializeSyncCommittee(syncCommittee: altair.SyncCommittee): SyncCommitteeFast {
  return {
    pubkeys: deserializePubkeys(syncCommittee.pubkeys),
    pubkeyAggregates: deserializePubkeys(syncCommittee.pubkeyAggregates),
  };
}

export function serializeSyncCommittee(syncCommittee: SyncCommitteeFast): altair.SyncCommittee {
  return {
    pubkeys: serializePubkeys(syncCommittee.pubkeys),
    pubkeyAggregates: serializePubkeys(syncCommittee.pubkeyAggregates),
  };
}

export function isEmptyHeader(config: IBeaconConfig, header: BeaconBlockHeader): boolean {
  const emptyValue = config.types.altair.BeaconBlockHeader.defaultValue();
  return config.types.altair.BeaconBlockHeader.equals(emptyValue, header);
}

export function isEmptySyncCommitte(config: IBeaconConfig, syncCommittee: altair.SyncCommittee): boolean {
  const emptyValue = config.types.altair.SyncCommittee.defaultValue();
  return config.types.altair.SyncCommittee.equals(emptyValue, syncCommittee);
}
