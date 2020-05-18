[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/block/deposits"](_chain_factory_block_deposits_.md)

# External module: "chain/factory/block/deposits"

## Index

### Functions

* [generateDeposits](_chain_factory_block_deposits_.md#generatedeposits)

## Functions

###  generateDeposits

▸ **generateDeposits**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `state`: BeaconState, `eth1Data`: Eth1Data, `depositDataRootList`: TreeBacked‹List‹Root››): *Promise‹Deposit[]›*

*Defined in [packages/lodestar/src/chain/factory/block/deposits.ts:10](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/factory/block/deposits.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`state` | BeaconState |
`eth1Data` | Eth1Data |
`depositDataRootList` | TreeBacked‹List‹Root›› |

**Returns:** *Promise‹Deposit[]›*
