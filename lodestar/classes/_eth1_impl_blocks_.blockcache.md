[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/blocks"](../modules/_eth1_impl_blocks_.md) › [BlockCache](_eth1_impl_blocks_.blockcache.md)

# Class: BlockCache <**T**>

## Type parameters

▪ **T**: *[IBlock](../interfaces/_eth1_interface_.iblock.md)*

## Hierarchy

* **BlockCache**

## Implements

* [IBlockCache](../interfaces/_eth1_interface_.iblockcache.md)‹T›

## Index

### Properties

* [blocks](_eth1_impl_blocks_.blockcache.md#private-blocks)
* [distanceToHead](_eth1_impl_blocks_.blockcache.md#private-distancetohead)

### Methods

* [addBlock](_eth1_impl_blocks_.blockcache.md#addblock)
* [findBlocksByTimestamp](_eth1_impl_blocks_.blockcache.md#findblocksbytimestamp)
* [hasBlock](_eth1_impl_blocks_.blockcache.md#hasblock)
* [init](_eth1_impl_blocks_.blockcache.md#init)
* [prune](_eth1_impl_blocks_.blockcache.md#prune)
* [requestNewBlock](_eth1_impl_blocks_.blockcache.md#requestnewblock)

## Properties

### `Private` blocks

• **blocks**: *T[]*

*Defined in [packages/lodestar/src/eth1/impl/blocks.ts:5](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/blocks.ts#L5)*

___

### `Private` distanceToHead

• **distanceToHead**: *number*

*Defined in [packages/lodestar/src/eth1/impl/blocks.ts:6](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/blocks.ts#L6)*

## Methods

###  addBlock

▸ **addBlock**(`block`: T): *void*

*Defined in [packages/lodestar/src/eth1/impl/blocks.ts:13](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/blocks.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | T |

**Returns:** *void*

___

###  findBlocksByTimestamp

▸ **findBlocksByTimestamp**(`fromTime?`: number, `toTime?`: number): *T[]*

*Implementation of [IBlockCache](../interfaces/_eth1_interface_.iblockcache.md)*

*Defined in [packages/lodestar/src/eth1/impl/blocks.ts:42](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/blocks.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`fromTime?` | number |
`toTime?` | number |

**Returns:** *T[]*

___

###  hasBlock

▸ **hasBlock**(`block`: T): *boolean*

*Defined in [packages/lodestar/src/eth1/impl/blocks.ts:23](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/blocks.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | T |

**Returns:** *boolean*

___

###  init

▸ **init**(`blocks`: T[], `head`: T): *void*

*Defined in [packages/lodestar/src/eth1/impl/blocks.ts:8](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/blocks.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`blocks` | T[] |
`head` | T |

**Returns:** *void*

___

###  prune

▸ **prune**(`timestamp`: number): *void*

*Implementation of [IBlockCache](../interfaces/_eth1_interface_.iblockcache.md)*

*Defined in [packages/lodestar/src/eth1/impl/blocks.ts:31](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/blocks.ts#L31)*

Remove blocks older than timestamp

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`timestamp` | number |   |

**Returns:** *void*

___

###  requestNewBlock

▸ **requestNewBlock**(`head`: T): *number | undefined*

*Defined in [packages/lodestar/src/eth1/impl/blocks.ts:49](https://github.com/ChainSafe/lodestar/blob/b5860cf/packages/lodestar/src/eth1/impl/blocks.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`head` | T |

**Returns:** *number | undefined*
