[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/interop"](../modules/_eth1_impl_interop_.md) › [InteropEth1Notifier](_eth1_impl_interop_.interopeth1notifier.md)

# Class: InteropEth1Notifier

## Hierarchy

* EventEmitter

  ↳ **InteropEth1Notifier**

## Implements

* [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)

## Index

### Constructors

* [constructor](_eth1_impl_interop_.interopeth1notifier.md#constructor)

### Properties

* [defaultMaxListeners](_eth1_impl_interop_.interopeth1notifier.md#static-defaultmaxlisteners)

### Methods

* [addListener](_eth1_impl_interop_.interopeth1notifier.md#addlistener)
* [depositCount](_eth1_impl_interop_.interopeth1notifier.md#depositcount)
* [depositRoot](_eth1_impl_interop_.interopeth1notifier.md#depositroot)
* [emit](_eth1_impl_interop_.interopeth1notifier.md#emit)
* [eventNames](_eth1_impl_interop_.interopeth1notifier.md#eventnames)
* [findBlocks](_eth1_impl_interop_.interopeth1notifier.md#findblocks)
* [getBlock](_eth1_impl_interop_.interopeth1notifier.md#getblock)
* [getEth1Data](_eth1_impl_interop_.interopeth1notifier.md#geteth1data)
* [getEth1Vote](_eth1_impl_interop_.interopeth1notifier.md#geteth1vote)
* [getHead](_eth1_impl_interop_.interopeth1notifier.md#gethead)
* [getMaxListeners](_eth1_impl_interop_.interopeth1notifier.md#getmaxlisteners)
* [initBlockCache](_eth1_impl_interop_.interopeth1notifier.md#initblockcache)
* [initContract](_eth1_impl_interop_.interopeth1notifier.md#initcontract)
* [listenerCount](_eth1_impl_interop_.interopeth1notifier.md#listenercount)
* [listeners](_eth1_impl_interop_.interopeth1notifier.md#listeners)
* [off](_eth1_impl_interop_.interopeth1notifier.md#off)
* [on](_eth1_impl_interop_.interopeth1notifier.md#on)
* [once](_eth1_impl_interop_.interopeth1notifier.md#once)
* [prependListener](_eth1_impl_interop_.interopeth1notifier.md#prependlistener)
* [prependOnceListener](_eth1_impl_interop_.interopeth1notifier.md#prependoncelistener)
* [processBlockHeadUpdate](_eth1_impl_interop_.interopeth1notifier.md#processblockheadupdate)
* [processDepositLog](_eth1_impl_interop_.interopeth1notifier.md#processdepositlog)
* [processPastDeposits](_eth1_impl_interop_.interopeth1notifier.md#processpastdeposits)
* [pruneBlockCache](_eth1_impl_interop_.interopeth1notifier.md#pruneblockcache)
* [rawListeners](_eth1_impl_interop_.interopeth1notifier.md#rawlisteners)
* [removeAllListeners](_eth1_impl_interop_.interopeth1notifier.md#removealllisteners)
* [removeListener](_eth1_impl_interop_.interopeth1notifier.md#removelistener)
* [setMaxListeners](_eth1_impl_interop_.interopeth1notifier.md#setmaxlisteners)
* [start](_eth1_impl_interop_.interopeth1notifier.md#start)
* [stop](_eth1_impl_interop_.interopeth1notifier.md#stop)
* [listenerCount](_eth1_impl_interop_.interopeth1notifier.md#static-listenercount)

## Constructors

###  constructor

\+ **new InteropEth1Notifier**(): *[InteropEth1Notifier](_eth1_impl_interop_.interopeth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:13](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L13)*

**Returns:** *[InteropEth1Notifier](_eth1_impl_interop_.interopeth1notifier.md)*

## Properties

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[defaultMaxListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[addListener](../interfaces/_db_controller_interface_.idatabasecontroller.md#addlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  depositCount

▸ **depositCount**(`block?`: string | number): *Promise‹Number64›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:42](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`block?` | string &#124; number |

**Returns:** *Promise‹Number64›*

___

###  depositRoot

▸ **depositRoot**(): *Promise‹Uint8Array›*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:30](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L30)*

**Returns:** *Promise‹Uint8Array›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[emit](../interfaces/_db_controller_interface_.idatabasecontroller.md#emit)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[eventNames](../interfaces/_db_controller_interface_.idatabasecontroller.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  findBlocks

▸ **findBlocks**(`config`: IBeaconConfig, `periodStart`: Number64): *Block[]*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:78](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L78)*

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

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:34](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`blockHashOrBlockNumber` | string &#124; number |

**Returns:** *Promise‹Block›*

___

###  getEth1Data

▸ **getEth1Data**(`eth1Head`: Block): *Promise‹Eth1Data›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:61](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`eth1Head` | Block |

**Returns:** *Promise‹Eth1Data›*

___

###  getEth1Vote

▸ **getEth1Vote**(`config`: IBeaconConfig, `state`: BeaconState): *Promise‹Eth1Data›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:50](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *Promise‹Eth1Data›*

___

###  getHead

▸ **getHead**(): *Promise‹Block›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:38](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L38)*

**Returns:** *Promise‹Block›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[getMaxListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  initBlockCache

▸ **initBlockCache**(`config`: IBeaconConfig, `state`: BeaconState): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:70](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L70)*

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

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:65](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L65)*

**Returns:** *Promise‹void›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[listenerCount](../interfaces/_db_controller_interface_.idatabasecontroller.md#static-listenercount)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[listeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#listeners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[off](../interfaces/_db_controller_interface_.idatabasecontroller.md#off)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[on](../interfaces/_db_controller_interface_.idatabasecontroller.md#on)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:21

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[once](../interfaces/_db_controller_interface_.idatabasecontroller.md#once)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[prependListener](../interfaces/_db_controller_interface_.idatabasecontroller.md#prependlistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[prependOnceListener](../interfaces/_db_controller_interface_.idatabasecontroller.md#prependoncelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  processBlockHeadUpdate

▸ **processBlockHeadUpdate**(`blockNumber`: string | number): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:24](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | string &#124; number |

**Returns:** *Promise‹void›*

___

###  processDepositLog

▸ **processDepositLog**(`dataHex`: string, `indexHex`: string): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:27](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`dataHex` | string |
`indexHex` | string |

**Returns:** *Promise‹void›*

___

###  processPastDeposits

▸ **processPastDeposits**(`fromBlock`: string | number, `toBlock?`: string | number): *Promise‹DepositData[]›*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:46](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`fromBlock` | string &#124; number |
`toBlock?` | string &#124; number |

**Returns:** *Promise‹DepositData[]›*

___

###  pruneBlockCache

▸ **pruneBlockCache**(`config`: IBeaconConfig, `finalizedState`: BeaconState): *void*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:74](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`finalizedState` | BeaconState |

**Returns:** *void*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[rawListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#rawlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[removeAllListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#removealllisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[removeListener](../interfaces/_db_controller_interface_.idatabasecontroller.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[setMaxListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#setmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:18](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L18)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/eth1/impl/interop.ts:21](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/eth1/impl/interop.ts#L21)*

**Returns:** *Promise‹void›*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[listenerCount](../interfaces/_db_controller_interface_.idatabasecontroller.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
