[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/block/body"](_chain_factory_block_body_.md)

# External module: "chain/factory/block/body"

## Index

### Functions

* [assembleBody](_chain_factory_block_body_.md#assemblebody)

## Functions

###  assembleBody

▸ **assembleBody**(`config`: IBeaconConfig, `opPool`: [OpPool](../classes/_oppool_oppool_.oppool.md), `eth1`: [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md), `depositDataRootList`: TreeBacked‹List‹Root››, `currentState`: BeaconState, `randao`: Bytes96): *Promise‹BeaconBlockBody›*

*Defined in [packages/lodestar/src/chain/factory/block/body.ts:13](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/factory/block/body.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`opPool` | [OpPool](../classes/_oppool_oppool_.oppool.md) |
`eth1` | [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md) |
`depositDataRootList` | TreeBacked‹List‹Root›› |
`currentState` | BeaconState |
`randao` | Bytes96 |

**Returns:** *Promise‹BeaconBlockBody›*
