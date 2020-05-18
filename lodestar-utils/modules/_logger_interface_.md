[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › ["logger/interface"](_logger_interface_.md)

# External module: "logger/interface"

## Index

### Enumerations

* [LogLevel](../enums/_logger_interface_.loglevel.md)

### Interfaces

* [ILogger](../interfaces/_logger_interface_.ilogger.md)
* [ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md)

### Variables

* [LogLevels](_logger_interface_.md#const-loglevels)
* [defaultLogLevel](_logger_interface_.md#const-defaultloglevel)

### Object literals

* [customColors](_logger_interface_.md#const-customcolors)

## Variables

### `Const` LogLevels

• **LogLevels**: *any[]* = Object.keys(LogLevel).map(key => LogLevel[key])

*Defined in [logger/interface.ts:15](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L15)*

___

### `Const` defaultLogLevel

• **defaultLogLevel**: *[info](../enums/_logger_interface_.loglevel.md#info)* = LogLevel.info

*Defined in [logger/interface.ts:27](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L27)*

## Object literals

### `Const` customColors

### ▪ **customColors**: *object*

*Defined in [logger/interface.ts:18](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L18)*

###  debug

• **debug**: *string* = "pink"

*Defined in [logger/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L23)*

###  error

• **error**: *string* = "red"

*Defined in [logger/interface.ts:19](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L19)*

###  info

• **info**: *string* = "white"

*Defined in [logger/interface.ts:21](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L21)*

###  silly

• **silly**: *string* = "purple"

*Defined in [logger/interface.ts:24](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L24)*

###  verbose

• **verbose**: *string* = "green"

*Defined in [logger/interface.ts:22](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L22)*

###  warn

• **warn**: *string* = "yellow"

*Defined in [logger/interface.ts:20](https://github.com/ChainSafe/lodestar/blob/e23248925/packages/lodestar-utils/src/logger/interface.ts#L20)*
