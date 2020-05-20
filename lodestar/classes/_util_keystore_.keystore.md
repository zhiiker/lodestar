[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["util/keystore"](../modules/_util_keystore_.md) › [Keystore](_util_keystore_.keystore.md)

# Class: Keystore

Keystore class which creates and saves bls generated keys

## Hierarchy

* **Keystore**

## Index

### Constructors

* [constructor](_util_keystore_.keystore.md#constructor)

### Properties

* [encryptedPrivateKey](_util_keystore_.keystore.md#private-encryptedprivatekey)
* [publicKey](_util_keystore_.keystore.md#publickey)

### Methods

* [getKeypair](_util_keystore_.keystore.md#getkeypair)
* [privateKey](_util_keystore_.keystore.md#privatekey)
* [saveKeys](_util_keystore_.keystore.md#savekeys)
* [fromJson](_util_keystore_.keystore.md#static-fromjson)
* [generateKeys](_util_keystore_.keystore.md#static-generatekeys)
* [getKeyFromKeyStore](_util_keystore_.keystore.md#static-getkeyfromkeystore)

## Constructors

###  constructor

\+ **new Keystore**(`keys`: [IKeystoreObject](../interfaces/_util_keystore_.ikeystoreobject.md)): *[Keystore](_util_keystore_.keystore.md)*

*Defined in [packages/lodestar/src/util/keystore.ts:21](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/util/keystore.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | [IKeystoreObject](../interfaces/_util_keystore_.ikeystoreobject.md) |

**Returns:** *[Keystore](_util_keystore_.keystore.md)*

## Properties

### `Private` encryptedPrivateKey

• **encryptedPrivateKey**: *string*

*Defined in [packages/lodestar/src/util/keystore.ts:21](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/util/keystore.ts#L21)*

___

###  publicKey

• **publicKey**: *string*

*Defined in [packages/lodestar/src/util/keystore.ts:20](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/util/keystore.ts#L20)*

## Methods

###  getKeypair

▸ **getKeypair**(`password`: string): *Keypair*

*Defined in [packages/lodestar/src/util/keystore.ts:60](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/util/keystore.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *Keypair*

___

###  privateKey

▸ **privateKey**(`password`: string): *string*

*Defined in [packages/lodestar/src/util/keystore.ts:56](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/util/keystore.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *string*

___

###  saveKeys

▸ **saveKeys**(`outputFilePath`: string): *void*

*Defined in [packages/lodestar/src/util/keystore.ts:64](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/util/keystore.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`outputFilePath` | string |

**Returns:** *void*

___

### `Static` fromJson

▸ **fromJson**(`filePath`: string): *[Keystore](_util_keystore_.keystore.md)*

*Defined in [packages/lodestar/src/util/keystore.ts:44](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/util/keystore.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`filePath` | string |

**Returns:** *[Keystore](_util_keystore_.keystore.md)*

___

### `Static` generateKeys

▸ **generateKeys**(`password`: string): *[Keystore](_util_keystore_.keystore.md)*

*Defined in [packages/lodestar/src/util/keystore.ts:33](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/util/keystore.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *[Keystore](_util_keystore_.keystore.md)*

___

### `Static` getKeyFromKeyStore

▸ **getKeyFromKeyStore**(`keyStorePath`: string, `password`: string): *Keypair*

*Defined in [packages/lodestar/src/util/keystore.ts:28](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar/src/util/keystore.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`keyStorePath` | string |
`password` | string |

**Returns:** *Keypair*
