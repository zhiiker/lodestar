[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/voluntaryExits"](../modules/_db_api_beacon_repositories_voluntaryexits_.md) › [VoluntaryExitRepository](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md)

# Class: VoluntaryExitRepository

## Hierarchy

  ↳ [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹SignedVoluntaryExit›

  ↳ **VoluntaryExitRepository**

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#constructor)

### Properties

* [bucket](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#protected-bucket)
* [config](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#protected-config)
* [db](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#protected-db)
* [type](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#protected-type)

### Methods

* [add](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#add)
* [addMany](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#addmany)
* [delete](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#delete)
* [deleteMany](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#deletemany)
* [deleteManyByValue](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#deletemanybyvalue)
* [get](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#get)
* [getAll](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#getall)
* [getAllBetween](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#getallbetween)
* [getId](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#getid)
* [getSerialized](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#getserialized)
* [has](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#has)
* [set](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md#set)

## Constructors

###  constructor

\+ **new VoluntaryExitRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)): *[VoluntaryExitRepository](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md)*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[constructor](_db_api_beacon_repository_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/voluntaryExits.ts:8](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/voluntaryExits.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md) |

**Returns:** *[VoluntaryExitRepository](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[bucket](_db_api_beacon_repository_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:14](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L14)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[config](_db_api_beacon_repository_.repository.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:10](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L10)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[db](_db_api_beacon_repository_.repository.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:12](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L12)*

___

### `Protected` type

• **type**: *Type‹SignedVoluntaryExit›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[type](_db_api_beacon_repository_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:16](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L16)*

## Methods

###  add

▸ **add**(`value`: SignedVoluntaryExit): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[add](_db_api_beacon_repository_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:61](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedVoluntaryExit |

**Returns:** *Promise‹void›*

___

###  addMany

▸ **addMany**(`values`: ArrayLike‹SignedVoluntaryExit›): *Promise‹void›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[addMany](_db_api_beacon_repository_.bulkrepository.md#addmany)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:97](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹SignedVoluntaryExit› |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[delete](_db_api_beacon_repository_.repository.md#delete)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:53](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹void›*

___

###  deleteMany

▸ **deleteMany**(`ids`: [Id](../modules/_db_api_beacon_repository_.md#id)[]): *Promise‹void›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[deleteMany](_db_api_beacon_repository_.bulkrepository.md#deletemany)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:85](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | [Id](../modules/_db_api_beacon_repository_.md#id)[] |

**Returns:** *Promise‹void›*

___

###  deleteManyByValue

▸ **deleteManyByValue**(`values`: ArrayLike‹SignedVoluntaryExit›): *Promise‹void›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[deleteManyByValue](_db_api_beacon_repository_.bulkrepository.md#deletemanybyvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:93](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹SignedVoluntaryExit› |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹SignedVoluntaryExit | null›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[get](_db_api_beacon_repository_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:29](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹SignedVoluntaryExit | null›*

___

###  getAll

▸ **getAll**(): *Promise‹SignedVoluntaryExit[]›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[getAll](_db_api_beacon_repository_.bulkrepository.md#getall)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:69](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L69)*

**Returns:** *Promise‹SignedVoluntaryExit[]›*

___

###  getAllBetween

▸ **getAllBetween**(`lowerLimit`: number | null, `upperLimit`: number | null): *Promise‹SignedVoluntaryExit[]›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[getAllBetween](_db_api_beacon_repository_.bulkrepository.md#getallbetween)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:77](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`lowerLimit` | number &#124; null |
`upperLimit` | number &#124; null |

**Returns:** *Promise‹SignedVoluntaryExit[]›*

___

###  getId

▸ **getId**(`value`: SignedVoluntaryExit): *[Id](../modules/_db_api_beacon_repository_.md#id)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[getId](_db_api_beacon_repository_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:57](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedVoluntaryExit |

**Returns:** *[Id](../modules/_db_api_beacon_repository_.md#id)*

___

###  getSerialized

▸ **getSerialized**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹Uint8Array | null›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[getSerialized](_db_api_beacon_repository_.repository.md#getserialized)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:34](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹Uint8Array | null›*

___

###  has

▸ **has**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹boolean›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[has](_db_api_beacon_repository_.repository.md#has)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:45](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹boolean›*

___

###  set

▸ **set**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id), `value`: SignedVoluntaryExit): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[set](_db_api_beacon_repository_.repository.md#set)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:49](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |
`value` | SignedVoluntaryExit |

**Returns:** *Promise‹void›*
