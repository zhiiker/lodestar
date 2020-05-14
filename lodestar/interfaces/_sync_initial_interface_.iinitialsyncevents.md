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

*Defined in [packages/lodestar/src/sync/initial/interface.ts:21](https://github.com/ChainSafe/lodestar/blob/77c37bfb8/packages/lodestar/src/sync/initial/interface.ts#L21)*

#### Type declaration:

▸ (`epoch`: Epoch): *void*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

___

###  sync:completed

• **sync:completed**: *function*

*Defined in [packages/lodestar/src/sync/initial/interface.ts:22](https://github.com/ChainSafe/lodestar/blob/77c37bfb8/packages/lodestar/src/sync/initial/interface.ts#L22)*

#### Type declaration:

▸ (`target`: Checkpoint): *void*

**Parameters:**

Name | Type |
------ | ------ |
`target` | Checkpoint |
