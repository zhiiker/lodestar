[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["commands/eth1-private-network"](../modules/_commands_eth1_private_network_.md) › [Eth1PrivateNetworkCommand](_commands_eth1_private_network_.eth1privatenetworkcommand.md)

# Class: Eth1PrivateNetworkCommand

## Hierarchy

* **Eth1PrivateNetworkCommand**

## Implements

* [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)

## Index

### Methods

* [action](_commands_eth1_private_network_.eth1privatenetworkcommand.md#action)
* [register](_commands_eth1_private_network_.eth1privatenetworkcommand.md#register)

## Methods

###  action

▸ **action**(`options`: [IEth1CommandOptions](../interfaces/_commands_eth1_private_network_.ieth1commandoptions.md), `logger`: ILogger): *Promise‹PrivateEth1Network›*

*Defined in [packages/lodestar-cli/src/commands/eth1-private-network.ts:47](https://github.com/ChainSafe/lodestar/blob/663f5df9e/packages/lodestar-cli/src/commands/eth1-private-network.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IEth1CommandOptions](../interfaces/_commands_eth1_private_network_.ieth1commandoptions.md) |
`logger` | ILogger |

**Returns:** *Promise‹PrivateEth1Network›*

___

###  register

▸ **register**(`commander`: CommanderStatic): *void*

*Implementation of [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)*

*Defined in [packages/lodestar-cli/src/commands/eth1-private-network.ts:21](https://github.com/ChainSafe/lodestar/blob/663f5df9e/packages/lodestar-cli/src/commands/eth1-private-network.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*
