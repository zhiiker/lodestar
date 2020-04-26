[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repository"](../modules/_db_api_beacon_repository_.md) › [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)

# Class: BulkRepository <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Repository](_db_api_beacon_repository_.repository.md)‹T›

  ↳ **BulkRepository**

  ↳ [AttestationRepository](_db_api_beacon_repositories_attestations_.attestationrepository.md)

  ↳ [AggregateAndProofRepository](_db_api_beacon_repositories_aggregateandproof_.aggregateandproofrepository.md)

  ↳ [AttesterSlashingRepository](_db_api_beacon_repositories_attesterslashing_.attesterslashingrepository.md)

  ↳ [BlockRepository](_db_api_beacon_repositories_block_.blockrepository.md)

  ↳ [BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)

  ↳ [DepositDataRepository](_db_api_beacon_repositories_depositdata_.depositdatarepository.md)

  ↳ [DepositDataRootListRepository](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)

  ↳ [ProposerSlashingRepository](_db_api_beacon_repositories_proposerslashing_.proposerslashingrepository.md)

  ↳ [VoluntaryExitRepository](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md)

## Index

### Constructors

* [constructor](_db_api_beacon_repository_.bulkrepository.md#protected-constructor)

### Properties

* [bucket](_db_api_beacon_repository_.bulkrepository.md#protected-bucket)
* [config](_db_api_beacon_repository_.bulkrepository.md#protected-config)
* [db](_db_api_beacon_repository_.bulkrepository.md#protected-db)
* [type](_db_api_beacon_repository_.bulkrepository.md#protected-type)

### Methods

* [add](_db_api_beacon_repository_.bulkrepository.md#add)
* [addMany](_db_api_beacon_repository_.bulkrepository.md#addmany)
* [delete](_db_api_beacon_repository_.bulkrepository.md#delete)
* [deleteMany](_db_api_beacon_repository_.bulkrepository.md#deletemany)
* [deleteManyByValue](_db_api_beacon_repository_.bulkrepository.md#deletemanybyvalue)
* [get](_db_api_beacon_repository_.bulkrepository.md#get)
* [getAll](_db_api_beacon_repository_.bulkrepository.md#getall)
* [getAllBetween](_db_api_beacon_repository_.bulkrepository.md#getallbetween)
* [getId](_db_api_beacon_repository_.bulkrepository.md#getid)
* [getSerialized](_db_api_beacon_repository_.bulkrepository.md#getserialized)
* [has](_db_api_beacon_repository_.bulkrepository.md#has)
* [set](_db_api_beacon_repository_.bulkrepository.md#set)

## Constructors

### `Protected` constructor

\+ **new BulkRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md), `bucket`: [Bucket](../enums/_db_schema_.bucket.md), `type`: Type‹T›): *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[constructor](_db_api_beacon_repository_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:16](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md) |
`bucket` | [Bucket](../enums/_db_schema_.bucket.md) |
`type` | Type‹T› |

**Returns:** *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[bucket](_db_api_beacon_repository_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:14](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L14)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[config](_db_api_beacon_repository_.repository.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:10](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L10)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[db](_db_api_beacon_repository_.repository.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:12](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L12)*

___

### `Protected` type

• **type**: *Type‹T›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[type](_db_api_beacon_repository_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:16](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L16)*

## Methods

###  add

▸ **add**(`value`: T): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[add](_db_api_beacon_repository_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:61](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Promise‹void›*

___

###  addMany

▸ **addMany**(`values`: ArrayLike‹T›): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:97](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹T› |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[delete](_db_api_beacon_repository_.repository.md#delete)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:53](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹void›*

___

###  deleteMany

▸ **deleteMany**(`ids`: [Id](../modules/_db_api_beacon_repository_.md#id)[]): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:85](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | [Id](../modules/_db_api_beacon_repository_.md#id)[] |

**Returns:** *Promise‹void›*

___

###  deleteManyByValue

▸ **deleteManyByValue**(`values`: ArrayLike‹T›): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:93](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹T› |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹T | null›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[get](_db_api_beacon_repository_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:29](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹T | null›*

___

###  getAll

▸ **getAll**(): *Promise‹T[]›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:69](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L69)*

**Returns:** *Promise‹T[]›*

___

###  getAllBetween

▸ **getAllBetween**(`lowerLimit`: number | null, `upperLimit`: number | null): *Promise‹T[]›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:77](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`lowerLimit` | number &#124; null |
`upperLimit` | number &#124; null |

**Returns:** *Promise‹T[]›*

___

###  getId

▸ **getId**(`value`: T): *[Id](../modules/_db_api_beacon_repository_.md#id)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[getId](_db_api_beacon_repository_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:57](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Id](../modules/_db_api_beacon_repository_.md#id)*

___

###  getSerialized

▸ **getSerialized**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹Uint8Array | null›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[getSerialized](_db_api_beacon_repository_.repository.md#getserialized)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:34](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹Uint8Array | null›*

___

###  has

▸ **has**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹boolean›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[has](_db_api_beacon_repository_.repository.md#has)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:45](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹boolean›*

___

###  set

▸ **set**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id), `value`: T): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[set](_db_api_beacon_repository_.repository.md#set)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:49](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |
`value` | T |

**Returns:** *Promise‹void›*
