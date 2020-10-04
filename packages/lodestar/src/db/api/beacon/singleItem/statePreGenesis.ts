import {TreeBacked, CompositeType} from "@chainsafe/ssz";
import {BeaconState} from "@chainsafe/lodestar-types";
import {IBeaconConfig} from "@chainsafe/lodestar-config";

import {IDatabaseController} from "../../../controller";
import {Bucket} from "../../schema";
import {SingleItem} from "./abstract";

export class StatePreGenesisItem extends SingleItem<TreeBacked<BeaconState>> {
  public constructor(config: IBeaconConfig, db: IDatabaseController<Buffer, Buffer>) {
    super(
      config,
      db,
      Bucket.statePreGenesis,
      (config.types.BeaconState as unknown) as CompositeType<TreeBacked<BeaconState>>
    );
  }
}
