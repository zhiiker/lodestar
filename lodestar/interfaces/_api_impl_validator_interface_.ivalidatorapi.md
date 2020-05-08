[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/impl/validator/interface"](../modules/_api_impl_validator_interface_.md) › [IValidatorApi](_api_impl_validator_interface_.ivalidatorapi.md)

# Interface: IValidatorApi

The API interface defines the calls that can be made from a Validator

## Hierarchy

* [IApi](_api_interface_.iapi.md)

  ↳ **IValidatorApi**

## Implemented by

* [ValidatorApi](../classes/_api_impl_validator_validator_.validatorapi.md)

## Index

### Properties

* [namespace](_api_impl_validator_interface_.ivalidatorapi.md#namespace)

### Methods

* [getAttesterDuties](_api_impl_validator_interface_.ivalidatorapi.md#getattesterduties)
* [getProposerDuties](_api_impl_validator_interface_.ivalidatorapi.md#getproposerduties)
* [getWireAttestations](_api_impl_validator_interface_.ivalidatorapi.md#getwireattestations)
* [produceAggregateAndProof](_api_impl_validator_interface_.ivalidatorapi.md#produceaggregateandproof)
* [produceAttestation](_api_impl_validator_interface_.ivalidatorapi.md#produceattestation)
* [produceBlock](_api_impl_validator_interface_.ivalidatorapi.md#produceblock)
* [publishAggregateAndProof](_api_impl_validator_interface_.ivalidatorapi.md#publishaggregateandproof)
* [publishAttestation](_api_impl_validator_interface_.ivalidatorapi.md#publishattestation)
* [publishBlock](_api_impl_validator_interface_.ivalidatorapi.md#publishblock)
* [subscribeCommitteeSubnet](_api_impl_validator_interface_.ivalidatorapi.md#subscribecommitteesubnet)

## Properties

###  namespace

• **namespace**: *[ApiNamespace](../enums/_api_index_.apinamespace.md)*

*Inherited from [IValidatorApi](_api_impl_validator_interface_.ivalidatorapi.md).[namespace](_api_impl_validator_interface_.ivalidatorapi.md#namespace)*

*Defined in [packages/lodestar/src/api/interface.ts:33](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/interface.ts#L33)*

Name space for API commands

## Methods

###  getAttesterDuties

▸ **getAttesterDuties**(`epoch`: Epoch, `validatorPubKey`: BLSPubkey[]): *Promise‹AttesterDuty[]›*

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:26](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |
`validatorPubKey` | BLSPubkey[] |

**Returns:** *Promise‹AttesterDuty[]›*

___

###  getProposerDuties

▸ **getProposerDuties**(`epoch`: Epoch): *Promise‹ProposerDuty[]›*

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:24](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

**Returns:** *Promise‹ProposerDuty[]›*

___

###  getWireAttestations

▸ **getWireAttestations**(`epoch`: Epoch, `committeeIndex`: CommitteeIndex): *Promise‹Attestation[]›*

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:60](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |
`committeeIndex` | CommitteeIndex |

**Returns:** *Promise‹Attestation[]›*

___

###  produceAggregateAndProof

▸ **produceAggregateAndProof**(`attestationData`: AttestationData, `aggregator`: BLSPubkey): *Promise‹AggregateAndProof›*

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:58](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`attestationData` | AttestationData |
`aggregator` | BLSPubkey |

**Returns:** *Promise‹AggregateAndProof›*

___

###  produceAttestation

▸ **produceAttestation**(`validatorPubKey`: BLSPubkey, `index`: CommitteeIndex, `slot`: Slot): *Promise‹Attestation›*

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L39)*

Requests that the BeaconNode produce an IndexedAttestation,
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

▸ **produceBlock**(`slot`: Slot, `proposerPubkey`: BLSPubkey, `randaoReveal`: BLSSignature): *Promise‹BeaconBlock›*

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:33](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L33)*

Requests a BeaconNode to produce a valid block,
which can then be signed by a ValidatorClient.

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`proposerPubkey` | BLSPubkey |
`randaoReveal` | BLSSignature |

**Returns:** *Promise‹BeaconBlock›*

A proposed BeaconBlock object

___

###  publishAggregateAndProof

▸ **publishAggregateAndProof**(`signedAggregateAndProof`: SignedAggregateAndProof): *Promise‹void›*

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:54](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`signedAggregateAndProof` | SignedAggregateAndProof |

**Returns:** *Promise‹void›*

___

###  publishAttestation

▸ **publishAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:52](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L52)*

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

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:46](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L46)*

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

*Defined in [packages/lodestar/src/api/impl/validator/interface.ts:62](https://github.com/ChainSafe/lodestar/blob/905cc824b/packages/lodestar/src/api/impl/validator/interface.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`slotSignature` | BLSSignature |
`committeeIndex` | CommitteeIndex |
`aggregatorPubkey` | BLSPubkey |

**Returns:** *Promise‹void›*
