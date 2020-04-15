[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/utils"](_network_gossip_utils_.md)

# External module: "network/gossip/utils"

## Index

### Functions

* [getAttestationSubnet](_network_gossip_utils_.md#getattestationsubnet)
* [getAttestationSubnetTopic](_network_gossip_utils_.md#getattestationsubnettopic)
* [getCommitteeIndexSubnet](_network_gossip_utils_.md#getcommitteeindexsubnet)
* [getGossipTopic](_network_gossip_utils_.md#getgossiptopic)
* [getMessageId](_network_gossip_utils_.md#getmessageid)
* [getSubnetFromAttestationSubnetTopic](_network_gossip_utils_.md#getsubnetfromattestationsubnettopic)
* [isAttestationSubnetTopic](_network_gossip_utils_.md#isattestationsubnettopic)
* [normalizeInRpcMessage](_network_gossip_utils_.md#normalizeinrpcmessage)

## Functions

###  getAttestationSubnet

▸ **getAttestationSubnet**(`attestation`: Attestation): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:31](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/gossip/utils.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *string*

___

###  getAttestationSubnetTopic

▸ **getAttestationSubnetTopic**(`attestation`: Attestation, `encoding`: string): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:23](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/gossip/utils.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`attestation` | Attestation | - |
`encoding` | string | "ssz" |

**Returns:** *string*

___

###  getCommitteeIndexSubnet

▸ **getCommitteeIndexSubnet**(`committeeIndex`: CommitteeIndex): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:35](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/gossip/utils.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`committeeIndex` | CommitteeIndex |

**Returns:** *string*

___

###  getGossipTopic

▸ **getGossipTopic**(`event`: [GossipEvent](../enums/_network_gossip_constants_.gossipevent.md), `encoding`: string, `params`: Map‹string, string›): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:15](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/gossip/utils.ts#L15)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | [GossipEvent](../enums/_network_gossip_constants_.gossipevent.md) | - |
`encoding` | string | "ssz" |
`params` | Map‹string, string› | new Map() |

**Returns:** *string*

___

###  getMessageId

▸ **getMessageId**(`rawMessage`: IGossipMessage): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:58](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/gossip/utils.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`rawMessage` | IGossipMessage |

**Returns:** *string*

___

###  getSubnetFromAttestationSubnetTopic

▸ **getSubnetFromAttestationSubnetTopic**(`topic`: string): *number*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:43](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/gossip/utils.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *number*

___

###  isAttestationSubnetTopic

▸ **isAttestationSubnetTopic**(`topic`: string): *boolean*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:39](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/gossip/utils.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *boolean*

___

###  normalizeInRpcMessage

▸ **normalizeInRpcMessage**(`rawMessage`: IGossipMessage): *[ILodestarGossipMessage](../interfaces/_network_gossip_interface_.ilodestargossipmessage.md)*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:50](https://github.com/ChainSafe/lodestar/blob/4796680/packages/lodestar/src/network/gossip/utils.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`rawMessage` | IGossipMessage |

**Returns:** *[ILodestarGossipMessage](../interfaces/_network_gossip_interface_.ilodestargossipmessage.md)*
