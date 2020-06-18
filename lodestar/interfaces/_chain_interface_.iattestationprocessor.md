[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/interface"](../modules/_chain_interface_.md) › [IAttestationProcessor](_chain_interface_.iattestationprocessor.md)

# Interface: IAttestationProcessor

## Hierarchy

* **IAttestationProcessor**

## Implemented by

* [AttestationProcessor](../classes/_chain_attestation_.attestationprocessor.md)

## Index

### Methods

* [receiveAttestation](_chain_interface_.iattestationprocessor.md#receiveattestation)
* [receiveBlock](_chain_interface_.iattestationprocessor.md#receiveblock)

## Methods

###  receiveAttestation

▸ **receiveAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:87](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  receiveBlock

▸ **receiveBlock**(`signedBlock`: SignedBeaconBlock, `trusted?`: boolean): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:86](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |
`trusted?` | boolean |

**Returns:** *Promise‹void›*
