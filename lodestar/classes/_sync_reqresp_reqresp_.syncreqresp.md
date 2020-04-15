[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/reqResp/reqResp"](../modules/_sync_reqresp_reqresp_.md) › [SyncReqResp](_sync_reqresp_reqresp_.syncreqresp.md)

# Class: SyncReqResp

The SyncReqResp module handles app-level requests / responses from other peers,
fetching state from the chain and database as needed.

## Hierarchy

* **SyncReqResp**

## Implements

* [ISyncReqResp](../interfaces/_sync_reqresp_interface_.isyncreqresp.md)

## Index

### Constructors

* [constructor](_sync_reqresp_reqresp_.syncreqresp.md#constructor)

### Properties

* [chain](_sync_reqresp_reqresp_.syncreqresp.md#private-chain)
* [config](_sync_reqresp_reqresp_.syncreqresp.md#private-config)
* [db](_sync_reqresp_reqresp_.syncreqresp.md#private-db)
* [logger](_sync_reqresp_reqresp_.syncreqresp.md#private-logger)
* [network](_sync_reqresp_reqresp_.syncreqresp.md#private-network)
* [opts](_sync_reqresp_reqresp_.syncreqresp.md#private-opts)
* [reps](_sync_reqresp_reqresp_.syncreqresp.md#private-reps)

### Methods

* [createStatus](_sync_reqresp_reqresp_.syncreqresp.md#private-createstatus)
* [handshake](_sync_reqresp_reqresp_.syncreqresp.md#private-handshake)
* [injectRecentBlocks](_sync_reqresp_reqresp_.syncreqresp.md#private-injectrecentblocks)
* [onBeaconBlocksByRange](_sync_reqresp_reqresp_.syncreqresp.md#onbeaconblocksbyrange)
* [onBeaconBlocksByRoot](_sync_reqresp_reqresp_.syncreqresp.md#onbeaconblocksbyroot)
* [onGoodbye](_sync_reqresp_reqresp_.syncreqresp.md#ongoodbye)
* [onRequest](_sync_reqresp_reqresp_.syncreqresp.md#onrequest)
* [onStatus](_sync_reqresp_reqresp_.syncreqresp.md#onstatus)
* [shouldDisconnectOnStatus](_sync_reqresp_reqresp_.syncreqresp.md#shoulddisconnectonstatus)
* [start](_sync_reqresp_reqresp_.syncreqresp.md#start)
* [stop](_sync_reqresp_reqresp_.syncreqresp.md#stop)

## Constructors

###  constructor

\+ **new SyncReqResp**(`opts`: [ISyncOptions](../interfaces/_sync_reqresp_interface_.isyncoptions.md), `__namedParameters`: object): *[SyncReqResp](_sync_reqresp_reqresp_.syncreqresp.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:54](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L54)*

**Parameters:**

▪ **opts**: *[ISyncOptions](../interfaces/_sync_reqresp_interface_.isyncoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)‹› |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |
`network` | [INetwork](../interfaces/_network_interface_.inetwork.md)‹› |
`reps` | [ReputationStore](_sync_ireputation_.reputationstore.md)‹› |

**Returns:** *[SyncReqResp](_sync_reqresp_reqresp_.syncreqresp.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:51](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L51)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:49](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L49)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:50](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L50)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:54](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L54)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:52](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L52)*

___

### `Private` opts

• **opts**: *[ISyncOptions](../interfaces/_sync_reqresp_interface_.isyncoptions.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:48](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L48)*

___

### `Private` reps

• **reps**: *[ReputationStore](_sync_ireputation_.reputationstore.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:53](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L53)*

## Methods

### `Private` createStatus

▸ **createStatus**(): *Promise‹Status›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:186](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L186)*

**Returns:** *Promise‹Status›*

___

### `Private` handshake

▸ **handshake**(`peerInfo`: PeerInfo): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:213](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *Promise‹void›*

___

### `Private` injectRecentBlocks

▸ **injectRecentBlocks**(`archiveStream`: AsyncIterable‹SignedBeaconBlock›, `blockDb`: [BlockRepository](_db_api_beacon_repositories_block_.blockrepository.md), `request`: BeaconBlocksByRangeRequest): *AsyncIterable‹SignedBeaconBlock›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:229](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L229)*

**Parameters:**

Name | Type |
------ | ------ |
`archiveStream` | AsyncIterable‹SignedBeaconBlock› |
`blockDb` | [BlockRepository](_db_api_beacon_repositories_block_.blockrepository.md) |
`request` | BeaconBlocksByRangeRequest |

**Returns:** *AsyncIterable‹SignedBeaconBlock›*

___

###  onBeaconBlocksByRange

▸ **onBeaconBlocksByRange**(`id`: [RequestId](../modules/_constants_network_.md#requestid), `request`: BeaconBlocksByRangeRequest): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:147](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`request` | BeaconBlocksByRangeRequest |

**Returns:** *Promise‹void›*

___

###  onBeaconBlocksByRoot

▸ **onBeaconBlocksByRoot**(`id`: [RequestId](../modules/_constants_network_.md#requestid), `request`: BeaconBlocksByRootRequest): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:164](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`request` | BeaconBlocksByRootRequest |

**Returns:** *Promise‹void›*

___

###  onGoodbye

▸ **onGoodbye**(`peerInfo`: PeerInfo, `id`: [RequestId](../modules/_constants_network_.md#requestid), `request`: [Goodbye](../enums/_constants_network_.method.md#goodbye)): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:142](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`request` | [Goodbye](../enums/_constants_network_.method.md#goodbye) |

**Returns:** *Promise‹void›*

___

###  onRequest

▸ **onRequest**(`peerInfo`: PeerInfo, `method`: [Method](../enums/_constants_network_.method.md), `id`: [RequestId](../modules/_constants_network_.md#requestid), `body`: RequestBody): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:83](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`method` | [Method](../enums/_constants_network_.method.md) |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`body` | RequestBody |

**Returns:** *Promise‹void›*

___

###  onStatus

▸ **onStatus**(`peerInfo`: PeerInfo, `id`: [RequestId](../modules/_constants_network_.md#requestid), `request`: Status): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:103](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`request` | Status |

**Returns:** *Promise‹void›*

___

###  shouldDisconnectOnStatus

▸ **shouldDisconnectOnStatus**(`request`: Status): *Promise‹boolean›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:118](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | Status |

**Returns:** *Promise‹boolean›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:66](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L66)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:75](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/sync/reqResp/reqResp.ts#L75)*

**Returns:** *Promise‹void›*
