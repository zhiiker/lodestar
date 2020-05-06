[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["node/options"](_node_options_.md)

# External module: "node/options"

## Index

### Interfaces

* [IBeaconNodeOptions](../interfaces/_node_options_.ibeaconnodeoptions.md)

### Object literals

* [config](_node_options_.md#const-config)

## Object literals

### `Const` config

### ▪ **config**: *object*

*Defined in [packages/lodestar/src/node/options.ts:25](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/node/options.ts#L25)*

###  api

• **api**: *object* = defaultApiOptions

*Defined in [packages/lodestar/src/node/options.ts:28](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/node/options.ts#L28)*

#### Type declaration:

* **rest**(): *object*

  * **api**: *[ApiNamespace](../enums/_api_index_.apinamespace.md)[]* = [ApiNamespace.BEACON, ApiNamespace.VALIDATOR]

  * **cors**: *string* = "*"

  * **enabled**: *boolean* = false

  * **host**: *string* = "127.0.0.1"

  * **port**: *number* = 9596

###  chain

• **chain**: *[IChainOptions](../interfaces/_chain_options_.ichainoptions.md)* = defaultChainOptions

*Defined in [packages/lodestar/src/node/options.ts:26](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/node/options.ts#L26)*

###  db

• **db**: *[IDatabaseOptions](../interfaces/_db_options_.idatabaseoptions.md)* = defaultDatabaseOptions

*Defined in [packages/lodestar/src/node/options.ts:27](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/node/options.ts#L27)*

###  eth1

• **eth1**: *[IEth1Options](../interfaces/_eth1_options_.ieth1options.md)* = defaultEth1Options

*Defined in [packages/lodestar/src/node/options.ts:29](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/node/options.ts#L29)*

###  logger

• **logger**: *[IBeaconLoggerOptions](../interfaces/_node_loggeroptions_.ibeaconloggeroptions.md)* = defaultLoggerOptions

*Defined in [packages/lodestar/src/node/options.ts:32](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/node/options.ts#L32)*

###  metrics

• **metrics**: *[IMetricsOptions](../interfaces/_metrics_options_.imetricsoptions.md)* = defaultMetricsOptions

*Defined in [packages/lodestar/src/node/options.ts:33](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/node/options.ts#L33)*

###  network

• **network**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)* = defaultNetworkOptions

*Defined in [packages/lodestar/src/node/options.ts:30](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/node/options.ts#L30)*

###  sync

• **sync**: *[ISyncOptions](../interfaces/_sync_options_.isyncoptions.md)* = defaultSyncOptions

*Defined in [packages/lodestar/src/node/options.ts:31](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar/src/node/options.ts#L31)*
