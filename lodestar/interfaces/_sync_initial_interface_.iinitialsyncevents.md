[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/initial/interface"](../modules/_sync_initial_interface_.md) › [IInitialSyncEvents](_sync_initial_interface_.iinitialsyncevents.md)

# Interface: IInitialSyncEvents

## Hierarchy

* **IInitialSyncEvents**

## Index

### Properties

* [sync:checkpoint](_sync_initial_interface_.iinitialsyncevents.md#sync:checkpoint)
* [sync:completed](_sync_initial_interface_.iinitialsyncevents.md#sync:completed)

## Properties

###  sync:checkpoint

• **sync:checkpoint**: *function*

*Defined in [packages/lodestar/src/sync/initial/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/e2d6cf7/packages/lodestar/src/sync/initial/interface.ts#L23)*

#### Type declaration:

▸ (`epoch`: Epoch): *void*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

___

###  sync:completed

• **sync:completed**: *function*

*Defined in [packages/lodestar/src/sync/initial/interface.ts:24](https://github.com/ChainSafe/lodestar/blob/e2d6cf7/packages/lodestar/src/sync/initial/interface.ts#L24)*

#### Type declaration:

▸ (`target`: Checkpoint): *void*

**Parameters:**

Name | Type |
------ | ------ |
`target` | Checkpoint |
