[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["opPool/modules/attestation"](../modules/_oppool_modules_attestation_.md) › [AttestationOperations](_oppool_modules_attestation_.attestationoperations.md)

# Class: AttestationOperations

## Hierarchy

* [OperationsModule](_oppool_modules_abstract_.operationsmodule.md)‹Attestation›

  ↳ **AttestationOperations**

## Index

### Constructors

* [constructor](_oppool_modules_attestation_.attestationoperations.md#constructor)

### Properties

* [config](_oppool_modules_attestation_.attestationoperations.md#private-config)
* [db](_oppool_modules_attestation_.attestationoperations.md#protected-db)

### Methods

* [geAttestationsBySlot](_oppool_modules_attestation_.attestationoperations.md#geattestationsbyslot)
* [getAll](_oppool_modules_attestation_.attestationoperations.md#getall)
* [getCommiteeAttestations](_oppool_modules_attestation_.attestationoperations.md#getcommiteeattestations)
* [receive](_oppool_modules_attestation_.attestationoperations.md#receive)
* [remove](_oppool_modules_attestation_.attestationoperations.md#remove)
* [removeOld](_oppool_modules_attestation_.attestationoperations.md#removeold)

## Constructors

###  constructor

\+ **new AttestationOperations**(`db`: [BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹Attestation›, `__namedParameters`: object): *[AttestationOperations](_oppool_modules_attestation_.attestationoperations.md)*

*Overrides [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[constructor](_oppool_modules_abstract_.operationsmodule.md#constructor)*

*Defined in [packages/lodestar/src/opPool/modules/attestation.ts:8](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/modules/attestation.ts#L8)*

**Parameters:**

▪ **db**: *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹Attestation›*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |

**Returns:** *[AttestationOperations](_oppool_modules_attestation_.attestationoperations.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/opPool/modules/attestation.ts:8](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/modules/attestation.ts#L8)*

___

### `Protected` db

• **db**: *[BulkRepository](_db_api_beacon_repository_.bulkrepository.md)‹Attestation›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[db](_oppool_modules_abstract_.operationsmodule.md#protected-db)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:6](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/modules/abstract.ts#L6)*

## Methods

###  geAttestationsBySlot

▸ **geAttestationsBySlot**(`slot`: Slot): *Promise‹Attestation[]›*

*Defined in [packages/lodestar/src/opPool/modules/attestation.ts:25](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/modules/attestation.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹Attestation[]›*

___

###  getAll

▸ **getAll**(): *Promise‹Attestation[]›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[getAll](_oppool_modules_abstract_.operationsmodule.md#getall)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:16](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/modules/abstract.ts#L16)*

**Returns:** *Promise‹Attestation[]›*

___

###  getCommiteeAttestations

▸ **getCommiteeAttestations**(`epoch`: Epoch, `committeeIndex`: CommitteeIndex): *Promise‹Attestation[]›*

*Defined in [packages/lodestar/src/opPool/modules/attestation.ts:15](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/modules/attestation.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |
`committeeIndex` | CommitteeIndex |

**Returns:** *Promise‹Attestation[]›*

___

###  receive

▸ **receive**(`value`: Attestation): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[receive](_oppool_modules_abstract_.operationsmodule.md#receive)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/modules/abstract.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Attestation |

**Returns:** *Promise‹void›*

___

###  remove

▸ **remove**(`values`: ArrayLike‹Attestation›): *Promise‹void›*

*Inherited from [OperationsModule](_oppool_modules_abstract_.operationsmodule.md).[remove](_oppool_modules_abstract_.operationsmodule.md#remove)*

*Defined in [packages/lodestar/src/opPool/modules/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/modules/abstract.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | ArrayLike‹Attestation› |

**Returns:** *Promise‹void›*

___

###  removeOld

▸ **removeOld**(`state`: BeaconState): *Promise‹void›*

*Defined in [packages/lodestar/src/opPool/modules/attestation.ts:30](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/modules/attestation.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | BeaconState |

**Returns:** *Promise‹void›*
