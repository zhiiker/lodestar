import {join} from "path";
import {expect} from "chai";

import {config} from "@chainsafe/lodestar-config/mainnet";
import {describeDirectorySpecTest, InputType} from "@chainsafe/lodestar-spec-test-util";
import {altair} from "@chainsafe/lodestar-beacon-state-transition";
import {altair as altairTypes} from "@chainsafe/lodestar-types";
import {SPEC_TEST_LOCATION} from "../../../../utils/specTestCases";
import {IAltairStateTestCase} from "../../stateTestCase";

describeDirectorySpecTest<IAltairStateTestCase, altairTypes.BeaconState>(
  "altair epoch rewards and penalties mainnet",
  join(SPEC_TEST_LOCATION, "tests/mainnet/altair/epoch_processing/rewards_and_penalties/pyspec_tests"),
  (testcase) => {
    const state = testcase.pre;
    altair.processRewardsAndPenalties(config, state);
    return state;
  },
  {
    inputTypes: {
      pre: InputType.SSZ_SNAPPY,
      post: InputType.SSZ_SNAPPY,
    },
    sszTypes: {
      pre: config.types.altair.BeaconState,
      post: config.types.altair.BeaconState,
    },
    getExpected: (testCase) => testCase.post,
    expectFunc: (testCase, expected, actual) => {
      expect(config.types.altair.BeaconState.equals(actual, expected)).to.be.true;
    },
  }
);
