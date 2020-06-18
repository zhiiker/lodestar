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
* [eth2ResponseTimer](_network_util_.md#eth2responsetimer)
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

*Defined in [packages/lodestar/src/network/util.ts:28](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L28)*

## Functions

###  createPeerId

▸ **createPeerId**(): *Promise‹PeerId›*

*Defined in [packages/lodestar/src/network/util.ts:48](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L48)*

Return a fresh PeerId instance

**Returns:** *Promise‹PeerId›*

___

###  createPeerInfo

▸ **createPeerInfo**(`peerId`: PeerId): *Promise‹PeerInfo›*

*Defined in [packages/lodestar/src/network/util.ts:41](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L41)*

Return a fresh PeerInfo instance

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | PeerId |

**Returns:** *Promise‹PeerInfo›*

___

###  createResponseEvent

▸ **createResponseEvent**(`id`: [RequestId](_constants_network_.md#requestid)): *string*

*Defined in [packages/lodestar/src/network/util.ts:24](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](_constants_network_.md#requestid) |

**Returns:** *string*

___

###  createRpcProtocol

▸ **createRpcProtocol**(`method`: string, `encoding`: string, `version`: number): *string*

*Defined in [packages/lodestar/src/network/util.ts:29](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`method` | string | - |
`encoding` | string | - |
`version` | number | 1 |

**Returns:** *string*

___

###  eth2ResponseTimer

▸ **eth2ResponseTimer**<**T**>(): *function*

*Defined in [packages/lodestar/src/network/util.ts:78](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L78)*

**Type parameters:**

▪ **T**

**Returns:** *function*

▸ (`source`: AsyncIterable‹T›): *AsyncGenerator‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹T› |

___

###  getRequestMethodSSZType

▸ **getRequestMethodSSZType**(`config`: IBeaconConfig, `method`: [Method](../enums/_constants_network_.method.md)): *Type‹any›*

*Defined in [packages/lodestar/src/network/util.ts:58](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *Type‹any›*

___

###  getResponseMethodSSZType

▸ **getResponseMethodSSZType**(`config`: IBeaconConfig, `method`: [Method](../enums/_constants_network_.method.md)): *Type‹any›*

*Defined in [packages/lodestar/src/network/util.ts:64](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *Type‹any›*

___

###  initializePeerInfo

▸ **initializePeerInfo**(`peerId`: PeerId, `multiaddrs`: string[]): *Promise‹PeerInfo›*

*Defined in [packages/lodestar/src/network/util.ts:52](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | PeerId |
`multiaddrs` | string[] |

**Returns:** *Promise‹PeerInfo›*

___

###  isRequestOnly

▸ **isRequestOnly**(`method`: [Method](../enums/_constants_network_.method.md)): *boolean*

*Defined in [packages/lodestar/src/network/util.ts:70](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *boolean*

___

###  isRequestSingleChunk

▸ **isRequestSingleChunk**(`method`: [Method](../enums/_constants_network_.method.md)): *boolean*

*Defined in [packages/lodestar/src/network/util.ts:74](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *boolean*

___

###  randomNibble

▸ **randomNibble**(): *string*

*Defined in [packages/lodestar/src/network/util.ts:16](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L16)*

**Returns:** *string*

___

###  randomRequestId

▸ **randomRequestId**(): *[RequestId](_constants_network_.md#requestid)*

*Defined in [packages/lodestar/src/network/util.ts:20](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/network/util.ts#L20)*

**Returns:** *[RequestId](_constants_network_.md#requestid)*
