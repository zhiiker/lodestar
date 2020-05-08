[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/duties/attester"](_api_rest_routes_validator_duties_attester_.md)

# External module: "api/rest/routes/validator/duties/attester"

## Index

### Interfaces

* [IParams](../interfaces/_api_rest_routes_validator_duties_attester_.iparams.md)
* [IQuery](../interfaces/_api_rest_routes_validator_duties_attester_.iquery.md)

### Functions

* [registerAttesterDutiesEndpoint](_api_rest_routes_validator_duties_attester_.md#const-registerattesterdutiesendpoint)

### Object literals

* [opts](_api_rest_routes_validator_duties_attester_.md#const-opts)

## Functions

### `Const` registerAttesterDutiesEndpoint

▸ **registerAttesterDutiesEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/duties/attester.ts:44](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/api/rest/routes/validator/duties/attester.ts#L44)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/duties/attester.ts:16](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/api/rest/routes/validator/duties/attester.ts#L16)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/duties/attester.ts:17](https://github.com/ChainSafe/lodestar/blob/176e51ae9/packages/lodestar/src/api/rest/routes/validator/duties/attester.ts#L17)*

* **params**: *object*

  * **required**: *string[]* = ["epoch"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **epoch**: *object*

      * **minimum**: *number* = 0

      * **type**: *string* = "integer"

* **querystring**: *object*

  * **required**: *string[]* = ["validator_pubkeys"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **validator_pubkeys**: *object*

      * **maxItems**: *number* = 5

      * **type**: *string* = "array"

      * **items**: *object*

        * **types**: *string* = "string"
