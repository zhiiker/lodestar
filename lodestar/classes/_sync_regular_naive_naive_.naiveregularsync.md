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
* [targetSlotSource](_sync_regular_naive_naive_.naiveregularsync.md#private-targetslotsource)

### Methods

* [getHighestBlock](_sync_regular_naive_naive_.naiveregularsync.md#gethighestblock)
* [getSyncPeers](_sync_regular_naive_naive_.naiveregularsync.md#private-getsyncpeers)
* [setNewTarget](_sync_regular_naive_naive_.naiveregularsync.md#private-setnewtarget)
* [start](_sync_regular_naive_naive_.naiveregularsync.md#start)
* [stop](_sync_regular_naive_naive_.naiveregularsync.md#stop)
* [sync](_sync_regular_naive_naive_.naiveregularsync.md#private-sync)

## Constructors

###  constructor

\+ **new NaiveRegularSync**(`options`: Partial‹[IRegularSyncOptions](../interfaces/_sync_regular_options_.iregularsyncoptions.md)›, `modules`: [IRegularSyncModules](../modules/_sync_regular_interface_.md#iregularsyncmodules)): *[NaiveRegularSync](_sync_regular_naive_naive_.naiveregularsync.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:29](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Partial‹[IRegularSyncOptions](../interfaces/_sync_regular_options_.iregularsyncoptions.md)› |
`modules` | [IRegularSyncModules](../modules/_sync_regular_interface_.md#iregularsyncmodules) |

**Returns:** *[NaiveRegularSync](_sync_regular_naive_naive_.naiveregularsync.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:20](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L20)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:16](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L16)*

___

### `Private` currentTarget

• **currentTarget**: *Slot*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:28](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L28)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:24](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L24)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:18](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L18)*

___

### `Private` opts

• **opts**: *[IRegularSyncOptions](../interfaces/_sync_regular_options_.iregularsyncoptions.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:26](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L26)*

___

### `Private` reps

• **reps**: *[IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:22](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L22)*

___

### `Private` targetSlotSource

• **targetSlotSource**: *Pushable‹Slot›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:29](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L29)*

## Methods

###  getHighestBlock

▸ **getHighestBlock**(): *Slot*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:57](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L57)*

**Returns:** *Slot*

___

### `Private` getSyncPeers

▸ **getSyncPeers**(`minSlot`: Slot): *Promise‹PeerInfo[]›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:91](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`minSlot` | Slot |

**Returns:** *Promise‹PeerInfo[]›*

___

### `Private` setNewTarget

▸ **setNewTarget**(`lastProcessedBlock?`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:61](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`lastProcessedBlock?` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:41](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L41)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:52](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L52)*

**Returns:** *Promise‹void›*

___

### `Private` sync

▸ **sync**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:82](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/sync/regular/naive/naive.ts#L82)*

**Returns:** *Promise‹void›*
