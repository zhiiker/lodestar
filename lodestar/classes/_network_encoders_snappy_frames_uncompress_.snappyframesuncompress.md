[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/encoders/snappy-frames/uncompress"](../modules/_network_encoders_snappy_frames_uncompress_.md) › [SnappyFramesUncompress](_network_encoders_snappy_frames_uncompress_.snappyframesuncompress.md)

# Class: SnappyFramesUncompress

## Hierarchy

* **SnappyFramesUncompress**

## Implements

* [IDecompressor](../interfaces/_network_encoders_interface_.idecompressor.md)

## Index

### Properties

* [buffer](_network_encoders_snappy_frames_uncompress_.snappyframesuncompress.md#private-buffer)

### Methods

* [reset](_network_encoders_snappy_frames_uncompress_.snappyframesuncompress.md#reset)
* [uncompress](_network_encoders_snappy_frames_uncompress_.snappyframesuncompress.md#uncompress)

### Object literals

* [state](_network_encoders_snappy_frames_uncompress_.snappyframesuncompress.md#private-state)

## Properties

### `Private` buffer

• **buffer**: *BufferList‹›* = new BufferList()

*Defined in [packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts:11](https://github.com/ChainSafe/lodestar/blob/cce68e126/packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts#L11)*

## Methods

###  reset

▸ **reset**(): *void*

*Implementation of [IDecompressor](../interfaces/_network_encoders_interface_.idecompressor.md)*

*Defined in [packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts:65](https://github.com/ChainSafe/lodestar/blob/cce68e126/packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts#L65)*

**Returns:** *void*

___

###  uncompress

▸ **uncompress**(`chunk`: Buffer): *Buffer | null*

*Implementation of [IDecompressor](../interfaces/_network_encoders_interface_.idecompressor.md)*

*Defined in [packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts:22](https://github.com/ChainSafe/lodestar/blob/cce68e126/packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts#L22)*

Accepts chunk of data containing some part of snappy frames stream

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer |

**Returns:** *Buffer | null*

Buffer if there is one or more whole frames, null if it's partial

## Object literals

### `Private` state

### ▪ **state**: *object*

*Defined in [packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts:13](https://github.com/ChainSafe/lodestar/blob/cce68e126/packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts#L13)*

###  foundIdentifier

• **foundIdentifier**: *false* = false

*Defined in [packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts:14](https://github.com/ChainSafe/lodestar/blob/cce68e126/packages/lodestar/src/network/encoders/snappy-frames/uncompress.ts#L14)*
