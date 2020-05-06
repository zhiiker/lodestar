[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["tasks/tasks/archiveBlocks"](../modules/_tasks_tasks_archiveblocks_.md) › [ArchiveBlocksTask](_tasks_tasks_archiveblocks_.archiveblockstask.md)

# Class: ArchiveBlocksTask

Archives finalized blocks from active bucket to archive bucket.

## Hierarchy

* **ArchiveBlocksTask**

## Implements

* [ITask](../interfaces/_tasks_interface_.itask.md)

## Index

### Constructors

* [constructor](_tasks_tasks_archiveblocks_.archiveblockstask.md#constructor)

### Properties

* [config](_tasks_tasks_archiveblocks_.archiveblockstask.md#private-config)
* [db](_tasks_tasks_archiveblocks_.archiveblockstask.md#private-db)
* [finalizedCheckpoint](_tasks_tasks_archiveblocks_.archiveblockstask.md#private-finalizedcheckpoint)
* [logger](_tasks_tasks_archiveblocks_.archiveblockstask.md#private-logger)

### Methods

* [run](_tasks_tasks_archiveblocks_.archiveblockstask.md#run)

## Constructors

###  constructor

\+ **new ArchiveBlocksTask**(`config`: IBeaconConfig, `modules`: [IArchiveBlockModules](../interfaces/_tasks_tasks_archiveblocks_.iarchiveblockmodules.md), `finalizedCheckpoint`: Checkpoint): *[ArchiveBlocksTask](_tasks_tasks_archiveblocks_.archiveblockstask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/archiveBlocks.ts:26](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/tasks/tasks/archiveBlocks.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`modules` | [IArchiveBlockModules](../interfaces/_tasks_tasks_archiveblocks_.iarchiveblockmodules.md) |
`finalizedCheckpoint` | Checkpoint |

**Returns:** *[ArchiveBlocksTask](_tasks_tasks_archiveblocks_.archiveblockstask.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/tasks/tasks/archiveBlocks.ts:24](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/tasks/tasks/archiveBlocks.ts#L24)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/tasks/tasks/archiveBlocks.ts:22](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/tasks/tasks/archiveBlocks.ts#L22)*

___

### `Private` finalizedCheckpoint

• **finalizedCheckpoint**: *Checkpoint*

*Defined in [packages/lodestar/src/tasks/tasks/archiveBlocks.ts:26](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/tasks/tasks/archiveBlocks.ts#L26)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/tasks/tasks/archiveBlocks.ts:23](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/tasks/tasks/archiveBlocks.ts#L23)*

## Methods

###  run

▸ **run**(): *Promise‹void›*

*Implementation of [ITask](../interfaces/_tasks_interface_.itask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/archiveBlocks.ts:35](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/tasks/tasks/archiveBlocks.ts#L35)*

**Returns:** *Promise‹void›*
