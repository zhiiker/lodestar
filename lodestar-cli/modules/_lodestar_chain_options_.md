[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/chain/options"](_lodestar_chain_options_.md)

# External module: "lodestar/chain/options"

## Index

### Object literals

* [ChainOptions](_lodestar_chain_options_.md#const-chainoptions)

## Object literals

### `Const` ChainOptions

### ▪ **ChainOptions**: *object*

*Defined in [packages/lodestar-cli/src/lodestar/chain/options.ts:3](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodestar/chain/options.ts#L3)*

###  description

• **description**: *string* = "Chain specific configurations"

*Defined in [packages/lodestar-cli/src/lodestar/chain/options.ts:5](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodestar/chain/options.ts#L5)*

###  fields

• **fields**: *object | object[]* = [
    {
      name: "name",
      description: "Chain preset. Supported values: mainnet, minimal",
      validation: (input) => {
        return input === "mainnet" || input === "minimal";
      },
      type: "string",
      configurable: true,
      cli: {
        flag: "chain",
        short: "c"
      }
    },
    {
      name: "dumpState",
      description: "dump the state and blocks to disk",
      type: "boolean",
      configurable: true,
      cli: {
        flag: "dump",
      }
    }
  ]

*Defined in [packages/lodestar-cli/src/lodestar/chain/options.ts:6](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodestar/chain/options.ts#L6)*

###  name

• **name**: *string* = "chain"

*Defined in [packages/lodestar-cli/src/lodestar/chain/options.ts:4](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodestar/chain/options.ts#L4)*
