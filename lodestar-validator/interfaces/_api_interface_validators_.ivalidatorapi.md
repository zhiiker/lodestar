[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["api/interface/validators"](../modules/_api_interface_validators_.md) › [IValidatorApi](_api_interface_validators_.ivalidatorapi.md)

# Interface: IValidatorApi

## Hierarchy

* **IValidatorApi**

## Implemented by

* [RestValidatorApi](../classes/_api_impl_rest_validator_validator_.restvalidatorapi.md)

## Index

### Methods

* [getAttesterDuties](_api_interface_validators_.ivalidatorapi.md#getattesterduties)
* [getProposerDuties](_api_interface_validators_.ivalidatorapi.md#getproposerduties)
* [getWireAttestations](_api_interface_validators_.ivalidatorapi.md#getwireattestations)
* [produceAggregateAndProof](_api_interface_validators_.ivalidatorapi.md#produceaggregateandproof)
* [produceAttestation](_api_interface_validators_.ivalidatorapi.md#produceattestation)
* [produceBlock](_api_interface_validators_.ivalidatorapi.md#produceblock)
* [publishAggregateAndProof](_api_interface_validators_.ivalidatorapi.md#publishaggregateandproof)
* [publishAttestation](_api_interface_validators_.ivalidatorapi.md#publishattestation)
* [publishBlock](_api_interface_validators_.ivalidatorapi.md#publishblock)
* [subscribeCommitteeSubnet](_api_interface_validators_.ivalidatorapi.md#subscribecommitteesubnet)

## Methods

###  getAttesterDuties

▸ **getAttesterDuties**(`epoch`: Epoch, `validatorPubKeys`: BLSPubkey[]): *Promise‹AttesterDuty[]›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:20](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |
`validatorPubKeys` | BLSPubkey[] |

**Returns:** *Promise‹AttesterDuty[]›*

___

###  getProposerDuties

▸ **getProposerDuties**(`epoch`: Epoch, `validatorPubKeys`: BLSPubkey[]): *Promise‹ProposerDuty[]›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:18](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |
`validatorPubKeys` | BLSPubkey[] |

**Returns:** *Promise‹ProposerDuty[]›*

___

###  getWireAttestations

▸ **getWireAttestations**(`epoch`: Epoch, `committeeIndex`: CommitteeIndex): *Promise‹Attestation[]›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:50](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |
`committeeIndex` | CommitteeIndex |

**Returns:** *Promise‹Attestation[]›*

___

###  produceAggregateAndProof

▸ **produceAggregateAndProof**(`attestationData`: AttestationData, `aggregator`: BLSPubkey): *Promise‹AggregateAndProof›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:52](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`attestationData` | AttestationData |
`aggregator` | BLSPubkey |

**Returns:** *Promise‹AggregateAndProof›*

___

###  produceAttestation

▸ **produceAttestation**(`validatorPubKey`: BLSPubkey, `index`: CommitteeIndex, `slot`: Slot): *Promise‹Attestation›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:33](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L33)*

Requests that the BeaconNode produce an Attestation,
with a blank signature field, which the ValidatorClient will then sign.

**Parameters:**

Name | Type |
------ | ------ |
`validatorPubKey` | BLSPubkey |
`index` | CommitteeIndex |
`slot` | Slot |

**Returns:** *Promise‹Attestation›*

___

###  produceBlock

▸ **produceBlock**(`slot`: Slot, `proposerPubkey`: BLSPubkey, `randaoReveal`: Uint8Array): *Promise‹BeaconBlock›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:27](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L27)*

Requests a BeaconNode to produce a valid block,
which can then be signed by a ValidatorClient.

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`proposerPubkey` | BLSPubkey |
`randaoReveal` | Uint8Array |

**Returns:** *Promise‹BeaconBlock›*

A proposed BeaconBlock object

___

###  publishAggregateAndProof

▸ **publishAggregateAndProof**(`signedAggregateAndProof`: SignedAggregateAndProof): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:48](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`signedAggregateAndProof` | SignedAggregateAndProof |

**Returns:** *Promise‹void›*

___

###  publishAttestation

▸ **publishAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:46](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L46)*

Instructs the BeaconNode to publish a newly signed Attestation object,
to be incorporated into the beacon chain.

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  publishBlock

▸ **publishBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:40](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L40)*

Instructs the BeaconNode to publish a newly signed beacon block
to the beacon network, to be included in the beacon chain.

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  subscribeCommitteeSubnet

▸ **subscribeCommitteeSubnet**(`slot`: Slot, `slotSignature`: BLSSignature, `committeeIndex`: CommitteeIndex, `aggregatorPubkey`: BLSPubkey): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:54](https://github.com/ChainSafe/lodestar/blob/89d8b8b11/packages/lodestar-validator/src/api/interface/validators.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`slotSignature` | BLSSignature |
`committeeIndex` | CommitteeIndex |
`aggregatorPubkey` | BLSPubkey |

**Returns:** *Promise‹void›*
