[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/controller/impl/level"](../modules/_db_controller_impl_level_.md) › [LevelDbController](_db_controller_impl_level_.leveldbcontroller.md)

# Class: LevelDbController

The LevelDB implementation of DB

## Hierarchy

* **LevelDbController**

## Implements

* [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›

## Index

### Constructors

* [constructor](_db_controller_impl_level_.leveldbcontroller.md#constructor)

### Properties

* [db](_db_controller_impl_level_.leveldbcontroller.md#private-db)
* [logger](_db_controller_impl_level_.leveldbcontroller.md#private-logger)
* [opts](_db_controller_impl_level_.leveldbcontroller.md#private-opts)

### Methods

* [batchDelete](_db_controller_impl_level_.leveldbcontroller.md#batchdelete)
* [batchPut](_db_controller_impl_level_.leveldbcontroller.md#batchput)
* [delete](_db_controller_impl_level_.leveldbcontroller.md#delete)
* [entries](_db_controller_impl_level_.leveldbcontroller.md#entries)
* [entriesStream](_db_controller_impl_level_.leveldbcontroller.md#entriesstream)
* [get](_db_controller_impl_level_.leveldbcontroller.md#get)
* [keys](_db_controller_impl_level_.leveldbcontroller.md#keys)
* [keysStream](_db_controller_impl_level_.leveldbcontroller.md#keysstream)
* [put](_db_controller_impl_level_.leveldbcontroller.md#put)
* [start](_db_controller_impl_level_.leveldbcontroller.md#start)
* [stop](_db_controller_impl_level_.leveldbcontroller.md#stop)
* [values](_db_controller_impl_level_.leveldbcontroller.md#values)
* [valuesStream](_db_controller_impl_level_.leveldbcontroller.md#valuesstream)

## Constructors

###  constructor

\+ **new LevelDbController**(`opts`: [ILevelDBOptions](../interfaces/_db_controller_impl_level_.ileveldboptions.md), `__namedParameters`: object): *[LevelDbController](_db_controller_impl_level_.leveldbcontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:26](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L26)*

**Parameters:**

▪ **opts**: *[ILevelDBOptions](../interfaces/_db_controller_impl_level_.ileveldboptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`logger` | ILogger |

**Returns:** *[LevelDbController](_db_controller_impl_level_.leveldbcontroller.md)*

## Properties

### `Private` db

• **db**: *LevelUp*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:22](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L22)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:26](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L26)*

___

### `Private` opts

• **opts**: *[ILevelDBOptions](../interfaces/_db_controller_impl_level_.ileveldboptions.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:24](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L24)*

## Methods

###  batchDelete

▸ **batchDelete**(`keys`: Buffer[]): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:74](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | Buffer[] |

**Returns:** *Promise‹void›*

___

###  batchPut

▸ **batchPut**(`items`: [IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer›[]): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:68](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer›[] |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(`key`: Buffer): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:64](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *Promise‹void›*

___

###  entries

▸ **entries**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer›[]›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:138](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer›[]›*

___

###  entriesStream

▸ **entriesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *Pushable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer››*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:124](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *Pushable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer››*

___

###  get

▸ **get**(`key`: Buffer): *Promise‹Buffer | null›*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:49](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *Promise‹Buffer | null›*

___

###  keys

▸ **keys**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *Promise‹Buffer[]›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:94](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *Promise‹Buffer[]›*

___

###  keysStream

▸ **keysStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *Pushable‹Buffer›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:80](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *Pushable‹Buffer›*

___

###  put

▸ **put**(`key`: Buffer, `value`: Buffer): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:60](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |
`value` | Buffer |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:40](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L40)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:45](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L45)*

**Returns:** *Promise‹void›*

___

###  values

▸ **values**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *Promise‹Buffer[]›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:116](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *Promise‹Buffer[]›*

___

###  valuesStream

▸ **valuesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *Pushable‹Buffer›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:102](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/db/controller/impl/level.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *Pushable‹Buffer›*
