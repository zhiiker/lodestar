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

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:156](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/chain/genesis/genesis.ts#L156)*

Get an empty [[BeaconBlock]].

**Returns:** *BeaconBlock*

___

###  getEmptyBlockBody

▸ **getEmptyBlockBody**(): *BeaconBlockBody*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:125](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/chain/genesis/genesis.ts#L125)*

**Returns:** *BeaconBlockBody*

___

###  getEmptySignedBlock

▸ **getEmptySignedBlock**(): *SignedBeaconBlock*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:145](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/chain/genesis/genesis.ts#L145)*

Get an empty [[BeaconBlock]].

**Returns:** *SignedBeaconBlock*

___

###  getGenesisBeaconState

▸ **getGenesisBeaconState**(`config`: IBeaconConfig, `genesisTime`: Number64, `genesisEth1Data`: Eth1Data, `latestBlockHeader`: BeaconBlockHeader): *BeaconState*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:94](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/chain/genesis/genesis.ts#L94)*

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

▸ **initializeBeaconStateFromEth1**(`config`: IBeaconConfig, `eth1BlockHash`: Bytes32, `eth1Timestamp`: Number64, `deposits`: Deposit[]): *TreeBacked‹BeaconState›*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:33](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/chain/genesis/genesis.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`eth1BlockHash` | Bytes32 |
`eth1Timestamp` | Number64 |
`deposits` | Deposit[] |

**Returns:** *TreeBacked‹BeaconState›*

___

###  isValidGenesisState

▸ **isValidGenesisState**(`config`: IBeaconConfig, `state`: BeaconState): *boolean*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:81](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/chain/genesis/genesis.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *boolean*
