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
* [network](_sync_gossip_handler_.beacongossiphandler.md#private-network)
* [opPool](_sync_gossip_handler_.beacongossiphandler.md#private-oppool)

### Methods

* [onAggregatedAttestation](_sync_gossip_handler_.beacongossiphandler.md#private-onaggregatedattestation)
* [onAttesterSlashing](_sync_gossip_handler_.beacongossiphandler.md#private-onattesterslashing)
* [onBlock](_sync_gossip_handler_.beacongossiphandler.md#private-onblock)
* [onProposerSlashing](_sync_gossip_handler_.beacongossiphandler.md#private-onproposerslashing)
* [onVoluntaryExit](_sync_gossip_handler_.beacongossiphandler.md#private-onvoluntaryexit)
* [start](_sync_gossip_handler_.beacongossiphandler.md#start)
* [stop](_sync_gossip_handler_.beacongossiphandler.md#stop)

## Constructors

###  constructor

\+ **new BeaconGossipHandler**(`chain`: [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md), `network`: [INetwork](../interfaces/_network_interface_.inetwork.md), `opPool`: [OpPool](_oppool_oppool_.oppool.md)): *[BeaconGossipHandler](_sync_gossip_handler_.beacongossiphandler.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:18](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md) |
`network` | [INetwork](../interfaces/_network_interface_.inetwork.md) |
`opPool` | [OpPool](_oppool_oppool_.oppool.md) |

**Returns:** *[BeaconGossipHandler](_sync_gossip_handler_.beacongossiphandler.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:16](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L16)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:17](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L17)*

___

### `Private` opPool

• **opPool**: *[OpPool](_oppool_oppool_.oppool.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:18](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L18)*

## Methods

### `Private` onAggregatedAttestation

▸ **onAggregatedAttestation**(`aggregate`: SignedAggregateAndProof): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:52](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregate` | SignedAggregateAndProof |

**Returns:** *Promise‹void›*

___

### `Private` onAttesterSlashing

▸ **onAttesterSlashing**(`attesterSlashing`: AttesterSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:56](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹void›*

___

### `Private` onBlock

▸ **onBlock**(`block`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:48](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

### `Private` onProposerSlashing

▸ **onProposerSlashing**(`proposerSlashing`: ProposerSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:60](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹void›*

___

### `Private` onVoluntaryExit

▸ **onVoluntaryExit**(`exit`: SignedVoluntaryExit): *Promise‹void›*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:64](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`exit` | SignedVoluntaryExit |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:26](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L26)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/sync/gossip/handler.ts:34](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/sync/gossip/handler.ts#L34)*

**Returns:** *Promise‹void›*
