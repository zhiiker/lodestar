[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/interop/keypairs"](_lodestar_interop_keypairs_.md)

# External module: "lodestar/interop/keypairs"

## Index

### Interfaces

* [IKeypair](../interfaces/_lodestar_interop_keypairs_.ikeypair.md)

### Variables

* [CURVE_ORDER](_lodestar_interop_keypairs_.md#const-curve_order)

### Functions

* [interopKeypair](_lodestar_interop_keypairs_.md#interopkeypair)
* [interopKeypairs](_lodestar_interop_keypairs_.md#interopkeypairs)

## Variables

### `Const` CURVE_ORDER

• **CURVE_ORDER**: *bigint* = BigInt("52435875175126190479447740508185965837690552500527637822603658699938581184513")

*Defined in [packages/lodestar-cli/src/lodestar/interop/keypairs.ts:6](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar-cli/src/lodestar/interop/keypairs.ts#L6)*

## Functions

###  interopKeypair

▸ **interopKeypair**(`index`: number): *[IKeypair](../interfaces/_lodestar_interop_keypairs_.ikeypair.md)*

*Defined in [packages/lodestar-cli/src/lodestar/interop/keypairs.ts:19](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar-cli/src/lodestar/interop/keypairs.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[IKeypair](../interfaces/_lodestar_interop_keypairs_.ikeypair.md)*

___

###  interopKeypairs

▸ **interopKeypairs**(`validatorCount`: number): *[IKeypair](../interfaces/_lodestar_interop_keypairs_.ikeypair.md)[]*

*Defined in [packages/lodestar-cli/src/lodestar/interop/keypairs.ts:13](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar-cli/src/lodestar/interop/keypairs.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`validatorCount` | number |

**Returns:** *[IKeypair](../interfaces/_lodestar_interop_keypairs_.ikeypair.md)[]*
