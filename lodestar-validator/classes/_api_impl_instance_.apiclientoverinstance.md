[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["api/impl/instance"](../modules/_api_impl_instance_.md) › [ApiClientOverInstance](_api_impl_instance_.apiclientoverinstance.md)

# Class: ApiClientOverInstance <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

  ↳ [AbstractApiClient](_api_abstract_.abstractapiclient.md)

  ↳ **ApiClientOverInstance**

## Implements

* [IApiClient](../interfaces/_api_interface_.iapiclient.md)

## Index

### Constructors

* [constructor](_api_impl_instance_.apiclientoverinstance.md#constructor)

### Properties

* [ _emitType](_api_impl_instance_.apiclientoverinstance.md#optional--_emittype)
* [ _emitterType](_api_impl_instance_.apiclientoverinstance.md#optional--_emittertype)
* [ _eventsType](_api_impl_instance_.apiclientoverinstance.md#optional--_eventstype)
* [beacon](_api_impl_instance_.apiclientoverinstance.md#beacon)
* [config](_api_impl_instance_.apiclientoverinstance.md#protected-config)
* [url](_api_impl_instance_.apiclientoverinstance.md#url)
* [validator](_api_impl_instance_.apiclientoverinstance.md#validator)

### Methods

* [connect](_api_impl_instance_.apiclientoverinstance.md#connect)
* [disconnect](_api_impl_instance_.apiclientoverinstance.md#disconnect)
* [getCurrentSlot](_api_impl_instance_.apiclientoverinstance.md#getcurrentslot)
* [onNewEpoch](_api_impl_instance_.apiclientoverinstance.md#onnewepoch)
* [onNewSlot](_api_impl_instance_.apiclientoverinstance.md#onnewslot)

## Constructors

###  constructor

\+ **new ApiClientOverInstance**(`opts`: [IApiClientOverInstanceOpts](../interfaces/_api_impl_instance_.iapiclientoverinstanceopts.md)): *[ApiClientOverInstance](_api_impl_instance_.apiclientoverinstance.md)*

*Defined in [packages/lodestar-validator/src/api/impl/instance.ts:18](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/impl/instance.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IApiClientOverInstanceOpts](../interfaces/_api_impl_instance_.iapiclientoverinstanceopts.md) |

**Returns:** *[ApiClientOverInstance](_api_impl_instance_.apiclientoverinstance.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md).[ _emitType](../interfaces/_api_interface_.iapiclient.md#optional--_emittype)*

*Inherited from [IApiClient](../interfaces/_api_interface_.iapiclient.md).[ _emitType](../interfaces/_api_interface_.iapiclient.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md).[ _emitterType](../interfaces/_api_interface_.iapiclient.md#optional--_emittertype)*

*Inherited from [IApiClient](../interfaces/_api_interface_.iapiclient.md).[ _emitterType](../interfaces/_api_interface_.iapiclient.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md).[ _eventsType](../interfaces/_api_interface_.iapiclient.md#optional--_eventstype)*

*Inherited from [IApiClient](../interfaces/_api_interface_.iapiclient.md).[ _eventsType](../interfaces/_api_interface_.iapiclient.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

###  beacon

• **beacon**: *[IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md).[beacon](../interfaces/_api_interface_.iapiclient.md#beacon)*

*Overrides [AbstractApiClient](_api_abstract_.abstractapiclient.md).[beacon](_api_abstract_.abstractapiclient.md#abstract-beacon)*

*Defined in [packages/lodestar-validator/src/api/impl/instance.ts:16](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/impl/instance.ts#L16)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [AbstractApiClient](_api_abstract_.abstractapiclient.md).[config](_api_abstract_.abstractapiclient.md#protected-config)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:15](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/abstract.ts#L15)*

___

###  url

• **url**: *string* = "inmemory"

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md).[url](../interfaces/_api_interface_.iapiclient.md#url)*

*Overrides [AbstractApiClient](_api_abstract_.abstractapiclient.md).[url](_api_abstract_.abstractapiclient.md#abstract-url)*

*Defined in [packages/lodestar-validator/src/api/impl/instance.ts:14](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/impl/instance.ts#L14)*

___

###  validator

• **validator**: *[IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md).[validator](../interfaces/_api_interface_.iapiclient.md#validator)*

*Overrides [AbstractApiClient](_api_abstract_.abstractapiclient.md).[validator](_api_abstract_.abstractapiclient.md#abstract-validator)*

*Defined in [packages/lodestar-validator/src/api/impl/instance.ts:18](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/impl/instance.ts#L18)*

## Methods

###  connect

▸ **connect**(): *Promise‹void›*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Overrides [AbstractApiClient](_api_abstract_.abstractapiclient.md).[connect](_api_abstract_.abstractapiclient.md#connect)*

*Defined in [packages/lodestar-validator/src/api/impl/instance.ts:27](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/impl/instance.ts#L27)*

**Returns:** *Promise‹void›*

___

###  disconnect

▸ **disconnect**(): *Promise‹void›*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Overrides [AbstractApiClient](_api_abstract_.abstractapiclient.md).[disconnect](_api_abstract_.abstractapiclient.md#disconnect)*

*Defined in [packages/lodestar-validator/src/api/impl/instance.ts:31](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/impl/instance.ts#L31)*

**Returns:** *Promise‹void›*

___

###  getCurrentSlot

▸ **getCurrentSlot**(): *Slot*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Inherited from [AbstractApiClient](_api_abstract_.abstractapiclient.md).[getCurrentSlot](_api_abstract_.abstractapiclient.md#getcurrentslot)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:56](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/abstract.ts#L56)*

**Returns:** *Slot*

___

###  onNewEpoch

▸ **onNewEpoch**(`cb`: [INewEpochCallback](../interfaces/_api_interface_.inewepochcallback.md)): *void*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Inherited from [AbstractApiClient](_api_abstract_.abstractapiclient.md).[onNewEpoch](_api_abstract_.abstractapiclient.md#onnewepoch)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:29](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/abstract.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [INewEpochCallback](../interfaces/_api_interface_.inewepochcallback.md) |

**Returns:** *void*

___

###  onNewSlot

▸ **onNewSlot**(`cb`: [INewSlotCallback](../interfaces/_api_interface_.inewslotcallback.md)): *void*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Inherited from [AbstractApiClient](_api_abstract_.abstractapiclient.md).[onNewSlot](_api_abstract_.abstractapiclient.md#onnewslot)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:35](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar-validator/src/api/abstract.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [INewSlotCallback](../interfaces/_api_interface_.inewslotcallback.md) |

**Returns:** *void*
