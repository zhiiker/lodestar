[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/produceBlock"](_api_rest_routes_validator_produceblock_.md)

# External module: "api/rest/routes/validator/produceBlock"

## Index

### Interfaces

* [IQuery](../interfaces/_api_rest_routes_validator_produceblock_.iquery.md)

### Functions

* [registerBlockProductionEndpoint](_api_rest_routes_validator_produceblock_.md#const-registerblockproductionendpoint)

### Object literals

* [opts](_api_rest_routes_validator_produceblock_.md#const-opts)

## Functions

### `Const` registerBlockProductionEndpoint

▸ **registerBlockProductionEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/produceBlock.ts:36](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/api/rest/routes/validator/produceBlock.ts#L36)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/produceBlock.ts:15](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/api/rest/routes/validator/produceBlock.ts#L15)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/produceBlock.ts:16](https://github.com/ChainSafe/lodestar/blob/b76b72d03/packages/lodestar/src/api/rest/routes/validator/produceBlock.ts#L16)*

* **querystring**: *object*

  * **required**: *string[]* = ["slot", "proposer_pubkey", "randao_reveal"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **proposer_pubkey**: *object*

      * **type**: *string* = "string"

    * **randao_reveal**: *object*

      * **type**: *string* = "string"

    * **slot**: *object*

      * **minimum**: *number* = 0

      * **type**: *string* = "integer"
