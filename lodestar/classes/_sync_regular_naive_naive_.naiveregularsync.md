[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/regular/naive/naive"](../modules/_sync_regular_naive_naive_.md) › [NaiveRegularSync](_sync_regular_naive_naive_.naiveregularsync.md)

# Class: NaiveRegularSync

## Hierarchy

* **NaiveRegularSync**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md) & [ISyncModule](../interfaces/_sync_interface_.isyncmodule.md)

## Index

### Constructors

* [constructor](_sync_regular_naive_naive_.naiveregularsync.md#constructor)

### Properties

* [chain](_sync_regular_naive_naive_.naiveregularsync.md#private-chain)
* [config](_sync_regular_naive_naive_.naiveregularsync.md#private-config)
* [currentTarget](_sync_regular_naive_naive_.naiveregularsync.md#private-currenttarget)
* [logger](_sync_regular_naive_naive_.naiveregularsync.md#private-logger)
* [network](_sync_regular_naive_naive_.naiveregularsync.md#private-network)
* [opts](_sync_regular_naive_naive_.naiveregularsync.md#private-opts)
* [reps](_sync_regular_naive_naive_.naiveregularsync.md#private-reps)
* [targetSlotRangeSource](_sync_regular_naive_naive_.naiveregularsync.md#private-targetslotrangesource)

### Methods

* [checkSyncProgress](_sync_regular_naive_naive_.naiveregularsync.md#private-checksyncprogress)
* [getHighestBlock](_sync_regular_naive_naive_.naiveregularsync.md#gethighestblock)
* [getNewTarget](_sync_regular_naive_naive_.naiveregularsync.md#private-getnewtarget)
* [getSyncPeers](_sync_regular_naive_naive_.naiveregularsync.md#private-getsyncpeers)
* [setTarget](_sync_regular_naive_naive_.naiveregularsync.md#private-settarget)
* [start](_sync_regular_naive_naive_.naiveregularsync.md#start)
* [stop](_sync_regular_naive_naive_.naiveregularsync.md#stop)
* [sync](_sync_regular_naive_naive_.naiveregularsync.md#private-sync)

## Constructors

###  constructor

\+ **new NaiveRegularSync**(`options`: Partial‹[IRegularSyncOptions](../interfaces/_sync_regular_options_.iregularsyncoptions.md)›, `modules`: [IRegularSyncModules](../modules/_sync_regular_interface_.md#iregularsyncmodules)): *[NaiveRegularSync](_sync_regular_naive_naive_.naiveregularsync.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:30](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Partial‹[IRegularSyncOptions](../interfaces/_sync_regular_options_.iregularsyncoptions.md)› |
`modules` | [IRegularSyncModules](../modules/_sync_regular_interface_.md#iregularsyncmodules) |

**Returns:** *[NaiveRegularSync](_sync_regular_naive_naive_.naiveregularsync.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:21](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L21)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:17](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L17)*

___

### `Private` currentTarget

• **currentTarget**: *Slot*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:29](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L29)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:25](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L25)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:19](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L19)*

___

### `Private` opts

• **opts**: *[IRegularSyncOptions](../interfaces/_sync_regular_options_.iregularsyncoptions.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:27](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L27)*

___

### `Private` reps

• **reps**: *[IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:23](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L23)*

___

### `Private` targetSlotRangeSource

• **targetSlotRangeSource**: *Pushable‹[ISlotRange](../interfaces/_sync_interface_.islotrange.md)›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:30](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L30)*

## Methods

### `Private` checkSyncProgress

▸ **checkSyncProgress**(`lastProcessedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:84](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`lastProcessedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  getHighestBlock

▸ **getHighestBlock**(): *Slot*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:63](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L63)*

**Returns:** *Slot*

___

### `Private` getNewTarget

▸ **getNewTarget**(): *Promise‹Slot›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:67](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L67)*

**Returns:** *Promise‹Slot›*

___

### `Private` getSyncPeers

▸ **getSyncPeers**(`minSlot`: Slot): *Promise‹PeerInfo[]›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:125](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`minSlot` | Slot |

**Returns:** *Promise‹PeerInfo[]›*

___

### `Private` setTarget

▸ **setTarget**(`newTarget?`: Slot, `triggerSync`: boolean): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:75](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L75)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`newTarget?` | Slot | - |
`triggerSync` | boolean | true |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:42](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L42)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:58](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L58)*

**Returns:** *Promise‹void›*

___

### `Private` sync

▸ **sync**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:97](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/regular/naive/naive.ts#L97)*

**Returns:** *Promise‹void›*
