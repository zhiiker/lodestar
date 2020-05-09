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

## Type aliases

###  NetworkEventEmitter

Ƭ **NetworkEventEmitter**: *StrictEventEmitter‹EventEmitter, [INetworkEvents](../interfaces/_network_interface_.inetworkevents.md)›*

*Defined in [packages/lodestar/src/network/interface.ts:55](https://github.com/ChainSafe/lodestar/blob/16dbdb2e2/packages/lodestar/src/network/interface.ts#L55)*

___

###  ReqEventEmitter

Ƭ **ReqEventEmitter**: *StrictEventEmitter‹EventEmitter, [IReqEvents](../interfaces/_network_interface_.ireqevents.md)›*

*Defined in [packages/lodestar/src/network/interface.ts:35](https://github.com/ChainSafe/lodestar/blob/16dbdb2e2/packages/lodestar/src/network/interface.ts#L35)*

___

###  RespEventEmitter

Ƭ **RespEventEmitter**: *StrictEventEmitter‹EventEmitter, [IRespEvents](../interfaces/_network_interface_.irespevents.md)›*

*Defined in [packages/lodestar/src/network/interface.ts:36](https://github.com/ChainSafe/lodestar/blob/16dbdb2e2/packages/lodestar/src/network/interface.ts#L36)*

___

###  ResponseCallbackFn

Ƭ **ResponseCallbackFn**: *function*

*Defined in [packages/lodestar/src/network/interface.ts:25](https://github.com/ChainSafe/lodestar/blob/16dbdb2e2/packages/lodestar/src/network/interface.ts#L25)*

#### Type declaration:

▸ (`responseIter`: AsyncIterable‹[IResponseChunk](../interfaces/_network_encoders_interface_.iresponsechunk.md)›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`responseIter` | AsyncIterable‹[IResponseChunk](../interfaces/_network_encoders_interface_.iresponsechunk.md)› |
