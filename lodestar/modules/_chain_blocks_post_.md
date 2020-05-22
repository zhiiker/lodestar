[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/blocks/post"](_chain_blocks_post_.md)

# External module: "chain/blocks/post"

## Index

### Functions

* [newFinalizedEpoch](_chain_blocks_post_.md#newfinalizedepoch)
* [newJustifiedEpoch](_chain_blocks_post_.md#newjustifiedepoch)
* [postProcess](_chain_blocks_post_.md#postprocess)

## Functions

###  newFinalizedEpoch

▸ **newFinalizedEpoch**(`logger`: ILogger, `metrics`: [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md), `eventBus`: [ChainEventEmitter](_chain_interface_.md#chaineventemitter), `state`: BeaconState): *void*

*Defined in [packages/lodestar/src/chain/blocks/post.ts:70](https://github.com/ChainSafe/lodestar/blob/2bf6badbe/packages/lodestar/src/chain/blocks/post.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`logger` | ILogger |
`metrics` | [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md) |
`eventBus` | [ChainEventEmitter](_chain_interface_.md#chaineventemitter) |
`state` | BeaconState |

**Returns:** *void*

___

###  newJustifiedEpoch

▸ **newJustifiedEpoch**(`logger`: ILogger, `metrics`: [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md), `eventBus`: [ChainEventEmitter](_chain_interface_.md#chaineventemitter), `state`: BeaconState): *void*

*Defined in [packages/lodestar/src/chain/blocks/post.ts:58](https://github.com/ChainSafe/lodestar/blob/2bf6badbe/packages/lodestar/src/chain/blocks/post.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`logger` | ILogger |
`metrics` | [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md) |
`eventBus` | [ChainEventEmitter](_chain_interface_.md#chaineventemitter) |
`state` | BeaconState |

**Returns:** *void*

___

###  postProcess

▸ **postProcess**(`config`: IBeaconConfig, `logger`: ILogger, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `epochCtx`: EpochContext, `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md), `metrics`: [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md), `eventBus`: [ChainEventEmitter](_chain_interface_.md#chaineventemitter), `attestationProcessor`: [IAttestationProcessor](../interfaces/_chain_interface_.iattestationprocessor.md)): *function*

*Defined in [packages/lodestar/src/chain/blocks/post.ts:10](https://github.com/ChainSafe/lodestar/blob/2bf6badbe/packages/lodestar/src/chain/blocks/post.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`logger` | ILogger |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`epochCtx` | EpochContext |
`forkChoice` | [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md) |
`metrics` | [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md) |
`eventBus` | [ChainEventEmitter](_chain_interface_.md#chaineventemitter) |
`attestationProcessor` | [IAttestationProcessor](../interfaces/_chain_interface_.iattestationprocessor.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹object›): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹object› |
