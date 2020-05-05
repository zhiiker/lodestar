[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/interface"](../modules/_sync_interface_.md) › [ISyncModules](_sync_interface_.isyncmodules.md)

# Interface: ISyncModules

## Hierarchy

* **ISyncModules**

## Index

### Properties

* [attestationCollector](_sync_interface_.isyncmodules.md#optional-attestationcollector)
* [chain](_sync_interface_.isyncmodules.md#chain)
* [config](_sync_interface_.isyncmodules.md#config)
* [db](_sync_interface_.isyncmodules.md#db)
* [gossipHandler](_sync_interface_.isyncmodules.md#optional-gossiphandler)
* [initialSync](_sync_interface_.isyncmodules.md#optional-initialsync)
* [logger](_sync_interface_.isyncmodules.md#logger)
* [network](_sync_interface_.isyncmodules.md#network)
* [regularSync](_sync_interface_.isyncmodules.md#optional-regularsync)
* [reputationStore](_sync_interface_.isyncmodules.md#reputationstore)
* [reqRespHandler](_sync_interface_.isyncmodules.md#optional-reqresphandler)

## Properties

### `Optional` attestationCollector

• **attestationCollector**? : *[AttestationCollector](../classes/_sync_utils_attestation_collector_.attestationcollector.md)*

*Defined in [packages/lodestar/src/sync/interface.ts:41](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L41)*

___

###  chain

• **chain**: *[IBeaconChain](_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/interface.ts:36](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L36)*

___

###  config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/interface.ts:31](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L31)*

___

###  db

• **db**: *[IBeaconDb](_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/sync/interface.ts:33](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L33)*

___

### `Optional` gossipHandler

• **gossipHandler**? : *[IGossipHandler](../modules/_sync_gossip_interface_.md#igossiphandler)*

*Defined in [packages/lodestar/src/sync/interface.ts:40](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L40)*

___

### `Optional` initialSync

• **initialSync**? : *[InitialSync](../modules/_sync_initial_interface_.md#initialsync)*

*Defined in [packages/lodestar/src/sync/interface.ts:37](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L37)*

___

###  logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/interface.ts:35](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L35)*

___

###  network

• **network**: *[INetwork](_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/interface.ts:32](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L32)*

___

### `Optional` regularSync

• **regularSync**? : *[IRegularSync](../modules/_sync_regular_interface_.md#iregularsync)*

*Defined in [packages/lodestar/src/sync/interface.ts:38](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L38)*

___

###  reputationStore

• **reputationStore**: *[IReputationStore](_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/interface.ts:34](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L34)*

___

### `Optional` reqRespHandler

• **reqRespHandler**? : *[IReqRespHandler](_sync_reqresp_interface_.ireqresphandler.md)*

*Defined in [packages/lodestar/src/sync/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar/src/sync/interface.ts#L39)*
