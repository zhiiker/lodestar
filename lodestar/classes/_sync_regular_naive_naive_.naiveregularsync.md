[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/regular/naive/naive"](../modules/_sync_regular_naive_naive_.md) › [NaiveRegularSync](_sync_regular_naive_naive_.naiveregularsync.md)

# Class: NaiveRegularSync

## Hierarchy

* **NaiveRegularSync**

## Implements

* [IRegularSync](../interfaces/_sync_regular_interface_.iregularsync.md)

## Index

### Constructors

* [constructor](_sync_regular_naive_naive_.naiveregularsync.md#constructor)

### Properties

* [attestationCollector](_sync_regular_naive_naive_.naiveregularsync.md#private-attestationcollector)
* [chain](_sync_regular_naive_naive_.naiveregularsync.md#private-chain)
* [config](_sync_regular_naive_naive_.naiveregularsync.md#private-config)
* [db](_sync_regular_naive_naive_.naiveregularsync.md#private-db)
* [logger](_sync_regular_naive_naive_.naiveregularsync.md#private-logger)
* [network](_sync_regular_naive_naive_.naiveregularsync.md#private-network)
* [opPool](_sync_regular_naive_naive_.naiveregularsync.md#private-oppool)
* [opts](_sync_regular_naive_naive_.naiveregularsync.md#private-opts)
* [peers](_sync_regular_naive_naive_.naiveregularsync.md#private-peers)
* [reps](_sync_regular_naive_naive_.naiveregularsync.md#private-reps)
* [targetSlot](_sync_regular_naive_naive_.naiveregularsync.md#private-targetslot)

### Methods

* [collectAttestations](_sync_regular_naive_naive_.naiveregularsync.md#collectattestations)
* [onAggregatedAttestation](_sync_regular_naive_naive_.naiveregularsync.md#private-onaggregatedattestation)
* [onBlock](_sync_regular_naive_naive_.naiveregularsync.md#private-onblock)
* [onProcessedBlock](_sync_regular_naive_naive_.naiveregularsync.md#private-onprocessedblock)
* [onUnknownBlockRoot](_sync_regular_naive_naive_.naiveregularsync.md#private-onunknownblockroot)
* [start](_sync_regular_naive_naive_.naiveregularsync.md#start)
* [startGossiping](_sync_regular_naive_naive_.naiveregularsync.md#private-startgossiping)
* [stop](_sync_regular_naive_naive_.naiveregularsync.md#stop)
* [stopGossiping](_sync_regular_naive_naive_.naiveregularsync.md#private-stopgossiping)
* [syncUp](_sync_regular_naive_naive_.naiveregularsync.md#private-syncup)

## Constructors

###  constructor

\+ **new NaiveRegularSync**(`options`: Partial‹[IRegularSyncOptions](../interfaces/_sync_regular_options_.iregularsyncoptions.md)›, `modules`: [IRegularSyncModules](../modules/_sync_regular_interface_.md#iregularsyncmodules)): *[NaiveRegularSync](_sync_regular_naive_naive_.naiveregularsync.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:41](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Partial‹[IRegularSyncOptions](../interfaces/_sync_regular_options_.iregularsyncoptions.md)› |
`modules` | [IRegularSyncModules](../modules/_sync_regular_interface_.md#iregularsyncmodules) |

**Returns:** *[NaiveRegularSync](_sync_regular_naive_naive_.naiveregularsync.md)*

## Properties

### `Private` attestationCollector

• **attestationCollector**: *[AttestationCollector](_sync_utils_attestation_collector_.attestationcollector.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:37](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L37)*

___

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:29](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L29)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:21](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L21)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:23](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L23)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:35](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L35)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:27](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L27)*

___

### `Private` opPool

• **opPool**: *[OpPool](_oppool_oppool_.oppool.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:25](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L25)*

___

### `Private` opts

• **opts**: *[IRegularSyncOptions](../interfaces/_sync_regular_options_.iregularsyncoptions.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:39](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L39)*

___

### `Private` peers

• **peers**: *PeerInfo[]*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:33](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L33)*

___

### `Private` reps

• **reps**: *[ReputationStore](_sync_ireputation_.reputationstore.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:31](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L31)*

___

### `Private` targetSlot

• **targetSlot**: *Slot*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:41](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L41)*

## Methods

###  collectAttestations

▸ **collectAttestations**(`slot`: number, `committeeIndex`: number): *void*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:78](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | number |
`committeeIndex` | number |

**Returns:** *void*

___

### `Private` onAggregatedAttestation

▸ **onAggregatedAttestation**(`aggregate`: AggregateAndProof): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:150](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregate` | AggregateAndProof |

**Returns:** *Promise‹void›*

___

### `Private` onBlock

▸ **onBlock**(`block`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:154](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

### `Private` onProcessedBlock

▸ **onProcessedBlock**(`block`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:139](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L139)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

### `Private` onUnknownBlockRoot

▸ **onUnknownBlockRoot**(`root`: Root): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:158](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Root |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IRegularSync](../interfaces/_sync_regular_interface_.iregularsync.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:59](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L59)*

**Returns:** *Promise‹void›*

___

### `Private` startGossiping

▸ **startGossiping**(): *void*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:82](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L82)*

**Returns:** *void*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IRegularSync](../interfaces/_sync_regular_interface_.iregularsync.md)*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:71](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L71)*

**Returns:** *Promise‹void›*

___

### `Private` stopGossiping

▸ **stopGossiping**(): *void*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:90](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L90)*

**Returns:** *void*

___

### `Private` syncUp

▸ **syncUp**(): *Promise‹boolean›*

*Defined in [packages/lodestar/src/sync/regular/naive/naive.ts:101](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/naive/naive.ts#L101)*

**Returns:** *Promise‹boolean›*

false if it's already synced up, true if submitted blocks for chain processing
