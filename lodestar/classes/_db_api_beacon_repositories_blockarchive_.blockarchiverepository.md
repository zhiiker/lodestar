[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/blockArchive"](../modules/_db_api_beacon_repositories_blockarchive_.md) › [BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)

# Class: BlockArchiveRepository

Stores finalized blocks. Block slot is identifier.

## Hierarchy

  ↳ [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹SignedBeaconBlock›

  ↳ **BlockArchiveRepository**

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#constructor)

### Properties

* [bucket](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#protected-bucket)
* [config](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#protected-config)
* [db](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#protected-db)
* [type](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#protected-type)

### Methods

* [add](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#add)
* [addMany](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#addmany)
* [delete](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#delete)
* [deleteMany](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#deletemany)
* [deleteManyByValue](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#deletemanybyvalue)
* [get](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#get)
* [getAll](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#getall)
* [getAllBetween](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#getallbetween)
* [getAllBetweenStream](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#getallbetweenstream)
* [getId](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#getid)
* [getSerialized](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#getserialized)
* [has](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#has)
* [set](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#set)

## Constructors

###  constructor

\+ **new BlockArchiveRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)): *[BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[constructor](_db_api_beacon_repository_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts:11](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md) |

**Returns:** *[BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[bucket](_db_api_beacon_repository_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:14](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L14)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[config](_db_api_beacon_repository_.repository.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:10](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L10)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[db](_db_api_beacon_repository_.repository.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:12](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L12)*

___

### `Protected` type

• **type**: *Type‹SignedBeaconBlock›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[type](_db_api_beacon_repository_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:16](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L16)*

## Methods

###  add

▸ **add**(`value`: SignedBeaconBlock): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[add](_db_api_beacon_repository_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:61](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  addMany

▸ **addMany**(`blocks`: SignedBeaconBlock[]): *Promise‹void›*

*Overrides [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[addMany](_db_api_beacon_repository_.bulkrepository.md#addmany)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts:20](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`blocks` | SignedBeaconBlock[] |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[delete](_db_api_beacon_repository_.repository.md#delete)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:53](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹void›*

___

###  deleteMany

▸ **deleteMany**(`ids`: [Id](../modules/_db_api_beacon_repository_.md#id)[]): *Promise‹void›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[deleteMany](_db_api_beacon_repository_.bulkrepository.md#deletemany)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:85](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | [Id](../modules/_db_api_beacon_repository_.md#id)[] |

**Returns:** *Promise‹void›*

___

###  deleteManyByValue

▸ **deleteManyByValue**(`values`: ArrayLike‹SignedBeaconBlock›): *Promise‹void›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[deleteManyByValue](_db_api_beacon_repository_.bulkrepository.md#deletemanybyvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:93](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹SignedBeaconBlock› |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹SignedBeaconBlock | null›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[get](_db_api_beacon_repository_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:29](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getAll

▸ **getAll**(): *Promise‹SignedBeaconBlock[]›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[getAll](_db_api_beacon_repository_.bulkrepository.md#getall)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:69](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L69)*

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  getAllBetween

▸ **getAllBetween**(`lowerLimit`: number | null, `upperLimit`: number | null, `step`: number | null): *Promise‹SignedBeaconBlock[]›*

*Overrides [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[getAllBetween](_db_api_beacon_repository_.bulkrepository.md#getallbetween)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts:33](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`lowerLimit` | number &#124; null | - |
`upperLimit` | number &#124; null | - |
`step` | number &#124; null | 1 |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  getAllBetweenStream

▸ **getAllBetweenStream**(`lowerLimit`: number | null, `upperLimit`: number | null, `step`: number | null): *AsyncIterable‹SignedBeaconBlock›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts:45](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts#L45)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`lowerLimit` | number &#124; null | - |
`upperLimit` | number &#124; null | - |
`step` | number &#124; null | 1 |

**Returns:** *AsyncIterable‹SignedBeaconBlock›*

___

###  getId

▸ **getId**(`value`: SignedBeaconBlock): *Slot*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[getId](_db_api_beacon_repository_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts:29](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedBeaconBlock |

**Returns:** *Slot*

___

###  getSerialized

▸ **getSerialized**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹Uint8Array | null›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[getSerialized](_db_api_beacon_repository_.repository.md#getserialized)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:34](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹Uint8Array | null›*

___

###  has

▸ **has**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹boolean›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[has](_db_api_beacon_repository_.repository.md#has)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:45](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹boolean›*

___

###  set

▸ **set**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id), `value`: SignedBeaconBlock): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[set](_db_api_beacon_repository_.repository.md#set)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:49](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |
`value` | SignedBeaconBlock |

**Returns:** *Promise‹void›*
