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

* [_bootstrapPoll](_eth1_impl_retryprovider_.retryprovider.md#_bootstrappoll)
* [_emitted](_eth1_impl_retryprovider_.retryprovider.md#_emitted)
* [_events](_eth1_impl_retryprovider_.retryprovider.md#_events)
* [_fastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_fastblocknumber)
* [_fastBlockNumberPromise](_eth1_impl_retryprovider_.retryprovider.md#_fastblocknumberpromise)
* [_fastQueryDate](_eth1_impl_retryprovider_.retryprovider.md#_fastquerydate)
* [_internalBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_internalblocknumber)
* [_isProvider](_eth1_impl_retryprovider_.retryprovider.md#_isprovider)
* [_lastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_lastblocknumber)
* [_maxInternalBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_maxinternalblocknumber)
* [_network](_eth1_impl_retryprovider_.retryprovider.md#_network)
* [_networkPromise](_eth1_impl_retryprovider_.retryprovider.md#_networkpromise)
* [_nextId](_eth1_impl_retryprovider_.retryprovider.md#_nextid)
* [_pendingFilter](_eth1_impl_retryprovider_.retryprovider.md#_pendingfilter)
* [_poller](_eth1_impl_retryprovider_.retryprovider.md#_poller)
* [_pollingInterval](_eth1_impl_retryprovider_.retryprovider.md#_pollinginterval)
* [anyNetwork](_eth1_impl_retryprovider_.retryprovider.md#anynetwork)
* [attempts](_eth1_impl_retryprovider_.retryprovider.md#attempts)
* [connection](_eth1_impl_retryprovider_.retryprovider.md#connection)
* [formatter](_eth1_impl_retryprovider_.retryprovider.md#formatter)

### Accessors

* [blockNumber](_eth1_impl_retryprovider_.retryprovider.md#blocknumber)
* [network](_eth1_impl_retryprovider_.retryprovider.md#network)
* [polling](_eth1_impl_retryprovider_.retryprovider.md#polling)
* [pollingInterval](_eth1_impl_retryprovider_.retryprovider.md#pollinginterval)
* [ready](_eth1_impl_retryprovider_.retryprovider.md#ready)

### Methods

* [_addEventListener](_eth1_impl_retryprovider_.retryprovider.md#_addeventlistener)
* [_getAddress](_eth1_impl_retryprovider_.retryprovider.md#_getaddress)
* [_getBlock](_eth1_impl_retryprovider_.retryprovider.md#_getblock)
* [_getBlockTag](_eth1_impl_retryprovider_.retryprovider.md#_getblocktag)
* [_getFastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_getfastblocknumber)
* [_getFilter](_eth1_impl_retryprovider_.retryprovider.md#_getfilter)
* [_getInternalBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_getinternalblocknumber)
* [_getResolver](_eth1_impl_retryprovider_.retryprovider.md#_getresolver)
* [_getTransactionRequest](_eth1_impl_retryprovider_.retryprovider.md#_gettransactionrequest)
* [_ready](_eth1_impl_retryprovider_.retryprovider.md#_ready)
* [_setFastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_setfastblocknumber)
* [_startEvent](_eth1_impl_retryprovider_.retryprovider.md#_startevent)
* [_startPending](_eth1_impl_retryprovider_.retryprovider.md#_startpending)
* [_stopEvent](_eth1_impl_retryprovider_.retryprovider.md#_stopevent)
* [_wrapTransaction](_eth1_impl_retryprovider_.retryprovider.md#_wraptransaction)
* [addListener](_eth1_impl_retryprovider_.retryprovider.md#addlistener)
* [call](_eth1_impl_retryprovider_.retryprovider.md#call)
* [detectNetwork](_eth1_impl_retryprovider_.retryprovider.md#detectnetwork)
* [emit](_eth1_impl_retryprovider_.retryprovider.md#emit)
* [estimateGas](_eth1_impl_retryprovider_.retryprovider.md#estimategas)
* [getBalance](_eth1_impl_retryprovider_.retryprovider.md#getbalance)
* [getBlock](_eth1_impl_retryprovider_.retryprovider.md#getblock)
* [getBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#getblocknumber)
* [getBlockWithTransactions](_eth1_impl_retryprovider_.retryprovider.md#getblockwithtransactions)
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
* [getUncheckedSigner](_eth1_impl_retryprovider_.retryprovider.md#getuncheckedsigner)
* [listAccounts](_eth1_impl_retryprovider_.retryprovider.md#listaccounts)
* [listenerCount](_eth1_impl_retryprovider_.retryprovider.md#listenercount)
* [listeners](_eth1_impl_retryprovider_.retryprovider.md#listeners)
* [lookupAddress](_eth1_impl_retryprovider_.retryprovider.md#lookupaddress)
* [off](_eth1_impl_retryprovider_.retryprovider.md#off)
* [on](_eth1_impl_retryprovider_.retryprovider.md#on)
* [once](_eth1_impl_retryprovider_.retryprovider.md#once)
* [perform](_eth1_impl_retryprovider_.retryprovider.md#perform)
* [poll](_eth1_impl_retryprovider_.retryprovider.md#poll)
* [prepareRequest](_eth1_impl_retryprovider_.retryprovider.md#preparerequest)
* [removeAllListeners](_eth1_impl_retryprovider_.retryprovider.md#removealllisteners)
* [removeListener](_eth1_impl_retryprovider_.retryprovider.md#removelistener)
* [resetEventsBlock](_eth1_impl_retryprovider_.retryprovider.md#reseteventsblock)
* [resolveName](_eth1_impl_retryprovider_.retryprovider.md#resolvename)
* [send](_eth1_impl_retryprovider_.retryprovider.md#send)
* [sendTransaction](_eth1_impl_retryprovider_.retryprovider.md#sendtransaction)
* [waitForTransaction](_eth1_impl_retryprovider_.retryprovider.md#waitfortransaction)
* [defaultUrl](_eth1_impl_retryprovider_.retryprovider.md#static-defaulturl)
* [getFormatter](_eth1_impl_retryprovider_.retryprovider.md#static-getformatter)
* [getNetwork](_eth1_impl_retryprovider_.retryprovider.md#static-getnetwork)
* [hexlifyTransaction](_eth1_impl_retryprovider_.retryprovider.md#static-hexlifytransaction)
* [isProvider](_eth1_impl_retryprovider_.retryprovider.md#static-isprovider)

## Constructors

###  constructor

\+ **new RetryProvider**(`attempts`: number, `url?`: ethers.utils.ConnectionInfo | string, `network?`: ethers.providers.Networkish): *[RetryProvider](_eth1_impl_retryprovider_.retryprovider.md)*

*Overrides void*

*Defined in [packages/lodestar/src/eth1/impl/retryProvider.ts:6](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/eth1/impl/retryProvider.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`attempts` | number |
`url?` | ethers.utils.ConnectionInfo &#124; string |
`network?` | ethers.providers.Networkish |

**Returns:** *[RetryProvider](_eth1_impl_retryprovider_.retryprovider.md)*

## Properties

###  _bootstrapPoll

• **_bootstrapPoll**: *Timer*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_bootstrapPoll](_eth1_impl_retryprovider_.retryprovider.md#_bootstrappoll)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:29

___

###  _emitted

• **_emitted**: *object*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_emitted](_eth1_impl_retryprovider_.retryprovider.md#_emitted)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:24

#### Type declaration:

* \[ **eventName**: *string*\]: number | "pending"

___

###  _events

• **_events**: *Array‹Event›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_events](_eth1_impl_retryprovider_.retryprovider.md#_events)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:22

___

###  _fastBlockNumber

• **_fastBlockNumber**: *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_fastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_fastblocknumber)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:31

___

###  _fastBlockNumberPromise

• **_fastBlockNumberPromise**: *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_fastBlockNumberPromise](_eth1_impl_retryprovider_.retryprovider.md#_fastblocknumberpromise)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:32

___

###  _fastQueryDate

• **_fastQueryDate**: *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_fastQueryDate](_eth1_impl_retryprovider_.retryprovider.md#_fastquerydate)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:33

___

###  _internalBlockNumber

• **_internalBlockNumber**: *Promise‹object›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_internalBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_internalblocknumber)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:35

___

###  _isProvider

• **_isProvider**: *boolean*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_isProvider](_eth1_impl_retryprovider_.retryprovider.md#_isprovider)*

Defined in node_modules/@ethersproject/abstract-provider/lib/index.d.ts:135

___

###  _lastBlockNumber

• **_lastBlockNumber**: *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_lastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_lastblocknumber)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:30

___

###  _maxInternalBlockNumber

• **_maxInternalBlockNumber**: *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_maxInternalBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_maxinternalblocknumber)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:34

___

###  _network

• **_network**: *Network*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_network](_eth1_impl_retryprovider_.retryprovider.md#_network)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:21

___

###  _networkPromise

• **_networkPromise**: *Promise‹Network›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_networkPromise](_eth1_impl_retryprovider_.retryprovider.md#_networkpromise)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:20

___

###  _nextId

• **_nextId**: *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_nextId](_eth1_impl_retryprovider_.retryprovider.md#_nextid)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:28

___

###  _pendingFilter

• **_pendingFilter**: *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_pendingFilter](_eth1_impl_retryprovider_.retryprovider.md#_pendingfilter)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:27

___

###  _poller

• **_poller**: *Timer*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_poller](_eth1_impl_retryprovider_.retryprovider.md#_poller)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:28

___

###  _pollingInterval

• **_pollingInterval**: *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_pollingInterval](_eth1_impl_retryprovider_.retryprovider.md#_pollinginterval)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:27

___

###  anyNetwork

• **anyNetwork**: *boolean*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[anyNetwork](_eth1_impl_retryprovider_.retryprovider.md#anynetwork)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:40

___

###  attempts

• **attempts**: *number*

*Defined in [packages/lodestar/src/eth1/impl/retryProvider.ts:6](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/eth1/impl/retryProvider.ts#L6)*

___

###  connection

• **connection**: *ConnectionInfo*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[connection](_eth1_impl_retryprovider_.retryprovider.md#connection)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:26

___

###  formatter

• **formatter**: *Formatter*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[formatter](_eth1_impl_retryprovider_.retryprovider.md#formatter)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:23

## Accessors

###  blockNumber

• **get blockNumber**(): *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[blockNumber](_eth1_impl_retryprovider_.retryprovider.md#blocknumber)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:61

**Returns:** *number*

___

###  network

• **get network**(): *Network*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[network](_eth1_impl_retryprovider_.retryprovider.md#network)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:58

**Returns:** *Network*

___

###  polling

• **get polling**(): *boolean*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[polling](_eth1_impl_retryprovider_.retryprovider.md#polling)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:62

**Returns:** *boolean*

• **set polling**(`value`: boolean): *any*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[polling](_eth1_impl_retryprovider_.retryprovider.md#polling)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *any*

___

###  pollingInterval

• **get pollingInterval**(): *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[pollingInterval](_eth1_impl_retryprovider_.retryprovider.md#pollinginterval)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:64

**Returns:** *number*

• **set pollingInterval**(`value`: number): *any*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[pollingInterval](_eth1_impl_retryprovider_.retryprovider.md#pollinginterval)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *any*

___

###  ready

• **get ready**(): *Promise‹Network›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[ready](_eth1_impl_retryprovider_.retryprovider.md#ready)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:52

**Returns:** *Promise‹Network›*

## Methods

###  _addEventListener

▸ **_addEventListener**(`eventName`: EventType, `listener`: Listener, `once`: boolean): *this*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_addEventListener](_eth1_impl_retryprovider_.retryprovider.md#_addeventlistener)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:96

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`listener` | Listener |
`once` | boolean |

**Returns:** *this*

___

###  _getAddress

▸ **_getAddress**(`addressOrName`: string | Promise‹string›): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getAddress](_eth1_impl_retryprovider_.retryprovider.md#_getaddress)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:81

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string &#124; Promise‹string› |

**Returns:** *Promise‹string›*

___

###  _getBlock

▸ **_getBlock**(`blockHashOrBlockTag`: BlockTag | string | Promise‹BlockTag | string›, `includeTransactions?`: boolean): *Promise‹Block | BlockWithTransactions›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getBlock](_eth1_impl_retryprovider_.retryprovider.md#_getblock)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:82

**Parameters:**

Name | Type |
------ | ------ |
`blockHashOrBlockTag` | BlockTag &#124; string &#124; Promise‹BlockTag &#124; string› |
`includeTransactions?` | boolean |

**Returns:** *Promise‹Block | BlockWithTransactions›*

___

###  _getBlockTag

▸ **_getBlockTag**(`blockTag`: BlockTag | Promise‹BlockTag›): *Promise‹BlockTag›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getBlockTag](_eth1_impl_retryprovider_.retryprovider.md#_getblocktag)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:89

**Parameters:**

Name | Type |
------ | ------ |
`blockTag` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹BlockTag›*

___

###  _getFastBlockNumber

▸ **_getFastBlockNumber**(): *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getFastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_getfastblocknumber)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:66

**Returns:** *Promise‹number›*

___

###  _getFilter

▸ **_getFilter**(`filter`: Filter | FilterByBlockHash | Promise‹Filter | FilterByBlockHash›): *Promise‹Filter | FilterByBlockHash›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getFilter](_eth1_impl_retryprovider_.retryprovider.md#_getfilter)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:78

**Parameters:**

Name | Type |
------ | ------ |
`filter` | Filter &#124; FilterByBlockHash &#124; Promise‹Filter &#124; FilterByBlockHash› |

**Returns:** *Promise‹Filter | FilterByBlockHash›*

___

###  _getInternalBlockNumber

▸ **_getInternalBlockNumber**(`maxAge`: number): *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getInternalBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_getinternalblocknumber)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`maxAge` | number |

**Returns:** *Promise‹number›*

___

###  _getResolver

▸ **_getResolver**(`name`: string): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getResolver](_eth1_impl_retryprovider_.retryprovider.md#_getresolver)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:90

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹string›*

___

###  _getTransactionRequest

▸ **_getTransactionRequest**(`transaction`: Deferrable‹TransactionRequest›): *Promise‹Transaction›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_getTransactionRequest](_eth1_impl_retryprovider_.retryprovider.md#_gettransactionrequest)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:77

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Deferrable‹TransactionRequest› |

**Returns:** *Promise‹Transaction›*

___

###  _ready

▸ **_ready**(): *Promise‹Network›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_ready](_eth1_impl_retryprovider_.retryprovider.md#_ready)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:51

**Returns:** *Promise‹Network›*

___

###  _setFastBlockNumber

▸ **_setFastBlockNumber**(`blockNumber`: number): *void*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_setFastBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#_setfastblocknumber)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`blockNumber` | number |

**Returns:** *void*

___

###  _startEvent

▸ **_startEvent**(`event`: Event): *void*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_startEvent](_eth1_impl_retryprovider_.retryprovider.md#_startevent)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:38

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *void*

___

###  _startPending

▸ **_startPending**(): *void*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_startPending](_eth1_impl_retryprovider_.retryprovider.md#_startpending)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:39

**Returns:** *void*

___

###  _stopEvent

▸ **_stopEvent**(`event`: Event): *void*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_stopEvent](_eth1_impl_retryprovider_.retryprovider.md#_stopevent)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *void*

___

###  _wrapTransaction

▸ **_wrapTransaction**(`tx`: Transaction, `hash?`: string): *TransactionResponse*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[_wrapTransaction](_eth1_impl_retryprovider_.retryprovider.md#_wraptransaction)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:75

**Parameters:**

Name | Type |
------ | ------ |
`tx` | Transaction |
`hash?` | string |

**Returns:** *TransactionResponse*

___

###  addListener

▸ **addListener**(`eventName`: EventType, `listener`: Listener): *Provider*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[addListener](_eth1_impl_retryprovider_.retryprovider.md#addlistener)*

Defined in node_modules/@ethersproject/abstract-provider/lib/index.d.ts:132

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`listener` | Listener |

**Returns:** *Provider*

___

###  call

▸ **call**(`transaction`: Deferrable‹TransactionRequest›, `blockTag?`: BlockTag | Promise‹BlockTag›): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[call](_eth1_impl_retryprovider_.retryprovider.md#call)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:79

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Deferrable‹TransactionRequest› |
`blockTag?` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹string›*

___

###  detectNetwork

▸ **detectNetwork**(): *Promise‹Network›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[detectNetwork](_eth1_impl_retryprovider_.retryprovider.md#detectnetwork)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:31

**Returns:** *Promise‹Network›*

___

###  emit

▸ **emit**(`eventName`: EventType, ...`args`: Array‹any›): *boolean*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[emit](_eth1_impl_retryprovider_.retryprovider.md#emit)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:99

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`...args` | Array‹any› |

**Returns:** *boolean*

___

###  estimateGas

▸ **estimateGas**(`transaction`: Deferrable‹TransactionRequest›): *Promise‹BigNumber›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[estimateGas](_eth1_impl_retryprovider_.retryprovider.md#estimategas)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:80

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Deferrable‹TransactionRequest› |

**Returns:** *Promise‹BigNumber›*

___

###  getBalance

▸ **getBalance**(`addressOrName`: string | Promise‹string›, `blockTag?`: BlockTag | Promise‹BlockTag›): *Promise‹BigNumber›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getBalance](_eth1_impl_retryprovider_.retryprovider.md#getbalance)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string &#124; Promise‹string› |
`blockTag?` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹BigNumber›*

___

###  getBlock

▸ **getBlock**(`blockHashOrBlockTag`: BlockTag | string | Promise‹BlockTag | string›): *Promise‹Block›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getBlock](_eth1_impl_retryprovider_.retryprovider.md#getblock)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:83

**Parameters:**

Name | Type |
------ | ------ |
`blockHashOrBlockTag` | BlockTag &#124; string &#124; Promise‹BlockTag &#124; string› |

**Returns:** *Promise‹Block›*

___

###  getBlockNumber

▸ **getBlockNumber**(): *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getBlockNumber](_eth1_impl_retryprovider_.retryprovider.md#getblocknumber)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:69

**Returns:** *Promise‹number›*

___

###  getBlockWithTransactions

▸ **getBlockWithTransactions**(`blockHashOrBlockTag`: BlockTag | string | Promise‹BlockTag | string›): *Promise‹BlockWithTransactions›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getBlockWithTransactions](_eth1_impl_retryprovider_.retryprovider.md#getblockwithtransactions)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:84

**Parameters:**

Name | Type |
------ | ------ |
`blockHashOrBlockTag` | BlockTag &#124; string &#124; Promise‹BlockTag &#124; string› |

**Returns:** *Promise‹BlockWithTransactions›*

___

###  getCode

▸ **getCode**(`addressOrName`: string | Promise‹string›, `blockTag?`: BlockTag | Promise‹BlockTag›): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getCode](_eth1_impl_retryprovider_.retryprovider.md#getcode)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:73

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

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:88

**Returns:** *Promise‹number›*

___

###  getGasPrice

▸ **getGasPrice**(): *Promise‹BigNumber›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getGasPrice](_eth1_impl_retryprovider_.retryprovider.md#getgasprice)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:70

**Returns:** *Promise‹BigNumber›*

___

###  getLogs

▸ **getLogs**(`filter`: Filter | FilterByBlockHash | Promise‹Filter | FilterByBlockHash›): *Promise‹Array‹Log››*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getLogs](_eth1_impl_retryprovider_.retryprovider.md#getlogs)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:87

**Parameters:**

Name | Type |
------ | ------ |
`filter` | Filter &#124; FilterByBlockHash &#124; Promise‹Filter &#124; FilterByBlockHash› |

**Returns:** *Promise‹Array‹Log››*

___

###  getNetwork

▸ **getNetwork**(): *Promise‹Network›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getNetwork](_eth1_impl_retryprovider_.retryprovider.md#static-getnetwork)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:60

**Returns:** *Promise‹Network›*

___

###  getSigner

▸ **getSigner**(`addressOrIndex?`: string | number): *JsonRpcSigner*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getSigner](_eth1_impl_retryprovider_.retryprovider.md#getsigner)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:32

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

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string &#124; Promise‹string› |
`position` | BigNumberish &#124; Promise‹BigNumberish› |
`blockTag?` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹string›*

___

###  getTransaction

▸ **getTransaction**(`transactionHash`: string | Promise‹string›): *Promise‹TransactionResponse›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getTransaction](_eth1_impl_retryprovider_.retryprovider.md#gettransaction)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:85

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string &#124; Promise‹string› |

**Returns:** *Promise‹TransactionResponse›*

___

###  getTransactionCount

▸ **getTransactionCount**(`addressOrName`: string | Promise‹string›, `blockTag?`: BlockTag | Promise‹BlockTag›): *Promise‹number›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getTransactionCount](_eth1_impl_retryprovider_.retryprovider.md#gettransactioncount)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`addressOrName` | string &#124; Promise‹string› |
`blockTag?` | BlockTag &#124; Promise‹BlockTag› |

**Returns:** *Promise‹number›*

___

###  getTransactionReceipt

▸ **getTransactionReceipt**(`transactionHash`: string | Promise‹string›): *Promise‹TransactionReceipt›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getTransactionReceipt](_eth1_impl_retryprovider_.retryprovider.md#gettransactionreceipt)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:86

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string &#124; Promise‹string› |

**Returns:** *Promise‹TransactionReceipt›*

___

###  getUncheckedSigner

▸ **getUncheckedSigner**(`addressOrIndex?`: string | number): *UncheckedJsonRpcSigner*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getUncheckedSigner](_eth1_impl_retryprovider_.retryprovider.md#getuncheckedsigner)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`addressOrIndex?` | string &#124; number |

**Returns:** *UncheckedJsonRpcSigner*

___

###  listAccounts

▸ **listAccounts**(): *Promise‹Array‹string››*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[listAccounts](_eth1_impl_retryprovider_.retryprovider.md#listaccounts)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:34

**Returns:** *Promise‹Array‹string››*

___

###  listenerCount

▸ **listenerCount**(`eventName?`: EventType): *number*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[listenerCount](_eth1_impl_retryprovider_.retryprovider.md#listenercount)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:100

**Parameters:**

Name | Type |
------ | ------ |
`eventName?` | EventType |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`eventName?`: EventType): *Array‹Listener›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[listeners](_eth1_impl_retryprovider_.retryprovider.md#listeners)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:101

**Parameters:**

Name | Type |
------ | ------ |
`eventName?` | EventType |

**Returns:** *Array‹Listener›*

___

###  lookupAddress

▸ **lookupAddress**(`address`: string | Promise‹string›): *Promise‹string›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[lookupAddress](_eth1_impl_retryprovider_.retryprovider.md#lookupaddress)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:92

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Promise‹string› |

**Returns:** *Promise‹string›*

___

###  off

▸ **off**(`eventName`: EventType, `listener?`: Listener): *this*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[off](_eth1_impl_retryprovider_.retryprovider.md#off)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:102

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`listener?` | Listener |

**Returns:** *this*

___

###  on

▸ **on**(`eventName`: EventType, `listener`: Listener): *this*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[on](_eth1_impl_retryprovider_.retryprovider.md#on)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:97

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`listener` | Listener |

**Returns:** *this*

___

###  once

▸ **once**(`eventName`: EventType, `listener`: Listener): *this*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[once](_eth1_impl_retryprovider_.retryprovider.md#once)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:98

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | EventType |
`listener` | Listener |

**Returns:** *this*

___

###  perform

▸ **perform**(`method`: string, `params`: any): *any*

*Overrides void*

*Defined in [packages/lodestar/src/eth1/impl/retryProvider.ts:18](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/eth1/impl/retryProvider.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`params` | any |

**Returns:** *any*

___

###  poll

▸ **poll**(): *Promise‹void›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[poll](_eth1_impl_retryprovider_.retryprovider.md#poll)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:56

**Returns:** *Promise‹void›*

___

###  prepareRequest

▸ **prepareRequest**(`method`: string, `params`: any): *[string, Array‹any›]*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[prepareRequest](_eth1_impl_retryprovider_.retryprovider.md#preparerequest)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`params` | any |

**Returns:** *[string, Array‹any›]*

___

###  removeAllListeners

▸ **removeAllListeners**(`eventName?`: EventType): *this*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[removeAllListeners](_eth1_impl_retryprovider_.retryprovider.md#removealllisteners)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:103

**Parameters:**

Name | Type |
------ | ------ |
`eventName?` | EventType |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`eventName`: EventType, `listener`: Listener): *Provider*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[removeListener](_eth1_impl_retryprovider_.retryprovider.md#removelistener)*

Defined in node_modules/@ethersproject/abstract-provider/lib/index.d.ts:133

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

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:57

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

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:91

**Parameters:**

Name | Type |
------ | ------ |
`name` | string &#124; Promise‹string› |

**Returns:** *Promise‹string›*

___

###  send

▸ **send**(`method`: string, `params`: Array‹any›): *Promise‹any›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[send](_eth1_impl_retryprovider_.retryprovider.md#send)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`params` | Array‹any› |

**Returns:** *Promise‹any›*

___

###  sendTransaction

▸ **sendTransaction**(`signedTransaction`: string | Promise‹string›): *Promise‹TransactionResponse›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[sendTransaction](_eth1_impl_retryprovider_.retryprovider.md#sendtransaction)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:76

**Parameters:**

Name | Type |
------ | ------ |
`signedTransaction` | string &#124; Promise‹string› |

**Returns:** *Promise‹TransactionResponse›*

___

###  waitForTransaction

▸ **waitForTransaction**(`transactionHash`: string, `confirmations?`: number, `timeout?`: number): *Promise‹TransactionReceipt›*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[waitForTransaction](_eth1_impl_retryprovider_.retryprovider.md#waitfortransaction)*

*Overrides void*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`transactionHash` | string |
`confirmations?` | number |
`timeout?` | number |

**Returns:** *Promise‹TransactionReceipt›*

___

### `Static` defaultUrl

▸ **defaultUrl**(): *string*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[defaultUrl](_eth1_impl_retryprovider_.retryprovider.md#static-defaulturl)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:30

**Returns:** *string*

___

### `Static` getFormatter

▸ **getFormatter**(): *Formatter*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getFormatter](_eth1_impl_retryprovider_.retryprovider.md#static-getformatter)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:53

**Returns:** *Formatter*

___

### `Static` getNetwork

▸ **getNetwork**(`network`: Networkish): *Network*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[getNetwork](_eth1_impl_retryprovider_.retryprovider.md#static-getnetwork)*

Defined in node_modules/@ethersproject/providers/lib/base-provider.d.ts:54

**Parameters:**

Name | Type |
------ | ------ |
`network` | Networkish |

**Returns:** *Network*

___

### `Static` hexlifyTransaction

▸ **hexlifyTransaction**(`transaction`: TransactionRequest, `allowExtra?`: object): *object*

*Inherited from [RetryProvider](_eth1_impl_retryprovider_.retryprovider.md).[hexlifyTransaction](_eth1_impl_retryprovider_.retryprovider.md#static-hexlifytransaction)*

Defined in node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:41

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

Defined in node_modules/@ethersproject/abstract-provider/lib/index.d.ts:137

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Provider*
