[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/stateArchive"](../modules/_db_api_beacon_repositories_statearchive_.md) › [StateArchiveRepository](_db_api_beacon_repositories_statearchive_.statearchiverepository.md)

# Class: StateArchiveRepository

## Hierarchy

* [Repository](_db_api_beacon_repositories_abstract_.repository.md)‹Epoch, TreeBacked‹BeaconState››

  ↳ **StateArchiveRepository**

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#constructor)

### Properties

* [bucket](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#protected-bucket)
* [config](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#protected-config)
* [db](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#protected-db)
* [type](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#protected-type)

### Methods

* [add](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#add)
* [batchAdd](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#batchadd)
* [batchDelete](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#batchdelete)
* [batchPut](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#batchput)
* [batchRemove](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#batchremove)
* [dbFilterOptions](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#protected-dbfilteroptions)
* [decodeKey](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#decodekey)
* [decodeValue](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#decodevalue)
* [delete](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#delete)
* [encodeKey](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#encodekey)
* [encodeValue](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#encodevalue)
* [entries](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#entries)
* [entriesStream](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#entriesstream)
* [firstEntry](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#firstentry)
* [firstKey](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#firstkey)
* [firstValue](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#firstvalue)
* [get](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#get)
* [getId](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#getid)
* [has](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#has)
* [keys](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#keys)
* [keysStream](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#keysstream)
* [lastEntry](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#lastentry)
* [lastKey](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#lastkey)
* [lastValue](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#lastvalue)
* [put](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#put)
* [remove](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#remove)
* [values](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#values)
* [valuesStream](_db_api_beacon_repositories_statearchive_.statearchiverepository.md#valuesstream)

## Constructors

###  constructor

\+ **new StateArchiveRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›): *[StateArchiveRepository](_db_api_beacon_repositories_statearchive_.statearchiverepository.md)*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[constructor](_db_api_beacon_repositories_abstract_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/stateArchive.ts:10](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/stateArchive.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer› |

**Returns:** *[StateArchiveRepository](_db_api_beacon_repositories_statearchive_.statearchiverepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_api_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[bucket](_db_api_beacon_repositories_abstract_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:22](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L22)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[config](_db_api_beacon_repositories_abstract_.repository.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:18](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L18)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[db](_db_api_beacon_repositories_abstract_.repository.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L20)*

___

### `Protected` type

• **type**: *Type‹TreeBacked‹BeaconState››*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[type](_db_api_beacon_repositories_abstract_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L24)*

## Methods

###  add

▸ **add**(`value`: TreeBacked‹BeaconState›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[add](_db_api_beacon_repositories_abstract_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:80](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TreeBacked‹BeaconState› |

**Returns:** *Promise‹void›*

___

###  batchAdd

▸ **batchAdd**(`values`: ArrayLike‹TreeBacked‹BeaconState››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchAdd](_db_api_beacon_repositories_abstract_.repository.md#batchadd)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:99](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹TreeBacked‹BeaconState›› |

**Returns:** *Promise‹void›*

___

###  batchDelete

▸ **batchDelete**(`ids`: ArrayLike‹Epoch›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchDelete](_db_api_beacon_repositories_abstract_.repository.md#batchdelete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:95](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | ArrayLike‹Epoch› |

**Returns:** *Promise‹void›*

___

###  batchPut

▸ **batchPut**(`items`: ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState›››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchPut](_db_api_beacon_repositories_abstract_.repository.md#batchput)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:88](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState››› |

**Returns:** *Promise‹void›*

___

###  batchRemove

▸ **batchRemove**(`values`: ArrayLike‹TreeBacked‹BeaconState››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchRemove](_db_api_beacon_repositories_abstract_.repository.md#batchremove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:106](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹TreeBacked‹BeaconState›› |

**Returns:** *Promise‹void›*

___

### `Protected` dbFilterOptions

▸ **dbFilterOptions**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch›): *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[dbFilterOptions](_db_api_beacon_repositories_abstract_.repository.md#protected-dbfilteroptions)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:208](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L208)*

Transforms opts from I to Buffer

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch› |

**Returns:** *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

___

###  decodeKey

▸ **decodeKey**(`key`: Buffer): *Epoch*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeKey](_db_api_beacon_repositories_abstract_.repository.md#decodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:49](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *Epoch*

___

###  decodeValue

▸ **decodeValue**(`data`: Buffer): *TreeBacked‹BeaconState›*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeValue](_db_api_beacon_repositories_abstract_.repository.md#decodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/stateArchive.ts:22](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/stateArchive.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *TreeBacked‹BeaconState›*

___

###  delete

▸ **delete**(`id`: Epoch): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[delete](_db_api_beacon_repositories_abstract_.repository.md#delete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:71](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Epoch |

**Returns:** *Promise‹void›*

___

###  encodeKey

▸ **encodeKey**(`id`: Epoch): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeKey](_db_api_beacon_repositories_abstract_.repository.md#encodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:45](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Epoch |

**Returns:** *Buffer*

___

###  encodeValue

▸ **encodeValue**(`value`: TreeBacked‹BeaconState›): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeValue](_db_api_beacon_repositories_abstract_.repository.md#encodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:37](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TreeBacked‹BeaconState› |

**Returns:** *Buffer*

___

###  entries

▸ **entries**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch›): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState››[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entries](_db_api_beacon_repositories_abstract_.repository.md#entries)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:136](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch› |

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState››[]›*

___

###  entriesStream

▸ **entriesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch›): *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState›››*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entriesStream](_db_api_beacon_repositories_abstract_.repository.md#entriesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:143](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch› |

**Returns:** *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState›››*

___

###  firstEntry

▸ **firstEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState›› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstEntry](_db_api_beacon_repositories_abstract_.repository.md#firstentry)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:189](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L189)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState›› | null›*

___

###  firstKey

▸ **firstKey**(): *Promise‹Epoch | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstKey](_db_api_beacon_repositories_abstract_.repository.md#firstkey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:157](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L157)*

**Returns:** *Promise‹Epoch | null›*

___

###  firstValue

▸ **firstValue**(): *Promise‹TreeBacked‹BeaconState› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstValue](_db_api_beacon_repositories_abstract_.repository.md#firstvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:173](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L173)*

**Returns:** *Promise‹TreeBacked‹BeaconState› | null›*

___

###  get

▸ **get**(`id`: Epoch): *Promise‹TreeBacked‹BeaconState› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[get](_db_api_beacon_repositories_abstract_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:53](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Epoch |

**Returns:** *Promise‹TreeBacked‹BeaconState› | null›*

___

###  getId

▸ **getId**(`state`: BeaconState): *Epoch*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[getId](_db_api_beacon_repositories_abstract_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/stateArchive.ts:18](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/stateArchive.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | BeaconState |

**Returns:** *Epoch*

___

###  has

▸ **has**(`id`: Epoch): *Promise‹boolean›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[has](_db_api_beacon_repositories_abstract_.repository.md#has)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:63](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Epoch |

**Returns:** *Promise‹boolean›*

___

###  keys

▸ **keys**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch›): *Promise‹Epoch[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keys](_db_api_beacon_repositories_abstract_.repository.md#keys)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:110](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch› |

**Returns:** *Promise‹Epoch[]›*

___

###  keysStream

▸ **keysStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch›): *AsyncIterable‹Epoch›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keysStream](_db_api_beacon_repositories_abstract_.repository.md#keysstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:114](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch› |

**Returns:** *AsyncIterable‹Epoch›*

___

###  lastEntry

▸ **lastEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState›› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastEntry](_db_api_beacon_repositories_abstract_.repository.md#lastentry)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:197](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L197)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Epoch, TreeBacked‹BeaconState›› | null›*

___

###  lastKey

▸ **lastKey**(): *Promise‹Epoch | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastKey](_db_api_beacon_repositories_abstract_.repository.md#lastkey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:165](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L165)*

**Returns:** *Promise‹Epoch | null›*

___

###  lastValue

▸ **lastValue**(): *Promise‹TreeBacked‹BeaconState› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastValue](_db_api_beacon_repositories_abstract_.repository.md#lastvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:181](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L181)*

**Returns:** *Promise‹TreeBacked‹BeaconState› | null›*

___

###  put

▸ **put**(`id`: Epoch, `value`: TreeBacked‹BeaconState›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[put](_db_api_beacon_repositories_abstract_.repository.md#put)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:67](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | Epoch |
`value` | TreeBacked‹BeaconState› |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`value`: TreeBacked‹BeaconState›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[remove](_db_api_beacon_repositories_abstract_.repository.md#remove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:84](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TreeBacked‹BeaconState› |

**Returns:** *Promise‹void›*

___

###  values

▸ **values**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch›): *Promise‹TreeBacked‹BeaconState›[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[values](_db_api_beacon_repositories_abstract_.repository.md#values)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:123](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch› |

**Returns:** *Promise‹TreeBacked‹BeaconState›[]›*

___

###  valuesStream

▸ **valuesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch›): *AsyncIterable‹TreeBacked‹BeaconState››*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[valuesStream](_db_api_beacon_repositories_abstract_.repository.md#valuesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:127](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Epoch› |

**Returns:** *AsyncIterable‹TreeBacked‹BeaconState››*
