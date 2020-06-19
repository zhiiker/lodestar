[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/metadata/metadata"](../modules/_network_metadata_metadata_.md) › [MetadataController](_network_metadata_metadata_.metadatacontroller.md)

# Class: MetadataController

## Hierarchy

* **MetadataController**

## Index

### Constructors

* [constructor](_network_metadata_metadata_.metadatacontroller.md#constructor)

### Properties

* [_metadata](_network_metadata_metadata_.metadatacontroller.md#private-_metadata)
* [chain](_network_metadata_metadata_.metadatacontroller.md#private-chain)
* [config](_network_metadata_metadata_.metadatacontroller.md#private-config)
* [enr](_network_metadata_metadata_.metadatacontroller.md#private-optional-enr)
* [logger](_network_metadata_metadata_.metadatacontroller.md#private-logger)

### Accessors

* [attnets](_network_metadata_metadata_.metadatacontroller.md#attnets)
* [metadata](_network_metadata_metadata_.metadatacontroller.md#metadata)
* [seqNumber](_network_metadata_metadata_.metadatacontroller.md#seqnumber)

### Methods

* [handleForkDigest](_network_metadata_metadata_.metadatacontroller.md#private-handleforkdigest)
* [start](_network_metadata_metadata_.metadatacontroller.md#start)
* [stop](_network_metadata_metadata_.metadatacontroller.md#stop)

## Constructors

###  constructor

\+ **new MetadataController**(`opts`: [IMetadataOpts](../interfaces/_network_metadata_metadata_.imetadataopts.md), `modules`: [IMetadataModules](../interfaces/_network_metadata_metadata_.imetadatamodules.md)): *[MetadataController](_network_metadata_metadata_.metadatacontroller.md)*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:23](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IMetadataOpts](../interfaces/_network_metadata_metadata_.imetadataopts.md) |
`modules` | [IMetadataModules](../interfaces/_network_metadata_metadata_.imetadatamodules.md) |

**Returns:** *[MetadataController](_network_metadata_metadata_.metadatacontroller.md)*

## Properties

### `Private` _metadata

• **_metadata**: *Metadata*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:22](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L22)*

___

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:21](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L21)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:20](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L20)*

___

### `Private` `Optional` enr

• **enr**? : *ENR*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:19](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L19)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:23](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L23)*

## Accessors

###  attnets

• **get attnets**(): *BitVector*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:49](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L49)*

**Returns:** *BitVector*

• **set attnets**(`attnets`: BitVector): *void*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:53](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`attnets` | BitVector |

**Returns:** *void*

___

###  metadata

• **get metadata**(): *Metadata*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:61](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L61)*

**Returns:** *Metadata*

___

###  seqNumber

• **get seqNumber**(): *bigint*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:45](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L45)*

**Returns:** *bigint*

## Methods

### `Private` handleForkDigest

▸ **handleForkDigest**(`forkDigest`: ForkDigest): *Promise‹void›*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:65](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(`enr`: ENR): *Promise‹void›*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:32](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`enr` | ENR |

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:41](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/metadata/metadata.ts#L41)*

**Returns:** *Promise‹void›*
