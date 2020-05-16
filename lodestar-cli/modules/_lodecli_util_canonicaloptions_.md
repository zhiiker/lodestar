[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/util/canonicalOptions"](_lodecli_util_canonicaloptions_.md)

# External module: "lodecli/util/canonicalOptions"

## Index

### Functions

* [canonicalOptions](_lodecli_util_canonicaloptions_.md#canonicaloptions)
* [firstAlias](_lodecli_util_canonicaloptions_.md#firstalias)
* [popAlias](_lodecli_util_canonicaloptions_.md#popalias)

## Functions

###  canonicalOptions

▸ **canonicalOptions**(`options`: Record‹string, Options›): *Record‹string, Options›*

*Defined in [packages/lodestar-cli/src/lodecli/util/canonicalOptions.ts:21](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar-cli/src/lodecli/util/canonicalOptions.ts#L21)*

An option's first alias, if it exists is set as the 'canonical' one

**Parameters:**

Name | Type |
------ | ------ |
`options` | Record‹string, Options› |

**Returns:** *Record‹string, Options›*

___

###  firstAlias

▸ **firstAlias**(`option`: Options): *string*

*Defined in [packages/lodestar-cli/src/lodecli/util/canonicalOptions.ts:3](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar-cli/src/lodecli/util/canonicalOptions.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`option` | Options |

**Returns:** *string*

___

###  popAlias

▸ **popAlias**(`option`: Options): *void*

*Defined in [packages/lodestar-cli/src/lodecli/util/canonicalOptions.ts:10](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar-cli/src/lodecli/util/canonicalOptions.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`option` | Options |

**Returns:** *void*
