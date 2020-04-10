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

*Defined in [packages/lodestar/src/network/interface.ts:53](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/interface.ts#L53)*

___

###  ReqEventEmitter

Ƭ **ReqEventEmitter**: *StrictEventEmitter‹EventEmitter, [IReqEvents](../interfaces/_network_interface_.ireqevents.md)›*

*Defined in [packages/lodestar/src/network/interface.ts:33](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/interface.ts#L33)*

___

###  RespEventEmitter

Ƭ **RespEventEmitter**: *StrictEventEmitter‹EventEmitter, [IRespEvents](../interfaces/_network_interface_.irespevents.md)›*

*Defined in [packages/lodestar/src/network/interface.ts:34](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/interface.ts#L34)*

___

###  ResponseCallbackFn

Ƭ **ResponseCallbackFn**: *function*

*Defined in [packages/lodestar/src/network/interface.ts:21](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/interface.ts#L21)*

#### Type declaration:

▸ (`responseIter`: AsyncIterable‹[ResponseChunk](_network_interface_.md#responsechunk)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`responseIter` | AsyncIterable‹[ResponseChunk](_network_interface_.md#responsechunk)› |

___

###  ResponseChunk

Ƭ **ResponseChunk**: *object*

*Defined in [packages/lodestar/src/network/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/interface.ts#L23)*

#### Type declaration:

* **err**? : *[RpcError](../classes/_network_error_.rpcerror.md)*

* **output**? : *ResponseBody*
