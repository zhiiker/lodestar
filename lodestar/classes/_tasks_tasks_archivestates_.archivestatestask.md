[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["tasks/tasks/archiveStates"](../modules/_tasks_tasks_archivestates_.md) › [ArchiveStatesTask](_tasks_tasks_archivestates_.archivestatestask.md)

# Class: ArchiveStatesTask

Archives finalized states from active bucket to archive bucket.

Only the new finalized state is stored to disk

## Hierarchy

* **ArchiveStatesTask**

## Implements

* [ITask](../interfaces/_tasks_interface_.itask.md)

## Index

### Constructors

* [constructor](_tasks_tasks_archivestates_.archivestatestask.md#constructor)

### Properties

* [config](_tasks_tasks_archivestates_.archivestatestask.md#private-config)
* [db](_tasks_tasks_archivestates_.archivestatestask.md#private-db)
* [finalizedCheckpoint](_tasks_tasks_archivestates_.archivestatestask.md#private-finalizedcheckpoint)
* [logger](_tasks_tasks_archivestates_.archivestatestask.md#private-logger)

### Methods

* [run](_tasks_tasks_archivestates_.archivestatestask.md#run)

## Constructors

###  constructor

\+ **new ArchiveStatesTask**(`config`: IBeaconConfig, `modules`: [IArchiveStatesModules](../interfaces/_tasks_tasks_archivestates_.iarchivestatesmodules.md), `finalizedCheckpoint`: Checkpoint): *[ArchiveStatesTask](_tasks_tasks_archivestates_.archivestatestask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/archiveStates.ts:28](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/archiveStates.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`modules` | [IArchiveStatesModules](../interfaces/_tasks_tasks_archivestates_.iarchivestatesmodules.md) |
`finalizedCheckpoint` | Checkpoint |

**Returns:** *[ArchiveStatesTask](_tasks_tasks_archivestates_.archivestatestask.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/tasks/tasks/archiveStates.ts:26](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/archiveStates.ts#L26)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/tasks/tasks/archiveStates.ts:24](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/archiveStates.ts#L24)*

___

### `Private` finalizedCheckpoint

• **finalizedCheckpoint**: *Checkpoint*

*Defined in [packages/lodestar/src/tasks/tasks/archiveStates.ts:28](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/archiveStates.ts#L28)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/tasks/tasks/archiveStates.ts:25](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/archiveStates.ts#L25)*

## Methods

###  run

▸ **run**(): *Promise‹void›*

*Implementation of [ITask](../interfaces/_tasks_interface_.itask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/archiveStates.ts:37](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/archiveStates.ts#L37)*

**Returns:** *Promise‹void›*
