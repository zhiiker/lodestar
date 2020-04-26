[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["opPool/modules/voluntaryExit"](../modules/_oppool_modules_voluntaryexit_.md) › [VoluntaryExitOperations](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md)

# Class: VoluntaryExitOperations

## Hierarchy

* [OperationsModule](_oppool_modules_abstract_.operationsmodule.md)‹SignedVoluntaryExit›

  ↳ **VoluntaryExitOperations**

## Index

### Constructors

* [constructor](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md#constructor)

### Properties

* [db](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md#protected-db)

### Methods

* [getAll](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md#getall)
* [receive](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md#receive)
* [remove](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md#remove)

## Constructors

###  constructor

\+ **new VoluntaryExitOperations**(`db`: [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹SignedVoluntaryExit›): *[VoluntaryExitOperations](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md)*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[constructor](_oppool_modules_abstract_.operationsmodule.md#constructor)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`db` | [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹SignedVoluntaryExit› |

**Returns:** *[VoluntaryExitOperations](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md)*

## Properties

### `Protected` db

• **db**: *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹SignedVoluntaryExit›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[db](_oppool_modules_abstract_.operationsmodule.md#protected-db)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

## Methods

###  getAll

▸ **getAll**(): *Promise‹SignedVoluntaryExit[]›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[getAll](_oppool_modules_abstract_.operationsmodule.md#getall)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:16](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/abstract.ts#L16)*

**Returns:** *Promise‹SignedVoluntaryExit[]›*

___

###  receive

▸ **receive**(`value`: SignedVoluntaryExit): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[receive](_oppool_modules_abstract_.operationsmodule.md#receive)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/abstract.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | SignedVoluntaryExit |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`values`: ArrayLike‹SignedVoluntaryExit›): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[remove](_oppool_modules_abstract_.operationsmodule.md#remove)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/opPool/modules/abstract.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹SignedVoluntaryExit› |

**Returns:** *Promise‹void›*
