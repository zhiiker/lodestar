import {phase0} from "@chainsafe/lodestar-types";
import {blockToHeader} from "@chainsafe/lodestar-beacon-state-transition";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {IForkChoice} from "@chainsafe/lodestar-fork-choice";
import {BlockId} from "./interface";
import {IBeaconDb} from "../../../../db";
import {GENESIS_SLOT} from "../../../../constants";
import {fromHexString} from "@chainsafe/ssz";
import {ApiError, ValidationError} from "../../errors";

export function toBeaconHeaderResponse(
  config: IBeaconConfig,
  block: phase0.SignedBeaconBlock,
  canonical = false
): phase0.SignedBeaconHeaderResponse {
  return {
    root: config.types.phase0.BeaconBlock.hashTreeRoot(block.message),
    canonical,
    header: {
      message: blockToHeader(config, block.message),
      signature: block.signature,
    },
  };
}

export async function resolveBlockId(
  forkChoice: IForkChoice,
  db: IBeaconDb,
  blockId: BlockId
): Promise<phase0.SignedBeaconBlock> {
  const block = await resolveBlockIdOrNull(forkChoice, db, blockId);
  if (!block) {
    throw new ApiError(404, `No block found for id '${blockId}'`);
  }

  return block;
}

async function resolveBlockIdOrNull(
  forkChoice: IForkChoice,
  db: IBeaconDb,
  blockId: BlockId
): Promise<phase0.SignedBeaconBlock | null> {
  blockId = blockId.toLowerCase();
  if (blockId === "head") {
    const head = forkChoice.getHead();
    return db.block.get(head.blockRoot);
  }

  if (blockId === "genesis") {
    return db.blockArchive.get(GENESIS_SLOT);
  }

  if (blockId === "finalized") {
    return await db.blockArchive.get(forkChoice.getFinalizedCheckpoint().epoch);
  }

  if (blockId.startsWith("0x")) {
    const root = fromHexString(blockId);
    const summary = forkChoice.getBlock(root);
    if (summary) {
      return await db.block.get(summary.blockRoot);
    } else {
      return await db.blockArchive.getByRoot(root);
    }
  }

  // block id must be slot
  const slot = parseInt(blockId, 10);
  if (isNaN(slot) && isNaN(slot - 0)) {
    throw new ValidationError(`Invalid block id '${blockId}'`, "blockId");
  }

  const blockSummary = forkChoice.getCanonicalBlockSummaryAtSlot(slot);
  if (blockSummary) {
    return db.block.get(blockSummary.blockRoot);
  } else {
    return await db.blockArchive.get(slot);
  }
}
