[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/gossip/handler"](../modules/_sync_gossip_handler_.md) › [BeaconGossipHandler](_sync_gossip_handler_.beacongossiphandler.md)

# Class: BeaconGossipHandler

## Hierarchy

* **BeaconGossipHandler**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md)

## Index

### Constructors

* [constructor](_sync_gossip_handler_.beacongossiphandler.md#constructor)

### Properties

* [chain](_sync_gossip_handler_.beacongossiphandler.md#private-chain)
* [currentForkDigest](_sync_gossip_handler_.beacongossiphandler.md#private-currentforkdigest)
* [db](_sync_gossip_handler_.beacongossiphandler.md#private-db)
* [logger](_sync_gossip_handler_.beacongossiphandler.md#private-logger)
* [network](_sync_gossip_handler_.beacongossiphandler.md#private-network)

### Methods

* [handleForkDigest](_sync_gossip_handler_.beacongossiphandler.md#private-handleforkdigest)
* [onAggregatedAttestation](_sync_gossip_handler_.beacongossiphandler.md#private-onaggregatedattestation)
* [onAttesterSlashing](_sync_gossip_handler_.beacongossiphandler.md#private-onattesterslashing)
* [onBlock](_sync_gossip_handler_.beacongossiphandler.md#private-onblock)
* [onProposerSlashing](_sync_gossip_handler_.beacongossiphandler.md#private-onproposerslashing)
* [onVoluntaryExit](_sync_gossip_handler_.beacongossiphandler.md#private-onvoluntaryexit)
* [start](_sync_gossip_handler_.beacongossiphandler.md#start)
* [stop](_sync_gossip_handler_.beacongossiphandler.md#stop)
* [subscribe](_sync_gossip_handler_.beacongossiphandler.md#private-subscribe)
* [unsubscribe](_sync_gossip_handler_.beacongossiphandler.md#private-unsubscribe)

## Constructors

###  constructor

\+ **new BeaconGossipHandler**(`chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `network`: [INetwork](../interfaces/_network_interface_.inetwork.md), `db`: [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md), `logger`: ILogger): *[BeaconGossipHandler](_sync_gossip_handler_.beacongossiphandler.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:23](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md) |
`network` | [INetwork](../interfaces/_network_interface_.inetwork.md) |
`db` | [IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md) |
`logger` | ILogger |

**Returns:** *[BeaconGossipHandler](_sync_gossip_handler_.beacongossiphandler.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:19](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L19)*

___

### `Private` currentForkDigest

• **currentForkDigest**: *ForkDigest*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:23](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L23)*

___

### `Private` db

• **db**: *[IBeaconDb](../interfaces/_db_api_beacon_interface_.ibeacondb.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:21](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L21)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:22](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L22)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:20](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L20)*

## Methods

### `Private` handleForkDigest

▸ **handleForkDigest**(`forkDigest`: ForkDigest): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:43](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *Promise‹void›*

___

### `Private` onAggregatedAttestation

▸ **onAggregatedAttestation**(`aggregate`: SignedAggregateAndProof): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:76](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregate` | SignedAggregateAndProof |

**Returns:** *Promise‹void›*

___

### `Private` onAttesterSlashing

▸ **onAttesterSlashing**(`attesterSlashing`: AttesterSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:80](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹void›*

___

### `Private` onBlock

▸ **onBlock**(`block`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:72](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

### `Private` onProposerSlashing

▸ **onProposerSlashing**(`proposerSlashing`: ProposerSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:84](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹void›*

___

### `Private` onVoluntaryExit

▸ **onVoluntaryExit**(`exit`: SignedVoluntaryExit): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:88](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`exit` | SignedVoluntaryExit |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:32](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L32)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:38](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L38)*

**Returns:** *Promise‹void›*

___

### `Private` subscribe

▸ **subscribe**(`forkDigest`: ForkDigest): *void*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:50](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *void*

___

### `Private` unsubscribe

▸ **unsubscribe**(`forkDigest`: ForkDigest): *void*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:58](https://github.com/ChainSafe/lodestar/blob/eb468c79c/packages/lodestar/src/sync/gossip/handler.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *void*
