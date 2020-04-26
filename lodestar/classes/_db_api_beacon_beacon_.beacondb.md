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
* [start](_db_api_beacon_beacon_.beacondb.md#start)
* [stop](_db_api_beacon_beacon_.beacondb.md#stop)
* [storeChainHead](_db_api_beacon_beacon_.beacondb.md#storechainhead)
* [updateChainHead](_db_api_beacon_beacon_.beacondb.md#updatechainhead)

## Constructors

###  constructor

\+ **new BeaconDb**(`opts`: [IDatabaseApiOptions](../interfaces/_db_api_abstract_.idatabaseapioptions.md)): *[BeaconDb](_db_api_beacon_beacon_.beacondb.md)*

*Overrides [DatabaseService](_db_api_abstract_.databaseservice.md).[constructor](_db_api_abstract_.databaseservice.md#protected-constructor)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:44](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IDatabaseApiOptions](../interfaces/_db_api_abstract_.idatabaseapioptions.md) |

**Returns:** *[BeaconDb](_db_api_beacon_beacon_.beacondb.md)*

## Properties

###  aggregateAndProof

• **aggregateAndProof**: *[AggregateAndProofRepository](_db_api_beacon_repositories_aggregateandproof_.aggregateandproofrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[aggregateAndProof](../interfaces/_db_api_beacon_interface_.ibeacondb.md#aggregateandproof)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:34](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L34)*

___

###  attestation

• **attestation**: *[AttestationRepository](_db_api_beacon_repositories_attestations_.attestationrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[attestation](../interfaces/_db_api_beacon_interface_.ibeacondb.md#attestation)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:32](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L32)*

___

###  attesterSlashing

• **attesterSlashing**: *[AttesterSlashingRepository](_db_api_beacon_repositories_attesterslashing_.attesterslashingrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[attesterSlashing](../interfaces/_db_api_beacon_interface_.ibeacondb.md#attesterslashing)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:40](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L40)*

___

###  block

• **block**: *[BlockRepository](_db_api_beacon_repositories_block_.blockrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[block](../interfaces/_db_api_beacon_interface_.ibeacondb.md#block)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:28](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L28)*

___

###  blockArchive

• **blockArchive**: *[BlockArchiveRepository](_db_api_beacon_repositories_blockarchive_.blockarchiverepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[blockArchive](../interfaces/_db_api_beacon_interface_.ibeacondb.md#blockarchive)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:30](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L30)*

___

###  chain

• **chain**: *[ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[chain](../interfaces/_db_api_beacon_interface_.ibeacondb.md#chain)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:24](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L24)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[config](_db_api_abstract_.databaseservice.md#protected-config)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:12](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/abstract.ts#L12)*

___

### `Protected` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[db](_db_api_abstract_.databaseservice.md#protected-db)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:13](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/abstract.ts#L13)*

___

###  depositData

• **depositData**: *[DepositDataRepository](_db_api_beacon_repositories_depositdata_.depositdatarepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[depositData](../interfaces/_db_api_beacon_interface_.ibeacondb.md#depositdata)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:42](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L42)*

___

###  depositDataRootList

• **depositDataRootList**: *[DepositDataRootListRepository](_db_api_beacon_repositories_depositdatarootlist_.depositdatarootlistrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[depositDataRootList](../interfaces/_db_api_beacon_interface_.ibeacondb.md#depositdatarootlist)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:44](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L44)*

___

###  proposerSlashing

• **proposerSlashing**: *[ProposerSlashingRepository](_db_api_beacon_repositories_proposerslashing_.proposerslashingrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[proposerSlashing](../interfaces/_db_api_beacon_interface_.ibeacondb.md#proposerslashing)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:38](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L38)*

___

###  state

• **state**: *[StateRepository](_db_api_beacon_repositories_state_.staterepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[state](../interfaces/_db_api_beacon_interface_.ibeacondb.md#state)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:26](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L26)*

___

###  voluntaryExit

• **voluntaryExit**: *[VoluntaryExitRepository](_db_api_beacon_repositories_voluntaryexits_.voluntaryexitrepository.md)*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md).[voluntaryExit](../interfaces/_db_api_beacon_interface_.ibeacondb.md#voluntaryexit)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:36](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L36)*

## Methods

###  getValidatorIndex

▸ **getValidatorIndex**(`publicKey`: BLSPubkey): *Promise‹ValidatorIndex›*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:99](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`publicKey` | BLSPubkey |

**Returns:** *Promise‹ValidatorIndex›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[start](_db_api_abstract_.databaseservice.md#start)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:20](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/abstract.ts#L20)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Inherited from [DatabaseService](_db_api_abstract_.databaseservice.md).[stop](_db_api_abstract_.databaseservice.md#stop)*

*Defined in [packages/lodestar/src/db/api/abstract.ts:24](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/abstract.ts#L24)*

**Returns:** *Promise‹void›*

___

###  storeChainHead

▸ **storeChainHead**(`signedBlock`: SignedBeaconBlock, `state`: BeaconState): *Promise‹void›*

*Implementation of [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:61](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L61)*

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

*Defined in [packages/lodestar/src/db/api/beacon/beacon.ts:76](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/db/api/beacon/beacon.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |
`stateRoot` | Uint8Array |

**Returns:** *Promise‹void›*
