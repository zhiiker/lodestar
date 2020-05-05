[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/retryProvider"](../modules/_eth1_impl_retryprovider_.md) › [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md)

# Class: RetryProvider

## Hierarchy

* JsonRpcProvider

  ↳ **RetryProvider**

## Implements

* OnceBlockable

## Index

### Constructors

* [constructor](_eth1_impl_retryprovider_.retryprovider.md#constructor)

### Properties

* [_emitted](_eth1_impl_retryprovider_.retryprovider.md#protected-_emitted)
* [attempts](_eth1_impl_retryprovider_.retryprovider.md#attempts)
* [blockNumber](_eth1_impl_retryprovider_.retryprovider.md#blocknumber)
* [connection](_eth1_impl_retryprovider_.retryprovider.md#connection)
* [network](_eth1_impl_retryprovider_.retryprovider.md#network)
* [polling](_eth1_impl_retryprovider_.retryprovider.md#polling)
* [pollingInterval](_eth1_impl_retryprovider_.retryprovider.md#pollinginterval)
* [ready](_eth1_impl_retryprovider_.retryprovider.md#protected-ready)

### Methods

* [_getAddress](_eth1_impl_retryprovider_.retryprovider.md#_getaddress)
* [_getFastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_getfastblocknumber)
* [_setFastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_setfastblocknumber)
* [_startPending](_eth1_impl_retryprovider_.retryprovider.md#protected-_startpending)
* [_stopPending](_eth1_impl_retryprovider_.retryprovider.md#protected-_stoppending)
* [_wrapTransaction](_eth1_impl_retryprovider_.retryprovider.md#_wraptransaction)
* [addEventListener](_eth1_impl_retryprovider_.retryprovider.md#addeventlistener)
* [call](_eth1_impl_retryprovider_.retryprovider.md#call)
* [doPoll](_eth1_impl_retryprovider_.retryprovider.md#dopoll)
* [emit](_eth1_impl_retryprovider_.retryprovider.md#emit)
* [estimateGas](_eth1_impl_retryprovider_.retryprovider.md#estimategas)
* [getBalance](_eth1_impl_retryprovider_.retryprovider.md#getbalance)
* [getBlock](_eth1_impl_retryprovider_.retryprovider.md#getblock)
* [getBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#getblocknumber)
* [getCode](_eth1_impl_retryprovider_.retryprovider.md#getcode)
* [getEtherPrice](_eth1_impl_retryprovider_.retryprovider.md#getetherprice)
* [getGasPrice](_eth1_impl_retryprovider_.retryprovider.md#getgasprice)
* [getLogs](_eth1_impl_retryprovider_.retryprovider.md#getlogs)
* [getNetwork](_eth1_impl_retryprovider_.retryprovider.md#getnetwork)
* [getSigner](_eth1_impl_retryprovider_.retryprovider.md#getsigner)
* [getStorageAt](_eth1_impl_retryprovider_.retryprovider.md#getstorageat)
* [getTransaction](_eth1_impl_retryprovider_.retryprovider.md#gettransaction)
* [getTransactionCount](_eth1_impl_retryprovider_.retryprovider.md#gettransactioncount)
* [getTransactionReceipt](_eth1_impl_retryprovider_.retryprovider.md#gettransactionreceipt)
* [listAccounts](_eth1_impl_retryprovider_.retryprovider.md#listaccounts)
* [listenerCount](_eth1_impl_retryprovider_.retryprovider.md#listenercount)
* [listeners](_eth1_impl_retryprovider_.retryprovider.md#listeners)
* [lookupAddress](_eth1_impl_retryprovider_.retryprovider.md#lookupaddress)
* [on](_eth1_impl_retryprovider_.retryprovider.md#on)
* [once](_eth1_impl_retryprovider_.retryprovider.md#once)
* [perform](_eth1_impl_retryprovider_.retryprovider.md#perform)
* [removeAllListeners](_eth1_impl_retryprovider_.retryprovider.md#removealllisteners)
* [removeListener](_eth1_impl_retryprovider_.retryprovider.md#removelistener)
* [resetEventsBlock](_eth1_impl_retryprovider_.retryprovider.md#reseteventsblock)
* [resolveName](_eth1_impl_retryprovider_.retryprovider.md#resolvename)
* [send](_eth1_impl_retryprovider_.retryprovider.md#send)
* [sendTransaction](_eth1_impl_retryprovider_.retryprovider.md#sendtransaction)
* [waitForTransaction](_eth1_impl_retryprovider_.retryprovider.md#waitfortransaction)
* [checkTransactionResponse](_eth1_impl_retryprovider_.retryprovider.md#static-checktransactionresponse)
* [hexlifyTransaction](_eth1_impl_retryprovider_.retryprovider.md#static-hexlifytransaction)
* [isProvider](_eth1_impl_retryprovider_.retryprovider.md#static-isprovider)

## Constructors

###  constructor

\+ **new RetryProvider**(`attempts`: number, `url?`: ConnectionInfo | string, `network?`: Networkish): *[RetryProvider](_eth1_impl_retryprovider_.retryprovider.md)*

*Overrides void*

*Defined in [packages/lodestar/src/eth1/impl/retryProvider.ts:8](https://github.com/ChainSafe/lodestar/blob/af95f0522/packages/lodestar/src/eth1/impl/retryProvider.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`attempts` | number |
`url?` | ConnectionInfo &#124; string |
`network?` | Networkish |

**Returns:** *[RetryProvider](_eth1_impl_retryprovider_.retryprovider.md)*

## Properties

### `Protected` _emitted

• **_emitted**: *object*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_emitted](_eth1_impl_retryprovider_.retryprovider.md#protected-_emitted)*

Defined in node_modules/ethers/providers/base-provider.d.ts:10

#### Type declaration:

* \[ **eventName**: *string*\]: number | "pending"

___

###  attempts

• **attempts**: *number*

*Defined in [packages/lodestar/src/eth1/impl/retryProvider.ts:8](https://github.com/ChainSafe/lodestar/blob/af95f0522/packages/lodestar/src/eth1/impl/retryProvider.ts#L8)*

___

###  blockNumber

• **blockNumber**: *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[blockNumber](_eth1_impl_retryprovider_.retryprovider.md#blocknumber)*

Defined in node_modules/ethers/providers/base-provider.d.ts:35

___

###  connection

• **connection**: *ConnectionInfo*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[connection](_eth1_impl_retryprovider_.retryprovider.md#connection)*

Defined in node_modules/ethers/providers/json-rpc-provider.d.ts:22

___

###  network

• **network**: *Network*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[network](_eth1_impl_retryprovider_.retryprovider.md#network)*

Defined in node_modules/ethers/providers/base-provider.d.ts:33

___

###  polling

• **polling**: *boolean*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[polling](_eth1_impl_retryprovider_.retryprovider.md#polling)*

Defined in node_modules/ethers/providers/base-provider.d.ts:36

___

###  pollingInterval

• **pollingInterval**: *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[pollingInterval](_eth1_impl_retryprovider_.retryprovider.md#pollinginterval)*

Defined in node_modules/ethers/providers/base-provider.d.ts:37

___

### `Protected` ready

• **ready**: *Promise‹Network›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[ready](_eth1_impl_retryprovider_.retryprovider.md#protected-ready)*

Defined in node_modules/ethers/providers/base-provider.d.ts:29

 ready

 A Promise<Network> that resolves only once the provider is ready.

 Sub-classes that call the super with a network without a chainId
 MUST set this. Standard named networks have a known chainId.

## Methods

###  _getAddress

▸ **_getAddress**(`addressOrName`: string): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getAddress](_eth1_impl_retryprovider_.retryprovider.md#_getaddress)*

Defined in node_modules/ethers/providers/base-provider.d.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string |

**Returns:** *Promise‹string›*

___

###  _getFastBlockNumber

▸ **_getFastBlockNumber**(): *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getFastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_getfastblocknumber)*

Defined in node_modules/ethers/providers/base-provider.d.ts:38

**Returns:** *Promise‹number›*

___

###  _setFastBlockNumber

▸ **_setFastBlockNumber**(`blockNumber`: number): *void*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_setFastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_setfastblocknumber)*

Defined in node_modules/ethers/providers/base-provider.d.ts:39

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | number |

**Returns:** *void*

___

### `Protected` _startPending

▸ **_startPending**(): *void*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_startPending](_eth1_impl_retryprovider_.retryprovider.md#protected-_startpending)*

*Overrides void*

Defined in node_modules/ethers/providers/json-rpc-provider.d.ts:29

**Returns:** *void*

___

### `Protected` _stopPending

▸ **_stopPending**(): *void*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_stopPending](_eth1_impl_retryprovider_.retryprovider.md#protected-_stoppending)*

*Overrides void*

Defined in node_modules/ethers/providers/json-rpc-provider.d.ts:30

**Returns:** *void*

___

###  _wrapTransaction

▸ **_wrapTransaction**(`tx`: Transaction, `hash?`: string): *TransactionResponse*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_wrapTransaction](_eth1_impl_retryprovider_.retryprovider.md#_wraptransaction)*

Defined in node_modules/ethers/providers/base-provider.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`tx` | Transaction |
`hash?` | string |

**Returns:** *TransactionResponse*

___

###  addEventListener

▸ **addEventListener**(`eventName`: EventType, `listener`: Listener): *Provider*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[addEventListener](_eth1_impl_retryprovider_.retryprovider.md#addeventlistener)*

Defined in node_modules/ethers/providers/base-provider.d.ts:69

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`listener` | Listener |

**Returns:** *Provider*

___

###  call

▸ **call**(`transaction`: TransactionRequest, `blockTag?`: BlockTag | Promise‹BlockTag›): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[call](_eth1_impl_retryprovider_.retryprovider.md#call)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | TransactionRequest |
`blockTag?` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹string›*

___

###  doPoll

▸ **doPoll**(): *void*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[doPoll](_eth1_impl_retryprovider_.retryprovider.md#dopoll)*

Defined in node_modules/ethers/providers/base-provider.d.ts:62

**Returns:** *void*

___

###  emit

▸ **emit**(`eventName`: EventType, ...`args`: Array‹any›): *boolean*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[emit](_eth1_impl_retryprovider_.retryprovider.md#emit)*

Defined in node_modules/ethers/providers/base-provider.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`...args` | Array‹any› |

**Returns:** *boolean*

___

###  estimateGas

▸ **estimateGas**(`transaction`: TransactionRequest): *Promise‹BigNumber›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[estimateGas](_eth1_impl_retryprovider_.retryprovider.md#estimategas)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | TransactionRequest |

**Returns:** *Promise‹BigNumber›*

___

###  getBalance

▸ **getBalance**(`addressOrName`: string | Promise‹string›, `blockTag?`: BlockTag | Promise‹BlockTag›): *Promise‹BigNumber›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getBalance](_eth1_impl_retryprovider_.retryprovider.md#getbalance)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string &#124; Promise‹string› |
`blockTag?` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹BigNumber›*

___

###  getBlock

▸ **getBlock**(`blockHashOrBlockTag`: BlockTag | string | Promise‹BlockTag | string›, `includeTransactions?`: boolean): *Promise‹Block›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getBlock](_eth1_impl_retryprovider_.retryprovider.md#getblock)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`blockHashOrBlockTag` | BlockTag &#124; string &#124; Promise‹BlockTag &#124; string› |
`includeTransactions?` | boolean |

**Returns:** *Promise‹Block›*

___

###  getBlockNumber

▸ **getBlockNumber**(): *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#getblocknumber)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:41

**Returns:** *Promise‹number›*

___

###  getCode

▸ **getCode**(`addressOrName`: string | Promise‹string›, `blockTag?`: BlockTag | Promise‹BlockTag›): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getCode](_eth1_impl_retryprovider_.retryprovider.md#getcode)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string &#124; Promise‹string› |
`blockTag?` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹string›*

___

###  getEtherPrice

▸ **getEtherPrice**(): *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getEtherPrice](_eth1_impl_retryprovider_.retryprovider.md#getetherprice)*

Defined in node_modules/ethers/providers/base-provider.d.ts:55

**Returns:** *Promise‹number›*

___

###  getGasPrice

▸ **getGasPrice**(): *Promise‹BigNumber›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getGasPrice](_eth1_impl_retryprovider_.retryprovider.md#getgasprice)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:42

**Returns:** *Promise‹BigNumber›*

___

###  getLogs

▸ **getLogs**(`filter`: Filter | FilterByBlock): *Promise‹Array‹Log››*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getLogs](_eth1_impl_retryprovider_.retryprovider.md#getlogs)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`filter` | Filter &#124; FilterByBlock |

**Returns:** *Promise‹Array‹Log››*

___

###  getNetwork

▸ **getNetwork**(): *Promise‹Network›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getNetwork](_eth1_impl_retryprovider_.retryprovider.md#getnetwork)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:34

**Returns:** *Promise‹Network›*

___

###  getSigner

▸ **getSigner**(`addressOrIndex?`: string | number): *JsonRpcSigner*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getSigner](_eth1_impl_retryprovider_.retryprovider.md#getsigner)*

Defined in node_modules/ethers/providers/json-rpc-provider.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`addressOrIndex?` | string &#124; number |

**Returns:** *JsonRpcSigner*

___

###  getStorageAt

▸ **getStorageAt**(`addressOrName`: string | Promise‹string›, `position`: BigNumberish | Promise‹BigNumberish›, `blockTag?`: BlockTag | Promise‹BlockTag›): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getStorageAt](_eth1_impl_retryprovider_.retryprovider.md#getstorageat)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:46

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string &#124; Promise‹string› |
`position` | BigNumberish &#124; Promise‹BigNumberish› |
`blockTag?` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹string›*

___

###  getTransaction

▸ **getTransaction**(`transactionHash`: string): *Promise‹TransactionResponse›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getTransaction](_eth1_impl_retryprovider_.retryprovider.md#gettransaction)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** *Promise‹TransactionResponse›*

___

###  getTransactionCount

▸ **getTransactionCount**(`addressOrName`: string | Promise‹string›, `blockTag?`: BlockTag | Promise‹BlockTag›): *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getTransactionCount](_eth1_impl_retryprovider_.retryprovider.md#gettransactioncount)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string &#124; Promise‹string› |
`blockTag?` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹number›*

___

###  getTransactionReceipt

▸ **getTransactionReceipt**(`transactionHash`: string): *Promise‹TransactionReceipt›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getTransactionReceipt](_eth1_impl_retryprovider_.retryprovider.md#gettransactionreceipt)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:53

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** *Promise‹TransactionReceipt›*

___

###  listAccounts

▸ **listAccounts**(): *Promise‹Array‹string››*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[listAccounts](_eth1_impl_retryprovider_.retryprovider.md#listaccounts)*

Defined in node_modules/ethers/providers/json-rpc-provider.d.ts:26

**Returns:** *Promise‹Array‹string››*

___

###  listenerCount

▸ **listenerCount**(`eventName?`: EventType): *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[listenerCount](_eth1_impl_retryprovider_.retryprovider.md#listenercount)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`eventName?` | EventType |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`eventName`: EventType): *Array‹Listener›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[listeners](_eth1_impl_retryprovider_.retryprovider.md#listeners)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |

**Returns:** *Array‹Listener›*

___

###  lookupAddress

▸ **lookupAddress**(`address`: string | Promise‹string›): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[lookupAddress](_eth1_impl_retryprovider_.retryprovider.md#lookupaddress)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Promise‹string› |

**Returns:** *Promise‹string›*

___

###  on

▸ **on**(`eventName`: EventType, `listener`: Listener): *Provider*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[on](_eth1_impl_retryprovider_.retryprovider.md#on)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`listener` | Listener |

**Returns:** *Provider*

___

###  once

▸ **once**(`eventName`: EventType, `listener`: Listener): *Provider*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[once](_eth1_impl_retryprovider_.retryprovider.md#once)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`listener` | Listener |

**Returns:** *Provider*

___

###  perform

▸ **perform**(`method`: string, `params`: any): *any*

*Overrides void*

*Defined in [packages/lodestar/src/eth1/impl/retryProvider.ts:20](https://github.com/ChainSafe/lodestar/blob/af95f0522/packages/lodestar/src/eth1/impl/retryProvider.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`params` | any |

**Returns:** *any*

___

###  removeAllListeners

▸ **removeAllListeners**(`eventName?`: EventType): *Provider*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[removeAllListeners](_eth1_impl_retryprovider_.retryprovider.md#removealllisteners)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`eventName?` | EventType |

**Returns:** *Provider*

___

###  removeListener

▸ **removeListener**(`eventName`: EventType, `listener`: Listener): *Provider*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[removeListener](_eth1_impl_retryprovider_.retryprovider.md#removelistener)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`listener` | Listener |

**Returns:** *Provider*

___

###  resetEventsBlock

▸ **resetEventsBlock**(`blockNumber`: number): *void*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[resetEventsBlock](_eth1_impl_retryprovider_.retryprovider.md#reseteventsblock)*

Defined in node_modules/ethers/providers/base-provider.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | number |

**Returns:** *void*

___

###  resolveName

▸ **resolveName**(`name`: string | Promise‹string›): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[resolveName](_eth1_impl_retryprovider_.retryprovider.md#resolvename)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`name` | string &#124; Promise‹string› |

**Returns:** *Promise‹string›*

___

###  send

▸ **send**(`method`: string, `params`: any): *Promise‹any›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[send](_eth1_impl_retryprovider_.retryprovider.md#send)*

Defined in node_modules/ethers/providers/json-rpc-provider.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`params` | any |

**Returns:** *Promise‹any›*

___

###  sendTransaction

▸ **sendTransaction**(`signedTransaction`: string | Promise‹string›): *Promise‹TransactionResponse›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[sendTransaction](_eth1_impl_retryprovider_.retryprovider.md#sendtransaction)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:47

**Parameters:**

Name | Type |
------ | ------ |
`signedTransaction` | string &#124; Promise‹string› |

**Returns:** *Promise‹TransactionResponse›*

___

###  waitForTransaction

▸ **waitForTransaction**(`transactionHash`: string, `confirmations?`: number): *Promise‹TransactionReceipt›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[waitForTransaction](_eth1_impl_retryprovider_.retryprovider.md#waitfortransaction)*

*Overrides void*

Defined in node_modules/ethers/providers/base-provider.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |
`confirmations?` | number |

**Returns:** *Promise‹TransactionReceipt›*

___

### `Static` checkTransactionResponse

▸ **checkTransactionResponse**(`transaction`: any): *TransactionResponse*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[checkTransactionResponse](_eth1_impl_retryprovider_.retryprovider.md#static-checktransactionresponse)*

Defined in node_modules/ethers/providers/base-provider.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | any |

**Returns:** *TransactionResponse*

___

### `Static` hexlifyTransaction

▸ **hexlifyTransaction**(`transaction`: TransactionRequest, `allowExtra?`: object): *object*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[hexlifyTransaction](_eth1_impl_retryprovider_.retryprovider.md#static-hexlifytransaction)*

Defined in node_modules/ethers/providers/json-rpc-provider.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | TransactionRequest |
`allowExtra?` | object |

**Returns:** *object*

* \[ **key**: *string*\]: string

___

### `Static` isProvider

▸ **isProvider**(`value`: any): *value is Provider*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[isProvider](_eth1_impl_retryprovider_.retryprovider.md#static-isprovider)*

Defined in node_modules/ethers/providers/abstract-provider.d.ts:107

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Provider*
