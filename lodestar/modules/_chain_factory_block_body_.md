[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/block/body"](_chain_factory_block_body_.md)

# External module: "chain/factory/block/body"

## Index

### Functions

* [assembleBody](_chain_factory_block_body_.md#assemblebody)

## Functions

###  assembleBody

▸ **assembleBody**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `currentState`: BeaconState, `randaoReveal`: Bytes96, `graffiti`: Bytes32): *Promise‹BeaconBlockBody›*

*Defined in [packages/lodestar/src/chain/factory/block/body.ts:12](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar/src/chain/factory/block/body.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`currentState` | BeaconState |
`randaoReveal` | Bytes96 |
`graffiti` | Bytes32 |

**Returns:** *Promise‹BeaconBlockBody›*
