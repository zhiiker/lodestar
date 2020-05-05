[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/impl/beacon/beacon"](../modules/_api_impl_beacon_beacon_.md) › [BeaconApi](_api_impl_beacon_beacon_.beaconapi.md)

# Class: BeaconApi

## Hierarchy

* **BeaconApi**

## Implements

* [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)

## Index

### Constructors

* [constructor](_api_impl_beacon_beacon_.beaconapi.md#constructor)

### Properties

* [chain](_api_impl_beacon_beacon_.beaconapi.md#private-chain)
* [config](_api_impl_beacon_beacon_.beaconapi.md#private-config)
* [db](_api_impl_beacon_beacon_.beaconapi.md#private-db)
* [namespace](_api_impl_beacon_beacon_.beaconapi.md#namespace)
* [sync](_api_impl_beacon_beacon_.beaconapi.md#private-sync)

### Methods

* [getBlockStream](_api_impl_beacon_beacon_.beaconapi.md#getblockstream)
* [getClientVersion](_api_impl_beacon_beacon_.beaconapi.md#getclientversion)
* [getFork](_api_impl_beacon_beacon_.beaconapi.md#getfork)
* [getGenesisTime](_api_impl_beacon_beacon_.beaconapi.md#getgenesistime)
* [getSyncingStatus](_api_impl_beacon_beacon_.beaconapi.md#getsyncingstatus)
* [getValidator](_api_impl_beacon_beacon_.beaconapi.md#getvalidator)

## Constructors

###  constructor

\+ **new BeaconApi**(`opts`: Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)›, `modules`: [IApiModules](../interfaces/_api_interface_.iapimodules.md)): *[BeaconApi](_api_impl_beacon_beacon_.beaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:33](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)› |
`modules` | [IApiModules](../interfaces/_api_interface_.iapimodules.md) |

**Returns:** *[BeaconApi](_api_impl_beacon_beacon_.beaconapi.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:31](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L31)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:30](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L30)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:32](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L32)*

___

###  namespace

• **namespace**: *[ApiNamespace](../enums/_api_index_.apinamespace.md)*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md).[namespace](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md#namespace)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:28](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L28)*

___

### `Private` sync

• **sync**: *[IBeaconSync](../interfaces/_sync_interface_.ibeaconsync.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:33](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L33)*

## Methods

###  getBlockStream

▸ **getBlockStream**(): *AsyncIterable‹SignedBeaconBlock›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:96](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L96)*

**Returns:** *AsyncIterable‹SignedBeaconBlock›*

___

###  getClientVersion

▸ **getClientVersion**(): *Promise‹Bytes32›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:43](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L43)*

**Returns:** *Promise‹Bytes32›*

___

###  getFork

▸ **getFork**(): *Promise‹ForkResponse›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:65](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L65)*

**Returns:** *Promise‹ForkResponse›*

___

###  getGenesisTime

▸ **getGenesisTime**(): *Promise‹Number64›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:80](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L80)*

**Returns:** *Promise‹Number64›*

___

###  getSyncingStatus

▸ **getSyncingStatus**(): *Promise‹boolean | SyncingStatus›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:88](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L88)*

**Returns:** *Promise‹boolean | SyncingStatus›*

___

###  getValidator

▸ **getValidator**(`pubkey`: BLSPubkey): *Promise‹ValidatorResponse | null›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:48](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/impl/beacon/beacon.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`pubkey` | BLSPubkey |

**Returns:** *Promise‹ValidatorResponse | null›*
