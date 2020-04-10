[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["api/impl/rest/validator/validator"](../modules/_api_impl_rest_validator_validator_.md) › [RestValidatorApi](_api_impl_rest_validator_validator_.restvalidatorapi.md)

# Class: RestValidatorApi

## Hierarchy

* **RestValidatorApi**

## Implements

* [IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)

## Index

### Constructors

* [constructor](_api_impl_rest_validator_validator_.restvalidatorapi.md#constructor)

### Properties

* [client](_api_impl_rest_validator_validator_.restvalidatorapi.md#private-client)
* [config](_api_impl_rest_validator_validator_.restvalidatorapi.md#private-config)

### Methods

* [getAttesterDuties](_api_impl_rest_validator_validator_.restvalidatorapi.md#getattesterduties)
* [getProposerDuties](_api_impl_rest_validator_validator_.restvalidatorapi.md#getproposerduties)
* [getWireAttestations](_api_impl_rest_validator_validator_.restvalidatorapi.md#getwireattestations)
* [isAggregator](_api_impl_rest_validator_validator_.restvalidatorapi.md#isaggregator)
* [produceAttestation](_api_impl_rest_validator_validator_.restvalidatorapi.md#produceattestation)
* [produceBlock](_api_impl_rest_validator_validator_.restvalidatorapi.md#produceblock)
* [publishAggregatedAttestation](_api_impl_rest_validator_validator_.restvalidatorapi.md#publishaggregatedattestation)
* [publishAttestation](_api_impl_rest_validator_validator_.restvalidatorapi.md#publishattestation)
* [publishBlock](_api_impl_rest_validator_validator_.restvalidatorapi.md#publishblock)
* [subscribeCommitteeSubnet](_api_impl_rest_validator_validator_.restvalidatorapi.md#subscribecommitteesubnet)

## Constructors

###  constructor

\+ **new RestValidatorApi**(`config`: IBeaconConfig, `restUrl`: string, `logger`: ILogger): *[RestValidatorApi](_api_impl_rest_validator_validator_.restvalidatorapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:22](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`restUrl` | string |
`logger` | ILogger |

**Returns:** *[RestValidatorApi](_api_impl_rest_validator_validator_.restvalidatorapi.md)*

## Properties

### `Private` client

• **client**: *[HttpClient](_util_httpclient_.httpclient.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:20](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L20)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:22](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L22)*

## Methods

###  getAttesterDuties

▸ **getAttesterDuties**(`epoch`: number, `validatorPubKeys`: Buffer[]): *Promise‹ValidatorDuty[]›*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:40](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | number |
`validatorPubKeys` | Buffer[] |

**Returns:** *Promise‹ValidatorDuty[]›*

___

###  getProposerDuties

▸ **getProposerDuties**(`epoch`: number): *Promise‹Map‹Slot, BLSPubkey››*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:29](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | number |

**Returns:** *Promise‹Map‹Slot, BLSPubkey››*

___

###  getWireAttestations

▸ **getWireAttestations**(`epoch`: number, `committeeIndex`: number): *Promise‹Attestation[]›*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:58](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | number |
`committeeIndex` | number |

**Returns:** *Promise‹Attestation[]›*

___

###  isAggregator

▸ **isAggregator**(`slot`: Slot, `committeeIndex`: CommitteeIndex, `slotSignature`: BLSSignature): *Promise‹boolean›*

*Implementation of [IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:88](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`committeeIndex` | CommitteeIndex |
`slotSignature` | BLSSignature |

**Returns:** *Promise‹boolean›*

___

###  produceAttestation

▸ **produceAttestation**(`validatorPubKey`: BLSPubkey, `pocBit`: boolean, `slot`: Slot, `committeeIndex`: CommitteeIndex): *Promise‹Attestation›*

*Implementation of [IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:69](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`validatorPubKey` | BLSPubkey |
`pocBit` | boolean |
`slot` | Slot |
`committeeIndex` | CommitteeIndex |

**Returns:** *Promise‹Attestation›*

___

###  produceBlock

▸ **produceBlock**(`slot`: Slot, `randaoReveal`: Bytes96): *Promise‹BeaconBlock›*

*Implementation of [IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:64](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`randaoReveal` | Bytes96 |

**Returns:** *Promise‹BeaconBlock›*

___

###  publishAggregatedAttestation

▸ **publishAggregatedAttestation**(`aggregatedAttestation`: Attestation, `validatorPubkey`: BLSPubkey, `slotSignature`: BLSSignature): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:47](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregatedAttestation` | Attestation |
`validatorPubkey` | BLSPubkey |
`slotSignature` | BLSSignature |

**Returns:** *Promise‹void›*

___

###  publishAttestation

▸ **publishAttestation**(`attestation`: Attestation): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:84](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  publishBlock

▸ **publishBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:80](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  subscribeCommitteeSubnet

▸ **subscribeCommitteeSubnet**(`slot`: Slot, `slotSignature`: BLSSignature, `committeeIndex`: CommitteeIndex, `aggregatorPubkey`: BLSPubkey): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_interface_validators_.ivalidatorapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/validator/validator.ts:94](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/validator/validator.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`slotSignature` | BLSSignature |
`committeeIndex` | CommitteeIndex |
`aggregatorPubkey` | BLSPubkey |

**Returns:** *Promise‹void›*
