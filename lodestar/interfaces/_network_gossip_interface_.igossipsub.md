[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/interface"](../modules/_network_gossip_interface_.md) › [IGossipSub](_network_gossip_interface_.igossipsub.md)

# Interface: IGossipSub

## Hierarchy

* EventEmitter

  ↳ **IGossipSub**

## Index

### Properties

* [defaultMaxListeners](_network_gossip_interface_.igossipsub.md#static-defaultmaxlisteners)

### Methods

* [addListener](_network_gossip_interface_.igossipsub.md#addlistener)
* [emit](_network_gossip_interface_.igossipsub.md#emit)
* [eventNames](_network_gossip_interface_.igossipsub.md#eventnames)
* [getMaxListeners](_network_gossip_interface_.igossipsub.md#getmaxlisteners)
* [listenerCount](_network_gossip_interface_.igossipsub.md#listenercount)
* [listeners](_network_gossip_interface_.igossipsub.md#listeners)
* [off](_network_gossip_interface_.igossipsub.md#off)
* [on](_network_gossip_interface_.igossipsub.md#on)
* [once](_network_gossip_interface_.igossipsub.md#once)
* [prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)
* [prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)
* [publish](_network_gossip_interface_.igossipsub.md#publish)
* [rawListeners](_network_gossip_interface_.igossipsub.md#rawlisteners)
* [removeAllListeners](_network_gossip_interface_.igossipsub.md#removealllisteners)
* [removeListener](_network_gossip_interface_.igossipsub.md#removelistener)
* [setMaxListeners](_network_gossip_interface_.igossipsub.md#setmaxlisteners)
* [start](_network_gossip_interface_.igossipsub.md#start)
* [stop](_network_gossip_interface_.igossipsub.md#stop)
* [subscribe](_network_gossip_interface_.igossipsub.md#subscribe)
* [unsubscribe](_network_gossip_interface_.igossipsub.md#unsubscribe)
* [listenerCount](_network_gossip_interface_.igossipsub.md#static-listenercount)

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

###  publish

▸ **publish**(`topic`: string, `data`: Buffer): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:45](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`data` | Buffer |

**Returns:** *Promise‹void›*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:46](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L46)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:47](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L47)*

**Returns:** *Promise‹void›*

___

###  subscribe

▸ **subscribe**(`topic`: string): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:48](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(`topic`: string): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:49](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*

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
