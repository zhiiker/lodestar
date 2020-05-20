[@chainsafe/lodestar-spec-test-util](../README.md) › [Globals](../globals.md) › ["multi"](_multi_.md)

# External module: "multi"

## Index

### Interfaces

* [IBaseCase](../interfaces/_multi_.ibasecase.md)
* [TestSpec](../interfaces/_multi_.testspec.md)

### Variables

* [env](_multi_.md#const-env)

### Functions

* [describeMultiSpec](_multi_.md#describemultispec)

## Variables

### `Const` env

• **env**: *ProcessEnv* = process.env

*Defined in [multi.ts:28](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-spec-test-util/src/multi.ts#L28)*

## Functions

###  describeMultiSpec

▸ **describeMultiSpec**<**TestCase**, **Result**>(`testYamlPath`: string, `testFunc`: function, `getInput`: function, `getExpected`: function, `getActual`: function, `shouldError`: (Anonymous function), `shouldSkip`: (Anonymous function), `expectFunc`: (Anonymous function), `timeout`: number): *void*

*Defined in [multi.ts:48](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-spec-test-util/src/multi.ts#L48)*

Run yaml Eth2.0 bulk spec tests (m) for a certain function
Compares actual vs expected for all test cases

**Type parameters:**

▪ **TestCase**: *[IBaseCase](../interfaces/_multi_.ibasecase.md)*

▪ **Result**

**Parameters:**

▪ **testYamlPath**: *string*

path to yaml spec test

▪ **testFunc**: *function*

function to use to generate output

▸ (...`args`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any |

▪ **getInput**: *function*

function to convert test case into input array

▸ (`testCase`: TestCase): *any*

**Parameters:**

Name | Type |
------ | ------ |
`testCase` | TestCase |

▪ **getExpected**: *function*

function to convert test case into a
  comparable expected output

▸ (`testCase`: TestCase): *any*

**Parameters:**

Name | Type |
------ | ------ |
`testCase` | TestCase |

▪ **getActual**: *function*

function to convert function output into
  comparable actual output

▸ (`result`: any): *Result*

**Parameters:**

Name | Type |
------ | ------ |
`result` | any |

▪`Default value`  **shouldError**: *(Anonymous function)*= (testCase: TestCase, index: number) => false

function to convert test case into a
  boolean, if the case should result in an error

▪`Default value`  **shouldSkip**: *(Anonymous function)*= (testCase: TestCase, index: number) => false

function to convert test case into a boolean,
  if the case should be skipped

▪`Default value`  **expectFunc**: *(Anonymous function)*= (testCase, expect, expected, actual) => expect(actual).to.be.equal(expected)

function to run expectations against expected
  and actual output

▪`Default value`  **timeout**: *number*= 2000

how long to wait before marking tests as failed (default 2000ms). Set to 0 to wait infinitely

**Returns:** *void*
