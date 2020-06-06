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
* [blockImportTarget](_sync_initial_fast_index_.fastsync.md#private-blockimporttarget)
* [chain](_sync_initial_fast_index_.fastsync.md#private-chain)
* [config](_sync_initial_fast_index_.fastsync.md#private-config)
* [logger](_sync_initial_fast_index_.fastsync.md#private-logger)
* [network](_sync_initial_fast_index_.fastsync.md#private-network)
* [opts](_sync_initial_fast_index_.fastsync.md#private-opts)
* [reps](_sync_initial_fast_index_.fastsync.md#private-reps)
* [stats](_sync_initial_fast_index_.fastsync.md#private-stats)
* [syncTriggerSource](_sync_initial_fast_index_.fastsync.md#private-synctriggersource)
* [targetCheckpoint](_sync_initial_fast_index_.fastsync.md#private-targetcheckpoint)

### Methods

* [checkSyncCompleted](_sync_initial_fast_index_.fastsync.md#private-checksynccompleted)
* [checkSyncProgress](_sync_initial_fast_index_.fastsync.md#private-checksyncprogress)
* [getHighestBlock](_sync_initial_fast_index_.fastsync.md#gethighestblock)
* [getInitialSyncPeers](_sync_initial_fast_index_.fastsync.md#private-getinitialsyncpeers)
* [getNewBlockImportTarget](_sync_initial_fast_index_.fastsync.md#private-getnewblockimporttarget)
* [setBlockImportTarget](_sync_initial_fast_index_.fastsync.md#private-setblockimporttarget)
* [start](_sync_initial_fast_index_.fastsync.md#start)
* [stop](_sync_initial_fast_index_.fastsync.md#stop)
* [sync](_sync_initial_fast_index_.fastsync.md#private-sync)
* [updateBlockImportTarget](_sync_initial_fast_index_.fastsync.md#private-updateblockimporttarget)

## Constructors

###  constructor

\+ **new FastSync**(`opts`: [ISyncOptions](../interfaces/_sync_options_.isyncoptions.md), `__namedParameters`: object): *[FastSync](_sync_initial_fast_index_.fastsync.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:46](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L46)*

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
`stats` | [ISyncStats](../interfaces/_sync_stats_interface_.isyncstats.md) |

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

### `Private` blockImportTarget

• **blockImportTarget**: *Slot* = 0

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:41](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L41)*

Target slot for block import, we won't download blocks past that point.

___

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:28](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L28)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:27](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L27)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:31](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L31)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:30](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L30)*

___

### `Private` opts

• **opts**: *[ISyncOptions](../interfaces/_sync_options_.isyncoptions.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:26](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L26)*

___

### `Private` reps

• **reps**: *[IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:29](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L29)*

___

### `Private` stats

• **stats**: *[ISyncStats](../interfaces/_sync_stats_interface_.isyncstats.md)*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:32](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L32)*

___

### `Private` syncTriggerSource

• **syncTriggerSource**: *Pushable‹[ISlotRange](../interfaces/_sync_interface_.islotrange.md)›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:46](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L46)*

Trigger for block import

___

### `Private` targetCheckpoint

• **targetCheckpoint**: *Checkpoint*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:37](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L37)*

Targeted finalized checkpoint. Initial sync should only sync up to that point.

## Methods

### `Private` checkSyncCompleted

▸ **checkSyncCompleted**(`processedCheckpoint`: Checkpoint): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:169](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`processedCheckpoint` | Checkpoint |

**Returns:** *Promise‹void›*

___

### `Private` checkSyncProgress

▸ **checkSyncProgress**(`processedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:163](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`processedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  getHighestBlock

▸ **getHighestBlock**(): *Slot*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:95](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L95)*

**Returns:** *Slot*

___

### `Private` getInitialSyncPeers

▸ **getInitialSyncPeers**(): *Promise‹PeerInfo[]›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:201](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L201)*

Returns peers which has same finalized Checkpoint

**Returns:** *Promise‹PeerInfo[]›*

___

### `Private` getNewBlockImportTarget

▸ **getNewBlockImportTarget**(`fromSlot?`: Slot): *Slot*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:99](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`fromSlot?` | Slot |

**Returns:** *Slot*

___

### `Private` setBlockImportTarget

▸ **setBlockImportTarget**(`fromSlot?`: Slot): *void*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:115](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`fromSlot?` | Slot |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:63](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L63)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:87](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L87)*

**Returns:** *Promise‹void›*

___

### `Private` sync

▸ **sync**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:127](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L127)*

**Returns:** *Promise‹void›*

___

### `Private` updateBlockImportTarget

▸ **updateBlockImportTarget**(`target`: Slot): *void*

*Defined in [packages/lodestar/src/sync/initial/fast/index.ts:110](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/sync/initial/fast/index.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | Slot |

**Returns:** *void*
