[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/IReputation"](../modules/_sync_ireputation_.md) › [IReputationStore](_sync_ireputation_.ireputationstore.md)

# Interface: IReputationStore

## Hierarchy

* **IReputationStore**

## Implemented by

* [ReputationStore](../classes/_sync_ireputation_.reputationstore.md)

## Index

### Methods

* [add](_sync_ireputation_.ireputationstore.md#add)
* [get](_sync_ireputation_.ireputationstore.md#get)
* [getFromPeerInfo](_sync_ireputation_.ireputationstore.md#getfrompeerinfo)
* [remove](_sync_ireputation_.ireputationstore.md#remove)

## Methods

###  add

▸ **add**(`peerId`: string): *[IReputation](_sync_ireputation_.ireputation.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:13](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/sync/IReputation.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *[IReputation](_sync_ireputation_.ireputation.md)*

___

###  get

▸ **get**(`peerId`: string): *[IReputation](_sync_ireputation_.ireputation.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:15](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/sync/IReputation.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *[IReputation](_sync_ireputation_.ireputation.md)*

___

###  getFromPeerInfo

▸ **getFromPeerInfo**(`peer`: PeerInfo): *[IReputation](_sync_ireputation_.ireputation.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:16](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/sync/IReputation.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`peer` | PeerInfo |

**Returns:** *[IReputation](_sync_ireputation_.ireputation.md)*

___

###  remove

▸ **remove**(`peerId`: string): *void*

*Defined in [packages/lodestar/src/sync/IReputation.ts:14](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/sync/IReputation.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *void*
