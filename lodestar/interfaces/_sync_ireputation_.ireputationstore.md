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
* [getPeerIdsBySubnet](_sync_ireputation_.ireputationstore.md#getpeeridsbysubnet)
* [remove](_sync_ireputation_.ireputationstore.md#remove)

## Methods

###  add

▸ **add**(`peerId`: string): *[IReputation](_sync_ireputation_.ireputation.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:14](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/sync/IReputation.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *[IReputation](_sync_ireputation_.ireputation.md)*

___

###  get

▸ **get**(`peerId`: string): *[IReputation](_sync_ireputation_.ireputation.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:16](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/sync/IReputation.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *[IReputation](_sync_ireputation_.ireputation.md)*

___

###  getFromPeerInfo

▸ **getFromPeerInfo**(`peer`: PeerInfo): *[IReputation](_sync_ireputation_.ireputation.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:17](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/sync/IReputation.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`peer` | PeerInfo |

**Returns:** *[IReputation](_sync_ireputation_.ireputation.md)*

___

###  getPeerIdsBySubnet

▸ **getPeerIdsBySubnet**(`subnetStr`: string): *string[]*

*Defined in [packages/lodestar/src/sync/IReputation.ts:18](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/sync/IReputation.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`subnetStr` | string |

**Returns:** *string[]*

___

###  remove

▸ **remove**(`peerId`: string): *void*

*Defined in [packages/lodestar/src/sync/IReputation.ts:15](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/sync/IReputation.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *void*
