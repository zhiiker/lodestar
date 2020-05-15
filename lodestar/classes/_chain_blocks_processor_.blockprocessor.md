[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/blocks/processor"](../modules/_chain_blocks_processor_.md) › [BlockProcessor](_chain_blocks_processor_.blockprocessor.md)

# Class: BlockProcessor

## Hierarchy

* **BlockProcessor**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md)

## Index

### Constructors

* [constructor](_chain_blocks_processor_.blockprocessor.md#constructor)

### Properties

* [attestationProcessor](_chain_blocks_processor_.blockprocessor.md#private-attestationprocessor)
* [blockProcessingSource](_chain_blocks_processor_.blockprocessor.md#private-blockprocessingsource)
* [config](_chain_blocks_processor_.blockprocessor.md#private-config)
* [controller](_chain_blocks_processor_.blockprocessor.md#private-controller)
* [db](_chain_blocks_processor_.blockprocessor.md#private-db)
* [eventBus](_chain_blocks_processor_.blockprocessor.md#private-eventbus)
* [forkChoice](_chain_blocks_processor_.blockprocessor.md#private-forkchoice)
* [logger](_chain_blocks_processor_.blockprocessor.md#private-logger)
* [metrics](_chain_blocks_processor_.blockprocessor.md#private-metrics)
* [pendingBlocks](_chain_blocks_processor_.blockprocessor.md#private-pendingblocks)

### Methods

* [receiveBlock](_chain_blocks_processor_.blockprocessor.md#receiveblock)
* [start](_chain_blocks_processor_.blockprocessor.md#start)
* [stop](_chain_blocks_processor_.blockprocessor.md#stop)

## Constructors

###  constructor

\+ **new BlockProcessor**(`config`: IBeaconConfig, `logger`: ILogger, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md), `metrics`: [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md), `eventBus`: [ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter), `attestationProcessor`: [IAttestationProcessor](../interfaces/_chain_interface_.iattestationprocessor.md)): *[BlockProcessor](_chain_blocks_processor_.blockprocessor.md)*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:36](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`logger` | ILogger |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`forkChoice` | [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md) |
`metrics` | [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md) |
`eventBus` | [ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter) |
`attestationProcessor` | [IAttestationProcessor](../interfaces/_chain_interface_.iattestationprocessor.md) |

**Returns:** *[BlockProcessor](_chain_blocks_processor_.blockprocessor.md)*

## Properties

### `Private` attestationProcessor

• **attestationProcessor**: *[IAttestationProcessor](../interfaces/_chain_interface_.iattestationprocessor.md)*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:27](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L27)*

___

### `Private` blockProcessingSource

• **blockProcessingSource**: *Pushable‹[IBlockProcessJob](../interfaces/_chain_chain_.iblockprocessjob.md)›* = pushable<IBlockProcessJob>()

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:34](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L34)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:21](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L21)*

___

### `Private` controller

• **controller**: *AbortController* = new AbortController()

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:36](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L36)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:23](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L23)*

___

### `Private` eventBus

• **eventBus**: *[ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter)*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:26](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L26)*

___

### `Private` forkChoice

• **forkChoice**: *[ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:24](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L24)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:22](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L22)*

___

### `Private` metrics

• **metrics**: *[IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md)*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:25](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L25)*

___

### `Private` pendingBlocks

• **pendingBlocks**: *[BlockPool](_chain_blocks_pool_.blockpool.md)*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:32](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L32)*

map where key is required parent block root and value are blocks that require that parent block

## Methods

###  receiveBlock

▸ **receiveBlock**(`block`: SignedBeaconBlock, `trusted`: boolean): *void*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:92](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L92)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`block` | SignedBeaconBlock | - |
`trusted` | boolean | false |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:57](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L57)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/chain/blocks/processor.ts:88](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/chain/blocks/processor.ts#L88)*

**Returns:** *Promise‹void›*
