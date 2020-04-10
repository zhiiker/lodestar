[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/block"](../modules/_db_api_beacon_repositories_block_.md) › [BlockRepository](_db_api_beacon_repositories_block_.blockrepository.md)

# Class: BlockRepository

## Hierarchy

  ↳ [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹SignedBeaconBlock›

  ↳ **BlockRepository**

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_block_.blockrepository.md#constructor)

### Properties

* [bucket](_db_api_beacon_repositories_block_.blockrepository.md#protected-bucket)
* [chain](_db_api_beacon_repositories_block_.blockrepository.md#private-chain)
* [config](_db_api_beacon_repositories_block_.blockrepository.md#protected-config)
* [db](_db_api_beacon_repositories_block_.blockrepository.md#protected-db)
* [type](_db_api_beacon_repositories_block_.blockrepository.md#protected-type)

### Methods

* [add](_db_api_beacon_repositories_block_.blockrepository.md#add)
* [addMany](_db_api_beacon_repositories_block_.blockrepository.md#addmany)
* [delete](_db_api_beacon_repositories_block_.blockrepository.md#delete)
* [deleteMany](_db_api_beacon_repositories_block_.blockrepository.md#deletemany)
* [deleteManyByValue](_db_api_beacon_repositories_block_.blockrepository.md#deletemanybyvalue)
* [get](_db_api_beacon_repositories_block_.blockrepository.md#get)
* [getAll](_db_api_beacon_repositories_block_.blockrepository.md#getall)
* [getAllBetween](_db_api_beacon_repositories_block_.blockrepository.md#getallbetween)
* [getBlockBySlot](_db_api_beacon_repositories_block_.blockrepository.md#getblockbyslot)
* [getChainHead](_db_api_beacon_repositories_block_.blockrepository.md#getchainhead)
* [getFinalizedBlock](_db_api_beacon_repositories_block_.blockrepository.md#getfinalizedblock)
* [getId](_db_api_beacon_repositories_block_.blockrepository.md#getid)
* [getJustifiedBlock](_db_api_beacon_repositories_block_.blockrepository.md#getjustifiedblock)
* [getSerialized](_db_api_beacon_repositories_block_.blockrepository.md#getserialized)
* [has](_db_api_beacon_repositories_block_.blockrepository.md#has)
* [isBadBlock](_db_api_beacon_repositories_block_.blockrepository.md#isbadblock)
* [set](_db_api_beacon_repositories_block_.blockrepository.md#set)
* [storeBadBlock](_db_api_beacon_repositories_block_.blockrepository.md#storebadblock)

## Constructors

###  constructor

\+ **new BlockRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md), `chain`: [ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)): *[BlockRepository](_db_api_beacon_repositories_block_.blockrepository.md)*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[constructor](_db_api_beacon_repository_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:11](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md) |
`chain` | [ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md) |

**Returns:** *[BlockRepository](_db_api_beacon_repositories_block_.blockrepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repository_.repository.md).[bucket](_db_api_beacon_repository_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:14](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L14)*

___

### `Private` chain

• **chain**: *[ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:11](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L11)*

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

▸ **addMany**(`values`: ArrayLike‹SignedBeaconBlock›): *Promise‹void›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[addMany](_db_api_beacon_repository_.bulkrepository.md#addmany)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:97](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹SignedBeaconBlock› |

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

▸ **getAllBetween**(`lowerLimit`: number | null, `upperLimit`: number | null): *Promise‹SignedBeaconBlock[]›*

*Inherited from [BulkRepository](_db_api_beacon_repository_.bulkrepository.md).[getAllBetween](_db_api_beacon_repository_.bulkrepository.md#getallbetween)*

*Defined in [packages/lodestar/src/db/api/beacon/repository.ts:77](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repository.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`lowerLimit` | number &#124; null |
`upperLimit` | number &#124; null |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  getBlockBySlot

▸ **getBlockBySlot**(`slot`: Slot): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:45](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getChainHead

▸ **getChainHead**(): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:53](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L53)*

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getFinalizedBlock

▸ **getFinalizedBlock**(): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:33](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L33)*

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getId

▸ **getId**(`value`: SignedBeaconBlock): *Uint8Array*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[getId](_db_api_beacon_repository_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:21](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedBeaconBlock |

**Returns:** *Uint8Array*

___

###  getJustifiedBlock

▸ **getJustifiedBlock**(): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:39](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L39)*

**Returns:** *Promise‹SignedBeaconBlock | null›*

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

###  isBadBlock

▸ **isBadBlock**(`root`: Uint8Array): *Promise‹boolean›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:68](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹boolean›*

___

###  set

▸ **set**(`id`: Uint8Array, `value`: SignedBeaconBlock): *Promise‹void›*

*Overrides [Repository](_db_api_beacon_repository_.repository.md).[set](_db_api_beacon_repository_.repository.md#set)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:25](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Uint8Array |
`value` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  storeBadBlock

▸ **storeBadBlock**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/block.ts:61](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/db/api/beacon/repositories/block.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*
