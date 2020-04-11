[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["opPool/modules/proposerSlashing"](../modules/_oppool_modules_proposerslashing_.md) › [ProposerSlashingOperations](_oppool_modules_proposerslashing_.proposerslashingoperations.md)

# Class: ProposerSlashingOperations

## Hierarchy

* [OperationsModule](_oppool_modules_abstract_.operationsmodule.md)‹ProposerSlashing›

  ↳ **ProposerSlashingOperations**

## Index

### Constructors

* [constructor](_oppool_modules_proposerslashing_.proposerslashingoperations.md#constructor)

### Properties

* [db](_oppool_modules_proposerslashing_.proposerslashingoperations.md#protected-db)

### Methods

* [getAll](_oppool_modules_proposerslashing_.proposerslashingoperations.md#getall)
* [receive](_oppool_modules_proposerslashing_.proposerslashingoperations.md#receive)
* [remove](_oppool_modules_proposerslashing_.proposerslashingoperations.md#remove)

## Constructors

###  constructor

\+ **new ProposerSlashingOperations**(`db`: [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹ProposerSlashing›): *[ProposerSlashingOperations](_oppool_modules_proposerslashing_.proposerslashingoperations.md)*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[constructor](_oppool_modules_abstract_.operationsmodule.md#constructor)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`db` | [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹ProposerSlashing› |

**Returns:** *[ProposerSlashingOperations](_oppool_modules_proposerslashing_.proposerslashingoperations.md)*

## Properties

### `Protected` db

• **db**: *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹ProposerSlashing›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[db](_oppool_modules_abstract_.operationsmodule.md#protected-db)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

## Methods

###  getAll

▸ **getAll**(): *Promise‹ProposerSlashing[]›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[getAll](_oppool_modules_abstract_.operationsmodule.md#getall)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:16](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L16)*

**Returns:** *Promise‹ProposerSlashing[]›*

___

###  receive

▸ **receive**(`value`: ProposerSlashing): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[receive](_oppool_modules_abstract_.operationsmodule.md#receive)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ProposerSlashing |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`values`: ArrayLike‹ProposerSlashing›): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[remove](_oppool_modules_abstract_.operationsmodule.md#remove)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/abstract.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹ProposerSlashing› |

**Returns:** *Promise‹void›*
