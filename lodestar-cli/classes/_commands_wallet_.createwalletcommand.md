[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["commands/wallet"](../modules/_commands_wallet_.md) › [CreateWalletCommand](_commands_wallet_.createwalletcommand.md)

# Class: CreateWalletCommand

## Hierarchy

* **CreateWalletCommand**

## Implements

* [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)

## Index

### Methods

* [action](_commands_wallet_.createwalletcommand.md#action)
* [register](_commands_wallet_.createwalletcommand.md#register)

## Methods

###  action

▸ **action**(`options`: [IWalletCommandOptions](../interfaces/_commands_wallet_.iwalletcommandoptions.md), `logger`: ILogger): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/wallet.ts:44](https://github.com/ChainSafe/lodestar/blob/e2d6cf79d/packages/lodestar-cli/src/commands/wallet.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IWalletCommandOptions](../interfaces/_commands_wallet_.iwalletcommandoptions.md) |
`logger` | ILogger |

**Returns:** *Promise‹void›*

___

###  register

▸ **register**(`commander`: CommanderStatic): *void*

*Implementation of [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)*

*Defined in [packages/lodestar-cli/src/commands/wallet.ts:19](https://github.com/ChainSafe/lodestar/blob/e2d6cf79d/packages/lodestar-cli/src/commands/wallet.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*
