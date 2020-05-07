[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/util/subObject"](_lodecli_util_subobject_.md)

# External module: "lodecli/util/subObject"

## Index

### Functions

* [getSubObject](_lodecli_util_subobject_.md#getsubobject)
* [setSubObject](_lodecli_util_subobject_.md#setsubobject)

## Functions

###  getSubObject

▸ **getSubObject**(`obj`: any, `path`: string[]): *any*

*Defined in [packages/lodestar-cli/src/lodecli/util/subObject.ts:12](https://github.com/ChainSafe/lodestar/blob/618cb3037/packages/lodestar-cli/src/lodecli/util/subObject.ts#L12)*

Get sub-object obj[path[0]]...[path[N]]

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |
`path` | string[] |

**Returns:** *any*

___

###  setSubObject

▸ **setSubObject**(`obj`: any, `path`: string[], `value`: any): *void*

*Defined in [packages/lodestar-cli/src/lodecli/util/subObject.ts:30](https://github.com/ChainSafe/lodestar/blob/618cb3037/packages/lodestar-cli/src/lodecli/util/subObject.ts#L30)*

Update sub-object obj[path[0]]...[path[N]] with value

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |
`path` | string[] |
`value` | any |

**Returns:** *void*
