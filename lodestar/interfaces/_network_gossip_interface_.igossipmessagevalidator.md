[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/interface"](../modules/_network_gossip_interface_.md) › [IGossipMessageValidator](_network_gossip_interface_.igossipmessagevalidator.md)

# Interface: IGossipMessageValidator

## Hierarchy

* **IGossipMessageValidator**

## Implemented by

* [GossipMessageValidator](../classes/_network_gossip_validator_.gossipmessagevalidator.md)

## Index

### Methods

* [isValidIncomingAggregateAndProof](_network_gossip_interface_.igossipmessagevalidator.md#isvalidincomingaggregateandproof)
* [isValidIncomingAttesterSlashing](_network_gossip_interface_.igossipmessagevalidator.md#isvalidincomingattesterslashing)
* [isValidIncomingBlock](_network_gossip_interface_.igossipmessagevalidator.md#isvalidincomingblock)
* [isValidIncomingCommitteeAttestation](_network_gossip_interface_.igossipmessagevalidator.md#isvalidincomingcommitteeattestation)
* [isValidIncomingProposerSlashing](_network_gossip_interface_.igossipmessagevalidator.md#isvalidincomingproposerslashing)
* [isValidIncomingUnaggregatedAttestation](_network_gossip_interface_.igossipmessagevalidator.md#isvalidincomingunaggregatedattestation)
* [isValidIncomingVoluntaryExit](_network_gossip_interface_.igossipmessagevalidator.md#isvalidincomingvoluntaryexit)

## Methods

###  isValidIncomingAggregateAndProof

▸ **isValidIncomingAggregateAndProof**(`signedAggregateAndProof`: SignedAggregateAndProof): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:83](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/interface.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`signedAggregateAndProof` | SignedAggregateAndProof |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingAttesterSlashing

▸ **isValidIncomingAttesterSlashing**(`attesterSlashing`: AttesterSlashing): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:87](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/interface.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingBlock

▸ **isValidIncomingBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:81](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/interface.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingCommitteeAttestation

▸ **isValidIncomingCommitteeAttestation**(`attestation`: Attestation, `subnet`: number): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:82](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/interface.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |
`subnet` | number |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingProposerSlashing

▸ **isValidIncomingProposerSlashing**(`proposerSlashing`: ProposerSlashing): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:86](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/interface.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingUnaggregatedAttestation

▸ **isValidIncomingUnaggregatedAttestation**(`attestation`: Attestation): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:84](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/interface.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingVoluntaryExit

▸ **isValidIncomingVoluntaryExit**(`voluntaryExit`: SignedVoluntaryExit): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:85](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/gossip/interface.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *Promise‹boolean›*
