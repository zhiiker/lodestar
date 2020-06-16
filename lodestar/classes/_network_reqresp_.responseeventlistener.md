[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/reqResp"](../modules/_network_reqresp_.md) › [ResponseEventListener](_network_reqresp_.responseeventlistener.md)

# Class: ResponseEventListener <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IRespEvents](../interfaces/_network_interface_.irespevents.md), [IRespEvents](../interfaces/_network_interface_.irespevents.md), this› & object & object

  ↳ **ResponseEventListener**

## Index

### Properties

* [ _emitType](_network_reqresp_.responseeventlistener.md#optional--_emittype)
* [ _emitterType](_network_reqresp_.responseeventlistener.md#optional--_emittertype)
* [ _eventsType](_network_reqresp_.responseeventlistener.md#optional--_eventstype)

### Methods

* [waitForResponse](_network_reqresp_.responseeventlistener.md#waitforresponse)

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitterType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _eventsType](../interfaces/_network_gossip_interface_.igossip.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

## Methods

###  waitForResponse

▸ **waitForResponse**(`requestId`: string, `responseListener`: [ResponseCallbackFn](../modules/_network_interface_.md#responsecallbackfn)): *Timeout*

*Defined in [packages/lodestar/src/network/reqResp.ts:55](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar/src/network/reqResp.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`requestId` | string |
`responseListener` | [ResponseCallbackFn](../modules/_network_interface_.md#responsecallbackfn) |

**Returns:** *Timeout*
