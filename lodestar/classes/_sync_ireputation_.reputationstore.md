[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/IReputation"](../modules/_sync_ireputation_.md) › [ReputationStore](_sync_ireputation_.reputationstore.md)

# Class: ReputationStore

## Hierarchy

* **ReputationStore**

## Implements

* [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)

## Index

### Constructors

* [constructor](_sync_ireputation_.reputationstore.md#constructor)

### Properties

* [reputations](_sync_ireputation_.reputationstore.md#private-reputations)

### Methods

* [add](_sync_ireputation_.reputationstore.md#add)
* [get](_sync_ireputation_.reputationstore.md#get)
* [getFromPeerInfo](_sync_ireputation_.reputationstore.md#getfrompeerinfo)
* [remove](_sync_ireputation_.reputationstore.md#remove)

## Constructors

###  constructor

\+ **new ReputationStore**(): *[ReputationStore](_sync_ireputation_.reputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:20](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/IReputation.ts#L20)*

**Returns:** *[ReputationStore](_sync_ireputation_.reputationstore.md)*

## Properties

### `Private` reputations

• **reputations**: *Map‹string, [IReputation](../interfaces/_sync_ireputation_.ireputation.md)›*

*Defined in [packages/lodestar/src/sync/IReputation.ts:20](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/IReputation.ts#L20)*

## Methods

###  add

▸ **add**(`peerId`: string): *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

*Implementation of [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:24](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/IReputation.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

___

###  get

▸ **get**(`peerId`: string): *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

*Implementation of [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:36](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/IReputation.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

___

###  getFromPeerInfo

▸ **getFromPeerInfo**(`peer`: PeerInfo): *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

*Implementation of [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:40](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/IReputation.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`peer` | PeerInfo |

**Returns:** *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

___

###  remove

▸ **remove**(`peerId`: string): *void*

*Implementation of [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:33](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/IReputation.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *void*
