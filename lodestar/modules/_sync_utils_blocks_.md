[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/utils/blocks"](_sync_utils_blocks_.md)

# External module: "sync/utils/blocks"

## Index

### Functions

* [chunkify](_sync_utils_blocks_.md#chunkify)
* [getBlockRange](_sync_utils_blocks_.md#getblockrange)
* [getBlockRangeFromPeer](_sync_utils_blocks_.md#getblockrangefrompeer)
* [isValidChainOfBlocks](_sync_utils_blocks_.md#isvalidchainofblocks)
* [sortBlocks](_sync_utils_blocks_.md#sortblocks)

## Functions

###  chunkify

▸ **chunkify**(`blocksPerChunk`: number, `currentSlot`: Slot, `targetSlot`: Slot): *[ISlotRange](../interfaces/_sync_interface_.islotrange.md)[]*

*Defined in [packages/lodestar/src/sync/utils/blocks.ts:16](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/sync/utils/blocks.ts#L16)*

Creates slot chunks returned chunks represents (inclusive) start and (inclusive) end slot
which should be fetched along all slotS(blocks) in between

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blocksPerChunk` | number | - |
`currentSlot` | Slot | - |
`targetSlot` | Slot |   |

**Returns:** *[ISlotRange](../interfaces/_sync_interface_.islotrange.md)[]*

___

###  getBlockRange

▸ **getBlockRange**(`logger`: ILogger, `rpc`: [IReqResp](../interfaces/_network_interface_.ireqresp.md), `peers`: PeerInfo[], `range`: [ISlotRange](../interfaces/_sync_interface_.islotrange.md), `blocksPerChunk?`: number, `maxRetry`: number): *Promise‹SignedBeaconBlock[]›*

*Defined in [packages/lodestar/src/sync/utils/blocks.ts:53](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/sync/utils/blocks.ts#L53)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`logger` | ILogger | - |
`rpc` | [IReqResp](../interfaces/_network_interface_.ireqresp.md) | - |
`peers` | PeerInfo[] | - |
`range` | [ISlotRange](../interfaces/_sync_interface_.islotrange.md) | - |
`blocksPerChunk?` | number | - |
`maxRetry` | number | 6 |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  getBlockRangeFromPeer

▸ **getBlockRangeFromPeer**(`rpc`: [IReqResp](../interfaces/_network_interface_.ireqresp.md), `peer`: PeerInfo, `chunk`: [ISlotRange](../interfaces/_sync_interface_.islotrange.md)): *Promise‹SignedBeaconBlock[]›*

*Defined in [packages/lodestar/src/sync/utils/blocks.ts:38](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/sync/utils/blocks.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`rpc` | [IReqResp](../interfaces/_network_interface_.ireqresp.md) |
`peer` | PeerInfo |
`chunk` | [ISlotRange](../interfaces/_sync_interface_.islotrange.md) |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  isValidChainOfBlocks

▸ **isValidChainOfBlocks**(`config`: IBeaconConfig, `start`: BeaconBlockHeader, `signedBlocks`: SignedBeaconBlock[]): *boolean*

*Defined in [packages/lodestar/src/sync/utils/blocks.ts:105](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/sync/utils/blocks.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`start` | BeaconBlockHeader |
`signedBlocks` | SignedBeaconBlock[] |

**Returns:** *boolean*

___

###  sortBlocks

▸ **sortBlocks**(`blocks`: SignedBeaconBlock[]): *SignedBeaconBlock[]*

*Defined in [packages/lodestar/src/sync/utils/blocks.ts:100](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/sync/utils/blocks.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`blocks` | SignedBeaconBlock[] |

**Returns:** *SignedBeaconBlock[]*
