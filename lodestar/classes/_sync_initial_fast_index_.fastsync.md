[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/initial/fast/index"](../modules/_sync_initial_fast_index_.md) › [FastSync](_sync_initial_fast_index_.fastsync.md)

# Class: FastSync <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IInitialSyncEvents](../interfaces/_sync_initial_interface_.iinitialsyncevents.md), [IInitialSyncEvents](../interfaces/_sync_initial_interface_.iinitialsyncevents.md), this› & object & object

  ↳ **FastSync**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md) & TypeRecord‹EventEmitter‹›, [IInitialSyncEvents](../interfaces/_sync_initial_interface_.iinitialsyncevents.md), [IInitialSyncEvents](../interfaces/_sync_initial_interface_.iinitialsyncevents.md), this› & object & object & [ISyncModule](../interfaces/_sync_interface_.isyncmodule.md)

## Index

### Constructors

* [constructor](_sync_initial_fast_index_.fastsync.md#constructor)

### Properties

* [ _emitType](_sync_initial_fast_index_.fastsync.md#optional--_emittype)
* [ _emitterType](_sync_initial_fast_index_.fastsync.md#optional--_emittertype)
* [ _eventsType](_sync_initial_fast_index_.fastsync.md#optional--_eventstype)
* [chain](_sync_initial_fast_index_.fastsync.md#private-chain)
* [config](_sync_initial_fast_index_.fastsync.md#private-config)
* [logger](_sync_initial_fast_index_.fastsync.md#private-logger)
* [network](_sync_initial_fast_index_.fastsync.md#private-network)
* [opts](_sync_initial_fast_index_.fastsync.md#private-opts)
* [reps](_sync_initial_fast_index_.fastsync.md#private-reps)
* [syncTriggerSource](_sync_initial_fast_index_.fastsync.md#private-synctriggersource)
* [targetCheckpoint](_sync_initial_fast_index_.fastsync.md#private-targetcheckpoint)

### Methods

* [checkProgress](_sync_initial_fast_index_.fastsync.md#private-checkprogress)
* [getHighestBlock](_sync_initial_fast_index_.fastsync.md#gethighestblock)
* [getInitialSyncPeers](_sync_initial_fast_index_.fastsync.md#private-getinitialsyncpeers)
* [setTarget](_sync_initial_fast_index_.fastsync.md#private-settarget)
* [start](_sync_initial_fast_index_.fastsync.md#start)
* [stop](_sync_initial_fast_index_.fastsync.md#stop)
* [sync](_sync_initial_fast_index_.fastsync.md#private-sync)

## Constructors

###  constructor

\+ **new FastSync**(`opts`: [ISyncOptions](../interfaces/_sync_options_.isyncoptions.md), `__namedParameters`: object): *[FastSync](_sync_initial_fast_index_.fastsync.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:37](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L37)*

**Parameters:**

▪ **opts**: *[ISyncOptions](../interfaces/_sync_options_.isyncoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)‹› |
`config` | IBeaconConfig |
`logger` | ILogger |
`network` | [INetwork](../interfaces/_network_interface_.inetwork.md)‹› |
`reputationStore` | [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md) |

**Returns:** *[FastSync](_sync_initial_fast_index_.fastsync.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitterType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _eventsType](../interfaces/_network_gossip_interface_.igossip.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:31](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L31)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:30](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L30)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:34](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L34)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:33](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L33)*

___

### `Private` opts

• **opts**: *[ISyncOptions](../interfaces/_sync_options_.isyncoptions.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:29](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L29)*

___

### `Private` reps

• **reps**: *[IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:32](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L32)*

___

### `Private` syncTriggerSource

• **syncTriggerSource**: *Pushable‹Slot›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:37](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L37)*

___

### `Private` targetCheckpoint

• **targetCheckpoint**: *Checkpoint*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:36](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L36)*

## Methods

### `Private` checkProgress

▸ **checkProgress**(`processedCheckpoint`: Checkpoint): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:93](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`processedCheckpoint` | Checkpoint |

**Returns:** *Promise‹void›*

___

###  getHighestBlock

▸ **getHighestBlock**(): *Slot*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:72](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L72)*

**Returns:** *Slot*

___

### `Private` getInitialSyncPeers

▸ **getInitialSyncPeers**(): *Promise‹PeerInfo[]›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:116](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L116)*

Returns peers which has same finalized Checkpoint

**Returns:** *Promise‹PeerInfo[]›*

___

### `Private` setTarget

▸ **setTarget**(`target`: Checkpoint): *void*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:76](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | Checkpoint |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:50](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L50)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:66](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L66)*

**Returns:** *Promise‹void›*

___

### `Private` sync

▸ **sync**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:81](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/sync/initial/fast/index.ts#L81)*

**Returns:** *Promise‹void›*
