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
* [currentForkDigest](_chain_interface_.ibeaconchain.md#currentforkdigest)
* [forkChoice](_chain_interface_.ibeaconchain.md#forkchoice)
* [networkId](_chain_interface_.ibeaconchain.md#networkid)

### Methods

* [getBlockAtSlot](_chain_interface_.ibeaconchain.md#getblockatslot)
* [getENRForkID](_chain_interface_.ibeaconchain.md#getenrforkid)
* [getEpochContext](_chain_interface_.ibeaconchain.md#getepochcontext)
* [getFinalizedCheckpoint](_chain_interface_.ibeaconchain.md#getfinalizedcheckpoint)
* [getHeadBlock](_chain_interface_.ibeaconchain.md#getheadblock)
* [getHeadState](_chain_interface_.ibeaconchain.md#getheadstate)
* [initializeBeaconChain](_chain_interface_.ibeaconchain.md#initializebeaconchain)
* [receiveAttestation](_chain_interface_.ibeaconchain.md#receiveattestation)
* [receiveBlock](_chain_interface_.ibeaconchain.md#receiveblock)
* [start](_chain_interface_.ibeaconchain.md#start)
* [stop](_chain_interface_.ibeaconchain.md#stop)

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

___

###  chainId

• **chainId**: *Uint16*

*Defined in [packages/lodestar/src/chain/interface.ts:41](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L41)*

___

###  clock

• **clock**: *[IBeaconClock](_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/interface.ts:40](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L40)*

___

###  currentForkDigest

• **currentForkDigest**: *ForkDigest*

*Defined in [packages/lodestar/src/chain/interface.ts:43](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L43)*

___

###  forkChoice

• **forkChoice**: *[ILMDGHOST](_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L39)*

___

###  networkId

• **networkId**: *Uint64*

*Defined in [packages/lodestar/src/chain/interface.ts:42](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L42)*

## Methods

###  getBlockAtSlot

▸ **getBlockAtSlot**(`slot`: Slot): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar/src/chain/interface.ts:67](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getENRForkID

▸ **getENRForkID**(): *Promise‹ENRForkID›*

*Defined in [packages/lodestar/src/chain/interface.ts:57](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L57)*

Return ENRForkID.

**Returns:** *Promise‹ENRForkID›*

___

###  getEpochContext

▸ **getEpochContext**(): *EpochContext*

*Defined in [packages/lodestar/src/chain/interface.ts:65](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L65)*

**Returns:** *EpochContext*

___

###  getFinalizedCheckpoint

▸ **getFinalizedCheckpoint**(): *Promise‹Checkpoint›*

*Defined in [packages/lodestar/src/chain/interface.ts:63](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L63)*

**Returns:** *Promise‹Checkpoint›*

___

###  getHeadBlock

▸ **getHeadBlock**(): *Promise‹SignedBeaconBlock | null›*

*Defined in [packages/lodestar/src/chain/interface.ts:61](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L61)*

**Returns:** *Promise‹SignedBeaconBlock | null›*

___

###  getHeadState

▸ **getHeadState**(): *Promise‹BeaconState | null›*

*Defined in [packages/lodestar/src/chain/interface.ts:59](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L59)*

**Returns:** *Promise‹BeaconState | null›*

___

###  initializeBeaconChain

▸ **initializeBeaconChain**(`genesisState`: BeaconState): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:82](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L82)*

Initialize the chain with a genesis state

**Parameters:**

Name | Type |
------ | ------ |
`genesisState` | BeaconState |

**Returns:** *Promise‹void›*

___

###  receiveAttestation

▸ **receiveAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:72](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L72)*

Add attestation to the fork-choice rule

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  receiveBlock

▸ **receiveBlock**(`signedBlock`: SignedBeaconBlock, `trusted?`: boolean): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:77](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L77)*

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

*Defined in [packages/lodestar/src/chain/interface.ts:47](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L47)*

Start beacon chain processing

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/interface.ts:52](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/chain/interface.ts#L52)*

Stop beacon chain processing

**Returns:** *Promise‹void›*
