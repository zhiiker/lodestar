[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/blocks/process"](_chain_blocks_process_.md)

# External module: "chain/blocks/process"

## Index

### Functions

* [getPreState](_chain_blocks_process_.md#getprestate)
* [processBlock](_chain_blocks_process_.md#processblock)
* [runStateTransition](_chain_blocks_process_.md#runstatetransition)
* [updateForkChoice](_chain_blocks_process_.md#updateforkchoice)

## Functions

###  getPreState

▸ **getPreState**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `pool`: [BlockPool](../classes/_chain_blocks_pool_.blockpool.md), `logger`: ILogger, `job`: [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)): *Promise‹BeaconState | null›*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:57](https://github.com/ChainSafe/lodestar/blob/9eb50dc78/packages/lodestar/src/chain/blocks/process.ts#L57)*

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

▸ **processBlock**(`config`: IBeaconConfig, `logger`: ILogger, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md), `pool`: [BlockPool](../classes/_chain_blocks_pool_.blockpool.md), `eventBus`: [ChainEventEmitter](_chain_interface_.md#chaineventemitter)): *function*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:12](https://github.com/ChainSafe/lodestar/blob/9eb50dc78/packages/lodestar/src/chain/blocks/process.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`logger` | ILogger |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`forkChoice` | [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md) |
`pool` | [BlockPool](../classes/_chain_blocks_pool_.blockpool.md) |
`eventBus` | [ChainEventEmitter](_chain_interface_.md#chaineventemitter) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)›): *AsyncGenerator‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)› |

___

###  runStateTransition

▸ **runStateTransition**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `logger`: ILogger, `preState`: BeaconState, `job`: [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)): *Promise‹BeaconState | null›*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:94](https://github.com/ChainSafe/lodestar/blob/9eb50dc78/packages/lodestar/src/chain/blocks/process.ts#L94)*

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

###  updateForkChoice

▸ **updateForkChoice**(`config`: IBeaconConfig, `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md), `block`: SignedBeaconBlock, `newState`: BeaconState): *Promise‹Root›*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:80](https://github.com/ChainSafe/lodestar/blob/9eb50dc78/packages/lodestar/src/chain/blocks/process.ts#L80)*

Returns new chainhead

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | IBeaconConfig | - |
`forkChoice` | [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md) | - |
`block` | SignedBeaconBlock | - |
`newState` | BeaconState |   |

**Returns:** *Promise‹Root›*
