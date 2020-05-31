[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/blocks/validate"](_chain_blocks_validate_.md)

# External module: "chain/blocks/validate"

## Index

### Functions

* [validateBlock](_chain_blocks_validate_.md#validateblock)

## Functions

###  validateBlock

▸ **validateBlock**(`config`: IBeaconConfig, `logger`: ILogger, `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)): *function*

*Defined in [packages/lodestar/src/chain/blocks/validate.ts:8](https://github.com/ChainSafe/lodestar/blob/2143d4cb6/packages/lodestar/src/chain/blocks/validate.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`logger` | ILogger |
`forkChoice` | [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)›): *AsyncGenerator‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)› |
