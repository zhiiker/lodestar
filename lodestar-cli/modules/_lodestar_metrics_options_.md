[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/metrics/options"](_lodestar_metrics_options_.md)

# External module: "lodestar/metrics/options"

## Index

### Object literals

* [MetricsOptions](_lodestar_metrics_options_.md#const-metricsoptions)

## Object literals

### `Const` MetricsOptions

### ▪ **MetricsOptions**: *object*

*Defined in [packages/lodestar-cli/src/lodestar/metrics/options.ts:3](https://github.com/ChainSafe/lodestar/blob/16dbdb2e2/packages/lodestar-cli/src/lodestar/metrics/options.ts#L3)*

###  fields

• **fields**: *object | object[]* = [
    {
      name: "serverPort",
      type: "number",
      configurable: true,
      process: (input: string) => parseInt(input),
      cli: {
        flag: "metricsPort",
      },
    },
    {
      name: "boolean",
      type: "bool",
      configurable: true,
      cli: {
        flag: "metricsEnabled"
      }
    }
  ]

*Defined in [packages/lodestar-cli/src/lodestar/metrics/options.ts:5](https://github.com/ChainSafe/lodestar/blob/16dbdb2e2/packages/lodestar-cli/src/lodestar/metrics/options.ts#L5)*

###  name

• **name**: *string* = "metrics"

*Defined in [packages/lodestar-cli/src/lodestar/metrics/options.ts:4](https://github.com/ChainSafe/lodestar/blob/16dbdb2e2/packages/lodestar-cli/src/lodestar/metrics/options.ts#L4)*
