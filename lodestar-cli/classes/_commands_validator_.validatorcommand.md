[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["commands/validator"](../modules/_commands_validator_.md) › [ValidatorCommand](_commands_validator_.validatorcommand.md)

# Class: ValidatorCommand

## Hierarchy

* **ValidatorCommand**

## Implements

* [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)

## Index

### Methods

* [action](_commands_validator_.validatorcommand.md#action)
* [register](_commands_validator_.validatorcommand.md#register)

## Methods

###  action

▸ **action**(`options`: [IValidatorCommandOptions](../interfaces/_commands_validator_.ivalidatorcommandoptions.md), `logger`: ILogger): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/validator.ts:36](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar-cli/src/commands/validator.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IValidatorCommandOptions](../interfaces/_commands_validator_.ivalidatorcommandoptions.md) |
`logger` | ILogger |

**Returns:** *Promise‹void›*

___

###  register

▸ **register**(`commander`: CommanderStatic): *void*

*Implementation of [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)*

*Defined in [packages/lodestar-cli/src/commands/validator.ts:19](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar-cli/src/commands/validator.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*
