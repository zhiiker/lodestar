[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/genesis/genesis"](_chain_genesis_genesis_.md)

# External module: "chain/genesis/genesis"

## Index

### Functions

* [getEmptyBlock](_chain_genesis_genesis_.md#getemptyblock)
* [getEmptyBlockBody](_chain_genesis_genesis_.md#getemptyblockbody)
* [getEmptySignedBlock](_chain_genesis_genesis_.md#getemptysignedblock)
* [getGenesisBeaconState](_chain_genesis_genesis_.md#getgenesisbeaconstate)
* [initializeBeaconStateFromEth1](_chain_genesis_genesis_.md#initializebeaconstatefrometh1)
* [isValidGenesisState](_chain_genesis_genesis_.md#isvalidgenesisstate)

## Functions

###  getEmptyBlock

▸ **getEmptyBlock**(): *BeaconBlock*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:152](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/genesis/genesis.ts#L152)*

Get an empty [[BeaconBlock]].

**Returns:** *BeaconBlock*

___

###  getEmptyBlockBody

▸ **getEmptyBlockBody**(): *BeaconBlockBody*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:121](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/genesis/genesis.ts#L121)*

**Returns:** *BeaconBlockBody*

___

###  getEmptySignedBlock

▸ **getEmptySignedBlock**(): *SignedBeaconBlock*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:141](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/genesis/genesis.ts#L141)*

Get an empty [[BeaconBlock]].

**Returns:** *SignedBeaconBlock*

___

###  getGenesisBeaconState

▸ **getGenesisBeaconState**(`config`: IBeaconConfig, `genesisTime`: Number64, `genesisEth1Data`: Eth1Data, `latestBlockHeader`: BeaconBlockHeader): *BeaconState*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:90](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/genesis/genesis.ts#L90)*

Generate the initial beacon chain state.

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`genesisTime` | Number64 |
`genesisEth1Data` | Eth1Data |
`latestBlockHeader` | BeaconBlockHeader |

**Returns:** *BeaconState*

___

###  initializeBeaconStateFromEth1

▸ **initializeBeaconStateFromEth1**(`config`: IBeaconConfig, `eth1BlockHash`: Bytes32, `eth1Timestamp`: Number64, `deposits`: Deposit[]): *BeaconState*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:32](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/genesis/genesis.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`eth1BlockHash` | Bytes32 |
`eth1Timestamp` | Number64 |
`deposits` | Deposit[] |

**Returns:** *BeaconState*

___

###  isValidGenesisState

▸ **isValidGenesisState**(`config`: IBeaconConfig, `state`: BeaconState): *boolean*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:77](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/genesis/genesis.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *boolean*
