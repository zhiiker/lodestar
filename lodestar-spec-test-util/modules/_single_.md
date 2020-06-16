[@chainsafe/lodestar-spec-test-util](../README.md) › [Globals](../globals.md) › ["single"](_single_.md)

# External module: "single"

## Index

### Enumerations

* [InputType](../enums/_single_.inputtype.md)

### Interfaces

* [ISpecTestOptions](../interfaces/_single_.ispectestoptions.md)
* [ITestCaseMeta](../interfaces/_single_.itestcasemeta.md)

### Functions

* [describeDirectorySpecTest](_single_.md#describedirectoryspectest)
* [deserializeTestCase](_single_.md#deserializetestcase)
* [generateProfileReport](_single_.md#generateprofilereport)
* [generateTestCase](_single_.md#generatetestcase)
* [loadInputFiles](_single_.md#loadinputfiles)

### Object literals

* [defaultOptions](_single_.md#const-defaultoptions)

## Functions

###  describeDirectorySpecTest

▸ **describeDirectorySpecTest**<**TestCase**, **Result**>(`name`: string, `testCaseDirectoryPath`: string, `testFunction`: function, `options`: Partial‹[ISpecTestOptions](../interfaces/_single_.ispectestoptions.md)‹TestCase, Result››): *void*

*Defined in [single.ts:64](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L64)*

**Type parameters:**

▪ **TestCase**

▪ **Result**

**Parameters:**

▪ **name**: *string*

▪ **testCaseDirectoryPath**: *string*

▪ **testFunction**: *function*

▸ (`testCase`: TestCase, `directoryName`: string): *Result*

**Parameters:**

Name | Type |
------ | ------ |
`testCase` | TestCase |
`directoryName` | string |

▪ **options**: *Partial‹[ISpecTestOptions](../interfaces/_single_.ispectestoptions.md)‹TestCase, Result››*

**Returns:** *void*

___

###  deserializeTestCase

▸ **deserializeTestCase**<**TestCase**, **Result**>(`file`: any, `inputName`: any, `options`: [ISpecTestOptions](../interfaces/_single_.ispectestoptions.md)‹TestCase, Result›): *object*

*Defined in [single.ts:159](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L159)*

**Type parameters:**

▪ **TestCase**

▪ **Result**

**Parameters:**

Name | Type |
------ | ------ |
`file` | any |
`inputName` | any |
`options` | [ISpecTestOptions](../interfaces/_single_.ispectestoptions.md)‹TestCase, Result› |

**Returns:** *object*

___

###  generateProfileReport

▸ **generateProfileReport**(`profile`: any, `directory`: any, `profileId`: string): *void*

*Defined in [single.ts:167](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`profile` | any |
`directory` | any |
`profileId` | string |

**Returns:** *void*

___

###  generateTestCase

▸ **generateTestCase**<**TestCase**, **Result**>(`testCaseDirectoryPath`: string, `index`: number, `testFunction`: function, `options`: [ISpecTestOptions](../interfaces/_single_.ispectestoptions.md)‹TestCase, Result›): *void*

*Defined in [single.ts:97](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L97)*

**Type parameters:**

▪ **TestCase**

▪ **Result**

**Parameters:**

▪ **testCaseDirectoryPath**: *string*

▪ **index**: *number*

▪ **testFunction**: *function*

▸ (...`args`: any): *Result*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any |

▪ **options**: *[ISpecTestOptions](../interfaces/_single_.ispectestoptions.md)‹TestCase, Result›*

**Returns:** *void*

___

###  loadInputFiles

▸ **loadInputFiles**<**TestCase**, **Result**>(`directory`: string, `options`: [ISpecTestOptions](../interfaces/_single_.ispectestoptions.md)‹TestCase, Result›): *TestCase*

*Defined in [single.ts:133](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L133)*

**Type parameters:**

▪ **TestCase**

▪ **Result**

**Parameters:**

Name | Type |
------ | ------ |
`directory` | string |
`options` | [ISpecTestOptions](../interfaces/_single_.ispectestoptions.md)‹TestCase, Result› |

**Returns:** *TestCase*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [single.ts:53](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L53)*

###  inputProcessing

• **inputProcessing**: *object*

*Defined in [single.ts:55](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L55)*

#### Type declaration:

###  inputTypes

• **inputTypes**: *object*

*Defined in [single.ts:54](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L54)*

#### Type declaration:

###  sszTypes

• **sszTypes**: *object*

*Defined in [single.ts:56](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L56)*

#### Type declaration:

###  timeout

• **timeout**: *number* = 4000

*Defined in [single.ts:61](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L61)*

###  expectFunc

▸ **expectFunc**(`testCase`: any, `expected`: any, `actual`: any): *Assertion*

*Defined in [single.ts:60](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`testCase` | any |
`expected` | any |
`actual` | any |

**Returns:** *Assertion*

###  getExpected

▸ **getExpected**(`testCase`: any): *any*

*Defined in [single.ts:57](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`testCase` | any |

**Returns:** *any*

###  shouldError

▸ **shouldError**(): *false*

*Defined in [single.ts:58](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L58)*

**Returns:** *false*

###  shouldSkip

▸ **shouldSkip**(): *false*

*Defined in [single.ts:59](https://github.com/ChainSafe/lodestar/blob/ee8ffa456/packages/lodestar-spec-test-util/src/single.ts#L59)*

**Returns:** *false*
