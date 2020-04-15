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
* [isAggregator](_api_interface_validators_.ivalidatorapi.md#isaggregator)
* [produceAttestation](_api_interface_validators_.ivalidatorapi.md#produceattestation)
* [produceBlock](_api_interface_validators_.ivalidatorapi.md#produceblock)
* [publishAggregatedAttestation](_api_interface_validators_.ivalidatorapi.md#publishaggregatedattestation)
* [publishAttestation](_api_interface_validators_.ivalidatorapi.md#publishattestation)
* [publishBlock](_api_interface_validators_.ivalidatorapi.md#publishblock)
* [subscribeCommitteeSubnet](_api_interface_validators_.ivalidatorapi.md#subscribecommitteesubnet)

## Methods

###  getAttesterDuties

▸ **getAttesterDuties**(`epoch`: Epoch, `validatorPubKey`: BLSPubkey[]): *Promise‹ValidatorDuty[]›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:17](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |
`validatorPubKey` | BLSPubkey[] |

**Returns:** *Promise‹ValidatorDuty[]›*

___

###  getProposerDuties

▸ **getProposerDuties**(`epoch`: Epoch): *Promise‹Map‹Slot, BLSPubkey››*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:15](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

**Returns:** *Promise‹Map‹Slot, BLSPubkey››*

___

###  getWireAttestations

▸ **getWireAttestations**(`epoch`: Epoch, `committeeIndex`: CommitteeIndex): *Promise‹Attestation[]›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:51](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |
`committeeIndex` | CommitteeIndex |

**Returns:** *Promise‹Attestation[]›*

___

###  isAggregator

▸ **isAggregator**(`slot`: Slot, `committeeIndex`: CommitteeIndex, `slotSignature`: BLSSignature): *Promise‹boolean›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:19](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`committeeIndex` | CommitteeIndex |
`slotSignature` | BLSSignature |

**Returns:** *Promise‹boolean›*

___

###  produceAttestation

▸ **produceAttestation**(`validatorPubKey`: BLSPubkey, `pocBit`: boolean, `index`: CommitteeIndex, `slot`: Slot): *Promise‹Attestation›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:32](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L32)*

Requests that the BeaconNode produce an IndexedAttestation,
with a blank signature field, which the ValidatorClient will then sign.

**Parameters:**

Name | Type |
------ | ------ |
`validatorPubKey` | BLSPubkey |
`pocBit` | boolean |
`index` | CommitteeIndex |
`slot` | Slot |

**Returns:** *Promise‹Attestation›*

___

###  produceBlock

▸ **produceBlock**(`slot`: Slot, `randaoReveal`: Uint8Array): *Promise‹BeaconBlock›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:26](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L26)*

Requests a BeaconNode to produce a valid block,
which can then be signed by a ValidatorClient.

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`randaoReveal` | Uint8Array |

**Returns:** *Promise‹BeaconBlock›*

A proposed BeaconBlock object

___

###  publishAggregatedAttestation

▸ **publishAggregatedAttestation**(`aggregated`: Attestation, `validatorPubKey`: BLSPubkey, `slotSignature`: BLSSignature): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:47](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregated` | Attestation |
`validatorPubKey` | BLSPubkey |
`slotSignature` | BLSSignature |

**Returns:** *Promise‹void›*

___

###  publishAttestation

▸ **publishAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:45](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L45)*

Instructs the BeaconNode to publish a newly signed IndexedAttestation object,
to be incorporated into the beacon chain.

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  publishBlock

▸ **publishBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:39](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L39)*

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

*Defined in [packages/lodestar-validator/src/api/interface/validators.ts:53](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/api/interface/validators.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`slotSignature` | BLSSignature |
`committeeIndex` | CommitteeIndex |
`aggregatorPubkey` | BLSPubkey |

**Returns:** *Promise‹void›*
