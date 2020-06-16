[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/handlers/attestation"](_network_gossip_handlers_attestation_.md)

# External module: "network/gossip/handlers/attestation"

## Index

### Functions

* [getCommitteeAttestationHandler](_network_gossip_handlers_attestation_.md#getcommitteeattestationhandler)
* [handleIncomingAttestation](_network_gossip_handlers_attestation_.md#handleincomingattestation)
* [publishCommiteeAttestation](_network_gossip_handlers_attestation_.md#publishcommiteeattestation)

## Functions

###  getCommitteeAttestationHandler

▸ **getCommitteeAttestationHandler**(`subnet`: number): *[GossipHandlerFn](_network_gossip_gossip_.md#gossiphandlerfn)*

*Defined in [packages/lodestar/src/network/gossip/handlers/attestation.ts:25](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar/src/network/gossip/handlers/attestation.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`subnet` | number |

**Returns:** *[GossipHandlerFn](_network_gossip_gossip_.md#gossiphandlerfn)*

___

###  handleIncomingAttestation

▸ **handleIncomingAttestation**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `obj`: [GossipObject](_network_gossip_interface_.md#gossipobject)): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/attestation.ts:12](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar/src/network/gossip/handlers/attestation.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`obj` | [GossipObject](_network_gossip_interface_.md#gossipobject) |

**Returns:** *Promise‹void›*

___

###  publishCommiteeAttestation

▸ **publishCommiteeAttestation**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/attestation.ts:41](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar/src/network/gossip/handlers/attestation.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`attestation` | Attestation |

**Returns:** *Promise‹void›*
