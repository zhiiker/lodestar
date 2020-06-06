[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/interface"](../modules/_eth1_interface_.md) › [IEth1Events](_eth1_interface_.ieth1events.md)

# Interface: IEth1Events

## Hierarchy

* **IEth1Events**

## Index

### Properties

* [deposit](_eth1_interface_.ieth1events.md#deposit)
* [eth1Data](_eth1_interface_.ieth1events.md#eth1data)

## Properties

###  deposit

• **deposit**: *function*

*Defined in [packages/lodestar/src/eth1/interface.ts:19](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/eth1/interface.ts#L19)*

#### Type declaration:

▸ (`index`: Number64, `depositData`: DepositData): *void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | Number64 |
`depositData` | DepositData |

___

###  eth1Data

• **eth1Data**: *function*

*Defined in [packages/lodestar/src/eth1/interface.ts:20](https://github.com/ChainSafe/lodestar/blob/ee6564a3a/packages/lodestar/src/eth1/interface.ts#L20)*

#### Type declaration:

▸ (`timestamp`: number, `eth1Data`: Eth1Data, `blockNumber`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`timestamp` | number |
`eth1Data` | Eth1Data |
`blockNumber` | number |
