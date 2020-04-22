[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/depositDataRootList"](../modules/_db_api_beacon_repositories_depositdatarootlist_.md) › [DepositDataRootListRepository](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)

# Class: DepositDataRootListRepository

## Hierarchy

  ↳ [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹List‹Root››

  ↳ **DepositDataRootListRepository**

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#constructor)

### Properties

* [bucket](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#protected-bucket)
* [config](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#protected-config)
* [db](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#protected-db)
* [type](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#protected-type)

### Methods

* [add](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#add)
* [addMany](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#addmany)
* [delete](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#delete)
* [deleteMany](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#deletemany)
* [deleteManyByValue](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#deletemanybyvalue)
* [get](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#get)
* [getAll](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#getall)
* [getAllBetween](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#getallbetween)
* [getId](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#getid)
* [getSerialized](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#getserialized)
* [has](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#has)
* [set](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#set)

## Constructors

###  constructor

\+ **new DepositDataRootListRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)): *[DepositDataRootListRepository](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[constructor](_db_api_beacon_repository_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts:9](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md) |

**Returns:** *[DepositDataRootListRepository](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[bucket](_db_api_beacon_repository_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:14](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L14)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[config](_db_api_beacon_repository_.repository.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:10](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L10)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[db](_db_api_beacon_repository_.repository.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:12](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L12)*

___

### `Protected` type

• **type**: *Type‹List‹Root››*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[type](_db_api_beacon_repository_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:16](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L16)*

## Methods

###  add

▸ **add**(`value`: List‹Root›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[add](_db_api_beacon_repository_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:61](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | List‹Root› |

**Returns:** *Promise‹void›*

___

###  addMany

▸ **addMany**(`values`: ArrayLike‹List‹Root››): *Promise‹void›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[addMany](_db_api_beacon_repository_.bulkrepository.md#addmany)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:97](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹List‹Root›› |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[delete](_db_api_beacon_repository_.repository.md#delete)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:53](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹void›*

___

###  deleteMany

▸ **deleteMany**(`ids`: [Id](../modules/_db_api_beacon_repository_.md#id)[]): *Promise‹void›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[deleteMany](_db_api_beacon_repository_.bulkrepository.md#deletemany)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:85](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | [Id](../modules/_db_api_beacon_repository_.md#id)[] |

**Returns:** *Promise‹void›*

___

###  deleteManyByValue

▸ **deleteManyByValue**(`values`: ArrayLike‹List‹Root››): *Promise‹void›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[deleteManyByValue](_db_api_beacon_repository_.bulkrepository.md#deletemanybyvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:93](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹List‹Root›› |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹TreeBacked‹List‹Root›››*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[get](_db_api_beacon_repository_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts:22](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹TreeBacked‹List‹Root›››*

___

###  getAll

▸ **getAll**(): *Promise‹List‹Root›[]›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[getAll](_db_api_beacon_repository_.bulkrepository.md#getall)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:69](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L69)*

**Returns:** *Promise‹List‹Root›[]›*

___

###  getAllBetween

▸ **getAllBetween**(`lowerLimit`: number | null, `upperLimit`: number | null): *Promise‹List‹Root›[]›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[getAllBetween](_db_api_beacon_repository_.bulkrepository.md#getallbetween)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:77](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`lowerLimit` | number &#124; null |
`upperLimit` | number &#124; null |

**Returns:** *Promise‹List‹Root›[]›*

___

###  getId

▸ **getId**(`value`: List‹Root›): *[Id](../modules/_db_api_beacon_repository_.md#id)*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[getId](_db_api_beacon_repository_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts:18](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | List‹Root› |

**Returns:** *[Id](../modules/_db_api_beacon_repository_.md#id)*

___

###  getSerialized

▸ **getSerialized**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹Uint8Array | null›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[getSerialized](_db_api_beacon_repository_.repository.md#getserialized)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:34](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹Uint8Array | null›*

___

###  has

▸ **has**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹boolean›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[has](_db_api_beacon_repository_.repository.md#has)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:45](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹boolean›*

___

###  set

▸ **set**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id), `value`: List‹Root›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[set](_db_api_beacon_repository_.repository.md#set)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:49](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/api/beacon/repository.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |
`value` | List‹Root› |

**Returns:** *Promise‹void›*
