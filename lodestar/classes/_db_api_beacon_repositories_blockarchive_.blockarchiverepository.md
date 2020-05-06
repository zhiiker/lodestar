[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/blockArchive"](../modules/_db_api_beacon_repositories_blockarchive_.md) › [BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)

# Class: BlockArchiveRepository

Stores finalized blocks. Block slot is identifier.

## Hierarchy

* [Repository](_db_api_beacon_repositories_abstract_.repository.md)‹Slot, SignedBeaconBlock›

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
* [batchAdd](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#batchadd)
* [batchDelete](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#batchdelete)
* [batchPut](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#batchput)
* [batchRemove](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#batchremove)
* [dbFilterOptions](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#protected-dbfilteroptions)
* [decodeKey](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#decodekey)
* [decodeValue](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#decodevalue)
* [delete](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#delete)
* [encodeKey](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#encodekey)
* [encodeValue](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#encodevalue)
* [entries](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#entries)
* [entriesStream](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#entriesstream)
* [firstEntry](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#firstentry)
* [firstKey](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#firstkey)
* [firstValue](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#firstvalue)
* [get](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#get)
* [getId](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#getid)
* [has](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#has)
* [keys](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#keys)
* [keysStream](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#keysstream)
* [lastEntry](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#lastentry)
* [lastKey](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#lastkey)
* [lastValue](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#lastvalue)
* [put](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#put)
* [remove](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#remove)
* [values](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#values)
* [valuesStream](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md#valuesstream)

## Constructors

###  constructor

\+ **new BlockArchiveRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›): *[BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[constructor](_db_api_beacon_repositories_abstract_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts:15](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer› |

**Returns:** *[BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_api_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[bucket](_db_api_beacon_repositories_abstract_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:22](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L22)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[config](_db_api_beacon_repositories_abstract_.repository.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:18](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L18)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[db](_db_api_beacon_repositories_abstract_.repository.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L20)*

___

### `Protected` type

• **type**: *Type‹SignedBeaconBlock›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[type](_db_api_beacon_repositories_abstract_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L24)*

## Methods

###  add

▸ **add**(`value`: SignedBeaconBlock): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[add](_db_api_beacon_repositories_abstract_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:80](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  batchAdd

▸ **batchAdd**(`values`: ArrayLike‹SignedBeaconBlock›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchAdd](_db_api_beacon_repositories_abstract_.repository.md#batchadd)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:99](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹SignedBeaconBlock› |

**Returns:** *Promise‹void›*

___

###  batchDelete

▸ **batchDelete**(`ids`: ArrayLike‹Slot›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchDelete](_db_api_beacon_repositories_abstract_.repository.md#batchdelete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:95](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | ArrayLike‹Slot› |

**Returns:** *Promise‹void›*

___

###  batchPut

▸ **batchPut**(`items`: ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchPut](_db_api_beacon_repositories_abstract_.repository.md#batchput)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:88](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock›› |

**Returns:** *Promise‹void›*

___

###  batchRemove

▸ **batchRemove**(`values`: ArrayLike‹SignedBeaconBlock›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchRemove](_db_api_beacon_repositories_abstract_.repository.md#batchremove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:106](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹SignedBeaconBlock› |

**Returns:** *Promise‹void›*

___

### `Protected` dbFilterOptions

▸ **dbFilterOptions**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot›): *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[dbFilterOptions](_db_api_beacon_repositories_abstract_.repository.md#protected-dbfilteroptions)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:208](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L208)*

Transforms opts from I to Buffer

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot› |

**Returns:** *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

___

###  decodeKey

▸ **decodeKey**(`key`: Buffer): *Slot*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeKey](_db_api_beacon_repositories_abstract_.repository.md#decodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:49](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *Slot*

___

###  decodeValue

▸ **decodeValue**(`data`: Buffer): *SignedBeaconBlock*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeValue](_db_api_beacon_repositories_abstract_.repository.md#decodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:41](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *SignedBeaconBlock*

___

###  delete

▸ **delete**(`id`: Slot): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[delete](_db_api_beacon_repositories_abstract_.repository.md#delete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:71](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Slot |

**Returns:** *Promise‹void›*

___

###  encodeKey

▸ **encodeKey**(`id`: Slot): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeKey](_db_api_beacon_repositories_abstract_.repository.md#encodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:45](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Slot |

**Returns:** *Buffer*

___

###  encodeValue

▸ **encodeValue**(`value`: SignedBeaconBlock): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeValue](_db_api_beacon_repositories_abstract_.repository.md#encodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:37](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedBeaconBlock |

**Returns:** *Buffer*

___

###  entries

▸ **entries**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot›): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock›[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entries](_db_api_beacon_repositories_abstract_.repository.md#entries)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:136](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot› |

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock›[]›*

___

###  entriesStream

▸ **entriesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot›): *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock››*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entriesStream](_db_api_beacon_repositories_abstract_.repository.md#entriesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:143](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot› |

**Returns:** *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock››*

___

###  firstEntry

▸ **firstEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstEntry](_db_api_beacon_repositories_abstract_.repository.md#firstentry)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:189](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L189)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock› | null›*

___

###  firstKey

▸ **firstKey**(): *Promise‹Slot | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstKey](_db_api_beacon_repositories_abstract_.repository.md#firstkey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:157](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L157)*

**Returns:** *Promise‹Slot | null›*

___

###  firstValue

▸ **firstValue**(): *Promise‹SignedBeaconBlock | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstValue](_db_api_beacon_repositories_abstract_.repository.md#firstvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:173](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L173)*

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  get

▸ **get**(`id`: Slot): *Promise‹SignedBeaconBlock | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[get](_db_api_beacon_repositories_abstract_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:53](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Slot |

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getId

▸ **getId**(`value`: SignedBeaconBlock): *Slot*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[getId](_db_api_beacon_repositories_abstract_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts:24](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedBeaconBlock |

**Returns:** *Slot*

___

###  has

▸ **has**(`id`: Slot): *Promise‹boolean›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[has](_db_api_beacon_repositories_abstract_.repository.md#has)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:63](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Slot |

**Returns:** *Promise‹boolean›*

___

###  keys

▸ **keys**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot›): *Promise‹Slot[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keys](_db_api_beacon_repositories_abstract_.repository.md#keys)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:110](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot› |

**Returns:** *Promise‹Slot[]›*

___

###  keysStream

▸ **keysStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot›): *AsyncIterable‹Slot›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keysStream](_db_api_beacon_repositories_abstract_.repository.md#keysstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:114](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Slot› |

**Returns:** *AsyncIterable‹Slot›*

___

###  lastEntry

▸ **lastEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastEntry](_db_api_beacon_repositories_abstract_.repository.md#lastentry)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:197](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L197)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Slot, SignedBeaconBlock› | null›*

___

###  lastKey

▸ **lastKey**(): *Promise‹Slot | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastKey](_db_api_beacon_repositories_abstract_.repository.md#lastkey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:165](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L165)*

**Returns:** *Promise‹Slot | null›*

___

###  lastValue

▸ **lastValue**(): *Promise‹SignedBeaconBlock | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastValue](_db_api_beacon_repositories_abstract_.repository.md#lastvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:181](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L181)*

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  put

▸ **put**(`id`: Slot, `value`: SignedBeaconBlock): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[put](_db_api_beacon_repositories_abstract_.repository.md#put)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:67](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Slot |
`value` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`value`: SignedBeaconBlock): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[remove](_db_api_beacon_repositories_abstract_.repository.md#remove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:84](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  values

▸ **values**(`opts?`: [IBlockFilterOptions](../interfaces/_db_api_beacon_repositories_blockarchive_.iblockfilteroptions.md)): *Promise‹SignedBeaconBlock[]›*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[values](_db_api_beacon_repositories_abstract_.repository.md#values)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts:28](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IBlockFilterOptions](../interfaces/_db_api_beacon_repositories_blockarchive_.iblockfilteroptions.md) |

**Returns:** *Promise‹SignedBeaconBlock[]›*

___

###  valuesStream

▸ **valuesStream**(`opts?`: [IBlockFilterOptions](../interfaces/_db_api_beacon_repositories_blockarchive_.iblockfilteroptions.md)): *AsyncIterable‹SignedBeaconBlock›*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[valuesStream](_db_api_beacon_repositories_abstract_.repository.md#valuesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts:36](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/db/api/beacon/repositories/blockArchive.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IBlockFilterOptions](../interfaces/_db_api_beacon_repositories_blockarchive_.iblockfilteroptions.md) |

**Returns:** *AsyncIterable‹SignedBeaconBlock›*
