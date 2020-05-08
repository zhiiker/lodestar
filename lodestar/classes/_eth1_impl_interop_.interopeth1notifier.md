[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/interop"](../modules/_eth1_impl_interop_.md) › [InteropEth1Notifier](_eth1_impl_interop_.interopeth1notifier.md)

# Class: InteropEth1Notifier

## Hierarchy

* EventEmitter

  ↳ **InteropEth1Notifier**

## Implements

* [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)

## Index

### Constructors

* [constructor](_eth1_impl_interop_.interopeth1notifier.md#constructor)

### Properties

* [defaultMaxListeners](_eth1_impl_interop_.interopeth1notifier.md#static-defaultmaxlisteners)

### Methods

* [addListener](_eth1_impl_interop_.interopeth1notifier.md#addlistener)
* [emit](_eth1_impl_interop_.interopeth1notifier.md#emit)
* [eventNames](_eth1_impl_interop_.interopeth1notifier.md#eventnames)
* [getBlock](_eth1_impl_interop_.interopeth1notifier.md#getblock)
* [getDepositCount](_eth1_impl_interop_.interopeth1notifier.md#getdepositcount)
* [getDepositEvents](_eth1_impl_interop_.interopeth1notifier.md#getdepositevents)
* [getDepositRoot](_eth1_impl_interop_.interopeth1notifier.md#getdepositroot)
* [getEth1Data](_eth1_impl_interop_.interopeth1notifier.md#geteth1data)
* [getMaxListeners](_eth1_impl_interop_.interopeth1notifier.md#getmaxlisteners)
* [listenerCount](_eth1_impl_interop_.interopeth1notifier.md#listenercount)
* [listeners](_eth1_impl_interop_.interopeth1notifier.md#listeners)
* [off](_eth1_impl_interop_.interopeth1notifier.md#off)
* [on](_eth1_impl_interop_.interopeth1notifier.md#on)
* [once](_eth1_impl_interop_.interopeth1notifier.md#once)
* [prependListener](_eth1_impl_interop_.interopeth1notifier.md#prependlistener)
* [prependOnceListener](_eth1_impl_interop_.interopeth1notifier.md#prependoncelistener)
* [rawListeners](_eth1_impl_interop_.interopeth1notifier.md#rawlisteners)
* [removeAllListeners](_eth1_impl_interop_.interopeth1notifier.md#removealllisteners)
* [removeListener](_eth1_impl_interop_.interopeth1notifier.md#removelistener)
* [setMaxListeners](_eth1_impl_interop_.interopeth1notifier.md#setmaxlisteners)
* [start](_eth1_impl_interop_.interopeth1notifier.md#start)
* [stop](_eth1_impl_interop_.interopeth1notifier.md#stop)
* [listenerCount](_eth1_impl_interop_.interopeth1notifier.md#static-listenercount)

## Constructors

###  constructor

\+ **new InteropEth1Notifier**(): *[InteropEth1Notifier](_eth1_impl_interop_.interopeth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:11](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/eth1/impl/interop.ts#L11)*

**Returns:** *[InteropEth1Notifier](_eth1_impl_interop_.interopeth1notifier.md)*

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[defaultMaxListeners](../interfaces/_network_gossip_interface_.igossipsub.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[addListener](../interfaces/_network_gossip_interface_.igossipsub.md#addlistener)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[emit](../interfaces/_network_gossip_interface_.igossipsub.md#emit)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[eventNames](../interfaces/_network_gossip_interface_.igossipsub.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getBlock

▸ **getBlock**(`blockTag`: string | number): *Promise‹Block›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:31](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/eth1/impl/interop.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`blockTag` | string &#124; number |

**Returns:** *Promise‹Block›*

___

###  getDepositCount

▸ **getDepositCount**(`blockTag`: string | number): *Promise‹number›*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:22](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/eth1/impl/interop.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`blockTag` | string &#124; number |

**Returns:** *Promise‹number›*

___

###  getDepositEvents

▸ **getDepositEvents**(`blockTag`: string | number): *Promise‹[IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)[]›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:28](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/eth1/impl/interop.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`blockTag` | string &#124; number |

**Returns:** *Promise‹[IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)[]›*

___

###  getDepositRoot

▸ **getDepositRoot**(): *Promise‹Uint8Array›*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:19](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/eth1/impl/interop.ts#L19)*

**Returns:** *Promise‹Uint8Array›*

___

###  getEth1Data

▸ **getEth1Data**(`blockHash`: string): *Promise‹Eth1Data›*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:25](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/eth1/impl/interop.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`blockHash` | string |

**Returns:** *Promise‹Eth1Data›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[getMaxListeners](../interfaces/_network_gossip_interface_.igossipsub.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[listenerCount](../interfaces/_network_gossip_interface_.igossipsub.md#static-listenercount)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[listeners](../interfaces/_network_gossip_interface_.igossipsub.md#listeners)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[off](../interfaces/_network_gossip_interface_.igossipsub.md#off)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[on](../interfaces/_network_gossip_interface_.igossipsub.md#on)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[once](../interfaces/_network_gossip_interface_.igossipsub.md#once)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[prependListener](../interfaces/_network_gossip_interface_.igossipsub.md#prependlistener)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[prependOnceListener](../interfaces/_network_gossip_interface_.igossipsub.md#prependoncelistener)*

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

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[rawListeners](../interfaces/_network_gossip_interface_.igossipsub.md#rawlisteners)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[removeAllListeners](../interfaces/_network_gossip_interface_.igossipsub.md#removealllisteners)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[removeListener](../interfaces/_network_gossip_interface_.igossipsub.md#removelistener)*

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

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[setMaxListeners](../interfaces/_network_gossip_interface_.igossipsub.md#setmaxlisteners)*

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

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:16](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/eth1/impl/interop.ts#L16)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:17](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/eth1/impl/interop.ts#L17)*

**Returns:** *Promise‹void›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[listenerCount](../interfaces/_network_gossip_interface_.igossipsub.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
