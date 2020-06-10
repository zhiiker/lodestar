[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/reqResp/reqResp"](../modules/_sync_reqresp_reqresp_.md) › [BeaconReqRespHandler](_sync_reqresp_reqresp_.beaconreqresphandler.md)

# Class: BeaconReqRespHandler

The BeaconReqRespHandler module handles app-level requests / responses from other peers,
fetching state from the chain and database as needed.

## Hierarchy

* **BeaconReqRespHandler**

## Implements

* [IReqRespHandler](../interfaces/_sync_reqresp_interface_.ireqresphandler.md)

## Index

### Constructors

* [constructor](_sync_reqresp_reqresp_.beaconreqresphandler.md#constructor)

### Properties

* [chain](_sync_reqresp_reqresp_.beaconreqresphandler.md#private-chain)
* [config](_sync_reqresp_reqresp_.beaconreqresphandler.md#private-config)
* [db](_sync_reqresp_reqresp_.beaconreqresphandler.md#private-db)
* [logger](_sync_reqresp_reqresp_.beaconreqresphandler.md#private-logger)
* [network](_sync_reqresp_reqresp_.beaconreqresphandler.md#private-network)
* [reps](_sync_reqresp_reqresp_.beaconreqresphandler.md#private-reps)

### Methods

* [createStatus](_sync_reqresp_reqresp_.beaconreqresphandler.md#private-createstatus)
* [handshake](_sync_reqresp_reqresp_.beaconreqresphandler.md#private-handshake)
* [injectRecentBlocks](_sync_reqresp_reqresp_.beaconreqresphandler.md#private-injectrecentblocks)
* [onBeaconBlocksByRange](_sync_reqresp_reqresp_.beaconreqresphandler.md#onbeaconblocksbyrange)
* [onBeaconBlocksByRoot](_sync_reqresp_reqresp_.beaconreqresphandler.md#onbeaconblocksbyroot)
* [onGoodbye](_sync_reqresp_reqresp_.beaconreqresphandler.md#ongoodbye)
* [onMetadata](_sync_reqresp_reqresp_.beaconreqresphandler.md#onmetadata)
* [onPing](_sync_reqresp_reqresp_.beaconreqresphandler.md#onping)
* [onRequest](_sync_reqresp_reqresp_.beaconreqresphandler.md#onrequest)
* [onStatus](_sync_reqresp_reqresp_.beaconreqresphandler.md#onstatus)
* [shouldDisconnectOnStatus](_sync_reqresp_reqresp_.beaconreqresphandler.md#shoulddisconnectonstatus)
* [start](_sync_reqresp_reqresp_.beaconreqresphandler.md#start)
* [stop](_sync_reqresp_reqresp_.beaconreqresphandler.md#stop)

## Constructors

###  constructor

\+ **new BeaconReqRespHandler**(`__namedParameters`: object): *[BeaconReqRespHandler](_sync_reqresp_reqresp_.beaconreqresphandler.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:51](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L51)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)‹› |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |
`network` | [INetwork](../interfaces/_network_interface_.inetwork.md)‹› |
`reputationStore` | [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md) |

**Returns:** *[BeaconReqRespHandler](_sync_reqresp_reqresp_.beaconreqresphandler.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:48](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L48)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:46](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L46)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:47](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L47)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:51](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L51)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:49](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L49)*

___

### `Private` reps

• **reps**: *[IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:50](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L50)*

## Methods

### `Private` createStatus

▸ **createStatus**(): *Promise‹Status›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:212](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L212)*

**Returns:** *Promise‹Status›*

___

### `Private` handshake

▸ **handshake**(`peerInfo`: PeerInfo, `direction`: "inbound" | "outbound"): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:223](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L223)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`direction` | "inbound" &#124; "outbound" |

**Returns:** *Promise‹void›*

___

### `Private` injectRecentBlocks

▸ **injectRecentBlocks**(`archiveStream`: AsyncIterable‹SignedBeaconBlock›, `chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `request`: BeaconBlocksByRangeRequest): *AsyncGenerator‹SignedBeaconBlock›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:234](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L234)*

**Parameters:**

Name | Type |
------ | ------ |
`archiveStream` | AsyncIterable‹SignedBeaconBlock› |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md) |
`request` | BeaconBlocksByRangeRequest |

**Returns:** *AsyncGenerator‹SignedBeaconBlock›*

___

###  onBeaconBlocksByRange

▸ **onBeaconBlocksByRange**(`id`: [RequestId](../modules/_constants_network_.md#requestid), `request`: BeaconBlocksByRangeRequest): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:174](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`request` | BeaconBlocksByRangeRequest |

**Returns:** *Promise‹void›*

___

###  onBeaconBlocksByRoot

▸ **onBeaconBlocksByRoot**(`id`: [RequestId](../modules/_constants_network_.md#requestid), `request`: BeaconBlocksByRootRequest): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:191](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`request` | BeaconBlocksByRootRequest |

**Returns:** *Promise‹void›*

___

###  onGoodbye

▸ **onGoodbye**(`peerInfo`: PeerInfo, `id`: [RequestId](../modules/_constants_network_.md#requestid), `request`: [Goodbye](../enums/_constants_network_.method.md#goodbye)): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:150](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`request` | [Goodbye](../enums/_constants_network_.method.md#goodbye) |

**Returns:** *Promise‹void›*

___

###  onMetadata

▸ **onMetadata**(`peerInfo`: PeerInfo, `id`: [RequestId](../modules/_constants_network_.md#requestid)): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:170](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |

**Returns:** *Promise‹void›*

___

###  onPing

▸ **onPing**(`peerInfo`: PeerInfo, `id`: [RequestId](../modules/_constants_network_.md#requestid), `request`: [Ping](../enums/_constants_network_.method.md#ping)): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:165](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`request` | [Ping](../enums/_constants_network_.method.md#ping) |

**Returns:** *Promise‹void›*

___

###  onRequest

▸ **onRequest**(`peerInfo`: PeerInfo, `method`: [Method](../enums/_constants_network_.method.md), `id`: [RequestId](../modules/_constants_network_.md#requestid), `body?`: RequestBody): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:81](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`method` | [Method](../enums/_constants_network_.method.md) |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`body?` | RequestBody |

**Returns:** *Promise‹void›*

___

###  onStatus

▸ **onStatus**(`peerInfo`: PeerInfo, `id`: [RequestId](../modules/_constants_network_.md#requestid), `request`: Status): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:105](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L105)*

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

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:121](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | Status |

**Returns:** *Promise‹boolean›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:62](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L62)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/reqResp/reqResp.ts:72](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/sync/reqResp/reqResp.ts#L72)*

**Returns:** *Promise‹void›*
