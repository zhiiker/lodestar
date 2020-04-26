[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/controller/impl/pouch"](../modules/_db_controller_impl_pouch_.md) › [PouchDbController](_db_controller_impl_pouch_.pouchdbcontroller.md)

# Class: PouchDbController

## Hierarchy

* EventEmitter

  ↳ **PouchDbController**

## Implements

* [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)

## Index

### Constructors

* [constructor](_db_controller_impl_pouch_.pouchdbcontroller.md#constructor)

### Properties

* [db](_db_controller_impl_pouch_.pouchdbcontroller.md#private-db)
* [defaultMaxListeners](_db_controller_impl_pouch_.pouchdbcontroller.md#static-defaultmaxlisteners)

### Methods

* [addListener](_db_controller_impl_pouch_.pouchdbcontroller.md#addlistener)
* [batchDelete](_db_controller_impl_pouch_.pouchdbcontroller.md#batchdelete)
* [batchPut](_db_controller_impl_pouch_.pouchdbcontroller.md#batchput)
* [clean](_db_controller_impl_pouch_.pouchdbcontroller.md#clean)
* [delete](_db_controller_impl_pouch_.pouchdbcontroller.md#delete)
* [emit](_db_controller_impl_pouch_.pouchdbcontroller.md#emit)
* [eventNames](_db_controller_impl_pouch_.pouchdbcontroller.md#eventnames)
* [get](_db_controller_impl_pouch_.pouchdbcontroller.md#get)
* [getMaxListeners](_db_controller_impl_pouch_.pouchdbcontroller.md#getmaxlisteners)
* [listenerCount](_db_controller_impl_pouch_.pouchdbcontroller.md#listenercount)
* [listeners](_db_controller_impl_pouch_.pouchdbcontroller.md#listeners)
* [off](_db_controller_impl_pouch_.pouchdbcontroller.md#off)
* [on](_db_controller_impl_pouch_.pouchdbcontroller.md#on)
* [once](_db_controller_impl_pouch_.pouchdbcontroller.md#once)
* [prependListener](_db_controller_impl_pouch_.pouchdbcontroller.md#prependlistener)
* [prependOnceListener](_db_controller_impl_pouch_.pouchdbcontroller.md#prependoncelistener)
* [put](_db_controller_impl_pouch_.pouchdbcontroller.md#put)
* [rawListeners](_db_controller_impl_pouch_.pouchdbcontroller.md#rawlisteners)
* [removeAllListeners](_db_controller_impl_pouch_.pouchdbcontroller.md#removealllisteners)
* [removeListener](_db_controller_impl_pouch_.pouchdbcontroller.md#removelistener)
* [search](_db_controller_impl_pouch_.pouchdbcontroller.md#search)
* [searchStream](_db_controller_impl_pouch_.pouchdbcontroller.md#searchstream)
* [setMaxListeners](_db_controller_impl_pouch_.pouchdbcontroller.md#setmaxlisteners)
* [start](_db_controller_impl_pouch_.pouchdbcontroller.md#start)
* [stop](_db_controller_impl_pouch_.pouchdbcontroller.md#stop)
* [listenerCount](_db_controller_impl_pouch_.pouchdbcontroller.md#static-listenercount)

## Constructors

###  constructor

\+ **new PouchDbController**(`opts`: [IDatabaseOptions](../interfaces/_db_options_.idatabaseoptions.md)): *[PouchDbController](_db_controller_impl_pouch_.pouchdbcontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:22](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IDatabaseOptions](../interfaces/_db_options_.idatabaseoptions.md) |

**Returns:** *[PouchDbController](_db_controller_impl_pouch_.pouchdbcontroller.md)*

## Properties

### `Private` db

• **db**: *PouchDB.Database*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:22](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L22)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[defaultMaxListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#static-defaultmaxlisteners)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[defaultMaxListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[addListener](../interfaces/_db_controller_interface_.idatabasecontroller.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  batchDelete

▸ **batchDelete**(`items`: any[]): *Promise‹any›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:45](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |

**Returns:** *Promise‹any›*

___

###  batchPut

▸ **batchPut**(`items`: object[]): *Promise‹any›*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:59](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | object[] |

**Returns:** *Promise‹any›*

___

###  clean

▸ **clean**(): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:41](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L41)*

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(`key`: any): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:113](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | any |

**Returns:** *Promise‹void›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[emit](../interfaces/_db_controller_interface_.idatabasecontroller.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[eventNames](../interfaces/_db_controller_interface_.idatabasecontroller.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  get

▸ **get**(`key`: any): *Promise‹Buffer | null›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:70](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | any |

**Returns:** *Promise‹Buffer | null›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[getMaxListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[listenerCount](../interfaces/_db_controller_interface_.idatabasecontroller.md#static-listenercount)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[listeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#listeners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[off](../interfaces/_db_controller_interface_.idatabasecontroller.md#off)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[on](../interfaces/_db_controller_interface_.idatabasecontroller.md#on)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:21

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[once](../interfaces/_db_controller_interface_.idatabasecontroller.md#once)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[prependListener](../interfaces/_db_controller_interface_.idatabasecontroller.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[prependOnceListener](../interfaces/_db_controller_interface_.idatabasecontroller.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  put

▸ **put**(`key`: any, `value`: any): *Promise‹any›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:79](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | any |
`value` | any |

**Returns:** *Promise‹any›*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[rawListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#rawlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[removeAllListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#removealllisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[removeListener](../interfaces/_db_controller_interface_.idatabasecontroller.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  search

▸ **search**(`opts`: [ISearchOptions](../interfaces/_db_controller_interface_.isearchoptions.md)): *Promise‹any[]›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:93](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [ISearchOptions](../interfaces/_db_controller_interface_.isearchoptions.md) |

**Returns:** *Promise‹any[]›*

___

###  searchStream

▸ **searchStream**(`opts`: [ISearchOptions](../interfaces/_db_controller_interface_.isearchoptions.md)): *AsyncIterable‹any›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:105](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [ISearchOptions](../interfaces/_db_controller_interface_.isearchoptions.md) |

**Returns:** *AsyncIterable‹any›*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[setMaxListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#setmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:35](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L35)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/pouch.ts:37](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/controller/impl/pouch.ts#L37)*

**Returns:** *Promise‹void›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[listenerCount](../interfaces/_db_controller_interface_.idatabasecontroller.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
