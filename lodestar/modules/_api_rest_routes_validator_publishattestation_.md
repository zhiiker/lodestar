[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/publishAttestation"](_api_rest_routes_validator_publishattestation_.md)

# External module: "api/rest/routes/validator/publishAttestation"

## Index

### Functions

* [registerAttestationPublishEndpoint](_api_rest_routes_validator_publishattestation_.md#const-registerattestationpublishendpoint)

### Object literals

* [opts](_api_rest_routes_validator_publishattestation_.md#const-opts)

## Functions

### `Const` registerAttestationPublishEndpoint

▸ **registerAttestationPublishEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts:13](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts#L13)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts:5](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts#L5)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts:6](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts#L6)*

* **body**: *object*

  * **type**: *string* = "object"
