[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/network"](../modules/_network_network_.md) › [Libp2pNetwork](_network_network_.libp2pnetwork.md)

# Class: Libp2pNetwork <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [INetworkEvents](../interfaces/_network_interface_.inetworkevents.md), [INetworkEvents](../interfaces/_network_interface_.inetworkevents.md), this› & object & object

  ↳ **Libp2pNetwork**

## Implements

* [INetwork](../interfaces/_network_interface_.inetwork.md)

## Index

### Constructors

* [constructor](_network_network_.libp2pnetwork.md#constructor)

### Properties

* [ _emitType](_network_network_.libp2pnetwork.md#optional--_emittype)
* [ _emitterType](_network_network_.libp2pnetwork.md#optional--_emittertype)
* [ _eventsType](_network_network_.libp2pnetwork.md#optional--_eventstype)
* [config](_network_network_.libp2pnetwork.md#private-config)
* [gossip](_network_network_.libp2pnetwork.md#gossip)
* [inited](_network_network_.libp2pnetwork.md#private-inited)
* [libp2p](_network_network_.libp2pnetwork.md#private-libp2p)
* [logger](_network_network_.libp2pnetwork.md#private-logger)
* [metadata](_network_network_.libp2pnetwork.md#metadata)
* [metrics](_network_network_.libp2pnetwork.md#private-metrics)
* [opts](_network_network_.libp2pnetwork.md#private-opts)
* [peerInfo](_network_network_.libp2pnetwork.md#peerinfo)
* [reqResp](_network_network_.libp2pnetwork.md#reqresp)

### Methods

* [connect](_network_network_.libp2pnetwork.md#connect)
* [disconnect](_network_network_.libp2pnetwork.md#disconnect)
* [emitPeerConnect](_network_network_.libp2pnetwork.md#private-emitpeerconnect)
* [emitPeerDisconnect](_network_network_.libp2pnetwork.md#private-emitpeerdisconnect)
* [getConnection](_network_network_.libp2pnetwork.md#getconnection)
* [getPeers](_network_network_.libp2pnetwork.md#getpeers)
* [hasPeer](_network_network_.libp2pnetwork.md#haspeer)
* [start](_network_network_.libp2pnetwork.md#start)
* [stop](_network_network_.libp2pnetwork.md#stop)

## Constructors

###  constructor

\+ **new Libp2pNetwork**(`opts`: [INetworkOptions](../interfaces/_network_options_.inetworkoptions.md), `__namedParameters`: object): *[Libp2pNetwork](_network_network_.libp2pnetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:43](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L43)*

**Parameters:**

▪ **opts**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)‹› |
`config` | IBeaconConfig |
`libp2p` | LibP2p‹› |
`logger` | ILogger |
`metrics` | [IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md) |
`validator` | [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md) |

**Returns:** *[Libp2pNetwork](_network_network_.libp2pnetwork.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[ _emitType](../interfaces/_network_interface_.inetwork.md#optional--_emittype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[ _emitterType](../interfaces/_network_interface_.inetwork.md#optional--_emittertype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitterType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[ _eventsType](../interfaces/_network_interface_.inetwork.md#optional--_eventstype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _eventsType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/network.ts:39](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L39)*

___

###  gossip

• **gossip**: *[IGossip](../interfaces/_network_gossip_interface_.igossip.md)*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[gossip](../interfaces/_network_interface_.inetwork.md#gossip)*

*Defined in [packages/lodestar/src/network/network.ts:35](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L35)*

___

### `Private` inited

• **inited**: *Promise‹void›*

*Defined in [packages/lodestar/src/network/network.ts:41](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L41)*

___

### `Private` libp2p

• **libp2p**: *LibP2p*

*Defined in [packages/lodestar/src/network/network.ts:40](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L40)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/network.ts:42](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L42)*

___

###  metadata

• **metadata**: *[MetadataController](_network_metadata_metadata_.metadatacontroller.md)*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[metadata](../interfaces/_network_interface_.inetwork.md#metadata)*

*Defined in [packages/lodestar/src/network/network.ts:36](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L36)*

___

### `Private` metrics

• **metrics**: *[IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md)*

*Defined in [packages/lodestar/src/network/network.ts:43](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L43)*

___

### `Private` opts

• **opts**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)*

*Defined in [packages/lodestar/src/network/network.ts:38](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L38)*

___

###  peerInfo

• **peerInfo**: *PeerInfo*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[peerInfo](../interfaces/_network_interface_.inetwork.md#peerinfo)*

*Defined in [packages/lodestar/src/network/network.ts:33](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L33)*

___

###  reqResp

• **reqResp**: *[ReqResp](_network_reqresp_.reqresp.md)*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[reqResp](../interfaces/_network_interface_.inetwork.md#reqresp)*

*Defined in [packages/lodestar/src/network/network.ts:34](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L34)*

## Methods

###  connect

▸ **connect**(`peerInfo`: PeerInfo): *Promise‹void›*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:98](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *Promise‹void›*

___

###  disconnect

▸ **disconnect**(`peerInfo`: PeerInfo): *Promise‹void›*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:102](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *Promise‹void›*

___

### `Private` emitPeerConnect

▸ **emitPeerConnect**(`peerInfo`: PeerInfo): *void*

*Defined in [packages/lodestar/src/network/network.ts:106](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *void*

___

### `Private` emitPeerDisconnect

▸ **emitPeerDisconnect**(`peerInfo`: PeerInfo): *void*

*Defined in [packages/lodestar/src/network/network.ts:113](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *void*

___

###  getConnection

▸ **getConnection**(`peer`: PeerInfo): *LibP2pConnection*

*Defined in [packages/lodestar/src/network/network.ts:94](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`peer` | PeerInfo |

**Returns:** *LibP2pConnection*

___

###  getPeers

▸ **getPeers**(): *PeerInfo[]*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:84](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L84)*

**Returns:** *PeerInfo[]*

___

###  hasPeer

▸ **hasPeer**(`peerInfo`: PeerInfo): *boolean*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:90](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *boolean*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:65](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L65)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:76](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/network/network.ts#L76)*

**Returns:** *Promise‹void›*
