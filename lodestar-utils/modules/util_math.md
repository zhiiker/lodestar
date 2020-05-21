[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › [util/math](util_math.md)

# External module: util/math

## Index

### Functions

* [bigIntMax](util_math.md#bigintmax)
* [bigIntMin](util_math.md#bigintmin)
* [bigIntSqrt](util_math.md#bigintsqrt)
* [intDiv](util_math.md#intdiv)
* [intSqrt](util_math.md#intsqrt)
* [randBetween](util_math.md#randbetween)
* [randBetweenBigInt](util_math.md#randbetweenbigint)

## Functions

###  bigIntMax

▸ **bigIntMax**(`a`: bigint, `b`: bigint): *bigint*

*Defined in [math.ts:16](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar-utils/src/math.ts#L16)*

Return the max number between two big numbers.

**Parameters:**

Name | Type |
------ | ------ |
`a` | bigint |
`b` | bigint |

**Returns:** *bigint*

___

###  bigIntMin

▸ **bigIntMin**(`a`: bigint, `b`: bigint): *bigint*

*Defined in [math.ts:9](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar-utils/src/math.ts#L9)*

Return the min number between two big numbers.

**Parameters:**

Name | Type |
------ | ------ |
`a` | bigint |
`b` | bigint |

**Returns:** *bigint*

___

###  bigIntSqrt

▸ **bigIntSqrt**(`n`: bigint): *bigint*

*Defined in [math.ts:37](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar-utils/src/math.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | bigint |

**Returns:** *bigint*

___

###  intDiv

▸ **intDiv**(`dividend`: number, `divisor`: number): *number*

*Defined in [math.ts:20](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar-utils/src/math.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`dividend` | number |
`divisor` | number |

**Returns:** *number*

___

###  intSqrt

▸ **intSqrt**(`n`: number): *number*

*Defined in [math.ts:27](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar-utils/src/math.ts#L27)*

Calculate the largest integer k such that k**2 <= n.

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *number*

___

###  randBetween

▸ **randBetween**(`min`: number, `max`: number): *number*

*Defined in [math.ts:50](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar-utils/src/math.ts#L50)*

Regenerates a random integer between min (included) and max (excluded).

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  randBetweenBigInt

▸ **randBetweenBigInt**(`min`: number, `max`: number): *bigint*

*Defined in [math.ts:58](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar-utils/src/math.ts#L58)*

Wraps randBetween and returns a bigNumber.

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *bigint*
