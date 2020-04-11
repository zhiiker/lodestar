[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["opPool/modules/depositData"](../modules/_oppool_modules_depositdata_.md) › [DepositDataOperations](_oppool_modules_depositdata_.depositdataoperations.md)

# Class: DepositDataOperations

## Hierarchy

* **DepositDataOperations**

## Index

### Constructors

* [constructor](_oppool_modules_depositdata_.depositdataoperations.md#constructor)

### Properties

* [db](_oppool_modules_depositdata_.depositdataoperations.md#protected-db)

### Methods

* [getAll](_oppool_modules_depositdata_.depositdataoperations.md#getall)
* [getAllBetween](_oppool_modules_depositdata_.depositdataoperations.md#getallbetween)
* [receive](_oppool_modules_depositdata_.depositdataoperations.md#receive)
* [removeOld](_oppool_modules_depositdata_.depositdataoperations.md#removeold)

## Constructors

###  constructor

\+ **new DepositDataOperations**(`db`: [DepositDataRepository](_db_api_beacon_repositories_depositdata_.depositdatarepository.md)): *[DepositDataOperations](_oppool_modules_depositdata_.depositdataoperations.md)*

*Defined in [packages/lodestar/src/opPool/modules/depositData.ts:7](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/depositData.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`db` | [DepositDataRepository](_db_api_beacon_repositories_depositdata_.depositdatarepository.md) |

**Returns:** *[DepositDataOperations](_oppool_modules_depositdata_.depositdataoperations.md)*

## Properties

### `Protected` db

• **db**: *[DepositDataRepository](_db_api_beacon_repositories_depositdata_.depositdatarepository.md)*

*Defined in [packages/lodestar/src/opPool/modules/depositData.ts:7](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/depositData.ts#L7)*

## Methods

###  getAll

▸ **getAll**(): *Promise‹DepositData[]›*

*Defined in [packages/lodestar/src/opPool/modules/depositData.ts:17](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/depositData.ts#L17)*

**Returns:** *Promise‹DepositData[]›*

___

###  getAllBetween

▸ **getAllBetween**(`lowerLimit`: number | null, `upperLimit`: number | null): *Promise‹DepositData[]›*

*Defined in [packages/lodestar/src/opPool/modules/depositData.ts:27](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/depositData.ts#L27)*

Limits are not inclusive

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`lowerLimit` | number &#124; null | - |
`upperLimit` | number &#124; null |   |

**Returns:** *Promise‹DepositData[]›*

___

###  receive

▸ **receive**(`index`: number, `value`: DepositData): *Promise‹void›*

*Defined in [packages/lodestar/src/opPool/modules/depositData.ts:13](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/depositData.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`value` | DepositData |

**Returns:** *Promise‹void›*

___

###  removeOld

▸ **removeOld**(`depositCount`: Number64): *Promise‹void›*

*Defined in [packages/lodestar/src/opPool/modules/depositData.ts:35](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/opPool/modules/depositData.ts#L35)*

Removes deposits with index <= depositCount - 1

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`depositCount` | Number64 |   |

**Returns:** *Promise‹void›*
