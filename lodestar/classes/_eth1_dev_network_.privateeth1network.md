[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/dev/network"](../modules/_eth1_dev_network_.md) › [PrivateEth1Network](_eth1_dev_network_.privateeth1network.md)

# Class: PrivateEth1Network

## Hierarchy

* **PrivateEth1Network**

## Index

### Constructors

* [constructor](_eth1_dev_network_.privateeth1network.md#constructor)

### Properties

* [blockchain](_eth1_dev_network_.privateeth1network.md#private-blockchain)
* [logger](_eth1_dev_network_.privateeth1network.md#private-logger)
* [opts](_eth1_dev_network_.privateeth1network.md#private-opts)
* [server](_eth1_dev_network_.privateeth1network.md#private-server)

### Methods

* [accounts](_eth1_dev_network_.privateeth1network.md#accounts)
* [deployDepositContract](_eth1_dev_network_.privateeth1network.md#deploydepositcontract)
* [mnemonic](_eth1_dev_network_.privateeth1network.md#mnemonic)
* [rpcUrl](_eth1_dev_network_.privateeth1network.md#rpcurl)
* [start](_eth1_dev_network_.privateeth1network.md#start)
* [stop](_eth1_dev_network_.privateeth1network.md#stop)

## Constructors

###  constructor

\+ **new PrivateEth1Network**(`opts`: [IPrivateNetworkOpts](../interfaces/_eth1_dev_network_.iprivatenetworkopts.md), `__namedParameters`: object): *[PrivateEth1Network](_eth1_dev_network_.privateeth1network.md)*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:40](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L40)*

**Parameters:**

▪ **opts**: *[IPrivateNetworkOpts](../interfaces/_eth1_dev_network_.iprivatenetworkopts.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`logger` | ILogger |

**Returns:** *[PrivateEth1Network](_eth1_dev_network_.privateeth1network.md)*

## Properties

### `Private` blockchain

• **blockchain**: *any*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:36](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L36)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:40](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L40)*

___

### `Private` opts

• **opts**: *[IPrivateNetworkOpts](../interfaces/_eth1_dev_network_.iprivatenetworkopts.md)*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:38](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L38)*

___

### `Private` server

• **server**: *any*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:34](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L34)*

## Methods

###  accounts

▸ **accounts**(): *string[]*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:80](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L80)*

Returns array of private keys

**Returns:** *string[]*

___

###  deployDepositContract

▸ **deployDepositContract**(): *Promise‹string›*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:94](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L94)*

**Returns:** *Promise‹string›*

___

###  mnemonic

▸ **mnemonic**(): *string*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:90](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L90)*

**Returns:** *string*

___

###  rpcUrl

▸ **rpcUrl**(): *string*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:86](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L86)*

**Returns:** *string*

___

###  start

▸ **start**(): *Promise‹string›*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:57](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L57)*

**Returns:** *Promise‹string›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/eth1/dev/network.ts:73](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar/src/eth1/dev/network.ts#L73)*

**Returns:** *Promise‹void›*
