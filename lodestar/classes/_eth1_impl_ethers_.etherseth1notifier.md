[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/ethers"](../modules/_eth1_impl_ethers_.md) › [EthersEth1Notifier](_eth1_impl_ethers_.etherseth1notifier.md)

# Class: EthersEth1Notifier <**T, U, V**>

Watch the Eth1.0 chain using Ethers

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IEth1Events](../interfaces/_eth1_interface_.ieth1events.md), [IEth1Events](../interfaces/_eth1_interface_.ieth1events.md), this› & object & object

  ↳ **EthersEth1Notifier**

## Implements

* [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)

## Index

### Constructors

* [constructor](_eth1_impl_ethers_.etherseth1notifier.md#constructor)

### Properties

* [ _emitType](_eth1_impl_ethers_.etherseth1notifier.md#optional--_emittype)
* [ _emitterType](_eth1_impl_ethers_.etherseth1notifier.md#optional--_emittertype)
* [ _eventsType](_eth1_impl_ethers_.etherseth1notifier.md#optional--_eventstype)
* [blocksCache](_eth1_impl_ethers_.etherseth1notifier.md#private-blockscache)
* [config](_eth1_impl_ethers_.etherseth1notifier.md#private-config)
* [contract](_eth1_impl_ethers_.etherseth1notifier.md#private-contract)
* [getEth1Vote](_eth1_impl_ethers_.etherseth1notifier.md#geteth1vote)
* [logger](_eth1_impl_ethers_.etherseth1notifier.md#private-logger)
* [opts](_eth1_impl_ethers_.etherseth1notifier.md#private-opts)
* [provider](_eth1_impl_ethers_.etherseth1notifier.md#private-provider)

### Methods

* [contractExists](_eth1_impl_ethers_.etherseth1notifier.md#private-contractexists)
* [createDepositData](_eth1_impl_ethers_.etherseth1notifier.md#private-createdepositdata)
* [depositCount](_eth1_impl_ethers_.etherseth1notifier.md#depositcount)
* [depositRoot](_eth1_impl_ethers_.etherseth1notifier.md#depositroot)
* [findBlocks](_eth1_impl_ethers_.etherseth1notifier.md#findblocks)
* [getBlock](_eth1_impl_ethers_.etherseth1notifier.md#getblock)
* [getContractPastLogs](_eth1_impl_ethers_.etherseth1notifier.md#private-getcontractpastlogs)
* [getEth1Data](_eth1_impl_ethers_.etherseth1notifier.md#geteth1data)
* [getHead](_eth1_impl_ethers_.etherseth1notifier.md#gethead)
* [initBlockCache](_eth1_impl_ethers_.etherseth1notifier.md#initblockcache)
* [initContract](_eth1_impl_ethers_.etherseth1notifier.md#initcontract)
* [processBlockHeadUpdate](_eth1_impl_ethers_.etherseth1notifier.md#processblockheadupdate)
* [processDepositLog](_eth1_impl_ethers_.etherseth1notifier.md#processdepositlog)
* [processPastDeposits](_eth1_impl_ethers_.etherseth1notifier.md#processpastdeposits)
* [pruneBlockCache](_eth1_impl_ethers_.etherseth1notifier.md#pruneblockcache)
* [start](_eth1_impl_ethers_.etherseth1notifier.md#start)
* [stop](_eth1_impl_ethers_.etherseth1notifier.md#stop)

## Constructors

###  constructor

\+ **new EthersEth1Notifier**(`opts`: [IEthersEth1Options](../interfaces/_eth1_impl_ethers_.ietherseth1options.md), `__namedParameters`: object): *[EthersEth1Notifier](_eth1_impl_ethers_.etherseth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:44](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L44)*

**Parameters:**

▪ **opts**: *[IEthersEth1Options](../interfaces/_eth1_impl_ethers_.ietherseth1options.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`logger` | ILogger |

**Returns:** *[EthersEth1Notifier](_eth1_impl_ethers_.etherseth1notifier.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitterType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitterType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _eventsType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _eventsType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Private` blocksCache

• **blocksCache**: *[IBlockCache](../interfaces/_eth1_interface_.iblockcache.md)‹Block›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:34](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L34)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:40](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L40)*

___

### `Private` contract

• **contract**: *Contract*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:38](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L38)*

___

###  getEth1Vote

• **getEth1Vote**: *[getEth1Vote](../modules/_eth1_impl_eth1vote_.md#geteth1vote)* = getEth1Vote

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[getEth1Vote](../interfaces/_eth1_interface_.ieth1notifier.md#geteth1vote)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:32](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L32)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:44](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L44)*

___

### `Private` opts

• **opts**: *[IEthersEth1Options](../interfaces/_eth1_impl_ethers_.ietherseth1options.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:42](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L42)*

___

### `Private` provider

• **provider**: *BaseProvider*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:36](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L36)*

## Methods

### `Private` contractExists

▸ **contractExists**(`address`: string): *Promise‹boolean›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:219](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L219)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹boolean›*

___

### `Private` createDepositData

▸ **createDepositData**(`pubkey`: string, `withdrawalCredentials`: string, `amount`: string, `signature`: string): *DepositData*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:242](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L242)*

Parse deposit log elements to a [[DepositData]]

**Parameters:**

Name | Type |
------ | ------ |
`pubkey` | string |
`withdrawalCredentials` | string |
`amount` | string |
`signature` | string |

**Returns:** *DepositData*

___

###  depositCount

▸ **depositCount**(`block?`: string | number): *Promise‹number›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:188](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L188)*

**Parameters:**

Name | Type |
------ | ------ |
`block?` | string &#124; number |

**Returns:** *Promise‹number›*

___

###  depositRoot

▸ **depositRoot**(`block?`: string | number): *Promise‹Uint8Array›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:183](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L183)*

**Parameters:**

Name | Type |
------ | ------ |
`block?` | string &#124; number |

**Returns:** *Promise‹Uint8Array›*

___

###  findBlocks

▸ **findBlocks**(`config`: IBeaconConfig, `periodStart`: Number64): *Block[]*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:98](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`periodStart` | Number64 |

**Returns:** *Block[]*

___

###  getBlock

▸ **getBlock**(`blockHashOrBlockNumber`: string | number): *Promise‹Block›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:179](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L179)*

**Parameters:**

Name | Type |
------ | ------ |
`blockHashOrBlockNumber` | string &#124; number |

**Returns:** *Promise‹Block›*

___

### `Private` getContractPastLogs

▸ **getContractPastLogs**(`topics`: string[], `fromBlock`: Number64 | string, `toBlock`: Number64 | string | null): *Promise‹Log[]›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:225](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L225)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`topics` | string[] | - |
`fromBlock` | Number64 &#124; string | this.opts.depositContract.deployedAt |
`toBlock` | Number64 &#124; string &#124; null | null |

**Returns:** *Promise‹Log[]›*

___

###  getEth1Data

▸ **getEth1Data**(`block`: Block): *Promise‹Eth1Data›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:193](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | Block |

**Returns:** *Promise‹Eth1Data›*

___

###  getHead

▸ **getHead**(): *Promise‹Block›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:175](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L175)*

**Returns:** *Promise‹Block›*

___

###  initBlockCache

▸ **initBlockCache**(`config`: IBeaconConfig, `state`: BeaconState): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:76](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *Promise‹void›*

___

###  initContract

▸ **initContract**(): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:206](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L206)*

**Returns:** *Promise‹void›*

___

###  processBlockHeadUpdate

▸ **processBlockHeadUpdate**(`blockNumber`: number): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:103](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | number |

**Returns:** *Promise‹void›*

___

###  processDepositLog

▸ **processDepositLog**(`pubkey`: string, `withdrawalCredentials`: string, `amount`: string, `signature`: string, `merkleTreeIndex`: string): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:128](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`pubkey` | string |
`withdrawalCredentials` | string |
`amount` | string |
`signature` | string |
`merkleTreeIndex` | string |

**Returns:** *Promise‹void›*

___

###  processPastDeposits

▸ **processPastDeposits**(`fromBlock`: string | number, `toBlock?`: string | number): *Promise‹DepositData[]›*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:151](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L151)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fromBlock` | string &#124; number | this.opts.depositContract.deployedAt |
`toBlock?` | string &#124; number | - |

**Returns:** *Promise‹DepositData[]›*

___

###  pruneBlockCache

▸ **pruneBlockCache**(`config`: IBeaconConfig, `finalizedState`: BeaconState): *void*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:93](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`finalizedState` | BeaconState |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:64](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L64)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:88](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/ethers.ts#L88)*

**Returns:** *Promise‹void›*
