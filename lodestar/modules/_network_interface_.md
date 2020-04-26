[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/interface"](_network_interface_.md)

# External module: "network/interface"

## Index

### Interfaces

* [INetwork](../interfaces/_network_interface_.inetwork.md)
* [INetworkEvents](../interfaces/_network_interface_.inetworkevents.md)
* [IReqEvents](../interfaces/_network_interface_.ireqevents.md)
* [IReqResp](../interfaces/_network_interface_.ireqresp.md)
* [IRespEvents](../interfaces/_network_interface_.irespevents.md)

### Type aliases

* [NetworkEventEmitter](_network_interface_.md#networkeventemitter)
* [ReqEventEmitter](_network_interface_.md#reqeventemitter)
* [RespEventEmitter](_network_interface_.md#respeventemitter)
* [ResponseCallbackFn](_network_interface_.md#responsecallbackfn)
* [ResponseChunk](_network_interface_.md#responsechunk)

## Type aliases

###  NetworkEventEmitter

Ƭ **NetworkEventEmitter**: *StrictEventEmitter‹EventEmitter, [INetworkEvents](../interfaces/_network_interface_.inetworkevents.md)›*

*Defined in [packages/lodestar/src/network/interface.ts:58](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L58)*

___

###  ReqEventEmitter

Ƭ **ReqEventEmitter**: *StrictEventEmitter‹EventEmitter, [IReqEvents](../interfaces/_network_interface_.ireqevents.md)›*

*Defined in [packages/lodestar/src/network/interface.ts:36](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L36)*

___

###  RespEventEmitter

Ƭ **RespEventEmitter**: *StrictEventEmitter‹EventEmitter, [IRespEvents](../interfaces/_network_interface_.irespevents.md)›*

*Defined in [packages/lodestar/src/network/interface.ts:37](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L37)*

___

###  ResponseCallbackFn

Ƭ **ResponseCallbackFn**: *function*

*Defined in [packages/lodestar/src/network/interface.ts:24](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L24)*

#### Type declaration:

▸ (`responseIter`: AsyncIterable‹[ResponseChunk](_network_interface_.md#responsechunk)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`responseIter` | AsyncIterable‹[ResponseChunk](_network_interface_.md#responsechunk)› |

___

###  ResponseChunk

Ƭ **ResponseChunk**: *object*

*Defined in [packages/lodestar/src/network/interface.ts:26](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L26)*

#### Type declaration:

* **err**? : *[RpcError](../classes/_network_error_.rpcerror.md)*

* **output**? : *ResponseBody*
