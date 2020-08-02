import {HttpClient, urlJoin} from "../../../../util";
import {ILogger} from "@chainsafe/lodestar-utils/lib/logger";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {INodeApi} from "../../../interface/node";
import {SyncingStatus} from "@chainsafe/lodestar-types";
import {Json} from "@chainsafe/ssz/lib/interface";
import NodeCache from "node-cache";

const SYNC_STATUS_KEY = "lodestar_syncing";

export class RestNodeApi implements INodeApi {

  private readonly client: HttpClient;

  private readonly config: IBeaconConfig;

  //unsafe cache
  private syncStatusCache = new NodeCache({stdTTL: 3, checkperiod: 0, useClones: false});

  public constructor(config: IBeaconConfig, restUrl: string, logger: ILogger) {
    this.client = new HttpClient({urlPrefix: urlJoin(restUrl, "/v1/node")}, {logger});
    this.config = config;
  }

  public async getVersion(): Promise<string> {
    return (await this.client.get<{data: {version: string}}>("/version")).data.version;
  }

  public async getSyncingStatus(): Promise<SyncingStatus> {
    let syncingStatus = this.syncStatusCache.get<SyncingStatus>(SYNC_STATUS_KEY);
    if(!syncingStatus) {
      syncingStatus =  this.config.types.SyncingStatus.fromJson(
        (await this.client.get<{data: Json}>("/syncing")).data,
        {case: "snake"}
      );
      this.syncStatusCache.set(SYNC_STATUS_KEY, syncingStatus);
    }
    return syncingStatus;
  }


}
