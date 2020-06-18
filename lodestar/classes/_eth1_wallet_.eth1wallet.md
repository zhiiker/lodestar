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

\+ **new Eth1Wallet**(`eth1PrivateKey`: string, `contractAbi`: [IEthersAbi](../modules/_eth1_interface_.md#iethersabi), `config`: IBeaconConfig, `logger`: ILogger, `provider?`: Provider): *[Eth1Wallet](_eth1_wallet_.eth1wallet.md)*

*Defined in [packages/lodestar/src/eth1/wallet.ts:25](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/wallet.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`eth1PrivateKey` | string |
`contractAbi` | [IEthersAbi](../modules/_eth1_interface_.md#iethersabi) |
`config` | IBeaconConfig |
`logger` | ILogger |
`provider?` | Provider |

**Returns:** *[Eth1Wallet](_eth1_wallet_.eth1wallet.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/eth1/wallet.ts:23](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/wallet.ts#L23)*

___

### `Private` contractAbi

• **contractAbi**: *[IEthersAbi](../modules/_eth1_interface_.md#iethersabi)*

*Defined in [packages/lodestar/src/eth1/wallet.ts:21](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/wallet.ts#L21)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/eth1/wallet.ts:25](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/wallet.ts#L25)*

___

### `Private` wallet

• **wallet**: *Wallet*

*Defined in [packages/lodestar/src/eth1/wallet.ts:19](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/wallet.ts#L19)*

## Methods

###  submitValidatorDeposit

▸ **submitValidatorDeposit**(`address`: string, `value`: BigNumber, `signingKey`: PrivateKey, `withdrawalKey`: PrivateKey): *Promise‹string›*

*Defined in [packages/lodestar/src/eth1/wallet.ts:49](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/wallet.ts#L49)*

Will deposit 32 ETH to eth2.0 deposit contract.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | string | address of deposit contract |
`value` | BigNumber | amount to wei to deposit on contract  |
`signingKey` | PrivateKey | - |
`withdrawalKey` | PrivateKey | - |

**Returns:** *Promise‹string›*
