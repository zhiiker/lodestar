[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/gossipsub"](../modules/_network_gossip_gossipsub_.md) › [LodestarGossipsub](_network_gossip_gossipsub_.lodestargossipsub.md)

# Class: LodestarGossipsub

This validates messages in Gossipsub and emit the transformed messages.
We don't want to double deserialize messages for performance benefit.

## Hierarchy

* GossipSub

  ↳ **LodestarGossipsub**

## Index

### Constructors

* [constructor](_network_gossip_gossipsub_.lodestargossipsub.md#constructor)

### Properties

* [config](_network_gossip_gossipsub_.lodestargossipsub.md#private-config)
* [interval](_network_gossip_gossipsub_.lodestargossipsub.md#private-interval)
* [logger](_network_gossip_gossipsub_.lodestargossipsub.md#private-logger)
* [timeToLive](_network_gossip_gossipsub_.lodestargossipsub.md#private-timetolive)
* [transformedObjects](_network_gossip_gossipsub_.lodestargossipsub.md#private-transformedobjects)
* [validator](_network_gossip_gossipsub_.lodestargossipsub.md#private-validator)
* [defaultMaxListeners](_network_gossip_gossipsub_.lodestargossipsub.md#static-defaultmaxlisteners)

### Methods

* [_emitMessage](_network_gossip_gossipsub_.lodestargossipsub.md#_emitmessage)
* [_publish](_network_gossip_gossipsub_.lodestargossipsub.md#_publish)
* [addListener](_network_gossip_gossipsub_.lodestargossipsub.md#addlistener)
* [cleanUp](_network_gossip_gossipsub_.lodestargossipsub.md#private-cleanup)
* [deserializeGossipMessage](_network_gossip_gossipsub_.lodestargossipsub.md#private-deserializegossipmessage)
* [emit](_network_gossip_gossipsub_.lodestargossipsub.md#emit)
* [eventNames](_network_gossip_gossipsub_.lodestargossipsub.md#eventnames)
* [getMaxListeners](_network_gossip_gossipsub_.lodestargossipsub.md#getmaxlisteners)
* [getTopicValidator](_network_gossip_gossipsub_.lodestargossipsub.md#private-gettopicvalidator)
* [getTopics](_network_gossip_gossipsub_.lodestargossipsub.md#gettopics)
* [listenerCount](_network_gossip_gossipsub_.lodestargossipsub.md#listenercount)
* [listeners](_network_gossip_gossipsub_.lodestargossipsub.md#listeners)
* [off](_network_gossip_gossipsub_.lodestargossipsub.md#off)
* [on](_network_gossip_gossipsub_.lodestargossipsub.md#on)
* [once](_network_gossip_gossipsub_.lodestargossipsub.md#once)
* [prependListener](_network_gossip_gossipsub_.lodestargossipsub.md#prependlistener)
* [prependOnceListener](_network_gossip_gossipsub_.lodestargossipsub.md#prependoncelistener)
* [publish](_network_gossip_gossipsub_.lodestargossipsub.md#publish)
* [rawListeners](_network_gossip_gossipsub_.lodestargossipsub.md#rawlisteners)
* [removeAllListeners](_network_gossip_gossipsub_.lodestargossipsub.md#removealllisteners)
* [removeListener](_network_gossip_gossipsub_.lodestargossipsub.md#removelistener)
* [setMaxListeners](_network_gossip_gossipsub_.lodestargossipsub.md#setmaxlisteners)
* [start](_network_gossip_gossipsub_.lodestargossipsub.md#start)
* [stop](_network_gossip_gossipsub_.lodestargossipsub.md#stop)
* [subscribe](_network_gossip_gossipsub_.lodestargossipsub.md#subscribe)
* [unsubscribe](_network_gossip_gossipsub_.lodestargossipsub.md#unsubscribe)
* [validate](_network_gossip_gossipsub_.lodestargossipsub.md#validate)
* [listenerCount](_network_gossip_gossipsub_.lodestargossipsub.md#static-listenercount)

## Constructors

###  constructor

\+ **new LodestarGossipsub**(`config`: IBeaconConfig, `validator`: [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md), `logger`: ILogger, `peerInfo`: PeerInfo, `registrar`: Registrar, `options`: Options): *[LodestarGossipsub](_network_gossip_gossipsub_.lodestargossipsub.md)*

*Overrides void*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:30](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | IBeaconConfig | - |
`validator` | [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md) | - |
`logger` | ILogger | - |
`peerInfo` | PeerInfo | - |
`registrar` | Registrar | - |
`options` | Options | {} |

**Returns:** *[LodestarGossipsub](_network_gossip_gossipsub_.lodestargossipsub.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:26](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L26)*

___

### `Private` interval

• **interval**: *Timeout*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:28](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L28)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:30](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L30)*

___

### `Private` timeToLive

• **timeToLive**: *number*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:29](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L29)*

___

### `Private` transformedObjects

• **transformedObjects**: *Map‹string, object›*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:25](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L25)*

___

### `Private` validator

• **validator**: *[IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:27](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L27)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[defaultMaxListeners](../interfaces/_network_gossip_interface_.igossipsub.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  _emitMessage

▸ **_emitMessage**(`topics`: string[], `message`: IGossipMessage): *void*

*Overrides void*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:92](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`topics` | string[] |
`message` | IGossipMessage |

**Returns:** *void*

___

###  _publish

▸ **_publish**(`messages`: IGossipMessage[]): *void*

*Inherited from [LodestarGossipsub](_network_gossip_gossipsub_.lodestargossipsub.md).[_publish](_network_gossip_gossipsub_.lodestargossipsub.md#_publish)*

Defined in node_modules/libp2p-gossipsub/src/index.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`messages` | IGossipMessage[] |

**Returns:** *void*

___

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

### `Private` cleanUp

▸ **cleanUp**(): *void*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:180](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L180)*

**Returns:** *void*

___

### `Private` deserializeGossipMessage

▸ **deserializeGossipMessage**(`topic`: string, `message`: IGossipMessage): *object*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:144](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`message` | IGossipMessage |

**Returns:** *object*

* **object**: *[GossipObject](../modules/_network_gossip_interface_.md#gossipobject)*

* **subnet**? : *number*

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

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md).[getMaxListeners](../interfaces/_network_gossip_interface_.igossipsub.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

### `Private` getTopicValidator

▸ **getTopicValidator**(`topic`: string): *[GossipMessageValidatorFn](../modules/_network_gossip_interface_.md#gossipmessagevalidatorfn)*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:112](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *[GossipMessageValidatorFn](../modules/_network_gossip_interface_.md#gossipmessagevalidatorfn)*

___

###  getTopics

▸ **getTopics**(): *string[]*

*Inherited from [LodestarGossipsub](_network_gossip_gossipsub_.lodestargossipsub.md).[getTopics](_network_gossip_gossipsub_.lodestargossipsub.md#gettopics)*

Defined in node_modules/libp2p-gossipsub/src/index.d.ts:40

**Returns:** *string[]*

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

###  publish

▸ **publish**(`topic`: string, `data`: Buffer): *Promise‹void›*

*Overrides void*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:104](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`data` | Buffer |

**Returns:** *Promise‹void›*

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

*Overrides void*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:43](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L43)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Overrides void*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:50](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L50)*

**Returns:** *Promise‹void›*

___

###  subscribe

▸ **subscribe**(`topic`: string): *void*

*Inherited from [LodestarGossipsub](_network_gossip_gossipsub_.lodestargossipsub.md).[subscribe](_network_gossip_gossipsub_.lodestargossipsub.md#subscribe)*

Defined in node_modules/libp2p-gossipsub/src/index.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(`topic`: string): *void*

*Inherited from [LodestarGossipsub](_network_gossip_gossipsub_.lodestargossipsub.md).[unsubscribe](_network_gossip_gossipsub_.lodestargossipsub.md#unsubscribe)*

Defined in node_modules/libp2p-gossipsub/src/index.d.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*

___

###  validate

▸ **validate**(`rawMessage`: IGossipMessage): *Promise‹boolean›*

*Overrides void*

*Defined in [packages/lodestar/src/network/gossip/gossipsub.ts:65](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/network/gossip/gossipsub.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`rawMessage` | IGossipMessage |

**Returns:** *Promise‹boolean›*

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
