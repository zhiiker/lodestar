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

### Methods

* [getBeaconState](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getbeaconstate)
* [getChainHead](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getchainhead)
* [getClientVersion](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getclientversion)
* [getFork](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getfork)
* [getGenesisTime](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getgenesistime)
* [getSyncingStatus](_api_impl_rest_beacon_beacon_.restbeaconapi.md#getsyncingstatus)

## Constructors

###  constructor

\+ **new RestBeaconApi**(`restUrl`: string, `logger`: ILogger): *[RestBeaconApi](_api_impl_rest_beacon_beacon_.restbeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:8](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`restUrl` | string |
`logger` | ILogger |

**Returns:** *[RestBeaconApi](_api_impl_rest_beacon_beacon_.restbeaconapi.md)*

## Properties

### `Private` client

• **client**: *[HttpClient](_util_httpclient_.httpclient.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:8](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L8)*

## Methods

###  getBeaconState

▸ **getBeaconState**(): *Promise‹BeaconState›*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:33](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L33)*

**Returns:** *Promise‹BeaconState›*

___

###  getChainHead

▸ **getChainHead**(): *Promise‹BeaconBlock›*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:30](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L30)*

**Returns:** *Promise‹BeaconBlock›*

___

###  getClientVersion

▸ **getClientVersion**(): *Promise‹Bytes32›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:14](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L14)*

**Returns:** *Promise‹Bytes32›*

___

###  getFork

▸ **getFork**(): *Promise‹object›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:18](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L18)*

**Returns:** *Promise‹object›*

___

###  getGenesisTime

▸ **getGenesisTime**(): *Promise‹Number64›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:22](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L22)*

**Returns:** *Promise‹Number64›*

___

###  getSyncingStatus

▸ **getSyncingStatus**(): *Promise‹boolean | SyncingStatus›*

*Implementation of [IBeaconApi](../interfaces/_api_interface_beacon_.ibeaconapi.md)*

*Defined in [packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts:26](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar-validator/src/api/impl/rest/beacon/beacon.ts#L26)*

**Returns:** *Promise‹boolean | SyncingStatus›*
