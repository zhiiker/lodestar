[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/utils/sync"](_sync_utils_sync_.md)

# External module: "sync/utils/sync"

## Index

### Interfaces

* [ISlotRange](../interfaces/_sync_utils_sync_.islotrange.md)

### Functions

* [chunkify](_sync_utils_sync_.md#chunkify)
* [getBlockRangeFromPeer](_sync_utils_sync_.md#getblockrangefrompeer)
* [getHighestCommonSlot](_sync_utils_sync_.md#gethighestcommonslot)
* [getInitalSyncTargetEpoch](_sync_utils_sync_.md#getinitalsynctargetepoch)
* [isSynced](_sync_utils_sync_.md#issynced)
* [isValidChainOfBlocks](_sync_utils_sync_.md#isvalidchainofblocks)
* [isValidFinalizedCheckPoint](_sync_utils_sync_.md#isvalidfinalizedcheckpoint)
* [isValidPeerForInitSync](_sync_utils_sync_.md#isvalidpeerforinitsync)

## Functions

###  chunkify

▸ **chunkify**(`blocksPerChunk`: number, `currentSlot`: Slot, `targetSlot`: Slot): *[ISlotRange](../interfaces/_sync_utils_sync_.islotrange.md)[]*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:90](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/utils/sync.ts#L90)*

Creates slot chunks returned chunks represents (inclusive) start and (inclusive) end slot
which should be fetched along all slotS(blocks) in between

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blocksPerChunk` | number | - |
`currentSlot` | Slot | - |
`targetSlot` | Slot |   |

**Returns:** *[ISlotRange](../interfaces/_sync_utils_sync_.islotrange.md)[]*

___

###  getBlockRangeFromPeer

▸ **getBlockRangeFromPeer**(`rpc`: [IReqResp](../interfaces/_network_interface_.ireqresp.md), `reps`: [ReputationStore](../classes/_sync_ireputation_.reputationstore.md), `peer`: PeerInfo, `chunk`: [ISlotRange](../interfaces/_sync_utils_sync_.islotrange.md)): *Promise‹SignedBeaconBlock[]›*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:110](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/utils/sync.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`rpc` | [IReqResp](../interfaces/_network_interface_.ireqresp.md) |
`reps` | [ReputationStore](../classes/_sync_ireputation_.reputationstore.md) |
`peer` | PeerInfo |
`chunk` | [ISlotRange](../interfaces/_sync_utils_sync_.islotrange.md) |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  getHighestCommonSlot

▸ **getHighestCommonSlot**(`peers`: [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[]): *Slot*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:38](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/utils/sync.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`peers` | [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[] |

**Returns:** *Slot*

___

###  getInitalSyncTargetEpoch

▸ **getInitalSyncTargetEpoch**(`peers`: [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[], `currentCheckPoint`: Checkpoint): *Epoch*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:22](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/utils/sync.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`peers` | [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[] |
`currentCheckPoint` | Checkpoint |

**Returns:** *Epoch*

___

###  isSynced

▸ **isSynced**(`slot`: Slot, `peers`: [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[]): *boolean*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:56](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/utils/sync.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`peers` | [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[] |

**Returns:** *boolean*

___

###  isValidChainOfBlocks

▸ **isValidChainOfBlocks**(`config`: IBeaconConfig, `start`: BeaconBlockHeader, `signedBlocks`: SignedBeaconBlock[]): *boolean*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:7](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/utils/sync.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`start` | BeaconBlockHeader |
`signedBlocks` | SignedBeaconBlock[] |

**Returns:** *boolean*

___

###  isValidFinalizedCheckPoint

▸ **isValidFinalizedCheckPoint**(`peers`: [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[], `finalizedCheckpoint`: Checkpoint): *boolean*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:60](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/utils/sync.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`peers` | [IReputation](../interfaces/_sync_ireputation_.ireputation.md)[] |
`finalizedCheckpoint` | Checkpoint |

**Returns:** *boolean*

___

###  isValidPeerForInitSync

▸ **isValidPeerForInitSync**(`config`: IBeaconConfig, `myState`: BeaconState | null, `peerStatus`: Status): *boolean*

*Defined in [packages/lodestar/src/sync/utils/sync.ts:69](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/utils/sync.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`myState` | BeaconState &#124; null |
`peerStatus` | Status |

**Returns:** *boolean*
