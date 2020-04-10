[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/constants"](_network_gossip_constants_.md)

# External module: "network/gossip/constants"

## Index

### Enumerations

* [GossipEvent](../enums/_network_gossip_constants_.gossipevent.md)

### Variables

* [AttestationSubnetRegExp](_network_gossip_constants_.md#const-attestationsubnetregexp)

### Functions

* [getCommitteeSubnetEvent](_network_gossip_constants_.md#getcommitteesubnetevent)

## Variables

### `Const` AttestationSubnetRegExp

• **AttestationSubnetRegExp**: *RegExp‹›* = new RegExp("^(/eth2/committee_index)([0-9]+)(_beacon_attestation/)([a-z]+)$")

*Defined in [packages/lodestar/src/network/gossip/constants.ts:18](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/constants.ts#L18)*

## Functions

###  getCommitteeSubnetEvent

▸ **getCommitteeSubnetEvent**(`index`: CommitteeIndex): *string*

*Defined in [packages/lodestar/src/network/gossip/constants.ts:20](https://github.com/ChainSafe/lodestar/blob/c806550/packages/lodestar/src/network/gossip/constants.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | CommitteeIndex |

**Returns:** *string*
