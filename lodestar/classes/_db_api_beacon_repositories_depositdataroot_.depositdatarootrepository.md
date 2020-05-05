[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/depositDataRoot"](../modules/_db_api_beacon_repositories_depositdataroot_.md) › [DepositDataRootRepository](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md)

# Class: DepositDataRootRepository

## Hierarchy

* [Repository](_db_api_beacon_repositories_abstract_.repository.md)‹number, Root›

  ↳ **DepositDataRootRepository**

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#constructor)

### Properties

* [bucket](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#protected-bucket)
* [config](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#protected-config)
* [db](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#protected-db)
* [depositRootTree](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#private-depositroottree)
* [type](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#protected-type)

### Methods

* [add](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#add)
* [batchAdd](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#batchadd)
* [batchDelete](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#batchdelete)
* [batchPut](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#batchput)
* [batchRemove](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#batchremove)
* [dbFilterOptions](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#protected-dbfilteroptions)
* [decodeKey](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#decodekey)
* [decodeValue](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#decodevalue)
* [delete](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#delete)
* [encodeKey](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#encodekey)
* [encodeValue](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#encodevalue)
* [entries](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#entries)
* [entriesStream](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#entriesstream)
* [firstEntry](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#firstentry)
* [firstKey](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#firstkey)
* [firstValue](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#firstvalue)
* [get](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#get)
* [getId](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#getid)
* [getTreeBacked](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#gettreebacked)
* [has](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#has)
* [initTree](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#private-inittree)
* [keys](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#keys)
* [keysStream](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#keysstream)
* [lastEntry](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#lastentry)
* [lastKey](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#lastkey)
* [lastValue](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#lastvalue)
* [put](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#put)
* [remove](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#remove)
* [values](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#values)
* [valuesStream](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md#valuesstream)

## Constructors

###  constructor

\+ **new DepositDataRootRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›): *[DepositDataRootRepository](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md)*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[constructor](_db_api_beacon_repositories_abstract_.repository.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts:11](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer› |

**Returns:** *[DepositDataRootRepository](_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md)*

## Properties

### `Protected` bucket

• **bucket**: *[Bucket](../enums/_db_api_schema_.bucket.md)*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[bucket](_db_api_beacon_repositories_abstract_.repository.md#protected-bucket)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:22](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L22)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[config](_db_api_beacon_repositories_abstract_.repository.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:18](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L18)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[db](_db_api_beacon_repositories_abstract_.repository.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L20)*

___

### `Private` depositRootTree

• **depositRootTree**: *TreeBacked‹List‹Root››*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts:11](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts#L11)*

___

### `Protected` type

• **type**: *Type‹Root›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[type](_db_api_beacon_repositories_abstract_.repository.md#protected-type)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L24)*

## Methods

###  add

▸ **add**(`value`: Root): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[add](_db_api_beacon_repositories_abstract_.repository.md#add)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:80](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Root |

**Returns:** *Promise‹void›*

___

###  batchAdd

▸ **batchAdd**(`values`: ArrayLike‹Root›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchAdd](_db_api_beacon_repositories_abstract_.repository.md#batchadd)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:99](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹Root› |

**Returns:** *Promise‹void›*

___

###  batchDelete

▸ **batchDelete**(`ids`: ArrayLike‹number›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchDelete](_db_api_beacon_repositories_abstract_.repository.md#batchdelete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:95](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | ArrayLike‹number› |

**Returns:** *Promise‹void›*

___

###  batchPut

▸ **batchPut**(`items`: [IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root›[]): *Promise‹void›*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchPut](_db_api_beacon_repositories_abstract_.repository.md#batchput)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts:38](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root›[] |

**Returns:** *Promise‹void›*

___

###  batchRemove

▸ **batchRemove**(`values`: ArrayLike‹Root›): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[batchRemove](_db_api_beacon_repositories_abstract_.repository.md#batchremove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:106](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹Root› |

**Returns:** *Promise‹void›*

___

### `Protected` dbFilterOptions

▸ **dbFilterOptions**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[dbFilterOptions](_db_api_beacon_repositories_abstract_.repository.md#protected-dbfilteroptions)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:208](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L208)*

Transforms opts from I to Buffer

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *[IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›*

___

###  decodeKey

▸ **decodeKey**(`data`: Buffer): *number*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeKey](_db_api_beacon_repositories_abstract_.repository.md#decodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts:20](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *number*

___

###  decodeValue

▸ **decodeValue**(`data`: Buffer): *Root*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[decodeValue](_db_api_beacon_repositories_abstract_.repository.md#decodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:41](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

**Returns:** *Root*

___

###  delete

▸ **delete**(`id`: number): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[delete](_db_api_beacon_repositories_abstract_.repository.md#delete)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:71](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹void›*

___

###  encodeKey

▸ **encodeKey**(`id`: number): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeKey](_db_api_beacon_repositories_abstract_.repository.md#encodekey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:45](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Buffer*

___

###  encodeValue

▸ **encodeValue**(`value`: Root): *Buffer*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[encodeValue](_db_api_beacon_repositories_abstract_.repository.md#encodevalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:37](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Root |

**Returns:** *Buffer*

___

###  entries

▸ **entries**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root›[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entries](_db_api_beacon_repositories_abstract_.repository.md#entries)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:136](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root›[]›*

___

###  entriesStream

▸ **entriesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root››*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[entriesStream](_db_api_beacon_repositories_abstract_.repository.md#entriesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:143](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root››*

___

###  firstEntry

▸ **firstEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstEntry](_db_api_beacon_repositories_abstract_.repository.md#firstentry)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:189](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L189)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root› | null›*

___

###  firstKey

▸ **firstKey**(): *Promise‹number | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstKey](_db_api_beacon_repositories_abstract_.repository.md#firstkey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:157](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L157)*

**Returns:** *Promise‹number | null›*

___

###  firstValue

▸ **firstValue**(): *Promise‹Root | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[firstValue](_db_api_beacon_repositories_abstract_.repository.md#firstvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:173](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L173)*

**Returns:** *Promise‹Root | null›*

___

###  get

▸ **get**(`id`: number): *Promise‹Root | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[get](_db_api_beacon_repositories_abstract_.repository.md#get)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:53](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹Root | null›*

___

###  getId

▸ **getId**(`value`: Root): *number*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[getId](_db_api_beacon_repositories_abstract_.repository.md#getid)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts:26](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Root |

**Returns:** *number*

___

###  getTreeBacked

▸ **getTreeBacked**(`depositIndex`: number): *Promise‹TreeBacked‹List‹Root›››*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts:48](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`depositIndex` | number |

**Returns:** *Promise‹TreeBacked‹List‹Root›››*

___

###  has

▸ **has**(`id`: number): *Promise‹boolean›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[has](_db_api_beacon_repositories_abstract_.repository.md#has)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:63](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹boolean›*

___

### `Private` initTree

▸ **initTree**(): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts:63](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts#L63)*

**Returns:** *Promise‹void›*

___

###  keys

▸ **keys**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *Promise‹number[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keys](_db_api_beacon_repositories_abstract_.repository.md#keys)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:110](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *Promise‹number[]›*

___

###  keysStream

▸ **keysStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *AsyncIterable‹number›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[keysStream](_db_api_beacon_repositories_abstract_.repository.md#keysstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:114](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *AsyncIterable‹number›*

___

###  lastEntry

▸ **lastEntry**(): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root› | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastEntry](_db_api_beacon_repositories_abstract_.repository.md#lastentry)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:197](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L197)*

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹number, Root› | null›*

___

###  lastKey

▸ **lastKey**(): *Promise‹number | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastKey](_db_api_beacon_repositories_abstract_.repository.md#lastkey)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:165](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L165)*

**Returns:** *Promise‹number | null›*

___

###  lastValue

▸ **lastValue**(): *Promise‹Root | null›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[lastValue](_db_api_beacon_repositories_abstract_.repository.md#lastvalue)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:181](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L181)*

**Returns:** *Promise‹Root | null›*

___

###  put

▸ **put**(`id`: number, `value`: Root): *Promise‹void›*

*Overrides [Repository](_db_api_beacon_repositories_abstract_.repository.md).[put](_db_api_beacon_repositories_abstract_.repository.md#put)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts:30](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/depositDataRoot.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`value` | Root |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`value`: Root): *Promise‹void›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[remove](_db_api_beacon_repositories_abstract_.repository.md#remove)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:84](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Root |

**Returns:** *Promise‹void›*

___

###  values

▸ **values**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *Promise‹Root[]›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[values](_db_api_beacon_repositories_abstract_.repository.md#values)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:123](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *Promise‹Root[]›*

___

###  valuesStream

▸ **valuesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number›): *AsyncIterable‹Root›*

*Inherited from [Repository](_db_api_beacon_repositories_abstract_.repository.md).[valuesStream](_db_api_beacon_repositories_abstract_.repository.md#valuesstream)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/abstract.ts:127](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/abstract.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹number› |

**Returns:** *AsyncIterable‹Root›*
