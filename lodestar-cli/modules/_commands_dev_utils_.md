[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["commands/dev/utils"](_commands_dev_utils_.md)

# External module: "commands/dev/utils"

## Index

### Functions

* [getConfig](_commands_dev_utils_.md#getconfig)
* [getDevGenesisState](_commands_dev_utils_.md#getdevgenesisstate)
* [getPeerId](_commands_dev_utils_.md#getpeerid)
* [resetPath](_commands_dev_utils_.md#resetpath)

## Functions

###  getConfig

▸ **getConfig**(`options`: [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md)): *Partial‹IBeaconNodeOptions›*

*Defined in [packages/lodestar-cli/src/commands/dev/utils.ts:25](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-cli/src/commands/dev/utils.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md) |

**Returns:** *Partial‹IBeaconNodeOptions›*

___

###  getDevGenesisState

▸ **getDevGenesisState**(`options`: [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md), `config`: IBeaconConfig, `deposits`: TreeBacked‹List‹Root››): *BeaconState*

*Defined in [packages/lodestar-cli/src/commands/dev/utils.ts:56](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-cli/src/commands/dev/utils.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md) |
`config` | IBeaconConfig |
`deposits` | TreeBacked‹List‹Root›› |

**Returns:** *BeaconState*

___

###  getPeerId

▸ **getPeerId**(`peerIdOption`: string): *Promise‹PeerId›*

*Defined in [packages/lodestar-cli/src/commands/dev/utils.ts:39](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-cli/src/commands/dev/utils.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`peerIdOption` | string | "" |

**Returns:** *Promise‹PeerId›*

___

###  resetPath

▸ **resetPath**(`path`: string): *void*

*Defined in [packages/lodestar-cli/src/commands/dev/utils.ts:19](https://github.com/ChainSafe/lodestar/blob/14ce11e45/packages/lodestar-cli/src/commands/dev/utils.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *void*
