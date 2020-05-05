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

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:34](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar-cli/src/commands/beacon.ts#L34)*

## Methods

###  action

▸ **action**(`cmdOptions`: [IBeaconCommandOptions](../interfaces/_commands_beacon_.ibeaconcommandoptions.md), `logger`: ILogger): *Promise‹BeaconNode›*

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:58](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar-cli/src/commands/beacon.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`cmdOptions` | [IBeaconCommandOptions](../interfaces/_commands_beacon_.ibeaconcommandoptions.md) |
`logger` | ILogger |

**Returns:** *Promise‹BeaconNode›*

___

###  register

▸ **register**(`commander`: CommanderStatic): *void*

*Implementation of [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)*

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:36](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar-cli/src/commands/beacon.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*
