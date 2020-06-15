[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["interop/keypairs"](_interop_keypairs_.md)

# External module: "interop/keypairs"

## Index

### Interfaces

* [IKeypair](../interfaces/_interop_keypairs_.ikeypair.md)

### Variables

* [CURVE_ORDER](_interop_keypairs_.md#const-curve_order)

### Functions

* [interopKeypair](_interop_keypairs_.md#interopkeypair)
* [interopKeypairs](_interop_keypairs_.md#interopkeypairs)

## Variables

### `Const` CURVE_ORDER

• **CURVE_ORDER**: *bigint* = BigInt("52435875175126190479447740508185965837690552500527637822603658699938581184513")

*Defined in [packages/lodestar-validator/src/interop/keypairs.ts:6](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-validator/src/interop/keypairs.ts#L6)*

## Functions

###  interopKeypair

▸ **interopKeypair**(`index`: number): *[IKeypair](../interfaces/_interop_keypairs_.ikeypair.md)*

*Defined in [packages/lodestar-validator/src/interop/keypairs.ts:19](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-validator/src/interop/keypairs.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[IKeypair](../interfaces/_interop_keypairs_.ikeypair.md)*

___

###  interopKeypairs

▸ **interopKeypairs**(`validatorCount`: number): *[IKeypair](../interfaces/_interop_keypairs_.ikeypair.md)[]*

*Defined in [packages/lodestar-validator/src/interop/keypairs.ts:13](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-validator/src/interop/keypairs.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`validatorCount` | number |

**Returns:** *[IKeypair](../interfaces/_interop_keypairs_.ikeypair.md)[]*
