[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/cmds/dev/utils/state"](_lodecli_cmds_dev_utils_state_.md)

# External module: "lodecli/cmds/dev/utils/state"

## Index

### Functions

* [initDevChain](_lodecli_cmds_dev_utils_state_.md#initdevchain)
* [storeDeposits](_lodecli_cmds_dev_utils_state_.md#storedeposits)
* [storeSSZState](_lodecli_cmds_dev_utils_state_.md#storesszstate)

## Functions

###  initDevChain

▸ **initDevChain**(`node`: BeaconNode, `validatorCount`: number): *Promise‹BeaconState›*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/utils/state.ts:10](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar-cli/src/lodecli/cmds/dev/utils/state.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | BeaconNode |
`validatorCount` | number |

**Returns:** *Promise‹BeaconState›*

___

###  storeDeposits

▸ **storeDeposits**(`config`: IBeaconConfig, `db`: IBeaconDb, `deposits`: Deposit[]): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/utils/state.ts:34](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar-cli/src/lodecli/cmds/dev/utils/state.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | IBeaconDb |
`deposits` | Deposit[] |

**Returns:** *Promise‹void›*

___

###  storeSSZState

▸ **storeSSZState**(`config`: IBeaconConfig, `state`: BeaconState, `path`: string): *void*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/utils/state.ts:29](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar-cli/src/lodecli/cmds/dev/utils/state.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |
`path` | string |

**Returns:** *void*
