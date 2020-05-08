[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/utils/sync"](_sync_utils_sync_.md)

# External module: "sync/utils/sync"

## Index

### Functions

* [fetchBlockChunks](_sync_utils_sync_.md#fetchblockchunks)
* [getCommonFinalizedCheckpoint](_sync_utils_sync_.md#getcommonfinalizedcheckpoint)
* [getHighestCommonSlot](_sync_utils_sync_.md#gethighestcommonslot)
* [getStatusFinalizedCheckpoint](_sync_utils_sync_.md#getstatusfinalizedcheckpoint)
* [processSyncBlocks](_sync_utils_sync_.md#processsyncblocks)
* [targetSlotToBlockChunks](_sync_utils_sync_.md#targetslottoblockchunks)
* [validateBlocks](_sync_utils_sync_.md#validateblocks)

## Functions

###  fetchBlockChunks

▸ **fetchBlockChunks**(`chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `reqResp`: [IReqResp](../interfaces/_network_interface_.ireqresp.md), `getPeers`: function, `blocksPerChunk`: number): *function*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:76](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/sync/utils/sync.ts#L76)*

**Parameters:**

▪ **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

▪ **reqResp**: *[IReqResp](../interfaces/_network_interface_.ireqresp.md)*

▪ **getPeers**: *function*

▸ (`minSlot`: Slot): *Promise‹PeerInfo[]›*

**Parameters:**

Name | Type |
------ | ------ |
`minSlot` | Slot |

▪`Default value`  **blocksPerChunk**: *number*= 10

**Returns:** *function*

▸ (`source`: AsyncIterable‹[ISlotRange](../interfaces/_sync_interface_.islotrange.md)›): *AsyncGenerator‹SignedBeaconBlock[]›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹[ISlotRange](../interfaces/_sync_interface_.islotrange.md)› |

___

###  getCommonFinalizedCheckpoint

▸ **getCommonFinalizedCheckpoint**(`config`: IBeaconConfig, `peers`: [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[]): *Checkpoint | null*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:34](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/sync/utils/sync.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`peers` | [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[] |

**Returns:** *Checkpoint | null*

___

###  getHighestCommonSlot

▸ **getHighestCommonSlot**(`peers`: [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[]): *Slot*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:12](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/sync/utils/sync.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`peers` | [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[] |

**Returns:** *Slot*

___

###  getStatusFinalizedCheckpoint

▸ **getStatusFinalizedCheckpoint**(`status`: Status): *Checkpoint*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:30](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/sync/utils/sync.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | Status |

**Returns:** *Checkpoint*

___

###  processSyncBlocks

▸ **processSyncBlocks**(`chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `logger`: ILogger, `trusted`: boolean): *function*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:133](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/sync/utils/sync.ts#L133)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md) | - |
`logger` | ILogger | - |
`trusted` | boolean | false |

**Returns:** *function*

▸ (`source`: AsyncIterable‹SignedBeaconBlock[]›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹SignedBeaconBlock[]› |

___

###  targetSlotToBlockChunks

▸ **targetSlotToBlockChunks**(`config`: IBeaconConfig, `chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)): *function*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:62](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/sync/utils/sync.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹Slot›): *AsyncGenerator‹[ISlotRange](../interfaces/_sync_interface_.islotrange.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹Slot› |

___

###  validateBlocks

▸ **validateBlocks**(`config`: IBeaconConfig, `chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `logger`: ILogger, `onBlockVerificationFail`: Function): *function*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:101](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/sync/utils/sync.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md) |
`logger` | ILogger |
`onBlockVerificationFail` | Function |

**Returns:** *function*

▸ (`source`: AsyncIterable‹SignedBeaconBlock[]›): *AsyncGenerator‹SignedBeaconBlock[]›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹SignedBeaconBlock[]› |
