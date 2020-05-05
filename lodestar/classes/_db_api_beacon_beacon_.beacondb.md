[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/beacon"](../modules/_db_api_beacon_beacon_.md) › [BeaconDb](_db_api_beacon_beacon_.beacondb.md)

# Class: BeaconDb

## Hierarchy

* [DatabaseService](_db_api_abstract_.databaseservice.md)

  ↳ **BeaconDb**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md)
* [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)

## Index

### Constructors

* [constructor](_db_api_beacon_beacon_.beacondb.md#constructor)

### Properties

* [aggregateAndProof](_db_api_beacon_beacon_.beacondb.md#aggregateandproof)
* [attestation](_db_api_beacon_beacon_.beacondb.md#attestation)
* [attesterSlashing](_db_api_beacon_beacon_.beacondb.md#attesterslashing)
* [badBlock](_db_api_beacon_beacon_.beacondb.md#badblock)
* [block](_db_api_beacon_beacon_.beacondb.md#block)
* [blockArchive](_db_api_beacon_beacon_.beacondb.md#blockarchive)
* [chain](_db_api_beacon_beacon_.beacondb.md#chain)
* [config](_db_api_beacon_beacon_.beacondb.md#protected-config)
* [db](_db_api_beacon_beacon_.beacondb.md#protected-db)
* [depositData](_db_api_beacon_beacon_.beacondb.md#depositdata)
* [depositDataRootList](_db_api_beacon_beacon_.beacondb.md#depositdatarootlist)
* [proposerSlashing](_db_api_beacon_beacon_.beacondb.md#proposerslashing)
* [state](_db_api_beacon_beacon_.beacondb.md#state)
* [voluntaryExit](_db_api_beacon_beacon_.beacondb.md#voluntaryexit)

### Methods

* [getValidatorIndex](_db_api_beacon_beacon_.beacondb.md#getvalidatorindex)
* [processBlockOperations](_db_api_beacon_beacon_.beacondb.md#processblockoperations)
* [start](_db_api_beacon_beacon_.beacondb.md#start)
* [stop](_db_api_beacon_beacon_.beacondb.md#stop)
* [storeChainHead](_db_api_beacon_beacon_.beacondb.md#storechainhead)
* [updateChainHead](_db_api_beacon_beacon_.beacondb.md#updatechainhead)

## Constructors

###  constructor

\+ **new BeaconDb**(`opts`: [IDatabaseApiOptions](../interfaces/_db_api_abstract_.idatabaseapioptions.md)): *[BeaconDb](_db_api_beacon_beacon_.beacondb.md)*

*Overrides [DatabaseService](_db_api_abstract_.databaseservice.md).[constructor](_db_api_abstract_.databaseservice.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:47](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IDatabaseApiOptions](../interfaces/_db_api_abstract_.idatabaseapioptions.md) |

**Returns:** *[BeaconDb](_db_api_beacon_beacon_.beacondb.md)*

## Properties

###  aggregateAndProof

• **aggregateAndProof**: *[AggregateAndProofRepository](_db_api_beacon_repositories_aggregateandproof_.aggregateandproofrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[aggregateAndProof](../interfaces/_db_api_beacon_interface_.ibeacondb.md#aggregateandproof)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:37](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L37)*

___

###  attestation

• **attestation**: *[AttestationRepository](_db_api_beacon_repositories_attestation_.attestationrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[attestation](../interfaces/_db_api_beacon_interface_.ibeacondb.md#attestation)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:35](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L35)*

___

###  attesterSlashing

• **attesterSlashing**: *[AttesterSlashingRepository](_db_api_beacon_repositories_attesterslashing_.attesterslashingrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[attesterSlashing](../interfaces/_db_api_beacon_interface_.ibeacondb.md#attesterslashing)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:43](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L43)*

___

###  badBlock

• **badBlock**: *[BadBlockRepository](_db_api_beacon_repositories_badblock_.badblockrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[badBlock](../interfaces/_db_api_beacon_interface_.ibeacondb.md#badblock)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:29](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L29)*

___

###  block

• **block**: *[BlockRepository](_db_api_beacon_repositories_block_.blockrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[block](../interfaces/_db_api_beacon_interface_.ibeacondb.md#block)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:31](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L31)*

___

###  blockArchive

• **blockArchive**: *[BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[blockArchive](../interfaces/_db_api_beacon_interface_.ibeacondb.md#blockarchive)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:33](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L33)*

___

###  chain

• **chain**: *[ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[chain](../interfaces/_db_api_beacon_interface_.ibeacondb.md#chain)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:25](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L25)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[config](_db_api_abstract_.databaseservice.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/abstract.ts#L12)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[db](_db_api_abstract_.databaseservice.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:13](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/abstract.ts#L13)*

___

###  depositData

• **depositData**: *[DepositDataRepository](_db_api_beacon_repositories_depositdata_.depositdatarepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[depositData](../interfaces/_db_api_beacon_interface_.ibeacondb.md#depositdata)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:45](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L45)*

___

###  depositDataRootList

• **depositDataRootList**: *[DepositDataRootListRepository](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[depositDataRootList](../interfaces/_db_api_beacon_interface_.ibeacondb.md#depositdatarootlist)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:47](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L47)*

___

###  proposerSlashing

• **proposerSlashing**: *[ProposerSlashingRepository](_db_api_beacon_repositories_proposerslashing_.proposerslashingrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[proposerSlashing](../interfaces/_db_api_beacon_interface_.ibeacondb.md#proposerslashing)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:41](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L41)*

___

###  state

• **state**: *[StateRepository](_db_api_beacon_repositories_state_.staterepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[state](../interfaces/_db_api_beacon_interface_.ibeacondb.md#state)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:27](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L27)*

___

###  voluntaryExit

• **voluntaryExit**: *[VoluntaryExitRepository](_db_api_beacon_repositories_voluntaryexit_.voluntaryexitrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[voluntaryExit](../interfaces/_db_api_beacon_interface_.ibeacondb.md#voluntaryexit)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:39](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L39)*

## Methods

###  getValidatorIndex

▸ **getValidatorIndex**(`publicKey`: BLSPubkey): *Promise‹ValidatorIndex›*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:103](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`publicKey` | BLSPubkey |

**Returns:** *Promise‹ValidatorIndex›*

___

###  processBlockOperations

▸ **processBlockOperations**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:112](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L112)*

Remove stored operations based on a newly processed block

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[start](_db_api_abstract_.databaseservice.md#start)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/abstract.ts#L20)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[stop](_db_api_abstract_.databaseservice.md#stop)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/abstract.ts#L24)*

**Returns:** *Promise‹void›*

___

###  storeChainHead

▸ **storeChainHead**(`signedBlock`: SignedBeaconBlock, `state`: BeaconState): *Promise‹void›*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:65](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |
`state` | BeaconState |

**Returns:** *Promise‹void›*

___

###  updateChainHead

▸ **updateChainHead**(`blockRoot`: Uint8Array, `stateRoot`: Uint8Array): *Promise‹void›*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:80](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/db/api/beacon/beacon.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |
`stateRoot` | Uint8Array |

**Returns:** *Promise‹void›*
