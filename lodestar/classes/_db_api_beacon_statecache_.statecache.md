[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/stateCache"](../modules/_db_api_beacon_statecache_.md) › [StateCache](_db_api_beacon_statecache_.statecache.md)

# Class: StateCache

Simple BeaconState in-memory cache

Similar API to Repository, but synchronous

## Hierarchy

* **StateCache**

## Index

### Constructors

* [constructor](_db_api_beacon_statecache_.statecache.md#constructor)

### Properties

* [cache](_db_api_beacon_statecache_.statecache.md#private-cache)

### Methods

* [add](_db_api_beacon_statecache_.statecache.md#add)
* [batchDelete](_db_api_beacon_statecache_.statecache.md#batchdelete)
* [clear](_db_api_beacon_statecache_.statecache.md#clear)
* [delete](_db_api_beacon_statecache_.statecache.md#delete)
* [get](_db_api_beacon_statecache_.statecache.md#get)
* [values](_db_api_beacon_statecache_.statecache.md#values)

## Constructors

###  constructor

\+ **new StateCache**(): *[StateCache](_db_api_beacon_statecache_.statecache.md)*

*Defined in [packages/lodestar/src/db/api/beacon/stateCache.ts:10](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/api/beacon/stateCache.ts#L10)*

**Returns:** *[StateCache](_db_api_beacon_statecache_.statecache.md)*

## Properties

### `Private` cache

• **cache**: *Record‹string, TreeBacked‹BeaconState››*

*Defined in [packages/lodestar/src/db/api/beacon/stateCache.ts:10](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/api/beacon/stateCache.ts#L10)*

## Methods

###  add

▸ **add**(`state`: TreeBacked‹BeaconState›): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/stateCache.ts:22](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/api/beacon/stateCache.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | TreeBacked‹BeaconState› |

**Returns:** *Promise‹void›*

___

###  batchDelete

▸ **batchDelete**(`roots`: ByteVector[]): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/stateCache.ts:30](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/api/beacon/stateCache.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`roots` | ByteVector[] |

**Returns:** *Promise‹void›*

___

###  clear

▸ **clear**(): *void*

*Defined in [packages/lodestar/src/db/api/beacon/stateCache.ts:34](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/api/beacon/stateCache.ts#L34)*

**Returns:** *void*

___

###  delete

▸ **delete**(`root`: ByteVector): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/stateCache.ts:26](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/api/beacon/stateCache.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | ByteVector |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`root`: ByteVector): *Promise‹TreeBacked‹BeaconState› | null›*

*Defined in [packages/lodestar/src/db/api/beacon/stateCache.ts:14](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/api/beacon/stateCache.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | ByteVector |

**Returns:** *Promise‹TreeBacked‹BeaconState› | null›*

___

###  values

▸ **values**(): *Promise‹TreeBacked‹BeaconState›[]›*

*Defined in [packages/lodestar/src/db/api/beacon/stateCache.ts:38](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/api/beacon/stateCache.ts#L38)*

**Returns:** *Promise‹TreeBacked‹BeaconState›[]›*
