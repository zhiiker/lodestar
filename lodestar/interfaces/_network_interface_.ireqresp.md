[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/interface"](../modules/_network_interface_.md) › [IReqResp](_network_interface_.ireqresp.md)

# Interface: IReqResp <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IReqEvents](_network_interface_.ireqevents.md), [IReqEvents](_network_interface_.ireqevents.md)› & object & object

  ↳ **IReqResp**

## Implemented by

* [ReqResp](../classes/_network_reqresp_.reqresp.md)

## Index

### Properties

* [ _emitType](_network_interface_.ireqresp.md#optional--_emittype)
* [ _emitterType](_network_interface_.ireqresp.md#optional--_emittertype)
* [ _eventsType](_network_interface_.ireqresp.md#optional--_eventstype)

### Methods

* [beaconBlocksByRange](_network_interface_.ireqresp.md#beaconblocksbyrange)
* [beaconBlocksByRoot](_network_interface_.ireqresp.md#beaconblocksbyroot)
* [goodbye](_network_interface_.ireqresp.md#goodbye)
* [metadata](_network_interface_.ireqresp.md#metadata)
* [ping](_network_interface_.ireqresp.md#ping)
* [sendResponse](_network_interface_.ireqresp.md#sendresponse)
* [sendResponseStream](_network_interface_.ireqresp.md#sendresponsestream)
* [status](_network_interface_.ireqresp.md#status)

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[ _emitType](_network_gossip_interface_.igossip.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[ _emitterType](_network_gossip_interface_.igossip.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[ _eventsType](_network_gossip_interface_.igossip.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

## Methods

###  beaconBlocksByRange

▸ **beaconBlocksByRange**(`peerInfo`: PeerInfo, `request`: BeaconBlocksByRangeRequest): *Promise‹SignedBeaconBlock[]›*

*Defined in [packages/lodestar/src/network/interface.ts:45](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/network/interface.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | BeaconBlocksByRangeRequest |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  beaconBlocksByRoot

▸ **beaconBlocksByRoot**(`peerInfo`: PeerInfo, `request`: BeaconBlocksByRootRequest): *Promise‹SignedBeaconBlock[]›*

*Defined in [packages/lodestar/src/network/interface.ts:46](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/network/interface.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | BeaconBlocksByRootRequest |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  goodbye

▸ **goodbye**(`peerInfo`: PeerInfo, `request`: [Goodbye](../enums/_constants_network_.method.md#goodbye)): *Promise‹void›*

*Defined in [packages/lodestar/src/network/interface.ts:42](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/network/interface.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | [Goodbye](../enums/_constants_network_.method.md#goodbye) |

**Returns:** *Promise‹void›*

___

###  metadata

▸ **metadata**(`peerInfo`: PeerInfo): *Promise‹Metadata›*

*Defined in [packages/lodestar/src/network/interface.ts:44](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/network/interface.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *Promise‹Metadata›*

___

###  ping

▸ **ping**(`peerInfo`: PeerInfo, `request`: [Ping](../enums/_constants_network_.method.md#ping)): *Promise‹[Ping](../enums/_constants_network_.method.md#ping)›*

*Defined in [packages/lodestar/src/network/interface.ts:43](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/network/interface.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | [Ping](../enums/_constants_network_.method.md#ping) |

**Returns:** *Promise‹[Ping](../enums/_constants_network_.method.md#ping)›*

___

###  sendResponse

▸ **sendResponse**(`id`: [RequestId](../modules/_constants_network_.md#requestid), `err`: [RpcError](../classes/_network_error_.rpcerror.md), `response?`: ResponseBody): *void*

*Defined in [packages/lodestar/src/network/interface.ts:40](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/network/interface.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`err` | [RpcError](../classes/_network_error_.rpcerror.md) |
`response?` | ResponseBody |

**Returns:** *void*

___

###  sendResponseStream

▸ **sendResponseStream**(`id`: [RequestId](../modules/_constants_network_.md#requestid), `err`: [RpcError](../classes/_network_error_.rpcerror.md), `chunkIter`: AsyncIterable‹ResponseBody›): *void*

*Defined in [packages/lodestar/src/network/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/network/interface.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`err` | [RpcError](../classes/_network_error_.rpcerror.md) |
`chunkIter` | AsyncIterable‹ResponseBody› |

**Returns:** *void*

___

###  status

▸ **status**(`peerInfo`: PeerInfo, `request`: Status): *Promise‹Status›*

*Defined in [packages/lodestar/src/network/interface.ts:41](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/network/interface.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | Status |

**Returns:** *Promise‹Status›*
