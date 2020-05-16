[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/getWireAttestations"](_api_rest_routes_validator_getwireattestations_.md)

# External module: "api/rest/routes/validator/getWireAttestations"

## Index

### Interfaces

* [IQuery](../interfaces/_api_rest_routes_validator_getwireattestations_.iquery.md)

### Functions

* [registerGetWireAttestationEndpoint](_api_rest_routes_validator_getwireattestations_.md#const-registergetwireattestationendpoint)

### Object literals

* [opts](_api_rest_routes_validator_getwireattestations_.md#const-opts)

## Functions

### `Const` registerGetWireAttestationEndpoint

▸ **registerGetWireAttestationEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/getWireAttestations.ts:31](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar/src/api/rest/routes/validator/getWireAttestations.ts#L31)*

**Parameters:**

▪ **fastify**: *FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`api` | object |
`config` | IBeaconConfig |

**Returns:** *void*

## Object literals

### `Const` opts

### ▪ **opts**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/getWireAttestations.ts:12](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar/src/api/rest/routes/validator/getWireAttestations.ts#L12)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/getWireAttestations.ts:13](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar/src/api/rest/routes/validator/getWireAttestations.ts#L13)*

* **querystring**: *object*

  * **required**: *string[]* = ["epoch", "committee_index"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **committee_index**: *object*

      * **minimum**: *number* = 0

      * **type**: *string* = "integer"

    * **epoch**: *object*

      * **minimum**: *number* = 0

      * **type**: *string* = "integer"
