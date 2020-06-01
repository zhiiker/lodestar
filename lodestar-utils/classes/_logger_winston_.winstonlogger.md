[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › ["logger/winston"](../modules/_logger_winston_.md) › [WinstonLogger](_logger_winston_.winstonlogger.md)

# Class: WinstonLogger

## Hierarchy

* **WinstonLogger**

## Implements

* [ILogger](../interfaces/_logger_interface_.ilogger.md)

## Index

### Constructors

* [constructor](_logger_winston_.winstonlogger.md#constructor)

### Properties

* [_level](_logger_winston_.winstonlogger.md#private-_level)
* [_silent](_logger_winston_.winstonlogger.md#private-_silent)
* [winston](_logger_winston_.winstonlogger.md#private-winston)

### Accessors

* [level](_logger_winston_.winstonlogger.md#level)
* [silent](_logger_winston_.winstonlogger.md#silent)

### Methods

* [child](_logger_winston_.winstonlogger.md#child)
* [createLogEntry](_logger_winston_.winstonlogger.md#private-createlogentry)
* [debug](_logger_winston_.winstonlogger.md#debug)
* [error](_logger_winston_.winstonlogger.md#error)
* [important](_logger_winston_.winstonlogger.md#important)
* [info](_logger_winston_.winstonlogger.md#info)
* [profile](_logger_winston_.winstonlogger.md#profile)
* [silly](_logger_winston_.winstonlogger.md#silly)
* [verbose](_logger_winston_.winstonlogger.md#verbose)
* [warn](_logger_winston_.winstonlogger.md#warn)

## Constructors

###  constructor

\+ **new WinstonLogger**(`options?`: Partial‹[ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md)›, `transports?`: TransportStream): *[WinstonLogger](_logger_winston_.winstonlogger.md)*

*Defined in [logger/winston.ts:14](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Partial‹[ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md)› |
`transports?` | TransportStream |

**Returns:** *[WinstonLogger](_logger_winston_.winstonlogger.md)*

## Properties

### `Private` _level

• **_level**: *[LogLevel](../enums/_logger_interface_.loglevel.md)*

*Defined in [logger/winston.ts:13](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L13)*

___

### `Private` _silent

• **_silent**: *boolean*

*Defined in [logger/winston.ts:14](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L14)*

___

### `Private` winston

• **winston**: *Logger*

*Defined in [logger/winston.ts:12](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L12)*

## Accessors

###  level

• **get level**(): *[LogLevel](../enums/_logger_interface_.loglevel.md)*

*Defined in [logger/winston.ts:79](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L79)*

**Returns:** *[LogLevel](../enums/_logger_interface_.loglevel.md)*

• **set level**(`level`: [LogLevel](../enums/_logger_interface_.loglevel.md)): *void*

*Defined in [logger/winston.ts:74](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | [LogLevel](../enums/_logger_interface_.loglevel.md) |

**Returns:** *void*

___

###  silent

• **get silent**(): *boolean*

*Defined in [logger/winston.ts:87](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L87)*

**Returns:** *boolean*

• **set silent**(`silent`: boolean): *void*

*Defined in [logger/winston.ts:83](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`silent` | boolean |

**Returns:** *void*

## Methods

###  child

▸ **child**(`options`: [ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md)): *[WinstonLogger](_logger_winston_.winstonlogger.md)*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:91](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md) |

**Returns:** *[WinstonLogger](_logger_winston_.winstonlogger.md)*

___

### `Private` createLogEntry

▸ **createLogEntry**(`level`: [LogLevel](../enums/_logger_interface_.loglevel.md), `message`: string, `context`: [Context](../modules/_logger_interface_.md#context) | Error): *void*

*Defined in [logger/winston.ts:102](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | [LogLevel](../enums/_logger_interface_.loglevel.md) |
`message` | string |
`context` | [Context](../modules/_logger_interface_.md#context) &#124; Error |

**Returns:** *void*

___

###  debug

▸ **debug**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context)): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:42](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  error

▸ **error**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context) | Error): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:54](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) &#124; Error |

**Returns:** *void*

___

###  important

▸ **important**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context)): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:50](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  info

▸ **info**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context)): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:46](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  profile

▸ **profile**(`message`: string, `option?`: object): *void*

*Defined in [logger/winston.ts:70](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L70)*

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

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:66](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  verbose

▸ **verbose**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context)): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:62](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string, `context?`: [Context](../modules/_logger_interface_.md#context) | Error): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:58](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-utils/src/logger/winston.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`context?` | [Context](../modules/_logger_interface_.md#context) &#124; Error |

**Returns:** *void*
