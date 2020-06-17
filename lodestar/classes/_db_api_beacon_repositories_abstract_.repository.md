[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/abstract"](../modules/_db_api_beacon_repositories_abstract_.md) › [Repository](_db_api_beacon_repositories_abstract_.repository.md)

# Class: Repository <**I, T**>

Repository is a high level kv storage
managing a Buffer to Buffer kv database
It translates typed keys and values to Buffers required by the underlying database

By default, SSZ-encoded values,
indexed by root

## Type parameters

▪ **I**: *[Id](../modules/_db_api_beacon_repositories_abstract_.md#id)*

▪ **T**

## Hierarchy

* **Repository**

  ↳ [BadBlockRepository](_db_api_beacon_repositories_badblock_.badblockrepository.md)

  ↳ [BlockRepository](_db_api_beacon_repositories_block_.blockrepository.md)

  ↳ [BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)

  ↳ [StateArchiveRepository](_db_api_beacon_repositories_statearchive_.statearchiverepository.md)

  ↳ [AttestationRepository](_db_api_beacon_repositories_attestation_.attestationrepository.md)

  ↳ [AggregateAndProofRepository](_db_api_beacon_repositories_aggregateandproof_.aggregateandproofrepository.md)

  ↳ [AttesterSlashingRepository](_db_api_beacon_repositories_attesterslashing_.attesterslashingrepository.md)

  ↳ [DepositDataRepository](_db_api_beacon_repositories_depositdata_.depositdatarepository.md)

  ↳ [ProposerSlashingRepository](_db_api_beacon_repositories_proposerslashing_.proposerslashingrepository.md)

  ↳ [VoluntaryExitRepository](_db_api_beacon_repositories_voluntaryexit_.voluntaryexitrepository.md)

  ↳ [DepositDataRootRepository](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md)

  ↳ [Eth1DataRepository](_db_api_beacon_repositories_eth1data_.eth1datarepository.md)

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_abstract_.repository.md#protected-constructor)

### Properties

* [bucket](_db_api_beacon_repositories_abstract_.repository.md#protected-bucket)
* [config](_db_api_beacon_repositories_abstract_.repository.md#protected-config)
* [db](_db_api_beacon_repositories_abstract_.repository.md#protected-db)
* [type](_db_api_beacon_repositories_abstract_.repository.md#protected-type)

### Methods

* [add](_db_api_beacon_repositories_abstract_.repository.md#add)
* [batchAdd](_db_api_beacon_repositories_abstract_.repository.md#batchadd)
* [batchDelete](_db_api_beacon_repositories_abstract_.repository.md#batchdelete)
* [batchPut](_db_api_beacon_repositories_abstract_.repository.md#batchput)
* [batchRemove](_db_api_beacon_repositories_abstract_.repository.md#batchremove)
* [dbFilterOptions](_db_api_beacon_repositories_abstract_.repository.md#protected-dbfilteroptions)
* [decodeKey](_db_api_beacon_repositories_abstract_.repository.md#decodekey)
* [decodeValue](_db_api_beacon_repositories_abstract_.repository.md#decodevalue)
* [delete](_db_api_beacon_repositories_abstract_.repository.md#delete)
* [encodeKey](_db_api_beacon_repositories_abstract_.repository.md#encodekey)
* [encodeValue](_db_api_beacon_repositories_abstract_.repository.md#encodevalue)
* [entries](_db_api_beacon_repositories_abstract_.repository.md#entries)
* [entriesStream](_db_api_beacon_repositories_abstract_.repository.md#entriesstream)
* [firstEntry](_db_api_beacon_repositories_abstract_.repository.md#firstentry)
* [firstKey](_db_api_beacon_repositories_abstract_.repository.md#firstkey)
* [firstValue](_db_api_beacon_repositories_abstract_.repository.md#firstvalue)
* [get](_db_api_beacon_repositories_abstract_.repository.md#get)
* [getId](_db_api_beacon_repositories_abstract_.repository.md#getid)
* [has](_db_api_beacon_repositories_abstract_.repository.md#has)
* [keys](_db_api_beacon_repositories_abstract_.repository.md#keys)
* [keysStream](_db_api_beacon_repositories_abstract_.repository.md#keysstream)
* [lastEntry](_db_api_beacon_repositories_abstract_.repository.md#lastentry)
* [lastKey](_db_api_beacon_repositories_abstract_.repository.md#lastkey)
* [lastValue](_db_api_beacon_repositories_abstract_.repository.md#lastvalue)
* [put](_db_api_beacon_repositories_abstract_.repository.md#put)
* [remove](_db_api_beacon_repositories_abstract_.repository.md#remove)
* [values](_db_api_beacon_repositories_abstract_.repository.md#values)
* [valuesStream](_db_api_beacon_repositories_abstract_.repository.md#valuesstream)

## Constructors

### `Protected` constructor

\+ **new Repository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›, `bucket`: [Bucket](../enums/_db_api_schema_.bucket.md), `type`: Type‹T›): *[Repository](_db_api_beacon_repositories_abstract_.repository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer› |
`bucket` | [Bucket](../enums/_db_api_schema_.bucket.md) |
`type` | Type‹T› |

**Returns:** *[Repository](_db_api_beacon_repositories_abstract_.repository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_api_schema_.bucket.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:22](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L22)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:18](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L18)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L20)*

___

### `Protected` type

• **type**: *Type‹T›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L24)*

## Methods

###  add

▸ **add**(`value`: T): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:80](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Promise‹void›*

___

###  batchAdd

▸ **batchAdd**(`values`: ArrayLike‹T›): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:99](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹T› |

**Returns:** *Promise‹void›*

___

###  batchDelete

▸ **batchDelete**(`ids`: ArrayLike‹I›): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:95](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | ArrayLike‹I› |

**Returns:** *Promise‹void›*

___

###  batchPut

▸ **batchPut**(`items`: ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T››): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:88](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T›› |

**Returns:** *Promise‹void›*

___

###  batchRemove

▸ **batchRemove**(`values`: ArrayLike‹T›): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:106](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹T› |

**Returns:** *Promise‹void›*

___

### `Protected` dbFilterOptions

▸ **dbFilterOptions**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I›): *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:208](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L208)*

Transforms opts from I to Buffer

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I› |

**Returns:** *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

___

###  decodeKey

▸ **decodeKey**(`key`: Buffer): *I*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:49](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *I*

___

###  decodeValue

▸ **decodeValue**(`data`: Buffer): *T*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:41](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *T*

___

###  delete

▸ **delete**(`id`: I): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:71](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | I |

**Returns:** *Promise‹void›*

___

###  encodeKey

▸ **encodeKey**(`id`: I): *Buffer*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:45](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | I |

**Returns:** *Buffer*

___

###  encodeValue

▸ **encodeValue**(`value`: T): *Buffer*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:37](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Buffer*

___

###  entries

▸ **entries**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I›): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T›[]›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:136](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I› |

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T›[]›*

___

###  entriesStream

▸ **entriesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I›): *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T››*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:143](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I› |

**Returns:** *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T››*

___

###  firstEntry

▸ **firstEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T› | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:189](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L189)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T› | null›*

___

###  firstKey

▸ **firstKey**(): *Promise‹I | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:157](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L157)*

**Returns:** *Promise‹I | null›*

___

###  firstValue

▸ **firstValue**(): *Promise‹T | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:173](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L173)*

**Returns:** *Promise‹T | null›*

___

###  get

▸ **get**(`id`: I): *Promise‹T | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:53](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | I |

**Returns:** *Promise‹T | null›*

___

###  getId

▸ **getId**(`value`: T): *I*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:76](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *I*

___

###  has

▸ **has**(`id`: I): *Promise‹boolean›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:63](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | I |

**Returns:** *Promise‹boolean›*

___

###  keys

▸ **keys**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I›): *Promise‹I[]›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:110](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I› |

**Returns:** *Promise‹I[]›*

___

###  keysStream

▸ **keysStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I›): *AsyncIterable‹I›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:114](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I› |

**Returns:** *AsyncIterable‹I›*

___

###  lastEntry

▸ **lastEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T› | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:197](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L197)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹I, T› | null›*

___

###  lastKey

▸ **lastKey**(): *Promise‹I | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:165](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L165)*

**Returns:** *Promise‹I | null›*

___

###  lastValue

▸ **lastValue**(): *Promise‹T | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:181](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L181)*

**Returns:** *Promise‹T | null›*

___

###  put

▸ **put**(`id`: I, `value`: T): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:67](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | I |
`value` | T |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`value`: T): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:84](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Promise‹void›*

___

###  values

▸ **values**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I›): *Promise‹T[]›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:123](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I› |

**Returns:** *Promise‹T[]›*

___

###  valuesStream

▸ **valuesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I›): *AsyncIterable‹T›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:127](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹I› |

**Returns:** *AsyncIterable‹T›*
