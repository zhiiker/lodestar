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

*Defined in [packages/lodestar/src/chain/interface.ts:81](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar/src/chain/interface.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  receiveBlock

▸ **receiveBlock**(`signedBlock`: SignedBeaconBlock, `trusted?`: boolean): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:80](https://github.com/ChainSafe/lodestar/blob/b8a1302c0/packages/lodestar/src/chain/interface.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |
`trusted?` | boolean |

**Returns:** *Promise‹void›*
