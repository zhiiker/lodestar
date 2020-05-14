[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/block/index"](_chain_factory_block_index_.md)

# External module: "chain/factory/block/index"

## Index

### Functions

* [assembleBlock](_chain_factory_block_index_.md#assembleblock)

## Functions

###  assembleBlock

▸ **assembleBlock**(`config`: IBeaconConfig, `chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `slot`: Slot, `proposerIndex`: ValidatorIndex, `randaoReveal`: Bytes96, `graffiti`: Buffer‹›): *Promise‹BeaconBlock | null›*

*Defined in [packages/lodestar/src/chain/factory/block/index.ts:15](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar/src/chain/factory/block/index.ts#L15)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | IBeaconConfig | - |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md) | - |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) | - |
`slot` | Slot | - |
`proposerIndex` | ValidatorIndex | - |
`randaoReveal` | Bytes96 | - |
`graffiti` | Buffer‹› | ZERO_HASH |

**Returns:** *Promise‹BeaconBlock | null›*
