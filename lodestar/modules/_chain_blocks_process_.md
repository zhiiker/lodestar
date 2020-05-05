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

*Defined in [packages/lodestar/src/chain/blocks/process.ts:56](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/chain/blocks/process.ts#L56)*

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

▸ **processBlock**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `logger`: ILogger, `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md), `pool`: [BlockPool](../classes/_chain_blocks_pool_.blockpool.md), `eventBus`: [ChainEventEmitter](_chain_interface_.md#chaineventemitter)): *function*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:12](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/chain/blocks/process.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |
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

*Defined in [packages/lodestar/src/chain/blocks/process.ts:101](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/chain/blocks/process.ts#L101)*

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

▸ **updateForkChoice**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md), `block`: SignedBeaconBlock, `newState`: BeaconState): *Promise‹Root | null›*

*Defined in [packages/lodestar/src/chain/blocks/process.ts:79](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/chain/blocks/process.ts#L79)*

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
