[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/forkChoice/statefulDag/lmdGhost"](../modules/_chain_forkchoice_statefuldag_lmdghost_.md) › [StatefulDagLMDGHOST](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md)

# Class: StatefulDagLMDGHOST

Calculate best block using
Latest Message-Driven Greedy Heaviest Observed SubTree

See https://github.com/protolambda/lmd-ghost#state-ful-dag

## Hierarchy

* **StatefulDagLMDGHOST**

## Implements

* [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)

## Index

### Constructors

* [constructor](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#constructor)

### Properties

* [aggregator](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-aggregator)
* [bestJustifiedCheckpoint](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-bestjustifiedcheckpoint)
* [clock](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-clock)
* [config](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-config)
* [finalized](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-finalized)
* [genesisTime](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-genesistime)
* [justified](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-justified)
* [nodes](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-nodes)
* [synced](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-synced)

### Methods

* [addAttestation](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#addattestation)
* [addBlock](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#addblock)
* [ensureCorrectBestTargets](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#ensurecorrectbesttargets)
* [getAncestor](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-getancestor)
* [getBlockSummaryAtSlot](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#getblocksummaryatslot)
* [getBlockSummaryByBlockRoot](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#getblocksummarybyblockroot)
* [getFinalized](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#getfinalized)
* [getFinalizedCheckpoint](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-getfinalizedcheckpoint)
* [getJustified](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#getjustified)
* [getJustifiedCheckpoint](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-getjustifiedcheckpoint)
* [getNode](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#getnode)
* [hasBlock](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#hasblock)
* [head](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#head)
* [headBlockRoot](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#headblockroot)
* [headBlockSlot](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#headblockslot)
* [headNode](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#headnode)
* [headStateRoot](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#headstateroot)
* [onTick](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#ontick)
* [prune](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-prune)
* [setFinalized](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-setfinalized)
* [setJustified](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-setjustified)
* [shouldUpdateJustifiedCheckpoint](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#shouldupdatejustifiedcheckpoint)
* [start](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#start)
* [stop](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#stop)
* [syncChanges](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#syncchanges)

## Constructors

###  constructor

\+ **new StatefulDagLMDGHOST**(`config`: IBeaconConfig): *[StatefulDagLMDGHOST](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:268](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L268)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |

**Returns:** *[StatefulDagLMDGHOST](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md)*

## Properties

### `Private` aggregator

• **aggregator**: *[AttestationAggregator](_chain_forkchoice_attestationaggregator_.attestationaggregator.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:247](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L247)*

Aggregated attestations

___

### `Private` bestJustifiedCheckpoint

• **bestJustifiedCheckpoint**: *Checkpoint*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:266](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L266)*

Best justified checkpoint.

___

### `Private` clock

• **clock**: *[IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:268](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L268)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:241](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L241)*

___

### `Private` finalized

• **finalized**: *object | null*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:257](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L257)*

Last finalized block

___

### `Private` genesisTime

• **genesisTime**: *Number64*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:242](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L242)*

___

### `Private` justified

• **justified**: *object | null*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:262](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L262)*

Last justified block

___

### `Private` nodes

• **nodes**: *Record‹[RootHex](../modules/_chain_forkchoice_interface_.md#roothex), [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)›*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:252](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L252)*

Recently seen blocks, pruned up to last finalized block

___

### `Private` synced

• **synced**: *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:267](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L267)*

## Methods

###  addAttestation

▸ **addAttestation**(`blockRootBuf`: Uint8Array, `attester`: ValidatorIndex, `weight`: Gwei): *void*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:384](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L384)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:306](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L306)*

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

###  ensureCorrectBestTargets

▸ **ensureCorrectBestTargets**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:375](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L375)*

**Returns:** *void*

___

### `Private` getAncestor

▸ **getAncestor**(`root`: [RootHex](../modules/_chain_forkchoice_interface_.md#roothex), `slot`: Slot): *[RootHex](../modules/_chain_forkchoice_interface_.md#roothex) | null*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:527](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L527)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:432](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L432)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

___

###  getBlockSummaryByBlockRoot

▸ **getBlockSummaryByBlockRoot**(`blockRoot`: Uint8Array): *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:445](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L445)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md) | null*

___

###  getFinalized

▸ **getFinalized**(): *Checkpoint*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:480](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L480)*

**Returns:** *Checkpoint*

___

### `Private` getFinalizedCheckpoint

▸ **getFinalizedCheckpoint**(): *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:506](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L506)*

Don't want to check the initial justified/finalized checkpoint for the 1st epoch
because initial state does not have checkpoints in database.
First addBlock (for genesis block) call has checkpoints but from the 2nd call in the
first epoch it has ZERO finalized/justified checkpoints.

**Returns:** *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

___

###  getJustified

▸ **getJustified**(): *Checkpoint*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:473](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L473)*

**Returns:** *Checkpoint*

___

### `Private` getJustifiedCheckpoint

▸ **getJustifiedCheckpoint**(): *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:493](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L493)*

Don't want to check the initial justified/finalized checkpoint for the 1st epoch
because initial state does not have checkpoints in database.
First addBlock (for genesis block) call has checkpoints but from the 2nd call in the
first epoch it has ZERO finalized/justified checkpoints.

**Returns:** *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

___

###  getNode

▸ **getNode**(`blockRootBuf`: Uint8Array): *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:369](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L369)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRootBuf` | Uint8Array |

**Returns:** *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

___

###  hasBlock

▸ **hasBlock**(`blockRoot`: Uint8Array): *boolean*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:450](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L450)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *boolean*

___

###  head

▸ **head**(): *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:409](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L409)*

**Returns:** *[BlockSummary](../interfaces/_chain_forkchoice_interface_.blocksummary.md)*

___

###  headBlockRoot

▸ **headBlockRoot**(): *Uint8Array*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:424](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L424)*

**Returns:** *Uint8Array*

___

###  headBlockSlot

▸ **headBlockSlot**(): *Slot*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:428](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L428)*

**Returns:** *Slot*

___

###  headNode

▸ **headNode**(): *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:412](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L412)*

**Returns:** *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

___

###  headStateRoot

▸ **headStateRoot**(): *Uint8Array*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:420](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L420)*

**Returns:** *Uint8Array*

___

###  onTick

▸ **onTick**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:298](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L298)*

**Returns:** *void*

___

### `Private` prune

▸ **prune**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:542](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L542)*

**Returns:** *void*

___

### `Private` setFinalized

▸ **setFinalized**(`checkpoint`: Checkpoint): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:513](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L513)*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

**Returns:** *void*

___

### `Private` setJustified

▸ **setJustified**(`checkpoint`: Checkpoint): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:521](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L521)*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

**Returns:** *void*

___

###  shouldUpdateJustifiedCheckpoint

▸ **shouldUpdateJustifiedCheckpoint**(`blockRoot`: Uint8Array): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:456](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L456)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *boolean*

___

###  start

▸ **start**(`genesisTime`: number, `clock`: [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)): *Promise‹void›*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:285](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L285)*

Start method, should not wait for it.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`genesisTime` | number | - |
`clock` | [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md) |   |

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:292](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L292)*

**Returns:** *Promise‹void›*

___

###  syncChanges

▸ **syncChanges**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:393](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L393)*

**Returns:** *void*
