import {Options} from "yargs";
import {IGlobalArgs} from "../../options";
import {beaconOptions, IBeaconOptions} from "../beacon/options";

export const devRunOptions = {
  ...beaconOptions,

  "sync.minPeers": {
    type: "number",
    default: 0,
    group: "sync",
  } as Options,

  "network.multiaddrs": {
    type: "array",
    default: [],
    group: "network",
  } as Options,

  "api.rest.enabled": {
    type: "boolean",
    default: true,
    group: "api",
  } as Options,

  "eth1.enabled": {
    type: "boolean",
    default: false,
    group: "eth1",
  } as Options,

  "validator.beaconUrl": {
    description: "To delete chain and validator directories. Pass 'memory' for in memory communication",
    type: "string",
    group: "validator",
    default: "http://localhost:9596",
    requiresArg: false
  } as Options,

  "dev.genesisValidators": {
    alias: ["c"],
    description: "If present it will create genesis with interop validators and start chain.",
    type: "number",
    group: "dev",
    requiresArg: false
  } as Options,

  "dev.startValidators": {
    description: "Start interop validators in given range",
    default: "0:8",
    type: "string",
    group: "dev",
    requiresArg: false
  } as Options,

  "dev.reset": {
    alias: ["r"],
    description: "To delete chain and validator directories",
    type: "boolean",
    group: "dev",
    default: false,
    requiresArg: false
  } as Options
};

export type IDevOptions =
  IGlobalArgs &
  IBeaconOptions &
  {
    sync: {
      minPeers?: number;
    };
    validator: {
      beaconUrl?: string;
    };
    dev: {
      genesisValidators?: number;
      startValidators?: string;
      reset?: boolean;
    };
  };
