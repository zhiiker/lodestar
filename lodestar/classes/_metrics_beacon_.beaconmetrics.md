[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["metrics/beacon"](../modules/_metrics_beacon_.md) › [BeaconMetrics](_metrics_beacon_.beaconmetrics.md)

# Class: BeaconMetrics

## Hierarchy

* [Metrics](_metrics_metrics_.metrics.md)

  ↳ **BeaconMetrics**

## Implements

* [IMetrics](../interfaces/_metrics_interface_.imetrics.md)
* [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md)

## Index

### Constructors

* [constructor](_metrics_beacon_.beaconmetrics.md#constructor)

### Properties

* [currentEpochLiveValidators](_metrics_beacon_.beaconmetrics.md#currentepochlivevalidators)
* [currentFinalizedEpoch](_metrics_beacon_.beaconmetrics.md#currentfinalizedepoch)
* [currentJustifiedEpoch](_metrics_beacon_.beaconmetrics.md#currentjustifiedepoch)
* [currentSlot](_metrics_beacon_.beaconmetrics.md#currentslot)
* [logger](_metrics_beacon_.beaconmetrics.md#private-logger)
* [peers](_metrics_beacon_.beaconmetrics.md#peers)
* [pendingDeposits](_metrics_beacon_.beaconmetrics.md#pendingdeposits)
* [pendingExits](_metrics_beacon_.beaconmetrics.md#pendingexits)
* [previousEpochLiveValidators](_metrics_beacon_.beaconmetrics.md#previousepochlivevalidators)
* [previousEpochStaleBlocks](_metrics_beacon_.beaconmetrics.md#previousepochstaleblocks)
* [previousJustifiedEpoch](_metrics_beacon_.beaconmetrics.md#previousjustifiedepoch)
* [propagatedAttestations](_metrics_beacon_.beaconmetrics.md#propagatedattestations)
* [registry](_metrics_beacon_.beaconmetrics.md#registry)
* [reorgEventsTotal](_metrics_beacon_.beaconmetrics.md#reorgeventstotal)
* [totalDeposits](_metrics_beacon_.beaconmetrics.md#totaldeposits)

### Methods

* [start](_metrics_beacon_.beaconmetrics.md#start)
* [stop](_metrics_beacon_.beaconmetrics.md#stop)

## Constructors

###  constructor

\+ **new BeaconMetrics**(`opts`: [IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md), `__namedParameters`: object): *[BeaconMetrics](_metrics_beacon_.beaconmetrics.md)*

*Overrides [Metrics](_metrics_metrics_.metrics.md).[constructor](_metrics_metrics_.metrics.md#constructor)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:27](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L27)*

**Parameters:**

▪ **opts**: *[IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`logger` | ILogger |

**Returns:** *[BeaconMetrics](_metrics_beacon_.beaconmetrics.md)*

## Properties

###  currentEpochLiveValidators

• **currentEpochLiveValidators**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[currentEpochLiveValidators](../interfaces/_metrics_interface_.ibeaconmetrics.md#currentepochlivevalidators)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:19](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L19)*

___

###  currentFinalizedEpoch

• **currentFinalizedEpoch**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[currentFinalizedEpoch](../interfaces/_metrics_interface_.ibeaconmetrics.md#currentfinalizedepoch)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:17](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L17)*

___

###  currentJustifiedEpoch

• **currentJustifiedEpoch**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[currentJustifiedEpoch](../interfaces/_metrics_interface_.ibeaconmetrics.md#currentjustifiedepoch)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:16](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L16)*

___

###  currentSlot

• **currentSlot**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[currentSlot](../interfaces/_metrics_interface_.ibeaconmetrics.md#currentslot)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:14](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L14)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/metrics/beacon.ts:27](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L27)*

___

###  peers

• **peers**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[peers](../interfaces/_metrics_interface_.ibeaconmetrics.md#peers)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:13](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L13)*

___

###  pendingDeposits

• **pendingDeposits**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[pendingDeposits](../interfaces/_metrics_interface_.ibeaconmetrics.md#pendingdeposits)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:21](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L21)*

___

###  pendingExits

• **pendingExits**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[pendingExits](../interfaces/_metrics_interface_.ibeaconmetrics.md#pendingexits)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:22](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L22)*

___

###  previousEpochLiveValidators

• **previousEpochLiveValidators**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[previousEpochLiveValidators](../interfaces/_metrics_interface_.ibeaconmetrics.md#previousepochlivevalidators)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:18](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L18)*

___

###  previousEpochStaleBlocks

• **previousEpochStaleBlocks**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[previousEpochStaleBlocks](../interfaces/_metrics_interface_.ibeaconmetrics.md#previousepochstaleblocks)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:24](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L24)*

___

###  previousJustifiedEpoch

• **previousJustifiedEpoch**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[previousJustifiedEpoch](../interfaces/_metrics_interface_.ibeaconmetrics.md#previousjustifiedepoch)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:15](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L15)*

___

###  propagatedAttestations

• **propagatedAttestations**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[propagatedAttestations](../interfaces/_metrics_interface_.ibeaconmetrics.md#propagatedattestations)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:25](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L25)*

___

###  registry

• **registry**: *Registry*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[registry](../interfaces/_metrics_interface_.ibeaconmetrics.md#registry)*

*Inherited from [Metrics](_metrics_metrics_.metrics.md).[registry](_metrics_metrics_.metrics.md#registry)*

*Defined in [packages/lodestar/src/metrics/metrics.ts:11](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/metrics.ts#L11)*

___

###  reorgEventsTotal

• **reorgEventsTotal**: *Counter*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[reorgEventsTotal](../interfaces/_metrics_interface_.ibeaconmetrics.md#reorgeventstotal)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:20](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L20)*

___

###  totalDeposits

• **totalDeposits**: *Gauge*

*Implementation of [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md).[totalDeposits](../interfaces/_metrics_interface_.ibeaconmetrics.md#totaldeposits)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:23](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L23)*

## Methods

###  start

▸ **start**(): *Promise‹void›*

*Overrides [Metrics](_metrics_metrics_.metrics.md).[start](_metrics_metrics_.metrics.md#start)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:100](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L100)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Overrides [Metrics](_metrics_metrics_.metrics.md).[stop](_metrics_metrics_.metrics.md#stop)*

*Defined in [packages/lodestar/src/metrics/beacon.ts:104](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/metrics/beacon.ts#L104)*

**Returns:** *Promise‹void›*
