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

*Defined in [packages/lodestar/src/network/gossip/validator.ts:38](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L38)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)‹› |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |

**Returns:** *[GossipMessageValidator](_network_gossip_validator_.gossipmessagevalidator.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:35](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L35)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:37](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L37)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:36](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L36)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:38](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L38)*

## Methods

###  isUnaggregatedAttestation

▸ **isUnaggregatedAttestation**(`attestation`: Attestation): *boolean*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:79](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *boolean*

___

###  isValidIncomingAggregateAndProof

▸ **isValidIncomingAggregateAndProof**(`aggregationAndProof`: AggregateAndProof): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:115](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregationAndProof` | AggregateAndProof |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingAttesterSlashing

▸ **isValidIncomingAttesterSlashing**(`attesterSlashing`: AttesterSlashing): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:201](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L201)*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingBlock

▸ **isValidIncomingBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:48](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingCommitteeAttestation

▸ **isValidIncomingCommitteeAttestation**(`attestation`: Attestation, `subnet`: number): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:90](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L90)*

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

*Defined in [packages/lodestar/src/network/gossip/validator.ts:191](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingUnaggregatedAttestation

▸ **isValidIncomingUnaggregatedAttestation**(`attestation`: Attestation): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:163](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingVoluntaryExit

▸ **isValidIncomingVoluntaryExit**(`voluntaryExit`: SignedVoluntaryExit): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:177](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/validator.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *Promise‹boolean›*
