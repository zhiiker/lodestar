[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/publishAttestation"](_api_rest_routes_validator_publishattestation_.md)

# External module: "api/rest/routes/validator/publishAttestation"

## Index

### Type aliases

* [IBody](_api_rest_routes_validator_publishattestation_.md#ibody)

### Functions

* [registerAttestationPublishEndpoint](_api_rest_routes_validator_publishattestation_.md#const-registerattestationpublishendpoint)

### Object literals

* [opts](_api_rest_routes_validator_publishattestation_.md#const-opts)

## Type aliases

###  IBody

Ƭ **IBody**: *Json[]*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts:5](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts#L5)*

## Functions

### `Const` registerAttestationPublishEndpoint

▸ **registerAttestationPublishEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts:15](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts#L15)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts:7](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts#L7)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts:8](https://github.com/ChainSafe/lodestar/blob/bd8798297/packages/lodestar/src/api/rest/routes/validator/publishAttestation.ts#L8)*

* **body**: *object*

  * **type**: *string* = "array"
