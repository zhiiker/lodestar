[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/controller/impl/level"](../modules/_db_controller_impl_level_.md) › [LevelDbController](_db_controller_impl_level_.leveldbcontroller.md)

# Class: LevelDbController

The LevelDB implementation of DB

## Hierarchy

* EventEmitter

  ↳ **LevelDbController**

## Implements

* [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)

## Index

### Constructors

* [constructor](_db_controller_impl_level_.leveldbcontroller.md#constructor)

### Properties

* [db](_db_controller_impl_level_.leveldbcontroller.md#private-db)
* [logger](_db_controller_impl_level_.leveldbcontroller.md#private-logger)
* [opts](_db_controller_impl_level_.leveldbcontroller.md#private-opts)
* [defaultMaxListeners](_db_controller_impl_level_.leveldbcontroller.md#static-defaultmaxlisteners)

### Methods

* [addListener](_db_controller_impl_level_.leveldbcontroller.md#addlistener)
* [batchDelete](_db_controller_impl_level_.leveldbcontroller.md#batchdelete)
* [batchPut](_db_controller_impl_level_.leveldbcontroller.md#batchput)
* [delete](_db_controller_impl_level_.leveldbcontroller.md#delete)
* [emit](_db_controller_impl_level_.leveldbcontroller.md#emit)
* [eventNames](_db_controller_impl_level_.leveldbcontroller.md#eventnames)
* [get](_db_controller_impl_level_.leveldbcontroller.md#get)
* [getMaxListeners](_db_controller_impl_level_.leveldbcontroller.md#getmaxlisteners)
* [listenerCount](_db_controller_impl_level_.leveldbcontroller.md#listenercount)
* [listeners](_db_controller_impl_level_.leveldbcontroller.md#listeners)
* [off](_db_controller_impl_level_.leveldbcontroller.md#off)
* [on](_db_controller_impl_level_.leveldbcontroller.md#on)
* [once](_db_controller_impl_level_.leveldbcontroller.md#once)
* [prependListener](_db_controller_impl_level_.leveldbcontroller.md#prependlistener)
* [prependOnceListener](_db_controller_impl_level_.leveldbcontroller.md#prependoncelistener)
* [put](_db_controller_impl_level_.leveldbcontroller.md#put)
* [rawListeners](_db_controller_impl_level_.leveldbcontroller.md#rawlisteners)
* [removeAllListeners](_db_controller_impl_level_.leveldbcontroller.md#removealllisteners)
* [removeListener](_db_controller_impl_level_.leveldbcontroller.md#removelistener)
* [search](_db_controller_impl_level_.leveldbcontroller.md#search)
* [searchStream](_db_controller_impl_level_.leveldbcontroller.md#searchstream)
* [setMaxListeners](_db_controller_impl_level_.leveldbcontroller.md#setmaxlisteners)
* [start](_db_controller_impl_level_.leveldbcontroller.md#start)
* [stop](_db_controller_impl_level_.leveldbcontroller.md#stop)
* [listenerCount](_db_controller_impl_level_.leveldbcontroller.md#static-listenercount)

## Constructors

###  constructor

\+ **new LevelDbController**(`opts`: [ILevelDBOptions](../interfaces/_db_controller_impl_level_.ileveldboptions.md), `__namedParameters`: object): *[LevelDbController](_db_controller_impl_level_.leveldbcontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:28](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L28)*

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

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:24](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L24)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:28](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L28)*

___

### `Private` opts

• **opts**: *[ILevelDBOptions](../interfaces/_db_controller_impl_level_.ileveldboptions.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:26](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L26)*

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

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:73](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | any[] |

**Returns:** *Promise‹any›*

___

###  batchPut

▸ **batchPut**(`items`: object[]): *Promise‹any›*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:67](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | object[] |

**Returns:** *Promise‹any›*

___

###  delete

▸ **delete**(`key`: any): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:79](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L79)*

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

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:52](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L52)*

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

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:63](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L63)*

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

▸ **search**(`opts`: [ISearchOptions](../interfaces/_db_controller_interface_.isearchoptions.md)): *Promise‹any›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:83](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [ISearchOptions](../interfaces/_db_controller_interface_.isearchoptions.md) |

**Returns:** *Promise‹any›*

___

###  searchStream

▸ **searchStream**(`opts`: [ISearchOptions](../interfaces/_db_controller_interface_.isearchoptions.md)): *AsyncIterable‹any›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:91](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L91)*

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

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:43](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L43)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/controller/impl/level.ts:48](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/db/controller/impl/level.ts#L48)*

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
