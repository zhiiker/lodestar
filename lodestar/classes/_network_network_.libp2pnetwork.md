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
* [peerReputations](_network_network_.libp2pnetwork.md#private-peerreputations)
* [reqResp](_network_network_.libp2pnetwork.md#reqresp)

### Methods

* [connect](_network_network_.libp2pnetwork.md#connect)
* [connectToNewPeersBySubnet](_network_network_.libp2pnetwork.md#private-connecttonewpeersbysubnet)
* [disconnect](_network_network_.libp2pnetwork.md#disconnect)
* [emitPeerConnect](_network_network_.libp2pnetwork.md#private-emitpeerconnect)
* [emitPeerDisconnect](_network_network_.libp2pnetwork.md#private-emitpeerdisconnect)
* [getConnection](_network_network_.libp2pnetwork.md#getconnection)
* [getPeers](_network_network_.libp2pnetwork.md#getpeers)
* [hasPeer](_network_network_.libp2pnetwork.md#haspeer)
* [searchDiscv5Peers](_network_network_.libp2pnetwork.md#private-searchdiscv5peers)
* [searchSubnetPeers](_network_network_.libp2pnetwork.md#searchsubnetpeers)
* [start](_network_network_.libp2pnetwork.md#start)
* [stop](_network_network_.libp2pnetwork.md#stop)

## Constructors

###  constructor

\+ **new Libp2pNetwork**(`opts`: [INetworkOptions](../interfaces/_network_options_.inetworkoptions.md), `reps`: [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md), `__namedParameters`: object): *[Libp2pNetwork](_network_network_.libp2pnetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:46](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L46)*

**Parameters:**

▪ **opts**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)*

▪ **reps**: *[IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

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

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[ _emitterType](../interfaces/_network_interface_.inetwork.md#optional--_emittertype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitterType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[ _eventsType](../interfaces/_network_interface_.inetwork.md#optional--_eventstype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _eventsType](../interfaces/_network_gossip_interface_.igossip.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/network.ts:41](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L41)*

___

###  gossip

• **gossip**: *[IGossip](../interfaces/_network_gossip_interface_.igossip.md)*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[gossip](../interfaces/_network_interface_.inetwork.md#gossip)*

*Defined in [packages/lodestar/src/network/network.ts:37](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L37)*

___

### `Private` inited

• **inited**: *Promise‹void›*

*Defined in [packages/lodestar/src/network/network.ts:43](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L43)*

___

### `Private` libp2p

• **libp2p**: *LibP2p*

*Defined in [packages/lodestar/src/network/network.ts:42](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L42)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/network.ts:44](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L44)*

___

###  metadata

• **metadata**: *[MetadataController](_network_metadata_metadata_.metadatacontroller.md)*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[metadata](../interfaces/_network_interface_.inetwork.md#metadata)*

*Defined in [packages/lodestar/src/network/network.ts:38](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L38)*

___

### `Private` metrics

• **metrics**: *[IBeaconMetrics](../interfaces/_metrics_interface_.ibeaconmetrics.md)*

*Defined in [packages/lodestar/src/network/network.ts:45](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L45)*

___

### `Private` opts

• **opts**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)*

*Defined in [packages/lodestar/src/network/network.ts:40](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L40)*

___

###  peerInfo

• **peerInfo**: *PeerInfo*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[peerInfo](../interfaces/_network_interface_.inetwork.md#peerinfo)*

*Defined in [packages/lodestar/src/network/network.ts:35](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L35)*

___

### `Private` peerReputations

• **peerReputations**: *[IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/network/network.ts:46](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L46)*

___

###  reqResp

• **reqResp**: *[ReqResp](_network_reqresp_.reqresp.md)*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md).[reqResp](../interfaces/_network_interface_.inetwork.md#reqresp)*

*Defined in [packages/lodestar/src/network/network.ts:36](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L36)*

## Methods

###  connect

▸ **connect**(`peerInfo`: PeerInfo): *Promise‹void›*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:114](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *Promise‹void›*

___

### `Private` connectToNewPeersBySubnet

▸ **connectToNewPeersBySubnet**(`subnet`: number, `inPeerIds?`: string[]): *Promise‹number›*

*Defined in [packages/lodestar/src/network/network.ts:138](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L138)*

Connect to new peers given a subnet.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subnet` | number | the subnet calculated from committee index |
`inPeerIds?` | string[] | peers already have this subnet  |

**Returns:** *Promise‹number›*

___

###  disconnect

▸ **disconnect**(`peerInfo`: PeerInfo): *Promise‹void›*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:118](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *Promise‹void›*

___

### `Private` emitPeerConnect

▸ **emitPeerConnect**(`peerInfo`: PeerInfo): *void*

*Defined in [packages/lodestar/src/network/network.ts:182](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L182)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *void*

___

### `Private` emitPeerDisconnect

▸ **emitPeerDisconnect**(`peerInfo`: PeerInfo): *void*

*Defined in [packages/lodestar/src/network/network.ts:190](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *void*

___

###  getConnection

▸ **getConnection**(`peer`: PeerInfo): *LibP2pConnection | undefined*

*Defined in [packages/lodestar/src/network/network.ts:105](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`peer` | PeerInfo |

**Returns:** *LibP2pConnection | undefined*

___

###  getPeers

▸ **getPeers**(): *PeerInfo[]*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:93](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L93)*

**Returns:** *PeerInfo[]*

___

###  hasPeer

▸ **hasPeer**(`peerInfo`: PeerInfo): *boolean*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:101](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *boolean*

___

### `Private` searchDiscv5Peers

▸ **searchDiscv5Peers**(`subnet`: number): *Promise‹PeerInfo[]›*

*Defined in [packages/lodestar/src/network/network.ts:162](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`subnet` | number |

**Returns:** *Promise‹PeerInfo[]›*

___

###  searchSubnetPeers

▸ **searchSubnetPeers**(`subnet`: string): *Promise‹void›*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:122](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`subnet` | string |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:72](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L72)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/network/network.ts:84](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/network.ts#L84)*

**Returns:** *Promise‹void›*
