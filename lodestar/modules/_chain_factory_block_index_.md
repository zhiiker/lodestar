[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/block/index"](_chain_factory_block_index_.md)

# External module: "chain/factory/block/index"

## Index

### Functions

* [assembleBlock](_chain_factory_block_index_.md#assembleblock)

## Functions

###  assembleBlock

▸ **assembleBlock**(`config`: IBeaconConfig, `chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `opPool`: [OpPool](../classes/_oppool_oppool_.oppool.md), `eth1`: [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md), `slot`: Slot, `randao`: Bytes96): *Promise‹BeaconBlock | null›*

*Defined in [packages/lodestar/src/chain/factory/block/index.ts:17](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/chain/factory/block/index.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md) |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`opPool` | [OpPool](../classes/_oppool_oppool_.oppool.md) |
`eth1` | [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md) |
`slot` | Slot |
`randao` | Bytes96 |

**Returns:** *Promise‹BeaconBlock | null›*
