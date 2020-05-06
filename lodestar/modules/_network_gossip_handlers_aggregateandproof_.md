[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/handlers/aggregateAndProof"](_network_gossip_handlers_aggregateandproof_.md)

# External module: "network/gossip/handlers/aggregateAndProof"

## Index

### Functions

* [handleIncomingAggregateAndProof](_network_gossip_handlers_aggregateandproof_.md#handleincomingaggregateandproof)
* [publishAggregatedAttestation](_network_gossip_handlers_aggregateandproof_.md#publishaggregatedattestation)

## Functions

###  handleIncomingAggregateAndProof

▸ **handleIncomingAggregateAndProof**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `obj`: [GossipObject](_network_gossip_interface_.md#gossipobject)): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/aggregateAndProof.ts:12](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/network/gossip/handlers/aggregateAndProof.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`obj` | [GossipObject](_network_gossip_interface_.md#gossipobject) |

**Returns:** *Promise‹void›*

___

###  publishAggregatedAttestation

▸ **publishAggregatedAttestation**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `signedAggregateAndProof`: SignedAggregateAndProof): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/aggregateAndProof.ts:25](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/network/gossip/handlers/aggregateAndProof.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`signedAggregateAndProof` | SignedAggregateAndProof |

**Returns:** *Promise‹void›*
