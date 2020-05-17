[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["services/attestation"](../modules/_services_attestation_.md) › [AttestationService](_services_attestation_.attestationservice.md)

# Class: AttestationService

## Hierarchy

* **AttestationService**

## Index

### Constructors

* [constructor](_services_attestation_.attestationservice.md#constructor)

### Properties

* [config](_services_attestation_.attestationservice.md#private-config)
* [db](_services_attestation_.attestationservice.md#private-db)
* [logger](_services_attestation_.attestationservice.md#private-logger)
* [nextAttesterDuties](_services_attestation_.attestationservice.md#private-nextattesterduties)
* [privateKey](_services_attestation_.attestationservice.md#private-privatekey)
* [provider](_services_attestation_.attestationservice.md#private-provider)
* [publicKey](_services_attestation_.attestationservice.md#private-publickey)

### Methods

* [aggregateAttestations](_services_attestation_.attestationservice.md#private-aggregateattestations)
* [createAttestation](_services_attestation_.attestationservice.md#private-createattestation)
* [getAggregateAndProofSignature](_services_attestation_.attestationservice.md#private-getaggregateandproofsignature)
* [getSlotSignature](_services_attestation_.attestationservice.md#private-getslotsignature)
* [isConflictingAttestation](_services_attestation_.attestationservice.md#private-isconflictingattestation)
* [onNewEpoch](_services_attestation_.attestationservice.md#onnewepoch)
* [onNewSlot](_services_attestation_.attestationservice.md#onnewslot)
* [start](_services_attestation_.attestationservice.md#start)
* [storeAttestation](_services_attestation_.attestationservice.md#private-storeattestation)
* [waitForAttestationBlock](_services_attestation_.attestationservice.md#private-waitforattestationblock)

## Constructors

###  constructor

\+ **new AttestationService**(`config`: IBeaconConfig, `keypair`: Keypair, `rpcClient`: [IApiClient](../interfaces/_api_interface_.iapiclient.md), `db`: [IValidatorDB](../interfaces/_db_interface_.ivalidatordb.md), `logger`: ILogger): *[AttestationService](_services_attestation_.attestationservice.md)*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:46](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`keypair` | Keypair |
`rpcClient` | [IApiClient](../interfaces/_api_interface_.iapiclient.md) |
`db` | [IValidatorDB](../interfaces/_db_interface_.ivalidatordb.md) |
`logger` | ILogger |

**Returns:** *[AttestationService](_services_attestation_.attestationservice.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:39](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L39)*

___

### `Private` db

• **db**: *[IValidatorDB](../interfaces/_db_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:43](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L43)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:44](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L44)*

___

### `Private` nextAttesterDuties

• **nextAttesterDuties**: *Map‹Slot, [IAttesterDuty](../interfaces/_types_.iattesterduty.md)›* = new Map<Slot, IAttesterDuty>()

*Defined in [packages/lodestar-validator/src/services/attestation.ts:46](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L46)*

___

### `Private` privateKey

• **privateKey**: *PrivateKey*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:41](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L41)*

___

### `Private` provider

• **provider**: *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:40](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L40)*

___

### `Private` publicKey

• **publicKey**: *BLSPubkey*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:42](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L42)*

## Methods

### `Private` aggregateAttestations

▸ **aggregateAttestations**(`duty`: [IAttesterDuty](../interfaces/_types_.iattesterduty.md), `attestation`: Attestation, `fork`: Fork, `genesisValidatorsRoot`: Root): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:146](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`duty` | [IAttesterDuty](../interfaces/_types_.iattesterduty.md) |
`attestation` | Attestation |
`fork` | Fork |
`genesisValidatorsRoot` | Root |

**Returns:** *Promise‹void›*

___

### `Private` createAttestation

▸ **createAttestation**(`slot`: Slot, `committeeIndex`: CommitteeIndex, `fork`: Fork, `genesisValidatorsRoot`: Root): *Promise‹Attestation›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:196](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`committeeIndex` | CommitteeIndex |
`fork` | Fork |
`genesisValidatorsRoot` | Root |

**Returns:** *Promise‹Attestation›*

___

### `Private` getAggregateAndProofSignature

▸ **getAggregateAndProofSignature**(`fork`: Fork, `genesisValidatorsRoot`: Root, `aggregateAndProof`: AggregateAndProof): *BLSSignature*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:171](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`fork` | Fork |
`genesisValidatorsRoot` | Root |
`aggregateAndProof` | AggregateAndProof |

**Returns:** *BLSSignature*

___

### `Private` getSlotSignature

▸ **getSlotSignature**(`slot`: Slot, `fork`: Fork, `genesisValidatorsRoot`: Root): *BLSSignature*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:185](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`fork` | Fork |
`genesisValidatorsRoot` | Root |

**Returns:** *BLSSignature*

___

### `Private` isConflictingAttestation

▸ **isConflictingAttestation**(`other`: AttestationData): *Promise‹boolean›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:236](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L236)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | AttestationData |

**Returns:** *Promise‹boolean›*

___

###  onNewEpoch

▸ **onNewEpoch**(`epoch`: Epoch): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:69](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

**Returns:** *Promise‹void›*

___

###  onNewSlot

▸ **onNewSlot**(`slot`: Slot): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:96](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:63](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L63)*

**Returns:** *Promise‹void›*

___

### `Private` storeAttestation

▸ **storeAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:244](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L244)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

### `Private` waitForAttestationBlock

▸ **waitForAttestationBlock**(`slot`: Slot): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:125](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar-validator/src/services/attestation.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹void›*
