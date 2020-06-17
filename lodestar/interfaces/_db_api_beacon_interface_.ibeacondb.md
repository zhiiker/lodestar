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
* [depositData](_db_api_beacon_interface_.ibeacondb.md#depositdata)
* [depositDataRoot](_db_api_beacon_interface_.ibeacondb.md#depositdataroot)
* [eth1Data](_db_api_beacon_interface_.ibeacondb.md#eth1data)
* [proposerSlashing](_db_api_beacon_interface_.ibeacondb.md#proposerslashing)
* [stateArchive](_db_api_beacon_interface_.ibeacondb.md#statearchive)
* [stateCache](_db_api_beacon_interface_.ibeacondb.md#statecache)
* [voluntaryExit](_db_api_beacon_interface_.ibeacondb.md#voluntaryexit)

### Methods

* [processBlockOperations](_db_api_beacon_interface_.ibeacondb.md#processblockoperations)

## Properties

###  aggregateAndProof

• **aggregateAndProof**: *[AggregateAndProofRepository](../classes/_db_api_beacon_repositories_aggregateandproof_.aggregateandproofrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:49](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L49)*

___

###  attestation

• **attestation**: *[AttestationRepository](../classes/_db_api_beacon_repositories_attestation_.attestationrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:48](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L48)*

___

###  attesterSlashing

• **attesterSlashing**: *[AttesterSlashingRepository](../classes/_db_api_beacon_repositories_attesterslashing_.attesterslashingrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:52](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L52)*

___

###  badBlock

• **badBlock**: *[BadBlockRepository](../classes/_db_api_beacon_repositories_badblock_.badblockrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:33](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L33)*

___

###  block

• **block**: *[BlockRepository](../classes/_db_api_beacon_repositories_block_.blockrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:36](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L36)*

___

###  blockArchive

• **blockArchive**: *[BlockArchiveRepository](../classes/_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:42](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L42)*

___

###  depositData

• **depositData**: *[DepositDataRepository](../classes/_db_api_beacon_repositories_depositdata_.depositdatarepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:53](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L53)*

___

###  depositDataRoot

• **depositDataRoot**: *[DepositDataRootRepository](../classes/_db_api_beacon_repositories_depositdataroot_.depositdatarootrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:58](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L58)*

___

###  eth1Data

• **eth1Data**: *[Eth1DataRepository](../classes/_db_api_beacon_repositories_eth1data_.eth1datarepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:59](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L59)*

___

###  proposerSlashing

• **proposerSlashing**: *[ProposerSlashingRepository](../classes/_db_api_beacon_repositories_proposerslashing_.proposerslashingrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:51](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L51)*

___

###  stateArchive

• **stateArchive**: *[StateArchiveRepository](../classes/_db_api_beacon_repositories_statearchive_.statearchiverepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:45](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L45)*

___

###  stateCache

• **stateCache**: *[StateCache](../classes/_db_api_beacon_statecache_.statecache.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L39)*

___

###  voluntaryExit

• **voluntaryExit**: *[VoluntaryExitRepository](../classes/_db_api_beacon_repositories_voluntaryexit_.voluntaryexitrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:50](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L50)*

## Methods

###  processBlockOperations

▸ **processBlockOperations**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/interface.ts:61](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/db/api/beacon/interface.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*
