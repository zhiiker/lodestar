[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["opPool/opPool"](../modules/_oppool_oppool_.md) › [OpPool](_oppool_oppool_.oppool.md)

# Class: OpPool

Pool of operations not yet included on chain

## Hierarchy

* EventEmitter

  ↳ **OpPool**

## Index

### Constructors

* [constructor](_oppool_oppool_.oppool.md#constructor)

### Properties

* [aggregateAndProofs](_oppool_oppool_.oppool.md#aggregateandproofs)
* [attestations](_oppool_oppool_.oppool.md#attestations)
* [attesterSlashings](_oppool_oppool_.oppool.md#attesterslashings)
* [config](_oppool_oppool_.oppool.md#private-config)
* [db](_oppool_oppool_.oppool.md#private-db)
* [depositData](_oppool_oppool_.oppool.md#depositdata)
* [eth1](_oppool_oppool_.oppool.md#private-eth1)
* [proposerSlashings](_oppool_oppool_.oppool.md#proposerslashings)
* [proposers](_oppool_oppool_.oppool.md#private-proposers)
* [voluntaryExits](_oppool_oppool_.oppool.md#voluntaryexits)
* [defaultMaxListeners](_oppool_oppool_.oppool.md#static-defaultmaxlisteners)

### Methods

* [addListener](_oppool_oppool_.oppool.md#addlistener)
* [emit](_oppool_oppool_.oppool.md#emit)
* [eventNames](_oppool_oppool_.oppool.md#eventnames)
* [getMaxListeners](_oppool_oppool_.oppool.md#getmaxlisteners)
* [listenerCount](_oppool_oppool_.oppool.md#listenercount)
* [listeners](_oppool_oppool_.oppool.md#listeners)
* [off](_oppool_oppool_.oppool.md#off)
* [on](_oppool_oppool_.oppool.md#on)
* [once](_oppool_oppool_.oppool.md#once)
* [prependListener](_oppool_oppool_.oppool.md#prependlistener)
* [prependOnceListener](_oppool_oppool_.oppool.md#prependoncelistener)
* [processBlockOperations](_oppool_oppool_.oppool.md#processblockoperations)
* [rawListeners](_oppool_oppool_.oppool.md#rawlisteners)
* [removeAllListeners](_oppool_oppool_.oppool.md#removealllisteners)
* [removeListener](_oppool_oppool_.oppool.md#removelistener)
* [setMaxListeners](_oppool_oppool_.oppool.md#setmaxlisteners)
* [start](_oppool_oppool_.oppool.md#start)
* [stop](_oppool_oppool_.oppool.md#stop)
* [listenerCount](_oppool_oppool_.oppool.md#static-listenercount)

## Constructors

###  constructor

\+ **new OpPool**(`opts`: [IOpPoolOptions](../interfaces/_oppool_options_.ioppooloptions.md), `__namedParameters`: object): *[OpPool](_oppool_oppool_.oppool.md)*

*Defined in [packages/lodestar/src/opPool/opPool.ts:42](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L42)*

**Parameters:**

▪ **opts**: *[IOpPoolOptions](../interfaces/_oppool_options_.ioppooloptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`eth1` | [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)‹› |

**Returns:** *[OpPool](_oppool_oppool_.oppool.md)*

## Properties

###  aggregateAndProofs

• **aggregateAndProofs**: *[AggregateAndProofOperations](_oppool_modules_aggregateandproof_.aggregateandproofoperations.md)*

*Defined in [packages/lodestar/src/opPool/opPool.ts:33](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L33)*

___

###  attestations

• **attestations**: *[AttestationOperations](_oppool_modules_attestation_.attestationoperations.md)*

*Defined in [packages/lodestar/src/opPool/opPool.ts:32](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L32)*

___

###  attesterSlashings

• **attesterSlashings**: *[AttesterSlashingOperations](_oppool_modules_attesterslashing_.attesterslashingoperations.md)*

*Defined in [packages/lodestar/src/opPool/opPool.ts:37](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L37)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/opPool/opPool.ts:39](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L39)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/opPool/opPool.ts:41](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L41)*

___

###  depositData

• **depositData**: *[DepositDataOperations](_oppool_modules_depositdata_.depositdataoperations.md)*

*Defined in [packages/lodestar/src/opPool/opPool.ts:35](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L35)*

___

### `Private` eth1

• **eth1**: *[IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md)*

*Defined in [packages/lodestar/src/opPool/opPool.ts:40](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L40)*

___

###  proposerSlashings

• **proposerSlashings**: *[ProposerSlashingOperations](_oppool_modules_proposerslashing_.proposerslashingoperations.md)*

*Defined in [packages/lodestar/src/opPool/opPool.ts:36](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L36)*

___

### `Private` proposers

• **proposers**: *Map‹Epoch, Map‹ValidatorIndex, Slot››*

*Defined in [packages/lodestar/src/opPool/opPool.ts:42](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L42)*

___

###  voluntaryExits

• **voluntaryExits**: *[VoluntaryExitOperations](_oppool_modules_voluntaryexit_.voluntaryexitoperations.md)*

*Defined in [packages/lodestar/src/opPool/opPool.ts:34](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L34)*

___

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

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md).[getMaxListeners](../interfaces/_db_controller_interface_.idatabasecontroller.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

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

###  processBlockOperations

▸ **processBlockOperations**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/opPool/opPool.ts:75](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L75)*

Remove stored operations based on a newly processed block

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

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

*Defined in [packages/lodestar/src/opPool/opPool.ts:61](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L61)*

Start operation processing

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/opPool/opPool.ts:68](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/opPool/opPool.ts#L68)*

Stop operation processing

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
