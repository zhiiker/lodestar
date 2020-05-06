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
* [silly](_logger_winston_.winstonlogger.md#silly)
* [verbose](_logger_winston_.winstonlogger.md#verbose)
* [warn](_logger_winston_.winstonlogger.md#warn)

## Constructors

###  constructor

\+ **new WinstonLogger**(`options?`: Partial‹[ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md)›): *[WinstonLogger](_logger_winston_.winstonlogger.md)*

*Defined in [logger/winston.ts:12](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Partial‹[ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md)› |

**Returns:** *[WinstonLogger](_logger_winston_.winstonlogger.md)*

## Properties

### `Private` _level

• **_level**: *[LogLevel](../enums/_logger_interface_.loglevel.md)*

*Defined in [logger/winston.ts:11](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L11)*

___

### `Private` _silent

• **_silent**: *boolean*

*Defined in [logger/winston.ts:12](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L12)*

___

### `Private` winston

• **winston**: *Logger*

*Defined in [logger/winston.ts:10](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L10)*

## Accessors

###  level

• **get level**(): *[LogLevel](../enums/_logger_interface_.loglevel.md)*

*Defined in [logger/winston.ts:89](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L89)*

**Returns:** *[LogLevel](../enums/_logger_interface_.loglevel.md)*

• **set level**(`level`: [LogLevel](../enums/_logger_interface_.loglevel.md)): *void*

*Defined in [logger/winston.ts:84](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`level` | [LogLevel](../enums/_logger_interface_.loglevel.md) |

**Returns:** *void*

___

###  silent

• **get silent**(): *boolean*

*Defined in [logger/winston.ts:97](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L97)*

**Returns:** *boolean*

• **set silent**(`silent`: boolean): *void*

*Defined in [logger/winston.ts:93](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`silent` | boolean |

**Returns:** *void*

## Methods

###  child

▸ **child**(`options`: [ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md)): *[WinstonLogger](_logger_winston_.winstonlogger.md)*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:101](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md) |

**Returns:** *[WinstonLogger](_logger_winston_.winstonlogger.md)*

___

### `Private` createLogEntry

▸ **createLogEntry**(`level`: [LogLevel](../enums/_logger_interface_.loglevel.md), `message`: string | object, `context`: object): *void*

*Defined in [logger/winston.ts:112](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L112)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`level` | [LogLevel](../enums/_logger_interface_.loglevel.md) | - |
`message` | string &#124; object | - |
`context` | object | {} |

**Returns:** *void*

___

###  debug

▸ **debug**(`message`: string | object, `context?`: object): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:56](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  error

▸ **error**(`message`: string | object, `context?`: object): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:68](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  important

▸ **important**(`message`: string | object, `context?`: object): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:64](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  info

▸ **info**(`message`: string | object, `context?`: object): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:60](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  silly

▸ **silly**(`message`: string | object, `context?`: object): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:80](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  verbose

▸ **verbose**(`message`: string | object, `context?`: object): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:76](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string | object, `context?`: object): *void*

*Implementation of [ILogger](../interfaces/_logger_interface_.ilogger.md)*

*Defined in [logger/winston.ts:72](https://github.com/ChainSafe/lodestar/blob/6d8273318/packages/lodestar-utils/src/logger/winston.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; object |
`context?` | object |

**Returns:** *void*
