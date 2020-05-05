[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/clock/interface"](../modules/_chain_clock_interface_.md) › [IBeaconClock](_chain_clock_interface_.ibeaconclock.md)

# Interface: IBeaconClock

## Hierarchy

* [IService](_node_nodejs_.iservice.md)

  ↳ **IBeaconClock**

## Implemented by

* [LocalClock](../classes/_chain_clock_local_localclock_.localclock.md)

## Index

### Methods

* [getCurrentSlot](_chain_clock_interface_.ibeaconclock.md#getcurrentslot)
* [onNewEpoch](_chain_clock_interface_.ibeaconclock.md#onnewepoch)
* [onNewSlot](_chain_clock_interface_.ibeaconclock.md#onnewslot)
* [start](_chain_clock_interface_.ibeaconclock.md#start)
* [stop](_chain_clock_interface_.ibeaconclock.md#stop)
* [unsubscribeFromNewEpoch](_chain_clock_interface_.ibeaconclock.md#unsubscribefromnewepoch)
* [unsubscribeFromNewSlot](_chain_clock_interface_.ibeaconclock.md#unsubscribefromnewslot)

## Methods

###  getCurrentSlot

▸ **getCurrentSlot**(): *Slot*

*Defined in [packages/lodestar/src/chain/clock/interface.ts:8](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/clock/interface.ts#L8)*

**Returns:** *Slot*

___

###  onNewEpoch

▸ **onNewEpoch**(`cb`: [NewEpochCallback](../modules/_chain_clock_interface_.md#newepochcallback)): *void*

*Defined in [packages/lodestar/src/chain/clock/interface.ts:10](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/clock/interface.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NewEpochCallback](../modules/_chain_clock_interface_.md#newepochcallback) |

**Returns:** *void*

___

###  onNewSlot

▸ **onNewSlot**(`cb`: [NewSlotCallback](../modules/_chain_clock_interface_.md#newslotcallback)): *void*

*Defined in [packages/lodestar/src/chain/clock/interface.ts:9](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/clock/interface.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NewSlotCallback](../modules/_chain_clock_interface_.md#newslotcallback) |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[start](_network_gossip_interface_.igossip.md#start)*

*Defined in [packages/lodestar/src/node/nodejs.ts:25](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/node/nodejs.ts#L25)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[stop](_network_gossip_interface_.igossip.md#stop)*

*Defined in [packages/lodestar/src/node/nodejs.ts:27](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/node/nodejs.ts#L27)*

**Returns:** *Promise‹void›*

___

###  unsubscribeFromNewEpoch

▸ **unsubscribeFromNewEpoch**(`cb`: [NewEpochCallback](../modules/_chain_clock_interface_.md#newepochcallback)): *void*

*Defined in [packages/lodestar/src/chain/clock/interface.ts:11](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/clock/interface.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NewEpochCallback](../modules/_chain_clock_interface_.md#newepochcallback) |

**Returns:** *void*

___

###  unsubscribeFromNewSlot

▸ **unsubscribeFromNewSlot**(`cb`: [NewSlotCallback](../modules/_chain_clock_interface_.md#newslotcallback)): *void*

*Defined in [packages/lodestar/src/chain/clock/interface.ts:12](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/clock/interface.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`cb` | [NewSlotCallback](../modules/_chain_clock_interface_.md#newslotcallback) |

**Returns:** *void*
