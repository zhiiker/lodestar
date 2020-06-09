[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/forkChoice/interface"](../modules/_chain_forkchoice_interface_.md) › [ILMDGHOST](_chain_forkchoice_interface_.ilmdghost.md)

# Interface: ILMDGHOST

## Hierarchy

* **ILMDGHOST**

## Implemented by

* [ArrayDagLMDGHOST](../classes/_chain_forkchoice_arraydag_lmdghost_.arraydaglmdghost.md)
* [StatefulDagLMDGHOST](../classes/_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md)

## Index

### Methods

* [addAttestation](_chain_forkchoice_interface_.ilmdghost.md#addattestation)
* [addBlock](_chain_forkchoice_interface_.ilmdghost.md#addblock)
* [getBlockSummaryAtSlot](_chain_forkchoice_interface_.ilmdghost.md#getblocksummaryatslot)
* [getBlockSummaryByBlockRoot](_chain_forkchoice_interface_.ilmdghost.md#getblocksummarybyblockroot)
* [getFinalized](_chain_forkchoice_interface_.ilmdghost.md#getfinalized)
* [getJustified](_chain_forkchoice_interface_.ilmdghost.md#getjustified)
* [hasBlock](_chain_forkchoice_interface_.ilmdghost.md#hasblock)
* [head](_chain_forkchoice_interface_.ilmdghost.md#head)
* [headBlockRoot](_chain_forkchoice_interface_.ilmdghost.md#headblockroot)
* [headBlockSlot](_chain_forkchoice_interface_.ilmdghost.md#headblockslot)
* [headStateRoot](_chain_forkchoice_interface_.ilmdghost.md#headstateroot)
* [start](_chain_forkchoice_interface_.ilmdghost.md#start)
* [stop](_chain_forkchoice_interface_.ilmdghost.md#stop)

## Methods

###  addAttestation

▸ **addAttestation**(`blockRoot`: Uint8Array, `attester`: ValidatorIndex, `weight`: Gwei): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:14](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |
`attester` | ValidatorIndex |
`weight` | Gwei |

**Returns:** *void*

___

###  addBlock

▸ **addBlock**(`info`: [BlockSummary](_chain_forkchoice_interface_.blocksummary.md)): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:13](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [BlockSummary](_chain_forkchoice_interface_.blocksummary.md) |

**Returns:** *void*

___

###  getBlockSummaryAtSlot

▸ **getBlockSummaryAtSlot**(`slot`: Slot): *[BlockSummary](_chain_forkchoice_interface_.blocksummary.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:21](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *[BlockSummary](_chain_forkchoice_interface_.blocksummary.md)*

___

###  getBlockSummaryByBlockRoot

▸ **getBlockSummaryByBlockRoot**(`blockRoot`: Uint8Array): *[BlockSummary](_chain_forkchoice_interface_.blocksummary.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:22](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *[BlockSummary](_chain_forkchoice_interface_.blocksummary.md)*

___

###  getFinalized

▸ **getFinalized**(): *Checkpoint*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:20](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L20)*

**Returns:** *Checkpoint*

___

###  getJustified

▸ **getJustified**(): *Checkpoint*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:19](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L19)*

**Returns:** *Checkpoint*

___

###  hasBlock

▸ **hasBlock**(`blockRoot`: Uint8Array): *boolean*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRoot` | Uint8Array |

**Returns:** *boolean*

___

###  head

▸ **head**(): *[BlockSummary](_chain_forkchoice_interface_.blocksummary.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:15](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L15)*

**Returns:** *[BlockSummary](_chain_forkchoice_interface_.blocksummary.md)*

___

###  headBlockRoot

▸ **headBlockRoot**(): *Uint8Array*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:17](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L17)*

**Returns:** *Uint8Array*

___

###  headBlockSlot

▸ **headBlockSlot**(): *Slot*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:16](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L16)*

**Returns:** *Slot*

___

###  headStateRoot

▸ **headStateRoot**(): *Uint8Array*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:18](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L18)*

**Returns:** *Uint8Array*

___

###  start

▸ **start**(`genesisTime`: number, `clock`: [IBeaconClock](_chain_clock_interface_.ibeaconclock.md)): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:11](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`genesisTime` | number |
`clock` | [IBeaconClock](_chain_clock_interface_.ibeaconclock.md) |

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:12](https://github.com/ChainSafe/lodestar/blob/3dee40678/packages/lodestar/src/chain/forkChoice/interface.ts#L12)*

**Returns:** *Promise‹void›*
