[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["opPool/modules/abstract"](../modules/_oppool_modules_abstract_.md) › [OperationsModule](_oppool_modules_abstract_.operationsmodule.md)

# Class: OperationsModule <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **OperationsModule**

  ↳ [AttestationOperations](_oppool_modules_attestation_.attestationoperations.md)

  ↳ [AggregateAndProofOperations](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md)

  ↳ [AttesterSlashingOperations](_oppool_modules_attesterslashing_.attesterslashingoperations.md)

  ↳ [ProposerSlashingOperations](_oppool_modules_proposerslashing_.proposerslashingoperations.md)

  ↳ [VoluntaryExitOperations](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md)

## Index

### Constructors

* [constructor](_oppool_modules_abstract_.operationsmodule.md#constructor)

### Properties

* [db](_oppool_modules_abstract_.operationsmodule.md#protected-db)

### Methods

* [getAll](_oppool_modules_abstract_.operationsmodule.md#getall)
* [receive](_oppool_modules_abstract_.operationsmodule.md#receive)
* [remove](_oppool_modules_abstract_.operationsmodule.md#remove)

## Constructors

###  constructor

\+ **new OperationsModule**(`db`: [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹T›): *[OperationsModule](_oppool_modules_abstract_.operationsmodule.md)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`db` | [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹T› |

**Returns:** *[OperationsModule](_oppool_modules_abstract_.operationsmodule.md)*

## Properties

### `Protected` db

• **db**: *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹T›*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

## Methods

###  getAll

▸ **getAll**(): *Promise‹T[]›*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:16](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L16)*

**Returns:** *Promise‹T[]›*

___

###  receive

▸ **receive**(`value`: T): *Promise‹void›*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`values`: ArrayLike‹T›): *Promise‹void›*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹T› |

**Returns:** *Promise‹void›*
