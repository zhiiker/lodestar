[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/interop/state"](_lodestar_interop_state_.md)

# External module: "lodestar/interop/state"

## Index

### Variables

* [INTEROP_BLOCK_HASH](_lodestar_interop_state_.md#const-interop_block_hash)
* [INTEROP_TIMESTAMP](_lodestar_interop_state_.md#const-interop_timestamp)

### Functions

* [quickStartState](_lodestar_interop_state_.md#quickstartstate)

## Variables

### `Const` INTEROP_BLOCK_HASH

• **INTEROP_BLOCK_HASH**: *Buffer‹›* = Buffer.alloc(32, "B")

*Defined in [packages/lodestar-cli/src/lodestar/interop/state.ts:8](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar-cli/src/lodestar/interop/state.ts#L8)*

___

### `Const` INTEROP_TIMESTAMP

• **INTEROP_TIMESTAMP**: *number* = Math.pow(2, 40)

*Defined in [packages/lodestar-cli/src/lodestar/interop/state.ts:9](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar-cli/src/lodestar/interop/state.ts#L9)*

## Functions

###  quickStartState

▸ **quickStartState**(`config`: IBeaconConfig, `depositDataRootList`: TreeBacked‹List‹Root››, `genesisTime`: number, `validatorCount`: number): *BeaconState*

*Defined in [packages/lodestar-cli/src/lodestar/interop/state.ts:11](https://github.com/ChainSafe/lodestar/blob/40e67a18f/packages/lodestar-cli/src/lodestar/interop/state.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`depositDataRootList` | TreeBacked‹List‹Root›› |
`genesisTime` | number |
`validatorCount` | number |

**Returns:** *BeaconState*
