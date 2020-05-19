[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/encoders/request"](_network_encoders_request_.md)

# External module: "network/encoders/request"

## Index

### Functions

* [eth2RequestDecode](_network_encoders_request_.md#eth2requestdecode)
* [eth2RequestEncode](_network_encoders_request_.md#eth2requestencode)

## Functions

###  eth2RequestDecode

▸ **eth2RequestDecode**(`config`: IBeaconConfig, `logger`: ILogger, `method`: [Method](../enums/_constants_network_.method.md), `encoding`: [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)): *function*

*Defined in [packages/lodestar/src/network/encoders/request.ts:35](https://github.com/ChainSafe/lodestar/blob/e079784d1/packages/lodestar/src/network/encoders/request.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`logger` | ILogger |
`method` | [Method](../enums/_constants_network_.method.md) |
`encoding` | [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹Buffer | BufferList›): *AsyncGenerator‹RequestBody›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹Buffer &#124; BufferList› |

___

###  eth2RequestEncode

▸ **eth2RequestEncode**(`config`: IBeaconConfig, `logger`: ILogger, `method`: [Method](../enums/_constants_network_.method.md), `encoding`: [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)): *function*

*Defined in [packages/lodestar/src/network/encoders/request.ts:9](https://github.com/ChainSafe/lodestar/blob/e079784d1/packages/lodestar/src/network/encoders/request.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`logger` | ILogger |
`method` | [Method](../enums/_constants_network_.method.md) |
`encoding` | [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹RequestBody›): *AsyncGenerator‹Buffer›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹RequestBody› |
