[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/duties/proposer"](_api_rest_routes_validator_duties_proposer_.md)

# External module: "api/rest/routes/validator/duties/proposer"

## Index

### Interfaces

* [IParams](../interfaces/_api_rest_routes_validator_duties_proposer_.iparams.md)

### Functions

* [registerProposerDutiesEndpoint](_api_rest_routes_validator_duties_proposer_.md#const-registerproposerdutiesendpoint)

### Object literals

* [opts](_api_rest_routes_validator_duties_proposer_.md#const-opts)

## Functions

### `Const` registerProposerDutiesEndpoint

▸ **registerProposerDutiesEndpoint**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/duties/proposer.ts:25](https://github.com/ChainSafe/lodestar/blob/0cfbab631/packages/lodestar/src/api/rest/routes/validator/duties/proposer.ts#L25)*

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

*Defined in [packages/lodestar/src/api/rest/routes/validator/duties/proposer.ts:10](https://github.com/ChainSafe/lodestar/blob/0cfbab631/packages/lodestar/src/api/rest/routes/validator/duties/proposer.ts#L10)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/duties/proposer.ts:11](https://github.com/ChainSafe/lodestar/blob/0cfbab631/packages/lodestar/src/api/rest/routes/validator/duties/proposer.ts#L11)*

* **params**: *object*

  * **required**: *string[]* = ["epoch"]

  * **type**: *string* = "object"

  * **properties**: *object*

    * **epoch**: *object*

      * **minimum**: *number* = 0

      * **type**: *string* = "integer"
