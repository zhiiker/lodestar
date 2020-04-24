[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/metadata/metadata"](../modules/_network_metadata_metadata_.md) › [MetadataController](_network_metadata_metadata_.metadatacontroller.md)

# Class: MetadataController

## Hierarchy

* **MetadataController**

## Index

### Constructors

* [constructor](_network_metadata_metadata_.metadatacontroller.md#constructor)

### Properties

* [_metadata](_network_metadata_metadata_.metadatacontroller.md#private-_metadata)
* [config](_network_metadata_metadata_.metadatacontroller.md#private-config)
* [enr](_network_metadata_metadata_.metadatacontroller.md#optional-enr)

### Accessors

* [attnets](_network_metadata_metadata_.metadatacontroller.md#attnets)
* [metadata](_network_metadata_metadata_.metadatacontroller.md#metadata)
* [seqNumber](_network_metadata_metadata_.metadatacontroller.md#seqnumber)

## Constructors

###  constructor

\+ **new MetadataController**(`opts`: [IMetadataOpts](../interfaces/_network_metadata_metadata_.imetadataopts.md), `modules`: [IMetadataModules](../interfaces/_network_metadata_metadata_.imetadatamodules.md)): *[MetadataController](_network_metadata_metadata_.metadatacontroller.md)*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:19](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/metadata/metadata.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IMetadataOpts](../interfaces/_network_metadata_metadata_.imetadataopts.md) |
`modules` | [IMetadataModules](../interfaces/_network_metadata_metadata_.imetadatamodules.md) |

**Returns:** *[MetadataController](_network_metadata_metadata_.metadatacontroller.md)*

## Properties

### `Private` _metadata

• **_metadata**: *Metadata*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:19](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/metadata/metadata.ts#L19)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:18](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/metadata/metadata.ts#L18)*

___

### `Optional` enr

• **enr**? : *ENR*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:16](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/metadata/metadata.ts#L16)*

## Accessors

###  attnets

• **get attnets**(): *BitVector*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:34](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/metadata/metadata.ts#L34)*

**Returns:** *BitVector*

• **set attnets**(`attnets`: BitVector): *void*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:38](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/metadata/metadata.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`attnets` | BitVector |

**Returns:** *void*

___

###  metadata

• **get metadata**(): *Metadata*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:46](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/metadata/metadata.ts#L46)*

**Returns:** *Metadata*

___

###  seqNumber

• **get seqNumber**(): *bigint*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:30](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/network/metadata/metadata.ts#L30)*

**Returns:** *bigint*
