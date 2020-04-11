[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/abstract"](../modules/_db_api_abstract_.md) › [DatabaseService](_db_api_abstract_.databaseservice.md)

# Class: DatabaseService

## Hierarchy

* **DatabaseService**

  ↳ [BeaconDb](_db_api_beacon_beacon_.beacondb.md)

  ↳ [ValidatorDB](_db_api_validator_validator_.validatordb.md)

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md)

## Index

### Constructors

* [constructor](_db_api_abstract_.databaseservice.md#protected-constructor)

### Properties

* [config](_db_api_abstract_.databaseservice.md#protected-config)
* [db](_db_api_abstract_.databaseservice.md#protected-db)

### Methods

* [start](_db_api_abstract_.databaseservice.md#start)
* [stop](_db_api_abstract_.databaseservice.md#stop)

## Constructors

### `Protected` constructor

\+ **new DatabaseService**(`opts`: [IDatabaseApiOptions](../interfaces/_db_api_abstract_.idatabaseapioptions.md)): *[DatabaseService](_db_api_abstract_.databaseservice.md)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:13](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/abstract.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IDatabaseApiOptions](../interfaces/_db_api_abstract_.idatabaseapioptions.md) |

**Returns:** *[DatabaseService](_db_api_abstract_.databaseservice.md)*

## Properties

### `Protected` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/db/api/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/abstract.ts#L12)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:13](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/abstract.ts#L13)*

## Methods

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/abstract.ts#L20)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/abstract.ts#L24)*

**Returns:** *Promise‹void›*
