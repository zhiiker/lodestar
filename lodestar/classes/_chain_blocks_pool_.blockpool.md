[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/blocks/pool"](../modules/_chain_blocks_pool_.md) › [BlockPool](_chain_blocks_pool_.blockpool.md)

# Class: BlockPool

## Hierarchy

* **BlockPool**

## Index

### Constructors

* [constructor](_chain_blocks_pool_.blockpool.md#constructor)

### Properties

* [blockProcessorSource](_chain_blocks_pool_.blockpool.md#private-blockprocessorsource)
* [config](_chain_blocks_pool_.blockpool.md#private-config)
* [eventBus](_chain_blocks_pool_.blockpool.md#private-eventbus)
* [forkChoice](_chain_blocks_pool_.blockpool.md#private-forkchoice)
* [pool](_chain_blocks_pool_.blockpool.md#private-pool)

### Methods

* [addPendingBlock](_chain_blocks_pool_.blockpool.md#addpendingblock)
* [getKey](_chain_blocks_pool_.blockpool.md#private-getkey)
* [onProcessedBlock](_chain_blocks_pool_.blockpool.md#onprocessedblock)

## Constructors

###  constructor

\+ **new BlockPool**(`config`: IBeaconConfig, `blockProcessorSource`: Pushable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)›, `eventBus`: [ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter), `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)): *[BlockPool](_chain_blocks_pool_.blockpool.md)*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:16](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/blocks/pool.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`blockProcessorSource` | Pushable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)› |
`eventBus` | [ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter) |
`forkChoice` | [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md) |

**Returns:** *[BlockPool](_chain_blocks_pool_.blockpool.md)*

## Properties

### `Private` blockProcessorSource

• **blockProcessorSource**: *Pushable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)›*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:14](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/blocks/pool.ts#L14)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:13](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/blocks/pool.ts#L13)*

___

### `Private` eventBus

• **eventBus**: *[ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter)*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:15](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/blocks/pool.ts#L15)*

___

### `Private` forkChoice

• **forkChoice**: *[ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:16](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/blocks/pool.ts#L16)*

___

### `Private` pool

• **pool**: *Map‹string, [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)[]›* = new Map<string, IBlockProcessJob[]>()

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:11](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/blocks/pool.ts#L11)*

## Methods

###  addPendingBlock

▸ **addPendingBlock**(`job`: [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)): *void*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:28](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/blocks/pool.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`job` | [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md) |

**Returns:** *void*

___

### `Private` getKey

▸ **getKey**(`block`: SignedBeaconBlock): *string*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:54](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/blocks/pool.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *string*

___

###  onProcessedBlock

▸ **onProcessedBlock**(`block`: SignedBeaconBlock): *void*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:41](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar/src/chain/blocks/pool.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *void*
