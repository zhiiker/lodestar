[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["api/abstract"](../modules/_api_abstract_.md) › [AbstractApiClient](_api_abstract_.abstractapiclient.md)

# Class: AbstractApiClient <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IApiClientEvents](../interfaces/_api_interface_.iapiclientevents.md), [IApiClientEvents](../interfaces/_api_interface_.iapiclientevents.md), this› & object & object

  ↳ **AbstractApiClient**

  ↳ [ApiClientOverInstance](_api_impl_instance_.apiclientoverinstance.md)

  ↳ [ApiClientOverRest](_api_impl_rest_apiclient_.apiclientoverrest.md)

## Implements

* [IApiClient](../interfaces/_api_interface_.iapiclient.md)

## Index

### Properties

* [ _emitType](_api_abstract_.abstractapiclient.md#optional--_emittype)
* [ _emitterType](_api_abstract_.abstractapiclient.md#optional--_emittertype)
* [ _eventsType](_api_abstract_.abstractapiclient.md#optional--_eventstype)
* [beacon](_api_abstract_.abstractapiclient.md#abstract-beacon)
* [beaconNodeInterval](_api_abstract_.abstractapiclient.md#private-beaconnodeinterval)
* [config](_api_abstract_.abstractapiclient.md#protected-config)
* [currentEpoch](_api_abstract_.abstractapiclient.md#private-currentepoch)
* [currentSlot](_api_abstract_.abstractapiclient.md#private-currentslot)
* [newEpochCallbacks](_api_abstract_.abstractapiclient.md#private-newepochcallbacks)
* [newSlotCallbacks](_api_abstract_.abstractapiclient.md#private-newslotcallbacks)
* [running](_api_abstract_.abstractapiclient.md#private-running)
* [slotCountingTimeout](_api_abstract_.abstractapiclient.md#private-slotcountingtimeout)
* [url](_api_abstract_.abstractapiclient.md#abstract-url)
* [validator](_api_abstract_.abstractapiclient.md#abstract-validator)

### Methods

* [connect](_api_abstract_.abstractapiclient.md#connect)
* [disconnect](_api_abstract_.abstractapiclient.md#disconnect)
* [getCurrentSlot](_api_abstract_.abstractapiclient.md#getcurrentslot)
* [onNewEpoch](_api_abstract_.abstractapiclient.md#onnewepoch)
* [onNewSlot](_api_abstract_.abstractapiclient.md#onnewslot)
* [pollBeaconNode](_api_abstract_.abstractapiclient.md#private-pollbeaconnode)
* [startSlotCounting](_api_abstract_.abstractapiclient.md#private-startslotcounting)
* [updateEpoch](_api_abstract_.abstractapiclient.md#private-updateepoch)
* [updateSlot](_api_abstract_.abstractapiclient.md#private-updateslot)

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

### `Abstract` beacon

• **beacon**: *[IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md).[beacon](../interfaces/_api_interface_.iapiclient.md#beacon)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:26](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L26)*

___

### `Private` beaconNodeInterval

• **beaconNodeInterval**: *Timeout*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:22](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L22)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:15](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L15)*

___

### `Private` currentEpoch

• **currentEpoch**: *Epoch* = 0

*Defined in [packages/lodestar-validator/src/api/abstract.ts:18](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L18)*

___

### `Private` currentSlot

• **currentSlot**: *Slot* = 0

*Defined in [packages/lodestar-validator/src/api/abstract.ts:17](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L17)*

___

### `Private` newEpochCallbacks

• **newEpochCallbacks**: *[INewEpochCallback](../interfaces/_api_interface_.inewepochcallback.md)[]* = []

*Defined in [packages/lodestar-validator/src/api/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L20)*

___

### `Private` newSlotCallbacks

• **newSlotCallbacks**: *[INewSlotCallback](../interfaces/_api_interface_.inewslotcallback.md)[]* = []

*Defined in [packages/lodestar-validator/src/api/abstract.ts:19](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L19)*

___

### `Private` running

• **running**: *boolean* = false

*Defined in [packages/lodestar-validator/src/api/abstract.ts:21](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L21)*

___

### `Private` slotCountingTimeout

• **slotCountingTimeout**: *Timeout*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:23](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L23)*

___

### `Abstract` url

• **url**: *string*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md).[url](../interfaces/_api_interface_.iapiclient.md#url)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:25](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L25)*

___

### `Abstract` validator

• **validator**: *[IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md).[validator](../interfaces/_api_interface_.iapiclient.md#validator)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:27](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L27)*

## Methods

###  connect

▸ **connect**(): *Promise‹void›*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:41](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L41)*

**Returns:** *Promise‹void›*

___

###  disconnect

▸ **disconnect**(): *Promise‹void›*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:46](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L46)*

**Returns:** *Promise‹void›*

___

###  getCurrentSlot

▸ **getCurrentSlot**(): *Slot*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:56](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L56)*

**Returns:** *Slot*

___

###  onNewEpoch

▸ **onNewEpoch**(`cb`: [INewEpochCallback](../interfaces/_api_interface_.inewepochcallback.md)): *void*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:29](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [INewEpochCallback](../interfaces/_api_interface_.inewepochcallback.md) |

**Returns:** *void*

___

###  onNewSlot

▸ **onNewSlot**(`cb`: [INewSlotCallback](../interfaces/_api_interface_.inewslotcallback.md)): *void*

*Implementation of [IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:35](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [INewSlotCallback](../interfaces/_api_interface_.inewslotcallback.md) |

**Returns:** *void*

___

### `Private` pollBeaconNode

▸ **pollBeaconNode**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:60](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L60)*

**Returns:** *Promise‹void›*

___

### `Private` startSlotCounting

▸ **startSlotCounting**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:71](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L71)*

**Returns:** *Promise‹void›*

___

### `Private` updateEpoch

▸ **updateEpoch**(`slot`: Slot): *void*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:102](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *void*

___

### `Private` updateSlot

▸ **updateSlot**(): *void*

*Defined in [packages/lodestar-validator/src/api/abstract.ts:87](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-validator/src/api/abstract.ts#L87)*

**Returns:** *void*
