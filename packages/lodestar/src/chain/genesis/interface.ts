import {Eth1Block} from "@chainsafe/lodestar-types/src";
import {TreeBacked, List} from "@chainsafe/ssz";
import {BeaconState, Root} from "@chainsafe/lodestar-types";

export interface IGenesisResult {
  state: TreeBacked<BeaconState>;
  depositTree: TreeBacked<List<Root>>;
  block: Eth1Block;
}

export interface IGenesisBuilder {
  waitForGenesis: () => Promise<IGenesisResult>;
}
