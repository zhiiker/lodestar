[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/reqResp"](../modules/_network_reqresp_.md) › [ReqResp](_network_reqresp_.reqresp.md)

# Class: ReqResp <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IReqEvents](../interfaces/_network_interface_.ireqevents.md), [IReqEvents](../interfaces/_network_interface_.ireqevents.md), this› & object & object

  ↳ **ReqResp**

## Implements

* [IReqResp](../interfaces/_network_interface_.ireqresp.md)

## Index

### Constructors

* [constructor](_network_reqresp_.reqresp.md#constructor)

### Properties

* [ _emitType](_network_reqresp_.reqresp.md#optional--_emittype)
* [ _emitterType](_network_reqresp_.reqresp.md#optional--_emittertype)
* [ _eventsType](_network_reqresp_.reqresp.md#optional--_eventstype)
* [config](_network_reqresp_.reqresp.md#private-config)
* [encoder](_network_reqresp_.reqresp.md#private-encoder)
* [libp2p](_network_reqresp_.reqresp.md#private-libp2p)
* [logger](_network_reqresp_.reqresp.md#private-logger)
* [responseListener](_network_reqresp_.reqresp.md#private-responselistener)

### Methods

* [beaconBlocksByRange](_network_reqresp_.reqresp.md#beaconblocksbyrange)
* [beaconBlocksByRoot](_network_reqresp_.reqresp.md#beaconblocksbyroot)
* [getResponse](_network_reqresp_.reqresp.md#private-getresponse)
* [goodbye](_network_reqresp_.reqresp.md#goodbye)
* [handleRpcRequests](_network_reqresp_.reqresp.md#private-handlerpcrequests)
* [metadata](_network_reqresp_.reqresp.md#metadata)
* [ping](_network_reqresp_.reqresp.md#ping)
* [sendRequest](_network_reqresp_.reqresp.md#private-sendrequest)
* [sendRequestStream](_network_reqresp_.reqresp.md#private-sendrequeststream)
* [sendResponse](_network_reqresp_.reqresp.md#sendresponse)
* [sendResponseStream](_network_reqresp_.reqresp.md#sendresponsestream)
* [start](_network_reqresp_.reqresp.md#start)
* [status](_network_reqresp_.reqresp.md#status)
* [stop](_network_reqresp_.reqresp.md#stop)

## Constructors

###  constructor

\+ **new ReqResp**(`opts`: [INetworkOptions](../interfaces/_network_options_.inetworkoptions.md), `__namedParameters`: object): *[ReqResp](_network_reqresp_.reqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:65](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L65)*

**Parameters:**

▪ **opts**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`libp2p` | LibP2p‹› |
`logger` | ILogger |

**Returns:** *[ReqResp](_network_reqresp_.reqresp.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md).[ _emitType](../interfaces/_network_interface_.ireqresp.md#optional--_emittype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md).[ _emitterType](../interfaces/_network_interface_.ireqresp.md#optional--_emittertype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitterType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md).[ _eventsType](../interfaces/_network_interface_.ireqresp.md#optional--_eventstype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _eventsType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/reqResp.ts:61](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L61)*

___

### `Private` encoder

• **encoder**: *[ReqRespEncoder](_network_encoder_.reqrespencoder.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:64](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L64)*

___

### `Private` libp2p

• **libp2p**: *LibP2p*

*Defined in [packages/lodestar/src/network/reqResp.ts:62](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L62)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/reqResp.ts:63](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L63)*

___

### `Private` responseListener

• **responseListener**: *[ResponseEventListener](_network_reqresp_.responseeventlistener.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:65](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L65)*

## Methods

###  beaconBlocksByRange

▸ **beaconBlocksByRange**(`peerInfo`: PeerInfo, `request`: BeaconBlocksByRangeRequest): *Promise‹SignedBeaconBlock[]›*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:145](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | BeaconBlocksByRangeRequest |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  beaconBlocksByRoot

▸ **beaconBlocksByRoot**(`peerInfo`: PeerInfo, `request`: BeaconBlocksByRootRequest): *Promise‹SignedBeaconBlock[]›*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:151](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | BeaconBlocksByRootRequest |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

### `Private` getResponse

▸ **getResponse**(`peerId`: PeerId, `method`: [Method](../enums/_constants_network_.method.md), `data`: Buffer): *AsyncIterable‹[ResponseChunk](../modules/_network_interface_.md#responsechunk)›*

*Defined in [packages/lodestar/src/network/reqResp.ts:177](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | PeerId |
`method` | [Method](../enums/_constants_network_.method.md) |
`data` | Buffer |

**Returns:** *AsyncIterable‹[ResponseChunk](../modules/_network_interface_.md#responsechunk)›*

___

###  goodbye

▸ **goodbye**(`peerInfo`: PeerInfo, `request`: [Goodbye](../enums/_constants_network_.method.md#goodbye)): *Promise‹void›*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:132](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | [Goodbye](../enums/_constants_network_.method.md#goodbye) |

**Returns:** *Promise‹void›*

___

### `Private` handleRpcRequests

▸ **handleRpcRequests**(`peerId`: PeerId, `method`: [Method](../enums/_constants_network_.method.md)): *function*

*Defined in [packages/lodestar/src/network/reqResp.ts:158](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | PeerId |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹Buffer | BufferList›): *AsyncGenerator‹[ResponseChunk](../modules/_network_interface_.md#responsechunk)›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹Buffer &#124; BufferList› |

___

###  metadata

▸ **metadata**(`peerInfo`: PeerInfo): *Promise‹Metadata›*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:142](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *Promise‹Metadata›*

___

###  ping

▸ **ping**(`peerInfo`: PeerInfo, `request`: [Ping](../enums/_constants_network_.method.md#ping)): *Promise‹[Ping](../enums/_constants_network_.method.md#ping)›*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:139](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | [Ping](../enums/_constants_network_.method.md#ping) |

**Returns:** *Promise‹[Ping](../enums/_constants_network_.method.md#ping)›*

___

### `Private` sendRequest

▸ **sendRequest**<**T**>(`peerInfo`: PeerInfo, `method`: [Method](../enums/_constants_network_.method.md), `body?`: RequestBody, `requestOnly?`: boolean): *Promise‹T›*

*Defined in [packages/lodestar/src/network/reqResp.ts:198](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L198)*

**Type parameters:**

▪ **T**: *ResponseBody | ResponseBody[]*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`method` | [Method](../enums/_constants_network_.method.md) |
`body?` | RequestBody |
`requestOnly?` | boolean |

**Returns:** *Promise‹T›*

___

### `Private` sendRequestStream

▸ **sendRequestStream**<**T**>(`peerInfo`: PeerInfo, `method`: [Method](../enums/_constants_network_.method.md), `body?`: RequestBody): *AsyncIterable‹T›*

*Defined in [packages/lodestar/src/network/reqResp.ts:240](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L240)*

**Type parameters:**

▪ **T**: *ResponseBody | ResponseBody[]*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`method` | [Method](../enums/_constants_network_.method.md) |
`body?` | RequestBody |

**Returns:** *AsyncIterable‹T›*

___

###  sendResponse

▸ **sendResponse**(`id`: [RequestId](../modules/_constants_network_.md#requestid), `err`: [RpcError](_network_error_.rpcerror.md), `chunks`: ResponseBody[]): *void*

*Defined in [packages/lodestar/src/network/reqResp.ts:98](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`err` | [RpcError](_network_error_.rpcerror.md) |
`chunks` | ResponseBody[] |

**Returns:** *void*

___

###  sendResponseStream

▸ **sendResponseStream**(`id`: [RequestId](../modules/_constants_network_.md#requestid), `err`: [RpcError](_network_error_.rpcerror.md), `chunkIter`: AsyncIterable‹ResponseBody›): *void*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:114](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`err` | [RpcError](_network_error_.rpcerror.md) |
`chunkIter` | AsyncIterable‹ResponseBody› |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/reqResp.ts:75](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L75)*

**Returns:** *Promise‹void›*

___

###  status

▸ **status**(`peerInfo`: PeerInfo, `request`: Status): *Promise‹Status›*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:129](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | Status |

**Returns:** *Promise‹Status›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/reqResp.ts:92](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/reqResp.ts#L92)*

**Returns:** *Promise‹void›*
