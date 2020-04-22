[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/utils/attestation-collector"](../modules/_sync_utils_attestation_collector_.md) › [AttestationCollector](_sync_utils_attestation_collector_.attestationcollector.md)

# Class: AttestationCollector

## Hierarchy

* **AttestationCollector**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md)

## Index

### Constructors

* [constructor](_sync_utils_attestation_collector_.attestationcollector.md#constructor)

### Properties

* [aggregationDuties](_sync_utils_attestation_collector_.attestationcollector.md#private-aggregationduties)
* [chain](_sync_utils_attestation_collector_.attestationcollector.md#private-chain)
* [config](_sync_utils_attestation_collector_.attestationcollector.md#private-config)
* [network](_sync_utils_attestation_collector_.attestationcollector.md#private-network)
* [opPool](_sync_utils_attestation_collector_.attestationcollector.md#private-oppool)

### Methods

* [checkDuties](_sync_utils_attestation_collector_.attestationcollector.md#private-checkduties)
* [handleCommitteeAttestation](_sync_utils_attestation_collector_.attestationcollector.md#private-handlecommitteeattestation)
* [start](_sync_utils_attestation_collector_.attestationcollector.md#start)
* [stop](_sync_utils_attestation_collector_.attestationcollector.md#stop)
* [subscribeToCommitteeAttestations](_sync_utils_attestation_collector_.attestationcollector.md#subscribetocommitteeattestations)
* [unsubscribeSubnet](_sync_utils_attestation_collector_.attestationcollector.md#private-unsubscribesubnet)

## Constructors

###  constructor

\+ **new AttestationCollector**(`config`: IBeaconConfig, `modules`: [IAttestationCollectorModules](../interfaces/_sync_utils_attestation_collector_.iattestationcollectormodules.md)): *[AttestationCollector](_sync_utils_attestation_collector_.attestationcollector.md)*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:22](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`modules` | [IAttestationCollectorModules](../interfaces/_sync_utils_attestation_collector_.iattestationcollectormodules.md) |

**Returns:** *[AttestationCollector](_sync_utils_attestation_collector_.attestationcollector.md)*

## Properties

### `Private` aggregationDuties

• **aggregationDuties**: *Map‹Slot, Set‹CommitteeIndex››* = new Map()

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:22](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L22)*

___

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:18](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L18)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:17](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L17)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:19](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L19)*

___

### `Private` opPool

• **opPool**: *[OpPool](_oppool_oppool_.oppool.md)*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:20](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L20)*

## Methods

### `Private` checkDuties

▸ **checkDuties**(`slot`: Slot): *void*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:49](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *void*

___

### `Private` handleCommitteeAttestation

▸ **handleCommitteeAttestation**(`__namedParameters`: object): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:72](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L72)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:31](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L31)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:35](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L35)*

**Returns:** *Promise‹void›*

___

###  subscribeToCommitteeAttestations

▸ **subscribeToCommitteeAttestations**(`slot`: Slot, `committeeIndex`: CommitteeIndex): *void*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:39](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`committeeIndex` | CommitteeIndex |

**Returns:** *void*

___

### `Private` unsubscribeSubnet

▸ **unsubscribeSubnet**(`subnet`: number): *void*

*Defined in [packages/lodestar/src/sync/utils/attestation-collector.ts:67](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/sync/utils/attestation-collector.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`subnet` | number |

**Returns:** *void*
