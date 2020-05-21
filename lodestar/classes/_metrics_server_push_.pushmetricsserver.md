[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["metrics/server/push"](../modules/_metrics_server_push_.md) › [PushMetricsServer](_metrics_server_push_.pushmetricsserver.md)

# Class: PushMetricsServer

## Hierarchy

* **PushMetricsServer**

## Implements

* [IMetricsServer](../interfaces/_metrics_interface_.imetricsserver.md)

## Index

### Constructors

* [constructor](_metrics_server_push_.pushmetricsserver.md#constructor)

### Properties

* [gateway](_metrics_server_push_.pushmetricsserver.md#private-gateway)
* [metrics](_metrics_server_push_.pushmetricsserver.md#private-metrics)
* [opts](_metrics_server_push_.pushmetricsserver.md#private-opts)

### Methods

* [start](_metrics_server_push_.pushmetricsserver.md#start)
* [stop](_metrics_server_push_.pushmetricsserver.md#stop)

## Constructors

###  constructor

\+ **new PushMetricsServer**(`opts`: [IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md), `__namedParameters`: object): *[PushMetricsServer](_metrics_server_push_.pushmetricsserver.md)*

*Defined in [packages/lodestar/src/metrics/server/push.ts:12](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/metrics/server/push.ts#L12)*

**Parameters:**

▪ **opts**: *[IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`metrics` | [IMetrics](../interfaces/_metrics_interface_.imetrics.md) |

**Returns:** *[PushMetricsServer](_metrics_server_push_.pushmetricsserver.md)*

## Properties

### `Private` gateway

• **gateway**: *Pushgateway | null* = null

*Defined in [packages/lodestar/src/metrics/server/push.ts:12](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/metrics/server/push.ts#L12)*

___

### `Private` metrics

• **metrics**: *[IMetrics](../interfaces/_metrics_interface_.imetrics.md)*

*Defined in [packages/lodestar/src/metrics/server/push.ts:10](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/metrics/server/push.ts#L10)*

___

### `Private` opts

• **opts**: *[IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md)*

*Defined in [packages/lodestar/src/metrics/server/push.ts:11](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/metrics/server/push.ts#L11)*

## Methods

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/metrics/server/push.ts:17](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/metrics/server/push.ts#L17)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/metrics/server/push.ts:20](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/metrics/server/push.ts#L20)*

**Returns:** *Promise‹void›*
