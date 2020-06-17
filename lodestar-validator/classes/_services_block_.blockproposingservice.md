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
* [nextProposalSlots](_services_block_.blockproposingservice.md#private-nextproposalslots)
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

*Defined in [packages/lodestar-validator/src/services/block.ts:28](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L28)*

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

*Defined in [packages/lodestar-validator/src/services/block.ts:21](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L21)*

___

### `Private` db

• **db**: *[IValidatorDB](../interfaces/_db_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar-validator/src/services/block.ts:25](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L25)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar-validator/src/services/block.ts:26](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L26)*

___

### `Private` nextProposalSlots

• **nextProposalSlots**: *Slot[]* = []

*Defined in [packages/lodestar-validator/src/services/block.ts:28](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L28)*

___

### `Private` privateKey

• **privateKey**: *PrivateKey*

*Defined in [packages/lodestar-validator/src/services/block.ts:23](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L23)*

___

### `Private` provider

• **provider**: *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/services/block.ts:22](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L22)*

___

### `Private` publicKey

• **publicKey**: *BLSPubkey*

*Defined in [packages/lodestar-validator/src/services/block.ts:24](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L24)*

## Methods

###  createAndPublishBlock

▸ **createAndPublishBlock**(`slot`: Slot, `fork`: Fork, `genesisValidatorsRoot`: Root): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar-validator/src/services/block.ts:71](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L71)*

IFF a validator is selected construct a block to propose.

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`fork` | Fork |
`genesisValidatorsRoot` | Root |

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getRpcClient

▸ **getRpcClient**(): *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/services/block.ts:125](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L125)*

**Returns:** *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

___

### `Private` hasProposedAlready

▸ **hasProposedAlready**(`slot`: Slot): *Promise‹boolean›*

*Defined in [packages/lodestar-validator/src/services/block.ts:129](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹boolean›*

___

###  onNewEpoch

▸ **onNewEpoch**(`epoch`: Epoch): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/block.ts:51](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

**Returns:** *Promise‹void›*

___

###  onNewSlot

▸ **onNewSlot**(`slot`: Slot): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/block.ts:61](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/block.ts:45](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L45)*

**Returns:** *Promise‹void›*

___

### `Private` storeBlock

▸ **storeBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/services/block.ts:136](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-validator/src/services/block.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*
