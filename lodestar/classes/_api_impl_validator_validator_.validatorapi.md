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
* [eth1](_api_impl_validator_validator_.validatorapi.md#private-eth1)
* [logger](_api_impl_validator_validator_.validatorapi.md#private-logger)
* [namespace](_api_impl_validator_validator_.validatorapi.md#namespace)
* [network](_api_impl_validator_validator_.validatorapi.md#private-network)
* [opPool](_api_impl_validator_validator_.validatorapi.md#private-oppool)
* [sync](_api_impl_validator_validator_.validatorapi.md#private-sync)

### Methods

* [getAttesterDuties](_api_impl_validator_validator_.validatorapi.md#getattesterduties)
* [getProposerDuties](_api_impl_validator_validator_.validatorapi.md#getproposerduties)
* [getWireAttestations](_api_impl_validator_validator_.validatorapi.md#getwireattestations)
* [isAggregator](_api_impl_validator_validator_.validatorapi.md#isaggregator)
* [produceAttestation](_api_impl_validator_validator_.validatorapi.md#produceattestation)
* [produceBlock](_api_impl_validator_validator_.validatorapi.md#produceblock)
* [publishAggregatedAttestation](_api_impl_validator_validator_.validatorapi.md#publishaggregatedattestation)
* [publishAttestation](_api_impl_validator_validator_.validatorapi.md#publishattestation)
* [publishBlock](_api_impl_validator_validator_.validatorapi.md#publishblock)
* [subscribeCommitteeSubnet](_api_impl_validator_validator_.validatorapi.md#subscribecommitteesubnet)

## Constructors

###  constructor

\+ **new ValidatorApi**(`opts`: Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)›, `modules`: Pick‹[IApiModules](../interfaces/_api_interface_.iapimodules.md), "config" | "chain" | "db" | "opPool" | "eth1" | "sync" | "network" | "logger"›): *[ValidatorApi](_api_impl_validator_validator_.validatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:56](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)› |
`modules` | Pick‹[IApiModules](../interfaces/_api_interface_.iapimodules.md), "config" &#124; "chain" &#124; "db" &#124; "opPool" &#124; "eth1" &#124; "sync" &#124; "network" &#124; "logger"› |

**Returns:** *[ValidatorApi](_api_impl_validator_validator_.validatorapi.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:50](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L50)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:49](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L49)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:51](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L51)*

___

### `Private` eth1

• **eth1**: *[IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:55](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L55)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:56](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L56)*

___

###  namespace

• **namespace**: *[ApiNamespace](../enums/_api_index_.apinamespace.md)*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md).[namespace](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md#namespace)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:47](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L47)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:52](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L52)*

___

### `Private` opPool

• **opPool**: *[OpPool](_oppool_oppool_.oppool.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:54](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L54)*

___

### `Private` sync

• **sync**: *[Sync](_sync_index_.sync.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:53](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L53)*

## Methods

###  getAttesterDuties

▸ **getAttesterDuties**(`epoch`: number, `validatorPubKeys`: BLSPubkey[]): *Promise‹ValidatorDuty[]›*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:133](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | number |
`validatorPubKeys` | BLSPubkey[] |

**Returns:** *Promise‹ValidatorDuty[]›*

___

###  getProposerDuties

▸ **getProposerDuties**(`epoch`: Epoch): *Promise‹Map‹Slot, BLSPubkey››*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:117](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

**Returns:** *Promise‹Map‹Slot, BLSPubkey››*

___

###  getWireAttestations

▸ **getWireAttestations**(`epoch`: number, `committeeIndex`: number): *Promise‹Attestation[]›*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:166](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L166)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | number |
`committeeIndex` | number |

**Returns:** *Promise‹Attestation[]›*

___

###  isAggregator

▸ **isAggregator**(`slot`: Slot, `committeeIndex`: CommitteeIndex, `slotSignature`: BLSSignature): *Promise‹boolean›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:170](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L170)*

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

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:77](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L77)*

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

▸ **produceBlock**(`slot`: Slot, `randaoReveal`: Bytes96): *Promise‹BeaconBlock›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:73](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`randaoReveal` | Bytes96 |

**Returns:** *Promise‹BeaconBlock›*

___

###  publishAggregatedAttestation

▸ **publishAggregatedAttestation**(`aggregated`: Attestation, `validatorPubkey`: BLSPubkey, `slotSignature`: BLSSignature): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:150](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregated` | Attestation |
`validatorPubkey` | BLSPubkey |
`slotSignature` | BLSSignature |

**Returns:** *Promise‹void›*

___

###  publishAttestation

▸ **publishAttestation**(`attestation`: Attestation): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:110](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  publishBlock

▸ **publishBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:103](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  subscribeCommitteeSubnet

▸ **subscribeCommitteeSubnet**(`slot`: Slot, `slotSignature`: BLSSignature, `committeeIndex`: CommitteeIndex, `aggregatorPubkey`: BLSPubkey): *Promise‹void›*

*Implementation of [IValidatorApi](../interfaces/_api_impl_validator_interface_.ivalidatorapi.md)*

*Defined in [packages/lodestar/src/api/impl/validator/validator.ts:174](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/impl/validator/validator.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`slotSignature` | BLSSignature |
`committeeIndex` | CommitteeIndex |
`aggregatorPubkey` | BLSPubkey |

**Returns:** *Promise‹void›*
