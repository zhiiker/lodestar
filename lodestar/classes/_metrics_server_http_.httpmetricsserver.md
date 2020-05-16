[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["metrics/server/http"](../modules/_metrics_server_http_.md) › [HttpMetricsServer](_metrics_server_http_.httpmetricsserver.md)

# Class: HttpMetricsServer

## Hierarchy

* **HttpMetricsServer**

## Implements

* [IMetricsServer](../interfaces/_metrics_interface_.imetricsserver.md)

## Index

### Constructors

* [constructor](_metrics_server_http_.httpmetricsserver.md#constructor)

### Properties

* [http](_metrics_server_http_.httpmetricsserver.md#http)
* [logger](_metrics_server_http_.httpmetricsserver.md#private-logger)
* [metrics](_metrics_server_http_.httpmetricsserver.md#private-metrics)
* [opts](_metrics_server_http_.httpmetricsserver.md#private-opts)

### Methods

* [onRequest](_metrics_server_http_.httpmetricsserver.md#private-onrequest)
* [start](_metrics_server_http_.httpmetricsserver.md#start)
* [stop](_metrics_server_http_.httpmetricsserver.md#stop)

## Constructors

###  constructor

\+ **new HttpMetricsServer**(`opts`: [IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md), `__namedParameters`: object): *[HttpMetricsServer](_metrics_server_http_.httpmetricsserver.md)*

*Defined in [packages/lodestar/src/metrics/server/http.ts:15](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/metrics/server/http.ts#L15)*

**Parameters:**

▪ **opts**: *[IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`logger` | ILogger |
`metrics` | [IMetrics](../interfaces/_metrics_interface_.imetrics.md) |

**Returns:** *[HttpMetricsServer](_metrics_server_http_.httpmetricsserver.md)*

## Properties

###  http

• **http**: *Server*

*Defined in [packages/lodestar/src/metrics/server/http.ts:12](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/metrics/server/http.ts#L12)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/metrics/server/http.ts:15](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/metrics/server/http.ts#L15)*

___

### `Private` metrics

• **metrics**: *[IMetrics](../interfaces/_metrics_interface_.imetrics.md)*

*Defined in [packages/lodestar/src/metrics/server/http.ts:14](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/metrics/server/http.ts#L14)*

___

### `Private` opts

• **opts**: *[IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md)*

*Defined in [packages/lodestar/src/metrics/server/http.ts:13](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/metrics/server/http.ts#L13)*

## Methods

### `Private` onRequest

▸ **onRequest**(`req`: IncomingMessage, `res`: ServerResponse): *void*

*Defined in [packages/lodestar/src/metrics/server/http.ts:41](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/metrics/server/http.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`req` | IncomingMessage |
`res` | ServerResponse |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/metrics/server/http.ts:24](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/metrics/server/http.ts#L24)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/metrics/server/http.ts:31](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/metrics/server/http.ts#L31)*

**Returns:** *Promise‹void›*
