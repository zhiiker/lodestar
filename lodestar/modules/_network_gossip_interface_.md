[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/interface"](_network_gossip_interface_.md)

# External module: "network/gossip/interface"

## Index

### Interfaces

* [IGossip](../interfaces/_network_gossip_interface_.igossip.md)
* [IGossipEvents](../interfaces/_network_gossip_interface_.igossipevents.md)
* [IGossipMessageValidator](../interfaces/_network_gossip_interface_.igossipmessagevalidator.md)
* [IGossipModules](../interfaces/_network_gossip_interface_.igossipmodules.md)
* [IGossipSub](../interfaces/_network_gossip_interface_.igossipsub.md)
* [ILodestarGossipMessage](../interfaces/_network_gossip_interface_.ilodestargossipmessage.md)

### Type aliases

* [GossipEventEmitter](_network_gossip_interface_.md#gossipeventemitter)
* [GossipMessageValidatorFn](_network_gossip_interface_.md#gossipmessagevalidatorfn)
* [GossipObject](_network_gossip_interface_.md#gossipobject)

## Type aliases

###  GossipEventEmitter

Ƭ **GossipEventEmitter**: *StrictEventEmitter‹EventEmitter, [IGossipEvents](../interfaces/_network_gossip_interface_.igossipevents.md)›*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:36](https://github.com/ChainSafe/lodestar/blob/e079784d1/packages/lodestar/src/network/gossip/interface.ts#L36)*

___

###  GossipMessageValidatorFn

Ƭ **GossipMessageValidatorFn**: *function*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:96](https://github.com/ChainSafe/lodestar/blob/e079784d1/packages/lodestar/src/network/gossip/interface.ts#L96)*

#### Type declaration:

▸ (`message`: [GossipObject](_network_gossip_interface_.md#gossipobject), `subnet?`: number): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [GossipObject](_network_gossip_interface_.md#gossipobject) |
`subnet?` | number |

___

###  GossipObject

Ƭ **GossipObject**: *SignedBeaconBlock | Attestation | SignedAggregateAndProof | SignedVoluntaryExit | ProposerSlashing | AttesterSlashing*

*Defined in [packages/lodestar/src/network/gossip/interface.ts:93](https://github.com/ChainSafe/lodestar/blob/e079784d1/packages/lodestar/src/network/gossip/interface.ts#L93)*
