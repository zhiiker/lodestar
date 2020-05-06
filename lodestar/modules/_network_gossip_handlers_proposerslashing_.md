[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/handlers/proposerSlashing"](_network_gossip_handlers_proposerslashing_.md)

# External module: "network/gossip/handlers/proposerSlashing"

## Index

### Functions

* [handleIncomingProposerSlashing](_network_gossip_handlers_proposerslashing_.md#handleincomingproposerslashing)
* [publishProposerSlashing](_network_gossip_handlers_proposerslashing_.md#publishproposerslashing)

## Functions

###  handleIncomingProposerSlashing

▸ **handleIncomingProposerSlashing**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `obj`: [GossipObject](_network_gossip_interface_.md#gossipobject)): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/proposerSlashing.ts:11](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/network/gossip/handlers/proposerSlashing.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`obj` | [GossipObject](_network_gossip_interface_.md#gossipobject) |

**Returns:** *Promise‹void›*

___

###  publishProposerSlashing

▸ **publishProposerSlashing**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `proposerSlashing`: ProposerSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/proposerSlashing.ts:23](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/network/gossip/handlers/proposerSlashing.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹void›*
