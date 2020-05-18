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

*Defined in [packages/lodestar/src/network/gossip/validator.ts:50](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L50)*

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

*Defined in [packages/lodestar/src/network/gossip/validator.ts:47](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L47)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:49](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L49)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:48](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L48)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:50](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L50)*

## Methods

###  isValidIncomingAggregateAndProof

▸ **isValidIncomingAggregateAndProof**(`signedAggregationAndProof`: SignedAggregateAndProof): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:138](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`signedAggregationAndProof` | SignedAggregateAndProof |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingAttesterSlashing

▸ **isValidIncomingAttesterSlashing**(`attesterSlashing`: AttesterSlashing): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:250](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingBlock

▸ **isValidIncomingBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:59](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingCommitteeAttestation

▸ **isValidIncomingCommitteeAttestation**(`attestation`: Attestation, `subnet`: number): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:102](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L102)*

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

*Defined in [packages/lodestar/src/network/gossip/validator.ts:241](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L241)*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingUnaggregatedAttestation

▸ **isValidIncomingUnaggregatedAttestation**(`attestation`: Attestation): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:214](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L214)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingVoluntaryExit

▸ **isValidIncomingVoluntaryExit**(`voluntaryExit`: SignedVoluntaryExit): *Promise‹boolean›*

*Implementation of [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)*

*Defined in [packages/lodestar/src/network/gossip/validator.ts:228](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/network/gossip/validator.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *Promise‹boolean›*
