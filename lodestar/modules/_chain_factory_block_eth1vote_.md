[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/block/eth1Vote"](_chain_factory_block_eth1vote_.md)

# External module: "chain/factory/block/eth1Vote"

## Index

### Functions

* [getEth1Vote](_chain_factory_block_eth1vote_.md#geteth1vote)
* [votingPeriodStartTime](_chain_factory_block_eth1vote_.md#votingperiodstarttime)

## Functions

###  getEth1Vote

▸ **getEth1Vote**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `state`: BeaconState): *Promise‹Eth1Data›*

*Defined in [packages/lodestar/src/chain/factory/block/eth1Vote.ts:15](https://github.com/ChainSafe/lodestar/blob/2bf6badbe/packages/lodestar/src/chain/factory/block/eth1Vote.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`state` | BeaconState |

**Returns:** *Promise‹Eth1Data›*

___

###  votingPeriodStartTime

▸ **votingPeriodStartTime**(`config`: IBeaconConfig, `state`: BeaconState): *number*

*Defined in [packages/lodestar/src/chain/factory/block/eth1Vote.ts:9](https://github.com/ChainSafe/lodestar/blob/2bf6badbe/packages/lodestar/src/chain/factory/block/eth1Vote.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *number*
