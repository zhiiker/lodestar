[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/encoders/interface"](../modules/_network_encoders_interface_.md) › [IDecompressor](_network_encoders_interface_.idecompressor.md)

# Interface: IDecompressor

## Hierarchy

* **IDecompressor**

## Implemented by

* [SnappyFramesUncompress](../classes/_network_encoders_snappy_frames_uncompress_.snappyframesuncompress.md)

## Index

### Methods

* [reset](_network_encoders_interface_.idecompressor.md#reset)
* [uncompress](_network_encoders_interface_.idecompressor.md#uncompress)

## Methods

###  reset

▸ **reset**(): *void*

*Defined in [packages/lodestar/src/network/encoders/interface.ts:7](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/encoders/interface.ts#L7)*

**Returns:** *void*

___

###  uncompress

▸ **uncompress**(`chunk`: Buffer): *Buffer | null*

*Defined in [packages/lodestar/src/network/encoders/interface.ts:5](https://github.com/ChainSafe/lodestar/blob/f41191172/packages/lodestar/src/network/encoders/interface.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer |

**Returns:** *Buffer | null*
