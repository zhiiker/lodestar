[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/interface"](../modules/_network_interface_.md) › [IReqEvents](_network_interface_.ireqevents.md)

# Interface: IReqEvents

## Hierarchy

* **IReqEvents**

## Index

### Properties

* [request](_network_interface_.ireqevents.md#request)

## Properties

###  request

• **request**: *function*

*Defined in [packages/lodestar/src/network/interface.ts:32](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar/src/network/interface.ts#L32)*

#### Type declaration:

▸ (`peerInfo`: PeerInfo, `method`: [Method](../enums/_constants_network_.method.md), `id`: [RequestId](../modules/_constants_network_.md#requestid), `body`: RequestBody): *void*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`method` | [Method](../enums/_constants_network_.method.md) |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`body` | RequestBody |
