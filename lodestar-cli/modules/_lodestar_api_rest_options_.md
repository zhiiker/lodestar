[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/api/rest/options"](_lodestar_api_rest_options_.md)

# External module: "lodestar/api/rest/options"

## Index

### Object literals

* [RestOptions](_lodestar_api_rest_options_.md#const-restoptions)

## Object literals

### `Const` RestOptions

### ▪ **RestOptions**: *object*

*Defined in [packages/lodestar-cli/src/lodestar/api/rest/options.ts:4](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-cli/src/lodestar/api/rest/options.ts#L4)*

###  description

• **description**: *string* = "Options to configure rest api server"

*Defined in [packages/lodestar-cli/src/lodestar/api/rest/options.ts:6](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-cli/src/lodestar/api/rest/options.ts#L6)*

###  fields

• **fields**: *[IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)‹unknown›[]* = [
    booleanOption("enabled", "rest"),
    {
      name: "api",
      type: "string",
      process: processApiNamespaces,
      configurable: true,
      cli: {
        flag: "restApi"
      }
    },
    {
      name: "host",
      type: "string",
      configurable: true,
      cli: {
        flag: "restHost"
      }
    },
    {
      name: "port",
      type: "number",
      configurable: true,
      cli: {
        flag: "restPort"
      }
    },
    {
      name: "cors",
      type: "string",
      configurable: true,
      cli: {
        flag: "restCors"
      }
    }
  ]

*Defined in [packages/lodestar-cli/src/lodestar/api/rest/options.ts:7](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-cli/src/lodestar/api/rest/options.ts#L7)*

###  name

• **name**: *string* = "rest"

*Defined in [packages/lodestar-cli/src/lodestar/api/rest/options.ts:5](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-cli/src/lodestar/api/rest/options.ts#L5)*
