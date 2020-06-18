[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › ["logger/interface"](_logger_interface_.md)

# External module: "logger/interface"

## Index

### Enumerations

* [LogLevel](../enums/_logger_interface_.loglevel.md)

### Interfaces

* [ILogger](../interfaces/_logger_interface_.ilogger.md)
* [ILoggerOptions](../interfaces/_logger_interface_.iloggeroptions.md)

### Type aliases

* [Context](_logger_interface_.md#context)

### Variables

* [LogLevels](_logger_interface_.md#const-loglevels)
* [defaultLogLevel](_logger_interface_.md#const-defaultloglevel)

### Object literals

* [customColors](_logger_interface_.md#const-customcolors)

## Type aliases

###  Context

Ƭ **Context**: *object*

*Defined in [packages/lodestar-utils/src/logger/interface.ts:36](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L36)*

#### Type declaration:

* \[ **k**: *string*\]: string | number | BigInt | ArrayLike‹number›

## Variables

### `Const` LogLevels

• **LogLevels**: *any[]* = Object.keys(LogLevel).map(key => LogLevel[key])

*Defined in [packages/lodestar-utils/src/logger/interface.ts:17](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L17)*

___

### `Const` defaultLogLevel

• **defaultLogLevel**: *[info](../enums/_logger_interface_.loglevel.md#info)* = LogLevel.info

*Defined in [packages/lodestar-utils/src/logger/interface.ts:29](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L29)*

## Object literals

### `Const` customColors

### ▪ **customColors**: *object*

*Defined in [packages/lodestar-utils/src/logger/interface.ts:20](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L20)*

###  debug

• **debug**: *string* = "pink"

*Defined in [packages/lodestar-utils/src/logger/interface.ts:25](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L25)*

###  error

• **error**: *string* = "red"

*Defined in [packages/lodestar-utils/src/logger/interface.ts:21](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L21)*

###  info

• **info**: *string* = "white"

*Defined in [packages/lodestar-utils/src/logger/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L23)*

###  silly

• **silly**: *string* = "purple"

*Defined in [packages/lodestar-utils/src/logger/interface.ts:26](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L26)*

###  verbose

• **verbose**: *string* = "green"

*Defined in [packages/lodestar-utils/src/logger/interface.ts:24](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L24)*

###  warn

• **warn**: *string* = "yellow"

*Defined in [packages/lodestar-utils/src/logger/interface.ts:22](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-utils/src/logger/interface.ts#L22)*
