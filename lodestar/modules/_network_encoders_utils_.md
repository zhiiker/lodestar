[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/encoders/utils"](_network_encoders_utils_.md)

# External module: "network/encoders/utils"

## Index

### Functions

* [encodeResponseStatus](_network_encoders_utils_.md#encoderesponsestatus)
* [getCompressor](_network_encoders_utils_.md#getcompressor)
* [getDecompressor](_network_encoders_utils_.md#getdecompressor)

## Functions

###  encodeResponseStatus

▸ **encodeResponseStatus**(`status`: number): *Buffer*

*Defined in [packages/lodestar/src/network/encoders/utils.ts:46](https://github.com/ChainSafe/lodestar/blob/2084b4ac7/packages/lodestar/src/network/encoders/utils.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | number |

**Returns:** *Buffer*

___

###  getCompressor

▸ **getCompressor**(`encoding`: [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)): *function*

*Defined in [packages/lodestar/src/network/encoders/utils.ts:7](https://github.com/ChainSafe/lodestar/blob/2084b4ac7/packages/lodestar/src/network/encoders/utils.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md) |

**Returns:** *function*

▸ (`data`: Buffer): *AsyncGenerator‹Buffer›*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer |

___

###  getDecompressor

▸ **getDecompressor**(`encoding`: [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)): *[IDecompressor](../interfaces/_network_encoders_interface_.idecompressor.md)*

*Defined in [packages/lodestar/src/network/encoders/utils.ts:28](https://github.com/ChainSafe/lodestar/blob/2084b4ac7/packages/lodestar/src/network/encoders/utils.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md) |

**Returns:** *[IDecompressor](../interfaces/_network_encoders_interface_.idecompressor.md)*
