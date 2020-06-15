[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/cmds/beacon/config"](_lodecli_cmds_beacon_config_.md)

# External module: "lodecli/cmds/beacon/config"

## Index

### Functions

* [createBeaconConfig](_lodecli_cmds_beacon_config_.md#createbeaconconfig)
* [initBeaconConfig](_lodecli_cmds_beacon_config_.md#initbeaconconfig)
* [readBeaconConfig](_lodecli_cmds_beacon_config_.md#readbeaconconfig)
* [writeBeaconConfig](_lodecli_cmds_beacon_config_.md#writebeaconconfig)

## Functions

###  createBeaconConfig

▸ **createBeaconConfig**(`args`: [IBeaconArgs](../interfaces/_lodecli_cmds_beacon_options_index_.ibeaconargs.md)): *Partial‹IBeaconNodeOptions›*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/beacon/config.ts:9](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/beacon/config.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [IBeaconArgs](../interfaces/_lodecli_cmds_beacon_options_index_.ibeaconargs.md) |

**Returns:** *Partial‹IBeaconNodeOptions›*

___

###  initBeaconConfig

▸ **initBeaconConfig**(`filename`: string, `args`: [IBeaconArgs](../interfaces/_lodecli_cmds_beacon_options_index_.ibeaconargs.md)): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/beacon/config.ts:42](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/beacon/config.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |
`args` | [IBeaconArgs](../interfaces/_lodecli_cmds_beacon_options_index_.ibeaconargs.md) |

**Returns:** *Promise‹void›*

___

###  readBeaconConfig

▸ **readBeaconConfig**(`filename`: string): *Partial‹IBeaconNodeOptions›*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/beacon/config.ts:34](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/beacon/config.ts#L34)*

This needs to be a synchronous function because it will be run as part of the yargs 'build' step

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *Partial‹IBeaconNodeOptions›*

___

###  writeBeaconConfig

▸ **writeBeaconConfig**(`filename`: string, `config`: Partial‹IBeaconNodeOptions›): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/beacon/config.ts:27](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/beacon/config.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |
`config` | Partial‹IBeaconNodeOptions› |

**Returns:** *Promise‹void›*
