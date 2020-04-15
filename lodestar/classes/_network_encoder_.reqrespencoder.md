[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/encoder"](../modules/_network_encoder_.md) › [ReqRespEncoder](_network_encoder_.reqrespencoder.md)

# Class: ReqRespEncoder

## Hierarchy

* **ReqRespEncoder**

## Index

### Constructors

* [constructor](_network_encoder_.reqrespencoder.md#constructor)

### Properties

* [config](_network_encoder_.reqrespencoder.md#private-config)
* [encoding](_network_encoder_.reqrespencoder.md#encoding)

### Methods

* [decodeRequest](_network_encoder_.reqrespencoder.md#decoderequest)
* [decodeResponse](_network_encoder_.reqrespencoder.md#decoderesponse)
* [encodeRequest](_network_encoder_.reqrespencoder.md#encoderequest)
* [encodeResponse](_network_encoder_.reqrespencoder.md#encoderesponse)
* [getEncoders](_network_encoder_.reqrespencoder.md#private-getencoders)
* [readLengthPrefixed](_network_encoder_.reqrespencoder.md#private-readlengthprefixed)
* [readStatus](_network_encoder_.reqrespencoder.md#private-readstatus)
* [writeLengthPrefixed](_network_encoder_.reqrespencoder.md#private-writelengthprefixed)
* [writeStatus](_network_encoder_.reqrespencoder.md#private-writestatus)

## Constructors

###  constructor

\+ **new ReqRespEncoder**(`config`: IBeaconConfig, `encoding`: [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)): *[ReqRespEncoder](_network_encoder_.reqrespencoder.md)*

*Defined in [packages/lodestar/src/network/encoder.ts:16](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`encoding` | [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md) |

**Returns:** *[ReqRespEncoder](_network_encoder_.reqrespencoder.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/encoder.ts:16](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L16)*

___

###  encoding

• **encoding**: *[ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)*

*Defined in [packages/lodestar/src/network/encoder.ts:14](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L14)*

## Methods

###  decodeRequest

▸ **decodeRequest**(`method`: [Method](../enums/_constants_network_.method.md), `data`: Buffer): *RequestBody*

*Defined in [packages/lodestar/src/network/encoder.ts:32](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](../enums/_constants_network_.method.md) |
`data` | Buffer |

**Returns:** *RequestBody*

___

###  decodeResponse

▸ **decodeResponse**(`method`: [Method](../enums/_constants_network_.method.md)): *function*

*Defined in [packages/lodestar/src/network/encoder.ts:69](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹Buffer | BufferList›): *AsyncGenerator‹ResponseBody›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹Buffer &#124; BufferList› |

___

###  encodeRequest

▸ **encodeRequest**(`method`: [Method](../enums/_constants_network_.method.md), `data`: RequestBody): *Buffer*

*Defined in [packages/lodestar/src/network/encoder.ts:23](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](../enums/_constants_network_.method.md) |
`data` | RequestBody |

**Returns:** *Buffer*

___

###  encodeResponse

▸ **encodeResponse**(`method`: [Method](../enums/_constants_network_.method.md)): *function*

*Defined in [packages/lodestar/src/network/encoder.ts:42](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | [Method](../enums/_constants_network_.method.md) |

**Returns:** *function*

▸ (`source`: AsyncIterable‹[ResponseChunk](../modules/_network_interface_.md#responsechunk)›): *AsyncGenerator‹Buffer›*

**Parameters:**

Name | Type |
------ | ------ |
`source` | AsyncIterable‹[ResponseChunk](../modules/_network_interface_.md#responsechunk)› |

___

### `Private` getEncoders

▸ **getEncoders**(`encoding`: [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)): *[IReqRespEncoder](../interfaces/_network_encoders_interface_.ireqrespencoder.md)‹unknown›[]*

*Defined in [packages/lodestar/src/network/encoder.ts:87](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md) |

**Returns:** *[IReqRespEncoder](../interfaces/_network_encoders_interface_.ireqrespencoder.md)‹unknown›[]*

___

### `Private` readLengthPrefixed

▸ **readLengthPrefixed**(`encodedPayload`: Buffer): *Buffer*

*Defined in [packages/lodestar/src/network/encoder.ts:104](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`encodedPayload` | Buffer |

**Returns:** *Buffer*

___

### `Private` readStatus

▸ **readStatus**(`payload`: Buffer): *Buffer*

*Defined in [packages/lodestar/src/network/encoder.ts:116](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | Buffer |

**Returns:** *Buffer*

___

### `Private` writeLengthPrefixed

▸ **writeLengthPrefixed**(`encodedPayload`: Buffer): *Buffer*

*Defined in [packages/lodestar/src/network/encoder.ts:97](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`encodedPayload` | Buffer |

**Returns:** *Buffer*

___

### `Private` writeStatus

▸ **writeStatus**(`payload`: Buffer, `status`: number): *Buffer*

*Defined in [packages/lodestar/src/network/encoder.ts:124](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/encoder.ts#L124)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`payload` | Buffer | - |
`status` | number | 0 |

**Returns:** *Buffer*
