[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/handlers/block"](_network_gossip_handlers_block_.md)

# External module: "network/gossip/handlers/block"

## Index

### Functions

* [handleIncomingBlock](_network_gossip_handlers_block_.md#handleincomingblock)
* [publishBlock](_network_gossip_handlers_block_.md#publishblock)

## Functions

###  handleIncomingBlock

▸ **handleIncomingBlock**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `obj`: [GossipObject](_network_gossip_interface_.md#gossipobject)): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/block.ts:11](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar/src/network/gossip/handlers/block.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`obj` | [GossipObject](_network_gossip_interface_.md#gossipobject) |

**Returns:** *Promise‹void›*

___

###  publishBlock

▸ **publishBlock**(`this`: [Gossip](../classes/_network_gossip_gossip_.gossip.md), `signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/handlers/block.ts:21](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar/src/network/gossip/handlers/block.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [Gossip](../classes/_network_gossip_gossip_.gossip.md) |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*
