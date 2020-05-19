[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/handlers/attesterSlashing"](_network_gossip_handlers_attesterslashing_.md)

# External module: "network/gossip/handlers/attesterSlashing"

## Index

### Functions

* [handleIncomingAttesterSlashing](_network_gossip_handlers_attesterslashing_.md#handleincomingattesterslashing)
* [publishAttesterSlashing](_network_gossip_handlers_attesterslashing_.md#publishattesterslashing)

## Functions

###  handleIncomingAttesterSlashing

▸ **handleIncomingAttesterSlashing**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `obj`: [GossipObject](_network_gossip_interface_.md#gossipobject)): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/attesterSlashing.ts:11](https://github.com/ChainSafe/lodestar/blob/e079784d1/packages/lodestar/src/network/gossip/handlers/attesterSlashing.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`obj` | [GossipObject](_network_gossip_interface_.md#gossipobject) |

**Returns:** *Promise‹void›*

___

###  publishAttesterSlashing

▸ **publishAttesterSlashing**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `attesterSlashing`: AttesterSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/attesterSlashing.ts:23](https://github.com/ChainSafe/lodestar/blob/e079784d1/packages/lodestar/src/network/gossip/handlers/attesterSlashing.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹void›*
