[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["commands/dev/command"](../modules/_commands_dev_command_.md) › [DevCommand](_commands_dev_command_.devcommand.md)

# Class: DevCommand

## Hierarchy

* **DevCommand**

## Implements

* [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)

## Index

### Properties

* [node](_commands_dev_command_.devcommand.md#node)

### Methods

* [action](_commands_dev_command_.devcommand.md#action)
* [register](_commands_dev_command_.devcommand.md#register)
* [startValidator](_commands_dev_command_.devcommand.md#private-startvalidator)
* [startValidators](_commands_dev_command_.devcommand.md#private-startvalidators)

## Properties

###  node

• **node**: *BeaconNode*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:41](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/dev/command.ts#L41)*

## Methods

###  action

▸ **action**(`options`: [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md), `logger`: ILogger): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:74](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/dev/command.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md) |
`logger` | ILogger |

**Returns:** *Promise‹void›*

___

###  register

▸ **register**(`commander`: CommanderStatic): *void*

*Implementation of [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:43](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/dev/command.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*

___

### `Private` startValidator

▸ **startValidator**(`privkey`: Buffer, `node`: BeaconNode, `options`: [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md)): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:132](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/dev/command.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`privkey` | Buffer |
`node` | BeaconNode |
`options` | [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md) |

**Returns:** *Promise‹void›*

___

### `Private` startValidators

▸ **startValidators**(`from`: number, `to`: number, `node`: BeaconNode, `options`: [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md)): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:124](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/dev/command.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |
`node` | BeaconNode |
`options` | [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md) |

**Returns:** *Promise‹void›*
