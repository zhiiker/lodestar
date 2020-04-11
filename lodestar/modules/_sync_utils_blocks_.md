[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/utils/blocks"](_sync_utils_blocks_.md)

# External module: "sync/utils/blocks"

## Index

### Functions

* [getBlockRange](_sync_utils_blocks_.md#getblockrange)
* [sortBlocks](_sync_utils_blocks_.md#sortblocks)

## Functions

###  getBlockRange

▸ **getBlockRange**(`rpc`: [IReqResp](../interfaces/_network_interface_.ireqresp.md), `reps`: [ReputationStore](../classes/_sync_ireputation_.reputationstore.md), `peers`: PeerInfo[], `range`: [ISlotRange](../interfaces/_sync_utils_sync_.islotrange.md), `blocksPerChunk`: number, `maxRetry`: number): *Promise‹SignedBeaconBlock[]›*

*Defined in [packages/lodestar/src/sync/utils/blocks.ts:7](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/utils/blocks.ts#L7)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`rpc` | [IReqResp](../interfaces/_network_interface_.ireqresp.md) | - |
`reps` | [ReputationStore](../classes/_sync_ireputation_.reputationstore.md) | - |
`peers` | PeerInfo[] | - |
`range` | [ISlotRange](../interfaces/_sync_utils_sync_.islotrange.md) | - |
`blocksPerChunk` | number | 10 |
`maxRetry` | number | 3 |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  sortBlocks

▸ **sortBlocks**(`blocks`: SignedBeaconBlock[]): *SignedBeaconBlock[]*

*Defined in [packages/lodestar/src/sync/utils/blocks.ts:43](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/utils/blocks.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`blocks` | SignedBeaconBlock[] |

**Returns:** *SignedBeaconBlock[]*
