[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/interface"](../modules/_chain_interface_.md) › [IBeaconChain](_chain_interface_.ibeaconchain.md)

# Interface: IBeaconChain <**T, U, V**>

The IBeaconChain service deals with processing incoming blocks, advancing a state transition
and applying the fork choice rule to update the chain head

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IChainEvents](_chain_interface_.ichainevents.md), [IChainEvents](_chain_interface_.ichainevents.md)› & object & object

  ↳ **IBeaconChain**

## Implemented by

* [BeaconChain](../classes/_chain_chain_.beaconchain.md)

## Index

### Properties

* [ _emitType](_chain_interface_.ibeaconchain.md#optional--_emittype)
* [ _emitterType](_chain_interface_.ibeaconchain.md#optional--_emittertype)
* [ _eventsType](_chain_interface_.ibeaconchain.md#optional--_eventstype)
* [chainId](_chain_interface_.ibeaconchain.md#chainid)
* [clock](_chain_interface_.ibeaconchain.md#clock)
* [forkChoice](_chain_interface_.ibeaconchain.md#forkchoice)
* [networkId](_chain_interface_.ibeaconchain.md#networkid)

### Methods

* [getHeadBlock](_chain_interface_.ibeaconchain.md#getheadblock)
* [getHeadState](_chain_interface_.ibeaconchain.md#getheadstate)
* [initializeBeaconChain](_chain_interface_.ibeaconchain.md#initializebeaconchain)
* [isInitialized](_chain_interface_.ibeaconchain.md#isinitialized)
* [receiveAttestation](_chain_interface_.ibeaconchain.md#receiveattestation)
* [receiveBlock](_chain_interface_.ibeaconchain.md#receiveblock)
* [start](_chain_interface_.ibeaconchain.md#start)
* [stop](_chain_interface_.ibeaconchain.md#stop)

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

___

###  chainId

• **chainId**: *Uint16*

*Defined in [packages/lodestar/src/chain/interface.ts:36](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L36)*

___

###  clock

• **clock**: *[IBeaconClock](_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/interface.ts:35](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L35)*

___

###  forkChoice

• **forkChoice**: *[ILMDGHOST](_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/interface.ts:34](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L34)*

___

###  networkId

• **networkId**: *Uint64*

*Defined in [packages/lodestar/src/chain/interface.ts:37](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L37)*

## Methods

###  getHeadBlock

▸ **getHeadBlock**(): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar/src/chain/interface.ts:50](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L50)*

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getHeadState

▸ **getHeadState**(): *Promise‹BeaconState | null›*

*Defined in [packages/lodestar/src/chain/interface.ts:48](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L48)*

**Returns:** *Promise‹BeaconState | null›*

___

###  initializeBeaconChain

▸ **initializeBeaconChain**(`genesisState`: BeaconState, `depositDataRootList`: TreeBacked‹List‹Root››): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:66](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L66)*

Used for starting beacon chain with fake genesis state (dev, test, interop).
Note: Invoke this before [start](_chain_interface_.ibeaconchain.md#start)

**Parameters:**

Name | Type |
------ | ------ |
`genesisState` | BeaconState |
`depositDataRootList` | TreeBacked‹List‹Root›› |

**Returns:** *Promise‹void›*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Defined in [packages/lodestar/src/chain/interface.ts:68](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L68)*

**Returns:** *boolean*

___

###  receiveAttestation

▸ **receiveAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:55](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L55)*

Add attestation to the fork-choice rule

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  receiveBlock

▸ **receiveBlock**(`signedBlock`: SignedBeaconBlock, `trusted?`: boolean): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:60](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L60)*

Pre-process and run the per slot state transition function

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |
`trusted?` | boolean |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:41](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L41)*

Start beacon chain processing

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:46](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/interface.ts#L46)*

Stop beacon chain processing

**Returns:** *Promise‹void›*
