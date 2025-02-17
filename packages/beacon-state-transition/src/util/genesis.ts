import {List, TreeBacked} from "@chainsafe/ssz";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {GENESIS_SLOT} from "@chainsafe/lodestar-params";
import {allForks, Bytes32, Number64, phase0, Root} from "@chainsafe/lodestar-types";
import {bigIntMin} from "@chainsafe/lodestar-utils";

import {processDeposit} from "../phase0/naive";
import {computeEpochAtSlot} from "./epoch";
import {getActiveValidatorIndices} from "./validator";
import {getTemporaryBlockHeader} from "./blockRoot";

// TODO: Refactor to work with non-phase0 genesis state

/**
 * Check if it's valid genesis state.
 * @param config
 * @param state
 */
export function isValidGenesisState(config: IBeaconConfig, state: allForks.BeaconState): boolean {
  return state.genesisTime >= config.params.MIN_GENESIS_TIME && isValidGenesisValidators(config, state);
}

/**
 * Check if it's valid genesis validators state.
 * @param config
 * @param state
 */
export function isValidGenesisValidators(config: IBeaconConfig, state: allForks.BeaconState): boolean {
  return (
    getActiveValidatorIndices(state, computeEpochAtSlot(config, GENESIS_SLOT)).length >=
    config.params.MIN_GENESIS_ACTIVE_VALIDATOR_COUNT
  );
}

/**
 * Generate the initial beacon chain state.
 */
export function getGenesisBeaconState(
  config: IBeaconConfig,
  genesisEth1Data: phase0.Eth1Data,
  latestBlockHeader: phase0.BeaconBlockHeader
): TreeBacked<allForks.BeaconState> {
  // Seed RANDAO with Eth1 entropy
  const randaoMixes = Array<Bytes32>(config.params.EPOCHS_PER_HISTORICAL_VECTOR).fill(genesisEth1Data.blockHash);

  const state: allForks.BeaconState = config.getTypes(GENESIS_SLOT).BeaconState.defaultTreeBacked();
  // MISC
  state.slot = GENESIS_SLOT;
  state.fork = {
    previousVersion: config.params.GENESIS_FORK_VERSION,
    currentVersion: config.params.GENESIS_FORK_VERSION,
    epoch: computeEpochAtSlot(config, GENESIS_SLOT),
  } as phase0.Fork;

  // Validator registry

  // Randomness and committees
  state.latestBlockHeader = latestBlockHeader;

  // Ethereum 1.0 chain data
  state.eth1Data = genesisEth1Data;
  state.randaoMixes = randaoMixes;

  return state as TreeBacked<allForks.BeaconState>;
}

/**
 * Apply eth1 block hash to state.
 * @param config IBeaconConfig
 * @param state BeaconState
 * @param eth1BlockHash eth1 block hash
 */
export function applyEth1BlockHash(config: IBeaconConfig, state: allForks.BeaconState, eth1BlockHash: Bytes32): void {
  state.eth1Data.blockHash = eth1BlockHash;
  state.randaoMixes = Array<Bytes32>(config.params.EPOCHS_PER_HISTORICAL_VECTOR).fill(eth1BlockHash);
}

/**
 * Apply eth1 block timestamp to state.
 * @param config IBeaconState
 * @param state BeaconState
 * @param eth1Timestamp eth1 block timestamp
 */
export function applyTimestamp(
  config: IBeaconConfig,
  state: TreeBacked<allForks.BeaconState>,
  eth1Timestamp: number
): void {
  state.genesisTime = eth1Timestamp + config.params.GENESIS_DELAY;
}

/**
 * Apply deposits to state.
 * For spec test, fullDepositDataRootList is undefined.
 * For genesis builder, fullDepositDataRootList is full list of deposit data root from index 0.
 * @param config IBeaconConfig
 * @param state BeaconState
 * @param newDeposits new deposits
 * @param fullDepositDataRootList full list of deposit data root from index 0
 */
export function applyDeposits(
  config: IBeaconConfig,
  state: allForks.BeaconState,
  newDeposits: phase0.Deposit[],
  fullDepositDataRootList?: TreeBacked<List<Root>>
): void {
  const depositDataRootList: Root[] = [];
  if (fullDepositDataRootList) {
    for (let index = 0; index < state.eth1Data.depositCount; index++) {
      depositDataRootList.push(fullDepositDataRootList[index]);
    }
  }

  const initDepositCount = depositDataRootList.length;
  const depositDatas = fullDepositDataRootList ? null : newDeposits.map((deposit) => deposit.data);

  for (const [index, deposit] of newDeposits.entries()) {
    if (fullDepositDataRootList) {
      depositDataRootList.push(fullDepositDataRootList[index + initDepositCount]);
      state.eth1Data.depositRoot = config.types.phase0.DepositDataRootList.hashTreeRoot(
        depositDataRootList as List<Root>
      );
    } else if (depositDatas) {
      const depositDataList = depositDatas.slice(0, index + 1);
      state.eth1Data.depositRoot = config.types.phase0.DepositDataRootList.hashTreeRoot(
        depositDataList.map((d) => config.types.phase0.DepositData.hashTreeRoot(d)) as List<Root>
      );
    }

    state.eth1Data.depositCount += 1;
    processDeposit(config, state as phase0.BeaconState, deposit);
  }

  // Process activations
  // validators are edited, so we're not iterating (read-only) through the validators
  const validatorLength = state.validators.length;
  for (let index = 0; index < validatorLength; index++) {
    const validator = state.validators[index];
    const balance = state.balances[index];
    validator.effectiveBalance = bigIntMin(
      balance - (balance % config.params.EFFECTIVE_BALANCE_INCREMENT),
      config.params.MAX_EFFECTIVE_BALANCE
    );

    if (validator.effectiveBalance === config.params.MAX_EFFECTIVE_BALANCE) {
      validator.activationEligibilityEpoch = computeEpochAtSlot(config, GENESIS_SLOT);
      validator.activationEpoch = computeEpochAtSlot(config, GENESIS_SLOT);
    }
  }

  // Set genesis validators root for domain separation and chain versioning
  state.genesisValidatorsRoot = config.types.phase0.BeaconState.fields.validators.hashTreeRoot(state.validators);
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
  deposits: phase0.Deposit[]
): TreeBacked<allForks.BeaconState> {
  const state = getGenesisBeaconState(
    config,
    config.types.phase0.Eth1Data.defaultValue(),
    getTemporaryBlockHeader(config, config.types.phase0.BeaconBlock.defaultValue())
  );

  applyTimestamp(config, state, eth1Timestamp);
  applyEth1BlockHash(config, state, eth1BlockHash);

  // Process deposits
  applyDeposits(config, state, deposits);

  return state;
}
