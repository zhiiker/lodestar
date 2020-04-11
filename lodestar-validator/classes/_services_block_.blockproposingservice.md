[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["services/block"](../modules/_services_block_.md) › [BlockProposingService](_services_block_.blockproposingservice.md)

# Class: BlockProposingService

## Hierarchy

* **BlockProposingService**

## Index

### Constructors

* [constructor](_services_block_.blockproposingservice.md#constructor)

### Properties

* [config](_services_block_.blockproposingservice.md#private-config)
* [db](_services_block_.blockproposingservice.md#private-db)
* [logger](_services_block_.blockproposingservice.md#private-logger)
* [nextProposalSlot](_services_block_.blockproposingservice.md#private-nextproposalslot)
* [privateKey](_services_block_.blockproposingservice.md#private-privatekey)
* [provider](_services_block_.blockproposingservice.md#private-provider)
* [publicKey](_services_block_.blockproposingservice.md#private-publickey)

### Methods

* [createAndPublishBlock](_services_block_.blockproposingservice.md#createandpublishblock)
* [getRpcClient](_services_block_.blockproposingservice.md#getrpcclient)
* [hasProposedAlready](_services_block_.blockproposingservice.md#private-hasproposedalready)
* [onNewEpoch](_services_block_.blockproposingservice.md#onnewepoch)
* [onNewSlot](_services_block_.blockproposingservice.md#onnewslot)
* [start](_services_block_.blockproposingservice.md#start)
* [storeBlock](_services_block_.blockproposingservice.md#private-storeblock)

## Constructors

###  constructor

\+ **new BlockProposingService**(`config`: IBeaconConfig, `keypair`: Keypair, `provider`: [IApiClient](../interfaces/_api_interface_.iapiclient.md), `db`: [IValidatorDB](../interfaces/_db_interface_.ivalidatordb.md), `logger`: ILogger): *[BlockProposingService](_services_block_.blockproposingservice.md)*

*Defined in [packages/lodestar-validator/src/services/block.ts:24](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`keypair` | Keypair |
`provider` | [IApiClient](../interfaces/_api_interface_.iapiclient.md) |
`db` | [IValidatorDB](../interfaces/_db_interface_.ivalidatordb.md) |
`logger` | ILogger |

**Returns:** *[BlockProposingService](_services_block_.blockproposingservice.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar-validator/src/services/block.ts:17](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L17)*

___

### `Private` db

• **db**: *[IValidatorDB](../interfaces/_db_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar-validator/src/services/block.ts:21](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L21)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar-validator/src/services/block.ts:22](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L22)*

___

### `Private` nextProposalSlot

• **nextProposalSlot**: *Slot | null* = null

*Defined in [packages/lodestar-validator/src/services/block.ts:24](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L24)*

___

### `Private` privateKey

• **privateKey**: *PrivateKey*

*Defined in [packages/lodestar-validator/src/services/block.ts:19](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L19)*

___

### `Private` provider

• **provider**: *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/services/block.ts:18](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L18)*

___

### `Private` publicKey

• **publicKey**: *BLSPubkey*

*Defined in [packages/lodestar-validator/src/services/block.ts:20](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L20)*

## Methods

###  createAndPublishBlock

▸ **createAndPublishBlock**(`slot`: Slot, `fork`: Fork): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar-validator/src/services/block.ts:70](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L70)*

IFF a validator is selected construct a block to propose.

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`fork` | Fork |

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getRpcClient

▸ **getRpcClient**(): *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/services/block.ts:113](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L113)*

**Returns:** *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

___

### `Private` hasProposedAlready

▸ **hasProposedAlready**(`slot`: Slot): *Promise‹boolean›*

*Defined in [packages/lodestar-validator/src/services/block.ts:117](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹boolean›*

___

###  onNewEpoch

▸ **onNewEpoch**(`epoch`: Epoch): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/block.ts:47](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

**Returns:** *Promise‹void›*

___

###  onNewSlot

▸ **onNewSlot**(`slot`: Slot): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/block.ts:61](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/block.ts:41](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L41)*

**Returns:** *Promise‹void›*

___

### `Private` storeBlock

▸ **storeBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/block.ts:124](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-validator/src/services/block.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*
