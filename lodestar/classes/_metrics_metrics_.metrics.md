[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["metrics/metrics"](../modules/_metrics_metrics_.md) › [Metrics](_metrics_metrics_.metrics.md)

# Class: Metrics

## Hierarchy

* **Metrics**

  ↳ [BeaconMetrics](_metrics_beacon_.beaconmetrics.md)

## Implements

* [IMetrics](../interfaces/_metrics_interface_.imetrics.md)

## Index

### Constructors

* [constructor](_metrics_metrics_.metrics.md#constructor)

### Properties

* [defaultInterval](_metrics_metrics_.metrics.md#private-defaultinterval)
* [opts](_metrics_metrics_.metrics.md#private-opts)
* [registry](_metrics_metrics_.metrics.md#registry)

### Methods

* [start](_metrics_metrics_.metrics.md#start)
* [stop](_metrics_metrics_.metrics.md#stop)

## Constructors

###  constructor

\+ **new Metrics**(`opts`: [IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md)): *[Metrics](_metrics_metrics_.metrics.md)*

*Defined in [packages/lodestar/src/metrics/metrics.ts:14](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/metrics/metrics.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md) |

**Returns:** *[Metrics](_metrics_metrics_.metrics.md)*

## Properties

### `Private` defaultInterval

• **defaultInterval**: *Timeout | null* = null

*Defined in [packages/lodestar/src/metrics/metrics.ts:13](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/metrics/metrics.ts#L13)*

___

### `Private` opts

• **opts**: *[IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md)*

*Defined in [packages/lodestar/src/metrics/metrics.ts:14](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/metrics/metrics.ts#L14)*

___

###  registry

• **registry**: *Registry*

*Implementation of [IMetrics](../interfaces/_metrics_interface_.imetrics.md).[registry](../interfaces/_metrics_interface_.imetrics.md#registry)*

*Defined in [packages/lodestar/src/metrics/metrics.ts:11](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/metrics/metrics.ts#L11)*

## Methods

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/metrics/metrics.ts:21](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/metrics/metrics.ts#L21)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/metrics/metrics.ts:28](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/metrics/metrics.ts#L28)*

**Returns:** *Promise‹void›*
