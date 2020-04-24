[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/sync"](../modules/_sync_sync_.md) › [BeaconSync](_sync_sync_.beaconsync.md)

# Class: BeaconSync

## Hierarchy

* **BeaconSync**

## Implements

* [IBeaconSync](../interfaces/_sync_interface_.ibeaconsync.md)

## Index

### Constructors

* [constructor](_sync_sync_.beaconsync.md#constructor)

### Properties

* [attestationCollector](_sync_sync_.beaconsync.md#private-attestationcollector)
* [chain](_sync_sync_.beaconsync.md#private-chain)
* [gossip](_sync_sync_.beaconsync.md#private-gossip)
* [initialSync](_sync_sync_.beaconsync.md#private-initialsync)
* [logger](_sync_sync_.beaconsync.md#private-logger)
* [mode](_sync_sync_.beaconsync.md#private-mode)
* [network](_sync_sync_.beaconsync.md#private-network)
* [opts](_sync_sync_.beaconsync.md#private-opts)
* [peerReputations](_sync_sync_.beaconsync.md#private-peerreputations)
* [regularSync](_sync_sync_.beaconsync.md#private-regularsync)
* [reqResp](_sync_sync_.beaconsync.md#private-reqresp)

### Methods

* [collectAttestations](_sync_sync_.beaconsync.md#collectattestations)
* [getPeers](_sync_sync_.beaconsync.md#private-getpeers)
* [getSyncStatus](_sync_sync_.beaconsync.md#getsyncstatus)
* [isSynced](_sync_sync_.beaconsync.md#issynced)
* [onUnknownBlockRoot](_sync_sync_.beaconsync.md#private-onunknownblockroot)
* [start](_sync_sync_.beaconsync.md#start)
* [startInitialSync](_sync_sync_.beaconsync.md#private-startinitialsync)
* [startRegularSync](_sync_sync_.beaconsync.md#private-startregularsync)
* [stop](_sync_sync_.beaconsync.md#stop)
* [waitForPeers](_sync_sync_.beaconsync.md#private-waitforpeers)

## Constructors

###  constructor

\+ **new BeaconSync**(`opts`: [ISyncOptions](../interfaces/_sync_options_.isyncoptions.md), `modules`: [ISyncModules](../interfaces/_sync_interface_.isyncmodules.md)): *[BeaconSync](_sync_sync_.beaconsync.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:37](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [ISyncOptions](../interfaces/_sync_options_.isyncoptions.md) |
`modules` | [ISyncModules](../interfaces/_sync_interface_.isyncmodules.md) |

**Returns:** *[BeaconSync](_sync_sync_.beaconsync.md)*

## Properties

### `Private` attestationCollector

• **attestationCollector**: *[AttestationCollector](_sync_utils_attestation_collector_.attestationcollector.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:37](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L37)*

___

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:29](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L29)*

___

### `Private` gossip

• **gossip**: *[IGossipHandler](../modules/_sync_gossip_interface_.md#igossiphandler)*

*Defined in [packages/lodestar/src/sync/sync.ts:36](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L36)*

___

### `Private` initialSync

• **initialSync**: *[InitialSync](../modules/_sync_initial_interface_.md#initialsync)*

*Defined in [packages/lodestar/src/sync/sync.ts:33](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L33)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/sync.ts:27](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L27)*

___

### `Private` mode

• **mode**: *[SyncMode](../enums/_sync_sync_.syncmode.md)* = SyncMode.WAITING_PEERS

*Defined in [packages/lodestar/src/sync/sync.ts:32](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L32)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:28](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L28)*

___

### `Private` opts

• **opts**: *[ISyncOptions](../interfaces/_sync_options_.isyncoptions.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:26](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L26)*

___

### `Private` peerReputations

• **peerReputations**: *[IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:30](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L30)*

___

### `Private` regularSync

• **regularSync**: *[IRegularSync](../modules/_sync_regular_interface_.md#iregularsync)*

*Defined in [packages/lodestar/src/sync/sync.ts:34](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L34)*

___

### `Private` reqResp

• **reqResp**: *[IReqRespHandler](../interfaces/_sync_reqresp_interface_.ireqresphandler.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:35](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L35)*

## Methods

###  collectAttestations

▸ **collectAttestations**(`slot`: Slot, `committeeIndex`: CommitteeIndex): *void*

*Implementation of [IBeaconSync](../interfaces/_sync_interface_.ibeaconsync.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:83](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`committeeIndex` | CommitteeIndex |

**Returns:** *void*

___

### `Private` getPeers

▸ **getPeers**(): *PeerInfo[]*

*Defined in [packages/lodestar/src/sync/sync.ts:109](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L109)*

**Returns:** *PeerInfo[]*

___

###  getSyncStatus

▸ **getSyncStatus**(): *SyncingStatus | null*

*Implementation of [IBeaconSync](../interfaces/_sync_interface_.ibeaconsync.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:75](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L75)*

**Returns:** *SyncingStatus | null*

___

###  isSynced

▸ **isSynced**(): *boolean*

*Implementation of [IBeaconSync](../interfaces/_sync_interface_.ibeaconsync.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:79](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L79)*

**Returns:** *boolean*

___

### `Private` onUnknownBlockRoot

▸ **onUnknownBlockRoot**(`root`: Root): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/sync.ts:116](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Root |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IBeaconSync](../interfaces/_sync_interface_.ibeaconsync.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:52](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L52)*

**Returns:** *Promise‹void›*

___

### `Private` startInitialSync

▸ **startInitialSync**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/sync.ts:87](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L87)*

**Returns:** *Promise‹void›*

___

### `Private` startRegularSync

▸ **startRegularSync**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/sync.ts:93](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L93)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IBeaconSync](../interfaces/_sync_interface_.ibeaconsync.md)*

*Defined in [packages/lodestar/src/sync/sync.ts:65](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L65)*

**Returns:** *Promise‹void›*

___

### `Private` waitForPeers

▸ **waitForPeers**(): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/sync.ts:102](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/sync.ts#L102)*

**Returns:** *Promise‹void›*
