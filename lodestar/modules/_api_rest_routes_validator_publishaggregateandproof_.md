[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/publishAggregateAndProof"](_api_rest_routes_validator_publishaggregateandproof_.md)

# External module: "api/rest/routes/validator/publishAggregateAndProof"

## Index

### Type aliases

* [IBody](_api_rest_routes_validator_publishaggregateandproof_.md#ibody)

### Functions

* [registerPublishAggregateAndProofEndpoint](_api_rest_routes_validator_publishaggregateandproof_.md#const-registerpublishaggregateandproofendpoint)

### Object literals

* [opts](_api_rest_routes_validator_publishaggregateandproof_.md#const-opts)

## Type aliases

###  IBody

Ƭ **IBody**: *Json[]*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts:6](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts#L6)*

## Functions

### `Const` registerPublishAggregateAndProofEndpoint

▸ **registerPublishAggregateAndProofEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts:18](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts#L18)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts:8](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts#L8)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts:11](https://github.com/ChainSafe/lodestar/blob/439c48cac/packages/lodestar/src/api/rest/routes/validator/publishAggregateAndProof.ts#L11)*

* **body**: *object*

  * **type**: *string* = "array"
