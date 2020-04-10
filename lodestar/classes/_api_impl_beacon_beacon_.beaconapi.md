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
* [namespace](_api_impl_beacon_beacon_.beaconapi.md#namespace)

### Methods

* [getBlockStream](_api_impl_beacon_beacon_.beaconapi.md#getblockstream)
* [getClientVersion](_api_impl_beacon_beacon_.beaconapi.md#getclientversion)
* [getFork](_api_impl_beacon_beacon_.beaconapi.md#getfork)
* [getGenesisTime](_api_impl_beacon_beacon_.beaconapi.md#getgenesistime)
* [getSyncingStatus](_api_impl_beacon_beacon_.beaconapi.md#getsyncingstatus)

## Constructors

###  constructor

\+ **new BeaconApi**(`opts`: Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)›, `modules`: [IApiModules](../interfaces/_api_interface_.iapimodules.md)): *[BeaconApi](_api_impl_beacon_beacon_.beaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:27](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/impl/beacon/beacon.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | Partial‹[IApiOptions](../interfaces/_api_options_.iapioptions.md)› |
`modules` | [IApiModules](../interfaces/_api_interface_.iapimodules.md) |

**Returns:** *[BeaconApi](_api_impl_beacon_beacon_.beaconapi.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:27](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/impl/beacon/beacon.ts#L27)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:26](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/impl/beacon/beacon.ts#L26)*

___

###  namespace

• **namespace**: *[ApiNamespace](../enums/_api_index_.apinamespace.md)*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md).[namespace](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md#namespace)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:24](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/impl/beacon/beacon.ts#L24)*

## Methods

###  getBlockStream

▸ **getBlockStream**(): *AsyncIterable‹SignedBeaconBlock›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:66](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/impl/beacon/beacon.ts#L66)*

**Returns:** *AsyncIterable‹SignedBeaconBlock›*

___

###  getClientVersion

▸ **getClientVersion**(): *Promise‹Bytes32›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:35](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/impl/beacon/beacon.ts#L35)*

**Returns:** *Promise‹Bytes32›*

___

###  getFork

▸ **getFork**(): *Promise‹ForkResponse›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:39](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/impl/beacon/beacon.ts#L39)*

**Returns:** *Promise‹ForkResponse›*

___

###  getGenesisTime

▸ **getGenesisTime**(): *Promise‹Number64›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:53](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/impl/beacon/beacon.ts#L53)*

**Returns:** *Promise‹Number64›*

___

###  getSyncingStatus

▸ **getSyncingStatus**(): *Promise‹boolean | SyncingStatus›*

*Implementation of [IBeaconApi](../interfaces/_api_impl_beacon_interface_.ibeaconapi.md)*

*Defined in [packages/lodestar/src/api/impl/beacon/beacon.ts:61](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/impl/beacon/beacon.ts#L61)*

**Returns:** *Promise‹boolean | SyncingStatus›*
