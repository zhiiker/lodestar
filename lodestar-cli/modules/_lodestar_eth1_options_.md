[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/eth1/options"](_lodestar_eth1_options_.md)

# External module: "lodestar/eth1/options"

## Index

### Object literals

* [Eth1Options](_lodestar_eth1_options_.md#const-eth1options)

## Object literals

### `Const` Eth1Options

### ▪ **Eth1Options**: *object*

*Defined in [packages/lodestar-cli/src/lodestar/eth1/options.ts:3](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-cli/src/lodestar/eth1/options.ts#L3)*

###  description

• **description**: *string* = "Eth 1.x options"

*Defined in [packages/lodestar-cli/src/lodestar/eth1/options.ts:5](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-cli/src/lodestar/eth1/options.ts#L5)*

###  fields

• **fields**: *object[]* = [
    {
      name: "provider",
      fields: [
        {
          name: "url",
          description: "Url to eth1 node with enabled rpc api",
          type: String,
          configurable: true,
          cli: {
            flag: "eth1RpcUrl"
          }
        },
        {
          name: "network",
          description: "Eth1 network id",
          type: "number",
          process: (input) => {
            return parseInt(input);
          },
          configurable: true,
          cli: {
            flag: "networkId"
          }
        }
      ]
    },
    {
      name: "depositContract",
      fields: [
        {
          name: "deployedAt",
          description: "Block number at which contract is deployed",
          type: "number",
          configurable: true,
          process: (input) => {
            return parseInt(input);
          },
          cli: {
            flag: "depositContractBlockNum"
          }
        },
        {
          name: "address",
          description: "Address of deposit contract",
          type: String,
          configurable: true,
          cli: {
            flag: "depositContract"
          }
        }
      ]
    }
  ]

*Defined in [packages/lodestar-cli/src/lodestar/eth1/options.ts:6](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-cli/src/lodestar/eth1/options.ts#L6)*

###  name

• **name**: *string* = "eth1"

*Defined in [packages/lodestar-cli/src/lodestar/eth1/options.ts:4](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-cli/src/lodestar/eth1/options.ts#L4)*
