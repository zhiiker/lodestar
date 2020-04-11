[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/publishAggregateAndProof"](_api_rest_routes_validator_publishaggregateandproof_.md)

# External module: "api/rest/routes/validator/publishAggregateAndProof"

## Index

### Interfaces

* [IQuery](../interfaces/_api_rest_routes_validator_publishaggregateandproof_.iquery.md)

### Functions

* [registerPublishAggregateAndProofEndpoint](_api_rest_routes_validator_publishaggregateandproof_.md#const-registerpublishaggregateandproofendpoint)

### Object literals

* [opts](_api_rest_routes_validator_publishaggregateandproof_.md#const-opts)

## Functions

### `Const` registerPublishAggregateAndProofEndpoint

▸ **registerPublishAggregateAndProofEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts:31](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts#L31)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts:11](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts#L11)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts:12](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts#L12)*

* **body**: *object*

  * **type**: *string* = "object"

* **querystring**: *object*

  * **required**: *string[]* = ["validator_pubkey", "slot_signature"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **slot_signature**: *object*

      * **type**: *string* = "string"

    * **validator_pubkey**: *object*

      * **type**: *string* = "string"
