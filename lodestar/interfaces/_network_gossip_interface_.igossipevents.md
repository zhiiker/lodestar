[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/interface"](../modules/_network_gossip_interface_.md) › [IGossipEvents](_network_gossip_interface_.igossipevents.md)

# Interface: IGossipEvents

## Hierarchy

* **IGossipEvents**

## Index

### Properties

* [[GossipEvent.AGGREGATE_AND_PROOF]](_network_gossip_interface_.igossipevents.md#[gossipevent.aggregate_and_proof])
* [[GossipEvent.ATTESTATION]](_network_gossip_interface_.igossipevents.md#[gossipevent.attestation])
* [[GossipEvent.ATTESTATION_SUBNET]](_network_gossip_interface_.igossipevents.md#[gossipevent.attestation_subnet])
* [[GossipEvent.ATTESTER_SLASHING]](_network_gossip_interface_.igossipevents.md#[gossipevent.attester_slashing])
* [[GossipEvent.BLOCK]](_network_gossip_interface_.igossipevents.md#[gossipevent.block])
* [[GossipEvent.PROPOSER_SLASHING]](_network_gossip_interface_.igossipevents.md#[gossipevent.proposer_slashing])
* [[GossipEvent.VOLUNTARY_EXIT]](_network_gossip_interface_.igossipevents.md#[gossipevent.voluntary_exit])
* [gossipsub:heartbeat](_network_gossip_interface_.igossipevents.md#gossipsub:heartbeat)

## Properties

###  [GossipEvent.AGGREGATE_AND_PROOF]

• **[GossipEvent.AGGREGATE_AND_PROOF]**: *function*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:28](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L28)*

#### Type declaration:

▸ (`attestation`: SignedAggregateAndProof): *void*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | SignedAggregateAndProof |

___

###  [GossipEvent.ATTESTATION]

• **[GossipEvent.ATTESTATION]**: *function*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:27](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L27)*

#### Type declaration:

▸ (`attestation`: Attestation): *void*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

___

###  [GossipEvent.ATTESTATION_SUBNET]

• **[GossipEvent.ATTESTATION_SUBNET]**: *function*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:26](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L26)*

#### Type declaration:

▸ (`attestationSubnet`: object): *void*

**Parameters:**

▪ **attestationSubnet**: *object*

Name | Type |
------ | ------ |
`attestation` | Attestation |
`subnet` | number |

___

###  [GossipEvent.ATTESTER_SLASHING]

• **[GossipEvent.ATTESTER_SLASHING]**: *function*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:31](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L31)*

#### Type declaration:

▸ (`attesterSlashing`: AttesterSlashing): *void*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

___

###  [GossipEvent.BLOCK]

• **[GossipEvent.BLOCK]**: *function*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:25](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L25)*

#### Type declaration:

▸ (`signedBlock`: SignedBeaconBlock): *void*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

___

###  [GossipEvent.PROPOSER_SLASHING]

• **[GossipEvent.PROPOSER_SLASHING]**: *function*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:30](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L30)*

#### Type declaration:

▸ (`proposerSlashing`: ProposerSlashing): *void*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

___

###  [GossipEvent.VOLUNTARY_EXIT]

• **[GossipEvent.VOLUNTARY_EXIT]**: *function*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:29](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L29)*

#### Type declaration:

▸ (`voluntaryExit`: SignedVoluntaryExit): *void*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

___

###  gossipsub:heartbeat

• **gossipsub:heartbeat**: *function*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:32](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/gossip/interface.ts#L32)*

#### Type declaration:

▸ (): *void*
