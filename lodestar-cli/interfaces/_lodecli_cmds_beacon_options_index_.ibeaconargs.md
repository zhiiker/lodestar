[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/cmds/beacon/options/index"](../modules/_lodecli_cmds_beacon_options_index_.md) › [IBeaconArgs](_lodecli_cmds_beacon_options_index_.ibeaconargs.md)

# Interface: IBeaconArgs

## Hierarchy

  ↳ [IBeaconFileArgs](_lodecli_cmds_beacon_options_beaconfile_.ibeaconfileargs.md)

  ↳ **IBeaconArgs**

  ↳ [IBeaconInitArgs](_lodecli_cmds_beacon_cmds_init_options_.ibeaconinitargs.md)

## Index

### Properties

* [beaconDir](_lodecli_cmds_beacon_options_index_.ibeaconargs.md#beacondir)
* [chain](_lodecli_cmds_beacon_options_index_.ibeaconargs.md#chain)
* [config](_lodecli_cmds_beacon_options_index_.ibeaconargs.md#config)
* [dbDir](_lodecli_cmds_beacon_options_index_.ibeaconargs.md#dbdir)
* [network](_lodecli_cmds_beacon_options_index_.ibeaconargs.md#network)
* [rootDir](_lodecli_cmds_beacon_options_index_.ibeaconargs.md#rootdir)

## Properties

###  beaconDir

• **beaconDir**: *string*

*Inherited from [IBeaconDirArgs](_lodecli_cmds_beacon_options_beacondir_.ibeacondirargs.md).[beaconDir](_lodecli_cmds_beacon_options_beacondir_.ibeacondirargs.md#beacondir)*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/beacon/options/beaconDir.ts:5](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodecli/cmds/beacon/options/beaconDir.ts#L5)*

___

###  chain

• **chain**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/beacon/options/index.ts:13](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodecli/cmds/beacon/options/index.ts#L13)*

#### Type declaration:

* **genesisStateFile**? : *string*

* **params**: *Record‹string, unknown›*

___

###  config

• **config**: *string*

*Inherited from [IBeaconConfigArgs](_lodecli_cmds_beacon_options_beaconconfig_.ibeaconconfigargs.md).[config](_lodecli_cmds_beacon_options_beaconconfig_.ibeaconconfigargs.md#config)*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/beacon/options/beaconConfig.ts:7](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodecli/cmds/beacon/options/beaconConfig.ts#L7)*

___

###  dbDir

• **dbDir**: *string*

*Inherited from [IBeaconFileArgs](_lodecli_cmds_beacon_options_beaconfile_.ibeaconfileargs.md).[dbDir](_lodecli_cmds_beacon_options_beaconfile_.ibeaconfileargs.md#dbdir)*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/beacon/options/beaconFile.ts:7](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodecli/cmds/beacon/options/beaconFile.ts#L7)*

___

###  network

• **network**: *object*

*Inherited from [IBeaconFileArgs](_lodecli_cmds_beacon_options_beaconfile_.ibeaconfileargs.md).[network](_lodecli_cmds_beacon_options_beaconfile_.ibeaconfileargs.md#network)*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/beacon/options/beaconFile.ts:8](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodecli/cmds/beacon/options/beaconFile.ts#L8)*

#### Type declaration:

* **enrFile**: *string*

* **peerIdFile**: *string*

___

###  rootDir

• **rootDir**: *string*

*Inherited from [IGlobalArgs](_lodecli_options_.iglobalargs.md).[rootDir](_lodecli_options_.iglobalargs.md#rootdir)*

*Defined in [packages/lodestar-cli/src/lodecli/options.ts:4](https://github.com/ChainSafe/lodestar/blob/2c3cae9/packages/lodestar-cli/src/lodecli/options.ts#L4)*
