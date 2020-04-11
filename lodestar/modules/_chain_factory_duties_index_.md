[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/factory/duties/index"](_chain_factory_duties_index_.md)

# External module: "chain/factory/duties/index"

## Index

### Functions

* [assembleValidatorDuty](_chain_factory_duties_index_.md#assemblevalidatorduty)
* [generateEmptyValidatorDuty](_chain_factory_duties_index_.md#generateemptyvalidatorduty)

## Functions

###  assembleValidatorDuty

▸ **assembleValidatorDuty**(`config`: IBeaconConfig, `validator`: object, `state`: BeaconState, `epoch`: Epoch): *ValidatorDuty*

*Defined in [packages/lodestar/src/chain/factory/duties/index.ts:6](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/chain/factory/duties/index.ts#L6)*

**Parameters:**

▪ **config**: *IBeaconConfig*

▪ **validator**: *object*

Name | Type |
------ | ------ |
`index` | ValidatorIndex |
`publicKey` | BLSPubkey |

▪ **state**: *BeaconState*

▪ **epoch**: *Epoch*

**Returns:** *ValidatorDuty*

___

###  generateEmptyValidatorDuty

▸ **generateEmptyValidatorDuty**(`publicKey`: BLSPubkey, `duty?`: Partial‹ValidatorDuty›): *ValidatorDuty*

*Defined in [packages/lodestar/src/chain/factory/duties/index.ts:30](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/chain/factory/duties/index.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`publicKey` | BLSPubkey |
`duty?` | Partial‹ValidatorDuty› |

**Returns:** *ValidatorDuty*
