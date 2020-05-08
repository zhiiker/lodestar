[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/forkChoice/interface"](../modules/_chain_forkchoice_interface_.md) › [ILMDGHOST](_chain_forkchoice_interface_.ilmdghost.md)

# Interface: ILMDGHOST

## Hierarchy

* **ILMDGHOST**

## Implemented by

* [StatefulDagLMDGHOST](../classes/_chain_forkchoice_statefuldag_lmdghost_.statefuldaglmdghost.md)

## Index

### Methods

* [addAttestation](_chain_forkchoice_interface_.ilmdghost.md#addattestation)
* [addBlock](_chain_forkchoice_interface_.ilmdghost.md#addblock)
* [getFinalized](_chain_forkchoice_interface_.ilmdghost.md#getfinalized)
* [getJustified](_chain_forkchoice_interface_.ilmdghost.md#getjustified)
* [head](_chain_forkchoice_interface_.ilmdghost.md#head)
* [headStateRoot](_chain_forkchoice_interface_.ilmdghost.md#headstateroot)
* [start](_chain_forkchoice_interface_.ilmdghost.md#start)
* [stop](_chain_forkchoice_interface_.ilmdghost.md#stop)

## Methods

###  addAttestation

▸ **addAttestation**(`blockRootBuf`: Uint8Array, `attester`: ValidatorIndex, `weight`: Gwei): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:14](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/chain/forkChoice/interface.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`blockRootBuf` | Uint8Array |
`attester` | ValidatorIndex |
`weight` | Gwei |

**Returns:** *void*

___

###  addBlock

▸ **addBlock**(`info`: [BlockChainInfo](_chain_forkchoice_interface_.blockchaininfo.md)): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:13](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/chain/forkChoice/interface.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`info` | [BlockChainInfo](_chain_forkchoice_interface_.blockchaininfo.md) |

**Returns:** *void*

___

###  getFinalized

▸ **getFinalized**(): *Checkpoint*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:18](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/chain/forkChoice/interface.ts#L18)*

**Returns:** *Checkpoint*

___

###  getJustified

▸ **getJustified**(): *Checkpoint*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:17](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/chain/forkChoice/interface.ts#L17)*

**Returns:** *Checkpoint*

___

###  head

▸ **head**(): *Uint8Array*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:15](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/chain/forkChoice/interface.ts#L15)*

**Returns:** *Uint8Array*

___

###  headStateRoot

▸ **headStateRoot**(): *Uint8Array*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:16](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/chain/forkChoice/interface.ts#L16)*

**Returns:** *Uint8Array*

___

###  start

▸ **start**(`genesisTime`: number, `clock`: [IBeaconClock](_chain_clock_interface_.ibeaconclock.md)): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:11](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/chain/forkChoice/interface.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`genesisTime` | number |
`clock` | [IBeaconClock](_chain_clock_interface_.ibeaconclock.md) |

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/chain/forkChoice/interface.ts:12](https://github.com/ChainSafe/lodestar/blob/b6353573c/packages/lodestar/src/chain/forkChoice/interface.ts#L12)*

**Returns:** *Promise‹void›*
