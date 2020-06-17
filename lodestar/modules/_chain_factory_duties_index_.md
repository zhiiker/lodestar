[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/duties/index"](_chain_factory_duties_index_.md)

# External module: "chain/factory/duties/index"

## Index

### Functions

* [assembleAttesterDuty](_chain_factory_duties_index_.md#assembleattesterduty)
* [generateEmptyAttesterDuty](_chain_factory_duties_index_.md#generateemptyattesterduty)

## Functions

###  assembleAttesterDuty

▸ **assembleAttesterDuty**(`config`: IBeaconConfig, `validator`: object, `state`: BeaconState, `epoch`: Epoch): *AttesterDuty*

*Defined in [packages/lodestar/src/chain/factory/duties/index.ts:7](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/chain/factory/duties/index.ts#L7)*

**Parameters:**

▪ **config**: *IBeaconConfig*

▪ **validator**: *object*

Name | Type |
------ | ------ |
`index` | ValidatorIndex |
`publicKey` | BLSPubkey |

▪ **state**: *BeaconState*

▪ **epoch**: *Epoch*

**Returns:** *AttesterDuty*

___

###  generateEmptyAttesterDuty

▸ **generateEmptyAttesterDuty**(`publicKey`: BLSPubkey, `duty?`: Partial‹AttesterDuty›): *AttesterDuty*

*Defined in [packages/lodestar/src/chain/factory/duties/index.ts:35](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/chain/factory/duties/index.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`publicKey` | BLSPubkey |
`duty?` | Partial‹AttesterDuty› |

**Returns:** *AttesterDuty*
