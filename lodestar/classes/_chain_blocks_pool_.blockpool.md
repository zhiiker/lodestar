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
* [pool](_chain_blocks_pool_.blockpool.md#private-pool)

### Methods

* [addPendingBlock](_chain_blocks_pool_.blockpool.md#addpendingblock)
* [getKey](_chain_blocks_pool_.blockpool.md#private-getkey)
* [onProcessedBlock](_chain_blocks_pool_.blockpool.md#onprocessedblock)

## Constructors

###  constructor

\+ **new BlockPool**(`config`: IBeaconConfig, `blockProcessorSource`: Pushable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)›, `eventBus`: [ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter)): *[BlockPool](_chain_blocks_pool_.blockpool.md)*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:14](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/blocks/pool.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`blockProcessorSource` | Pushable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)› |
`eventBus` | [ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter) |

**Returns:** *[BlockPool](_chain_blocks_pool_.blockpool.md)*

## Properties

### `Private` blockProcessorSource

• **blockProcessorSource**: *Pushable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)›*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:13](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/blocks/pool.ts#L13)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:12](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/blocks/pool.ts#L12)*

___

### `Private` eventBus

• **eventBus**: *[ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter)*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:14](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/blocks/pool.ts#L14)*

___

### `Private` pool

• **pool**: *Map‹string, [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)[]›* = new Map<string, IBlockProcessJob[]>()

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:10](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/blocks/pool.ts#L10)*

## Methods

###  addPendingBlock

▸ **addPendingBlock**(`job`: [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)): *void*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:22](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/blocks/pool.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`job` | [IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md) |

**Returns:** *void*

___

### `Private` getKey

▸ **getKey**(`block`: SignedBeaconBlock): *string*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:45](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/blocks/pool.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *string*

___

###  onProcessedBlock

▸ **onProcessedBlock**(`block`: SignedBeaconBlock): *void*

*Defined in [packages/lodestar/src/chain/blocks/pool.ts:32](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/blocks/pool.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *void*
