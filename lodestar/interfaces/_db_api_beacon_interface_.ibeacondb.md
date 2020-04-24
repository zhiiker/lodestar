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
* [block](_db_api_beacon_interface_.ibeacondb.md#block)
* [blockArchive](_db_api_beacon_interface_.ibeacondb.md#blockarchive)
* [chain](_db_api_beacon_interface_.ibeacondb.md#chain)
* [depositData](_db_api_beacon_interface_.ibeacondb.md#depositdata)
* [depositDataRootList](_db_api_beacon_interface_.ibeacondb.md#depositdatarootlist)
* [proposerSlashing](_db_api_beacon_interface_.ibeacondb.md#proposerslashing)
* [state](_db_api_beacon_interface_.ibeacondb.md#state)
* [voluntaryExit](_db_api_beacon_interface_.ibeacondb.md#voluntaryexit)

### Methods

* [getValidatorIndex](_db_api_beacon_interface_.ibeacondb.md#getvalidatorindex)
* [storeChainHead](_db_api_beacon_interface_.ibeacondb.md#storechainhead)
* [updateChainHead](_db_api_beacon_interface_.ibeacondb.md#updatechainhead)

## Properties

###  aggregateAndProof

• **aggregateAndProof**: *[AggregateAndProofRepository](../classes/_db_api_beacon_repositories_aggregateandproof_.aggregateandproofrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:43](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L43)*

___

###  attestation

• **attestation**: *[AttestationRepository](../classes/_db_api_beacon_repositories_attestations_.attestationrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:41](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L41)*

___

###  attesterSlashing

• **attesterSlashing**: *[AttesterSlashingRepository](../classes/_db_api_beacon_repositories_attesterslashing_.attesterslashingrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:49](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L49)*

___

###  block

• **block**: *[BlockRepository](../classes/_db_api_beacon_repositories_block_.blockrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:37](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L37)*

___

###  blockArchive

• **blockArchive**: *[BlockArchiveRepository](../classes/_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L39)*

___

###  chain

• **chain**: *[ChainRepository](../classes/_db_api_beacon_repositories_chain_.chainrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:33](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L33)*

___

###  depositData

• **depositData**: *[DepositDataRepository](../classes/_db_api_beacon_repositories_depositdata_.depositdatarepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:51](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L51)*

___

###  depositDataRootList

• **depositDataRootList**: *[DepositDataRootListRepository](../classes/_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:53](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L53)*

___

###  proposerSlashing

• **proposerSlashing**: *[ProposerSlashingRepository](../classes/_db_api_beacon_repositories_proposerslashing_.proposerslashingrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:47](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L47)*

___

###  state

• **state**: *[StateRepository](../classes/_db_api_beacon_repositories_state_.staterepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:35](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L35)*

___

###  voluntaryExit

• **voluntaryExit**: *[VoluntaryExitRepository](../classes/_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:45](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L45)*

## Methods

###  getValidatorIndex

▸ **getValidatorIndex**(`publicKey`: BLSPubkey): *Promise‹ValidatorIndex | null›*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:59](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L59)*

Returns validator index coresponding to validator
public key in registry,

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`publicKey` | BLSPubkey |   |

**Returns:** *Promise‹ValidatorIndex | null›*

___

###  storeChainHead

▸ **storeChainHead**(`block`: SignedBeaconBlock, `state`: BeaconState): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:64](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L64)*

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

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:74](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/db/api/beacon/interface.ts#L74)*

Fetches block and state by root and sets them as chain head

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blockRoot` | Uint8Array | - |
`stateRoot` | Uint8Array |   |

**Returns:** *Promise‹void›*
