[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/clock/local/LocalClock"](../modules/_chain_clock_local_localclock_.md) › [LocalClock](_chain_clock_local_localclock_.localclock.md)

# Class: LocalClock

## Hierarchy

* EventEmitter

  ↳ **LocalClock**

## Implements

* [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)

## Index

### Constructors

* [constructor](_chain_clock_local_localclock_.localclock.md#constructor)

### Properties

* [config](_chain_clock_local_localclock_.localclock.md#private-config)
* [currentSlot](_chain_clock_local_localclock_.localclock.md#private-currentslot)
* [genesisTime](_chain_clock_local_localclock_.localclock.md#private-genesistime)
* [isRunning](_chain_clock_local_localclock_.localclock.md#private-isrunning)
* [timeoutId](_chain_clock_local_localclock_.localclock.md#private-timeoutid)
* [defaultMaxListeners](_chain_clock_local_localclock_.localclock.md#static-defaultmaxlisteners)

### Methods

* [addListener](_chain_clock_local_localclock_.localclock.md#addlistener)
* [emit](_chain_clock_local_localclock_.localclock.md#emit)
* [eventNames](_chain_clock_local_localclock_.localclock.md#eventnames)
* [getCurrentSlot](_chain_clock_local_localclock_.localclock.md#getcurrentslot)
* [getDiffTillNextSlot](_chain_clock_local_localclock_.localclock.md#private-getdifftillnextslot)
* [getMaxListeners](_chain_clock_local_localclock_.localclock.md#getmaxlisteners)
* [listenerCount](_chain_clock_local_localclock_.localclock.md#listenercount)
* [listeners](_chain_clock_local_localclock_.localclock.md#listeners)
* [off](_chain_clock_local_localclock_.localclock.md#off)
* [on](_chain_clock_local_localclock_.localclock.md#on)
* [onNewEpoch](_chain_clock_local_localclock_.localclock.md#onnewepoch)
* [onNewSlot](_chain_clock_local_localclock_.localclock.md#onnewslot)
* [once](_chain_clock_local_localclock_.localclock.md#once)
* [prependListener](_chain_clock_local_localclock_.localclock.md#prependlistener)
* [prependOnceListener](_chain_clock_local_localclock_.localclock.md#prependoncelistener)
* [rawListeners](_chain_clock_local_localclock_.localclock.md#rawlisteners)
* [removeAllListeners](_chain_clock_local_localclock_.localclock.md#removealllisteners)
* [removeListener](_chain_clock_local_localclock_.localclock.md#removelistener)
* [setMaxListeners](_chain_clock_local_localclock_.localclock.md#setmaxlisteners)
* [start](_chain_clock_local_localclock_.localclock.md#start)
* [stop](_chain_clock_local_localclock_.localclock.md#stop)
* [unsubscribeFromNewEpoch](_chain_clock_local_localclock_.localclock.md#unsubscribefromnewepoch)
* [unsubscribeFromNewSlot](_chain_clock_local_localclock_.localclock.md#unsubscribefromnewslot)
* [updateSlot](_chain_clock_local_localclock_.localclock.md#private-updateslot)
* [listenerCount](_chain_clock_local_localclock_.localclock.md#static-listenercount)

## Constructors

###  constructor

\+ **new LocalClock**(`config`: IBeaconConfig, `genesisTime`: number): *[LocalClock](_chain_clock_local_localclock_.localclock.md)*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:12](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`genesisTime` | number |

**Returns:** *[LocalClock](_chain_clock_local_localclock_.localclock.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:8](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L8)*

___

### `Private` currentSlot

• **currentSlot**: *number*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:10](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L10)*

___

### `Private` genesisTime

• **genesisTime**: *number*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:9](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L9)*

___

### `Private` isRunning

• **isRunning**: *boolean*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:11](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L11)*

___

### `Private` timeoutId

• **timeoutId**: *Timeout*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:12](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L12)*

___

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

###  getCurrentSlot

▸ **getCurrentSlot**(): *number*

*Implementation of [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:35](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L35)*

**Returns:** *number*

___

### `Private` getDiffTillNextSlot

▸ **getDiffTillNextSlot**(): *number*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:73](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L73)*

**Returns:** *number*

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

###  onNewEpoch

▸ **onNewEpoch**(`cb`: [NewEpochCallback](../modules/_chain_clock_interface_.md#newepochcallback)): *void*

*Implementation of [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:39](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NewEpochCallback](../modules/_chain_clock_interface_.md#newepochcallback) |

**Returns:** *void*

___

###  onNewSlot

▸ **onNewSlot**(`cb`: [NewSlotCallback](../modules/_chain_clock_interface_.md#newslotcallback)): *void*

*Implementation of [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:43](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NewSlotCallback](../modules/_chain_clock_interface_.md#newslotcallback) |

**Returns:** *void*

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

*Implementation of [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:22](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L22)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:30](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L30)*

**Returns:** *Promise‹void›*

___

###  unsubscribeFromNewEpoch

▸ **unsubscribeFromNewEpoch**(`cb`: [NewEpochCallback](../modules/_chain_clock_interface_.md#newepochcallback)): *void*

*Implementation of [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:47](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NewEpochCallback](../modules/_chain_clock_interface_.md#newepochcallback) |

**Returns:** *void*

___

###  unsubscribeFromNewSlot

▸ **unsubscribeFromNewSlot**(`cb`: [NewSlotCallback](../modules/_chain_clock_interface_.md#newslotcallback)): *void*

*Implementation of [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:51](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NewSlotCallback](../modules/_chain_clock_interface_.md#newslotcallback) |

**Returns:** *void*

___

### `Private` updateSlot

▸ **updateSlot**(): *void*

*Defined in [packages/lodestar/src/chain/clock/local/LocalClock.ts:55](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/chain/clock/local/LocalClock.ts#L55)*

**Returns:** *void*

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
