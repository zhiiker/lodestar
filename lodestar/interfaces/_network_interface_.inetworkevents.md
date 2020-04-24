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

*Defined in [packages/lodestar/src/network/interface.ts:55](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/interface.ts#L55)*

#### Type declaration:

▸ (`peerInfo`: PeerInfo, `direction`: "inbound" | "outbound"): *void*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`direction` | "inbound" &#124; "outbound" |

___

###  peer:disconnect

• **peer:disconnect**: *function*

*Defined in [packages/lodestar/src/network/interface.ts:56](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/interface.ts#L56)*

#### Type declaration:

▸ (`peerInfo`: PeerInfo): *void*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
