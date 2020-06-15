[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["util/objects"](_util_objects_.md)

# External module: "util/objects"

## Index

### Interfaces

* [IElementDescription](../interfaces/_util_objects_.ielementdescription.md)

### Functions

* [arrayIntersection](_util_objects_.md#arrayintersection)
* [mostFrequent](_util_objects_.md#mostfrequent)
* [sszEqualPredicate](_util_objects_.md#sszequalpredicate)

## Functions

###  arrayIntersection

▸ **arrayIntersection**<**T**>(`arr1`: T[], `arr2`: T[], `predicate`: function): *T[]*

*Defined in [packages/lodestar/src/util/objects.ts:45](https://github.com/ChainSafe/lodestar/blob/e2d6cf79d/packages/lodestar/src/util/objects.ts#L45)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **arr1**: *T[]*

▪ **arr2**: *T[]*

▪ **predicate**: *function*

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *T[]*

___

###  mostFrequent

▸ **mostFrequent**<**T**>(`type`: Type‹T›, `array`: T[]): *T[]*

*Defined in [packages/lodestar/src/util/objects.ts:12](https://github.com/ChainSafe/lodestar/blob/e2d6cf79d/packages/lodestar/src/util/objects.ts#L12)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`type` | Type‹T› |
`array` | T[] |

**Returns:** *T[]*

___

###  sszEqualPredicate

▸ **sszEqualPredicate**<**T**>(`type`: Type‹T›): *function*

*Defined in [packages/lodestar/src/util/objects.ts:39](https://github.com/ChainSafe/lodestar/blob/e2d6cf79d/packages/lodestar/src/util/objects.ts#L39)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`type` | Type‹T› |

**Returns:** *function*

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |
