[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › ["bytes"](_bytes_.md)

# External module: "bytes"

## Index

### Type aliases

* [Endianness](_bytes_.md#endianness)

### Functions

* [bigIntToBytes](_bytes_.md#biginttobytes)
* [bytesToBigInt](_bytes_.md#bytestobigint)
* [bytesToInt](_bytes_.md#bytestoint)
* [fromHex](_bytes_.md#fromhex)
* [intToBytes](_bytes_.md#inttobytes)
* [toHex](_bytes_.md#tohex)

## Type aliases

###  Endianness

Ƭ **Endianness**: *"le" | "be"*

*Defined in [bytes.ts:7](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar-utils/src/bytes.ts#L7)*

## Functions

###  bigIntToBytes

▸ **bigIntToBytes**(`value`: bigint, `length`: number, `endianness`: [Endianness](_bytes_.md#endianness)): *Buffer*

*Defined in [bytes.ts:23](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar-utils/src/bytes.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | bigint | - |
`length` | number | - |
`endianness` | [Endianness](_bytes_.md#endianness) | "le" |

**Returns:** *Buffer*

___

###  bytesToBigInt

▸ **bytesToBigInt**(`value`: Uint8Array, `endianness`: [Endianness](_bytes_.md#endianness)): *bigint*

*Defined in [bytes.ts:32](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar-utils/src/bytes.ts#L32)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | Uint8Array | - |
`endianness` | [Endianness](_bytes_.md#endianness) | "le" |

**Returns:** *bigint*

___

###  bytesToInt

▸ **bytesToInt**(`value`: Uint8Array, `endianness`: [Endianness](_bytes_.md#endianness)): *number*

*Defined in [bytes.ts:19](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar-utils/src/bytes.ts#L19)*

Convert byte array in LE to integer.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | Uint8Array | - |
`endianness` | [Endianness](_bytes_.md#endianness) | "le" |

**Returns:** *number*

___

###  fromHex

▸ **fromHex**(`hex`: string): *Uint8Array*

*Defined in [bytes.ts:51](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar-utils/src/bytes.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`hex` | string |

**Returns:** *Uint8Array*

___

###  intToBytes

▸ **intToBytes**(`value`: bigint | number, `length`: number, `endianness`: [Endianness](_bytes_.md#endianness)): *Buffer*

*Defined in [bytes.ts:12](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar-utils/src/bytes.ts#L12)*

Return a byte array from a number or BigInt

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | bigint &#124; number | - |
`length` | number | - |
`endianness` | [Endianness](_bytes_.md#endianness) | "le" |

**Returns:** *Buffer*

___

###  toHex

▸ **toHex**(`buffer`: ArrayLike‹number›): *string*

*Defined in [bytes.ts:42](https://github.com/ChainSafe/lodestar/blob/a7b4c5ad0/packages/lodestar-utils/src/bytes.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayLike‹number› |

**Returns:** *string*
