[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/encoders/snappy-frames/uncompress"](_network_encoders_snappy_frames_uncompress_.md)

# External module: "network/encoders/snappy-frames/uncompress"

## Index

### Enumerations

* [ChunkType](../enums/_network_encoders_snappy_frames_uncompress_.chunktype.md)

### Classes

* [SnappyFramesUncompress](../classes/_network_encoders_snappy_frames_uncompress_.snappyframesuncompress.md)

### Interfaces

* [IUncompressState](../interfaces/_network_encoders_snappy_frames_uncompress_.iuncompressstate.md)

### Variables

* [IDENTIFIER](_network_encoders_snappy_frames_uncompress_.md#const-identifier)

### Functions

* [getChunkType](_network_encoders_snappy_frames_uncompress_.md#getchunktype)
* [getFrameSize](_network_encoders_snappy_frames_uncompress_.md#getframesize)

## Variables

### `Const` IDENTIFIER

• **IDENTIFIER**: *Buffer‹›* = new Buffer([
  0x73, 0x4e, 0x61, 0x50, 0x70, 0x59
])

*Defined in [packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts:5](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts#L5)*

## Functions

###  getChunkType

▸ **getChunkType**(`value`: number): *[ChunkType](../enums/_network_encoders_snappy_frames_uncompress_.chunktype.md)*

*Defined in [packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts:88](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[ChunkType](../enums/_network_encoders_snappy_frames_uncompress_.chunktype.md)*

___

###  getFrameSize

▸ **getFrameSize**(`buffer`: BufferList, `offset`: number): *number*

*Defined in [packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts:84](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | BufferList |
`offset` | number |

**Returns:** *number*
