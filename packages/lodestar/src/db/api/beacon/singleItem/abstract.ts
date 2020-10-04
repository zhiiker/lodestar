import {Type} from "@chainsafe/ssz";
import {IBeaconConfig} from "@chainsafe/lodestar-config";

import {IDatabaseController} from "../../../controller";
import {Bucket, encodeKey as _encodeKey} from "../../schema";

export type Id = Uint8Array | string | number | bigint;

/**
 * By default, SSZ-encoded values,
 * indexed by root
 */
export abstract class SingleItem<T> {
  protected config: IBeaconConfig;
  protected db: IDatabaseController<Buffer, Buffer>;
  protected type: Type<T>;
  protected key: Buffer;

  protected constructor(config: IBeaconConfig, db: IDatabaseController<Buffer, Buffer>, bucket: Bucket, type: Type<T>) {
    this.config = config;
    this.db = db;
    this.type = type;
    this.key = _encodeKey(bucket, Buffer.alloc(0));
  }

  public encodeValue(value: T): Buffer {
    return this.type.serialize(value) as Buffer;
  }

  public decodeValue(data: Buffer): T {
    return this.type.deserialize(data);
  }

  public async get(): Promise<T | null> {
    try {
      const value = await this.db.get(this.key);
      if (!value) return null;
      return this.decodeValue(value);
    } catch (e) {
      return null;
    }
  }

  public async put(value: T): Promise<void> {
    await this.db.put(this.key, this.encodeValue(value));
  }

  public async delete(): Promise<void> {
    await this.db.delete(this.key);
  }
}
