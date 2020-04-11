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

▸ **isValidIncomingAggregateAndProof**(`aggregateAndProof`: AggregateAndProof): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:76](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregateAndProof` | AggregateAndProof |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingAttesterSlashing

▸ **isValidIncomingAttesterSlashing**(`attesterSlashing`: AttesterSlashing): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:80](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingBlock

▸ **isValidIncomingBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:74](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingCommitteeAttestation

▸ **isValidIncomingCommitteeAttestation**(`attestation`: Attestation, `subnet`: number): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:75](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |
`subnet` | number |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingProposerSlashing

▸ **isValidIncomingProposerSlashing**(`proposerSlashing`: ProposerSlashing): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:79](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingUnaggregatedAttestation

▸ **isValidIncomingUnaggregatedAttestation**(`attestation`: Attestation): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:77](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹boolean›*

___

###  isValidIncomingVoluntaryExit

▸ **isValidIncomingVoluntaryExit**(`voluntaryExit`: SignedVoluntaryExit): *Promise‹boolean›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:78](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *Promise‹boolean›*
