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

▸ **fetchBlockChunks**(`logger`: ILogger, `chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `reqResp`: [IReqResp](../interfaces/_network_interface_.ireqresp.md), `getPeers`: function, `maxBlocksPerChunk?`: number): *function*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:78](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/sync/utils/sync.ts#L78)*

**Parameters:**

▪ **logger**: *ILogger*

▪ **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

▪ **reqResp**: *[IReqResp](../interfaces/_network_interface_.ireqresp.md)*

▪ **getPeers**: *function*

▸ (`minSlot`: Slot): *Promise‹PeerInfo[]›*

**Parameters:**

Name | Type |
------ | ------ |
`minSlot` | Slot |

▪`Optional`  **maxBlocksPerChunk**: *number*

**Returns:** *function*

▸ (`source`: AsyncIterable‹[ISlotRange](../interfaces/_sync_interface_.islotrange.md)›): *AsyncGenerator‹SignedBeaconBlock[]›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹[ISlotRange](../interfaces/_sync_interface_.islotrange.md)› |

___

###  getCommonFinalizedCheckpoint

▸ **getCommonFinalizedCheckpoint**(`config`: IBeaconConfig, `peers`: [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[]): *Checkpoint | null*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:35](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/sync/utils/sync.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`peers` | [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[] |

**Returns:** *Checkpoint | null*

___

###  getHighestCommonSlot

▸ **getHighestCommonSlot**(`peers`: [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[]): *Slot*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:13](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/sync/utils/sync.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`peers` | [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[] |

**Returns:** *Slot*

___

###  getStatusFinalizedCheckpoint

▸ **getStatusFinalizedCheckpoint**(`status`: Status): *Checkpoint*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:31](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/sync/utils/sync.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | Status |

**Returns:** *Checkpoint*

___

###  processSyncBlocks

▸ **processSyncBlocks**(`config`: IBeaconConfig, `chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `logger`: ILogger, `trusted`: boolean): *function*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:161](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/sync/utils/sync.ts#L161)*

Bufferes and orders block and passes them to chain.
Returns last processed slot.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`config` | IBeaconConfig | - | - |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md) | - | - |
`logger` | ILogger | - | - |
`trusted` | boolean | false |   |

**Returns:** *function*

▸ (`source`: AsyncIterable‹SignedBeaconBlock[]›): *Promise‹Slot | null›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹SignedBeaconBlock[]› |

___

###  targetSlotToBlockChunks

▸ **targetSlotToBlockChunks**(`config`: IBeaconConfig, `chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `getInitialSyncPeers`: function): *function*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:63](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/sync/utils/sync.ts#L63)*

**Parameters:**

▪ **config**: *IBeaconConfig*

▪ **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

▪ **getInitialSyncPeers**: *function*

▸ (`minSlot`: Slot): *Promise‹PeerInfo[]›*

**Parameters:**

Name | Type |
------ | ------ |
`minSlot` | Slot |

**Returns:** *function*

▸ (`source`: AsyncIterable‹Slot›): *AsyncGenerator‹[ISlotRange](../interfaces/_sync_interface_.islotrange.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹Slot› |

___

###  validateBlocks

▸ **validateBlocks**(`config`: IBeaconConfig, `chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `logger`: ILogger, `onBlockVerificationFail`: Function): *function*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:121](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/sync/utils/sync.ts#L121)*

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
