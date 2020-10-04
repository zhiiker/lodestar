import {Number64} from "@chainsafe/lodestar-types";
import {IBeaconConfig} from "@chainsafe/lodestar-config";

import {IDatabaseController} from "../../../controller";
import {Bucket} from "../../schema";
import {SingleItem} from "./abstract";

export class PreGenesisBlockNumberItem extends SingleItem<Number64> {
  public constructor(config: IBeaconConfig, db: IDatabaseController<Buffer, Buffer>) {
    super(config, db, Bucket.preGenesisBlockNumber, config.types.Number64);
  }
}
