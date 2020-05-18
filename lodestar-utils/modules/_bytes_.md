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

*Defined in [bytes.ts:6](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-utils/src/bytes.ts#L6)*

## Functions

###  bigIntToBytes

▸ **bigIntToBytes**(`value`: bigint, `length`: number, `endianness`: [Endianness](_bytes_.md#endianness)): *Buffer*

*Defined in [bytes.ts:22](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-utils/src/bytes.ts#L22)*

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

*Defined in [bytes.ts:31](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-utils/src/bytes.ts#L31)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | Uint8Array | - |
`endianness` | [Endianness](_bytes_.md#endianness) | "le" |

**Returns:** *bigint*

___

###  bytesToInt

▸ **bytesToInt**(`value`: Uint8Array, `endianness`: [Endianness](_bytes_.md#endianness)): *number*

*Defined in [bytes.ts:18](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-utils/src/bytes.ts#L18)*

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

*Defined in [bytes.ts:45](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-utils/src/bytes.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`hex` | string |

**Returns:** *Uint8Array*

___

###  intToBytes

▸ **intToBytes**(`value`: bigint | number, `length`: number, `endianness`: [Endianness](_bytes_.md#endianness)): *Buffer*

*Defined in [bytes.ts:11](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-utils/src/bytes.ts#L11)*

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

▸ **toHex**(`buffer`: Uint8Array): *string*

*Defined in [bytes.ts:41](https://github.com/ChainSafe/lodestar/blob/7e3e010f1/packages/lodestar-utils/src/bytes.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Uint8Array |

**Returns:** *string*
