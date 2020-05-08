[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["node/nodejs"](../modules/_node_nodejs_.md) › [IService](_node_nodejs_.iservice.md)

# Interface: IService

## Hierarchy

* **IService**

  ↳ [IGossip](_network_gossip_interface_.igossip.md)

  ↳ [IBeaconSync](_sync_interface_.ibeaconsync.md)

  ↳ [IBeaconClock](_chain_clock_interface_.ibeaconclock.md)

## Implemented by

* [ApiService](../classes/_api_index_.apiservice.md)
* [AttestationCollector](../classes/_sync_utils_attestation_collector_.attestationcollector.md)
* [BeaconDb](../classes/_db_api_beacon_beacon_.beacondb.md)
* [BeaconGossipHandler](../classes/_sync_gossip_handler_.beacongossiphandler.md)
* [BlockProcessor](../classes/_chain_blocks_processor_.blockprocessor.md)
* [DatabaseService](../classes/_db_api_abstract_.databaseservice.md)
* [RestApi](../classes/_api_rest_index_.restapi.md)
* [TasksService](../classes/_tasks_index_.tasksservice.md)
* [ValidatorClient](../classes/_validator_nodejs_.validatorclient.md)
* [ValidatorDB](../classes/_db_api_validator_validator_.validatordb.md)

## Index

### Methods

* [start](_node_nodejs_.iservice.md#start)
* [stop](_node_nodejs_.iservice.md#stop)

## Methods

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/node/nodejs.ts:25](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar/src/node/nodejs.ts#L25)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/node/nodejs.ts:27](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar/src/node/nodejs.ts#L27)*

**Returns:** *Promise‹void›*
