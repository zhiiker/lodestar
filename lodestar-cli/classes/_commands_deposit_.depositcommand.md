[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["commands/deposit"](../modules/_commands_deposit_.md) › [DepositCommand](_commands_deposit_.depositcommand.md)

# Class: DepositCommand

## Hierarchy

* **DepositCommand**

## Implements

* [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)

## Index

### Methods

* [action](_commands_deposit_.depositcommand.md#action)
* [blsFromJsonKeyFile](_commands_deposit_.depositcommand.md#private-blsfromjsonkeyfile)
* [blsFromMnemonic](_commands_deposit_.depositcommand.md#private-blsfrommnemonic)
* [eth1FromJsonKeyFile](_commands_deposit_.depositcommand.md#private-eth1fromjsonkeyfile)
* [eth1FromMnemonic](_commands_deposit_.depositcommand.md#private-eth1frommnemonic)
* [parseJSON](_commands_deposit_.depositcommand.md#private-parsejson)
* [register](_commands_deposit_.depositcommand.md#register)

## Methods

###  action

▸ **action**(`options`: [IDepositCommandOptions](../interfaces/_commands_deposit_.idepositcommandoptions.md), `logger`: ILogger): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/commands/deposit.ts:92](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/deposit.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IDepositCommandOptions](../interfaces/_commands_deposit_.idepositcommandoptions.md) |
`logger` | ILogger |

**Returns:** *Promise‹void›*

___

### `Private` blsFromJsonKeyFile

▸ **blsFromJsonKeyFile**(`path`: string): *[IBLSKey](../interfaces/_commands_deposit_.iblskey.md)[]*

*Defined in [packages/lodestar-cli/src/commands/deposit.ts:193](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/deposit.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[IBLSKey](../interfaces/_commands_deposit_.iblskey.md)[]*

___

### `Private` blsFromMnemonic

▸ **blsFromMnemonic**(`mnemonic`: string, `n`: number): *[IBLSKey](../interfaces/_commands_deposit_.iblskey.md)[]*

*Defined in [packages/lodestar-cli/src/commands/deposit.ts:168](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/deposit.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`mnemonic` | string |
`n` | number |

**Returns:** *[IBLSKey](../interfaces/_commands_deposit_.iblskey.md)[]*

___

### `Private` eth1FromJsonKeyFile

▸ **eth1FromJsonKeyFile**(`path`: string, `provider`: JsonRpcProvider): *Wallet[]*

*Defined in [packages/lodestar-cli/src/commands/deposit.ts:187](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/deposit.ts#L187)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | Path to the json file |
`provider` | JsonRpcProvider |   |

**Returns:** *Wallet[]*

___

### `Private` eth1FromMnemonic

▸ **eth1FromMnemonic**(`mnemonic`: string, `provider`: JsonRpcProvider, `n`: number): *Wallet[]*

*Defined in [packages/lodestar-cli/src/commands/deposit.ts:155](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/deposit.ts#L155)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mnemonic` | string | - |
`provider` | JsonRpcProvider | - |
`n` | number | number of wallets to retrieve  |

**Returns:** *Wallet[]*

___

### `Private` parseJSON

▸ **parseJSON**<**T**>(`path`: string, `encoding?`: string): *T*

*Defined in [packages/lodestar-cli/src/commands/deposit.ts:204](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/deposit.ts#L204)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`encoding?` | string |

**Returns:** *T*

___

###  register

▸ **register**(`commander`: CommanderStatic): *void*

*Implementation of [ICliCommand](../interfaces/_commands_interface_.iclicommand.md)*

*Defined in [packages/lodestar-cli/src/commands/deposit.ts:55](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar-cli/src/commands/deposit.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`commander` | CommanderStatic |

**Returns:** *void*
