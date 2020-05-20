[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["util"](_util_.md)

# External module: "util"

## Index

### Functions

* [generateCommanderOptions](_util_.md#generatecommanderoptions)
* [optionsToConfig](_util_.md#optionstoconfig)
* [processField](_util_.md#processfield)
* [processModule](_util_.md#processmodule)

## Functions

###  generateCommanderOptions

▸ **generateCommanderOptions**(`command`: Command, `optionDescription`: [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md)): *void*

*Defined in [packages/lodestar-cli/src/util.ts:12](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-cli/src/util.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`command` | Command |
`optionDescription` | [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) |

**Returns:** *void*

___

###  optionsToConfig

▸ **optionsToConfig**<**T**>(`options`: object, `optionDescription`: [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md)): *Partial‹T›*

*Defined in [packages/lodestar-cli/src/util.ts:37](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-cli/src/util.ts#L37)*

This is awful,

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | object | - |
`optionDescription` | [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) |   |

**Returns:** *Partial‹T›*

___

###  processField

▸ **processField**(`field`: [IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md), `options`: object, `config`: any): *[IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)*

*Defined in [packages/lodestar-cli/src/util.ts:60](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-cli/src/util.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md) |
`options` | object |
`config` | any |

**Returns:** *[IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)*

___

###  processModule

▸ **processModule**(`options`: object, `field`: [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md), `config`: any): *void*

*Defined in [packages/lodestar-cli/src/util.ts:53](https://github.com/ChainSafe/lodestar/blob/a47516d64/packages/lodestar-cli/src/util.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | object |
`field` | [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) |
`config` | any |

**Returns:** *void*
