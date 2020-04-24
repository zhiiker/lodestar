[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/interface"](../modules/_eth1_interface_.md) › [IBlockCache](_eth1_interface_.iblockcache.md)

# Interface: IBlockCache <**T**>

Eth1 block cache interface for eth1 data vote.

## Type parameters

▪ **T**

## Hierarchy

* **IBlockCache**

## Implemented by

* [BlockCache](../classes/_eth1_impl_blocks_.blockcache.md)

## Index

### Methods

* [addBlock](_eth1_interface_.iblockcache.md#addblock)
* [findBlocksByTimestamp](_eth1_interface_.iblockcache.md#findblocksbytimestamp)
* [hasBlock](_eth1_interface_.iblockcache.md#hasblock)
* [init](_eth1_interface_.iblockcache.md#init)
* [prune](_eth1_interface_.iblockcache.md#prune)
* [requestNewBlock](_eth1_interface_.iblockcache.md#requestnewblock)

## Methods

###  addBlock

▸ **addBlock**(`block`: T): *void*

*Defined in [packages/lodestar/src/eth1/interface.ts:113](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | T |

**Returns:** *void*

___

###  findBlocksByTimestamp

▸ **findBlocksByTimestamp**(`fromTime?`: number, `toTime?`: number): *T[]*

*Defined in [packages/lodestar/src/eth1/interface.ts:115](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`fromTime?` | number |
`toTime?` | number |

**Returns:** *T[]*

___

###  hasBlock

▸ **hasBlock**(`block`: T): *boolean*

*Defined in [packages/lodestar/src/eth1/interface.ts:112](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | T |

**Returns:** *boolean*

___

###  init

▸ **init**(`blocks`: T[], `head`: T): *void*

*Defined in [packages/lodestar/src/eth1/interface.ts:111](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`blocks` | T[] |
`head` | T |

**Returns:** *void*

___

###  prune

▸ **prune**(`timestamp`: number): *void*

*Defined in [packages/lodestar/src/eth1/interface.ts:114](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`timestamp` | number |

**Returns:** *void*

___

###  requestNewBlock

▸ **requestNewBlock**(`head`: T): *number | undefined*

*Defined in [packages/lodestar/src/eth1/interface.ts:116](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/eth1/interface.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`head` | T |

**Returns:** *number | undefined*
