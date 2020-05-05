[@chainsafe/lodestar-spec-test-util](../README.md) › [Globals](../globals.md) › ["single"](../modules/_single_.md) › [ISpecTestOptions](_single_.ispectestoptions.md)

# Interface: ISpecTestOptions <**TestCase, Result**>

## Type parameters

▪ **TestCase**

▪ **Result**

## Hierarchy

* **ISpecTestOptions**

## Index

### Properties

* [expectFunc](_single_.ispectestoptions.md#optional-expectfunc)
* [getExpected](_single_.ispectestoptions.md#optional-getexpected)
* [inputProcessing](_single_.ispectestoptions.md#optional-inputprocessing)
* [inputTypes](_single_.ispectestoptions.md#optional-inputtypes)
* [shouldError](_single_.ispectestoptions.md#optional-shoulderror)
* [shouldSkip](_single_.ispectestoptions.md#optional-shouldskip)
* [sszTypes](_single_.ispectestoptions.md#optional-ssztypes)
* [timeout](_single_.ispectestoptions.md#optional-timeout)

## Properties

### `Optional` expectFunc

• **expectFunc**? : *function*

*Defined in [single.ts:43](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar-spec-test-util/src/single.ts#L43)*

#### Type declaration:

▸ (`testCase`: TestCase, `expected`: any, `actual`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`testCase` | TestCase |
`expected` | any |
`actual` | any |

___

### `Optional` getExpected

• **getExpected**? : *function*

*Defined in [single.ts:31](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar-spec-test-util/src/single.ts#L31)*

Optionally

**`param`** 

#### Type declaration:

▸ (`testCase`: TestCase): *Result*

**Parameters:**

Name | Type |
------ | ------ |
`testCase` | TestCase |

___

### `Optional` inputProcessing

• **inputProcessing**? : *object*

*Defined in [single.ts:37](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar-spec-test-util/src/single.ts#L37)*

Optionally pass function to transform loaded values
(values from input files)

#### Type declaration:

* \[ **K**: *string*\]: function

▸ (`value`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

___

### `Optional` inputTypes

• **inputTypes**? : *object*

*Defined in [single.ts:23](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar-spec-test-util/src/single.ts#L23)*

If directory contains both ssz or yaml file version,
you can choose which one to use. Default is ssz.

#### Type declaration:

___

### `Optional` shouldError

• **shouldError**? : *function*

*Defined in [single.ts:39](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar-spec-test-util/src/single.ts#L39)*

#### Type declaration:

▸ (`testCase`: TestCase): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`testCase` | TestCase |

___

### `Optional` shouldSkip

• **shouldSkip**? : *function*

*Defined in [single.ts:41](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar-spec-test-util/src/single.ts#L41)*

#### Type declaration:

▸ (`testCase`: TestCase, `name`: string, `index`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`testCase` | TestCase |
`name` | string |
`index` | number |

___

### `Optional` sszTypes

• **sszTypes**? : *object*

*Defined in [single.ts:25](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar-spec-test-util/src/single.ts#L25)*

#### Type declaration:

___

### `Optional` timeout

• **timeout**? : *number*

*Defined in [single.ts:45](https://github.com/ChainSafe/lodestar/blob/aa20a3bfb/packages/lodestar-spec-test-util/src/single.ts#L45)*
