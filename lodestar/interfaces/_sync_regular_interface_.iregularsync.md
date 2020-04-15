[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/regular/interface"](../modules/_sync_regular_interface_.md) › [IRegularSync](_sync_regular_interface_.iregularsync.md)

# Interface: IRegularSync

## Hierarchy

* [IService](_node_nodejs_.iservice.md)

  ↳ **IRegularSync**

## Implemented by

* [NaiveRegularSync](../classes/_sync_regular_naive_naive_.naiveregularsync.md)

## Index

### Methods

* [collectAttestations](_sync_regular_interface_.iregularsync.md#collectattestations)
* [start](_sync_regular_interface_.iregularsync.md#start)
* [stop](_sync_regular_interface_.iregularsync.md#stop)

## Methods

###  collectAttestations

▸ **collectAttestations**(`slot`: Slot, `committeeIndex`: CommitteeIndex): *void*

*Defined in [packages/lodestar/src/sync/regular/interface.ts:6](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/regular/interface.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`committeeIndex` | CommitteeIndex |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[start](_network_gossip_interface_.igossip.md#start)*

*Defined in [packages/lodestar/src/node/nodejs.ts:25](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/node/nodejs.ts#L25)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[stop](_network_gossip_interface_.igossip.md#stop)*

*Defined in [packages/lodestar/src/node/nodejs.ts:27](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/node/nodejs.ts#L27)*

**Returns:** *Promise‹void›*
