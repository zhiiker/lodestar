import {config} from "@chainsafe/lodestar-config/mainnet";
import {List} from "@chainsafe/ssz";
import {allForks} from "@chainsafe/lodestar-types";
import {expect} from "chai";
import {generatePerformanceBlock, generatePerfTestCachedBeaconState, initBLS} from "../../../util";
import {phase0, fast} from "../../../../../src";
import {profilerLogger} from "../../../../utils/logger";

describe("Process Blocks Performance Test", function () {
  this.timeout(0);
  let state: fast.CachedBeaconState<allForks.BeaconState>;
  const logger = profilerLogger();
  before(async () => {
    await initBLS();
    state = generatePerfTestCachedBeaconState() as fast.CachedBeaconState<allForks.BeaconState>;
  });

  it("should process block", async () => {
    const signedBlock = generatePerformanceBlock();
    logger.profile(`Process block ${signedBlock.message.slot}`);
    const start = Date.now();
    fast.fastStateTransition(state, signedBlock, {
      verifyProposer: false,
      verifySignatures: false,
      verifyStateRoot: false,
    });
    expect(Date.now() - start).lte(15);
    logger.profile(`Process block ${signedBlock.message.slot}`);
  });

  it("should process multiple validator exits in same block", async () => {
    const signedBlock: phase0.SignedBeaconBlock = generatePerformanceBlock();
    const exitEpoch = state.epochCtx.currentShuffling.epoch;
    const voluntaryExits: phase0.SignedVoluntaryExit[] = [];
    const numValidatorExits = config.params.MAX_VOLUNTARY_EXITS;
    for (let i = 0; i < numValidatorExits; i++) {
      voluntaryExits.push({
        message: {epoch: exitEpoch, validatorIndex: 40000 + i},
        signature: Buffer.alloc(96),
      });
    }
    signedBlock.message.body.voluntaryExits = (voluntaryExits as unknown) as List<phase0.SignedVoluntaryExit>;
    const start = Date.now();
    logger.profile(`Process block ${signedBlock.message.slot} with ${numValidatorExits} validator exits`);
    fast.fastStateTransition(state, signedBlock, {
      verifyProposer: false,
      verifySignatures: false,
      verifyStateRoot: false,
    });
    expect(Date.now() - start).lt(430);
    logger.profile(`Process block ${signedBlock.message.slot} with ${numValidatorExits} validator exits`);
  });

  // Uncomment to hang test forever to view detailed source info in Chrome devtools profiler
  // after(async () => {
  //   await new Promise((r) => setTimeout(r, 1e8));
  // });
});
