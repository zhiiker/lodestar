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
* [getPeerIdsBySubnet](_sync_ireputation_.reputationstore.md#getpeeridsbysubnet)
* [remove](_sync_ireputation_.reputationstore.md#remove)

## Constructors

###  constructor

\+ **new ReputationStore**(): *[ReputationStore](_sync_ireputation_.reputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:22](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/IReputation.ts#L22)*

**Returns:** *[ReputationStore](_sync_ireputation_.reputationstore.md)*

## Properties

### `Private` reputations

• **reputations**: *Map‹string, [IReputation](../interfaces/_sync_ireputation_.ireputation.md)›*

*Defined in [packages/lodestar/src/sync/IReputation.ts:22](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/IReputation.ts#L22)*

## Methods

###  add

▸ **add**(`peerId`: string): *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

*Implementation of [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:26](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/IReputation.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

___

###  get

▸ **get**(`peerId`: string): *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

*Implementation of [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:38](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/IReputation.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

___

###  getFromPeerInfo

▸ **getFromPeerInfo**(`peer`: PeerInfo): *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

*Implementation of [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:42](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/IReputation.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`peer` | PeerInfo |

**Returns:** *[IReputation](../interfaces/_sync_ireputation_.ireputation.md)*

___

###  getPeerIdsBySubnet

▸ **getPeerIdsBySubnet**(`subnetStr`: string): *string[]*

*Implementation of [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:46](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/IReputation.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`subnetStr` | string |

**Returns:** *string[]*

___

###  remove

▸ **remove**(`peerId`: string): *void*

*Implementation of [IReputationStore](../interfaces/_sync_ireputation_.ireputationstore.md)*

*Defined in [packages/lodestar/src/sync/IReputation.ts:35](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/IReputation.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | string |

**Returns:** *void*
