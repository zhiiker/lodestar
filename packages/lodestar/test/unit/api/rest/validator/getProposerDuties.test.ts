import {config} from "@chainsafe/lodestar-config/minimal";
import {expect} from "chai";
import supertest from "supertest";
import {getProposerDuties} from "../../../../../src/api/rest/validator/duties/getProposerDuties";
import {urlJoin} from "../utils";
import {setupRestApiTestServer, VALIDATOR_PREFIX} from "../index.test";
import {RestApi, ValidatorApi} from "../../../../../src/api";
import {SinonStubbedInstance} from "sinon";
import {ProposerDuty} from "@chainsafe/lodestar-types/phase0";
import {ZERO_HASH} from "../../../../../src/constants";

describe("rest - validator - getProposerDuties", function () {
  let restApi: RestApi;
  let validatorStub: SinonStubbedInstance<ValidatorApi>;

  before(async function () {
    restApi = await setupRestApiTestServer();
    validatorStub = restApi.server.api.validator as SinonStubbedInstance<ValidatorApi>;
  });

  it("should succeed", async function () {
    validatorStub.getProposerDuties.resolves({
      dependentRoot: ZERO_HASH,
      data: [config.types.phase0.ProposerDuty.defaultValue(), config.types.phase0.ProposerDuty.defaultValue()],
    });
    const response = await supertest(restApi.server.server)
      .get(urlJoin(VALIDATOR_PREFIX, getProposerDuties.url.replace(":epoch", "1")))
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
    expect((response.body as {data: ProposerDuty}).data).to.be.instanceOf(Array);
    expect((response.body as {data: ProposerDuty}).data).to.have.length(2);
    expect(validatorStub.getProposerDuties.withArgs(1).calledOnce).to.be.true;
  });

  it("invalid epoch", async function () {
    await supertest(restApi.server.server)
      .get(urlJoin(VALIDATOR_PREFIX, getProposerDuties.url.replace(":epoch", "a")))
      .expect(400)
      .expect("Content-Type", "application/json; charset=utf-8");
  });
});
