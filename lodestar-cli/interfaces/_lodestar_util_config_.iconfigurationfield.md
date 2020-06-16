[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodestar/util/config"](../modules/_lodestar_util_config_.md) › [IConfigurationField](_lodestar_util_config_.iconfigurationfield.md)

# Interface: IConfigurationField <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **IConfigurationField**

## Index

### Properties

* [cli](_lodestar_util_config_.iconfigurationfield.md#optional-cli)
* [configurable](_lodestar_util_config_.iconfigurationfield.md#configurable)
* [description](_lodestar_util_config_.iconfigurationfield.md#optional-description)
* [name](_lodestar_util_config_.iconfigurationfield.md#name)
* [process](_lodestar_util_config_.iconfigurationfield.md#optional-process)
* [type](_lodestar_util_config_.iconfigurationfield.md#type)
* [validation](_lodestar_util_config_.iconfigurationfield.md#optional-validation)

## Properties

### `Optional` cli

• **cli**? : *object*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:8](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar-cli/src/lodestar/util/config.ts#L8)*

#### Type declaration:

* **flag**: *string*

* **short**? : *string*

___

###  configurable

• **configurable**: *boolean*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:5](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar-cli/src/lodestar/util/config.ts#L5)*

___

### `Optional` description

• **description**? : *string*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:4](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar-cli/src/lodestar/util/config.ts#L4)*

___

###  name

• **name**: *string*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:2](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar-cli/src/lodestar/util/config.ts#L2)*

___

### `Optional` process

• **process**? : *function*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:7](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar-cli/src/lodestar/util/config.ts#L7)*

#### Type declaration:

▸ (`input`: string): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

___

###  type

• **type**: *T*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:3](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar-cli/src/lodestar/util/config.ts#L3)*

___

### `Optional` validation

• **validation**? : *function*

*Defined in [packages/lodestar-cli/src/lodestar/util/config.ts:6](https://github.com/ChainSafe/lodestar/blob/1b619203f/packages/lodestar-cli/src/lodestar/util/config.ts#L6)*

#### Type declaration:

▸ (`input`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`input` | T |
