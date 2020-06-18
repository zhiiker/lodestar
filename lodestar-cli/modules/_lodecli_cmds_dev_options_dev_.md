[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/cmds/dev/options/dev"](_lodecli_cmds_dev_options_dev_.md)

# External module: "lodecli/cmds/dev/options/dev"

## Index

### Interfaces

* [IDevArgs](../interfaces/_lodecli_cmds_dev_options_dev_.idevargs.md)

### Object literals

* [genesisValidatorsCount](_lodecli_cmds_dev_options_dev_.md#const-genesisvalidatorscount)
* [resetChainDir](_lodecli_cmds_dev_options_dev_.md#const-resetchaindir)
* [startValidators](_lodecli_cmds_dev_options_dev_.md#const-startvalidators)

## Object literals

### `Const` genesisValidatorsCount

### ▪ **genesisValidatorsCount**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:3](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L3)*

###  alias

• **alias**: *string[]* = [
    "dev.genesisValidators",
    "c"
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:4](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L4)*

###  description

• **description**: *string* = "If present it will create genesis with interop validators and start chain."

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:8](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L8)*

###  group

• **group**: *string* = "dev"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:10](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L10)*

###  requiresArg

• **requiresArg**: *false* = false

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:11](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L11)*

###  type

• **type**: *"number"* = "number"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:9](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L9)*

___

### `Const` resetChainDir

### ▪ **resetChainDir**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:26](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L26)*

###  alias

• **alias**: *string[]* = [
    "dev.reset",
    "r"
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:27](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L27)*

###  default

• **default**: *boolean* = false

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:34](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L34)*

###  description

• **description**: *string* = "To delete chain and validator directories"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:31](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L31)*

###  group

• **group**: *string* = "dev"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:33](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L33)*

###  requiresArg

• **requiresArg**: *false* = false

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:35](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L35)*

###  type

• **type**: *"boolean"* = "boolean"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:32](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L32)*

___

### `Const` startValidators

### ▪ **startValidators**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:14](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L14)*

###  alias

• **alias**: *string[]* = [
    "dev.startValidators",
    "v"
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:15](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L15)*

###  default

• **default**: *string* = "0:8"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:20](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L20)*

###  description

• **description**: *string* = "Start interop validators in given range"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:19](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L19)*

###  group

• **group**: *string* = "dev"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:22](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L22)*

###  requiresArg

• **requiresArg**: *false* = false

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:23](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L23)*

###  type

• **type**: *"string"* = "string"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts:21](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-cli/src/lodecli/cmds/dev/options/dev.ts#L21)*
