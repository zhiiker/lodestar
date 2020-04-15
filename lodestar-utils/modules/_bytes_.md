[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › ["bytes"](_bytes_.md)

# External module: "bytes"

## Index

### Functions

* [bigIntToBytes](_bytes_.md#biginttobytes)
* [bytesToBigInt](_bytes_.md#bytestobigint)
* [bytesToInt](_bytes_.md#bytestoint)
* [fromHex](_bytes_.md#fromhex)
* [intToBytes](_bytes_.md#inttobytes)
* [toHex](_bytes_.md#tohex)

## Functions

###  bigIntToBytes

▸ **bigIntToBytes**(`value`: bigint, `length`: number): *Uint8Array*

*Defined in [bytes.ts:32](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-utils/src/bytes.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint |
`length` | number |

**Returns:** *Uint8Array*

___

###  bytesToBigInt

▸ **bytesToBigInt**(`value`: Uint8Array): *bigint*

*Defined in [bytes.ts:28](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-utils/src/bytes.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Uint8Array |

**Returns:** *bigint*

___

###  bytesToInt

▸ **bytesToInt**(`value`: Uint8Array): *number*

*Defined in [bytes.ts:19](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-utils/src/bytes.ts#L19)*

Convert byte array in LE to integer.

**Parameters:**

Name | Type |
------ | ------ |
`value` | Uint8Array |

**Returns:** *number*

___

###  fromHex

▸ **fromHex**(`hex`: string): *Uint8Array*

*Defined in [bytes.ts:42](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-utils/src/bytes.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`hex` | string |

**Returns:** *Uint8Array*

___

###  intToBytes

▸ **intToBytes**(`value`: bigint | number, `length`: number): *Buffer*

*Defined in [bytes.ts:5](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-utils/src/bytes.ts#L5)*

Return a byte array from a number or BigInt

**Parameters:**

Name | Type |
------ | ------ |
`value` | bigint &#124; number |
`length` | number |

**Returns:** *Buffer*

___

###  toHex

▸ **toHex**(`buffer`: Uint8Array): *string*

*Defined in [bytes.ts:38](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-utils/src/bytes.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | Uint8Array |

**Returns:** *string*
