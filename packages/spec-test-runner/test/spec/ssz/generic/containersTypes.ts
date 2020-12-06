import {
  ContainerType,
  ListType,
  VectorType,
  BitListType,
  BitVectorType,
  NumberUintType,
  ByteVectorType,
  byteType,
} from "@chainsafe/ssz";

/* eslint-disable @typescript-eslint/naming-convention */

const Uint8 = new NumberUintType({byteLength: 1});
const Uint16 = new NumberUintType({byteLength: 2});
const Uint32 = new NumberUintType({byteLength: 4});
const Uint64 = new NumberUintType({byteLength: 8});
const Byte = byteType;

/**
 * ```yaml
 * A: byte
 * ```
 */
const SingleFieldTestStruct = new ContainerType({
  fields: {
    // TODO: Should it use "Byte"?
    A: Byte,
  },
});

/**
 * ```yaml
 * A: uint16
 * B: uint16
 * ```
 */
const SmallTestStruct = new ContainerType({
  fields: {
    A: Uint16,
    B: Uint16,
  },
});

/**
 * ```yaml
 * A: uint8
 * B: uint64
 * C: uint32
 * ```
 */
const FixedTestStruct = new ContainerType({
  fields: {
    A: Uint8,
    B: Uint64,
    C: Uint32,
  },
});

/**
 * ```yaml
 * A: uint16
 * B: List[uint16, 1024]
 * C: uint8
 * ```
 */
const VarTestStruct = new ContainerType({
  fields: {
    A: Uint16,
    B: new ListType({elementType: Uint16, limit: 1024}),
    C: Uint8,
  },
});

/**
 * ```yaml
 * A: uint16
 * B: List[uint16, 128]
 * C: uint8
 * D: Bytes[256]
 * E: VarTestStruct
 * F: Vector[FixedTestStruct, 4]
 * G: Vector[VarTestStruct, 2]
 * ```
 */
const ComplexTestStruct = new ContainerType({
  fields: {
    A: Uint16,
    B: new ListType({elementType: Uint16, limit: 128}),
    C: Uint8,
    D: new ByteVectorType({length: 256}),
    E: VarTestStruct,
    F: new VectorType({elementType: FixedTestStruct, length: 4}),
    G: new VectorType({elementType: VarTestStruct, length: 2}),
  },
});

/**
 * ```yaml
 * A: Bitlist[5]
 * B: Bitvector[2]
 * C: Bitvector[1]
 * D: Bitlist[6]
 * E: Bitvector[8]
 * ```
 */
const BitsStruct = new ContainerType({
  fields: {
    A: new BitListType({limit: 5}),
    B: new BitVectorType({length: 2}),
    C: new BitVectorType({length: 1}),
    D: new BitListType({limit: 6}),
    E: new BitVectorType({length: 8}),
  },
});

export const containerTypes = {
  SingleFieldTestStruct,
  SmallTestStruct,
  FixedTestStruct,
  VarTestStruct,
  ComplexTestStruct,
  BitsStruct,
};
