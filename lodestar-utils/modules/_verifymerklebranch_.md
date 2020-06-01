[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › ["verifyMerkleBranch"](_verifymerklebranch_.md)

# External module: "verifyMerkleBranch"

## Index

### Functions

* [verifyMerkleBranch](_verifymerklebranch_.md#verifymerklebranch)

## Functions

###  verifyMerkleBranch

▸ **verifyMerkleBranch**(`leaf`: Uint8Array, `proof`: Uint8Array[], `depth`: number, `index`: number, `root`: Uint8Array): *boolean*

*Defined in [verifyMerkleBranch.ts:8](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/verifyMerkleBranch.ts#L8)*

Verify that the given ``leaf`` is on the merkle branch ``proof``
starting with the given ``root``.

**Parameters:**

Name | Type |
------ | ------ |
`leaf` | Uint8Array |
`proof` | Uint8Array[] |
`depth` | number |
`index` | number |
`root` | Uint8Array |

**Returns:** *boolean*
