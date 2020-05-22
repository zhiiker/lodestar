[@chainsafe/lodestar-utils](../README.md) › [Globals](../globals.md) › ["logger/format"](_logger_format_.md)

# External module: "logger/format"

## Index

### Variables

* [defaultLogFormat](_logger_format_.md#const-defaultlogformat)

### Functions

* [serializeContext](_logger_format_.md#serializecontext)

## Variables

### `Const` defaultLogFormat

• **defaultLogFormat**: *Format‹›* = format.combine(
  format.colorize(),
  format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss"
  }),
  format.printf((info) => {
    const paddingBetweenInfo = 30;

    const infoString = (info.module || info.namespace || "");
    const infoPad = paddingBetweenInfo - infoString.length;

    return (
      `${info.timestamp}  [${infoString.toUpperCase()}] ${info.level.padStart(infoPad)}:`
      + ` ${info.message} ${serializeContext(info.context)}`
      + `${info.durationMs? "- duration=" + info.durationMs + "ms": ""}`
    );
  })
)

*Defined in [logger/format.ts:5](https://github.com/ChainSafe/lodestar/blob/2bf6badbe/packages/lodestar-utils/src/logger/format.ts#L5)*

## Functions

###  serializeContext

▸ **serializeContext**(`context?`: [Context](_logger_interface_.md#context) | Error): *string*

*Defined in [logger/format.ts:24](https://github.com/ChainSafe/lodestar/blob/2bf6badbe/packages/lodestar-utils/src/logger/format.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`context?` | [Context](_logger_interface_.md#context) &#124; Error |

**Returns:** *string*
