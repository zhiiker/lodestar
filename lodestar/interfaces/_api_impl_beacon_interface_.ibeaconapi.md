[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/impl/beacon/interface"](../modules/_api_impl_beacon_interface_.md) › [IBeaconApi](_api_impl_beacon_interface_.ibeaconapi.md)

# Interface: IBeaconApi

## Hierarchy

* [IApi](_api_interface_.iapi.md)

  ↳ **IBeaconApi**

## Implemented by

* [BeaconApi](../classes/_api_impl_beacon_beacon_.beaconapi.md)

## Index

### Properties

* [namespace](_api_impl_beacon_interface_.ibeaconapi.md#namespace)

### Methods

* [getBlockStream](_api_impl_beacon_interface_.ibeaconapi.md#getblockstream)
* [getClientVersion](_api_impl_beacon_interface_.ibeaconapi.md#getclientversion)
* [getFork](_api_impl_beacon_interface_.ibeaconapi.md#getfork)
* [getGenesisTime](_api_impl_beacon_interface_.ibeaconapi.md#getgenesistime)
* [getSyncingStatus](_api_impl_beacon_interface_.ibeaconapi.md#getsyncingstatus)
* [getValidator](_api_impl_beacon_interface_.ibeaconapi.md#getvalidator)

## Properties

###  namespace

• **namespace**: *[ApiNamespace](../enums/_api_index_.apinamespace.md)*

*Inherited from [IValidatorApi](_api_impl_validator_interface_.ivalidatorapi.md).[namespace](_api_impl_validator_interface_.ivalidatorapi.md#namespace)*

*Defined in [packages/lodestar/src/api/interface.ts:33](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/api/interface.ts#L33)*

Name space for API commands

## Methods

###  getBlockStream

▸ **getBlockStream**(): *AsyncIterable‹SignedBeaconBlock›*

*Defined in [packages/lodestar/src/api/impl/beacon/interface.ts:50](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/api/impl/beacon/interface.ts#L50)*

**Returns:** *AsyncIterable‹SignedBeaconBlock›*

___

###  getClientVersion

▸ **getClientVersion**(): *Promise‹Bytes32›*

*Defined in [packages/lodestar/src/api/impl/beacon/interface.ts:24](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/api/impl/beacon/interface.ts#L24)*

Requests that the BeaconNode identify information about its
implementation in a format similar to a HTTP User-Agent field.

**Returns:** *Promise‹Bytes32›*

An ASCII-encoded hex string which
uniquely defines the implementation of the BeaconNode and its current software version.

___

###  getFork

▸ **getFork**(): *Promise‹ForkResponse›*

*Defined in [packages/lodestar/src/api/impl/beacon/interface.ts:29](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/api/impl/beacon/interface.ts#L29)*

Requests the BeaconNode to provide which fork version it is currently on.

**Returns:** *Promise‹ForkResponse›*

___

###  getGenesisTime

▸ **getGenesisTime**(): *Promise‹Number64›*

*Defined in [packages/lodestar/src/api/impl/beacon/interface.ts:39](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/api/impl/beacon/interface.ts#L39)*

Requests the genesis_time parameter from the BeaconNode,
which should be consistent across all BeaconNodes that follow the same beacon chain.

**Returns:** *Promise‹Number64›*

The genesis_time,
which is a fairly static configuration option for the BeaconNode.

___

###  getSyncingStatus

▸ **getSyncingStatus**(): *Promise‹boolean | SyncingStatus›*

*Defined in [packages/lodestar/src/api/impl/beacon/interface.ts:48](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/api/impl/beacon/interface.ts#L48)*

Requests the BeaconNode to describe if it's currently syncing or not,
and if it is, what block it is up to.
This is modelled after the Eth1.0 JSON-RPC eth_syncing call.

**Returns:** *Promise‹boolean | SyncingStatus›*

Either false if the node is not syncing,
or a SyncingStatus object if it is.

___

###  getValidator

▸ **getValidator**(`pubkey`: BLSPubkey): *Promise‹ValidatorResponse | null›*

*Defined in [packages/lodestar/src/api/impl/beacon/interface.ts:31](https://github.com/ChainSafe/lodestar/blob/0af429ee6/packages/lodestar/src/api/impl/beacon/interface.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`pubkey` | BLSPubkey |

**Returns:** *Promise‹ValidatorResponse | null›*
