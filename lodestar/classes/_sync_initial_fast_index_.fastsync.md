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

* [IService](../interfaces/_node_nodejs_.iservice.md) & TypeRecord‹EventEmitter‹›, [IInitialSyncEvents](../interfaces/_sync_initial_interface_.iinitialsyncevents.md), [IInitialSyncEvents](../interfaces/_sync_initial_interface_.iinitialsyncevents.md), this› & object & object

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
* [peers](_sync_initial_fast_index_.fastsync.md#private-peers)
* [reps](_sync_initial_fast_index_.fastsync.md#private-reps)

### Methods

* [start](_sync_initial_fast_index_.fastsync.md#start)
* [stop](_sync_initial_fast_index_.fastsync.md#stop)
* [sync](_sync_initial_fast_index_.fastsync.md#private-sync)

## Constructors

###  constructor

\+ **new FastSync**(`opts`: [ISyncOptions](../interfaces/_sync_options_.isyncoptions.md), `__namedParameters`: object): *[FastSync](_sync_initial_fast_index_.fastsync.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:27](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L27)*

**Parameters:**

▪ **opts**: *[ISyncOptions](../interfaces/_sync_options_.isyncoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)‹› |
`config` | IBeaconConfig |
`logger` | ILogger |
`network` | [INetwork](../interfaces/_network_interface_.inetwork.md)‹› |
`peers` | PeerInfo‹›[] |
`reps` | [ReputationStore](_sync_ireputation_.reputationstore.md)‹› |

**Returns:** *[FastSync](_sync_initial_fast_index_.fastsync.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitterType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _eventsType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:23](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L23)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:21](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L21)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:26](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L26)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:25](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L25)*

___

### `Private` opts

• **opts**: *[ISyncOptions](../interfaces/_sync_options_.isyncoptions.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:22](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L22)*

___

### `Private` peers

• **peers**: *PeerInfo[]*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:27](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L27)*

___

### `Private` reps

• **reps**: *[ReputationStore](_sync_ireputation_.reputationstore.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:24](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L24)*

## Methods

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:40](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L40)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:59](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L59)*

**Returns:** *Promise‹void›*

___

### `Private` sync

▸ **sync**(`chainCheckPoint`: Checkpoint): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:64](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/initial/fast/index.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`chainCheckPoint` | Checkpoint |

**Returns:** *Promise‹void›*
