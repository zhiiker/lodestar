[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/index"](../modules/_api_index_.md) › [ApiService](_api_index_.apiservice.md)

# Class: ApiService

## Hierarchy

* **ApiService**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md)

## Index

### Constructors

* [constructor](_api_index_.apiservice.md#constructor)

### Properties

* [opts](_api_index_.apiservice.md#private-opts)
* [rest](_api_index_.apiservice.md#private-rest)

### Methods

* [setupRestApi](_api_index_.apiservice.md#private-setuprestapi)
* [start](_api_index_.apiservice.md#start)
* [stop](_api_index_.apiservice.md#stop)

## Constructors

###  constructor

\+ **new ApiService**(`opts`: Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)›, `modules`: [IApiModules](../interfaces/_api_interface_.iapimodules.md)): *[ApiService](_api_index_.apiservice.md)*

*Defined in [packages/lodestar/src/api/index.ts:21](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar/src/api/index.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)› |
`modules` | [IApiModules](../interfaces/_api_interface_.iapimodules.md) |

**Returns:** *[ApiService](_api_index_.apiservice.md)*

## Properties

### `Private` opts

• **opts**: *[IApiOptions](../interfaces/_api_options_.iapioptions.md)*

*Defined in [packages/lodestar/src/api/index.ts:19](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar/src/api/index.ts#L19)*

___

### `Private` rest

• **rest**: *[IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/api/index.ts:21](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar/src/api/index.ts#L21)*

## Methods

### `Private` setupRestApi

▸ **setupRestApi**(`modules`: [IApiModules](../interfaces/_api_interface_.iapimodules.md)): *[RestApi](_api_rest_index_.restapi.md)*

*Defined in [packages/lodestar/src/api/index.ts:42](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar/src/api/index.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`modules` | [IApiModules](../interfaces/_api_interface_.iapimodules.md) |

**Returns:** *[RestApi](_api_rest_index_.restapi.md)*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/api/index.ts:30](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar/src/api/index.ts#L30)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/api/index.ts:36](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar/src/api/index.ts#L36)*

**Returns:** *Promise‹void›*
