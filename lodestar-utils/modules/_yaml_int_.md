[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › ["yaml/int"](_yaml_int_.md)

# External module: "yaml/int"

## Index

### Variables

* [intType](_yaml_int_.md#const-inttype)

### Functions

* [constructYamlInteger](_yaml_int_.md#constructyamlinteger)
* [isDecCode](_yaml_int_.md#isdeccode)
* [isHexCode](_yaml_int_.md#ishexcode)
* [isInteger](_yaml_int_.md#isinteger)
* [isOctCode](_yaml_int_.md#isoctcode)
* [resolveYamlInteger](_yaml_int_.md#resolveyamlinteger)

## Variables

### `Const` intType

• **intType**: *Type‹›* = new Type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  instanceOf: BigInt,
  // @ts-ignore
  represent: {
    // @ts-ignore
    binary:      function (obj: number) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    // @ts-ignore
    octal:       function (obj: number) {
      return obj >= 0 ? "0"  + obj.toString(8) : "-0"  + obj.toString(8).slice(1);
    },
    // @ts-ignore
    decimal:     function (obj: number) { return obj.toString(10); },
    // @ts-ignore
    hexadecimal: function (obj: number) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() :  "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary:      [ 2,  "bin" ],
    octal:       [ 8,  "oct" ],
    decimal:     [ 10, "dec" ],
    hexadecimal: [ 16, "hex" ]
  }
})

*Defined in [packages/lodestar-utils/src/yaml/int.ts:151](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-utils/src/yaml/int.ts#L151)*

## Functions

###  constructYamlInteger

▸ **constructYamlInteger**(`data`: string): *bigint*

*Defined in [packages/lodestar-utils/src/yaml/int.ts:105](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-utils/src/yaml/int.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *bigint*

___

###  isDecCode

▸ **isDecCode**(`c`: number): *boolean*

*Defined in [packages/lodestar-utils/src/yaml/int.ts:15](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-utils/src/yaml/int.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | number |

**Returns:** *boolean*

___

###  isHexCode

▸ **isHexCode**(`c`: number): *boolean*

*Defined in [packages/lodestar-utils/src/yaml/int.ts:5](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-utils/src/yaml/int.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | number |

**Returns:** *boolean*

___

###  isInteger

▸ **isInteger**(`object`: object): *boolean*

*Defined in [packages/lodestar-utils/src/yaml/int.ts:147](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-utils/src/yaml/int.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`object` | object |

**Returns:** *boolean*

___

###  isOctCode

▸ **isOctCode**(`c`: number): *boolean*

*Defined in [packages/lodestar-utils/src/yaml/int.ts:11](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-utils/src/yaml/int.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | number |

**Returns:** *boolean*

___

###  resolveYamlInteger

▸ **resolveYamlInteger**(`data`: string): *boolean*

*Defined in [packages/lodestar-utils/src/yaml/int.ts:19](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-utils/src/yaml/int.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *boolean*
