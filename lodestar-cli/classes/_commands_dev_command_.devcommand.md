[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["commands/dev/command"](../modules/_commands_dev_command_.md) › [DevCommand](_commands_dev_command_.devcommand.md)

# Class: DevCommand

## Hierarchy

* **DevCommand**

## Implements

* [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)

## Index

### Properties

* [node](_commands_dev_command_.devcommand.md#node)
* [validators](_commands_dev_command_.devcommand.md#validators)

### Methods

* [action](_commands_dev_command_.devcommand.md#action)
* [register](_commands_dev_command_.devcommand.md#register)
* [startValidator](_commands_dev_command_.devcommand.md#private-startvalidator)
* [startValidators](_commands_dev_command_.devcommand.md#private-startvalidators)

## Properties

###  node

• **node**: *BeaconNode*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:45](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar-cli/src/commands/dev/command.ts#L45)*

___

###  validators

• **validators**: *ValidatorClient[]* = []

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:46](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar-cli/src/commands/dev/command.ts#L46)*

## Methods

###  action

▸ **action**(`options`: [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md), `logger`: ILogger): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:80](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar-cli/src/commands/dev/command.ts#L80)*

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

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:49](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar-cli/src/commands/dev/command.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*

___

### `Private` startValidator

▸ **startValidator**(`privkey`: Buffer, `node`: BeaconNode, `options`: [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md)): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:150](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar-cli/src/commands/dev/command.ts#L150)*

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

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:142](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar-cli/src/commands/dev/command.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |
`node` | BeaconNode |
`options` | [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md) |

**Returns:** *Promise‹void›*
