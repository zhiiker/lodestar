[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/routes/validator/subscribeToCommitteeSubnet"](_api_rest_routes_validator_subscribetocommitteesubnet_.md)

# External module: "api/rest/routes/validator/subscribeToCommitteeSubnet"

## Index

### Interfaces

* [IBody](../interfaces/_api_rest_routes_validator_subscribetocommitteesubnet_.ibody.md)

### Functions

* [registerSubscribeToCommitteeSubnet](_api_rest_routes_validator_subscribetocommitteesubnet_.md#const-registersubscribetocommitteesubnet)

### Object literals

* [opts](_api_rest_routes_validator_subscribetocommitteesubnet_.md#const-opts)

## Functions

### `Const` registerSubscribeToCommitteeSubnet

▸ **registerSubscribeToCommitteeSubnet**(`fastify`: FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››, `__namedParameters`: object): *void*

*Defined in [packages/lodestar/src/api/rest/routes/validator/subscribeToCommitteeSubnet.ts:34](https://github.com/ChainSafe/lodestar/blob/663f5df9e/packages/lodestar/src/api/rest/routes/validator/subscribeToCommitteeSubnet.ts#L34)*

**Parameters:**

▪ **fastify**: *FastifyInstance‹Server‹›, IncomingMessage‹›, ServerResponse‹››*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`api` | object |

**Returns:** *void*

## Object literals

### `Const` opts

### ▪ **opts**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/subscribeToCommitteeSubnet.ts:6](https://github.com/ChainSafe/lodestar/blob/663f5df9e/packages/lodestar/src/api/rest/routes/validator/subscribeToCommitteeSubnet.ts#L6)*

▪ **schema**: *object*

*Defined in [packages/lodestar/src/api/rest/routes/validator/subscribeToCommitteeSubnet.ts:7](https://github.com/ChainSafe/lodestar/blob/663f5df9e/packages/lodestar/src/api/rest/routes/validator/subscribeToCommitteeSubnet.ts#L7)*

* **body**: *object*

  * **requiredKeys**: *string[]* = ["committee_index", "slot", "slot_signature", "aggregator_pubkey"]

  * **type**: *string* = "object"

  * **aggregator_pubkey**: *object*

    * **type**: *string* = "string"

  * **attestation_committee_index**: *object*

    * **type**: *string* = "string"

  * **slot**: *object*

    * **type**: *string* = "string"

  * **slot_signature**: *object*

    * **type**: *string* = "string"
