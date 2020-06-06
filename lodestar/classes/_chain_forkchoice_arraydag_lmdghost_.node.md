[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/forkChoice/arrayDag/lmdGhost"](../modules/_chain_forkchoice_arraydag_lmdghost_.md) › [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)

# Class: Node

A block root with additional metadata required to form a DAG
with vote weights and best blocks stored as metadata

## Hierarchy

* **Node**

## Index

### Constructors

* [constructor](_chain_forkchoice_arraydag_lmdghost_.node.md#constructor)

### Properties

* [bestChild](_chain_forkchoice_arraydag_lmdghost_.node.md#bestchild)
* [bestTarget](_chain_forkchoice_arraydag_lmdghost_.node.md#besttarget)
* [blockRoot](_chain_forkchoice_arraydag_lmdghost_.node.md#blockroot)
* [children](_chain_forkchoice_arraydag_lmdghost_.node.md#children)
* [finalizedCheckpoint](_chain_forkchoice_arraydag_lmdghost_.node.md#finalizedcheckpoint)
* [justifiedCheckpoint](_chain_forkchoice_arraydag_lmdghost_.node.md#justifiedcheckpoint)
* [parent](_chain_forkchoice_arraydag_lmdghost_.node.md#parent)
* [slot](_chain_forkchoice_arraydag_lmdghost_.node.md#slot)
* [stateRoot](_chain_forkchoice_arraydag_lmdghost_.node.md#stateroot)
* [weight](_chain_forkchoice_arraydag_lmdghost_.node.md#weight)

### Methods

* [equals](_chain_forkchoice_arraydag_lmdghost_.node.md#equals)
* [hasBestChild](_chain_forkchoice_arraydag_lmdghost_.node.md#hasbestchild)
* [hasParent](_chain_forkchoice_arraydag_lmdghost_.node.md#hasparent)
* [shiftIndex](_chain_forkchoice_arraydag_lmdghost_.node.md#shiftindex)
* [unassignBestChild](_chain_forkchoice_arraydag_lmdghost_.node.md#unassignbestchild)

## Constructors

###  constructor

\+ **new Node**(`__namedParameters`: object): *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:65](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L65)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`blockRoot` | string |
`finalizedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md) |
`justifiedCheckpoint` | [HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md) |
`parent` | number |
`slot` | number |
`stateRoot` | ArrayLike‹number› |

**Returns:** *[Node](_chain_forkchoice_arraydag_lmdghost_.node.md)*

## Properties

###  bestChild

• **bestChild**: *number*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:45](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L45)*

Child node index with the most weight

___

###  bestTarget

• **bestTarget**: *number*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:50](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L50)*

Decendent node index with the most weight

___

###  blockRoot

• **blockRoot**: *[RootHex](../modules/_chain_forkchoice_interface_.md#roothex)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:29](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L29)*

___

###  children

• **children**: *Record‹[RootHex](../modules/_chain_forkchoice_interface_.md#roothex), number›*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:65](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L65)*

All direct children with key as root hex and value as node index

___

###  finalizedCheckpoint

• **finalizedCheckpoint**: *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:60](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L60)*

State's finalized check point respective to this block/node

___

###  justifiedCheckpoint

• **justifiedCheckpoint**: *[HexCheckpoint](../interfaces/_chain_forkchoice_interface_.hexcheckpoint.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:55](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L55)*

State's current justified check point respective to this block/node.

___

###  parent

• **parent**: *number*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:40](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L40)*

Parent node index, the previous block

___

###  slot

• **slot**: *Slot*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:28](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L28)*

___

###  stateRoot

• **stateRoot**: *Root*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:30](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L30)*

___

###  weight

• **weight**: *Gwei*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:35](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L35)*

Total weight for a block and its children

## Methods

###  equals

▸ **equals**(`other`: [Node](_chain_forkchoice_arraydag_lmdghost_.node.md)): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:84](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L84)*

Compare two nodes for equality

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Node](_chain_forkchoice_arraydag_lmdghost_.node.md) |

**Returns:** *boolean*

___

###  hasBestChild

▸ **hasBestChild**(): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:92](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L92)*

**Returns:** *boolean*

___

###  hasParent

▸ **hasParent**(): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:96](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L96)*

**Returns:** *boolean*

___

###  shiftIndex

▸ **shiftIndex**(`n`: number): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:100](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *void*

___

###  unassignBestChild

▸ **unassignBestChild**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts:88](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/chain/forkChoice/arrayDag/lmdGhost.ts#L88)*

**Returns:** *void*
