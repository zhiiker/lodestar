[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/interface"](../modules/_db_api_beacon_interface_.md) › [IBeaconDb](_db_api_beacon_interface_.ibeacondb.md)

# Interface: IBeaconDb

The DB service manages the data layer of the beacon chain
The exposed methods do not refer to the underlying data engine,
but instead expose relevent beacon chain objects

## Hierarchy

* **IBeaconDb**

## Implemented by

* [BeaconDb](../classes/_db_api_beacon_beacon_.beacondb.md)

## Index

### Properties

* [aggregateAndProof](_db_api_beacon_interface_.ibeacondb.md#aggregateandproof)
* [attestation](_db_api_beacon_interface_.ibeacondb.md#attestation)
* [attesterSlashing](_db_api_beacon_interface_.ibeacondb.md#attesterslashing)
* [badBlock](_db_api_beacon_interface_.ibeacondb.md#badblock)
* [block](_db_api_beacon_interface_.ibeacondb.md#block)
* [blockArchive](_db_api_beacon_interface_.ibeacondb.md#blockarchive)
* [chain](_db_api_beacon_interface_.ibeacondb.md#chain)
* [depositData](_db_api_beacon_interface_.ibeacondb.md#depositdata)
* [depositDataRoot](_db_api_beacon_interface_.ibeacondb.md#depositdataroot)
* [eth1Data](_db_api_beacon_interface_.ibeacondb.md#eth1data)
* [proposerSlashing](_db_api_beacon_interface_.ibeacondb.md#proposerslashing)
* [state](_db_api_beacon_interface_.ibeacondb.md#state)
* [voluntaryExit](_db_api_beacon_interface_.ibeacondb.md#voluntaryexit)

### Methods

* [getValidatorIndex](_db_api_beacon_interface_.ibeacondb.md#getvalidatorindex)
* [processBlockOperations](_db_api_beacon_interface_.ibeacondb.md#processblockoperations)
* [storeChainHead](_db_api_beacon_interface_.ibeacondb.md#storechainhead)
* [updateChainHead](_db_api_beacon_interface_.ibeacondb.md#updatechainhead)

## Properties

###  aggregateAndProof

• **aggregateAndProof**: *[AggregateAndProofRepository](../classes/_db_api_beacon_repositories_aggregateandproof_.aggregateandproofrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:51](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L51)*

___

###  attestation

• **attestation**: *[AttestationRepository](../classes/_db_api_beacon_repositories_attestation_.attestationrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:50](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L50)*

___

###  attesterSlashing

• **attesterSlashing**: *[AttesterSlashingRepository](../classes/_db_api_beacon_repositories_attesterslashing_.attesterslashingrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:54](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L54)*

___

###  badBlock

• **badBlock**: *[BadBlockRepository](../classes/_db_api_beacon_repositories_badblock_.badblockrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:41](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L41)*

___

###  block

• **block**: *[BlockRepository](../classes/_db_api_beacon_repositories_block_.blockrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:44](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L44)*

___

###  blockArchive

• **blockArchive**: *[BlockArchiveRepository](../classes/_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:47](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L47)*

___

###  chain

• **chain**: *[ChainRepository](../classes/_db_api_beacon_repositories_chain_.chainrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:35](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L35)*

___

###  depositData

• **depositData**: *[DepositDataRepository](../classes/_db_api_beacon_repositories_depositdata_.depositdatarepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:55](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L55)*

___

###  depositDataRoot

• **depositDataRoot**: *[DepositDataRootRepository](../classes/_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:60](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L60)*

___

###  eth1Data

• **eth1Data**: *[Eth1DataRepository](../classes/_db_api_beacon_repositories_eth1data_.eth1datarepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:61](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L61)*

___

###  proposerSlashing

• **proposerSlashing**: *[ProposerSlashingRepository](../classes/_db_api_beacon_repositories_proposerslashing_.proposerslashingrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:53](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L53)*

___

###  state

• **state**: *[StateRepository](../classes/_db_api_beacon_repositories_state_.staterepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:38](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L38)*

___

###  voluntaryExit

• **voluntaryExit**: *[VoluntaryExitRepository](../classes/_db_api_beacon_repositories_voluntaryexit_.voluntaryexitrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:52](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L52)*

## Methods

###  getValidatorIndex

▸ **getValidatorIndex**(`publicKey`: BLSPubkey): *Promise‹ValidatorIndex | null›*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:67](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L67)*

Returns validator index coresponding to validator
public key in registry,

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`publicKey` | BLSPubkey |   |

**Returns:** *Promise‹ValidatorIndex | null›*

___

###  processBlockOperations

▸ **processBlockOperations**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:69](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  storeChainHead

▸ **storeChainHead**(`block`: SignedBeaconBlock, `state`: BeaconState): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:74](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L74)*

Stores block and state and set them as chain head

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |
`state` | BeaconState |

**Returns:** *Promise‹void›*

___

###  updateChainHead

▸ **updateChainHead**(`blockRoot`: Uint8Array, `stateRoot`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:84](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/db/api/beacon/interface.ts#L84)*

Fetches block and state by root and sets them as chain head

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blockRoot` | Uint8Array | - |
`stateRoot` | Uint8Array |   |

**Returns:** *Promise‹void›*
