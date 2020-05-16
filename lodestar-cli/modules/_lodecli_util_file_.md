[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/util/file"](_lodecli_util_file_.md)

# External module: "lodecli/util/file"

## Index

### Enumerations

* [FileFormat](../enums/_lodecli_util_file_.fileformat.md)

### Functions

* [mkdir](_lodecli_util_file_.md#mkdir)
* [parse](_lodecli_util_file_.md#parse)
* [readFile](_lodecli_util_file_.md#readfile)
* [readFileSync](_lodecli_util_file_.md#readfilesync)
* [stringify](_lodecli_util_file_.md#stringify)
* [writeFile](_lodecli_util_file_.md#writefile)

## Functions

###  mkdir

▸ **mkdir**(`filename`: string): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/lodecli/util/file.ts:9](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar-cli/src/lodecli/util/file.ts#L9)*

Maybe create a directory

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *Promise‹void›*

___

###  parse

▸ **parse**<**T**>(`contents`: string, `fileFormat`: [FileFormat](../enums/_lodecli_util_file_.fileformat.md)): *T*

*Defined in [packages/lodestar-cli/src/lodecli/util/file.ts:23](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar-cli/src/lodecli/util/file.ts#L23)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`contents` | string |
`fileFormat` | [FileFormat](../enums/_lodecli_util_file_.fileformat.md) |

**Returns:** *T*

___

###  readFile

▸ **readFile**<**T**>(`filename`: string): *Promise‹T›*

*Defined in [packages/lodestar-cli/src/lodecli/util/file.ts:59](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar-cli/src/lodecli/util/file.ts#L59)*

Read a JSON serializable object from a file

Parse either from json, yaml, or toml

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *Promise‹T›*

___

###  readFileSync

▸ **readFileSync**<**T**>(`filename`: string): *T*

*Defined in [packages/lodestar-cli/src/lodecli/util/file.ts:65](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar-cli/src/lodecli/util/file.ts#L65)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *T*

___

###  stringify

▸ **stringify**<**T**>(`obj`: T, `fileFormat`: [FileFormat](../enums/_lodecli_util_file_.fileformat.md)): *string*

*Defined in [packages/lodestar-cli/src/lodecli/util/file.ts:31](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar-cli/src/lodecli/util/file.ts#L31)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |
`fileFormat` | [FileFormat](../enums/_lodecli_util_file_.fileformat.md) |

**Returns:** *string*

___

###  writeFile

▸ **writeFile**(`filename`: string, `obj`: Json): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/lodecli/util/file.ts:48](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar-cli/src/lodecli/util/file.ts#L48)*

Write a JSON serializable object to a file

Serialize either to json, yaml, or toml

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |
`obj` | Json |

**Returns:** *Promise‹void›*
