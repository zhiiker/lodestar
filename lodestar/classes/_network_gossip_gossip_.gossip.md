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
* [config](_network_gossip_gossip_.gossip.md#protected-config)
* [handlers](_network_gossip_gossip_.gossip.md#private-handlers)
* [libp2p](_network_gossip_gossip_.gossip.md#protected-libp2p)
* [logger](_network_gossip_gossip_.gossip.md#protected-logger)
* [opts](_network_gossip_gossip_.gossip.md#protected-opts)
* [publishAggregatedAttestation](_network_gossip_gossip_.gossip.md#publishaggregatedattestation)
* [publishAttesterSlashing](_network_gossip_gossip_.gossip.md#publishattesterslashing)
* [publishBlock](_network_gossip_gossip_.gossip.md#publishblock)
* [publishCommiteeAttestation](_network_gossip_gossip_.gossip.md#publishcommiteeattestation)
* [publishProposerSlashing](_network_gossip_gossip_.gossip.md#publishproposerslashing)
* [publishVoluntaryExit](_network_gossip_gossip_.gossip.md#publishvoluntaryexit)
* [pubsub](_network_gossip_gossip_.gossip.md#protected-pubsub)

### Methods

* [emitGossipHeartbeat](_network_gossip_gossip_.gossip.md#private-emitgossipheartbeat)
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
* [unsubscribe](_network_gossip_gossip_.gossip.md#unsubscribe)
* [unsubscribeFromAttestationSubnet](_network_gossip_gossip_.gossip.md#unsubscribefromattestationsubnet)

## Constructors

###  constructor

\+ **new Gossip**(`opts`: [INetworkOptions](../interfaces/_network_options_.inetworkoptions.md), `__namedParameters`: object): *[Gossip](_network_gossip_gossip_.gossip.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:46](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L46)*

**Parameters:**

▪ **opts**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`libp2p` | LibP2p‹› |
`logger` | ILogger |
`validator` | [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md) |

**Returns:** *[Gossip](_network_gossip_gossip_.gossip.md)*

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _emitterType](../interfaces/_network_gossip_interface_.igossip.md#optional--_emittertype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _emitterType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[ _eventsType](../interfaces/_network_gossip_interface_.igossip.md#optional--_eventstype)*

*Inherited from [IEth1Notifier](../interfaces/_eth1_interface_.ieth1notifier.md).[ _eventsType](../interfaces/_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

___

### `Protected` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:41](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L41)*

___

### `Private` handlers

• **handlers**: *Map‹string, [GossipHandlerFn](../modules/_network_gossip_gossip_.md#gossiphandlerfn)›*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:46](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L46)*

___

### `Protected` libp2p

• **libp2p**: *LibP2p*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:42](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L42)*

___

### `Protected` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:44](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L44)*

___

### `Protected` opts

• **opts**: *[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:40](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L40)*

___

###  publishAggregatedAttestation

• **publishAggregatedAttestation**: *function* = publishAggregatedAttestation.bind(this)

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md).[publishAggregatedAttestation](../interfaces/_network_gossip_interface_.igossip.md#publishaggregatedattestation)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:78](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L78)*

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

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:84](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L84)*

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

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:74](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L74)*

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

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:76](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L76)*

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

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:82](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L82)*

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

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:80](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L80)*

#### Type declaration:

▸ (...`args`: A): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | A |

___

### `Protected` pubsub

• **pubsub**: *[IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:43](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L43)*

## Methods

### `Private` emitGossipHeartbeat

▸ **emitGossipHeartbeat**(): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:171](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L171)*

**Returns:** *void*

___

### `Private` registerHandlers

▸ **registerHandlers**(): *Map‹string, [GossipHandlerFn](../modules/_network_gossip_gossip_.md#gossiphandlerfn)›*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:140](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L140)*

**Returns:** *Map‹string, [GossipHandlerFn](../modules/_network_gossip_gossip_.md#gossiphandlerfn)›*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:60](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L60)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:67](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L67)*

**Returns:** *Promise‹void›*

___

### `Private` subscribe

▸ **subscribe**(`event`: keyof IGossipEvents, `listener?`: unknown, `params`: Map‹string, string›): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:131](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L131)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | keyof IGossipEvents | - |
`listener?` | unknown | - |
`params` | Map‹string, string› | new Map() |

**Returns:** *void*

___

###  subscribeToAggregateAndProof

▸ **subscribeToAggregateAndProof**(`callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:90](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L90)*

**Parameters:**

▪ **callback**: *function*

▸ (`aggregate`: AggregateAndProof): *void*

**Parameters:**

Name | Type |
------ | ------ |
`aggregate` | AggregateAndProof |

**Returns:** *void*

___

###  subscribeToAttestation

▸ **subscribeToAttestation**(`callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:94](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L94)*

**Parameters:**

▪ **callback**: *function*

▸ (`attestation`: Attestation): *void*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *void*

___

###  subscribeToAttestationSubnet

▸ **subscribeToAttestationSubnet**(`subnet`: number | string, `callback?`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:110](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L110)*

**Parameters:**

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

▸ **subscribeToAttesterSlashing**(`callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:106](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L106)*

**Parameters:**

▪ **callback**: *function*

▸ (`slashing`: AttesterSlashing): *void*

**Parameters:**

Name | Type |
------ | ------ |
`slashing` | AttesterSlashing |

**Returns:** *void*

___

###  subscribeToBlock

▸ **subscribeToBlock**(`callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:86](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L86)*

**Parameters:**

▪ **callback**: *function*

▸ (`block`: SignedBeaconBlock): *void*

**Parameters:**

Name | Type |
------ | ------ |
`block` | SignedBeaconBlock |

**Returns:** *void*

___

###  subscribeToProposerSlashing

▸ **subscribeToProposerSlashing**(`callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:102](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L102)*

**Parameters:**

▪ **callback**: *function*

▸ (`slashing`: ProposerSlashing): *void*

**Parameters:**

Name | Type |
------ | ------ |
`slashing` | ProposerSlashing |

**Returns:** *void*

___

###  subscribeToVoluntaryExit

▸ **subscribeToVoluntaryExit**(`callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:98](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L98)*

**Parameters:**

▪ **callback**: *function*

▸ (`signed`: SignedVoluntaryExit): *void*

**Parameters:**

Name | Type |
------ | ------ |
`signed` | SignedVoluntaryExit |

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(`event`: keyof IGossipEvents, `listener?`: unknown, `params`: Map‹string, string›): *void*

*Implementation of [IGossip](../interfaces/_network_gossip_interface_.igossip.md)*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:122](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L122)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | keyof IGossipEvents | - |
`listener?` | unknown | - |
`params` | Map‹string, string› | new Map() |

**Returns:** *void*

___

###  unsubscribeFromAttestationSubnet

▸ **unsubscribeFromAttestationSubnet**(`subnet`: number | string, `callback?`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/gossip.ts:116](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/gossip.ts#L116)*

**Parameters:**

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
