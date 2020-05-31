[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › ["logger/interface"](../modules/_logger_interface_.md) › [ILogger](_logger_interface_.ilogger.md)

# Interface: ILogger

## Hierarchy

* **ILogger**

## Implemented by

* [WinstonLogger](../classes/_logger_winston_.winstonlogger.md)

## Index

### Properties

* [level](_logger_interface_.ilogger.md#level)
* [silent](_logger_interface_.ilogger.md#silent)

### Methods

* [child](_logger_interface_.ilogger.md#child)
* [debug](_logger_interface_.ilogger.md#debug)
* [error](_logger_interface_.ilogger.md#error)
* [important](_logger_interface_.ilogger.md#important)
* [info](_logger_interface_.ilogger.md#info)
* [profile](_logger_interface_.ilogger.md#profile)
* [silly](_logger_interface_.ilogger.md#silly)
* [verbose](_logger_interface_.ilogger.md#verbose)
* [warn](_logger_interface_.ilogger.md#warn)

## Properties

###  level

• **level**: *[LogLevel](../enums/_logger_interface_.loglevel.md)*

*Defined in [logger/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L39)*

___

###  silent

• **silent**: *boolean*

*Defined in [logger/interface.ts:40](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L40)*

## Methods

###  child

▸ **child**(`options`: [ILoggerOptions](_logger_interface_.iloggeroptions.md)): *[ILogger](_logger_interface_.ilogger.md)*

*Defined in [logger/interface.ts:52](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ILoggerOptions](_logger_interface_.iloggeroptions.md) |

**Returns:** *[ILogger](_logger_interface_.ilogger.md)*

___

###  debug

▸ **debug**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context)): *void*

*Defined in [logger/interface.ts:47](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  error

▸ **error**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context) | Error): *void*

*Defined in [logger/interface.ts:42](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) &#124; Error |

**Returns:** *void*

___

###  important

▸ **important**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context)): *void*

*Defined in [logger/interface.ts:45](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  info

▸ **info**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context)): *void*

*Defined in [logger/interface.ts:44](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  profile

▸ **profile**(`message`: string, `option?`: object): *void*

*Defined in [logger/interface.ts:49](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L49)*

**Parameters:**

▪ **message**: *string*

▪`Optional`  **option**: *object*

Name | Type |
------ | ------ |
`level` | string |
`message` | string |

**Returns:** *void*

___

###  silly

▸ **silly**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context)): *void*

*Defined in [logger/interface.ts:48](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  verbose

▸ **verbose**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context)): *void*

*Defined in [logger/interface.ts:46](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context) | Error): *void*

*Defined in [logger/interface.ts:43](https://github.com/ChainSafe/lodestar/blob/ad14d42a9/packages/lodestar-utils/src/logger/interface.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) &#124; Error |

**Returns:** *void*
