[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["metrics/interface"](../modules/_metrics_interface_.md) › [IBeaconMetrics](_metrics_interface_.ibeaconmetrics.md)

# Interface: IBeaconMetrics

## Hierarchy

* [IMetrics](_metrics_interface_.imetrics.md)

  ↳ **IBeaconMetrics**

## Implemented by

* [BeaconMetrics](../classes/_metrics_beacon_.beaconmetrics.md)

## Index

### Properties

* [currentEpochLiveValidators](_metrics_interface_.ibeaconmetrics.md#currentepochlivevalidators)
* [currentFinalizedEpoch](_metrics_interface_.ibeaconmetrics.md#currentfinalizedepoch)
* [currentJustifiedEpoch](_metrics_interface_.ibeaconmetrics.md#currentjustifiedepoch)
* [currentSlot](_metrics_interface_.ibeaconmetrics.md#currentslot)
* [peers](_metrics_interface_.ibeaconmetrics.md#peers)
* [pendingDeposits](_metrics_interface_.ibeaconmetrics.md#pendingdeposits)
* [pendingExits](_metrics_interface_.ibeaconmetrics.md#pendingexits)
* [previousEpochLiveValidators](_metrics_interface_.ibeaconmetrics.md#previousepochlivevalidators)
* [previousEpochStaleBlocks](_metrics_interface_.ibeaconmetrics.md#previousepochstaleblocks)
* [previousJustifiedEpoch](_metrics_interface_.ibeaconmetrics.md#previousjustifiedepoch)
* [propagatedAttestations](_metrics_interface_.ibeaconmetrics.md#propagatedattestations)
* [registry](_metrics_interface_.ibeaconmetrics.md#registry)
* [reorgEventsTotal](_metrics_interface_.ibeaconmetrics.md#reorgeventstotal)
* [totalDeposits](_metrics_interface_.ibeaconmetrics.md#totaldeposits)

## Properties

###  currentEpochLiveValidators

• **currentEpochLiveValidators**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:17](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L17)*

___

###  currentFinalizedEpoch

• **currentFinalizedEpoch**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:15](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L15)*

___

###  currentJustifiedEpoch

• **currentJustifiedEpoch**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:14](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L14)*

___

###  currentSlot

• **currentSlot**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:12](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L12)*

___

###  peers

• **peers**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:11](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L11)*

___

###  pendingDeposits

• **pendingDeposits**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:19](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L19)*

___

###  pendingExits

• **pendingExits**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:20](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L20)*

___

###  previousEpochLiveValidators

• **previousEpochLiveValidators**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:16](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L16)*

___

###  previousEpochStaleBlocks

• **previousEpochStaleBlocks**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:22](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L22)*

___

###  previousJustifiedEpoch

• **previousJustifiedEpoch**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:13](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L13)*

___

###  propagatedAttestations

• **propagatedAttestations**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L23)*

___

###  registry

• **registry**: *Registry*

*Inherited from [IMetrics](_metrics_interface_.imetrics.md).[registry](_metrics_interface_.imetrics.md#registry)*

*Defined in [packages/lodestar/src/metrics/interface.ts:7](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L7)*

___

###  reorgEventsTotal

• **reorgEventsTotal**: *Counter*

*Defined in [packages/lodestar/src/metrics/interface.ts:18](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L18)*

___

###  totalDeposits

• **totalDeposits**: *Gauge*

*Defined in [packages/lodestar/src/metrics/interface.ts:21](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/metrics/interface.ts#L21)*
