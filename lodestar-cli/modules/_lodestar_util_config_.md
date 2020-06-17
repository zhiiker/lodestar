[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/util/config"](_lodestar_util_config_.md)

# External module: "lodestar/util/config"

## Index

### Interfaces

* [IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)
* [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md)

### Functions

* [booleanOption](_lodestar_util_config_.md#booleanoption)
* [getCliFields](_lodestar_util_config_.md#getclifields)
* [getField](_lodestar_util_config_.md#getfield)
* [isConfigurationModule](_lodestar_util_config_.md#isconfigurationmodule)
* [validateConfig](_lodestar_util_config_.md#validateconfig)

## Functions

###  booleanOption

▸ **booleanOption**(`name`: string, `flag`: string, `description`: string): *[IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:20](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-cli/src/lodestar/util/config.ts#L20)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`flag` | string | - |
`description` | string | "" |

**Returns:** *[IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)*

___

###  getCliFields

▸ **getCliFields**(`configuration`: [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md)): *[IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)‹unknown›[]*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:32](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-cli/src/lodestar/util/config.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`configuration` | [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) |

**Returns:** *[IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)‹unknown›[]*

___

###  getField

▸ **getField**(`description`: [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md), `name`: string): *[IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) | [IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)‹unknown› | undefined*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:67](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-cli/src/lodestar/util/config.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`description` | [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) |
`name` | string |

**Returns:** *[IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) | [IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)‹unknown› | undefined*

___

###  isConfigurationModule

▸ **isConfigurationModule**(`field`: [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) | [IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)‹unknown›): *boolean*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:76](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-cli/src/lodestar/util/config.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) &#124; [IConfigurationField](../interfaces/_lodestar_util_config_.iconfigurationfield.md)‹unknown› |

**Returns:** *boolean*

___

###  validateConfig

▸ **validateConfig**<**T**>(`config`: object, `description`: [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md)): *Partial‹T›*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:44](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar-cli/src/lodestar/util/config.ts#L44)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`config` | object |
`description` | [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) |

**Returns:** *Partial‹T›*
