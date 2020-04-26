[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/encoders/interface"](../modules/_network_encoders_interface_.md) › [IReqRespEncoder](_network_encoders_interface_.ireqrespencoder.md)

# Interface: IReqRespEncoder <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **IReqRespEncoder**

## Implemented by

* [SnappyEncoder](../classes/_network_encoders_snappy_.snappyencoder.md)
* [SszEncoder](../classes/_network_encoders_ssz_.sszencoder.md)

## Index

### Methods

* [decode](_network_encoders_interface_.ireqrespencoder.md#decode)
* [encode](_network_encoders_interface_.ireqrespencoder.md#encode)

## Methods

###  decode

▸ **decode**(`type`: T, `data`: unknown): *unknown*

*Defined in [packages/lodestar/src/network/encoders/interface.ts:5](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/encoders/interface.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | T |
`data` | unknown |

**Returns:** *unknown*

___

###  encode

▸ **encode**(`type`: T, `data`: unknown): *unknown*

*Defined in [packages/lodestar/src/network/encoders/interface.ts:4](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/encoders/interface.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | T |
`data` | unknown |

**Returns:** *unknown*
