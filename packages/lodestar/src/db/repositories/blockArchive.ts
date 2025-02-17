import all from "it-all";
import {ArrayLike} from "@chainsafe/ssz";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {IDatabaseController, Repository, IKeyValue, IFilterOptions, Bucket} from "@chainsafe/lodestar-db";
import {IBlockSummary} from "@chainsafe/lodestar-fork-choice";
import {Slot, Root, allForks} from "@chainsafe/lodestar-types";
import {bytesToInt} from "@chainsafe/lodestar-utils";
import {getBlockTypeFromBlock, getBlockTypeFromBytes} from "./utils/multifork";
import {getRootIndexKey, getParentRootIndexKey} from "./blockArchiveIndex";
import {deleteParentRootIndex, deleteRootIndex, storeParentRootIndex, storeRootIndex} from "./blockArchiveIndex";

export interface IBlockFilterOptions extends IFilterOptions<Slot> {
  step?: number;
}

export interface IKeyValueSummary<K, V, S> extends IKeyValue<K, V> {
  summary: S;
}

/**
 * Stores finalized blocks. Block slot is identifier.
 */
export class BlockArchiveRepository extends Repository<Slot, allForks.SignedBeaconBlock> {
  constructor(config: IBeaconConfig, db: IDatabaseController<Buffer, Buffer>) {
    const type = config.types.phase0.SignedBeaconBlock; // Pick some type but won't be used
    super(config, db, Bucket.allForks_blockArchive, type);
  }

  // Overrides for multi-fork

  encodeValue(value: allForks.SignedBeaconBlock): Buffer {
    return getBlockTypeFromBlock(this.config, value).serialize(value) as Buffer;
  }

  decodeValue(data: Buffer): allForks.SignedBeaconBlock {
    return getBlockTypeFromBytes(this.config, data).deserialize(data);
  }

  // Handle key as slot

  getId(value: allForks.SignedBeaconBlock): Slot {
    return value.message.slot;
  }

  decodeKey(data: Buffer): number {
    return bytesToInt((super.decodeKey(data) as unknown) as Uint8Array, "be");
  }

  // Overrides to index

  async put(key: Slot, value: allForks.SignedBeaconBlock): Promise<void> {
    const blockRoot = getBlockTypeFromBlock(this.config, value).fields["message"].hashTreeRoot(value.message);
    const slot = value.message.slot;
    await Promise.all([
      super.put(key, value),
      storeRootIndex(this.db, slot, blockRoot),
      storeParentRootIndex(this.db, slot, value.message.parentRoot),
    ]);
  }

  async batchPut(items: ArrayLike<IKeyValue<Slot, allForks.SignedBeaconBlock>>): Promise<void> {
    await Promise.all([
      super.batchPut(items),
      Array.from(items).map((item) => {
        const slot = item.value.message.slot;
        const blockRoot = getBlockTypeFromBlock(this.config, item.value).fields["message"].hashTreeRoot(
          item.value.message
        );
        return storeRootIndex(this.db, slot, blockRoot);
      }),
      Array.from(items).map((item) => {
        const slot = item.value.message.slot;
        const parentRoot = item.value.message.parentRoot;
        return storeParentRootIndex(this.db, slot, parentRoot);
      }),
    ]);
  }

  async batchPutBinary(items: ArrayLike<IKeyValueSummary<Slot, Buffer, IBlockSummary>>): Promise<void> {
    await Promise.all([
      super.batchPutBinary(items),
      Array.from(items).map((item) => storeRootIndex(this.db, item.summary.slot, item.summary.blockRoot)),
      Array.from(items).map((item) => storeParentRootIndex(this.db, item.summary.slot, item.summary.parentRoot)),
    ]);
  }

  async remove(value: allForks.SignedBeaconBlock): Promise<void> {
    await Promise.all([
      super.remove(value),
      deleteRootIndex(this.db, getBlockTypeFromBlock(this.config, value), value),
      deleteParentRootIndex(this.db, value),
    ]);
  }

  async batchRemove(values: ArrayLike<allForks.SignedBeaconBlock>): Promise<void> {
    await Promise.all([
      super.batchRemove(values),
      Array.from(values).map((value) => deleteRootIndex(this.db, getBlockTypeFromBlock(this.config, value), value)),
      Array.from(values).map((value) => deleteParentRootIndex(this.db, value)),
    ]);
  }

  async *valuesStream(opts?: IBlockFilterOptions): AsyncIterable<allForks.SignedBeaconBlock> {
    const dbFilterOpts = this.dbFilterOptions(opts);
    const firstSlot = dbFilterOpts.gt
      ? this.decodeKey(dbFilterOpts.gt) + 1
      : dbFilterOpts.gte
      ? this.decodeKey(dbFilterOpts.gte)
      : null;
    if (firstSlot === null) throw Error("specify opts.gt or opts.gte");
    const valuesStream = super.valuesStream(opts);
    const step = (opts && opts.step) || 1;

    for await (const value of valuesStream) {
      if ((value.message.slot - firstSlot) % step === 0) {
        yield value;
      }
    }
  }

  async values(opts?: IBlockFilterOptions): Promise<allForks.SignedBeaconBlock[]> {
    return all(this.valuesStream(opts));
  }

  // INDEX

  async getByRoot(root: Root): Promise<allForks.SignedBeaconBlock | null> {
    const slot = await this.getSlotByRoot(root);
    return slot !== null ? await this.get(slot) : null;
  }

  async getByParentRoot(root: Root): Promise<allForks.SignedBeaconBlock | null> {
    const slot = await this.getSlotByParentRoot(root);
    return slot !== null ? await this.get(slot) : null;
  }

  async getSlotByRoot(root: Root): Promise<Slot | null> {
    return this.parseSlot(await this.db.get(getRootIndexKey(root)));
  }

  async getSlotByParentRoot(root: Root): Promise<Slot | null> {
    return this.parseSlot(await this.db.get(getParentRootIndexKey(root)));
  }

  private parseSlot(slotBytes: Buffer | null): Slot | null {
    if (!slotBytes) return null;
    const slot = bytesToInt(slotBytes, "be");
    // TODO: Is this necessary? How can bytesToInt return a non-integer?
    return Number.isInteger(slot) ? slot : null;
  }
}
