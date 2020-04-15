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

*Defined in [packages/lodestar-validator/src/services/attestation.ts:38](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L38)*

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

*Defined in [packages/lodestar-validator/src/services/attestation.ts:31](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L31)*

___

### `Private` db

• **db**: *[IValidatorDB](../interfaces/_db_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:35](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L35)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:36](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L36)*

___

### `Private` nextAttesterDuties

• **nextAttesterDuties**: *Map‹Slot, [IAttesterDuty](../interfaces/_types_.iattesterduty.md)›* = new Map<Slot, IAttesterDuty>()

*Defined in [packages/lodestar-validator/src/services/attestation.ts:38](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L38)*

___

### `Private` privateKey

• **privateKey**: *PrivateKey*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:33](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L33)*

___

### `Private` provider

• **provider**: *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:32](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L32)*

___

### `Private` publicKey

• **publicKey**: *BLSPubkey*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:34](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L34)*

## Methods

### `Private` aggregateAttestations

▸ **aggregateAttestations**(`duty`: [IAttesterDuty](../interfaces/_types_.iattesterduty.md), `attestation`: Attestation, `fork`: Fork): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:137](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`duty` | [IAttesterDuty](../interfaces/_types_.iattesterduty.md) |
`attestation` | Attestation |
`fork` | Fork |

**Returns:** *Promise‹void›*

___

### `Private` createAttestation

▸ **createAttestation**(`slot`: Slot, `committeeIndex`: CommitteeIndex, `fork`: Fork): *Promise‹Attestation›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:191](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L191)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`committeeIndex` | CommitteeIndex |
`fork` | Fork |

**Returns:** *Promise‹Attestation›*

___

### `Private` getSlotSignature

▸ **getSlotSignature**(`slot`: Slot, `fork`: Fork): *BLSSignature*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:180](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`fork` | Fork |

**Returns:** *BLSSignature*

___

### `Private` isConflictingAttestation

▸ **isConflictingAttestation**(`other`: AttestationData): *Promise‹boolean›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:231](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | AttestationData |

**Returns:** *Promise‹boolean›*

___

###  onNewEpoch

▸ **onNewEpoch**(`epoch`: Epoch): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:61](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

**Returns:** *Promise‹void›*

___

###  onNewSlot

▸ **onNewSlot**(`slot`: Slot): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:92](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:55](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L55)*

**Returns:** *Promise‹void›*

___

### `Private` storeAttestation

▸ **storeAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:239](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L239)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

### `Private` waitForAttestationBlock

▸ **waitForAttestationBlock**(`slot`: Slot): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/attestation.ts:116](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-validator/src/services/attestation.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹void›*
