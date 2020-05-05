[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/ethers"](../modules/_eth1_impl_ethers_.md) › [IEthersEth1Options](_eth1_impl_ethers_.ietherseth1options.md)

# Interface: IEthersEth1Options

## Hierarchy

* [IEth1Options](_eth1_options_.ieth1options.md)

  ↳ **IEthersEth1Options**

## Index

### Properties

* [contract](_eth1_impl_ethers_.ietherseth1options.md#optional-contract)
* [depositContract](_eth1_impl_ethers_.ietherseth1options.md#depositcontract)
* [provider](_eth1_impl_ethers_.ietherseth1options.md#provider)
* [providerInstance](_eth1_impl_ethers_.ietherseth1options.md#optional-providerinstance)

## Properties

### `Optional` contract

• **contract**? : *Contract*

*Defined in [packages/lodestar/src/eth1/impl/ethers.ts:20](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/eth1/impl/ethers.ts#L20)*

___

###  depositContract

• **depositContract**: *object*

*Inherited from [IEth1Options](_eth1_options_.ieth1options.md).[depositContract](_eth1_options_.ieth1options.md#depositcontract)*

*Defined in [packages/lodestar/src/eth1/options.ts:12](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/eth1/options.ts#L12)*

#### Type declaration:

* **abi**: *string | object | object | object[] | string | Interface*

* **address**: *string*

* **bytecode**: *string*

* **deployedAt**: *Number64*

___

###  provider

• **provider**: *object*

*Inherited from [IEth1Options](_eth1_options_.ieth1options.md).[provider](_eth1_options_.ieth1options.md#provider)*

*Defined in [packages/lodestar/src/eth1/options.ts:7](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/eth1/options.ts#L7)*

#### Type declaration:

* **network**: *Number64*

* **url**: *string*

___

### `Optional` providerInstance

• **providerInstance**? : *BaseProvider*

*Inherited from [IEth1Options](_eth1_options_.ieth1options.md).[providerInstance](_eth1_options_.ieth1options.md#optional-providerinstance)*

*Defined in [packages/lodestar/src/eth1/options.ts:11](https://github.com/ChainSafe/lodestar/blob/e142df2b7/packages/lodestar/src/eth1/options.ts#L11)*
