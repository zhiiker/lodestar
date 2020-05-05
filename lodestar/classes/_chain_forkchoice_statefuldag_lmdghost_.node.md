[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/forkChoice/statefulDag/lmdGhost"](../modules/_chain_forkchoice_statefuldag_lmdghost_.md) › [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)

# Class: Node

A block root with additional metadata required to form a DAG
with vote weights and best blocks stored as metadata

## Hierarchy

* **Node**

## Index

### Constructors

* [constructor](_chain_forkchoice_statefuldag_lmdghost_.node.md#constructor)

### Properties

* [bestChild](_chain_forkchoice_statefuldag_lmdghost_.node.md#bestchild)
* [bestTarget](_chain_forkchoice_statefuldag_lmdghost_.node.md#besttarget)
* [blockRoot](_chain_forkchoice_statefuldag_lmdghost_.node.md#blockroot)
* [children](_chain_forkchoice_statefuldag_lmdghost_.node.md#children)
* [finalizedCheckpoint](_chain_forkchoice_statefuldag_lmdghost_.node.md#finalizedcheckpoint)
* [justifiedCheckpoint](_chain_forkchoice_statefuldag_lmdghost_.node.md#justifiedcheckpoint)
* [parent](_chain_forkchoice_statefuldag_lmdghost_.node.md#parent)
* [slot](_chain_forkchoice_statefuldag_lmdghost_.node.md#slot)
* [stateRoot](_chain_forkchoice_statefuldag_lmdghost_.node.md#stateroot)
* [weight](_chain_forkchoice_statefuldag_lmdghost_.node.md#weight)

### Methods

* [addChild](_chain_forkchoice_statefuldag_lmdghost_.node.md#addchild)
* [betterThan](_chain_forkchoice_statefuldag_lmdghost_.node.md#betterthan)
* [equals](_chain_forkchoice_statefuldag_lmdghost_.node.md#equals)
* [isCandidateForBestTarget](_chain_forkchoice_statefuldag_lmdghost_.node.md#iscandidateforbesttarget)
* [onAddWeight](_chain_forkchoice_statefuldag_lmdghost_.node.md#private-onaddweight)
* [onRemoveWeight](_chain_forkchoice_statefuldag_lmdghost_.node.md#private-onremoveweight)
* [propagateWeightChange](_chain_forkchoice_statefuldag_lmdghost_.node.md#propagateweightchange)

## Constructors

###  constructor

\+ **new Node**(`__namedParameters`: object): *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:64](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L64)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockRoot` | string |
`finalizedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) |
`justifiedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) |
`parent` | [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)‹› |
`slot` | number |
`stateRoot` | ArrayLike‹number› |

**Returns:** *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

## Properties

###  bestChild

• **bestChild**: *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:44](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L44)*

Child node with the most weight

___

###  bestTarget

• **bestTarget**: *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:49](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L49)*

Decendent node with the most weight

___

###  blockRoot

• **blockRoot**: *[RootHex](../modules/_chain_forkchoice_statefuldag_interface_.md#roothex)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:28](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L28)*

___

###  children

• **children**: *Record‹[RootHex](../modules/_chain_forkchoice_statefuldag_interface_.md#roothex), [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)›*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:64](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L64)*

All direct children

___

###  finalizedCheckpoint

• **finalizedCheckpoint**: *[HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:59](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L59)*

State's finalized check point respective to this block/node

___

###  justifiedCheckpoint

• **justifiedCheckpoint**: *[HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:54](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L54)*

State's current justified check point respective to this block/node.

___

###  parent

• **parent**: *[Node](_chain_forkchoice_statefuldag_lmdghost_.node.md) | null*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:39](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L39)*

Parent node, the previous block

___

###  slot

• **slot**: *Slot*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:27](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L27)*

___

###  stateRoot

• **stateRoot**: *Root*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:29](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L29)*

___

###  weight

• **weight**: *Gwei*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:34](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L34)*

Total weight for a block and its children

## Methods

###  addChild

▸ **addChild**(`child`: [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md), `justifiedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md), `finalizedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:120](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L120)*

Add child node.

**`justifiedcheckpoint:`** the store's justified check point

**`finalizedcheckpoint:`** the store's finalized check point

**Parameters:**

Name | Type |
------ | ------ |
`child` | [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md) |
`justifiedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) |
`finalizedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) |

**Returns:** *void*

___

###  betterThan

▸ **betterThan**(`other`: [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md), `justifiedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md), `finalizedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:94](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L94)*

Determine which node is 'better'
Weighing system: correct justified/finalized epoch first, then the  internal weight
then lexographically higher root

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`other` | [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md) | - |
`justifiedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's justified check point |
`finalizedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's finalized check point  |

**Returns:** *boolean*

___

###  equals

▸ **equals**(`other`: [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:83](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L83)*

Compare two nodes for equality

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Node](_chain_forkchoice_statefuldag_lmdghost_.node.md) |

**Returns:** *boolean*

___

###  isCandidateForBestTarget

▸ **isCandidateForBestTarget**(`justifiedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md), `finalizedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:134](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L134)*

Check if a leaf is eligible to be a head

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`justifiedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's justified check point |
`finalizedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's finalized check point  |

**Returns:** *boolean*

___

### `Private` onAddWeight

▸ **onAddWeight**(`justifiedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md), `finalizedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:170](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L170)*

Update parent best child / best target in the added weight case

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`justifiedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's justified check point |
`finalizedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's finalized check point  |

**Returns:** *void*

___

### `Private` onRemoveWeight

▸ **onRemoveWeight**(`justifiedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md), `finalizedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:187](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L187)*

Update parent best child / best target in the removed weight case

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`justifiedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's justified check point |
`finalizedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's finalized check point  |

**Returns:** *void*

___

###  propagateWeightChange

▸ **propagateWeightChange**(`delta`: Gwei, `justifiedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md), `finalizedCheckpoint`: [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md)): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts:152](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/forkChoice/statefulDag/lmdGhost.ts#L152)*

Update node weight.
delta = 0: node's best target's epochs are conflict to the store or become conform to the store.
delta > 0: propagate onAddWeight
delta < 0: propagate onRemoveWeight

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`delta` | Gwei | - |
`justifiedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's justified check point |
`finalizedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_statefuldag_interface_.hexcheckpoint.md) | the store's finalized check point  |

**Returns:** *void*
