[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/validator/interface"](../modules/_db_api_validator_interface_.md) › [IValidatorDB](_db_api_validator_interface_.ivalidatordb.md)

# Interface: IValidatorDB

## Hierarchy

* **IValidatorDB**

## Implemented by

* [ValidatorDB](../classes/_db_api_validator_validator_.validatordb.md)

## Index

### Methods

* [deleteAttestations](_db_api_validator_interface_.ivalidatordb.md#deleteattestations)
* [getAttestations](_db_api_validator_interface_.ivalidatordb.md#getattestations)
* [getBlock](_db_api_validator_interface_.ivalidatordb.md#getblock)
* [setAttestation](_db_api_validator_interface_.ivalidatordb.md#setattestation)
* [setBlock](_db_api_validator_interface_.ivalidatordb.md#setblock)

## Methods

###  deleteAttestations

▸ **deleteAttestations**(`pubKey`: BLSPubkey, `attestation`: Attestation[]): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/validator/interface.ts:38](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/db/api/validator/interface.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`attestation` | Attestation[] |

**Returns:** *Promise‹void›*

___

###  getAttestations

▸ **getAttestations**(`pubKey`: BLSPubkey, `options?`: [IAttestationSearchOptions](_db_api_validator_interface_.iattestationsearchoptions.md)): *Promise‹Attestation[]›*

*Defined in [packages/lodestar/src/db/api/validator/interface.ts:30](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/db/api/validator/interface.ts#L30)*

Searches proposed attestations based on target epoch and validator index

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pubKey` | BLSPubkey | validator signing pubkey |
`options?` | [IAttestationSearchOptions](_db_api_validator_interface_.iattestationsearchoptions.md) | object contains lower and higher target epoch to search  |

**Returns:** *Promise‹Attestation[]›*

___

###  getBlock

▸ **getBlock**(`pubKey`: BLSPubkey): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar/src/db/api/validator/interface.ts:18](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/db/api/validator/interface.ts#L18)*

Obtains last proposed beacon block
by validator with given index

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  setAttestation

▸ **setAttestation**(`pubKey`: BLSPubkey, `attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/validator/interface.ts:35](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/db/api/validator/interface.ts#L35)*

Stores attestation proposed by validator with given index

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  setBlock

▸ **setBlock**(`pubKey`: BLSPubkey, `signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/validator/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/db/api/validator/interface.ts#L23)*

Stores beacon block proposed by validator with given index

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*
