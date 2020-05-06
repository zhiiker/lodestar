[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/attestation"](../modules/_chain_attestation_.md) › [AttestationProcessor](_chain_attestation_.attestationprocessor.md)

# Class: AttestationProcessor

## Hierarchy

* **AttestationProcessor**

## Implements

* [IAttestationProcessor](../interfaces/_chain_interface_.iattestationprocessor.md)

## Index

### Constructors

* [constructor](_chain_attestation_.attestationprocessor.md#constructor)

### Properties

* [chain](_chain_attestation_.attestationprocessor.md#private-chain)
* [config](_chain_attestation_.attestationprocessor.md#private-config)
* [db](_chain_attestation_.attestationprocessor.md#private-db)
* [forkChoice](_chain_attestation_.attestationprocessor.md#private-forkchoice)
* [logger](_chain_attestation_.attestationprocessor.md#private-logger)
* [pendingAttestations](_chain_attestation_.attestationprocessor.md#private-pendingattestations)

### Methods

* [addPendingAttestation](_chain_attestation_.attestationprocessor.md#private-addpendingattestation)
* [processAttestation](_chain_attestation_.attestationprocessor.md#processattestation)
* [receiveAttestation](_chain_attestation_.attestationprocessor.md#receiveattestation)
* [receiveBlock](_chain_attestation_.attestationprocessor.md#receiveblock)

## Constructors

###  constructor

\+ **new AttestationProcessor**(`chain`: [ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter), `forkChoice`: [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md), `__namedParameters`: object): *[AttestationProcessor](_chain_attestation_.attestationprocessor.md)*

*Defined in [packages/lodestar/src/chain/attestation.ts:24](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L24)*

**Parameters:**

▪ **chain**: *[ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter)*

▪ **forkChoice**: *[ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |

**Returns:** *[AttestationProcessor](_chain_attestation_.attestationprocessor.md)*

## Properties

### `Private` chain

• **chain**: *[ChainEventEmitter](../modules/_chain_interface_.md#chaineventemitter)*

*Defined in [packages/lodestar/src/chain/attestation.ts:22](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L22)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/attestation.ts:19](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L19)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/chain/attestation.ts:20](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L20)*

___

### `Private` forkChoice

• **forkChoice**: *[ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/attestation.ts:23](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L23)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/chain/attestation.ts:21](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L21)*

___

### `Private` pendingAttestations

• **pendingAttestations**: *Map‹BlockRootHex, Map‹AttestationRootHex, Attestation››*

*Defined in [packages/lodestar/src/chain/attestation.ts:24](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L24)*

## Methods

### `Private` addPendingAttestation

▸ **addPendingAttestation**(`blockRoot`: Root, `attestation`: Attestation, `attestationHash`: Root): *void*

*Defined in [packages/lodestar/src/chain/attestation.ts:119](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Root |
`attestation` | Attestation |
`attestationHash` | Root |

**Returns:** *void*

___

###  processAttestation

▸ **processAttestation**(`attestation`: Attestation, `attestationHash`: Root): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/attestation.ts:85](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |
`attestationHash` | Root |

**Returns:** *Promise‹void›*

___

###  receiveAttestation

▸ **receiveAttestation**(`attestation`: Attestation): *Promise‹void›*

*Implementation of [IAttestationProcessor](../interfaces/_chain_interface_.iattestationprocessor.md)*

*Defined in [packages/lodestar/src/chain/attestation.ts:39](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  receiveBlock

▸ **receiveBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/attestation.ts:71](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/chain/attestation.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*
