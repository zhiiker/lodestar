import {expect} from "chai";
import supertest from "supertest";
import {toHexString} from "@chainsafe/ssz";

import {getBlockHeaders} from "../../../../../../src/api/rest/controllers/beacon/blocks";
import {generateSignedBeaconHeaderResponse} from "../../../../../utils/api";
import {urlJoin} from "../../utils";
import {BEACON_PREFIX} from "../../index.test";

describe("rest - beacon - getBlockHeaders", function () {
  it("should fetch without filters", async function () {
    this.test?.ctx?.beaconBlocksStub.getBlockHeaders.resolves([generateSignedBeaconHeaderResponse()]);
    const response = await supertest(this.test?.ctx?.restApi.server.server)
      .get(urlJoin(BEACON_PREFIX, getBlockHeaders.url))
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
    expect(response.body.data.length).to.be.equal(1);
  });

  it("should parse slot param", async function () {
    this.test?.ctx?.beaconBlocksStub.getBlockHeaders
      .withArgs({slot: 1, parentRoot: undefined})
      .resolves([generateSignedBeaconHeaderResponse()]);
    const response = await supertest(this.test?.ctx?.restApi.server.server)
      .get(urlJoin(BEACON_PREFIX, getBlockHeaders.url))
      .query({slot: "1"})
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
    expect(response.body.data.length).to.be.equal(1);
  });

  it("should parse parentRoot param", async function () {
    this.test?.ctx?.beaconBlocksStub.getBlockHeaders
      .withArgs({slot: undefined, parentRoot: new Uint8Array(32).fill(1)})
      .resolves([generateSignedBeaconHeaderResponse()]);
    const response = await supertest(this.test?.ctx?.restApi.server.server)
      .get(urlJoin(BEACON_PREFIX, getBlockHeaders.url))
      // eslint-disable-next-line @typescript-eslint/naming-convention
      .query({parent_root: toHexString(Buffer.alloc(32, 1))})
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
    expect(response.body.data.length).to.be.equal(1);
  });

  it("should throw validation error on invalid slot", async function () {
    await supertest(this.test?.ctx?.restApi.server.server)
      .get(urlJoin(BEACON_PREFIX, getBlockHeaders.url))
      .query({slot: "abc"})
      .expect(400)
      .expect("Content-Type", "application/json; charset=utf-8");
  });

  it.skip("should throw validation error on invalid parentRoot - not hex", async function () {
    await supertest(this.test?.ctx?.restApi.server.server)
      .get(urlJoin(BEACON_PREFIX, getBlockHeaders.url))
      .query({parentRoot: "0xb0e16cdb82ddf08b02aa3898d16a706997b11a69048c80525338d4a7b378d8eg"})
      .expect(400)
      .expect("Content-Type", "application/json; charset=utf-8");
  });

  it.skip("should throw validation error on invalid parentRoot - incorrect length", async function () {
    await supertest(this.test?.ctx?.restApi.server.server)
      .get(urlJoin(BEACON_PREFIX, getBlockHeaders.url))
      .query({parentRoot: "0xb0e"})
      .expect(400)
      .expect("Content-Type", "application/json; charset=utf-8");
  });

  it.skip("should throw validation error on invalid parentRoot - missing 0x prefix", async function () {
    await supertest(this.test?.ctx?.restApi.server.server)
      .get(urlJoin(BEACON_PREFIX, getBlockHeaders.url))
      .query({parentRoot: "b0e16cdb82ddf08b02aa3898d16a706997b11a69048c80525338d4a7b378d8eb"})
      .expect(400)
      .expect("Content-Type", "application/json; charset=utf-8");
  });
});
