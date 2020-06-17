[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/ethers"](../modules/_eth1_impl_ethers_.md) › [IEthersEth1Options](_eth1_impl_ethers_.ietherseth1options.md)

# Interface: IEthersEth1Options

## Hierarchy

* [IEth1Options](_eth1_options_.ieth1options.md)

  ↳ **IEthersEth1Options**

## Index

### Properties

* [contract](_eth1_impl_ethers_.ietherseth1options.md#optional-contract)
* [depositContract](_eth1_impl_ethers_.ietherseth1options.md#depositcontract)
* [enabled](_eth1_impl_ethers_.ietherseth1options.md#enabled)
* [provider](_eth1_impl_ethers_.ietherseth1options.md#provider)
* [providerInstance](_eth1_impl_ethers_.ietherseth1options.md#optional-providerinstance)

## Properties

### `Optional` contract

• **contract**? : *Contract*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:19](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/eth1/impl/ethers.ts#L19)*

___

###  depositContract

• **depositContract**: *object*

*Inherited from [IEth1Options](_eth1_options_.ieth1options.md).[depositContract](_eth1_options_.ieth1options.md#depositcontract)*

*Defined in [packages/lodestar/src/eth1/options.ts:13](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/eth1/options.ts#L13)*

#### Type declaration:

* **abi**: *[IEthersAbi](../modules/_eth1_interface_.md#iethersabi)*

* **address**: *string*

* **bytecode**: *string*

* **deployedAt**: *Number64*

___

###  enabled

• **enabled**: *boolean*

*Inherited from [IEth1Options](_eth1_options_.ieth1options.md).[enabled](_eth1_options_.ieth1options.md#enabled)*

*Defined in [packages/lodestar/src/eth1/options.ts:7](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/eth1/options.ts#L7)*

___

###  provider

• **provider**: *object*

*Inherited from [IEth1Options](_eth1_options_.ieth1options.md).[provider](_eth1_options_.ieth1options.md#provider)*

*Defined in [packages/lodestar/src/eth1/options.ts:8](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/eth1/options.ts#L8)*

#### Type declaration:

* **network**: *Number64*

* **url**: *string*

___

### `Optional` providerInstance

• **providerInstance**? : *Provider*

*Inherited from [IEth1Options](_eth1_options_.ieth1options.md).[providerInstance](_eth1_options_.ieth1options.md#optional-providerinstance)*

*Defined in [packages/lodestar/src/eth1/options.ts:12](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/eth1/options.ts#L12)*
