[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/interface"](../modules/_network_interface_.md) › [INetwork](_network_interface_.inetwork.md)

# Interface: INetwork <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [INetworkEvents](_network_interface_.inetworkevents.md), [INetworkEvents](_network_interface_.inetworkevents.md)› & object & object

  ↳ **INetwork**

## Implemented by

* [Libp2pNetwork](../classes/_network_network_.libp2pnetwork.md)

## Index

### Properties

* [ _emitType](_network_interface_.inetwork.md#optional--_emittype)
* [ _emitterType](_network_interface_.inetwork.md#optional--_emittertype)
* [ _eventsType](_network_interface_.inetwork.md#optional--_eventstype)
* [gossip](_network_interface_.inetwork.md#gossip)
* [metadata](_network_interface_.inetwork.md#metadata)
* [peerInfo](_network_interface_.inetwork.md#peerinfo)
* [reqResp](_network_interface_.inetwork.md#reqresp)

### Methods

* [connect](_network_interface_.inetwork.md#connect)
* [disconnect](_network_interface_.inetwork.md#disconnect)
* [getPeers](_network_interface_.inetwork.md#getpeers)
* [hasPeer](_network_interface_.inetwork.md#haspeer)
* [start](_network_interface_.inetwork.md#start)
* [stop](_network_interface_.inetwork.md#stop)

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Inherited from [IEth1Notifier](_eth1_interface_.ieth1notifier.md).[ _emitType](_eth1_interface_.ieth1notifier.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IEth1Notifier](_eth1_interface_.ieth1notifier.md).[ _emitterType](_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IEth1Notifier](_eth1_interface_.ieth1notifier.md).[ _eventsType](_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

###  gossip

• **gossip**: *[IGossip](_network_gossip_interface_.igossip.md)*

*Defined in [packages/lodestar/src/network/interface.ts:62](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L62)*

___

###  metadata

• **metadata**: *[MetadataController](../classes/_network_metadata_metadata_.metadatacontroller.md)*

*Defined in [packages/lodestar/src/network/interface.ts:63](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L63)*

___

###  peerInfo

• **peerInfo**: *PeerInfo*

*Defined in [packages/lodestar/src/network/interface.ts:67](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L67)*

Our network identity

___

###  reqResp

• **reqResp**: *[IReqResp](_network_interface_.ireqresp.md)*

*Defined in [packages/lodestar/src/network/interface.ts:61](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L61)*

## Methods

###  connect

▸ **connect**(`peerInfo`: PeerInfo): *Promise‹void›*

*Defined in [packages/lodestar/src/network/interface.ts:70](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *Promise‹void›*

___

###  disconnect

▸ **disconnect**(`peerInfo`: PeerInfo): *Promise‹void›*

*Defined in [packages/lodestar/src/network/interface.ts:71](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *Promise‹void›*

___

###  getPeers

▸ **getPeers**(): *PeerInfo[]*

*Defined in [packages/lodestar/src/network/interface.ts:68](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L68)*

**Returns:** *PeerInfo[]*

___

###  hasPeer

▸ **hasPeer**(`peerInfo`: PeerInfo): *boolean*

*Defined in [packages/lodestar/src/network/interface.ts:69](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

**Returns:** *boolean*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/interface.ts:73](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L73)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/interface.ts:74](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/interface.ts#L74)*

**Returns:** *Promise‹void›*
