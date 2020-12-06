import fs from "fs";
import yaml from "js-yaml";
import {CompositeType, toHexString, Json, ObjectLike} from "@chainsafe/ssz";
import {loadYaml} from "@chainsafe/lodestar-utils";
import path from "path";
import {expect} from "chai";
import {containerTypes} from "./containersTypes";
import {SPEC_TEST_LOCATION} from "../../../utils/specTestCases";

/* eslint-disable @typescript-eslint/naming-convention */

// packages/spec-test-runner/spec-tests/tests/general/phase0/ssz_generic/containers/valid/VarTestStruct_nil_2

describe("ssz_generic/containers/valid", () => {
  const rootDir = path.join(SPEC_TEST_LOCATION, "tests/general/phase0/ssz_generic/containers/valid");

  for (const testName of fs.readdirSync(rootDir)) {
    const typename = testName.split("_")[0] as keyof typeof containerTypes;

    switch (typename) {
      case "SingleFieldTestStruct":
        runContainersTest(testName, containerTypes.SingleFieldTestStruct);
        break;

      // case "SmallTestStruct":
      //   runContainersTest(testName, containerTypes.SmallTestStruct);
      //   break;
    }
  }

  function runContainersTest<T extends ObjectLike = any>(testName: string, sszType: CompositeType<T>): void {
    const testDirPath = path.join(rootDir, testName);
    const metaPath = path.join(testDirPath, "meta.yaml");
    const valuePath = path.join(testDirPath, "value.yaml");
    const serializedPath = path.join(testDirPath, "serialized.ssz");

    // meta.yaml
    // Valid ssz objects can have a hash-tree-root. The expected roots are encoded into the metadata yaml:
    //
    // root: Bytes32             -- Hash-tree-root of the object
    //
    // The Bytes32 is encoded as a string, hexadecimal encoding, prefixed with 0x

    const meta = loadYaml(fs.readFileSync(metaPath, "utf8")) as {root: string};
    if (!meta.root) throw Error(`Invalid test case, ${metaPath} does not contain root`);
    const expectedRoot = meta.root;

    // serialized.ssz
    // The serialized form of the object, as raw SSZ bytes
    const serializedRaw = fs.readFileSync(serializedPath);
    const expectedType = sszType.deserialize(serializedRaw);

    // value.yaml
    // The object, encoded as a YAML structure. Using the same familiar encoding as YAML data in the other test suites
    // const expectedJson = loadYaml(fs.readFileSync(valuePath, "utf8"), {preserveCase: true}) as Json;
    const expectedJson = yaml.load(fs.readFileSync(valuePath, "utf8")) as Json;

    // The conditions are the same for each type:
    describe(testName, () => {
      it("Encoding", () => {
        // - Encoding: After encoding the given value object, the output should match serialized.
        const typeFromJson = sszType.fromJson(expectedJson);
        const jsonAgain = sszType.toJson(typeFromJson);
        console.log({expectedJson, jsonAgain, typeFromJson});
        expect(typeFromJson).to.deep.equal(jsonAgain, "Wrong jsonAgain");

        const typeFromJsonBytes = sszType.serialize(typeFromJson);
        expect(toHexString(typeFromJsonBytes)).to.equal(
          toHexString(serializedRaw),
          `Wrong serialized bytes\n${JSON.stringify(expectedJson, null, 2)}\n`
        );
        // expect(toHexString(serialized)).to.equal(toHexString(serializedRaw), "Wrong serialized bytes");
      });

      it("Decoding", () => {
        // - Decoding: After decoding the given serialized bytes, it should match the value object.
        const value = sszType.toJson(expectedType);
        expect(value).to.deep.equal(expectedJson, "Wrong deserialized object");
      });

      it("hashTreeRoot", () => {
        // - Hash-tree-root: the root should match the root declared in the metadata.
        const root = sszType.hashTreeRoot(expectedType);
        expect(toHexString(root)).to.equal(expectedRoot, "Wrong root");
      });
    });
  }
});
