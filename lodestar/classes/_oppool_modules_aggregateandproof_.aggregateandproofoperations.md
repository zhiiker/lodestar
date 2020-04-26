[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["opPool/modules/aggregateAndProof"](../modules/_oppool_modules_aggregateandproof_.md) › [AggregateAndProofOperations](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md)

# Class: AggregateAndProofOperations

## Hierarchy

* [OperationsModule](_oppool_modules_abstract_.operationsmodule.md)‹AggregateAndProof›

  ↳ **AggregateAndProofOperations**

## Index

### Constructors

* [constructor](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#constructor)

### Properties

* [config](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#protected-config)
* [db](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#protected-db)

### Methods

* [getAll](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#getall)
* [getBlockAttestations](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#getblockattestations)
* [getByAggregatorAndSlot](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#getbyaggregatorandslot)
* [hasAttestation](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#hasattestation)
* [receive](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#receive)
* [remove](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#remove)
* [removeIncluded](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#removeincluded)
* [removeOld](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md#removeold)

## Constructors

###  constructor

\+ **new AggregateAndProofOperations**(`db`: [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹AggregateAndProof›, `__namedParameters`: object): *[AggregateAndProofOperations](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md)*

*Overrides [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[constructor](_oppool_modules_abstract_.operationsmodule.md#constructor)*

*Defined in [packages/lodestar/src/opPool/modules/aggregateAndProof.ts:10](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/aggregateAndProof.ts#L10)*

**Parameters:**

▪ **db**: *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹AggregateAndProof›*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |

**Returns:** *[AggregateAndProofOperations](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md)*

## Properties

### `Protected` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/opPool/modules/aggregateAndProof.ts:10](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/aggregateAndProof.ts#L10)*

___

### `Protected` db

• **db**: *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹AggregateAndProof›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[db](_oppool_modules_abstract_.operationsmodule.md#protected-db)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

## Methods

###  getAll

▸ **getAll**(): *Promise‹AggregateAndProof[]›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[getAll](_oppool_modules_abstract_.operationsmodule.md#getall)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:16](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/abstract.ts#L16)*

**Returns:** *Promise‹AggregateAndProof[]›*

___

###  getBlockAttestations

▸ **getBlockAttestations**(`state`: BeaconState): *Promise‹Attestation[]›*

*Defined in [packages/lodestar/src/opPool/modules/aggregateAndProof.ts:17](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/aggregateAndProof.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | BeaconState |

**Returns:** *Promise‹Attestation[]›*

___

###  getByAggregatorAndSlot

▸ **getByAggregatorAndSlot**(`aggregatorIndex`: ValidatorIndex, `slot`: Slot): *Promise‹Attestation[]›*

*Defined in [packages/lodestar/src/opPool/modules/aggregateAndProof.ts:28](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/aggregateAndProof.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregatorIndex` | ValidatorIndex |
`slot` | Slot |

**Returns:** *Promise‹Attestation[]›*

___

###  hasAttestation

▸ **hasAttestation**(`attestation`: Attestation): *Promise‹boolean›*

*Defined in [packages/lodestar/src/opPool/modules/aggregateAndProof.ts:35](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/aggregateAndProof.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹boolean›*

___

###  receive

▸ **receive**(`value`: AggregateAndProof): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[receive](_oppool_modules_abstract_.operationsmodule.md#receive)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/abstract.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | AggregateAndProof |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`values`: ArrayLike‹AggregateAndProof›): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[remove](_oppool_modules_abstract_.operationsmodule.md#remove)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/abstract.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹AggregateAndProof› |

**Returns:** *Promise‹void›*

___

###  removeIncluded

▸ **removeIncluded**(`attestations`: ArrayLike‹Attestation›): *Promise‹void›*

*Defined in [packages/lodestar/src/opPool/modules/aggregateAndProof.ts:42](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/aggregateAndProof.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`attestations` | ArrayLike‹Attestation› |

**Returns:** *Promise‹void›*

___

###  removeOld

▸ **removeOld**(`state`: BeaconState): *Promise‹void›*

*Defined in [packages/lodestar/src/opPool/modules/aggregateAndProof.ts:51](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/aggregateAndProof.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | BeaconState |

**Returns:** *Promise‹void›*
