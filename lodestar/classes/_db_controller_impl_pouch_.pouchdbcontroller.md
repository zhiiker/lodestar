[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/controller/impl/pouch"](../modules/_db_controller_impl_pouch_.md) › [PouchDbController](_db_controller_impl_pouch_.pouchdbcontroller.md)

# Class: PouchDbController

## Hierarchy

* **PouchDbController**

## Implements

* [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›

## Index

### Constructors

* [constructor](_db_controller_impl_pouch_.pouchdbcontroller.md#constructor)

### Properties

* [db](_db_controller_impl_pouch_.pouchdbcontroller.md#private-db)

### Methods

* [_get](_db_controller_impl_pouch_.pouchdbcontroller.md#_get)
* [batchDelete](_db_controller_impl_pouch_.pouchdbcontroller.md#batchdelete)
* [batchPut](_db_controller_impl_pouch_.pouchdbcontroller.md#batchput)
* [delete](_db_controller_impl_pouch_.pouchdbcontroller.md#delete)
* [entries](_db_controller_impl_pouch_.pouchdbcontroller.md#entries)
* [entriesStream](_db_controller_impl_pouch_.pouchdbcontroller.md#entriesstream)
* [get](_db_controller_impl_pouch_.pouchdbcontroller.md#get)
* [keys](_db_controller_impl_pouch_.pouchdbcontroller.md#keys)
* [keysStream](_db_controller_impl_pouch_.pouchdbcontroller.md#keysstream)
* [put](_db_controller_impl_pouch_.pouchdbcontroller.md#put)
* [start](_db_controller_impl_pouch_.pouchdbcontroller.md#start)
* [stop](_db_controller_impl_pouch_.pouchdbcontroller.md#stop)
* [toPouchOptions](_db_controller_impl_pouch_.pouchdbcontroller.md#private-topouchoptions)
* [values](_db_controller_impl_pouch_.pouchdbcontroller.md#values)
* [valuesStream](_db_controller_impl_pouch_.pouchdbcontroller.md#valuesstream)

## Constructors

###  constructor

\+ **new PouchDbController**(`opts`: [IDatabaseOptions](../interfaces/_db_options_.idatabaseoptions.md)): *[PouchDbController](_db_controller_impl_pouch_.pouchdbcontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:31](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IDatabaseOptions](../interfaces/_db_options_.idatabaseoptions.md) |

**Returns:** *[PouchDbController](_db_controller_impl_pouch_.pouchdbcontroller.md)*

## Properties

### `Private` db

• **db**: *PouchDB.Database*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:31](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L31)*

## Methods

###  _get

▸ **_get**(`key`: Buffer): *Promise‹[IPouchDocument](../interfaces/_db_controller_impl_pouch_.ipouchdocument.md) | null›*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:54](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *Promise‹[IPouchDocument](../interfaces/_db_controller_impl_pouch_.ipouchdocument.md) | null›*

___

###  batchDelete

▸ **batchDelete**(`keys`: Buffer[]): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:97](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | Buffer[] |

**Returns:** *Promise‹void›*

___

###  batchPut

▸ **batchPut**(`items`: [IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer›[]): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:86](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer›[] |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(`key`: Buffer): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:78](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *Promise‹void›*

___

###  entries

▸ **entries**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer›[]›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:128](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *Promise‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer›[]›*

___

###  entriesStream

▸ **entriesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer››*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:136](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *AsyncIterable‹[IKeyValue](../interfaces/_db_controller_interface_.ikeyvalue.md)‹Buffer, Buffer››*

___

###  get

▸ **get**(`key`: Buffer): *Promise‹Buffer | null›*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:49](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Buffer |

**Returns:** *Promise‹Buffer | null›*

___

###  keys

▸ **keys**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *Promise‹Buffer[]›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:104](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *Promise‹Buffer[]›*

___

###  keysStream

▸ **keysStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *AsyncIterable‹Buffer›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:109](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *AsyncIterable‹Buffer›*

___

###  put

▸ **put**(`key`: Buffer, `value`: Buffer): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:66](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L66)*

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

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:43](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L43)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:45](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L45)*

**Returns:** *Promise‹void›*

___

### `Private` toPouchOptions

▸ **toPouchOptions**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *object*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:143](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *object*

___

###  values

▸ **values**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *Promise‹Buffer[]›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:116](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *Promise‹Buffer[]›*

___

###  valuesStream

▸ **valuesStream**(`opts?`: [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer›): *AsyncIterable‹Buffer›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:121](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/db/controller/impl/pouch.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](../interfaces/_db_controller_interface_.ifilteroptions.md)‹Buffer› |

**Returns:** *AsyncIterable‹Buffer›*
