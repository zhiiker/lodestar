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

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:26](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-cli/src/commands/beacon.ts#L26)*

## Methods

###  action

▸ **action**(`options`: [IBeaconCommandOptions](../interfaces/_commands_beacon_.ibeaconcommandoptions.md), `logger`: ILogger): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:48](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-cli/src/commands/beacon.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IBeaconCommandOptions](../interfaces/_commands_beacon_.ibeaconcommandoptions.md) |
`logger` | ILogger |

**Returns:** *Promise‹void›*

___

###  register

▸ **register**(`commander`: CommanderStatic): *void*

*Implementation of [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)*

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:28](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar-cli/src/commands/beacon.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*
