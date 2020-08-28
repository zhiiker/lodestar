/**
 * @module eth1
 */

import {AbortSignal} from "abort-controller";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {IBeaconDb} from "../../db";
import {IDepositEvent, IEth1StreamParams, IEth1Provider, getDepositsStream, getBlocksStream} from "../../eth1";

/**
 * Subscribes to a batched stream of deposits and stores all of them to the db
 * Deposits must not be verified, all
 * @param config
 * @param db
 * @param eth1Provider
 * @param eth1Params
 * @param signal
 */
export async function fetchDepositsForBlockProduction(
  config: IBeaconConfig,
  db: IBeaconDb,
  eth1Provider: IEth1Provider,
  eth1Params: IEth1StreamParams,
  signal?: AbortSignal
): Promise<void> {
  const lastSeenEth1BlockNumber = await getLastSeenEth1BlockNumber(db);
  const depositsStream = getDepositsStream(lastSeenEth1BlockNumber, eth1Provider, eth1Params, signal);

  for await (const {depositEvents} of depositsStream) {
    // update state
    await Promise.all([
      // op pool depositData
      db.depositData.batchPut(
        depositEvents.map((depositEvent) => ({
          key: depositEvent.index,
          value: depositEvent,
        }))
      ),
      // deposit data roots
      db.depositDataRoot.batchPut(
        depositEvents.map((depositEvent) => ({
          key: depositEvent.index,
          value: config.types.DepositData.hashTreeRoot(depositEvent),
        }))
      ),
    ]);
  }
}

/**
 * Subscribes to eth1 blocks and stores the eth1 data to the db
 * Does not guarantee to have all blocks, just recent ones
 */
export async function fetchEth1DataForBlockProduction(
  db: IBeaconDb,
  eth1Provider: IEth1Provider,
  eth1Params: IEth1StreamParams,
  signal?: AbortSignal
): Promise<void> {
  const blocksStream = getBlocksStream(eth1Provider, eth1Params, signal);

  for await (const block of blocksStream) {
    const eth1Data = await eth1Provider.getEth1Data(block.hash);
    await db.eth1Data.put(block.number, eth1Data);
  }
}

/**
 * Utility to fetch the latest seen eth1 block number on deposit events
 */
async function getLastSeenEth1BlockNumber(db: IBeaconDb): Promise<number> {
  const lastDepositInDb = await db.depositData.lastValue();
  if (lastDepositInDb) {
    const lastDepositEventInDb = lastDepositInDb as IDepositEvent;
    if (lastDepositEventInDb.blockNumber) return lastDepositEventInDb.blockNumber;
  }
  return 0;
}
