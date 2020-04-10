[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/index"](../modules/_sync_index_.md) › [Sync](_sync_index_.sync.md)

# Class: Sync

The Sync service syncing data between the network and the local chain
The strategy may differ depending on whether the chain is synced or not

## Hierarchy

* EventEmitter

  ↳ **Sync**

## Index

### Constructors

* [constructor](_sync_index_.sync.md#constructor)

### Properties

* [chain](_sync_index_.sync.md#private-chain)
* [config](_sync_index_.sync.md#private-config)
* [initialSync](_sync_index_.sync.md#private-initialsync)
* [logger](_sync_index_.sync.md#private-logger)
* [network](_sync_index_.sync.md#private-network)
* [opPool](_sync_index_.sync.md#private-oppool)
* [opts](_sync_index_.sync.md#private-opts)
* [peerCheckingTimeout](_sync_index_.sync.md#private-peercheckingtimeout)
* [peers](_sync_index_.sync.md#private-peers)
* [regularSync](_sync_index_.sync.md#regularsync)
* [reps](_sync_index_.sync.md#private-reps)
* [reqResp](_sync_index_.sync.md#private-reqresp)
* [waitingForPeer](_sync_index_.sync.md#private-waitingforpeer)
* [defaultMaxListeners](_sync_index_.sync.md#static-defaultmaxlisteners)

### Methods

* [addListener](_sync_index_.sync.md#addlistener)
* [emit](_sync_index_.sync.md#emit)
* [eventNames](_sync_index_.sync.md#eventnames)
* [getMaxListeners](_sync_index_.sync.md#getmaxlisteners)
* [getValidPeers](_sync_index_.sync.md#private-getvalidpeers)
* [handleLostPeer](_sync_index_.sync.md#private-handlelostpeer)
* [handleNewPeer](_sync_index_.sync.md#private-handlenewpeer)
* [isSynced](_sync_index_.sync.md#issynced)
* [listenerCount](_sync_index_.sync.md#listenercount)
* [listeners](_sync_index_.sync.md#listeners)
* [off](_sync_index_.sync.md#off)
* [on](_sync_index_.sync.md#on)
* [once](_sync_index_.sync.md#once)
* [prependListener](_sync_index_.sync.md#prependlistener)
* [prependOnceListener](_sync_index_.sync.md#prependoncelistener)
* [rawListeners](_sync_index_.sync.md#rawlisteners)
* [removeAllListeners](_sync_index_.sync.md#removealllisteners)
* [removeListener](_sync_index_.sync.md#removelistener)
* [setMaxListeners](_sync_index_.sync.md#setmaxlisteners)
* [start](_sync_index_.sync.md#start)
* [startInitialSync](_sync_index_.sync.md#private-startinitialsync)
* [startRegularSync](_sync_index_.sync.md#private-startregularsync)
* [stop](_sync_index_.sync.md#stop)
* [listenerCount](_sync_index_.sync.md#static-listenercount)

## Constructors

###  constructor

\+ **new Sync**(`opts`: [ISyncOptions](../interfaces/_sync_options_.isyncoptions.md), `modules`: [ISyncModules](../interfaces/_sync_index_.isyncmodules.md)): *[Sync](_sync_index_.sync.md)*

*Defined in [packages/lodestar/src/sync/index.ts:52](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [ISyncOptions](../interfaces/_sync_options_.isyncoptions.md) |
`modules` | [ISyncModules](../interfaces/_sync_index_.isyncmodules.md) |

**Returns:** *[Sync](_sync_index_.sync.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/index.ts:42](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L42)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/index.ts:41](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L41)*

___

### `Private` initialSync

• **initialSync**: *[InitialSync](../modules/_sync_initial_interface_.md#initialsync)*

*Defined in [packages/lodestar/src/sync/index.ts:50](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L50)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/index.ts:47](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L47)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/index.ts:43](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L43)*

___

### `Private` opPool

• **opPool**: *[OpPool](_oppool_oppool_.oppool.md)*

*Defined in [packages/lodestar/src/sync/index.ts:44](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L44)*

___

### `Private` opts

• **opts**: *[ISyncOptions](../interfaces/_sync_options_.isyncoptions.md)*

*Defined in [packages/lodestar/src/sync/index.ts:40](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L40)*

___

### `Private` peerCheckingTimeout

• **peerCheckingTimeout**: *Timeout*

*Defined in [packages/lodestar/src/sync/index.ts:52](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L52)*

___

### `Private` peers

• **peers**: *PeerInfo[]* = []

*Defined in [packages/lodestar/src/sync/index.ts:49](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L49)*

___

###  regularSync

• **regularSync**: *[IRegularSync](../interfaces/_sync_regular_interface_.iregularsync.md)*

*Defined in [packages/lodestar/src/sync/index.ts:38](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L38)*

___

### `Private` reps

• **reps**: *[ReputationStore](_sync_ireputation_.reputationstore.md)*

*Defined in [packages/lodestar/src/sync/index.ts:46](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L46)*

___

### `Private` reqResp

• **reqResp**: *[ISyncReqResp](../interfaces/_sync_reqresp_interface_.isyncreqresp.md)*

*Defined in [packages/lodestar/src/sync/index.ts:45](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L45)*

___

### `Private` waitingForPeer

• **waitingForPeer**: *boolean* = true

*Defined in [packages/lodestar/src/sync/index.ts:51](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L51)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

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

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

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

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[eventNames](../interfaces/_db_controller_interface_.idatabasecontroller.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[getMaxListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

### `Private` getValidPeers

▸ **getValidPeers**(): *Promise‹PeerInfo[]›*

*Defined in [packages/lodestar/src/sync/index.ts:113](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L113)*

**Returns:** *Promise‹PeerInfo[]›*

___

### `Private` handleLostPeer

▸ **handleLostPeer**(`peer`: PeerInfo): *void*

*Defined in [packages/lodestar/src/sync/index.ts:129](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`peer` | PeerInfo |

**Returns:** *void*

___

### `Private` handleNewPeer

▸ **handleNewPeer**(`peer`: PeerInfo): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/index.ts:119](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`peer` | PeerInfo |

**Returns:** *Promise‹void›*

___

###  isSynced

▸ **isSynced**(): *boolean*

*Defined in [packages/lodestar/src/sync/index.ts:93](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L93)*

**Returns:** *boolean*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

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

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

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

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

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

*Defined in [packages/lodestar/src/sync/index.ts:75](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L75)*

**Returns:** *Promise‹void›*

___

### `Private` startInitialSync

▸ **startInitialSync**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/index.ts:97](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L97)*

**Returns:** *Promise‹void›*

___

### `Private` startRegularSync

▸ **startRegularSync**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/index.ts:107](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L107)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/index.ts:84](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/sync/index.ts#L84)*

**Returns:** *Promise‹void›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[listenerCount](../interfaces/_db_controller_interface_.idatabasecontroller.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
