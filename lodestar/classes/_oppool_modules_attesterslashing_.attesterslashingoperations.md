[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["opPool/modules/attesterSlashing"](../modules/_oppool_modules_attesterslashing_.md) › [AttesterSlashingOperations](_oppool_modules_attesterslashing_.attesterslashingoperations.md)

# Class: AttesterSlashingOperations

## Hierarchy

* [OperationsModule](_oppool_modules_abstract_.operationsmodule.md)‹AttesterSlashing›

  ↳ **AttesterSlashingOperations**

## Index

### Constructors

* [constructor](_oppool_modules_attesterslashing_.attesterslashingoperations.md#constructor)

### Properties

* [db](_oppool_modules_attesterslashing_.attesterslashingoperations.md#protected-db)

### Methods

* [getAll](_oppool_modules_attesterslashing_.attesterslashingoperations.md#getall)
* [hasAll](_oppool_modules_attesterslashing_.attesterslashingoperations.md#hasall)
* [receive](_oppool_modules_attesterslashing_.attesterslashingoperations.md#receive)
* [remove](_oppool_modules_attesterslashing_.attesterslashingoperations.md#remove)

## Constructors

###  constructor

\+ **new AttesterSlashingOperations**(`db`: [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹AttesterSlashing›): *[AttesterSlashingOperations](_oppool_modules_attesterslashing_.attesterslashingoperations.md)*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[constructor](_oppool_modules_abstract_.operationsmodule.md#constructor)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`db` | [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹AttesterSlashing› |

**Returns:** *[AttesterSlashingOperations](_oppool_modules_attesterslashing_.attesterslashingoperations.md)*

## Properties

### `Protected` db

• **db**: *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹AttesterSlashing›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[db](_oppool_modules_abstract_.operationsmodule.md#protected-db)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

## Methods

###  getAll

▸ **getAll**(): *Promise‹AttesterSlashing[]›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[getAll](_oppool_modules_abstract_.operationsmodule.md#getall)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:16](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/opPool/modules/abstract.ts#L16)*

**Returns:** *Promise‹AttesterSlashing[]›*

___

###  hasAll

▸ **hasAll**(`attesterIndices`: ValidatorIndex[]): *Promise‹boolean›*

*Defined in [packages/lodestar/src/opPool/modules/attesterSlashing.ts:6](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/opPool/modules/attesterSlashing.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`attesterIndices` | ValidatorIndex[] | [] |

**Returns:** *Promise‹boolean›*

___

###  receive

▸ **receive**(`value`: AttesterSlashing): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[receive](_oppool_modules_abstract_.operationsmodule.md#receive)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/opPool/modules/abstract.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | AttesterSlashing |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`values`: ArrayLike‹AttesterSlashing›): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[remove](_oppool_modules_abstract_.operationsmodule.md#remove)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/opPool/modules/abstract.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹AttesterSlashing› |

**Returns:** *Promise‹void›*
