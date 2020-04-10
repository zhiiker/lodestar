[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/duties/aggregator"](_api_rest_routes_validator_duties_aggregator_.md)

# External module: "api/rest/routes/validator/duties/aggregator"

## Index

### Interfaces

* [IParams](../interfaces/_api_rest_routes_validator_duties_aggregator_.iparams.md)
* [IQuery](../interfaces/_api_rest_routes_validator_duties_aggregator_.iquery.md)

### Functions

* [registerIsAggregatorEndpoint](_api_rest_routes_validator_duties_aggregator_.md#const-registerisaggregatorendpoint)

### Object literals

* [opts](_api_rest_routes_validator_duties_aggregator_.md#const-opts)

## Functions

### `Const` registerIsAggregatorEndpoint

▸ **registerIsAggregatorEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/duties/aggregator.ts:43](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/rest/routes/validator/duties/aggregator.ts#L43)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/duties/aggregator.ts:16](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/rest/routes/validator/duties/aggregator.ts#L16)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/duties/aggregator.ts:17](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/api/rest/routes/validator/duties/aggregator.ts#L17)*

* **params**: *object*

  * **required**: *string[]* = ["slot"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **epoch**: *object*

      * **minimum**: *number* = 0

      * **type**: *string* = "integer"

* **querystring**: *object*

  * **required**: *string[]* = ["slot_signature", "committee_index"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **committee_index**: *object*

      * **type**: *string* = "integer"

    * **slot_signature**: *object*

      * **type**: *string* = "string"
