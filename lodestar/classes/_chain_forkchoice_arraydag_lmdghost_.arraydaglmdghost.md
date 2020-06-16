[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/forkChoice/arrayDag/lmdGhost"](../modules/_chain_forkchoice_arraydag_lmdghost_.md) › [ArrayDagLMDGHOST](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md)

# Class: ArrayDagLMDGHOST

Calculate best block using
Latest Message-Driven Greedy Heaviest Observed SubTree

See https://github.com/protolambda/lmd-ghost#array-based-stateful-dag-proto_array

## Hierarchy

* **ArrayDagLMDGHOST**

## Implements

* [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)

## Index

### Constructors

* [constructor](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#constructor)

### Properties

* [aggregator](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-aggregator)
* [bestJustifiedCheckpoint](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-bestjustifiedcheckpoint)
* [clock](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-clock)
* [config](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-config)
* [finalized](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-finalized)
* [genesisTime](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-genesistime)
* [justified](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-justified)
* [nodeIndices](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-nodeindices)
* [nodes](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-nodes)
* [synced](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-synced)

### Methods

* [addAttestation](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#addattestation)
* [addBlock](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#addblock)
* [addChild](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#addchild)
* [betterThan](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-betterthan)
* [ensureCorrectBestTargets](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#ensurecorrectbesttargets)
* [getAncestor](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-getancestor)
* [getBlockSummaryAtSlot](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#getblocksummaryatslot)
* [getBlockSummaryByBlockRoot](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#getblocksummarybyblockroot)
* [getFinalized](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#getfinalized)
* [getFinalizedCheckpoint](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-getfinalizedcheckpoint)
* [getJustified](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#getjustified)
* [getJustifiedCheckpoint](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-getjustifiedcheckpoint)
* [getNode](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#getnode)
* [hasBlock](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#hasblock)
* [head](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#head)
* [headBlockRoot](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#headblockroot)
* [headBlockSlot](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#headblockslot)
* [headNode](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#headnode)
* [headStateRoot](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#headstateroot)
* [isBestChild](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#isbestchild)
* [isBestChildOfParent](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-isbestchildofparent)
* [isBestTarget](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#isbesttarget)
* [isCandidateForBestTarget](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-iscandidateforbesttarget)
* [onAddWeight](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-onaddweight)
* [onRemoveWeight](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-onremoveweight)
* [onTick](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#ontick)
* [propagateWeightChange](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-propagateweightchange)
* [prune](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-prune)
* [setFinalized](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-setfinalized)
* [setJustified](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-setjustified)
* [shouldUpdateJustifiedCheckpoint](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#shouldupdatejustifiedcheckpoint)
* [start](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#start)
* [stop](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#stop)
* [syncChanges](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#syncchanges)
* [toBlockSummary](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md#private-toblocksummary)

## Constructors

###  constructor

\+ **new ArrayDagLMDGHOST**(`config`: IBeaconConfig): *[ArrayDagLMDGHOST](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:155](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |

**Returns:** *[ArrayDagLMDGHOST](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md)*

## Properties

### `Private` aggregator

• **aggregator**: *[AttestationAggregator](_chain_forkchoice_attestationaggregator_.attestationaggregator.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:129](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L129)*

Aggregated attestations

___

### `Private` bestJustifiedCheckpoint

• **bestJustifiedCheckpoint**: *Checkpoint*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:153](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L153)*

Best justified checkpoint.

___

### `Private` clock

• **clock**: *[IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:155](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L155)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:122](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L122)*

___

### `Private` finalized

• **finalized**: *object | null*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:144](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L144)*

Last finalized block

___

### `Private` genesisTime

• **genesisTime**: *Number64*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:123](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L123)*

___

### `Private` justified

• **justified**: *object | null*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:149](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L149)*

Last justified block

___

### `Private` nodeIndices

• **nodeIndices**: *Map‹[RootHex](../modules/_chain_forkchoice_interface_.md#roothex), number›*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:139](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L139)*

A map with key as root hex and value as index in `nodes` array

___

### `Private` nodes

• **nodes**: *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)[]*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:134](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L134)*

Recently seen blocks, pruned up to last finalized block

___

### `Private` synced

• **synced**: *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:154](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L154)*

## Methods

###  addAttestation

▸ **addAttestation**(`blockRootBuf`: Uint8Array, `attester`: ValidatorIndex, `weight`: Gwei): *void*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:296](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L296)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRootBuf` | Uint8Array |
`attester` | ValidatorIndex |
`weight` | Gwei |

**Returns:** *void*

___

###  addBlock

▸ **addBlock**(`__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:192](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L192)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array‹› |
`finalizedCheckpoint` | Checkpoint |
`justifiedCheckpoint` | Checkpoint |
`parentRoot` | Uint8Array‹› |
`slot` | number |
`stateRoot` | Uint8Array‹› |

**Returns:** *void*

___

###  addChild

▸ **addChild**(`parentIndex`: number, `childIndex`: number): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:262](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L262)*

Add child node.

**Parameters:**

Name | Type |
------ | ------ |
`parentIndex` | number |
`childIndex` | number |

**Returns:** *void*

___

### `Private` betterThan

▸ **betterThan**(`nodeIndex`: number, `otherIndex`: number): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:486](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L486)*

Determine which node is 'better'
Weighing system: correct justified/finalized epoch first, then the  internal weight
then lexographically higher root

**Parameters:**

Name | Type |
------ | ------ |
`nodeIndex` | number |
`otherIndex` | number |

**Returns:** *boolean*

___

###  ensureCorrectBestTargets

▸ **ensureCorrectBestTargets**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:288](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L288)*

**Returns:** *void*

___

### `Private` getAncestor

▸ **getAncestor**(`root`: [RootHex](../modules/_chain_forkchoice_interface_.md#roothex), `slot`: Slot): *[RootHex](../modules/_chain_forkchoice_interface_.md#roothex) | null*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:559](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L559)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | [RootHex](../modules/_chain_forkchoice_interface_.md#roothex) |
`slot` | Slot |

**Returns:** *[RootHex](../modules/_chain_forkchoice_interface_.md#roothex) | null*

___

###  getBlockSummaryAtSlot

▸ **getBlockSummaryAtSlot**(`slot`: Slot): *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:352](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L352)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

___

###  getBlockSummaryByBlockRoot

▸ **getBlockSummaryByBlockRoot**(`blockRoot`: Uint8Array): *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:368](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L368)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

___

###  getFinalized

▸ **getFinalized**(): *Checkpoint*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:403](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L403)*

**Returns:** *Checkpoint*

___

### `Private` getFinalizedCheckpoint

▸ **getFinalizedCheckpoint**(): *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:536](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L536)*

Don't want to check the initial justified/finalized checkpoint for the 1st epoch
because initial state does not have checkpoints in database.
First addBlock (for genesis block) call has checkpoints but from the 2nd call in the
first epoch it has ZERO finalized/justified checkpoints.

**Returns:** *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

___

###  getJustified

▸ **getJustified**(): *Checkpoint*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:396](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L396)*

**Returns:** *Checkpoint*

___

### `Private` getJustifiedCheckpoint

▸ **getJustifiedCheckpoint**(): *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:523](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L523)*

Don't want to check the initial justified/finalized checkpoint for the 1st epoch
because initial state does not have checkpoints in database.
First addBlock (for genesis block) call has checkpoints but from the 2nd call in the
first epoch it has ZERO finalized/justified checkpoints.

**Returns:** *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

___

###  getNode

▸ **getNode**(`blockRootBuf`: Uint8Array): *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:273](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L273)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRootBuf` | Uint8Array |

**Returns:** *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

___

###  hasBlock

▸ **hasBlock**(`blockRoot`: Uint8Array): *boolean*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:373](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L373)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *boolean*

___

###  head

▸ **head**(): *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:318](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L318)*

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*

___

###  headBlockRoot

▸ **headBlockRoot**(): *Uint8Array*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:333](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L333)*

**Returns:** *Uint8Array*

___

###  headBlockSlot

▸ **headBlockSlot**(): *Slot*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:338](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L338)*

**Returns:** *Slot*

___

###  headNode

▸ **headNode**(): *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:325](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L325)*

**Returns:** *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

___

###  headStateRoot

▸ **headStateRoot**(): *Uint8Array*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:343](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L343)*

**Returns:** *Uint8Array*

___

###  isBestChild

▸ **isBestChild**(`parent`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md), `child`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:283](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L283)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |
`child` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |

**Returns:** *boolean*

___

### `Private` isBestChildOfParent

▸ **isBestChildOfParent**(`node`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:508](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L508)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |

**Returns:** *boolean*

___

###  isBestTarget

▸ **isBestTarget**(`parent`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md), `child`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:279](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L279)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |
`child` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |

**Returns:** *boolean*

___

### `Private` isCandidateForBestTarget

▸ **isCandidateForBestTarget**(`nodeIndex`: number): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:430](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L430)*

Check if a leaf is eligible to be a head

**Parameters:**

Name | Type |
------ | ------ |
`nodeIndex` | number |

**Returns:** *boolean*

___

### `Private` onAddWeight

▸ **onAddWeight**(`nodeIndex`: number): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:444](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L444)*

Update parent best child / best target in the added weight case

**Parameters:**

Name | Type |
------ | ------ |
`nodeIndex` | number |

**Returns:** *void*

___

### `Private` onRemoveWeight

▸ **onRemoveWeight**(`nodeIndex`: number): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:460](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L460)*

Update parent best child / best target in the removed weight case

**Parameters:**

Name | Type |
------ | ------ |
`nodeIndex` | number |

**Returns:** *void*

___

###  onTick

▸ **onTick**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:184](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L184)*

**Returns:** *void*

___

### `Private` propagateWeightChange

▸ **propagateWeightChange**(`nodeIndex`: number, `delta`: Gwei): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:416](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L416)*

Update node weight.
delta = 0: node's best target's epochs are conflict to the store or become conform to the store.
delta > 0: propagate onAddWeight
delta < 0: propagate onRemoveWeight

**Parameters:**

Name | Type |
------ | ------ |
`nodeIndex` | number |
`delta` | Gwei |

**Returns:** *void*

___

### `Private` prune

▸ **prune**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:581](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L581)*

**Returns:** *void*

___

### `Private` setFinalized

▸ **setFinalized**(`checkpoint`: Checkpoint): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:543](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L543)*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

**Returns:** *void*

___

### `Private` setJustified

▸ **setJustified**(`checkpoint`: Checkpoint): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:552](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L552)*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

**Returns:** *void*

___

###  shouldUpdateJustifiedCheckpoint

▸ **shouldUpdateJustifiedCheckpoint**(`blockRoot`: Uint8Array): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:379](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L379)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *boolean*

___

###  start

▸ **start**(`genesisTime`: number, `clock`: [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)): *Promise‹void›*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:173](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L173)*

Start method, should not wait for it.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`genesisTime` | number |   |
`clock` | [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md) | - |

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:180](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L180)*

**Returns:** *Promise‹void›*

___

###  syncChanges

▸ **syncChanges**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:305](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L305)*

**Returns:** *void*

___

### `Private` toBlockSummary

▸ **toBlockSummary**(`node`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)): *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:598](https://github.com/ChainSafe/lodestar/blob/d092a7def/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L598)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*
