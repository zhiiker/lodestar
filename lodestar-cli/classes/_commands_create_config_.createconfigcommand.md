[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["commands/create-config"](../modules/_commands_create_config_.md) › [CreateConfigCommand](_commands_create_config_.createconfigcommand.md)

# Class: CreateConfigCommand

## Hierarchy

* **CreateConfigCommand**

## Implements

* [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)

## Index

### Methods

* [action](_commands_create_config_.createconfigcommand.md#action)
* [register](_commands_create_config_.createconfigcommand.md#register)

## Methods

###  action

▸ **action**(`options`: [ICreateConfigOptions](../interfaces/_commands_create_config_.icreateconfigoptions.md), `logger`: ILogger): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/create-config.ts:42](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar-cli/src/commands/create-config.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ICreateConfigOptions](../interfaces/_commands_create_config_.icreateconfigoptions.md) |
`logger` | ILogger |

**Returns:** *Promise‹void›*

___

###  register

▸ **register**(`commander`: CommanderStatic): *void*

*Implementation of [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)*

*Defined in [packages/lodestar-cli/src/commands/create-config.ts:18](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar-cli/src/commands/create-config.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*
