import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import pipe from "it-pipe";
import all from "it-all";
import {ForkName} from "@chainsafe/lodestar-config";
import {config} from "@chainsafe/lodestar-config/minimal";
import {
  Method,
  Version,
  Encoding,
  ResponseBody,
  ResponseBodyByMethod,
  getResponseSzzTypeByMethod,
} from "../../../../../src/network/reqresp/types";
import {responseDecode} from "../../../../../src/network/reqresp/encoders/responseDecode";
import {responseEncodeSuccess} from "../../../../../src/network/reqresp/encoders/responseEncode";
import {arrToSource, createStatus, generateEmptySignedBlocks} from "../utils";
import {expectIsEqualSszTypeArr} from "../../../../utils/ssz";
import {ForkDigestContext} from "../../../../../src/util/forkDigestContext";

chai.use(chaiAsPromised);

// Ensure the types from all methods are supported properly
describe("network / reqresp / encoders / responseTypes", () => {
  const testCases: {[P in keyof ResponseBodyByMethod]: ResponseBodyByMethod[P][][]} = {
    [Method.Status]: [[createStatus()]],
    [Method.Goodbye]: [[BigInt(0)], [BigInt(1)]],
    [Method.Ping]: [[BigInt(0)], [BigInt(1)]],
    [Method.Metadata]: [],
    [Method.BeaconBlocksByRange]: [generateEmptySignedBlocks(2)],
    [Method.BeaconBlocksByRoot]: [generateEmptySignedBlocks(2)],
  };

  const encodings: Encoding[] = [Encoding.SSZ_SNAPPY];

  // TODO: Test endcoding through a fork
  const forkName = ForkName.phase0;
  const forkDigestContext = new ForkDigestContext(config, Buffer.alloc(32, 0));

  for (const encoding of encodings) {
    for (const [_method, _responsesChunks] of Object.entries(testCases)) {
      // Cast to more generic types, type by index is useful only at declaration of `testCases`
      const method = _method as keyof typeof testCases;
      const responsesChunks = _responsesChunks as ResponseBody[][];

      const versions =
        method === Method.BeaconBlocksByRange || method === Method.BeaconBlocksByRoot
          ? [Version.V1, Version.V2]
          : [Version.V1];

      for (const version of versions) {
        for (const [i, responseChunks] of responsesChunks.entries()) {
          it(`${encoding} v${version} ${method} - resp ${i}`, async function () {
            const returnedResponses = await pipe(
              arrToSource(responseChunks),
              responseEncodeSuccess(config, forkDigestContext, {method, version, encoding}),
              responseDecode(config, forkDigestContext, {method, version, encoding}),
              all
            );

            const type = getResponseSzzTypeByMethod(config, method, forkName);
            if (!type) throw Error("no type");

            expectIsEqualSszTypeArr(type, returnedResponses, responseChunks, "Response chunks");
          });
        }
      }
    }
  }
});
