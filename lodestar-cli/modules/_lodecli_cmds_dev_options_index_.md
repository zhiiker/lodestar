[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/cmds/dev/options/index"](_lodecli_cmds_dev_options_index_.md)

# External module: "lodecli/cmds/dev/options/index"

## Index

### Type aliases

* [IDevOptions](_lodecli_cmds_dev_options_index_.md#idevoptions)

### Variables

* [devRunOptions](_lodecli_cmds_dev_options_index_.md#const-devrunoptions)

## Type aliases

###  IDevOptions

Ƭ **IDevOptions**: *[IGlobalArgs](../interfaces/_lodecli_options_.iglobalargs.md) & [IValidatorArgs](../interfaces/_lodecli_cmds_dev_options_validator_.ivalidatorargs.md) & [IChainArgs](../interfaces/_lodecli_cmds_dev_options_chain_.ichainargs.md) & [IDevArgs](../interfaces/_lodecli_cmds_dev_options_dev_.idevargs.md) & Partial‹IBeaconNodeOptions›*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/index.ts:30](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/index.ts#L30)*

## Variables

### `Const` devRunOptions

• **devRunOptions**: *object* = canonicalOptions({
  ...dev,
  ...api,
  ...chain,
  ...eth1,
  ...logger,
  ...metrics,
  ...network,
  ...sync,
  ...validator,
})

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/index.ts:18](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/index.ts#L18)*

#### Type declaration:
