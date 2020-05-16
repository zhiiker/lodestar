[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["util/encrypt"](_util_encrypt_.md)

# External module: "util/encrypt"

## Index

### Variables

* [algorithm](_util_encrypt_.md#const-algorithm)
* [inputEncoding](_util_encrypt_.md#const-inputencoding)
* [outputEncoding](_util_encrypt_.md#const-outputencoding)

### Functions

* [decryptKey](_util_encrypt_.md#decryptkey)
* [encryptKey](_util_encrypt_.md#encryptkey)

## Variables

### `Const` algorithm

• **algorithm**: *"aes256"* = "aes256"

*Defined in [packages/lodestar/src/util/encrypt.ts:7](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/util/encrypt.ts#L7)*

___

### `Const` inputEncoding

• **inputEncoding**: *"utf8"* = "utf8"

*Defined in [packages/lodestar/src/util/encrypt.ts:8](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/util/encrypt.ts#L8)*

___

### `Const` outputEncoding

• **outputEncoding**: *"hex"* = "hex"

*Defined in [packages/lodestar/src/util/encrypt.ts:9](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/util/encrypt.ts#L9)*

## Functions

###  decryptKey

▸ **decryptKey**(`value`: string, `password`: string): *string*

*Defined in [packages/lodestar/src/util/encrypt.ts:31](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/util/encrypt.ts#L31)*

Decrypts key

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`password` | string |

**Returns:** *string*

___

###  encryptKey

▸ **encryptKey**(`value`: string, `password`: string): *string*

*Defined in [packages/lodestar/src/util/encrypt.ts:17](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar/src/util/encrypt.ts#L17)*

Encrypts key

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`password` | string |

**Returns:** *string*
