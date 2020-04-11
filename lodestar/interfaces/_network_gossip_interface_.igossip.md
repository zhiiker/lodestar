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

*Inherited from [IEth1Notifier](_eth1_interface_.ieth1notifier.md).[ _emitType](_eth1_interface_.ieth1notifier.md#optional--_emittype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:7

___

### `Optional`  _emitterType

• ** _emitterType**? : *T*

*Inherited from [IEth1Notifier](_eth1_interface_.ieth1notifier.md).[ _emitterType](_eth1_interface_.ieth1notifier.md#optional--_emittertype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:5

___

### `Optional`  _eventsType

• ** _eventsType**? : *U*

*Inherited from [IEth1Notifier](_eth1_interface_.ieth1notifier.md).[ _eventsType](_eth1_interface_.ieth1notifier.md#optional--_eventstype)*

Defined in node_modules/strict-event-emitter-types/types/src/index.d.ts:6

## Methods

###  publishAggregatedAttestation

▸ **publishAggregatedAttestation**(`aggregateAndProof`: AggregateAndProof): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:52](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`aggregateAndProof` | AggregateAndProof |

**Returns:** *Promise‹void›*

___

###  publishAttesterSlashing

▸ **publishAttesterSlashing**(`attesterSlashing`: AttesterSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:54](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`attesterSlashing` | AttesterSlashing |

**Returns:** *Promise‹void›*

___

###  publishBlock

▸ **publishBlock**(`signedBlock`: SignedBeaconBlock): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:50](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *Promise‹void›*

___

###  publishCommiteeAttestation

▸ **publishCommiteeAttestation**(`attestation`: Attestation): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:51](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *Promise‹void›*

___

###  publishProposerSlashing

▸ **publishProposerSlashing**(`proposerSlashing`: ProposerSlashing): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:55](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`proposerSlashing` | ProposerSlashing |

**Returns:** *Promise‹void›*

___

###  publishVoluntaryExit

▸ **publishVoluntaryExit**(`voluntaryExit`: SignedVoluntaryExit): *Promise‹void›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:53](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[start](_network_gossip_interface_.igossip.md#start)*

*Defined in [packages/lodestar/src/node/nodejs.ts:25](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/node/nodejs.ts#L25)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[stop](_network_gossip_interface_.igossip.md#stop)*

*Defined in [packages/lodestar/src/node/nodejs.ts:27](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/node/nodejs.ts#L27)*

**Returns:** *Promise‹void›*

___

###  subscribeToAggregateAndProof

▸ **subscribeToAggregateAndProof**(`callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:57](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L57)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:58](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L58)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:62](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L62)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:61](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L61)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:56](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L56)*

**Parameters:**

▪ **callback**: *function*

▸ (`signedBlock`: SignedBeaconBlock): *void*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

**Returns:** *void*

___

###  subscribeToProposerSlashing

▸ **subscribeToProposerSlashing**(`callback`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:60](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L60)*

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

*Defined in [packages/lodestar/src/network/gossip/interface.ts:59](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L59)*

**Parameters:**

▪ **callback**: *function*

▸ (`voluntaryExit`: SignedVoluntaryExit): *void*

**Parameters:**

Name | Type |
------ | ------ |
`voluntaryExit` | SignedVoluntaryExit |

**Returns:** *void*

___

###  unsubscribe

▸ **unsubscribe**(`event`: keyof IGossipEvents, `listener`: unknown, `params?`: Map‹string, string›): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:70](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | keyof IGossipEvents |
`listener` | unknown |
`params?` | Map‹string, string› |

**Returns:** *void*

___

###  unsubscribeFromAttestationSubnet

▸ **unsubscribeFromAttestationSubnet**(`subnet`: number | string, `callback?`: function): *void*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:66](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/network/gossip/interface.ts#L66)*

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
