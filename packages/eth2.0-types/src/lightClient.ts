import {BitList} from "@chainsafe/bit-utils";

import {
  BLSPubkey,
  CompactValidator,
  Shard,
  Hash,
  Version,
  BLSSignature,
} from "./primitive";

import {
  BeaconBlockHeader,
  CompactCommittee,
} from "./misc";

export interface LightClientUpdate {
  // Shard block root (and authenticating signature data)
  shardBlockRoot: Hash;
  forkVersion: Version;
  aggregationBits: BitList;
  signature: BLSSignature;
  // Updated beacon header (and authenticating branch)
  header: BeaconBlockHeader;
  headerBranch: Hash[];
  // Updated persistent committee (and authenticating branch)
  committee: CompactCommittee;
  committeeBranch: Hash[];
}
