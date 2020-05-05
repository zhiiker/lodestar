[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/impl/validator/validator"](../modules/_api_impl_validator_validator_.md) › [ValidatorApi](_api_impl_validator_validator_.validatorapi.md)

# Class: ValidatorApi

## Hierarchy

* **ValidatorApi**

## Implements

* [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)

## Index

### Constructors

* [constructor](_api_impl_validator_validator_.validatorapi.md#constructor)

### Properties

* [chain](_api_impl_validator_validator_.validatorapi.md#private-chain)
* [config](_api_impl_validator_validator_.validatorapi.md#private-config)
* [db](_api_impl_validator_validator_.validatorapi.md#private-db)
* [logger](_api_impl_validator_validator_.validatorapi.md#private-logger)
* [namespace](_api_impl_validator_validator_.validatorapi.md#namespace)
* [network](_api_impl_validator_validator_.validatorapi.md#private-network)
* [sync](_api_impl_validator_validator_.validatorapi.md#private-sync)

### Methods

* [getAttesterDuties](_api_impl_validator_validator_.validatorapi.md#getattesterduties)
* [getProposerDuties](_api_impl_validator_validator_.validatorapi.md#getproposerduties)
* [getWireAttestations](_api_impl_validator_validator_.validatorapi.md#getwireattestations)
* [produceAggregateAndProof](_api_impl_validator_validator_.validatorapi.md#produceaggregateandproof)
* [produceAttestation](_api_impl_validator_validator_.validatorapi.md#produceattestation)
* [produceBlock](_api_impl_validator_validator_.validatorapi.md#produceblock)
* [publishAggregateAndProof](_api_impl_validator_validator_.validatorapi.md#publishaggregateandproof)
* [publishAttestation](_api_impl_validator_validator_.validatorapi.md#publishattestation)
* [publishBlock](_api_impl_validator_validator_.validatorapi.md#publishblock)
* [subscribeCommitteeSubnet](_api_impl_validator_validator_.validatorapi.md#subscribecommitteesubnet)

## Constructors

###  constructor

\+ **new ValidatorApi**(`opts`: Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)›, `modules`: Pick‹[IApiModules](../interfaces/_api_interface_.iapimodules.md), "config" | "chain" | "db" | "sync" | "network" | "logger"›): *[ValidatorApi](_api_impl_validator_validator_.validatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:55](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)› |
`modules` | Pick‹[IApiModules](../interfaces/_api_interface_.iapimodules.md), "config" &#124; "chain" &#124; "db" &#124; "sync" &#124; "network" &#124; "logger"› |

**Returns:** *[ValidatorApi](_api_impl_validator_validator_.validatorapi.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:51](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L51)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:50](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L50)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:52](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L52)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:55](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L55)*

___

###  namespace

• **namespace**: *[ApiNamespace](../enums/_api_index_.apinamespace.md)*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md).[namespace](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md#namespace)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:48](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L48)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:53](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L53)*

___

### `Private` sync

• **sync**: *[IBeaconSync](../interfaces/_sync_interface_.ibeaconsync.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:54](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L54)*

## Methods

###  getAttesterDuties

▸ **getAttesterDuties**(`epoch`: number, `validatorPubKeys`: BLSPubkey[]): *Promise‹AttesterDuty[]›*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:132](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | number |
`validatorPubKeys` | BLSPubkey[] |

**Returns:** *Promise‹AttesterDuty[]›*

___

###  getProposerDuties

▸ **getProposerDuties**(`epoch`: Epoch): *Promise‹ProposerDuty[]›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:116](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

**Returns:** *Promise‹ProposerDuty[]›*

___

###  getWireAttestations

▸ **getWireAttestations**(`epoch`: number, `committeeIndex`: number): *Promise‹Attestation[]›*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:158](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | number |
`committeeIndex` | number |

**Returns:** *Promise‹Attestation[]›*

___

###  produceAggregateAndProof

▸ **produceAggregateAndProof**(`attestationData`: AttestationData, `aggregator`: BLSPubkey): *Promise‹AggregateAndProof›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:162](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`attestationData` | AttestationData |
`aggregator` | BLSPubkey |

**Returns:** *Promise‹AggregateAndProof›*

___

###  produceAttestation

▸ **produceAttestation**(`validatorPubKey`: BLSPubkey, `index`: CommitteeIndex, `slot`: Slot): *Promise‹Attestation›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:77](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`validatorPubKey` | BLSPubkey |
`index` | CommitteeIndex |
`slot` | Slot |

**Returns:** *Promise‹Attestation›*

___

###  produceBlock

▸ **produceBlock**(`slot`: Slot, `validatorPubkey`: BLSPubkey, `randaoReveal`: Bytes96): *Promise‹BeaconBlock›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:70](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`validatorPubkey` | BLSPubkey |
`randaoReveal` | Bytes96 |

**Returns:** *Promise‹BeaconBlock›*

___

###  publishAggregateAndProof

▸ **publishAggregateAndProof**(`signedAggregateAndProof`: SignedAggregateAndProof): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:149](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`signedAggregateAndProof` | SignedAggregateAndProof |

**Returns:** *Promise‹void›*

___

###  publishAttestation

▸ **publishAttestation**(`attestation`: Attestation): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:109](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  publishBlock

▸ **publishBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:102](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  subscribeCommitteeSubnet

▸ **subscribeCommitteeSubnet**(`slot`: Slot, `slotSignature`: BLSSignature, `committeeIndex`: CommitteeIndex, `aggregatorPubkey`: BLSPubkey): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:197](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/validator/validator.ts#L197)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`slotSignature` | BLSSignature |
`committeeIndex` | CommitteeIndex |
`aggregatorPubkey` | BLSPubkey |

**Returns:** *Promise‹void›*
