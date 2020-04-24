[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/validator"](../modules/_network_gossip_validator_.md) › [GossipMessageValidator](_network_gossip_validator_.gossipmessagevalidator.md)

# Class: GossipMessageValidator

## Hierarchy

* **GossipMessageValidator**

## Implements

* [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)

## Index

### Constructors

* [constructor](_network_gossip_validator_.gossipmessagevalidator.md#constructor)

### Properties

* [chain](_network_gossip_validator_.gossipmessagevalidator.md#private-chain)
* [config](_network_gossip_validator_.gossipmessagevalidator.md#private-config)
* [db](_network_gossip_validator_.gossipmessagevalidator.md#private-db)
* [logger](_network_gossip_validator_.gossipmessagevalidator.md#private-logger)
* [opPool](_network_gossip_validator_.gossipmessagevalidator.md#private-oppool)

### Methods

* [isUnaggregatedAttestation](_network_gossip_validator_.gossipmessagevalidator.md#isunaggregatedattestation)
* [isValidIncomingAggregateAndProof](_network_gossip_validator_.gossipmessagevalidator.md#isvalidincomingaggregateandproof)
* [isValidIncomingAttesterSlashing](_network_gossip_validator_.gossipmessagevalidator.md#isvalidincomingattesterslashing)
* [isValidIncomingBlock](_network_gossip_validator_.gossipmessagevalidator.md#isvalidincomingblock)
* [isValidIncomingCommitteeAttestation](_network_gossip_validator_.gossipmessagevalidator.md#isvalidincomingcommitteeattestation)
* [isValidIncomingProposerSlashing](_network_gossip_validator_.gossipmessagevalidator.md#isvalidincomingproposerslashing)
* [isValidIncomingUnaggregatedAttestation](_network_gossip_validator_.gossipmessagevalidator.md#isvalidincomingunaggregatedattestation)
* [isValidIncomingVoluntaryExit](_network_gossip_validator_.gossipmessagevalidator.md#isvalidincomingvoluntaryexit)

## Constructors

###  constructor

\+ **new GossipMessageValidator**(`__namedParameters`: object): *[GossipMessageValidator](_network_gossip_validator_.gossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:52](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L52)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)‹› |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |
`opPool` | [OpPool](_oppool_oppool_.oppool.md)‹› |

**Returns:** *[GossipMessageValidator](_network_gossip_validator_.gossipmessagevalidator.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:48](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L48)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:51](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L51)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:49](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L49)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:52](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L52)*

___

### `Private` opPool

• **opPool**: *[OpPool](_oppool_oppool_.oppool.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:50](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L50)*

## Methods

###  isUnaggregatedAttestation

▸ **isUnaggregatedAttestation**(`attestation`: Attestation): *boolean*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:105](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *boolean*

___

###  isValidIncomingAggregateAndProof

▸ **isValidIncomingAggregateAndProof**(`signedAggregationAndProof`: SignedAggregateAndProof): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:149](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`signedAggregationAndProof` | SignedAggregateAndProof |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingAttesterSlashing

▸ **isValidIncomingAttesterSlashing**(`attesterSlashing`: AttesterSlashing): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:261](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L261)*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingBlock

▸ **isValidIncomingBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:62](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingCommitteeAttestation

▸ **isValidIncomingCommitteeAttestation**(`attestation`: Attestation, `subnet`: number): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:116](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |
`subnet` | number |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingProposerSlashing

▸ **isValidIncomingProposerSlashing**(`proposerSlashing`: ProposerSlashing): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:252](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L252)*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingUnaggregatedAttestation

▸ **isValidIncomingUnaggregatedAttestation**(`attestation`: Attestation): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:225](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingVoluntaryExit

▸ **isValidIncomingVoluntaryExit**(`voluntaryExit`: SignedVoluntaryExit): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:239](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/validator.ts#L239)*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *Promise‹boolean›*
