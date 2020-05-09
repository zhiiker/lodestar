[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/constants"](_network_gossip_constants_.md)

# External module: "network/gossip/constants"

## Index

### Enumerations

* [GossipEvent](../enums/_network_gossip_constants_.gossipevent.md)

### Variables

* [AttestationSubnetRegExp](_network_gossip_constants_.md#const-attestationsubnetregexp)
* [GossipTopicRegExp](_network_gossip_constants_.md#const-gossiptopicregexp)

### Functions

* [getCommitteeSubnetEvent](_network_gossip_constants_.md#getcommitteesubnetevent)

## Variables

### `Const` AttestationSubnetRegExp

• **AttestationSubnetRegExp**: *RegExp‹›* = new RegExp("^(/eth2/)([a-f0-9]{8})(/committee_index)([0-9]+)(_beacon_attestation/)([a-z_]+)$")

*Defined in [packages/lodestar/src/network/gossip/constants.ts:18](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/network/gossip/constants.ts#L18)*

___

### `Const` GossipTopicRegExp

• **GossipTopicRegExp**: *RegExp‹›* = new RegExp("^(/eth2/)([a-f0-9]{8})/(\\w+)(/[a-z]+)")

*Defined in [packages/lodestar/src/network/gossip/constants.ts:21](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/network/gossip/constants.ts#L21)*

## Functions

###  getCommitteeSubnetEvent

▸ **getCommitteeSubnetEvent**(`index`: CommitteeIndex): *string*

*Defined in [packages/lodestar/src/network/gossip/constants.ts:23](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/network/gossip/constants.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | CommitteeIndex |

**Returns:** *string*
