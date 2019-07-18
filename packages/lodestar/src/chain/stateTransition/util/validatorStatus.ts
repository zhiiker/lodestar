/**
 * @module chain/stateTransition/util
 */

import {
  BeaconState,
  Epoch,
  ValidatorIndex,
  Validator,
} from "../../../types";

import {
  FAR_FUTURE_EPOCH,
} from "../../../constants";

import {
  getCurrentEpoch,
  getDelayedActivationExitEpoch,
} from "./epoch";

import {
  increaseBalance,
  decreaseBalance,
} from "./balance";

import {
  getBeaconProposerIndex,
  getChurnLimit,
} from "./misc";
import {IBeaconConfig} from "../../../config";


/**
 * Initiate exit for the validator with the given index.
 *
 * Note: that this function mutates state.
 */
export function initiateValidatorExit(config: IBeaconConfig, state: BeaconState, index: ValidatorIndex): void {
  const validator = state.validatorRegistry[index];

  // Return if validator already initiated exit
  if (validator.exitEpoch !== FAR_FUTURE_EPOCH) {
    return;
  }

  // Compute exit queue epoch
  let exitQueueEpoch = state.validatorRegistry.reduce((epoch: Epoch, v: Validator) => {
    if (v.exitEpoch !== FAR_FUTURE_EPOCH) {
      return Math.max(v.exitEpoch, epoch);
    }
    return epoch;
  }, getDelayedActivationExitEpoch(config, getCurrentEpoch(config, state)));
  const exitQueueChurn = state.validatorRegistry
    .filter((v: Validator) => v.exitEpoch === exitQueueEpoch).length;
  if (exitQueueChurn >= getChurnLimit(config, state)) {
    exitQueueEpoch += 1;
  }

  // Set validator exit epoch and withdrawable epoch
  validator.exitEpoch = exitQueueEpoch;
  validator.withdrawableEpoch = validator.exitEpoch + config.params.MIN_VALIDATOR_WITHDRAWAL_DELAY;
}

/**
 * Slash the validator with index ``slashedIndex``.
 *
 * Note that this function mutates ``state``.
 */
export function slashValidator(
  config: IBeaconConfig,
  state: BeaconState,
  slashedIndex: ValidatorIndex,
  whistleblowerIndex: ValidatorIndex | null = null
): void {
  const currentEpoch = getCurrentEpoch(config, state);

  initiateValidatorExit(config, state, slashedIndex);
  state.validatorRegistry[slashedIndex].slashed = true;
  state.validatorRegistry[slashedIndex].withdrawableEpoch =
    currentEpoch + config.params.LATEST_SLASHED_EXIT_LENGTH;
  const slashedBalance = state.validatorRegistry[slashedIndex].effectiveBalance;
  state.latestSlashedBalances[currentEpoch % config.params.LATEST_SLASHED_EXIT_LENGTH] =
    state.latestSlashedBalances[currentEpoch % config.params.LATEST_SLASHED_EXIT_LENGTH].add(slashedBalance);

  const proposerIndex = getBeaconProposerIndex(config, state);
  if (whistleblowerIndex === undefined || whistleblowerIndex === null) {
    whistleblowerIndex = proposerIndex;
  }
  const whistleblowingReward = slashedBalance.divn(config.params.WHISTLEBLOWING_REWARD_QUOTIENT);
  const proposerReward = whistleblowingReward.divn(config.params.PROPOSER_REWARD_QUOTIENT);
  increaseBalance(state, proposerIndex, proposerReward);
  increaseBalance(state, whistleblowerIndex, whistleblowingReward.sub(proposerReward));
  decreaseBalance(state, slashedIndex, whistleblowingReward);
}
