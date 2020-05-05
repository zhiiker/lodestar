[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/encoders/response"](_network_encoders_response_.md)

# External module: "network/encoders/response"

## Index

### Functions

* [eth2ResponseDecode](_network_encoders_response_.md#eth2responsedecode)
* [eth2ResponseEncode](_network_encoders_response_.md#eth2responseencode)

## Functions

###  eth2ResponseDecode

▸ **eth2ResponseDecode**(`config`: IBeaconConfig, `logger`: ILogger, `method`: [Method](../enums/_constants_network_.method.md), `encoding`: [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)): *function*

*Defined in [packages/lodestar/src/network/encoders/response.ts:46](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/encoders/response.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`logger` | ILogger |
`method` | [Method](../enums/_constants_network_.method.md) |
`encoding` | [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹Buffer›): *AsyncGenerator‹ResponseBody›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹Buffer› |

___

###  eth2ResponseEncode

▸ **eth2ResponseEncode**(`config`: IBeaconConfig, `logger`: ILogger, `method`: [Method](../enums/_constants_network_.method.md), `encoding`: [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)): *function*

*Defined in [packages/lodestar/src/network/encoders/response.ts:10](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/network/encoders/response.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`logger` | ILogger |
`method` | [Method](../enums/_constants_network_.method.md) |
`encoding` | [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹[IResponseChunk](../interfaces/_network_encoders_interface_.iresponsechunk.md)›): *AsyncIterable‹Buffer›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹[IResponseChunk](../interfaces/_network_encoders_interface_.iresponsechunk.md)› |
