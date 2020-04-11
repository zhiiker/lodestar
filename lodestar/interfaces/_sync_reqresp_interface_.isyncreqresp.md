[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/reqResp/interface"](../modules/_sync_reqresp_interface_.md) › [ISyncReqResp](_sync_reqresp_interface_.isyncreqresp.md)

# Interface: ISyncReqResp

The ISyncReqResp module handles app-level requests / responses from other peers,
fetching state from the chain and database as needed.

## Hierarchy

* **ISyncReqResp**

## Implemented by

* [SyncReqResp](../classes/_sync_reqresp_reqresp_.syncreqresp.md)

## Index

### Properties

* [onRequest](_sync_reqresp_interface_.isyncreqresp.md#onrequest)
* [start](_sync_reqresp_interface_.isyncreqresp.md#start)
* [stop](_sync_reqresp_interface_.isyncreqresp.md#stop)

## Properties

###  onRequest

• **onRequest**: *function*

*Defined in [packages/lodestar/src/sync/reqResp/interface.ts:22](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/reqResp/interface.ts#L22)*

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

*Defined in [packages/lodestar/src/sync/reqResp/interface.ts:19](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/reqResp/interface.ts#L19)*

#### Type declaration:

▸ (): *Promise‹void›*

___

###  stop

• **stop**: *function*

*Defined in [packages/lodestar/src/sync/reqResp/interface.ts:20](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/reqResp/interface.ts#L20)*

#### Type declaration:

▸ (): *Promise‹void›*
