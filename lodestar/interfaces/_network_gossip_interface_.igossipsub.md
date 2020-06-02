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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[defaultMaxListeners](_network_gossip_interface_.igossipsub.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[addListener](_network_gossip_interface_.igossipsub.md#addlistener)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[emit](_network_gossip_interface_.igossipsub.md#emit)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[eventNames](_network_gossip_interface_.igossipsub.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[getMaxListeners](_network_gossip_interface_.igossipsub.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[listenerCount](_network_gossip_interface_.igossipsub.md#static-listenercount)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[listeners](_network_gossip_interface_.igossipsub.md#listeners)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[off](_network_gossip_interface_.igossipsub.md#off)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[on](_network_gossip_interface_.igossipsub.md#on)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[once](_network_gossip_interface_.igossipsub.md#once)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:48](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/network/gossip/interface.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`data` | Buffer |

**Returns:** *Promise‹void›*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[rawListeners](_network_gossip_interface_.igossipsub.md#rawlisteners)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[removeAllListeners](_network_gossip_interface_.igossipsub.md#removealllisteners)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[removeListener](_network_gossip_interface_.igossipsub.md#removelistener)*

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

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[setMaxListeners](_network_gossip_interface_.igossipsub.md#setmaxlisteners)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:49](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/network/gossip/interface.ts#L49)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:50](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/network/gossip/interface.ts#L50)*

**Returns:** *Promise‹void›*

___

###  subscribe

▸ **subscribe**(`topic`: string): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:51](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/network/gossip/interface.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(`topic`: string): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:52](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/network/gossip/interface.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[listenerCount](_network_gossip_interface_.igossipsub.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
