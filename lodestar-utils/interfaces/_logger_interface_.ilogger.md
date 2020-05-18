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
* [silly](_logger_interface_.ilogger.md#silly)
* [verbose](_logger_interface_.ilogger.md#verbose)
* [warn](_logger_interface_.ilogger.md#warn)

## Properties

###  level

• **level**: *[LogLevel](../enums/_logger_interface_.loglevel.md)*

*Defined in [logger/interface.ts:35](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L35)*

___

###  silent

• **silent**: *boolean*

*Defined in [logger/interface.ts:36](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L36)*

## Methods

###  child

▸ **child**(`options`: [ILoggerOptions](_logger_interface_.iloggeroptions.md)): *[ILogger](_logger_interface_.ilogger.md)*

*Defined in [logger/interface.ts:46](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ILoggerOptions](_logger_interface_.iloggeroptions.md) |

**Returns:** *[ILogger](_logger_interface_.ilogger.md)*

___

###  debug

▸ **debug**(`message`: string | object, `context?`: object): *void*

*Defined in [logger/interface.ts:42](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  error

▸ **error**(`message`: string | object, `context?`: object): *void*

*Defined in [logger/interface.ts:38](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  important

▸ **important**(`message`: string | object, `context?`: object): *void*

*Defined in [logger/interface.ts:47](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  info

▸ **info**(`message`: string | object, `context?`: object): *void*

*Defined in [logger/interface.ts:40](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  silly

▸ **silly**(`message`: string | object, `context?`: object): *void*

*Defined in [logger/interface.ts:43](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  verbose

▸ **verbose**(`message`: string | object, `context?`: object): *void*

*Defined in [logger/interface.ts:41](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string | object, `context?`: object): *void*

*Defined in [logger/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*
