[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/state"](../modules/_db_api_beacon_repositories_state_.md) › [StateRepository](_db_api_beacon_repositories_state_.staterepository.md)

# Class: StateRepository

## Hierarchy

* [Repository](_db_api_beacon_repository_.repository.md)‹BeaconState›

  ↳ **StateRepository**

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_state_.staterepository.md#constructor)

### Properties

* [bucket](_db_api_beacon_repositories_state_.staterepository.md#protected-bucket)
* [chain](_db_api_beacon_repositories_state_.staterepository.md#private-chain)
* [config](_db_api_beacon_repositories_state_.staterepository.md#protected-config)
* [db](_db_api_beacon_repositories_state_.staterepository.md#protected-db)
* [type](_db_api_beacon_repositories_state_.staterepository.md#protected-type)

### Methods

* [add](_db_api_beacon_repositories_state_.staterepository.md#add)
* [delete](_db_api_beacon_repositories_state_.staterepository.md#delete)
* [get](_db_api_beacon_repositories_state_.staterepository.md#get)
* [getFinalized](_db_api_beacon_repositories_state_.staterepository.md#getfinalized)
* [getId](_db_api_beacon_repositories_state_.staterepository.md#getid)
* [getJustified](_db_api_beacon_repositories_state_.staterepository.md#getjustified)
* [getLatest](_db_api_beacon_repositories_state_.staterepository.md#getlatest)
* [getSerialized](_db_api_beacon_repositories_state_.staterepository.md#getserialized)
* [has](_db_api_beacon_repositories_state_.staterepository.md#has)
* [set](_db_api_beacon_repositories_state_.staterepository.md#set)

## Constructors

###  constructor

\+ **new StateRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md), `chain`: [ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)): *[StateRepository](_db_api_beacon_repositories_state_.staterepository.md)*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[constructor](_db_api_beacon_repository_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:11](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/state.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md) |
`chain` | [ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md) |

**Returns:** *[StateRepository](_db_api_beacon_repositories_state_.staterepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[bucket](_db_api_beacon_repository_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:14](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L14)*

___

### `Private` chain

• **chain**: *[ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:11](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/state.ts#L11)*

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

• **type**: *Type‹BeaconState›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[type](_db_api_beacon_repository_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:16](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L16)*

## Methods

###  add

▸ **add**(`value`: BeaconState): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[add](_db_api_beacon_repository_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:61](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BeaconState |

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

###  get

▸ **get**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id)): *Promise‹BeaconState | null›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[get](_db_api_beacon_repository_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:29](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |

**Returns:** *Promise‹BeaconState | null›*

___

###  getFinalized

▸ **getFinalized**(): *Promise‹BeaconState›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:33](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/state.ts#L33)*

**Returns:** *Promise‹BeaconState›*

___

###  getId

▸ **getId**(`value`: BeaconState): *[Id](../modules/_db_api_beacon_repository_.md#id)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[getId](_db_api_beacon_repository_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:57](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | BeaconState |

**Returns:** *[Id](../modules/_db_api_beacon_repository_.md#id)*

___

###  getJustified

▸ **getJustified**(): *Promise‹BeaconState›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:45](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/state.ts#L45)*

**Returns:** *Promise‹BeaconState›*

___

###  getLatest

▸ **getLatest**(): *Promise‹BeaconState›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/state.ts:21](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/state.ts#L21)*

**Returns:** *Promise‹BeaconState›*

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

▸ **set**(`id`: [Id](../modules/_db_api_beacon_repository_.md#id), `value`: BeaconState): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[set](_db_api_beacon_repository_.repository.md#set)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:49](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repository.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Id](../modules/_db_api_beacon_repository_.md#id) |
`value` | BeaconState |

**Returns:** *Promise‹void›*
