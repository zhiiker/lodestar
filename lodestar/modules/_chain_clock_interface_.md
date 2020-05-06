[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/clock/interface"](_chain_clock_interface_.md)

# External module: "chain/clock/interface"

## Index

### Interfaces

* [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)

### Type aliases

* [NewEpochCallback](_chain_clock_interface_.md#newepochcallback)
* [NewSlotCallback](_chain_clock_interface_.md#newslotcallback)

## Type aliases

###  NewEpochCallback

Ƭ **NewEpochCallback**: *function*

*Defined in [packages/lodestar/src/chain/clock/interface.ts:5](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/clock/interface.ts#L5)*

#### Type declaration:

▸ (`epoch`: Epoch): *void*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

___

###  NewSlotCallback

Ƭ **NewSlotCallback**: *function*

*Defined in [packages/lodestar/src/chain/clock/interface.ts:4](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/chain/clock/interface.ts#L4)*

#### Type declaration:

▸ (`slot`: Slot): *void*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
