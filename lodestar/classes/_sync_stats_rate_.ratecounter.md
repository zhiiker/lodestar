[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/stats/rate"](../modules/_sync_stats_rate_.md) › [RateCounter](_sync_stats_rate_.ratecounter.md)

# Class: RateCounter

Calculates increment rate in given time period

## Hierarchy

* **RateCounter**

## Index

### Constructors

* [constructor](_sync_stats_rate_.ratecounter.md#constructor)

### Properties

* [count](_sync_stats_rate_.ratecounter.md#private-count)
* [since](_sync_stats_rate_.ratecounter.md#private-since)
* [timePeriod](_sync_stats_rate_.ratecounter.md#private-timeperiod)
* [timer](_sync_stats_rate_.ratecounter.md#private-timer)

### Methods

* [increment](_sync_stats_rate_.ratecounter.md#increment)
* [rate](_sync_stats_rate_.ratecounter.md#rate)
* [resetRate](_sync_stats_rate_.ratecounter.md#private-resetrate)
* [start](_sync_stats_rate_.ratecounter.md#start)
* [stop](_sync_stats_rate_.ratecounter.md#stop)

## Constructors

###  constructor

\+ **new RateCounter**(`timePeriod`: number): *[RateCounter](_sync_stats_rate_.ratecounter.md)*

*Defined in [packages/lodestar/src/sync/stats/rate.ts:10](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L10)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timePeriod` | number | in seconds  |

**Returns:** *[RateCounter](_sync_stats_rate_.ratecounter.md)*

## Properties

### `Private` count

• **count**: *number* = 0

*Defined in [packages/lodestar/src/sync/stats/rate.ts:8](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L8)*

___

### `Private` since

• **since**: *number*

*Defined in [packages/lodestar/src/sync/stats/rate.ts:9](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L9)*

___

### `Private` timePeriod

• **timePeriod**: *number*

*Defined in [packages/lodestar/src/sync/stats/rate.ts:6](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L6)*

___

### `Private` timer

• **timer**: *Timeout*

*Defined in [packages/lodestar/src/sync/stats/rate.ts:10](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L10)*

## Methods

###  increment

▸ **increment**(`inc`: number): *void*

*Defined in [packages/lodestar/src/sync/stats/rate.ts:34](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L34)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`inc` | number | 1 |

**Returns:** *void*

___

###  rate

▸ **rate**(): *number*

*Defined in [packages/lodestar/src/sync/stats/rate.ts:38](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L38)*

**Returns:** *number*

___

### `Private` resetRate

▸ **resetRate**(): *void*

*Defined in [packages/lodestar/src/sync/stats/rate.ts:46](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L46)*

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/stats/rate.ts:23](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L23)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/stats/rate.ts:28](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar/src/sync/stats/rate.ts#L28)*

**Returns:** *Promise‹void›*
