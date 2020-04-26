[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repository"](../modules/_db_api_beacon_repository_.md) › [Repository](_db_api_beacon_repository_.repository.md)

# Class: Repository <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Repository**

  ↳ [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)

  ↳ [StateRepository](_db_api_beacon_repositories_state_.staterepository.md)

## Index

### Constructors

* [constructor](_db_api_beacon_repository_.repository.md#protected-constructor)

### Properties

* [bucket](_db_api_beacon_repository_.repository.md#protected-bucket)
* [config](_db_api_beacon_repository_.repository.md#protected-config)
* [db](_db_api_beacon_repository_.repository.md#protected-db)
* [type](_db_api_beacon_repository_.repository.md#protected-type)

### Methods

* [add](_db_api_beacon_repository_.repository.md#add)
* [delete](_db_api_beacon_repository_.repository.md#delete)
* [get](_db_api_beacon_repository_.repository.md#get)
* [getId](_db_api_beacon_repository_.repository.md#getid)
* [getSerialized](_db_api_beacon_repository_.repository.md#getserialized)
* [has](_db_api_beacon_repository_.repository.md#has)
* [set](_db_api_beacon_repository_.repository.md#set)

## Constructors

### `Protected` constructor

\+ **new Repository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md), `bucket`: [Bucket](../enums/_db_schema_.bucket.md), `type`: Type‹T›): *[Repository](_db_api_beacon_repository_.repository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:16](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md) |
`bucket` | [Bucket](../enums/_db_schema_.bucket.md) |
`type` | Type‹T› |

**Returns:** *[Repository](_db_api_beacon_repository_.repository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_schema_.bucket.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:14](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L14)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:10](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L10)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:12](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L12)*

___

### `Protected` type

• **type**: *Type‹T›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:16](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L16)*

## Methods

###  add

▸ **add**(`value`: T): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:61](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:53](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹void›*

___

###  get

▸ **get**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹T | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:29](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹T | null›*

___

###  getId

▸ **getId**(`value`: T): *[Id](../modules/_db_api_beacon_repository_.md#id)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:57](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *[Id](../modules/_db_api_beacon_repository_.md#id)*

___

###  getSerialized

▸ **getSerialized**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:34](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹Uint8Array | null›*

___

###  has

▸ **has**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹boolean›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:45](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹boolean›*

___

###  set

▸ **set**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id), `value`: T): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:49](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/repository.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |
`value` | T |

**Returns:** *Promise‹void›*
