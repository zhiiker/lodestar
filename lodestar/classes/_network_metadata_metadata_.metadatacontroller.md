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
* [enr](_network_metadata_metadata_.metadatacontroller.md#optional-enr)
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

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:25](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IMetadataOpts](../interfaces/_network_metadata_metadata_.imetadataopts.md) |
`modules` | [IMetadataModules](../interfaces/_network_metadata_metadata_.imetadatamodules.md) |

**Returns:** *[MetadataController](_network_metadata_metadata_.metadatacontroller.md)*

## Properties

### `Private` _metadata

• **_metadata**: *Metadata*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:24](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L24)*

___

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:23](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L23)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:22](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L22)*

___

### `Optional` enr

• **enr**? : *ENR*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:20](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L20)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:25](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L25)*

## Accessors

###  attnets

• **get attnets**(): *BitVector*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:51](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L51)*

**Returns:** *BitVector*

• **set attnets**(`attnets`: BitVector): *void*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:55](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`attnets` | BitVector |

**Returns:** *void*

___

###  metadata

• **get metadata**(): *Metadata*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:63](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L63)*

**Returns:** *Metadata*

___

###  seqNumber

• **get seqNumber**(): *bigint*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:47](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L47)*

**Returns:** *bigint*

## Methods

### `Private` handleForkDigest

▸ **handleForkDigest**(`forkDigest`: ForkDigest): *Promise‹void›*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:67](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:35](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L35)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/network/metadata/metadata.ts:43](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/metadata/metadata.ts#L43)*

**Returns:** *Promise‹void›*
