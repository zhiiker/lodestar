[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/gossip"](../modules/_network_gossip_gossip_.md) › [Gossip](_network_gossip_gossip_.gossip.md)

# Class: Gossip <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* TypeRecord‹EventEmitter‹›, [IGossipEvents](../interfaces/_network_gossip_interface_.igossipevents.md), [IGossipEvents](../interfaces/_network_gossip_interface_.igossipevents.md), this› & object & object

  ↳ **Gossip**

## Implements

* [IGossip](../interfaces/_network_gossip_interface_.igossip.md)

## Index

### Constructors

* [constructor](_network_gossip_gossip_.gossip.md#constructor)

### Properties

* [ _emitType](_network_gossip_gossip_.gossip.md#optional--_emittype)
* [ _emitterType](_network_gossip_gossip_.gossip.md#optional--_emittertype)
* [ _eventsType](_network_gossip_gossip_.gossip.md#optional--_eventstype)
* [chain](_network_gossip_gossip_.gossip.md#protected-chain)
* [config](_network_gossip_gossip_.gossip.md#protected-config)
* [handlers](_network_gossip_gossip_.gossip.md#private-handlers)
* [logger](_network_gossip_gossip_.gossip.md#protected-logger)
* [metadata](_network_gossip_gossip_.gossip.md#private-metadata)
* [opts](_network_gossip_gossip_.gossip.md#protected-opts)
* [publishAggregatedAttestation](_network_gossip_gossip_.gossip.md#publishaggregatedattestation)
* [publishAttesterSlashing](_network_gossip_gossip_.gossip.md#publishattesterslashing)
* [publishBlock](_network_gossip_gossip_.gossip.md#publishblock)
* [publishCommiteeAttestation](_network_gossip_gossip_.gossip.md#publishcommiteeattestation)
* [publishProposerSlashing](_network_gossip_gossip_.gossip.md#publishproposerslashing)
* [publishVoluntaryExit](_network_gossip_gossip_.gossip.md#publishvoluntaryexit)
* [pubsub](_network_gossip_gossip_.gossip.md#protected-pubsub)
* [supportedEncodings](_network_gossip_gossip_.gossip.md#private-supportedencodings)

### Methods

* [createHandlers](_network_gossip_gossip_.gossip.md#private-createhandlers)
* [emitGossipHeartbeat](_network_gossip_gossip_.gossip.md#private-emitgossipheartbeat)
* [getForkDigest](_network_gossip_gossip_.gossip.md#getforkdigest)
* [getForkDigestByEpoch](_network_gossip_gossip_.gossip.md#getforkdigestbyepoch)
* [handleForkDigest](_network_gossip_gossip_.gossip.md#private-handleforkdigest)
* [registerHandlers](_network_gossip_gossip_.gossip.md#private-registerhandlers)
* [start](_network_gossip_gossip_.gossip.md#start)
* [stop](_network_gossip_gossip_.gossip.md#stop)
* [subscribe](_network_gossip_gossip_.gossip.md#private-subscribe)
* [subscribeToAggregateAndProof](_network_gossip_gossip_.gossip.md#subscribetoaggregateandproof)
* [subscribeToAttestation](_network_gossip_gossip_.gossip.md#subscribetoattestation)
* [subscribeToAttestationSubnet](_network_gossip_gossip_.gossip.md#subscribetoattestationsubnet)
* [subscribeToAttesterSlashing](_network_gossip_gossip_.gossip.md#subscribetoattesterslashing)
* [subscribeToBlock](_network_gossip_gossip_.gossip.md#subscribetoblock)
* [subscribeToProposerSlashing](_network_gossip_gossip_.gossip.md#subscribetoproposerslashing)
* [subscribeToVoluntaryExit](_network_gossip_gossip_.gossip.md#subscribetovoluntaryexit)
* [unregisterHandlers](_network_gossip_gossip_.gossip.md#private-unregisterhandlers)
* [unsubscribe](_network_gossip_gossip_.gossip.md#unsubscribe)
* [unsubscribeFromAttestationSubnet](_network_gossip_gossip_.gossip.md#unsubscribefromattestationsubnet)

## Constructors

###  constructor

\+ **new Gossip**(`opts`: [INetworkOptions](../interfaces/_network_options_.inetworkoptions.md), `metadata`: [MetadataController](_network_metadata_metadata_.metadatacontroller.md), `__namedParameters`: object): *[Gossip](_network_gossip_gossip_.gossip.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:56](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L56)*

**Parameters:**

▪ **opts**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)*

▪ **metadata**: *[MetadataController](_network_metadata_metadata_.metadatacontroller.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`chain` | [IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)‹› |
`config` | IBeaconConfig |
`libp2p` | LibP2p‹› |
`logger` | ILogger |
`pubsub` | [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md)‹› |
`validator` | [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md) |

**Returns:** *[Gossip](_network_gossip_gossip_.gossip.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitterType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittertype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitterType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _eventsType](../interfaces/_network_gossip_interface_.igossip.md#optional--_eventstype)*

*Inherited from [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _eventsType](../interfaces/_network_gossip_interface_.igossip.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Protected` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:50](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L50)*

___

### `Protected` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:48](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L48)*

___

### `Private` handlers

• **handlers**: *Map‹string, [GossipHandlerFn](../modules/_network_gossip_gossip_.md#gossiphandlerfn)›*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:53](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L53)*

___

### `Protected` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:51](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L51)*

___

### `Private` metadata

• **metadata**: *[MetadataController](_network_metadata_metadata_.metadatacontroller.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:54](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L54)*

___

### `Protected` opts

• **opts**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:47](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L47)*

___

###  publishAggregatedAttestation

• **publishAggregatedAttestation**: *function* = publishAggregatedAttestation.bind(this)

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[publishAggregatedAttestation](../interfaces/_network_gossip_interface_.igossip.md#publishaggregatedattestation)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:88](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L88)*

#### Type declaration:

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

###  publishAttesterSlashing

• **publishAttesterSlashing**: *function* = publishAttesterSlashing.bind(this)

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[publishAttesterSlashing](../interfaces/_network_gossip_interface_.igossip.md#publishattesterslashing)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:94](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L94)*

#### Type declaration:

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

###  publishBlock

• **publishBlock**: *function* = publishBlock.bind(this)

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[publishBlock](../interfaces/_network_gossip_interface_.igossip.md#publishblock)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:84](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L84)*

#### Type declaration:

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

###  publishCommiteeAttestation

• **publishCommiteeAttestation**: *function* = publishCommiteeAttestation.bind(this)

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[publishCommiteeAttestation](../interfaces/_network_gossip_interface_.igossip.md#publishcommiteeattestation)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:86](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L86)*

#### Type declaration:

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

###  publishProposerSlashing

• **publishProposerSlashing**: *function* = publishProposerSlashing.bind(this)

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[publishProposerSlashing](../interfaces/_network_gossip_interface_.igossip.md#publishproposerslashing)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:92](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L92)*

#### Type declaration:

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

###  publishVoluntaryExit

• **publishVoluntaryExit**: *function* = publishVoluntaryExit.bind(this)

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[publishVoluntaryExit](../interfaces/_network_gossip_interface_.igossip.md#publishvoluntaryexit)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:90](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L90)*

#### Type declaration:

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Protected` pubsub

• **pubsub**: *[IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:49](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L49)*

___

### `Private` supportedEncodings

• **supportedEncodings**: *[GossipEncoding](../enums/_network_gossip_encoding_.gossipencoding.md)[]* = [GossipEncoding.SSZ_SNAPPY, GossipEncoding.SSZ]

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:56](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L56)*

## Methods

### `Private` createHandlers

▸ **createHandlers**(`forkDigest`: ForkDigest): *Map‹string, [GossipHandlerFn](../modules/_network_gossip_gossip_.md#gossiphandlerfn)›*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:222](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L222)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *Map‹string, [GossipHandlerFn](../modules/_network_gossip_gossip_.md#gossiphandlerfn)›*

___

### `Private` emitGossipHeartbeat

▸ **emitGossipHeartbeat**(): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:258](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L258)*

**Returns:** *void*

___

###  getForkDigest

▸ **getForkDigest**(`slot`: Slot): *Promise‹ForkDigest›*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:173](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹ForkDigest›*

___

###  getForkDigestByEpoch

▸ **getForkDigestByEpoch**(`epoch`: Epoch): *Promise‹ForkDigest›*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:178](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L178)*

**Parameters:**

Name | Type |
------ | ------ |
`epoch` | Epoch |

**Returns:** *Promise‹ForkDigest›*

___

### `Private` handleForkDigest

▸ **handleForkDigest**(`forkDigest`: ForkDigest): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:201](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L201)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *Promise‹void›*

___

### `Private` registerHandlers

▸ **registerHandlers**(`forkDigest`: ForkDigest): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:207](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *void*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:72](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L72)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:78](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L78)*

**Returns:** *Promise‹void›*

___

### `Private` subscribe

▸ **subscribe**(`forkDigest`: ForkDigest, `event`: keyof IGossipEvents | string, `listener?`: unknown, `params`: Map‹string, string›): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:186](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L186)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`forkDigest` | ForkDigest | - |
`event` | keyof IGossipEvents &#124; string | - |
`listener?` | unknown | - |
`params` | Map‹string, string› | new Map() |

**Returns:** *void*

___

###  subscribeToAggregateAndProof

▸ **subscribeToAggregateAndProof**(`forkDigest`: ForkDigest, `callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:100](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L100)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **callback**: *function*

▸ (`signedAggregate`: SignedAggregateAndProof): *void*

**Parameters:**

Name | Type |
------ | ------ |
`signedAggregate` | SignedAggregateAndProof |

**Returns:** *void*

___

###  subscribeToAttestation

▸ **subscribeToAttestation**(`forkDigest`: ForkDigest, `callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:105](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L105)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **callback**: *function*

▸ (`attestation`: Attestation): *void*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *void*

___

###  subscribeToAttestationSubnet

▸ **subscribeToAttestationSubnet**(`forkDigest`: ForkDigest, `subnet`: number | string, `callback?`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:125](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L125)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **subnet**: *number | string*

▪`Optional`  **callback**: *function*

▸ (`attestation`: object): *void*

**Parameters:**

▪ **attestation**: *object*

Name | Type |
------ | ------ |
`attestation` | Attestation |
`subnet` | number |

**Returns:** *void*

___

###  subscribeToAttesterSlashing

▸ **subscribeToAttesterSlashing**(`forkDigest`: ForkDigest, `callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:120](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L120)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **callback**: *function*

▸ (`slashing`: AttesterSlashing): *void*

**Parameters:**

Name | Type |
------ | ------ |
`slashing` | AttesterSlashing |

**Returns:** *void*

___

###  subscribeToBlock

▸ **subscribeToBlock**(`forkDigest`: ForkDigest, `callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:96](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L96)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **callback**: *function*

▸ (`block`: SignedBeaconBlock): *void*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *void*

___

###  subscribeToProposerSlashing

▸ **subscribeToProposerSlashing**(`forkDigest`: ForkDigest, `callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:115](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L115)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **callback**: *function*

▸ (`slashing`: ProposerSlashing): *void*

**Parameters:**

Name | Type |
------ | ------ |
`slashing` | ProposerSlashing |

**Returns:** *void*

___

###  subscribeToVoluntaryExit

▸ **subscribeToVoluntaryExit**(`forkDigest`: ForkDigest, `callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:110](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L110)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **callback**: *function*

▸ (`signed`: SignedVoluntaryExit): *void*

**Parameters:**

Name | Type |
------ | ------ |
`signed` | SignedVoluntaryExit |

**Returns:** *void*

___

### `Private` unregisterHandlers

▸ **unregisterHandlers**(): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:214](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L214)*

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(`forkDigest`: ForkDigest, `event`: keyof IGossipEvents | string, `listener?`: unknown, `params`: Map‹string, string›): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:158](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L158)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`forkDigest` | ForkDigest | - |
`event` | keyof IGossipEvents &#124; string | - |
`listener?` | unknown | - |
`params` | Map‹string, string› | new Map() |

**Returns:** *void*

___

###  unsubscribeFromAttestationSubnet

▸ **unsubscribeFromAttestationSubnet**(`forkDigest`: ForkDigest, `subnet`: number | string, `callback?`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:142](https://github.com/ChainSafe/lodestar/blob/da7050e4c/packages/lodestar/src/network/gossip/gossip.ts#L142)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **subnet**: *number | string*

▪`Optional`  **callback**: *function*

▸ (`attestation`: object): *void*

**Parameters:**

▪ **attestation**: *object*

Name | Type |
------ | ------ |
`attestation` | Attestation |
`subnet` | number |

**Returns:** *void*
