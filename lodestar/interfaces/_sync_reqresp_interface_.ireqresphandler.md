[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/reqResp/interface"](../modules/_sync_reqresp_interface_.md) › [IReqRespHandler](_sync_reqresp_interface_.ireqresphandler.md)

# Interface: IReqRespHandler

The IReqRespHandler module handles app-level requests / responses from other peers,
fetching state from the chain and database as needed.

## Hierarchy

* **IReqRespHandler**

## Implemented by

* [BeaconReqRespHandler](../classes/_sync_reqresp_reqresp_.beaconreqresphandler.md)

## Index

### Properties

* [onRequest](_sync_reqresp_interface_.ireqresphandler.md#onrequest)
* [start](_sync_reqresp_interface_.ireqresphandler.md#start)
* [stop](_sync_reqresp_interface_.ireqresphandler.md#stop)

## Properties

###  onRequest

• **onRequest**: *function*

*Defined in [packages/lodestar/src/sync/reqResp/interface.ts:18](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/sync/reqResp/interface.ts#L18)*

#### Type declaration:

▸ (`peerInfo`: PeerInfo, `method`: [Method](../enums/_constants_network_.method.md), `id`: [RequestId](../modules/_constants_network_.md#requestid), `body`: RequestBody): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo |
`method` | [Method](../enums/_constants_network_.method.md) |
`id` | [RequestId](../modules/_constants_network_.md#requestid) |
`body` | RequestBody |

___

###  start

• **start**: *function*

*Defined in [packages/lodestar/src/sync/reqResp/interface.ts:15](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/sync/reqResp/interface.ts#L15)*

#### Type declaration:

▸ (): *Promise‹void›*

___

###  stop

• **stop**: *function*

*Defined in [packages/lodestar/src/sync/reqResp/interface.ts:16](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/sync/reqResp/interface.ts#L16)*

#### Type declaration:

▸ (): *Promise‹void›*
