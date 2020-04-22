[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["commands/beacon"](../modules/_commands_beacon_.md) › [BeaconNodeCommand](_commands_beacon_.beaconnodecommand.md)

# Class: BeaconNodeCommand

## Hierarchy

* **BeaconNodeCommand**

## Implements

* [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)

## Index

### Properties

* [node](_commands_beacon_.beaconnodecommand.md#node)

### Methods

* [action](_commands_beacon_.beaconnodecommand.md#action)
* [register](_commands_beacon_.beaconnodecommand.md#register)

## Properties

###  node

• **node**: *BeaconNode*

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:31](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar-cli/src/commands/beacon.ts#L31)*

## Methods

###  action

▸ **action**(`cmdOptions`: [IBeaconCommandOptions](../interfaces/_commands_beacon_.ibeaconcommandoptions.md), `logger`: ILogger): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:55](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar-cli/src/commands/beacon.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`cmdOptions` | [IBeaconCommandOptions](../interfaces/_commands_beacon_.ibeaconcommandoptions.md) |
`logger` | ILogger |

**Returns:** *Promise‹void›*

___

###  register

▸ **register**(`commander`: CommanderStatic): *void*

*Implementation of [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)*

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:33](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar-cli/src/commands/beacon.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*
