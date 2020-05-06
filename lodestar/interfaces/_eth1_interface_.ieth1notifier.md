[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/interface"](../modules/_eth1_interface_.md) › [IEth1Notifier](_eth1_interface_.ieth1notifier.md)

# Interface: IEth1Notifier <**T, U, V**>

The IEth1Notifier service watches the Eth1 chain for IEth1Events

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

* [getBlock](_eth1_interface_.ieth1notifier.md#getblock)
* [getDepositEvents](_eth1_interface_.ieth1notifier.md#getdepositevents)
* [start](_eth1_interface_.ieth1notifier.md#start)
* [stop](_eth1_interface_.ieth1notifier.md#stop)

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[ _emitType](_network_gossip_interface_.igossip.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[ _emitterType](_network_gossip_interface_.igossip.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[ _eventsType](_network_gossip_interface_.igossip.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

## Methods

###  getBlock

▸ **getBlock**(`blockTag`: string | number): *Promise‹Block›*

*Defined in [packages/lodestar/src/eth1/interface.ts:35](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/eth1/interface.ts#L35)*

Returns block by block hash or number

**Parameters:**

Name | Type |
------ | ------ |
`blockTag` | string &#124; number |

**Returns:** *Promise‹Block›*

___

###  getDepositEvents

▸ **getDepositEvents**(`blockTag`: string | number): *Promise‹[IDepositEvent](_eth1_interface_.idepositevent.md)[]›*

*Defined in [packages/lodestar/src/eth1/interface.ts:40](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/eth1/interface.ts#L40)*

Return deposit events at a block

**Parameters:**

Name | Type |
------ | ------ |
`blockTag` | string &#124; number |

**Returns:** *Promise‹[IDepositEvent](_eth1_interface_.idepositevent.md)[]›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/interface.ts:28](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/eth1/interface.ts#L28)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/interface.ts:29](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar/src/eth1/interface.ts#L29)*

**Returns:** *Promise‹void›*
