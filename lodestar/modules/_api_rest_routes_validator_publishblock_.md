[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/publishBlock"](_api_rest_routes_validator_publishblock_.md)

# External module: "api/rest/routes/validator/publishBlock"

## Index

### Type aliases

* [IBody](_api_rest_routes_validator_publishblock_.md#ibody)

### Functions

* [registerBlockPublishEndpoint](_api_rest_routes_validator_publishblock_.md#const-registerblockpublishendpoint)

### Object literals

* [opts](_api_rest_routes_validator_publishblock_.md#const-opts)

## Type aliases

###  IBody

Ƭ **IBody**: *Json*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishBlock.ts:6](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/api/rest/routes/validator/publishBlock.ts#L6)*

## Functions

### `Const` registerBlockPublishEndpoint

▸ **registerBlockPublishEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishBlock.ts:21](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/api/rest/routes/validator/publishBlock.ts#L21)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishBlock.ts:10](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/api/rest/routes/validator/publishBlock.ts#L10)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishBlock.ts:14](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar/src/api/rest/routes/validator/publishBlock.ts#L14)*

* **body**: *object*

  * **type**: *string* = "object"
