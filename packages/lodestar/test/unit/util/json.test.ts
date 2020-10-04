import {expect} from "chai";
import {parseJson} from "../../../src/util/json";

describe("parseJson", () => {
  const validJson = JSON.stringify({a: {b: "0".repeat(1000)}});
  const cases: {id: string; json: string; error: any}[] = [
    {
      id: "Bad JSON ending",
      json: validJson.slice(0, -1),
      // eslint-disable-next-line quotes
      error: `Error parsing JSON: Unexpected end of JSON input\n00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"}`,
    },
    {
      id: "Bad token in position N",
      // eslint-disable-next-line quotes
      json: validJson.slice(0, validJson.length / 2) + '"{|' + validJson.slice(validJson.length / 2),
      // eslint-disable-next-line quotes
      error: `Error parsing JSON: Unexpected token { in JSON at position 508\n0000000000000000000000000000000000000000000000000"{|000000000000000000000000000000000000000000000000`,
    },
  ];
  for (const {id, json, error} of cases) {
    it(id, () => {
      expect(() => parseJson(json)).to.throw(error);
    });
  }
});
