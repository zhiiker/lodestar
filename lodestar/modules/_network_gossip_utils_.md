[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/utils"](_network_gossip_utils_.md)

# External module: "network/gossip/utils"

## Index

### Functions

* [getAttestationSubnet](_network_gossip_utils_.md#getattestationsubnet)
* [getAttestationSubnetTopic](_network_gossip_utils_.md#getattestationsubnettopic)
* [getCommitteeIndexSubnet](_network_gossip_utils_.md#getcommitteeindexsubnet)
* [getGossipEvent](_network_gossip_utils_.md#getgossipevent)
* [getGossipTopic](_network_gossip_utils_.md#getgossiptopic)
* [getMessageId](_network_gossip_utils_.md#getmessageid)
* [getSubnetFromAttestationSubnetTopic](_network_gossip_utils_.md#getsubnetfromattestationsubnettopic)
* [isAttestationSubnetTopic](_network_gossip_utils_.md#isattestationsubnettopic)
* [normalizeInRpcMessage](_network_gossip_utils_.md#normalizeinrpcmessage)

## Functions

###  getAttestationSubnet

▸ **getAttestationSubnet**(`attestation`: Attestation): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:40](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/gossip/utils.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *string*

___

###  getAttestationSubnetTopic

▸ **getAttestationSubnetTopic**(`attestation`: Attestation, `forkDigestValue`: ForkDigest, `encoding`: string): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:28](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/gossip/utils.ts#L28)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`attestation` | Attestation | - |
`forkDigestValue` | ForkDigest | - |
`encoding` | string | "ssz" |

**Returns:** *string*

___

###  getCommitteeIndexSubnet

▸ **getCommitteeIndexSubnet**(`committeeIndex`: CommitteeIndex): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:50](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/gossip/utils.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`committeeIndex` | CommitteeIndex |

**Returns:** *string*

___

###  getGossipEvent

▸ **getGossipEvent**(`topic`: string): *[GossipEvent](../enums/_network_gossip_constants_.gossipevent.md)*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:44](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/gossip/utils.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *[GossipEvent](../enums/_network_gossip_constants_.gossipevent.md)*

___

###  getGossipTopic

▸ **getGossipTopic**(`event`: [GossipEvent](../enums/_network_gossip_constants_.gossipevent.md), `forkDigestValue`: ForkDigest, `encoding`: string, `params`: Map‹string, string›): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:15](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/gossip/utils.ts#L15)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | [GossipEvent](../enums/_network_gossip_constants_.gossipevent.md) | - |
`forkDigestValue` | ForkDigest | - |
`encoding` | string | "ssz" |
`params` | Map‹string, string› | new Map() |

**Returns:** *string*

___

###  getMessageId

▸ **getMessageId**(`rawMessage`: IGossipMessage): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:73](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/gossip/utils.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`rawMessage` | IGossipMessage |

**Returns:** *string*

___

###  getSubnetFromAttestationSubnetTopic

▸ **getSubnetFromAttestationSubnetTopic**(`topic`: string): *number*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:58](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/gossip/utils.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *number*

___

###  isAttestationSubnetTopic

▸ **isAttestationSubnetTopic**(`topic`: string): *boolean*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:54](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/gossip/utils.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *boolean*

___

###  normalizeInRpcMessage

▸ **normalizeInRpcMessage**(`rawMessage`: IGossipMessage): *[ILodestarGossipMessage](../interfaces/_network_gossip_interface_.ilodestargossipmessage.md)*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:65](https://github.com/ChainSafe/lodestar/blob/393d800/packages/lodestar/src/network/gossip/utils.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`rawMessage` | IGossipMessage |

**Returns:** *[ILodestarGossipMessage](../interfaces/_network_gossip_interface_.ilodestargossipmessage.md)*
