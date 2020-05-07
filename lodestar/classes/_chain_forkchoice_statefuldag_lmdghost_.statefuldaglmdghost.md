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
* [getFinalized](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#getfinalized)
* [getFinalizedCheckpoint](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-getfinalizedcheckpoint)
* [getJustified](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#getjustified)
* [getJustifiedCheckpoint](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#private-getjustifiedcheckpoint)
* [getNode](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#getnode)
* [head](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md#head)
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

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:241](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L241)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |

**Returns:** *[StatefulDagLMDGHOST](_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md)*

## Properties

### `Private` aggregator

• **aggregator**: *[AttestationAggregator](_chain_forkchoice_statefuldag_attestationaggregator_.attestationaggregator.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:220](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L220)*

Aggregated attestations

___

### `Private` bestJustifiedCheckpoint

• **bestJustifiedCheckpoint**: *Checkpoint*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:239](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L239)*

Best justified checkpoint.

___

### `Private` clock

• **clock**: *[IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:241](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L241)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:214](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L214)*

___

### `Private` finalized

• **finalized**: *object | null*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:230](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L230)*

Last finalized block

___

### `Private` genesisTime

• **genesisTime**: *Number64*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:215](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L215)*

___

### `Private` justified

• **justified**: *object | null*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:235](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L235)*

Last justified block

___

### `Private` nodes

• **nodes**: *Record‹[RootHex](../modules/_chain_forkchoice_statefuldag_interface_.md#roothex), [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)›*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:225](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L225)*

Recently seen blocks, pruned up to last finalized block

___

### `Private` synced

• **synced**: *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:240](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L240)*

## Methods

###  addAttestation

▸ **addAttestation**(`blockRootBuf`: Uint8Array, `attester`: ValidatorIndex, `weight`: Gwei): *void*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:355](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L355)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:278](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L278)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockRootBuf` | Uint8Array‹› |
`finalizedCheckpoint` | Checkpoint |
`justifiedCheckpoint` | Checkpoint |
`parentRootBuf` | Uint8Array‹› |
`slot` | number |
`stateRootBuf` | Uint8Array‹› |

**Returns:** *void*

___

###  ensureCorrectBestTargets

▸ **ensureCorrectBestTargets**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:346](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L346)*

**Returns:** *void*

___

### `Private` getAncestor

▸ **getAncestor**(`root`: [RootHex](../modules/_chain_forkchoice_statefuldag_interface_.md#roothex), `slot`: Slot): *[RootHex](../modules/_chain_forkchoice_statefuldag_interface_.md#roothex) | null*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:469](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L469)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | [RootHex](../modules/_chain_forkchoice_statefuldag_interface_.md#roothex) |
`slot` | Slot |

**Returns:** *[RootHex](../modules/_chain_forkchoice_statefuldag_interface_.md#roothex) | null*

___

###  getFinalized

▸ **getFinalized**(): *Checkpoint*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:422](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L422)*

**Returns:** *Checkpoint*

___

### `Private` getFinalizedCheckpoint

▸ **getFinalizedCheckpoint**(): *[HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:448](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L448)*

Don't want to check the initial justified/finalized checkpoint for the 1st epoch
because initial state does not have checkpoints in database.
First addBlock (for genesis block) call has checkpoints but from the 2nd call in the
first epoch it has ZERO finalized/justified checkpoints.

**Returns:** *[HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)*

___

###  getJustified

▸ **getJustified**(): *Checkpoint*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:415](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L415)*

**Returns:** *Checkpoint*

___

### `Private` getJustifiedCheckpoint

▸ **getJustifiedCheckpoint**(): *[HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:435](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L435)*

Don't want to check the initial justified/finalized checkpoint for the 1st epoch
because initial state does not have checkpoints in database.
First addBlock (for genesis block) call has checkpoints but from the 2nd call in the
first epoch it has ZERO finalized/justified checkpoints.

**Returns:** *[HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)*

___

###  getNode

▸ **getNode**(`blockRootBuf`: Uint8Array): *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:340](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L340)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRootBuf` | Uint8Array |

**Returns:** *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

___

###  head

▸ **head**(): *Uint8Array*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:380](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L380)*

**Returns:** *Uint8Array*

___

###  headStateRoot

▸ **headStateRoot**(): *Uint8Array*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:388](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L388)*

**Returns:** *Uint8Array*

___

###  onTick

▸ **onTick**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:270](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L270)*

**Returns:** *void*

___

### `Private` prune

▸ **prune**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:484](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L484)*

**Returns:** *void*

___

### `Private` setFinalized

▸ **setFinalized**(`checkpoint`: Checkpoint): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:455](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L455)*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

**Returns:** *void*

___

### `Private` setJustified

▸ **setJustified**(`checkpoint`: Checkpoint): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:463](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L463)*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

**Returns:** *void*

___

###  shouldUpdateJustifiedCheckpoint

▸ **shouldUpdateJustifiedCheckpoint**(`blockRoot`: Uint8Array): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:398](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L398)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *boolean*

___

###  start

▸ **start**(`genesisTime`: number, `clock`: [IBeaconClock](../interfaces/_chain_clock_interface_.ibeaconclock.md)): *Promise‹void›*

*Implementation of [ILMDGHOST](../interfaces/_chain_forkchoice_interface_.ilmdghost.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:257](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L257)*

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

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:264](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L264)*

**Returns:** *Promise‹void›*

___

###  syncChanges

▸ **syncChanges**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:364](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L364)*

**Returns:** *void*
