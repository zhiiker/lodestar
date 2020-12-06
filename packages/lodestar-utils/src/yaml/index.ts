import {load, dump} from "js-yaml";
import {schema} from "./schema";
import {objectToExpectedCase} from "../misc";

export function loadYaml(yaml: string, options?: {preserveCase?: boolean}): Record<string, unknown> {
  const parsedYaml = load(yaml, {schema});

  if (options?.preserveCase) {
    return parsedYaml;
  } else {
    return objectToExpectedCase(parsedYaml);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dumpYaml(yaml: any): string {
  return dump(yaml, {schema});
}
