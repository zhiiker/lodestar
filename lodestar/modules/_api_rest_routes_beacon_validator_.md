[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/beacon/validator"](_api_rest_routes_beacon_validator_.md)

# External module: "api/rest/routes/beacon/validator"

## Index

### Interfaces

* [IQuery](../interfaces/_api_rest_routes_beacon_validator_.iquery.md)

### Functions

* [registerGetValidatorEndpoint](_api_rest_routes_beacon_validator_.md#const-registergetvalidatorendpoint)

### Object literals

* [opts](_api_rest_routes_beacon_validator_.md#const-opts)

## Functions

### `Const` registerGetValidatorEndpoint

▸ **registerGetValidatorEndpoint**(`server`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/beacon/validator.ts:24](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/api/rest/routes/beacon/validator.ts#L24)*

**Parameters:**

▪ **server**: *FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`api` | object |
`config` | IBeaconConfig |

**Returns:** *void*

## Object literals

### `Const` opts

### ▪ **opts**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/beacon/validator.ts:10](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/api/rest/routes/beacon/validator.ts#L10)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/beacon/validator.ts:11](https://github.com/ChainSafe/lodestar/blob/1d5598773/packages/lodestar/src/api/rest/routes/beacon/validator.ts#L11)*

* **querystring**: *object*

  * **required**: *string[]* = ["pubkey"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **pubkey**: *object*

      * **type**: *string* = "string"
