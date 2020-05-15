[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/util/file"](_lodestar_util_file_.md)

# External module: "lodestar/util/file"

## Index

### Functions

* [getTomlConfig](_lodestar_util_file_.md#gettomlconfig)
* [writeTomlConfig](_lodestar_util_file_.md#writetomlconfig)

## Functions

###  getTomlConfig

▸ **getTomlConfig**<**T**>(`fileName`: string, `description`: [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md)): *Partial‹T›*

*Defined in [packages/lodestar-cli/src/lodestar/util/file.ts:15](https://github.com/ChainSafe/lodestar/blob/cce68e126/packages/lodestar-cli/src/lodestar/util/file.ts#L15)*

Reads data from file and parses it from toml format to IConfigFile

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileName` | string | path to file to read from |
`description` | [IConfigurationModule](../interfaces/_lodestar_util_config_.iconfigurationmodule.md) | - |

**Returns:** *Partial‹T›*

configuration object

___

###  writeTomlConfig

▸ **writeTomlConfig**(`fileName`: string): *void*

*Defined in [packages/lodestar-cli/src/lodestar/util/file.ts:29](https://github.com/ChainSafe/lodestar/blob/cce68e126/packages/lodestar-cli/src/lodestar/util/file.ts#L29)*

Writes data to file, assuming content is in

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileName` | string | path to file to write to |

**Returns:** *void*
