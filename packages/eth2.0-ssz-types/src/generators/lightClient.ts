/**
 * @module sszTypes/generators
 */

import {IBeaconParams} from "@chainsafe/eth2.0-params";
import {SimpleContainerType} from "@chainsafe/ssz";

import {DEPOSIT_CONTRACT_TREE_DEPTH} from "../constants";
import {IBeaconSSZTypes} from "../interface";

export const LightClientUpdate = (ssz: IBeaconSSZTypes, params: IBeaconParams): SimpleContainerType => ({
  fields: [
    ["shardBlockRoot", ssz.Hash],
    ["forkVersion", ssz.Version],
    ["aggregationBits", {
      elementType: ssz.bool,
      maxLength: params.MAX_VALIDATORS_PER_COMMITTEE,
    }],
    ["signature", ssz.BLSSignature],
    ["header", ssz.BeaconBlockHeader],
    ["headerBranch", {
      elementType: ssz.Hash,
      length: params.BEACON_CHAIN_ROOT_IN_SHARD_BLOCK_HEADER_DEPTH,
    }],
    ["committee", ssz.CompactCommittee],
    ["committeeBranch", {
      elementType: ssz.Hash,
      length: params.PERSISTENT_COMMITTEE_ROOT_IN_BEACON_STATE_DEPTH
    }],
    ["currentCommittee", ssz.CompactCommittee],
    ["nextCommittee", ssz.CompactCommittee],
  ],
});
