[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/blocks/process"](_chain_blocks_process_.md)

# External module: "chain/blocks/process"

## Index

### Functions

* [getPreState](_chain_blocks_process_.md#getprestate)
* [processBlock](_chain_blocks_process_.md#processblock)
* [runStateTransition](_chain_blocks_process_.md#runstatetransition)
* [updateDepositMerkleTree](_chain_blocks_process_.md#updatedepositmerkletree)
* [updateForkChoice](_chain_blocks_process_.md#updateforkchoice)

## Functions

###  getPreState

▸ **getPreState**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `pool`: [BlockPool](../classes/_chain_blocks_pool_.blockpool.md), `logger`: ILogger, `job`: [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)): *Promise‹BeaconState | null›*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:46](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/chain/blocks/process.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`pool` | [BlockPool](../classes/_chain_blocks_pool_.blockpool.md) |
`logger` | ILogger |
`job` | [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md) |

**Returns:** *Promise‹BeaconState | null›*

___

###  processBlock

▸ **processBlock**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `logger`: ILogger, `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md), `pool`: [BlockPool](../classes/_chain_blocks_pool_.blockpool.md)): *function*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:11](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/chain/blocks/process.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |
`forkChoice` | [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md) |
`pool` | [BlockPool](../classes/_chain_blocks_pool_.blockpool.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)›): *AsyncGenerator‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)› |

___

###  runStateTransition

▸ **runStateTransition**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `logger`: ILogger, `preState`: BeaconState, `job`: [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)): *Promise‹BeaconState | null›*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:108](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/chain/blocks/process.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |
`preState` | BeaconState |
`job` | [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md) |

**Returns:** *Promise‹BeaconState | null›*

___

###  updateDepositMerkleTree

▸ **updateDepositMerkleTree**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `newState`: BeaconState): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:91](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/chain/blocks/process.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`newState` | BeaconState |

**Returns:** *Promise‹void›*

___

###  updateForkChoice

▸ **updateForkChoice**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md), `block`: SignedBeaconBlock, `newState`: BeaconState): *Promise‹Root | null›*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:69](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/chain/blocks/process.ts#L69)*

Returns new chainhead or null

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | IBeaconConfig | - |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) | - |
`forkChoice` | [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md) | - |
`block` | SignedBeaconBlock | - |
`newState` | BeaconState |   |

**Returns:** *Promise‹Root | null›*
