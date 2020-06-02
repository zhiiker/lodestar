[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/stats/stats"](../modules/_sync_stats_stats_.md) › [SyncStats](_sync_stats_stats_.syncstats.md)

# Class: SyncStats

## Hierarchy

* **SyncStats**

## Implements

* [ISyncStats](../interfaces/_sync_stats_interface_.isyncstats.md)

## Index

### Constructors

* [constructor](_sync_stats_stats_.syncstats.md#constructor)

### Properties

* [chainEvents](_sync_stats_stats_.syncstats.md#private-chainevents)
* [rateCounter](_sync_stats_stats_.syncstats.md#private-ratecounter)

### Methods

* [getEstimate](_sync_stats_stats_.syncstats.md#getestimate)
* [getSyncSpeed](_sync_stats_stats_.syncstats.md#getsyncspeed)
* [onBlockProcessed](_sync_stats_stats_.syncstats.md#private-onblockprocessed)
* [start](_sync_stats_stats_.syncstats.md#start)
* [stop](_sync_stats_stats_.syncstats.md#stop)

## Constructors

###  constructor

\+ **new SyncStats**(`chainEvents`: [ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter), `rateCounter?`: [RateCounter](_sync_stats_rate_.ratecounter.md)): *[SyncStats](_sync_stats_stats_.syncstats.md)*

*Defined in [packages/lodestar/src/sync/stats/stats.ts:9](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/stats.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`chainEvents` | [ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter) |
`rateCounter?` | [RateCounter](_sync_stats_rate_.ratecounter.md) |

**Returns:** *[SyncStats](_sync_stats_stats_.syncstats.md)*

## Properties

### `Private` chainEvents

• **chainEvents**: *[ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter)*

*Defined in [packages/lodestar/src/sync/stats/stats.ts:8](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/stats.ts#L8)*

___

### `Private` rateCounter

• **rateCounter**: *[RateCounter](_sync_stats_rate_.ratecounter.md)*

*Defined in [packages/lodestar/src/sync/stats/stats.ts:9](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/stats.ts#L9)*

## Methods

###  getEstimate

▸ **getEstimate**(`headSlot`: Slot, `targetSlot`: Slot): *number*

*Implementation of [ISyncStats](../interfaces/_sync_stats_interface_.isyncstats.md)*

*Defined in [packages/lodestar/src/sync/stats/stats.ts:26](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/stats.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`headSlot` | Slot |
`targetSlot` | Slot |

**Returns:** *number*

___

###  getSyncSpeed

▸ **getSyncSpeed**(): *number*

*Implementation of [ISyncStats](../interfaces/_sync_stats_interface_.isyncstats.md)*

*Defined in [packages/lodestar/src/sync/stats/stats.ts:38](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/stats.ts#L38)*

**Returns:** *number*

___

### `Private` onBlockProcessed

▸ **onBlockProcessed**(): *void*

*Defined in [packages/lodestar/src/sync/stats/stats.ts:42](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/stats.ts#L42)*

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [ISyncStats](../interfaces/_sync_stats_interface_.isyncstats.md)*

*Defined in [packages/lodestar/src/sync/stats/stats.ts:16](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/stats.ts#L16)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [ISyncStats](../interfaces/_sync_stats_interface_.isyncstats.md)*

*Defined in [packages/lodestar/src/sync/stats/stats.ts:21](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/stats.ts#L21)*

**Returns:** *Promise‹void›*
