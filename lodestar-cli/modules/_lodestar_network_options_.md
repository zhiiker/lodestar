[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/network/options"](_lodestar_network_options_.md)

# External module: "lodestar/network/options"

## Index

### Object literals

* [Discv5Options](_lodestar_network_options_.md#const-discv5options)
* [NetworkOptions](_lodestar_network_options_.md#const-networkoptions)

## Object literals

### `Const` Discv5Options

### ▪ **Discv5Options**: *object*

*Defined in [packages/lodestar-cli/src/lodestar/network/options.ts:3](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodestar/network/options.ts#L3)*

###  fields

• **fields**: *object[]* = [
    {
      name: "bindAddr",
      type: "string",
      configurable: true,
      cli: {
        flag: "bindAddr"
      }
    }
  ]

*Defined in [packages/lodestar-cli/src/lodestar/network/options.ts:5](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodestar/network/options.ts#L5)*

###  name

• **name**: *string* = "discv5"

*Defined in [packages/lodestar-cli/src/lodestar/network/options.ts:4](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodestar/network/options.ts#L4)*

___

### `Const` NetworkOptions

### ▪ **NetworkOptions**: *object*

*Defined in [packages/lodestar-cli/src/lodestar/network/options.ts:17](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodestar/network/options.ts#L17)*

###  fields

• **fields**: *[IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) | object | object[]* = [
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
    Discv5Options
  ]

*Defined in [packages/lodestar-cli/src/lodestar/network/options.ts:19](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodestar/network/options.ts#L19)*

###  name

• **name**: *string* = "network"

*Defined in [packages/lodestar-cli/src/lodestar/network/options.ts:18](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodestar/network/options.ts#L18)*
