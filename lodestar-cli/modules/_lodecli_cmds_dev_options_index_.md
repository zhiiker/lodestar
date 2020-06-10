[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/cmds/dev/options/index"](_lodecli_cmds_dev_options_index_.md)

# External module: "lodecli/cmds/dev/options/index"

## Index

### Type aliases

* [IDevOptions](_lodecli_cmds_dev_options_index_.md#idevoptions)

### Variables

* [devRunOptions](_lodecli_cmds_dev_options_index_.md#const-devrunoptions)

## Type aliases

###  IDevOptions

Ƭ **IDevOptions**: *[IGlobalArgs](../interfaces/_lodecli_options_.iglobalargs.md) & [IChainArgs](../interfaces/_lodecli_cmds_dev_options_chain_.ichainargs.md) & [IDevArgs](../interfaces/_lodecli_cmds_dev_options_dev_.idevargs.md) & Partial‹IBeaconNodeOptions›*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/index.ts:27](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodecli/cmds/dev/options/index.ts#L27)*

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
})

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/index.ts:16](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar-cli/src/lodecli/cmds/dev/options/index.ts#L16)*

#### Type declaration:
