[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["db/interface"](../modules/_db_interface_.md) › [IValidatorDB](_db_interface_.ivalidatordb.md)

# Interface: IValidatorDB

## Hierarchy

* **IValidatorDB**

## Index

### Methods

* [deleteAttestations](_db_interface_.ivalidatordb.md#deleteattestations)
* [getAttestations](_db_interface_.ivalidatordb.md#getattestations)
* [getBlock](_db_interface_.ivalidatordb.md#getblock)
* [setAttestation](_db_interface_.ivalidatordb.md#setattestation)
* [setBlock](_db_interface_.ivalidatordb.md#setblock)

## Methods

###  deleteAttestations

▸ **deleteAttestations**(`pubKey`: BLSPubkey, `attestation`: Attestation[]): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/db/interface.ts:38](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar-validator/src/db/interface.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`attestation` | Attestation[] |

**Returns:** *Promise‹void›*

___

###  getAttestations

▸ **getAttestations**(`pubKey`: BLSPubkey, `options?`: [IAttestationSearchOptions](_db_interface_.iattestationsearchoptions.md)): *Promise‹Attestation[]›*

*Defined in [packages/lodestar-validator/src/db/interface.ts:30](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar-validator/src/db/interface.ts#L30)*

Searches proposed attestations based on target epoch and validator index

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pubKey` | BLSPubkey | validator signing pubkey |
`options?` | [IAttestationSearchOptions](_db_interface_.iattestationsearchoptions.md) | object contains lower and higher target epoch to search  |

**Returns:** *Promise‹Attestation[]›*

___

###  getBlock

▸ **getBlock**(`pubKey`: BLSPubkey): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar-validator/src/db/interface.ts:18](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar-validator/src/db/interface.ts#L18)*

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

*Defined in [packages/lodestar-validator/src/db/interface.ts:35](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar-validator/src/db/interface.ts#L35)*

Stores attestation proposed by validator with given index

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  setBlock

▸ **setBlock**(`pubKey`: BLSPubkey, `block`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/db/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/9711bce31/packages/lodestar-validator/src/db/interface.ts#L23)*

Stores beacon block proposed by validator with given index

**Parameters:**

Name | Type |
------ | ------ |
`pubKey` | BLSPubkey |
`block` | SignedBeaconBlock |

**Returns:** *Promise‹void›*
