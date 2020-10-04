/**
 * @module chain/genesis
 */

import {TreeBacked, List} from "@chainsafe/ssz";
import {BeaconState, Deposit, Number64, Bytes32, Root, DepositEvent} from "@chainsafe/lodestar-types";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {AbortSignal} from "abort-controller";
import {getTemporaryBlockHeader} from "@chainsafe/lodestar-beacon-state-transition";
import {ILogger} from "@chainsafe/lodestar-utils";
import {IEth1StreamParams, IEth1Provider, getDepositsAndBlockStreamForGenesis, getDepositsStream} from "../../eth1";
import {IGenesisBuilder, IGenesisResult} from "./interface";
import {
  getGenesisBeaconState,
  getEmptyBlock,
  applyDeposits,
  applyTimestamp,
  applyEth1BlockHash,
  isValidGenesisState,
  isValidGenesisValidators,
} from "./util";

export class GenesisBuilder implements IGenesisBuilder {
  public state: TreeBacked<BeaconState>;
  public depositTree: TreeBacked<List<Root>>;
  public preGenesisBlockNumber: number;

  private readonly config: IBeaconConfig;
  private readonly eth1Provider: IEth1Provider;
  private readonly logger: ILogger;
  private readonly signal?: AbortSignal;
  private readonly eth1Params: IEth1StreamParams;

  private depositCache: Set<number>;

  constructor(
    config: IBeaconConfig,
    {
      eth1Provider,
      logger,
      state,
      depositTree,
      preGenesisBlockNumber,
      signal,
      MAX_BLOCKS_PER_POLL,
    }: {
      eth1Provider: IEth1Provider;
      logger: ILogger;
      state?: TreeBacked<BeaconState> | null;
      depositTree?: TreeBacked<List<Root>> | null;
      preGenesisBlockNumber?: number | null;
      signal?: AbortSignal;
      MAX_BLOCKS_PER_POLL?: number;
    }
  ) {
    this.config = config;
    this.eth1Provider = eth1Provider;
    this.logger = logger;
    this.signal = signal;
    this.eth1Params = {
      ...config.params,
      MAX_BLOCKS_PER_POLL: MAX_BLOCKS_PER_POLL || 10000,
    };

    this.state =
      state ||
      getGenesisBeaconState(
        config,
        config.types.Eth1Data.defaultValue(),
        getTemporaryBlockHeader(config, getEmptyBlock())
      );
    this.depositTree = depositTree || config.types.DepositDataRootList.tree.defaultValue();
    this.preGenesisBlockNumber = preGenesisBlockNumber || this.eth1Provider.deployBlock;
    this.depositCache = new Set<number>();
  }

  /**
   * Get eth1 deposit events and blocks and apply to this.state until we found genesis.
   */
  public async waitForGenesis(): Promise<IGenesisResult> {
    await this.eth1Provider.validateContract();

    const blockNumberValidatorGenesis = await this.waitForGenesisValidators(this.preGenesisBlockNumber);

    const depositsAndBlocksStream = getDepositsAndBlockStreamForGenesis(
      blockNumberValidatorGenesis,
      this.eth1Provider,
      this.eth1Params,
      this.signal
    );

    for await (const [depositEvents, block] of depositsAndBlocksStream) {
      this.applyDeposits(depositEvents);
      applyTimestamp(this.config, this.state, block.timestamp);
      applyEth1BlockHash(this.config, this.state, block.blockHash);
      this.preGenesisBlockNumber = block.blockNumber;
      if (isValidGenesisState(this.config, this.state)) {
        this.logger.info(`Found genesis state at eth1 block ${block.blockNumber}`);
        return {
          state: this.state,
          depositTree: this.depositTree,
          block,
        };
      } else {
        this.logger.info(`Waiting for min genesis time ${block.timestamp} / ${this.config.params.MIN_GENESIS_TIME}`);
      }
    }

    throw Error("depositsStream stopped without a valid genesis state");
  }

  /**
   * First phase of waiting for genesis.
   * Stream deposits events in batches as big as possible without querying block data
   * @returns Block number at which there are enough active validators is state for genesis
   */
  private async waitForGenesisValidators(fromBlock: number): Promise<number> {
    const depositsStream = getDepositsStream(fromBlock, this.eth1Provider, this.eth1Params, this.signal);

    for await (const {depositEvents, blockNumber} of depositsStream) {
      this.applyDeposits(depositEvents);
      this.preGenesisBlockNumber = blockNumber;
      if (isValidGenesisValidators(this.config, this.state)) {
        this.logger.info(`Found enough validators at eth1 block ${blockNumber}`);
        return blockNumber;
      } else {
        this.logger.info(
          `Found ${this.state.validators.length} / ${this.config.params.MIN_GENESIS_ACTIVE_VALIDATOR_COUNT} validators to genesis`
        );
      }
    }

    throw Error("depositsStream stopped without a valid genesis state");
  }

  private applyDeposits(depositEvents: DepositEvent[]): void {
    const newDeposits = depositEvents
      .filter((depositEvent) => !this.depositCache.has(depositEvent.index))
      .map((depositEvent) => {
        this.depositCache.add(depositEvent.index);
        this.depositTree.push(this.config.types.DepositData.hashTreeRoot(depositEvent.depositData));
        return {
          proof: this.depositTree.tree().getSingleProof(this.depositTree.gindexOfProperty(depositEvent.index)),
          data: depositEvent.depositData,
        };
      });

    applyDeposits(this.config, this.state, newDeposits, this.depositTree);
  }
}

/**
 * Mainly used for spec test.
 * @param config
 * @param eth1BlockHash
 * @param eth1Timestamp
 * @param deposits
 */
export function initializeBeaconStateFromEth1(
  config: IBeaconConfig,
  eth1BlockHash: Bytes32,
  eth1Timestamp: Number64,
  deposits: Deposit[]
): TreeBacked<BeaconState> {
  const state = getGenesisBeaconState(
    config,
    config.types.Eth1Data.defaultValue(),
    getTemporaryBlockHeader(config, getEmptyBlock())
  );

  applyTimestamp(config, state, eth1Timestamp);
  applyEth1BlockHash(config, state, eth1BlockHash);

  // Process deposits
  applyDeposits(config, state, deposits);

  return state;
}
