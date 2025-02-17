import {Root, phase0, Slot} from "@chainsafe/lodestar-types";

export interface IBeaconBlocksApi {
  getBlockHeaders(filters: Partial<{slot: Slot; parentRoot: Root}>): Promise<phase0.SignedBeaconHeaderResponse[]>;
  getBlockHeader(blockId: BlockId): Promise<phase0.SignedBeaconHeaderResponse>;
  getBlock(blockId: BlockId): Promise<phase0.SignedBeaconBlock>;
  publishBlock(block: phase0.SignedBeaconBlock): Promise<void>;
}

export type BlockId = string | "head" | "genesis" | "finalized";
