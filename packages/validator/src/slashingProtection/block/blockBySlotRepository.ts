import {BLSPubkey, phase0, Slot} from "@chainsafe/lodestar-types";
import {intToBytes, bytesToInt} from "@chainsafe/lodestar-utils";
import {Bucket, DB_PREFIX_LENGTH, encodeKey, IDatabaseApiOptions, uintLen} from "@chainsafe/lodestar-db";
import {Type} from "@chainsafe/ssz";
import {LodestarValidatorDatabaseController} from "../../types";
import {blsPubkeyLen, uniqueVectorArr} from "../utils";

/**
 * Manages validator db storage of blocks.
 * Entries in the db are indexed by an encoded key which combines the validator's public key and the
 * block's slot.
 */
export class BlockBySlotRepository {
  protected type: Type<phase0.SlashingProtectionBlock>;
  protected db: LodestarValidatorDatabaseController;
  protected bucket = Bucket.phase0_slashingProtectionBlockBySlot;

  constructor(opts: IDatabaseApiOptions) {
    this.db = opts.controller;
    this.type = opts.config.types.phase0.SlashingProtectionBlock;
  }

  async getAll(pubkey: BLSPubkey, limit?: number): Promise<phase0.SlashingProtectionBlock[]> {
    const blocks = await this.db.values({
      limit,
      gte: this.encodeKey(pubkey, 0),
      lt: this.encodeKey(pubkey, Number.MAX_SAFE_INTEGER),
    });
    return blocks.map((block) => this.type.deserialize(block));
  }

  async getFirst(pubkey: BLSPubkey): Promise<phase0.SlashingProtectionBlock | null> {
    const blocks = await this.getAll(pubkey, 1);
    return blocks[0] ?? null;
  }

  async get(pubkey: BLSPubkey, slot: Slot): Promise<phase0.SlashingProtectionBlock | null> {
    const block = await this.db.get(this.encodeKey(pubkey, slot));
    return block && this.type.deserialize(block);
  }

  async set(pubkey: BLSPubkey, blocks: phase0.SlashingProtectionBlock[]): Promise<void> {
    await this.db.batchPut(
      blocks.map((block) => ({
        key: this.encodeKey(pubkey, block.slot),
        value: Buffer.from(this.type.serialize(block)),
      }))
    );
  }

  async listPubkeys(): Promise<BLSPubkey[]> {
    const keys = await this.db.keys();
    return uniqueVectorArr(keys.map((key) => this.decodeKey(key).pubkey));
  }

  private encodeKey(pubkey: BLSPubkey, slot: Slot): Buffer {
    return encodeKey(
      this.bucket,
      Buffer.concat([Buffer.from(pubkey as Uint8Array), intToBytes(BigInt(slot), uintLen, "be")])
    );
  }

  private decodeKey(key: Buffer): {pubkey: BLSPubkey; slot: Slot} {
    return {
      pubkey: key.slice(DB_PREFIX_LENGTH, DB_PREFIX_LENGTH + blsPubkeyLen),
      slot: bytesToInt(key.slice(DB_PREFIX_LENGTH, DB_PREFIX_LENGTH + uintLen), "be"),
    };
  }
}
