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
* [logger](_api_impl_rest_beacon_beacon_.restbeaconapi.md#private-logger)

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

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:25](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L25)*

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

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:21](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L21)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:25](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L25)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:23](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L23)*

## Methods

###  getBeaconState

▸ **getBeaconState**(): *Promise‹BeaconState›*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:64](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L64)*

**Returns:** *Promise‹BeaconState›*

___

###  getChainHead

▸ **getChainHead**(): *Promise‹BeaconBlock›*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:61](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L61)*

**Returns:** *Promise‹BeaconBlock›*

___

###  getClientVersion

▸ **getClientVersion**(): *Promise‹Bytes32›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:40](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L40)*

**Returns:** *Promise‹Bytes32›*

___

###  getFork

▸ **getFork**(): *Promise‹object›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:44](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L44)*

**Returns:** *Promise‹object›*

___

###  getGenesisTime

▸ **getGenesisTime**(): *Promise‹Number64›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:48](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L48)*

**Returns:** *Promise‹Number64›*

___

###  getSyncingStatus

▸ **getSyncingStatus**(): *Promise‹boolean | SyncingStatus›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:57](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L57)*

**Returns:** *Promise‹boolean | SyncingStatus›*

___

###  getValidator

▸ **getValidator**(`pubkey`: BLSPubkey): *Promise‹ValidatorResponse | null›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:34](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`pubkey` | BLSPubkey |

**Returns:** *Promise‹ValidatorResponse | null›*
