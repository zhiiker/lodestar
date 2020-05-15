[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["util/function"](_util_function_.md)

# External module: "util/function"

## Index

### Type aliases

* [GetInstanceFunc](_util_function_.md#getinstancefunc)

### Functions

* [retryable](_util_function_.md#retryable)

## Type aliases

###  GetInstanceFunc

Ƭ **GetInstanceFunc**: *function*

*Defined in [packages/lodestar/src/util/function.ts:2](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/util/function.ts#L2)*

#### Type declaration:

▸ (...`args`: any[]): *Promise‹T | null›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

## Functions

###  retryable

▸ **retryable**<**T**>(`funcGen`: Generator‹[GetInstanceFunc](_util_function_.md#getinstancefunc)‹T›› | [GetInstanceFunc](_util_function_.md#getinstancefunc)‹T›, `retry`: number): *Promise‹T | null›*

*Defined in [packages/lodestar/src/util/function.ts:4](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar/src/util/function.ts#L4)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`funcGen` | Generator‹[GetInstanceFunc](_util_function_.md#getinstancefunc)‹T›› &#124; [GetInstanceFunc](_util_function_.md#getinstancefunc)‹T› | - |
`retry` | number | 3 |

**Returns:** *Promise‹T | null›*
