[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/interface"](../modules/_network_interface_.md) › [INetworkEvents](_network_interface_.inetworkevents.md)

# Interface: INetworkEvents

## Hierarchy

* **INetworkEvents**

## Index

### Properties

* [peer:connect](_network_interface_.inetworkevents.md#peer:connect)
* [peer:disconnect](_network_interface_.inetworkevents.md#peer:disconnect)

## Properties

###  peer:connect

• **peer:connect**: *function*

*Defined in [packages/lodestar/src/network/interface.ts:50](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/interface.ts#L50)*

#### Type declaration:

▸ (`peerInfo`: PeerInfo): *void*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |

___

###  peer:disconnect

• **peer:disconnect**: *function*

*Defined in [packages/lodestar/src/network/interface.ts:51](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/interface.ts#L51)*

#### Type declaration:

▸ (`peerInfo`: PeerInfo): *void*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
