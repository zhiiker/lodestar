[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/validator/validator"](../modules/_db_api_validator_validator_.md) › [ValidatorDB](_db_api_validator_validator_.validatordb.md)

# Class: ValidatorDB

## Hierarchy

* [DatabaseService](_db_api_abstract_.databaseservice.md)

  ↳ **ValidatorDB**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md)
* [IValidatorDB](../interfaces/_db_api_validator_interface_.ivalidatordb.md)

## Index

### Constructors

* [constructor](_db_api_validator_validator_.validatordb.md#constructor)

### Properties

* [config](_db_api_validator_validator_.validatordb.md#protected-config)
* [db](_db_api_validator_validator_.validatordb.md#protected-db)

### Methods

* [deleteAttestations](_db_api_validator_validator_.validatordb.md#deleteattestations)
* [getAttestations](_db_api_validator_validator_.validatordb.md#getattestations)
* [getBlock](_db_api_validator_validator_.validatordb.md#getblock)
* [incrementPubKey](_db_api_validator_validator_.validatordb.md#private-incrementpubkey)
* [setAttestation](_db_api_validator_validator_.validatordb.md#setattestation)
* [setBlock](_db_api_validator_validator_.validatordb.md#setblock)
* [start](_db_api_validator_validator_.validatordb.md#start)
* [stop](_db_api_validator_validator_.validatordb.md#stop)

## Constructors

###  constructor

\+ **new ValidatorDB**(`opts`: [IDatabaseApiOptions](../interfaces/_db_api_abstract_.idatabaseapioptions.md)): *[ValidatorDB](_db_api_validator_validator_.validatordb.md)*

*Overrides [DatabaseService](_db_api_abstract_.databaseservice.md).[constructor](_db_api_abstract_.databaseservice.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/validator/validator.ts:14](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/validator/validator.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IDatabaseApiOptions](../interfaces/_db_api_abstract_.idatabaseapioptions.md) |

**Returns:** *[ValidatorDB](_db_api_validator_validator_.validatordb.md)*

## Properties

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[config](_db_api_abstract_.databaseservice.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/abstract.ts#L12)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[db](_db_api_abstract_.databaseservice.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:13](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/abstract.ts#L13)*

## Methods

###  deleteAttestations

▸ **deleteAttestations**(`pubKey`: BLSPubkey, `attestations`: Attestation[]): *Promise‹void›*

*Implementation of [IValidatorDB](../interfaces/_db_api_validator_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar/src/db/api/validator/validator.ts:54](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/validator/validator.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`attestations` | Attestation[] |

**Returns:** *Promise‹void›*

___

###  getAttestations

▸ **getAttestations**(`pubKey`: BLSPubkey, `options`: [IAttestationSearchOptions](../interfaces/_db_api_validator_interface_.iattestationsearchoptions.md)): *Promise‹Attestation[]›*

*Implementation of [IValidatorDB](../interfaces/_db_api_validator_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar/src/db/api/validator/validator.ts:36](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/validator/validator.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`options` | [IAttestationSearchOptions](../interfaces/_db_api_validator_interface_.iattestationsearchoptions.md) |

**Returns:** *Promise‹Attestation[]›*

___

###  getBlock

▸ **getBlock**(`pubKey`: BLSPubkey): *Promise‹SignedBeaconBlock | null›*

*Implementation of [IValidatorDB](../interfaces/_db_api_validator_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar/src/db/api/validator/validator.ts:19](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/validator/validator.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

### `Private` incrementPubKey

▸ **incrementPubKey**(`pubKey`: BLSPubkey): *BLSPubkey*

*Defined in [packages/lodestar/src/db/api/validator/validator.ts:62](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/validator/validator.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |

**Returns:** *BLSPubkey*

___

###  setAttestation

▸ **setAttestation**(`pubKey`: BLSPubkey, `attestation`: Attestation): *Promise‹void›*

*Implementation of [IValidatorDB](../interfaces/_db_api_validator_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar/src/db/api/validator/validator.ts:47](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/validator/validator.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  setBlock

▸ **setBlock**(`pubKey`: BLSPubkey, `signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Implementation of [IValidatorDB](../interfaces/_db_api_validator_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar/src/db/api/validator/validator.ts:29](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/validator/validator.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[start](_db_api_abstract_.databaseservice.md#start)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/abstract.ts#L20)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[stop](_db_api_abstract_.databaseservice.md#stop)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/db/api/abstract.ts#L24)*

**Returns:** *Promise‹void›*
