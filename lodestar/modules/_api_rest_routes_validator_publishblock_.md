[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/publishBlock"](_api_rest_routes_validator_publishblock_.md)

# External module: "api/rest/routes/validator/publishBlock"

## Index

### Interfaces

* [IBody](../interfaces/_api_rest_routes_validator_publishblock_.ibody.md)

### Functions

* [registerBlockPublishEndpoint](_api_rest_routes_validator_publishblock_.md#const-registerblockpublishendpoint)

### Object literals

* [opts](_api_rest_routes_validator_publishblock_.md#const-opts)

## Functions

### `Const` registerBlockPublishEndpoint

▸ **registerBlockPublishEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishBlock.ts:28](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/api/rest/routes/validator/publishBlock.ts#L28)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishBlock.ts:13](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/api/rest/routes/validator/publishBlock.ts#L13)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishBlock.ts:17](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/api/rest/routes/validator/publishBlock.ts#L17)*

* **body**: *object*

  * **requiredKeys**: *string[]* = ["beacon_block"]

  * **type**: *string* = "object"

  * **beacon_block**: *object*

    * **type**: *string* = "object"
