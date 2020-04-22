[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/attestation/data"](_chain_factory_attestation_data_.md)

# External module: "chain/factory/attestation/data"

## Index

### Functions

* [assembleAttestationData](_chain_factory_attestation_data_.md#assembleattestationdata)

## Functions

###  assembleAttestationData

▸ **assembleAttestationData**(`config`: IBeaconConfig, `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `headState`: BeaconState, `headBlock`: BeaconBlock, `slot`: Slot, `index`: CommitteeIndex): *Promise‹AttestationData›*

*Defined in [packages/lodestar/src/chain/factory/attestation/data.ts:9](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/chain/factory/attestation/data.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`headState` | BeaconState |
`headBlock` | BeaconBlock |
`slot` | Slot |
`index` | CommitteeIndex |

**Returns:** *Promise‹AttestationData›*
