[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["api/interface"](../modules/_api_interface_.md) › [IApiClient](_api_interface_.iapiclient.md)

# Interface: IApiClient <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IApiClientEvents](_api_interface_.iapiclientevents.md), [IApiClientEvents](_api_interface_.iapiclientevents.md)› & object & object

  ↳ **IApiClient**

## Implemented by

* [AbstractApiClient](../classes/_api_abstract_.abstractapiclient.md)
* [ApiClientOverInstance](../classes/_api_impl_instance_.apiclientoverinstance.md)
* [ApiClientOverRest](../classes/_api_impl_rest_apiclient_.apiclientoverrest.md)

## Index

### Properties

* [ _emitType](_api_interface_.iapiclient.md#optional--_emittype)
* [ _emitterType](_api_interface_.iapiclient.md#optional--_emittertype)
* [ _eventsType](_api_interface_.iapiclient.md#optional--_eventstype)
* [beacon](_api_interface_.iapiclient.md#beacon)
* [url](_api_interface_.iapiclient.md#url)
* [validator](_api_interface_.iapiclient.md#validator)

### Methods

* [connect](_api_interface_.iapiclient.md#connect)
* [disconnect](_api_interface_.iapiclient.md#disconnect)
* [getCurrentSlot](_api_interface_.iapiclient.md#getcurrentslot)
* [onNewEpoch](_api_interface_.iapiclient.md#onnewepoch)
* [onNewSlot](_api_interface_.iapiclient.md#onnewslot)

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Inherited from [IApiClient](_api_interface_.iapiclient.md).[ _emitType](_api_interface_.iapiclient.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IApiClient](_api_interface_.iapiclient.md).[ _emitterType](_api_interface_.iapiclient.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IApiClient](_api_interface_.iapiclient.md).[ _eventsType](_api_interface_.iapiclient.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

###  beacon

• **beacon**: *[IBeaconApi](_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar-validator/src/api/interface.ts#L23)*

___

###  url

• **url**: *string*

*Defined in [packages/lodestar-validator/src/api/interface.ts:27](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar-validator/src/api/interface.ts#L27)*

___

###  validator

• **validator**: *[IValidatorApi](_api_interface_validators_.ivalidatorapi.md)*

*Defined in [packages/lodestar-validator/src/api/interface.ts:25](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar-validator/src/api/interface.ts#L25)*

## Methods

###  connect

▸ **connect**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/interface.ts:32](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar-validator/src/api/interface.ts#L32)*

Initiates connection to rpc server.

**Returns:** *Promise‹void›*

___

###  disconnect

▸ **disconnect**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/interface.ts:37](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar-validator/src/api/interface.ts#L37)*

Destroys connection to rpc server.

**Returns:** *Promise‹void›*

___

###  getCurrentSlot

▸ **getCurrentSlot**(): *Slot*

*Defined in [packages/lodestar-validator/src/api/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar-validator/src/api/interface.ts#L39)*

**Returns:** *Slot*

___

###  onNewEpoch

▸ **onNewEpoch**(`cb`: [INewEpochCallback](_api_interface_.inewepochcallback.md)): *void*

*Defined in [packages/lodestar-validator/src/api/interface.ts:54](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar-validator/src/api/interface.ts#L54)*

Invokes callback on new epoch.
Depending on implementation it will poll for new epoch or getting notified(Websockets)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | [INewEpochCallback](_api_interface_.inewepochcallback.md) |   |

**Returns:** *void*

___

###  onNewSlot

▸ **onNewSlot**(`cb`: [INewSlotCallback](_api_interface_.inewslotcallback.md)): *void*

*Defined in [packages/lodestar-validator/src/api/interface.ts:46](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar-validator/src/api/interface.ts#L46)*

Invokes callback on new slot.
Depending on implementation it will poll for new slot or getting notified(Websockets)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | [INewSlotCallback](_api_interface_.inewslotcallback.md) |   |

**Returns:** *void*
