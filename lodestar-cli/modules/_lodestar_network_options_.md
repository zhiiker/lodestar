[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/network/options"](_lodestar_network_options_.md)

# External module: "lodestar/network/options"

## Index

### Object literals

* [NetworkOptions](_lodestar_network_options_.md#const-networkoptions)

## Object literals

### `Const` NetworkOptions

### ▪ **NetworkOptions**: *object*

*Defined in [packages/lodestar-cli/src/lodestar/network/options.ts:3](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/lodestar/network/options.ts#L3)*

###  fields

• **fields**: *object | object[]* = [
    {
      name: "maxPeers",
      type: "number",
      configurable: true,
      process: (input) => {
        return parseInt(input);
      },
      cli: {
        flag: "maxPeers"
      }
    },
    {
      name: "bootnodes",
      type: [String],
      configurable: true,
      process: (input: string) => {
        return input.split(",").map((input) => input.trim());
      },
      cli: {
        flag: "bootnodes"
      }
    },
    {
      name: "multiaddrs",
      type: [String],
      configurable: true,
      process: (input: string) => {
        return input.split(",").map((input) => input.trim());
      },
      cli: {
        flag: "multiaddrs"
      }
    },
  ]

*Defined in [packages/lodestar-cli/src/lodestar/network/options.ts:5](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/lodestar/network/options.ts#L5)*

###  name

• **name**: *string* = "network"

*Defined in [packages/lodestar-cli/src/lodestar/network/options.ts:4](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/lodestar/network/options.ts#L4)*
