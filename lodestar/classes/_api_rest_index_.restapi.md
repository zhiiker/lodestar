[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/index"](../modules/_api_rest_index_.md) › [RestApi](_api_rest_index_.restapi.md)

# Class: RestApi

## Hierarchy

* **RestApi**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md)

## Index

### Constructors

* [constructor](_api_rest_index_.restapi.md#constructor)

### Properties

* [logger](_api_rest_index_.restapi.md#private-logger)
* [opts](_api_rest_index_.restapi.md#private-opts)
* [server](_api_rest_index_.restapi.md#server)

### Methods

* [setupServer](_api_rest_index_.restapi.md#private-setupserver)
* [start](_api_rest_index_.restapi.md#start)
* [stop](_api_rest_index_.restapi.md#stop)

## Constructors

###  constructor

\+ **new RestApi**(`opts`: [IRestApiOptions](../interfaces/_api_rest_options_.irestapioptions.md), `modules`: [IRestApiModules](../interfaces/_api_rest_interface_.irestapimodules.md)): *[RestApi](_api_rest_index_.restapi.md)*

*Defined in [packages/lodestar/src/api/rest/index.ts:18](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/api/rest/index.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IRestApiOptions](../interfaces/_api_rest_options_.irestapioptions.md) |
`modules` | [IRestApiModules](../interfaces/_api_rest_interface_.irestapimodules.md) |

**Returns:** *[RestApi](_api_rest_index_.restapi.md)*

## Properties

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/api/rest/index.ts:18](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/api/rest/index.ts#L18)*

___

### `Private` opts

• **opts**: *[IRestApiOptions](../interfaces/_api_rest_options_.irestapioptions.md)*

*Defined in [packages/lodestar/src/api/rest/index.ts:17](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/api/rest/index.ts#L17)*

___

###  server

• **server**: *FastifyInstance*

*Defined in [packages/lodestar/src/api/rest/index.ts:15](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/api/rest/index.ts#L15)*

## Methods

### `Private` setupServer

▸ **setupServer**(`modules`: [IRestApiModules](../interfaces/_api_rest_interface_.irestapimodules.md)): *FastifyInstance*

*Defined in [packages/lodestar/src/api/rest/index.ts:43](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/api/rest/index.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`modules` | [IRestApiModules](../interfaces/_api_rest_interface_.irestapimodules.md) |

**Returns:** *FastifyInstance*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/api/rest/index.ts:29](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/api/rest/index.ts#L29)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/api/rest/index.ts:39](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/api/rest/index.ts#L39)*

**Returns:** *Promise‹void›*
