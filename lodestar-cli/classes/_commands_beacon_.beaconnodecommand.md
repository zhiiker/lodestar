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

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:37](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar-cli/src/commands/beacon.ts#L37)*

## Methods

###  action

▸ **action**(`cmdOptions`: [IBeaconCommandOptions](../interfaces/_commands_beacon_.ibeaconcommandoptions.md), `logger`: ILogger): *Promise‹BeaconNode›*

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:61](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar-cli/src/commands/beacon.ts#L61)*

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

*Defined in [packages/lodestar-cli/src/commands/beacon.ts:39](https://github.com/ChainSafe/lodestar/blob/9ad0d0ff3/packages/lodestar-cli/src/commands/beacon.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*
