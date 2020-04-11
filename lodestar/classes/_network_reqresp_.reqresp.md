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

*Defined in [packages/lodestar/src/network/reqResp.ts:63](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L63)*

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

*Defined in [packages/lodestar/src/network/reqResp.ts:59](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L59)*

___

### `Private` encoder

• **encoder**: *[ReqRespEncoder](_network_encoder_.reqrespencoder.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:62](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L62)*

___

### `Private` libp2p

• **libp2p**: *LibP2p*

*Defined in [packages/lodestar/src/network/reqResp.ts:60](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L60)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/reqResp.ts:61](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L61)*

___

### `Private` responseListener

• **responseListener**: *[ResponseEventListener](_network_reqresp_.responseeventlistener.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:63](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L63)*

## Methods

###  beaconBlocksByRange

▸ **beaconBlocksByRange**(`peerInfo`: PeerInfo, `request`: BeaconBlocksByRangeRequest): *Promise‹SignedBeaconBlock[]›*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:132](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L132)*

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

*Defined in [packages/lodestar/src/network/reqResp.ts:138](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | BeaconBlocksByRootRequest |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

### `Private` getResponse

▸ **getResponse**(`peerId`: PeerId, `method`: [Method](../enums/_constants_network_.method.md), `data`: Buffer): *AsyncIterable‹[ResponseChunk](../modules/_network_interface_.md#responsechunk)›*

*Defined in [packages/lodestar/src/network/reqResp.ts:159](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L159)*

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

*Defined in [packages/lodestar/src/network/reqResp.ts:129](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | [Goodbye](../enums/_constants_network_.method.md#goodbye) |

**Returns:** *Promise‹void›*

___

### `Private` handleRpcRequests

▸ **handleRpcRequests**(`peerId`: PeerId, `method`: [Method](../enums/_constants_network_.method.md)): *function*

*Defined in [packages/lodestar/src/network/reqResp.ts:145](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L145)*

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

### `Private` sendRequest

▸ **sendRequest**<**T**>(`peerInfo`: PeerInfo, `method`: [Method](../enums/_constants_network_.method.md), `body`: RequestBody, `requestOnly?`: boolean): *Promise‹T›*

*Defined in [packages/lodestar/src/network/reqResp.ts:180](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L180)*

**Type parameters:**

▪ **T**: *ResponseBody | ResponseBody[]*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`method` | [Method](../enums/_constants_network_.method.md) |
`body` | RequestBody |
`requestOnly?` | boolean |

**Returns:** *Promise‹T›*

___

### `Private` sendRequestStream

▸ **sendRequestStream**<**T**>(`peerInfo`: PeerInfo, `method`: [Method](../enums/_constants_network_.method.md), `body`: RequestBody): *AsyncIterable‹T›*

*Defined in [packages/lodestar/src/network/reqResp.ts:220](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L220)*

**Type parameters:**

▪ **T**: *ResponseBody | ResponseBody[]*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`method` | [Method](../enums/_constants_network_.method.md) |
`body` | RequestBody |

**Returns:** *AsyncIterable‹T›*

___

###  sendResponse

▸ **sendResponse**(`id`: [RequestId](../modules/_constants_network_.md#requestid), `err`: [RpcError](_network_error_.rpcerror.md), `chunks`: ResponseBody[]): *void*

*Defined in [packages/lodestar/src/network/reqResp.ts:96](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L96)*

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

*Defined in [packages/lodestar/src/network/reqResp.ts:111](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L111)*

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

*Defined in [packages/lodestar/src/network/reqResp.ts:73](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L73)*

**Returns:** *Promise‹void›*

___

###  status

▸ **status**(`peerInfo`: PeerInfo, `request`: Status): *Promise‹Status›*

*Implementation of [IReqResp](../interfaces/_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/reqResp.ts:126](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`request` | Status |

**Returns:** *Promise‹Status›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/reqResp.ts:90](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/reqResp.ts#L90)*

**Returns:** *Promise‹void›*
