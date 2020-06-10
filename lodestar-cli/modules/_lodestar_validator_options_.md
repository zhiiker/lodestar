[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/validator/options"](_lodestar_validator_options_.md)

# External module: "lodestar/validator/options"

## Index

### Object literals

* [validatorClientCliConfiguration](_lodestar_validator_options_.md#const-validatorclientcliconfiguration)

## Object literals

### `Const` validatorClientCliConfiguration

### ▪ **validatorClientCliConfiguration**: *object*

*Defined in [packages/lodestar-cli/src/lodestar/validator/options.ts:6](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodestar/validator/options.ts#L6)*

###  fields

• **fields**: *object | object | object[]* = [
    {
      name: "db",
      fields: [
        {
          name: "name",
          type: String,
          configurable: true,
          cli: {
            flag: "validatorDb"
          }
        }
      ]
    },
    {
      name: "api",
      type: String,
      configurable: true,
      description: "Url to beacon node rest api",
      cli: {
        flag: "restApi"
      }
    },
    {
      name: "validatorKey",
      type: String,
      description: "Hex encoded private key or path to keystore",
      configurable: true,
      cli: {
        flag: "validatorKey"
      }
    },
    {
      name: "config",
      type: Object,
      description: "Either 'mainnet' or 'minimal'",
      process: (presetName: string) => {
        if(presetName === "minimal") {
          return minimalConfig;
        }
        return mainnetConfig;
      },
      configurable: true,
      cli: {
        flag: "chainConfig"
      }
    },
    {
      name: "logLevel",
      type: String,
      description: "One of available log levels",
      configurable: true,
      cli: {
        flag: "logLevel"
      }
    }
  ]

*Defined in [packages/lodestar-cli/src/lodestar/validator/options.ts:8](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodestar/validator/options.ts#L8)*

###  name

• **name**: *string* = "validator"

*Defined in [packages/lodestar-cli/src/lodestar/validator/options.ts:7](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodestar/validator/options.ts#L7)*
