[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/util/parseArgs"](_lodecli_util_parseargs_.md)

# External module: "lodecli/util/parseArgs"

## Index

### Functions

* [parseArgs](_lodecli_util_parseargs_.md#parseargs)

## Functions

###  parseArgs

▸ **parseArgs**<**T**>(`yargs`: Argv‹T›): *T*

*Defined in [packages/lodestar-cli/src/lodecli/util/parseArgs.ts:7](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-cli/src/lodecli/util/parseArgs.ts#L7)*

yargs.parse() attempts to exit if called from a yargs build step in certain cases (help and version)
This calls yargs.parse() in a way that doesn't exit

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`yargs` | Argv‹T› |

**Returns:** *T*
