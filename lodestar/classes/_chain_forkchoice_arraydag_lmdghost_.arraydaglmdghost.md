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

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:156](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |

**Returns:** *[ArrayDagLMDGHOST](_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md)*

## Properties

### `Private` aggregator

• **aggregator**: *[AttestationAggregator](_chain_forkchoice_attestationaggregator_.attestationaggregator.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:130](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L130)*

Aggregated attestations

___

### `Private` bestJustifiedCheckpoint

• **bestJustifiedCheckpoint**: *Checkpoint*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:154](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L154)*

Best justified checkpoint.

___

### `Private` clock

• **clock**: *[IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:156](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L156)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:123](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L123)*

___

### `Private` finalized

• **finalized**: *object | null*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:145](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L145)*

Last finalized block

___

### `Private` genesisTime

• **genesisTime**: *Number64*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:124](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L124)*

___

### `Private` justified

• **justified**: *object | null*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:150](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L150)*

Last justified block

___

### `Private` nodeIndices

• **nodeIndices**: *Map‹[RootHex](../modules/_chain_forkchoice_interface_.md#roothex), number›*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:140](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L140)*

A map with key as root hex and value as index in `nodes` array

___

### `Private` nodes

• **nodes**: *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)[]*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:135](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L135)*

Recently seen blocks, pruned up to last finalized block

___

### `Private` synced

• **synced**: *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:155](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L155)*

## Methods

###  addAttestation

▸ **addAttestation**(`blockRootBuf`: Uint8Array, `attester`: ValidatorIndex, `weight`: Gwei): *void*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:298](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L298)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:193](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L193)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:264](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L264)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:488](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L488)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:290](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L290)*

**Returns:** *void*

___

### `Private` getAncestor

▸ **getAncestor**(`root`: [RootHex](../modules/_chain_forkchoice_interface_.md#roothex), `slot`: Slot): *[RootHex](../modules/_chain_forkchoice_interface_.md#roothex) | null*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:561](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L561)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:354](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L354)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

___

###  getBlockSummaryByBlockRoot

▸ **getBlockSummaryByBlockRoot**(`blockRoot`: Uint8Array): *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:370](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L370)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

___

###  getFinalized

▸ **getFinalized**(): *Checkpoint*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:405](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L405)*

**Returns:** *Checkpoint*

___

### `Private` getFinalizedCheckpoint

▸ **getFinalizedCheckpoint**(): *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:538](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L538)*

Don't want to check the initial justified/finalized checkpoint for the 1st epoch
because initial state does not have checkpoints in database.
First addBlock (for genesis block) call has checkpoints but from the 2nd call in the
first epoch it has ZERO finalized/justified checkpoints.

**Returns:** *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

___

###  getJustified

▸ **getJustified**(): *Checkpoint*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:398](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L398)*

**Returns:** *Checkpoint*

___

### `Private` getJustifiedCheckpoint

▸ **getJustifiedCheckpoint**(): *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:525](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L525)*

Don't want to check the initial justified/finalized checkpoint for the 1st epoch
because initial state does not have checkpoints in database.
First addBlock (for genesis block) call has checkpoints but from the 2nd call in the
first epoch it has ZERO finalized/justified checkpoints.

**Returns:** *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

___

###  getNode

▸ **getNode**(`blockRootBuf`: Uint8Array): *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:275](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L275)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRootBuf` | Uint8Array |

**Returns:** *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

___

###  hasBlock

▸ **hasBlock**(`blockRoot`: Uint8Array): *boolean*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:375](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L375)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *boolean*

___

###  head

▸ **head**(): *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:320](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L320)*

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*

___

###  headBlockRoot

▸ **headBlockRoot**(): *Uint8Array*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:335](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L335)*

**Returns:** *Uint8Array*

___

###  headBlockSlot

▸ **headBlockSlot**(): *Slot*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:340](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L340)*

**Returns:** *Slot*

___

###  headNode

▸ **headNode**(): *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:327](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L327)*

**Returns:** *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

___

###  headStateRoot

▸ **headStateRoot**(): *Uint8Array*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:345](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L345)*

**Returns:** *Uint8Array*

___

###  isBestChild

▸ **isBestChild**(`parent`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md), `child`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:285](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L285)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |
`child` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |

**Returns:** *boolean*

___

### `Private` isBestChildOfParent

▸ **isBestChildOfParent**(`node`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:510](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L510)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |

**Returns:** *boolean*

___

###  isBestTarget

▸ **isBestTarget**(`parent`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md), `child`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:281](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L281)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |
`child` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |

**Returns:** *boolean*

___

### `Private` isCandidateForBestTarget

▸ **isCandidateForBestTarget**(`nodeIndex`: number): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:432](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L432)*

Check if a leaf is eligible to be a head

**Parameters:**

Name | Type |
------ | ------ |
`nodeIndex` | number |

**Returns:** *boolean*

___

### `Private` onAddWeight

▸ **onAddWeight**(`nodeIndex`: number): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:446](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L446)*

Update parent best child / best target in the added weight case

**Parameters:**

Name | Type |
------ | ------ |
`nodeIndex` | number |

**Returns:** *void*

___

### `Private` onRemoveWeight

▸ **onRemoveWeight**(`nodeIndex`: number): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:462](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L462)*

Update parent best child / best target in the removed weight case

**Parameters:**

Name | Type |
------ | ------ |
`nodeIndex` | number |

**Returns:** *void*

___

###  onTick

▸ **onTick**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:185](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L185)*

**Returns:** *void*

___

### `Private` propagateWeightChange

▸ **propagateWeightChange**(`nodeIndex`: number, `delta`: Gwei): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:418](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L418)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:583](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L583)*

**Returns:** *void*

___

### `Private` setFinalized

▸ **setFinalized**(`checkpoint`: Checkpoint): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:545](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L545)*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

**Returns:** *void*

___

### `Private` setJustified

▸ **setJustified**(`checkpoint`: Checkpoint): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:554](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L554)*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

**Returns:** *void*

___

###  shouldUpdateJustifiedCheckpoint

▸ **shouldUpdateJustifiedCheckpoint**(`blockRoot`: Uint8Array): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:381](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L381)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *boolean*

___

###  start

▸ **start**(`genesisTime`: number, `clock`: [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)): *Promise‹void›*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:174](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L174)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:181](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L181)*

**Returns:** *Promise‹void›*

___

###  syncChanges

▸ **syncChanges**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:307](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L307)*

**Returns:** *void*

___

### `Private` toBlockSummary

▸ **toBlockSummary**(`node`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)): *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:600](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L600)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*
