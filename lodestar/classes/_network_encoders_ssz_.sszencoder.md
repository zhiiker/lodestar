[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/encoders/ssz"](../modules/_network_encoders_ssz_.md) › [SszEncoder](_network_encoders_ssz_.sszencoder.md)

# Class: SszEncoder <**SszType**>

## Type parameters

▪ **SszType**: *Type‹unknown›*

## Hierarchy

* **SszEncoder**

## Implements

* [IReqRespEncoder](../interfaces/_network_encoders_interface_.ireqrespencoder.md)‹SszType›

## Index

### Methods

* [decode](_network_encoders_ssz_.sszencoder.md#decode)
* [encode](_network_encoders_ssz_.sszencoder.md#encode)

## Methods

###  decode

▸ **decode**(`type`: SszType, `data`: unknown): *ObjectLike*

*Defined in [packages/lodestar/src/network/encoders/ssz.ts:7](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/encoders/ssz.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | SszType |
`data` | unknown |

**Returns:** *ObjectLike*

___

###  encode

▸ **encode**<**T**>(`type`: Type‹T›, `data`: T): *Buffer*

*Defined in [packages/lodestar/src/network/encoders/ssz.ts:11](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/encoders/ssz.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`type` | Type‹T› |
`data` | T |

**Returns:** *Buffer*
