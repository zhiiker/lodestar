import {BeaconBlockHeader, SyncCommittee} from "./";
import {Vector, BitVector, List} from "@chainsafe/ssz";
import * as phase0 from "../..";

export interface LightClientSnapshot {
  // Beacon block header
  header: BeaconBlockHeader;
  // Sync committees corresponding to the header
  currentSyncCommittee: SyncCommittee;
  nextSyncCommittee: SyncCommittee;
}

export interface LightClientUpdate {
  // Update beacon block header
  header: BeaconBlockHeader;
  // Next sync committee corresponding to the header
  nextSyncCommittee: SyncCommittee;
  nextSyncCommitteeBranch: Vector<phase0.Bytes32>;
  // Finality proof for the update header
  finalityHeader: BeaconBlockHeader;
  finalityBranch: Vector<phase0.Bytes32>;
  // Sync committee aggregate signature
  syncCommitteeBits: BitVector;
  syncCommitteeSignature: phase0.BLSSignature;
  // Fork version for the aggregate signature
  forkVersion: phase0.Version;
}

export interface LightClientStore {
  snapshot: LightClientSnapshot;
  validUpdates: List<LightClientUpdate>;
}
