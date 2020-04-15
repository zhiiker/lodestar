[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/attestation/index"](_chain_factory_attestation_index_.md)

# External module: "chain/factory/attestation/index"

## Index

### Functions

* [assembleAttestation](_chain_factory_attestation_index_.md#assembleattestation)
* [getAggregationBits](_chain_factory_attestation_index_.md#getaggregationbits)

## Functions

###  assembleAttestation

▸ **assembleAttestation**(`__namedParameters`: object, `state`: BeaconState, `headBlock`: BeaconBlock, `validatorIndex`: ValidatorIndex, `index`: CommitteeIndex, `slot`: Slot): *Promise‹Attestation›*

*Defined in [packages/lodestar/src/chain/factory/attestation/index.ts:8](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/factory/attestation/index.ts#L8)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |

▪ **state**: *BeaconState*

▪ **headBlock**: *BeaconBlock*

▪ **validatorIndex**: *ValidatorIndex*

▪ **index**: *CommitteeIndex*

▪ **slot**: *Slot*

**Returns:** *Promise‹Attestation›*

___

###  getAggregationBits

▸ **getAggregationBits**(`committee`: ValidatorIndex[], `validatorIndex`: ValidatorIndex): *boolean[]*

*Defined in [packages/lodestar/src/chain/factory/attestation/index.ts:25](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/chain/factory/attestation/index.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`committee` | ValidatorIndex[] |
`validatorIndex` | ValidatorIndex |

**Returns:** *boolean[]*
