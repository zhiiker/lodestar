[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/utils/robin"](../modules/_sync_utils_robin_.md) › [RoundRobinArray](_sync_utils_robin_.roundrobinarray.md)

# Class: RoundRobinArray <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **RoundRobinArray**

## Index

### Constructors

* [constructor](_sync_utils_robin_.roundrobinarray.md#constructor)

### Properties

* [array](_sync_utils_robin_.roundrobinarray.md#private-array)
* [index](_sync_utils_robin_.roundrobinarray.md#private-index)

### Methods

* [next](_sync_utils_robin_.roundrobinarray.md#next)
* [shuffle](_sync_utils_robin_.roundrobinarray.md#private-shuffle)

## Constructors

###  constructor

\+ **new RoundRobinArray**(`array`: T[]): *[RoundRobinArray](_sync_utils_robin_.roundrobinarray.md)*

*Defined in [packages/lodestar/src/sync/utils/robin.ts:5](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/utils/robin.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`array` | T[] |

**Returns:** *[RoundRobinArray](_sync_utils_robin_.roundrobinarray.md)*

## Properties

### `Private` array

• **array**: *T[]*

*Defined in [packages/lodestar/src/sync/utils/robin.ts:3](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/utils/robin.ts#L3)*

___

### `Private` index

• **index**: *number* = 0

*Defined in [packages/lodestar/src/sync/utils/robin.ts:5](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/utils/robin.ts#L5)*

## Methods

###  next

▸ **next**(): *T*

*Defined in [packages/lodestar/src/sync/utils/robin.ts:11](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/utils/robin.ts#L11)*

**Returns:** *T*

___

### `Private` shuffle

▸ **shuffle**(`array`: T[]): *T[]*

*Defined in [packages/lodestar/src/sync/utils/robin.ts:15](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/sync/utils/robin.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`array` | T[] |

**Returns:** *T[]*
