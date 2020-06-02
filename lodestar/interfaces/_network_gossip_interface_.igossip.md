[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/interface"](../modules/_network_gossip_interface_.md) › [IGossip](_network_gossip_interface_.igossip.md)

# Interface: IGossip <**T, U, V**>

## Type parameters

▪ **T**

▪ **U**

▪ **V**

## Hierarchy

* [IService](_node_nodejs_.iservice.md)

* TypeRecord‹EventEmitter‹›, [IGossipEvents](_network_gossip_interface_.igossipevents.md), [IGossipEvents](_network_gossip_interface_.igossipevents.md)› & object & object

  ↳ **IGossip**

## Implemented by

* [Gossip](../classes/_network_gossip_gossip_.gossip.md)

## Index

### Properties

* [ _emitType](_network_gossip_interface_.igossip.md#optional--_emittype)
* [ _emitterType](_network_gossip_interface_.igossip.md#optional--_emittertype)
* [ _eventsType](_network_gossip_interface_.igossip.md#optional--_eventstype)

### Methods

* [publishAggregatedAttestation](_network_gossip_interface_.igossip.md#publishaggregatedattestation)
* [publishAttesterSlashing](_network_gossip_interface_.igossip.md#publishattesterslashing)
* [publishBlock](_network_gossip_interface_.igossip.md#publishblock)
* [publishCommiteeAttestation](_network_gossip_interface_.igossip.md#publishcommiteeattestation)
* [publishProposerSlashing](_network_gossip_interface_.igossip.md#publishproposerslashing)
* [publishVoluntaryExit](_network_gossip_interface_.igossip.md#publishvoluntaryexit)
* [start](_network_gossip_interface_.igossip.md#start)
* [stop](_network_gossip_interface_.igossip.md#stop)
* [subscribeToAggregateAndProof](_network_gossip_interface_.igossip.md#subscribetoaggregateandproof)
* [subscribeToAttestation](_network_gossip_interface_.igossip.md#subscribetoattestation)
* [subscribeToAttestationSubnet](_network_gossip_interface_.igossip.md#subscribetoattestationsubnet)
* [subscribeToAttesterSlashing](_network_gossip_interface_.igossip.md#subscribetoattesterslashing)
* [subscribeToBlock](_network_gossip_interface_.igossip.md#subscribetoblock)
* [subscribeToProposerSlashing](_network_gossip_interface_.igossip.md#subscribetoproposerslashing)
* [subscribeToVoluntaryExit](_network_gossip_interface_.igossip.md#subscribetovoluntaryexit)
* [unsubscribe](_network_gossip_interface_.igossip.md#unsubscribe)
* [unsubscribeFromAttestationSubnet](_network_gossip_interface_.igossip.md#unsubscribefromattestationsubnet)

## Properties

### `Optional`  _emitType

• ** _emitType**? : *V*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[ _emitType](_network_gossip_interface_.igossip.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[ _emitterType](_network_gossip_interface_.igossip.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[ _eventsType](_network_gossip_interface_.igossip.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

## Methods

###  publishAggregatedAttestation

▸ **publishAggregatedAttestation**(`signedAggregateAndProof`: SignedAggregateAndProof): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:58](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`signedAggregateAndProof` | SignedAggregateAndProof |

**Returns:** *Promise‹void›*

___

###  publishAttesterSlashing

▸ **publishAttesterSlashing**(`attesterSlashing`: AttesterSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:60](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹void›*

___

###  publishBlock

▸ **publishBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:56](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  publishCommiteeAttestation

▸ **publishCommiteeAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:57](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  publishProposerSlashing

▸ **publishProposerSlashing**(`proposerSlashing`: ProposerSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:61](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹void›*

___

###  publishVoluntaryExit

▸ **publishVoluntaryExit**(`voluntaryExit`: SignedVoluntaryExit): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:59](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[start](_network_gossip_interface_.igossip.md#start)*

*Defined in [packages/lodestar/src/node/nodejs.ts:25](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/node/nodejs.ts#L25)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[stop](_network_gossip_interface_.igossip.md#stop)*

*Defined in [packages/lodestar/src/node/nodejs.ts:27](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/node/nodejs.ts#L27)*

**Returns:** *Promise‹void›*

___

###  subscribeToAggregateAndProof

▸ **subscribeToAggregateAndProof**(`forkDigest`: ForkDigest, `callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:63](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L63)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **callback**: *function*

▸ (`aggregate`: SignedAggregateAndProof): *void*

**Parameters:**

Name | Type |
------ | ------ |
`aggregate` | SignedAggregateAndProof |

**Returns:** *void*

___

###  subscribeToAttestation

▸ **subscribeToAttestation**(`forkDigest`: ForkDigest, `callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:64](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L64)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:69](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L69)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:68](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L68)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:62](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L62)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **callback**: *function*

▸ (`signedBlock`: SignedBeaconBlock): *void*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *void*

___

###  subscribeToProposerSlashing

▸ **subscribeToProposerSlashing**(`forkDigest`: ForkDigest, `callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:67](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L67)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:65](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L65)*

**Parameters:**

▪ **forkDigest**: *ForkDigest*

▪ **callback**: *function*

▸ (`voluntaryExit`: SignedVoluntaryExit): *void*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(`forkDigest`: ForkDigest, `event`: keyof IGossipEvents, `listener`: unknown, `params?`: Map‹string, string›): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:79](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |
`event` | keyof IGossipEvents |
`listener` | unknown |
`params?` | Map‹string, string› |

**Returns:** *void*

___

###  unsubscribeFromAttestationSubnet

▸ **unsubscribeFromAttestationSubnet**(`forkDigest`: ForkDigest, `subnet`: number | string, `callback?`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:74](https://github.com/ChainSafe/lodestar/blob/5f04d592a/packages/lodestar/src/network/gossip/interface.ts#L74)*

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
