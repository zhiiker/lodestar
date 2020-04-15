[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/dev/options"](_eth1_dev_options_.md)

# External module: "eth1/dev/options"

## Index

### Object literals

* [config](_eth1_dev_options_.md#const-config)

## Object literals

### `Const` config

### ▪ **config**: *object*

*Defined in [packages/lodestar/src/eth1/dev/options.ts:7](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/eth1/dev/options.ts#L7)*

###  depositContract

• **depositContract**: *object* = defaultEth1.depositContract

*Defined in [packages/lodestar/src/eth1/dev/options.ts:10](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/eth1/dev/options.ts#L10)*

#### Type declaration:

* **abi**: *string | object | object | object[] | string | Interface*

* **address**: *string*

* **bytecode**: *string*

* **deployedAt**: *Number64*

###  provider

• **provider**: *object* = defaultEth1.provider

*Defined in [packages/lodestar/src/eth1/dev/options.ts:8](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/eth1/dev/options.ts#L8)*

#### Type declaration:

* **network**: *Number64*

* **url**: *string*

###  providerInstance

• **providerInstance**: *JsonRpcProvider‹›* = new ethers.providers.JsonRpcProvider("http://localhost:8545", 200)

*Defined in [packages/lodestar/src/eth1/dev/options.ts:9](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/eth1/dev/options.ts#L9)*
