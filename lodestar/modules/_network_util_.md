[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/util"](_network_util_.md)

# External module: "network/util"

## Index

### Variables

* [REQ_PROTOCOL](_network_util_.md#const-req_protocol)

### Functions

* [createPeerId](_network_util_.md#createpeerid)
* [createPeerInfo](_network_util_.md#createpeerinfo)
* [createResponseEvent](_network_util_.md#createresponseevent)
* [createRpcProtocol](_network_util_.md#createrpcprotocol)
* [getRequestMethodSSZType](_network_util_.md#getrequestmethodssztype)
* [getResponseMethodSSZType](_network_util_.md#getresponsemethodssztype)
* [initializePeerInfo](_network_util_.md#initializepeerinfo)
* [isRequestOnly](_network_util_.md#isrequestonly)
* [isRequestSingleChunk](_network_util_.md#isrequestsinglechunk)
* [randomNibble](_network_util_.md#randomnibble)
* [randomRequestId](_network_util_.md#randomrequestid)

## Variables

### `Const` REQ_PROTOCOL

• **REQ_PROTOCOL**: *"/eth2/beacon_chain/req/{method}/{version}/{encoding}"* = "/eth2/beacon_chain/req/{method}/{version}/{encoding}"

*Defined in [packages/lodestar/src/network/util.ts:26](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L26)*

## Functions

###  createPeerId

▸ **createPeerId**(): *Promise‹PeerId›*

*Defined in [packages/lodestar/src/network/util.ts:46](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L46)*

Return a fresh PeerId instance

**Returns:** *Promise‹PeerId›*

___

###  createPeerInfo

▸ **createPeerInfo**(`peerId`: PeerId): *Promise‹PeerInfo›*

*Defined in [packages/lodestar/src/network/util.ts:39](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L39)*

Return a fresh PeerInfo instance

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | PeerId |

**Returns:** *Promise‹PeerInfo›*

___

###  createResponseEvent

▸ **createResponseEvent**(`id`: [RequestId](_constants_network_.md#requestid)): *string*

*Defined in [packages/lodestar/src/network/util.ts:22](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](_constants_network_.md#requestid) |

**Returns:** *string*

___

###  createRpcProtocol

▸ **createRpcProtocol**(`method`: string, `encoding`: string, `version`: number): *string*

*Defined in [packages/lodestar/src/network/util.ts:27](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L27)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`method` | string | - |
`encoding` | string | - |
`version` | number | 1 |

**Returns:** *string*

___

###  getRequestMethodSSZType

▸ **getRequestMethodSSZType**(`config`: IBeaconConfig, `method`: [Method](../enums/_constants_network_.method.md)): *Type‹any›*

*Defined in [packages/lodestar/src/network/util.ts:56](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *Type‹any›*

___

###  getResponseMethodSSZType

▸ **getResponseMethodSSZType**(`config`: IBeaconConfig, `method`: [Method](../enums/_constants_network_.method.md)): *Type‹any›*

*Defined in [packages/lodestar/src/network/util.ts:62](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *Type‹any›*

___

###  initializePeerInfo

▸ **initializePeerInfo**(`peerId`: PeerId, `multiaddrs`: string[]): *Promise‹PeerInfo›*

*Defined in [packages/lodestar/src/network/util.ts:50](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | PeerId |
`multiaddrs` | string[] |

**Returns:** *Promise‹PeerInfo›*

___

###  isRequestOnly

▸ **isRequestOnly**(`method`: [Method](../enums/_constants_network_.method.md)): *boolean*

*Defined in [packages/lodestar/src/network/util.ts:68](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *boolean*

___

###  isRequestSingleChunk

▸ **isRequestSingleChunk**(`method`: [Method](../enums/_constants_network_.method.md)): *boolean*

*Defined in [packages/lodestar/src/network/util.ts:72](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *boolean*

___

###  randomNibble

▸ **randomNibble**(): *string*

*Defined in [packages/lodestar/src/network/util.ts:14](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L14)*

**Returns:** *string*

___

###  randomRequestId

▸ **randomRequestId**(): *[RequestId](_constants_network_.md#requestid)*

*Defined in [packages/lodestar/src/network/util.ts:18](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/util.ts#L18)*

**Returns:** *[RequestId](_constants_network_.md#requestid)*
