[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/cmds/dev/utils/interop/state"](_lodecli_cmds_dev_utils_interop_state_.md)

# External module: "lodecli/cmds/dev/utils/interop/state"

## Index

### Variables

* [INTEROP_BLOCK_HASH](_lodecli_cmds_dev_utils_interop_state_.md#const-interop_block_hash)
* [INTEROP_TIMESTAMP](_lodecli_cmds_dev_utils_interop_state_.md#const-interop_timestamp)

### Functions

* [getInteropState](_lodecli_cmds_dev_utils_interop_state_.md#getinteropstate)

## Variables

### `Const` INTEROP_BLOCK_HASH

• **INTEROP_BLOCK_HASH**: *Buffer‹›* = Buffer.alloc(32, "B")

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/utils/interop/state.ts:7](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-cli/src/lodecli/cmds/dev/utils/interop/state.ts#L7)*

___

### `Const` INTEROP_TIMESTAMP

• **INTEROP_TIMESTAMP**: *number* = Math.pow(2, 40)

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/utils/interop/state.ts:8](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-cli/src/lodecli/cmds/dev/utils/interop/state.ts#L8)*

## Functions

###  getInteropState

▸ **getInteropState**(`config`: IBeaconConfig, `depositDataRootList`: TreeBacked‹List‹Root››, `genesisTime`: number, `deposits`: Deposit[]): *BeaconState*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/utils/interop/state.ts:10](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-cli/src/lodecli/cmds/dev/utils/interop/state.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`depositDataRootList` | TreeBacked‹List‹Root›› |
`genesisTime` | number |
`deposits` | Deposit[] |

**Returns:** *BeaconState*
