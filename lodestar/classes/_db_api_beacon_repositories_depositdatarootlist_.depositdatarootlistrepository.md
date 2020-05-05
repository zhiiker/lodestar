[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/depositDataRootList"](../modules/_db_api_beacon_repositories_depositdatarootlist_.md) › [DepositDataRootListRepository](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)

# Class: DepositDataRootListRepository

## Hierarchy

* [Repository](_db_api_beacon_repositories_abstract_.repository.md)‹number, TreeBacked‹List‹Root›››

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
* [batchAdd](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#batchadd)
* [batchDelete](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#batchdelete)
* [batchPut](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#batchput)
* [batchRemove](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#batchremove)
* [dbFilterOptions](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#protected-dbfilteroptions)
* [decodeKey](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#decodekey)
* [decodeValue](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#decodevalue)
* [delete](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#delete)
* [encodeKey](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#encodekey)
* [encodeValue](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#encodevalue)
* [entries](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#entries)
* [entriesStream](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#entriesstream)
* [get](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#get)
* [getId](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#getid)
* [has](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#has)
* [keys](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#keys)
* [keysStream](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#keysstream)
* [put](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#put)
* [remove](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#remove)
* [values](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#values)
* [valuesStream](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md#valuesstream)

## Constructors

###  constructor

\+ **new DepositDataRootListRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›): *[DepositDataRootListRepository](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[constructor](_db_api_beacon_repositories_abstract_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts:9](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer› |

**Returns:** *[DepositDataRootListRepository](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_api_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[bucket](_db_api_beacon_repositories_abstract_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:22](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L22)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[config](_db_api_beacon_repositories_abstract_.repository.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:18](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L18)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[db](_db_api_beacon_repositories_abstract_.repository.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L20)*

___

### `Protected` type

• **type**: *Type‹TreeBacked‹List‹Root›››*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[type](_db_api_beacon_repositories_abstract_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L24)*

## Methods

###  add

▸ **add**(`value`: TreeBacked‹List‹Root››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[add](_db_api_beacon_repositories_abstract_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:80](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TreeBacked‹List‹Root›› |

**Returns:** *Promise‹void›*

___

###  batchAdd

▸ **batchAdd**(`values`: ArrayLike‹TreeBacked‹List‹Root›››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchAdd](_db_api_beacon_repositories_abstract_.repository.md#batchadd)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:99](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹TreeBacked‹List‹Root››› |

**Returns:** *Promise‹void›*

___

###  batchDelete

▸ **batchDelete**(`ids`: ArrayLike‹number›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchDelete](_db_api_beacon_repositories_abstract_.repository.md#batchdelete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:95](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | ArrayLike‹number› |

**Returns:** *Promise‹void›*

___

###  batchPut

▸ **batchPut**(`items`: ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, TreeBacked‹List‹Root››››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchPut](_db_api_beacon_repositories_abstract_.repository.md#batchput)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:88](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | ArrayLike‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, TreeBacked‹List‹Root›››› |

**Returns:** *Promise‹void›*

___

###  batchRemove

▸ **batchRemove**(`values`: ArrayLike‹TreeBacked‹List‹Root›››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchRemove](_db_api_beacon_repositories_abstract_.repository.md#batchremove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:106](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹TreeBacked‹List‹Root››› |

**Returns:** *Promise‹void›*

___

### `Protected` dbFilterOptions

▸ **dbFilterOptions**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[dbFilterOptions](_db_api_beacon_repositories_abstract_.repository.md#protected-dbfilteroptions)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:160](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L160)*

Transforms opts from I to Buffer

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

___

###  decodeKey

▸ **decodeKey**(`key`: Buffer): *number*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeKey](_db_api_beacon_repositories_abstract_.repository.md#decodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:49](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *number*

___

###  decodeValue

▸ **decodeValue**(`data`: Buffer): *TreeBacked‹List‹Root››*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeValue](_db_api_beacon_repositories_abstract_.repository.md#decodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts:28](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *TreeBacked‹List‹Root››*

___

###  delete

▸ **delete**(`id`: number): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[delete](_db_api_beacon_repositories_abstract_.repository.md#delete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:71](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹void›*

___

###  encodeKey

▸ **encodeKey**(`id`: number): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeKey](_db_api_beacon_repositories_abstract_.repository.md#encodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:45](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Buffer*

___

###  encodeValue

▸ **encodeValue**(`value`: TreeBacked‹List‹Root››): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeValue](_db_api_beacon_repositories_abstract_.repository.md#encodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:37](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TreeBacked‹List‹Root›› |

**Returns:** *Buffer*

___

###  entries

▸ **entries**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, TreeBacked‹List‹Root›››[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entries](_db_api_beacon_repositories_abstract_.repository.md#entries)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:136](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, TreeBacked‹List‹Root›››[]›*

___

###  entriesStream

▸ **entriesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, TreeBacked‹List‹Root››››*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entriesStream](_db_api_beacon_repositories_abstract_.repository.md#entriesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:143](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, TreeBacked‹List‹Root››››*

___

###  get

▸ **get**(`id`: number): *Promise‹TreeBacked‹List‹Root›› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[get](_db_api_beacon_repositories_abstract_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:53](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹TreeBacked‹List‹Root›› | null›*

___

###  getId

▸ **getId**(`value`: List‹Root›): *number*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[getId](_db_api_beacon_repositories_abstract_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts:24](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/depositDataRootList.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | List‹Root› |

**Returns:** *number*

___

###  has

▸ **has**(`id`: number): *Promise‹boolean›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[has](_db_api_beacon_repositories_abstract_.repository.md#has)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:63](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹boolean›*

___

###  keys

▸ **keys**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *Promise‹number[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keys](_db_api_beacon_repositories_abstract_.repository.md#keys)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:110](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *Promise‹number[]›*

___

###  keysStream

▸ **keysStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *AsyncIterable‹number›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keysStream](_db_api_beacon_repositories_abstract_.repository.md#keysstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:114](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *AsyncIterable‹number›*

___

###  put

▸ **put**(`id`: number, `value`: TreeBacked‹List‹Root››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[put](_db_api_beacon_repositories_abstract_.repository.md#put)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:67](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`value` | TreeBacked‹List‹Root›› |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`value`: TreeBacked‹List‹Root››): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[remove](_db_api_beacon_repositories_abstract_.repository.md#remove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:84](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TreeBacked‹List‹Root›› |

**Returns:** *Promise‹void›*

___

###  values

▸ **values**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *Promise‹TreeBacked‹List‹Root››[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[values](_db_api_beacon_repositories_abstract_.repository.md#values)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:123](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *Promise‹TreeBacked‹List‹Root››[]›*

___

###  valuesStream

▸ **valuesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *AsyncIterable‹TreeBacked‹List‹Root›››*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[valuesStream](_db_api_beacon_repositories_abstract_.repository.md#valuesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:127](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *AsyncIterable‹TreeBacked‹List‹Root›››*
