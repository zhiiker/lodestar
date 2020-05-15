[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["api/impl/rest/beacon/beacon"](../modules/_api_impl_rest_beacon_beacon_.md) › [RestBeaconApi](_api_impl_rest_beacon_beacon_.restbeaconapi.md)

# Class: RestBeaconApi

## Hierarchy

* **RestBeaconApi**

## Implements

* [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)

## Index

### Constructors

* [constructor](_api_impl_rest_beacon_beacon_.restbeaconapi.md#constructor)

### Properties

* [client](_api_impl_rest_beacon_beacon_.restbeaconapi.md#private-client)
* [config](_api_impl_rest_beacon_beacon_.restbeaconapi.md#private-config)

### Methods

* [getBeaconState](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getbeaconstate)
* [getChainHead](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getchainhead)
* [getClientVersion](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getclientversion)
* [getFork](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getfork)
* [getGenesisTime](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getgenesistime)
* [getSyncingStatus](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getsyncingstatus)
* [getValidator](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getvalidator)

## Constructors

###  constructor

\+ **new RestBeaconApi**(`config`: IBeaconConfig, `restUrl`: string, `logger`: ILogger): *[RestBeaconApi](_api_impl_rest_beacon_beacon_.restbeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:23](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`restUrl` | string |
`logger` | ILogger |

**Returns:** *[RestBeaconApi](_api_impl_rest_beacon_beacon_.restbeaconapi.md)*

## Properties

### `Private` client

• **client**: *[HttpClient](_util_httpclient_.httpclient.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:21](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L21)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:23](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L23)*

## Methods

###  getBeaconState

▸ **getBeaconState**(): *Promise‹BeaconState›*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:56](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L56)*

**Returns:** *Promise‹BeaconState›*

___

###  getChainHead

▸ **getChainHead**(): *Promise‹BeaconBlock›*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:53](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L53)*

**Returns:** *Promise‹BeaconBlock›*

___

###  getClientVersion

▸ **getClientVersion**(): *Promise‹Bytes32›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:37](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L37)*

**Returns:** *Promise‹Bytes32›*

___

###  getFork

▸ **getFork**(): *Promise‹object›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:41](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L41)*

**Returns:** *Promise‹object›*

___

###  getGenesisTime

▸ **getGenesisTime**(): *Promise‹Number64›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:45](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L45)*

**Returns:** *Promise‹Number64›*

___

###  getSyncingStatus

▸ **getSyncingStatus**(): *Promise‹boolean | SyncingStatus›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:49](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L49)*

**Returns:** *Promise‹boolean | SyncingStatus›*

___

###  getValidator

▸ **getValidator**(`pubkey`: BLSPubkey): *Promise‹ValidatorResponse | null›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:31](https://github.com/ChainSafe/lodestar/blob/2c3cae978/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`pubkey` | BLSPubkey |

**Returns:** *Promise‹ValidatorResponse | null›*
