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

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:44](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar-cli/src/commands/dev/command.ts#L44)*

___

###  validators

• **validators**: *ValidatorClient[]* = []

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:45](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar-cli/src/commands/dev/command.ts#L45)*

## Methods

###  action

▸ **action**(`options`: [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md), `logger`: ILogger): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:79](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar-cli/src/commands/dev/command.ts#L79)*

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

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:48](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar-cli/src/commands/dev/command.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*

___

### `Private` startValidator

▸ **startValidator**(`privkey`: Buffer, `node`: BeaconNode, `options`: [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md)): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:140](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar-cli/src/commands/dev/command.ts#L140)*

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

*Defined in [packages/lodestar-cli/src/commands/dev/command.ts:132](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar-cli/src/commands/dev/command.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |
`node` | BeaconNode |
`options` | [IDevCommandOptions](../interfaces/_commands_dev_command_.idevcommandoptions.md) |

**Returns:** *Promise‹void›*
