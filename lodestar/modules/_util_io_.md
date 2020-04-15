[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["util/io"](_util_io_.md)

# External module: "util/io"

## Index

### Interfaces

* [IHiddenReadlineInterface](../interfaces/_util_io_.ihiddenreadlineinterface.md)

### Functions

* [getKeyFromFileOrKeystore](_util_io_.md#getkeyfromfileorkeystore)
* [getKeyFromFileOrKeystoreWithPassword](_util_io_.md#getkeyfromfileorkeystorewithpassword)
* [promptPassword](_util_io_.md#promptpassword)

## Functions

###  getKeyFromFileOrKeystore

▸ **getKeyFromFileOrKeystore**(`key`: string): *Promise‹Keypair›*

*Defined in [packages/lodestar/src/util/io.ts:34](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/util/io.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹Keypair›*

___

###  getKeyFromFileOrKeystoreWithPassword

▸ **getKeyFromFileOrKeystoreWithPassword**(`key`: string, `password`: string): *Keypair*

*Defined in [packages/lodestar/src/util/io.ts:43](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/util/io.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`password` | string |

**Returns:** *Keypair*

___

###  promptPassword

▸ **promptPassword**(`passwordPrompt`: string): *Promise‹string›*

*Defined in [packages/lodestar/src/util/io.ts:14](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/util/io.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`passwordPrompt` | string |

**Returns:** *Promise‹string›*
