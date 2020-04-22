[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/controller/interface"](../modules/_db_controller_interface_.md) › [IDatabaseController](_db_controller_interface_.idatabasecontroller.md)

# Interface: IDatabaseController

## Hierarchy

* EventEmitter

  ↳ **IDatabaseController**

## Implemented by

* [LevelDbController](../classes/_db_controller_impl_level_.leveldbcontroller.md)
* [PouchDbController](../classes/_db_controller_impl_pouch_.pouchdbcontroller.md)

## Index

### Properties

* [defaultMaxListeners](_db_controller_interface_.idatabasecontroller.md#static-defaultmaxlisteners)

### Methods

* [addListener](_db_controller_interface_.idatabasecontroller.md#addlistener)
* [batchDelete](_db_controller_interface_.idatabasecontroller.md#batchdelete)
* [batchPut](_db_controller_interface_.idatabasecontroller.md#batchput)
* [delete](_db_controller_interface_.idatabasecontroller.md#delete)
* [emit](_db_controller_interface_.idatabasecontroller.md#emit)
* [eventNames](_db_controller_interface_.idatabasecontroller.md#eventnames)
* [get](_db_controller_interface_.idatabasecontroller.md#get)
* [getMaxListeners](_db_controller_interface_.idatabasecontroller.md#getmaxlisteners)
* [listenerCount](_db_controller_interface_.idatabasecontroller.md#listenercount)
* [listeners](_db_controller_interface_.idatabasecontroller.md#listeners)
* [off](_db_controller_interface_.idatabasecontroller.md#off)
* [on](_db_controller_interface_.idatabasecontroller.md#on)
* [once](_db_controller_interface_.idatabasecontroller.md#once)
* [prependListener](_db_controller_interface_.idatabasecontroller.md#prependlistener)
* [prependOnceListener](_db_controller_interface_.idatabasecontroller.md#prependoncelistener)
* [put](_db_controller_interface_.idatabasecontroller.md#put)
* [rawListeners](_db_controller_interface_.idatabasecontroller.md#rawlisteners)
* [removeAllListeners](_db_controller_interface_.idatabasecontroller.md#removealllisteners)
* [removeListener](_db_controller_interface_.idatabasecontroller.md#removelistener)
* [search](_db_controller_interface_.idatabasecontroller.md#search)
* [searchStream](_db_controller_interface_.idatabasecontroller.md#searchstream)
* [setMaxListeners](_db_controller_interface_.idatabasecontroller.md#setmaxlisteners)
* [start](_db_controller_interface_.idatabasecontroller.md#start)
* [stop](_db_controller_interface_.idatabasecontroller.md#stop)
* [listenerCount](_db_controller_interface_.idatabasecontroller.md#static-listenercount)

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[defaultMaxListeners](_db_controller_interface_.idatabasecontroller.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[addListener](_db_controller_interface_.idatabasecontroller.md#addlistener)*

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

*Defined in [packages/lodestar/src/db/controller/interface.ts:19](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/controller/interface.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |

**Returns:** *Promise‹any›*

___

###  batchPut

▸ **batchPut**(`items`: object[]): *Promise‹any›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:17](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/controller/interface.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | object[] |

**Returns:** *Promise‹any›*

___

###  delete

▸ **delete**(`key`: any): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:41](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/controller/interface.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | any |

**Returns:** *Promise‹void›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[emit](_db_controller_interface_.idatabasecontroller.md#emit)*

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

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[eventNames](_db_controller_interface_.idatabasecontroller.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  get

▸ **get**(`key`: any): *Promise‹Buffer | null›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:15](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/controller/interface.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | any |

**Returns:** *Promise‹Buffer | null›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[getMaxListeners](_db_controller_interface_.idatabasecontroller.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[listenerCount](_db_controller_interface_.idatabasecontroller.md#static-listenercount)*

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

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[listeners](_db_controller_interface_.idatabasecontroller.md#listeners)*

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

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[off](_db_controller_interface_.idatabasecontroller.md#off)*

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

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[on](_db_controller_interface_.idatabasecontroller.md#on)*

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

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[once](_db_controller_interface_.idatabasecontroller.md#once)*

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

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[prependListener](_db_controller_interface_.idatabasecontroller.md#prependlistener)*

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

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[prependOnceListener](_db_controller_interface_.idatabasecontroller.md#prependoncelistener)*

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

*Defined in [packages/lodestar/src/db/controller/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/controller/interface.ts#L39)*

Should insert or update

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | any | - |
`value` | any |   |

**Returns:** *Promise‹any›*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[rawListeners](_db_controller_interface_.idatabasecontroller.md#rawlisteners)*

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

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[removeAllListeners](_db_controller_interface_.idatabasecontroller.md#removealllisteners)*

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

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[removeListener](_db_controller_interface_.idatabasecontroller.md#removelistener)*

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

▸ **search**(`opts`: [ISearchOptions](_db_controller_interface_.isearchoptions.md)): *Promise‹any[]›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:25](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/controller/interface.ts#L25)*

Should return items which has key prefix >= opts.gt && prefix < opt.lt

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [ISearchOptions](_db_controller_interface_.isearchoptions.md) |   |

**Returns:** *Promise‹any[]›*

___

###  searchStream

▸ **searchStream**(`opts`: [ISearchOptions](_db_controller_interface_.isearchoptions.md)): *AsyncIterable‹any›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:32](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/controller/interface.ts#L32)*

Similar to search but returns data chunk asap instead of waiting for the whole
data array to return.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [ISearchOptions](_db_controller_interface_.isearchoptions.md) |   |

**Returns:** *AsyncIterable‹any›*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[setMaxListeners](_db_controller_interface_.idatabasecontroller.md#setmaxlisteners)*

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

*Defined in [packages/lodestar/src/db/controller/interface.ts:43](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/controller/interface.ts#L43)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:45](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/controller/interface.ts#L45)*

**Returns:** *Promise‹void›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [IDatabaseController](_db_controller_interface_.idatabasecontroller.md).[listenerCount](_db_controller_interface_.idatabasecontroller.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
