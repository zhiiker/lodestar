[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/stats/interface"](../modules/_sync_stats_interface_.md) › [ISyncStats](_sync_stats_interface_.isyncstats.md)

# Interface: ISyncStats

## Hierarchy

* [IService](_node_nodejs_.iservice.md)

  ↳ **ISyncStats**

## Implemented by

* [SyncStats](../classes/_sync_stats_stats_.syncstats.md)

## Index

### Methods

* [getEstimate](_sync_stats_interface_.isyncstats.md#getestimate)
* [getSyncSpeed](_sync_stats_interface_.isyncstats.md#getsyncspeed)
* [start](_sync_stats_interface_.isyncstats.md#start)
* [stop](_sync_stats_interface_.isyncstats.md#stop)

## Methods

###  getEstimate

▸ **getEstimate**(`headSlot`: Slot, `targetSlot`: Slot): *number*

*Defined in [packages/lodestar/src/sync/stats/interface.ts:15](https://github.com/ChainSafe/lodestar/blob/2143d4cb6/packages/lodestar/src/sync/stats/interface.ts#L15)*

Estimate how much time (in seconds) will take to sync to target.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`headSlot` | Slot | - |
`targetSlot` | Slot |   |

**Returns:** *number*

___

###  getSyncSpeed

▸ **getSyncSpeed**(): *number*

*Defined in [packages/lodestar/src/sync/stats/interface.ts:8](https://github.com/ChainSafe/lodestar/blob/2143d4cb6/packages/lodestar/src/sync/stats/interface.ts#L8)*

Returns blocks per second processing

**Returns:** *number*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[start](_network_gossip_interface_.igossip.md#start)*

*Defined in [packages/lodestar/src/node/nodejs.ts:25](https://github.com/ChainSafe/lodestar/blob/2143d4cb6/packages/lodestar/src/node/nodejs.ts#L25)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[stop](_network_gossip_interface_.igossip.md#stop)*

*Defined in [packages/lodestar/src/node/nodejs.ts:27](https://github.com/ChainSafe/lodestar/blob/2143d4cb6/packages/lodestar/src/node/nodejs.ts#L27)*

**Returns:** *Promise‹void›*
