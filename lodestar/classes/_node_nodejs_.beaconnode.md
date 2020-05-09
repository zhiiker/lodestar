[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["node/nodejs"](../modules/_node_nodejs_.md) › [BeaconNode](_node_nodejs_.beaconnode.md)

# Class: BeaconNode

Beacon Node configured for desktop (non-browser) use

## Hierarchy

* **BeaconNode**

## Index

### Constructors

* [constructor](_node_nodejs_.beaconnode.md#constructor)

### Properties

* [api](_node_nodejs_.beaconnode.md#api)
* [chain](_node_nodejs_.beaconnode.md#chain)
* [chores](_node_nodejs_.beaconnode.md#chores)
* [conf](_node_nodejs_.beaconnode.md#conf)
* [config](_node_nodejs_.beaconnode.md#config)
* [db](_node_nodejs_.beaconnode.md#db)
* [eth1](_node_nodejs_.beaconnode.md#eth1)
* [logger](_node_nodejs_.beaconnode.md#private-logger)
* [metrics](_node_nodejs_.beaconnode.md#metrics)
* [metricsServer](_node_nodejs_.beaconnode.md#metricsserver)
* [network](_node_nodejs_.beaconnode.md#network)
* [reps](_node_nodejs_.beaconnode.md#reps)
* [sync](_node_nodejs_.beaconnode.md#sync)

### Methods

* [start](_node_nodejs_.beaconnode.md#start)
* [stop](_node_nodejs_.beaconnode.md#stop)

## Constructors

###  constructor

\+ **new BeaconNode**(`opts`: Partial‹[IBeaconNodeOptions](../interfaces/_node_options_.ibeaconnodeoptions.md)›, `__namedParameters`: object): *[BeaconNode](_node_nodejs_.beaconnode.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:55](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L55)*

**Parameters:**

▪ **opts**: *Partial‹[IBeaconNodeOptions](../interfaces/_node_options_.ibeaconnodeoptions.md)›*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`eth1` | [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)‹› |
`libp2p` | LibP2p‹› |
`logger` | ILogger |

**Returns:** *[BeaconNode](_node_nodejs_.beaconnode.md)*

## Properties

###  api

• **api**: *[IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:50](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L50)*

___

###  chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:49](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L49)*

___

###  chores

• **chores**: *[TasksService](_tasks_index_.tasksservice.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:53](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L53)*

___

###  conf

• **conf**: *[IBeaconNodeOptions](../interfaces/_node_options_.ibeaconnodeoptions.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:42](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L42)*

___

###  config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/node/nodejs.ts:43](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L43)*

___

###  db

• **db**: *[BeaconDb](_db_api_beacon_beacon_.beacondb.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:44](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L44)*

___

###  eth1

• **eth1**: *[IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:47](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L47)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/node/nodejs.ts:55](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L55)*

___

###  metrics

• **metrics**: *[BeaconMetrics](_metrics_beacon_.beaconmetrics.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:45](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L45)*

___

###  metricsServer

• **metricsServer**: *[HttpMetricsServer](_metrics_server_http_.httpmetricsserver.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:46](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L46)*

___

###  network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:48](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L48)*

___

###  reps

• **reps**: *[ReputationStore](_sync_ireputation_.reputationstore.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:52](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L52)*

___

###  sync

• **sync**: *[IBeaconSync](../interfaces/_sync_interface_.ibeaconsync.md)*

*Defined in [packages/lodestar/src/node/nodejs.ts:51](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L51)*

## Methods

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/node/nodejs.ts:140](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L140)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/node/nodejs.ts:156](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/node/nodejs.ts#L156)*

**Returns:** *Promise‹void›*
