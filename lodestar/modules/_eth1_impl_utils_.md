[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/utils"](_eth1_impl_utils_.md)

# External module: "eth1/impl/utils"

## Index

### Functions

* [getEth1BlockCandidateRange](_eth1_impl_utils_.md#geteth1blockcandidaterange)
* [getLatestEth1BlockTimestamp](_eth1_impl_utils_.md#getlatesteth1blocktimestamp)
* [isCandidateBlock](_eth1_impl_utils_.md#iscandidateblock)
* [votingPeriodStartTime](_eth1_impl_utils_.md#votingperiodstarttime)

## Functions

###  getEth1BlockCandidateRange

▸ **getEth1BlockCandidateRange**(`config`: IBeaconConfig, `state`: BeaconState, `eth1Head`: Block): *[Eth1BlockRange](../interfaces/_eth1_interface_.eth1blockrange.md)*

*Defined in [packages/lodestar/src/eth1/impl/utils.ts:32](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/utils.ts#L32)*

Get initial eth1 blocks to cache.

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |
`eth1Head` | Block |

**Returns:** *[Eth1BlockRange](../interfaces/_eth1_interface_.eth1blockrange.md)*

___

###  getLatestEth1BlockTimestamp

▸ **getLatestEth1BlockTimestamp**(`config`: IBeaconConfig, `state`: BeaconState): *Number64*

*Defined in [packages/lodestar/src/eth1/impl/utils.ts:21](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/utils.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *Number64*

___

###  isCandidateBlock

▸ **isCandidateBlock**(`config`: IBeaconConfig, `block`: Block, `periodStart`: Number64): *boolean*

*Defined in [packages/lodestar/src/eth1/impl/utils.ts:13](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/utils.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`block` | Block |
`periodStart` | Number64 |

**Returns:** *boolean*

___

###  votingPeriodStartTime

▸ **votingPeriodStartTime**(`config`: IBeaconConfig, `state`: BeaconState): *Number64*

*Defined in [packages/lodestar/src/eth1/impl/utils.ts:7](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/utils.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *Number64*
