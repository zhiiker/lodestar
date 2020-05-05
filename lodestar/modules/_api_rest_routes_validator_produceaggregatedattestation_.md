[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/produceAggregatedAttestation"](_api_rest_routes_validator_produceaggregatedattestation_.md)

# External module: "api/rest/routes/validator/produceAggregatedAttestation"

## Index

### Interfaces

* [IQuery](../interfaces/_api_rest_routes_validator_produceaggregatedattestation_.iquery.md)

### Functions

* [registerAggregateAndProofProductionEndpoint](_api_rest_routes_validator_produceaggregatedattestation_.md#const-registeraggregateandproofproductionendpoint)

### Object literals

* [opts](_api_rest_routes_validator_produceaggregatedattestation_.md#const-opts)

## Functions

### `Const` registerAggregateAndProofProductionEndpoint

▸ **registerAggregateAndProofProductionEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/produceAggregatedAttestation.ts:30](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/rest/routes/validator/produceAggregatedAttestation.ts#L30)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/produceAggregatedAttestation.ts:13](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/rest/routes/validator/produceAggregatedAttestation.ts#L13)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/produceAggregatedAttestation.ts:14](https://github.com/ChainSafe/lodestar/blob/9dda0faba/packages/lodestar/src/api/rest/routes/validator/produceAggregatedAttestation.ts#L14)*

* **querystring**: *object*

  * **required**: *string[]* = ["attestation_data", "aggregator_pubkey"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **aggregator_pubkey**: *object*

      * **type**: *string* = "string"

    * **attestation_data**: *object*

      * **type**: *string* = "string"
