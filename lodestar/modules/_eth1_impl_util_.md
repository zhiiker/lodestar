[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["eth1/impl/util"](_eth1_impl_util_.md)

# External module: "eth1/impl/util"

## Index

### Functions

* [groupDepositEventsByBlock](_eth1_impl_util_.md#groupdepositeventsbyblock)

## Functions

###  groupDepositEventsByBlock

▸ **groupDepositEventsByBlock**(`rangeDepositEvents`: [IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)[]): *Map‹number, [IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)[]›*

*Defined in [packages/lodestar/src/eth1/impl/util.ts:7](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/eth1/impl/util.ts#L7)*

Return deposit events of blocks grouped/sorted by block number and deposit index

**Parameters:**

Name | Type |
------ | ------ |
`rangeDepositEvents` | [IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)[] |

**Returns:** *Map‹number, [IDepositEvent](../interfaces/_eth1_interface_.idepositevent.md)[]›*
