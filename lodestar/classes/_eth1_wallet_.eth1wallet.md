[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/wallet"](../modules/_eth1_wallet_.md) › [Eth1Wallet](_eth1_wallet_.eth1wallet.md)

# Class: Eth1Wallet

## Hierarchy

* **Eth1Wallet**

## Index

### Constructors

* [constructor](_eth1_wallet_.eth1wallet.md#constructor)

### Properties

* [config](_eth1_wallet_.eth1wallet.md#private-config)
* [contractAbi](_eth1_wallet_.eth1wallet.md#private-contractabi)
* [logger](_eth1_wallet_.eth1wallet.md#private-logger)
* [wallet](_eth1_wallet_.eth1wallet.md#private-wallet)

### Methods

* [submitValidatorDeposit](_eth1_wallet_.eth1wallet.md#submitvalidatordeposit)

## Constructors

###  constructor

\+ **new Eth1Wallet**(`eth1PrivateKey`: string, `contractAbi`: string | ParamType[], `config`: IBeaconConfig, `logger`: ILogger, `provider?`: Provider): *[Eth1Wallet](_eth1_wallet_.eth1wallet.md)*

*Defined in [packages/lodestar/src/eth1/wallet.ts:26](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/eth1/wallet.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`eth1PrivateKey` | string |
`contractAbi` | string &#124; ParamType[] |
`config` | IBeaconConfig |
`logger` | ILogger |
`provider?` | Provider |

**Returns:** *[Eth1Wallet](_eth1_wallet_.eth1wallet.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/eth1/wallet.ts:24](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/eth1/wallet.ts#L24)*

___

### `Private` contractAbi

• **contractAbi**: *string | ParamType[]*

*Defined in [packages/lodestar/src/eth1/wallet.ts:22](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/eth1/wallet.ts#L22)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/eth1/wallet.ts:26](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/eth1/wallet.ts#L26)*

___

### `Private` wallet

• **wallet**: *Wallet*

*Defined in [packages/lodestar/src/eth1/wallet.ts:20](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/eth1/wallet.ts#L20)*

## Methods

###  submitValidatorDeposit

▸ **submitValidatorDeposit**(`address`: string, `value`: BigNumber, `signingKey`: PrivateKey, `withdrawalKey`: PrivateKey): *Promise‹string›*

*Defined in [packages/lodestar/src/eth1/wallet.ts:50](https://github.com/ChainSafe/lodestar/blob/533caff9e/packages/lodestar/src/eth1/wallet.ts#L50)*

Will deposit 32 ETH to eth2.0 deposit contract.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | string | address of deposit contract |
`value` | BigNumber | amount to wei to deposit on contract  |
`signingKey` | PrivateKey | - |
`withdrawalKey` | PrivateKey | - |

**Returns:** *Promise‹string›*
