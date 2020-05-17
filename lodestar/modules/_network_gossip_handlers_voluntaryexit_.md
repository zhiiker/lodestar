[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/handlers/voluntaryExit"](_network_gossip_handlers_voluntaryexit_.md)

# External module: "network/gossip/handlers/voluntaryExit"

## Index

### Functions

* [handleIncomingVoluntaryExit](_network_gossip_handlers_voluntaryexit_.md#handleincomingvoluntaryexit)
* [publishVoluntaryExit](_network_gossip_handlers_voluntaryexit_.md#publishvoluntaryexit)

## Functions

###  handleIncomingVoluntaryExit

▸ **handleIncomingVoluntaryExit**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `obj`: [GossipObject](_network_gossip_interface_.md#gossipobject)): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/voluntaryExit.ts:12](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar/src/network/gossip/handlers/voluntaryExit.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`obj` | [GossipObject](_network_gossip_interface_.md#gossipobject) |

**Returns:** *Promise‹void›*

___

###  publishVoluntaryExit

▸ **publishVoluntaryExit**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `voluntaryExit`: SignedVoluntaryExit): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/voluntaryExit.ts:24](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar/src/network/gossip/handlers/voluntaryExit.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *Promise‹void›*
