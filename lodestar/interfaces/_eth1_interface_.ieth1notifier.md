[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/interface"](../modules/_eth1_interface_.md) › [IEth1Notifier](_eth1_interface_.ieth1notifier.md)

# Interface: IEth1Notifier <**T, U, V**>

The IEth1Notifier service watches the Eth1.0 chain for relevant events

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IEth1Events](_eth1_interface_.ieth1events.md), [IEth1Events](_eth1_interface_.ieth1events.md)› & object & object

  ↳ **IEth1Notifier**

## Implemented by

* [EthersEth1Notifier](../classes/_eth1_impl_ethers_.etherseth1notifier.md)
* [InteropEth1Notifier](../classes/_eth1_impl_interop_.interopeth1notifier.md)

## Index

### Properties

* [ _emitType](_eth1_interface_.ieth1notifier.md#optional--_emittype)
* [ _emitterType](_eth1_interface_.ieth1notifier.md#optional--_emittertype)
* [ _eventsType](_eth1_interface_.ieth1notifier.md#optional--_eventstype)

### Methods

* [depositCount](_eth1_interface_.ieth1notifier.md#depositcount)
* [depositRoot](_eth1_interface_.ieth1notifier.md#depositroot)
* [findBlocks](_eth1_interface_.ieth1notifier.md#findblocks)
* [getBlock](_eth1_interface_.ieth1notifier.md#getblock)
* [getEth1Data](_eth1_interface_.ieth1notifier.md#geteth1data)
* [getEth1Vote](_eth1_interface_.ieth1notifier.md#geteth1vote)
* [getHead](_eth1_interface_.ieth1notifier.md#gethead)
* [initBlockCache](_eth1_interface_.ieth1notifier.md#initblockcache)
* [initContract](_eth1_interface_.ieth1notifier.md#initcontract)
* [processBlockHeadUpdate](_eth1_interface_.ieth1notifier.md#processblockheadupdate)
* [processDepositLog](_eth1_interface_.ieth1notifier.md#processdepositlog)
* [processPastDeposits](_eth1_interface_.ieth1notifier.md#processpastdeposits)
* [pruneBlockCache](_eth1_interface_.ieth1notifier.md#pruneblockcache)
* [start](_eth1_interface_.ieth1notifier.md#start)
* [stop](_eth1_interface_.ieth1notifier.md#stop)

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Inherited from [IEth1Notifier](_eth1_interface_.ieth1notifier.md).[ _emitType](_eth1_interface_.ieth1notifier.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IEth1Notifier](_eth1_interface_.ieth1notifier.md).[ _emitterType](_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IEth1Notifier](_eth1_interface_.ieth1notifier.md).[ _eventsType](_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

## Methods

###  depositCount

▸ **depositCount**(`block?`: string | number): *Promise‹Number64›*

*Defined in [packages/lodestar/src/eth1/interface.ts:98](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L98)*

Retruns deposit count

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`block?` | string &#124; number |   |

**Returns:** *Promise‹Number64›*

___

###  depositRoot

▸ **depositRoot**(`block?`: string | number): *Promise‹Uint8Array›*

*Defined in [packages/lodestar/src/eth1/interface.ts:92](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L92)*

Return the merkle root of the deposits

**Parameters:**

Name | Type |
------ | ------ |
`block?` | string &#124; number |

**Returns:** *Promise‹Uint8Array›*

___

###  findBlocks

▸ **findBlocks**(`config`: IBeaconConfig, `periodStart`: Number64): *Block[]*

*Defined in [packages/lodestar/src/eth1/interface.ts:51](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L51)*

Find candidate blocks;

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`periodStart` | Number64 |

**Returns:** *Block[]*

___

###  getBlock

▸ **getBlock**(`blockHashOrBlockNumber`: string | number): *Promise‹Block›*

*Defined in [packages/lodestar/src/eth1/interface.ts:87](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L87)*

Returns block by block hash or number

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blockHashOrBlockNumber` | string &#124; number |   |

**Returns:** *Promise‹Block›*

___

###  getEth1Data

▸ **getEth1Data**(`block`: Block): *Promise‹Eth1Data›*

*Defined in [packages/lodestar/src/eth1/interface.ts:102](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | Block |

**Returns:** *Promise‹Eth1Data›*

___

###  getEth1Vote

▸ **getEth1Vote**(`config`: IBeaconConfig, `state`: BeaconState): *Promise‹Eth1Data›*

*Defined in [packages/lodestar/src/eth1/interface.ts:100](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *Promise‹Eth1Data›*

___

###  getHead

▸ **getHead**(): *Promise‹Block›*

*Defined in [packages/lodestar/src/eth1/interface.ts:81](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L81)*

Return the latest block

**Returns:** *Promise‹Block›*

___

###  initBlockCache

▸ **initBlockCache**(`config`: IBeaconConfig, `state`: BeaconState): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L39)*

Initialize the ETH1 block cache.

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *Promise‹void›*

___

###  initContract

▸ **initContract**(): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/interface.ts:104](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L104)*

**Returns:** *Promise‹void›*

___

###  processBlockHeadUpdate

▸ **processBlockHeadUpdate**(`blockNumber`: number | string): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/interface.ts:56](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L56)*

Process new block events sent from the Eth 1.0 chain

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | number &#124; string |

**Returns:** *Promise‹void›*

___

###  processDepositLog

▸ **processDepositLog**(`pubkey`: string, `withdrawalCredentials`: string, `amount`: string, `signature`: string, `merkleTreeIndex`: string): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/interface.ts:61](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L61)*

Process a Desposit log which has been received from the Eth 1.0 chain

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

▸ **processPastDeposits**(`fromBlock`: string | Number64, `toBlock?`: string | Number64): *Promise‹DepositData[]›*

*Defined in [packages/lodestar/src/eth1/interface.ts:74](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L74)*

Obtains Deposit logs between given range of blocks

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fromBlock` | string &#124; Number64 | either block hash or block number |
`toBlock?` | string &#124; Number64 | optional, if not submitted it will assume latest  |

**Returns:** *Promise‹DepositData[]›*

___

###  pruneBlockCache

▸ **pruneBlockCache**(`config`: IBeaconConfig, `state`: BeaconState): *void*

*Defined in [packages/lodestar/src/eth1/interface.ts:45](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L45)*

A checkpoint is finalized in ETH2.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | IBeaconConfig | - |
`state` | BeaconState |   |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/interface.ts:30](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L30)*

If there isn't Eth2Genesis events in past logs, it should fetch
all the deposit logs from block at which contract is deployed.
If there is Eth2Genesis event in logs it should just listen for new eth1 blocks.

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/interface.ts:31](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L31)*

**Returns:** *Promise‹void›*
