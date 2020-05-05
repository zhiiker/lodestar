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

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:155](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/genesis/genesis.ts#L155)*

Get an empty [[BeaconBlock]].

**Returns:** *BeaconBlock*

___

###  getEmptyBlockBody

▸ **getEmptyBlockBody**(): *BeaconBlockBody*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:124](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/genesis/genesis.ts#L124)*

**Returns:** *BeaconBlockBody*

___

###  getEmptySignedBlock

▸ **getEmptySignedBlock**(): *SignedBeaconBlock*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:144](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/genesis/genesis.ts#L144)*

Get an empty [[BeaconBlock]].

**Returns:** *SignedBeaconBlock*

___

###  getGenesisBeaconState

▸ **getGenesisBeaconState**(`config`: IBeaconConfig, `genesisTime`: Number64, `genesisEth1Data`: Eth1Data, `latestBlockHeader`: BeaconBlockHeader): *BeaconState*

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:93](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/genesis/genesis.ts#L93)*

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

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:32](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/genesis/genesis.ts#L32)*

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

*Defined in [packages/lodestar/src/chain/genesis/genesis.ts:80](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/chain/genesis/genesis.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`state` | BeaconState |

**Returns:** *boolean*
