[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/gossip/utils"](_network_gossip_utils_.md)

# External module: "network/gossip/utils"

## Index

### Functions

* [getAttestationSubnet](_network_gossip_utils_.md#getattestationsubnet)
* [getAttestationSubnetEvent](_network_gossip_utils_.md#getattestationsubnetevent)
* [getAttestationSubnetTopic](_network_gossip_utils_.md#getattestationsubnettopic)
* [getCommitteeIndexSubnet](_network_gossip_utils_.md#getcommitteeindexsubnet)
* [getGossipTopic](_network_gossip_utils_.md#getgossiptopic)
* [getMessageId](_network_gossip_utils_.md#getmessageid)
* [getSubnetFromAttestationSubnetTopic](_network_gossip_utils_.md#getsubnetfromattestationsubnettopic)
* [isAttestationSubnetEvent](_network_gossip_utils_.md#isattestationsubnetevent)
* [isAttestationSubnetTopic](_network_gossip_utils_.md#isattestationsubnettopic)
* [mapGossipEvent](_network_gossip_utils_.md#mapgossipevent)
* [normalizeInRpcMessage](_network_gossip_utils_.md#normalizeinrpcmessage)
* [topicToGossipEvent](_network_gossip_utils_.md#topictogossipevent)

## Functions

###  getAttestationSubnet

▸ **getAttestationSubnet**(`attestation`: Attestation): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:41](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

**Returns:** *string*

___

###  getAttestationSubnetEvent

▸ **getAttestationSubnetEvent**(`subnet`: number): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:62](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`subnet` | number |

**Returns:** *string*

___

###  getAttestationSubnetTopic

▸ **getAttestationSubnetTopic**(`attestation`: Attestation, `forkDigestValue`: ForkDigest, `encoding`: [GossipEncoding](../enums/_network_gossip_encoding_.gossipencoding.md)): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:29](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L29)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`attestation` | Attestation | - |
`forkDigestValue` | ForkDigest | - |
`encoding` | [GossipEncoding](../enums/_network_gossip_encoding_.gossipencoding.md) | GossipEncoding.SSZ_SNAPPY |

**Returns:** *string*

___

###  getCommitteeIndexSubnet

▸ **getCommitteeIndexSubnet**(`committeeIndex`: CommitteeIndex): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:58](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`committeeIndex` | CommitteeIndex |

**Returns:** *string*

___

###  getGossipTopic

▸ **getGossipTopic**(`event`: [GossipEvent](../enums/_network_gossip_constants_.gossipevent.md), `forkDigestValue`: ForkDigest, `encoding`: [GossipEncoding](../enums/_network_gossip_encoding_.gossipencoding.md), `params`: Map‹string, string›): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:16](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L16)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`event` | [GossipEvent](../enums/_network_gossip_constants_.gossipevent.md) | - |
`forkDigestValue` | ForkDigest | - |
`encoding` | [GossipEncoding](../enums/_network_gossip_encoding_.gossipencoding.md) | GossipEncoding.SSZ_SNAPPY |
`params` | Map‹string, string› | new Map() |

**Returns:** *string*

___

###  getMessageId

▸ **getMessageId**(`rawMessage`: IGossipMessage): *string*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:89](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`rawMessage` | IGossipMessage |

**Returns:** *string*

___

###  getSubnetFromAttestationSubnetTopic

▸ **getSubnetFromAttestationSubnetTopic**(`topic`: string): *number*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:74](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *number*

___

###  isAttestationSubnetEvent

▸ **isAttestationSubnetEvent**(`event`: keyof IGossipEvents | string): *boolean*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:66](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | keyof IGossipEvents &#124; string |

**Returns:** *boolean*

___

###  isAttestationSubnetTopic

▸ **isAttestationSubnetTopic**(`topic`: string): *boolean*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:70](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *boolean*

___

###  mapGossipEvent

▸ **mapGossipEvent**(`event`: keyof IGossipEvents | string): *[GossipEvent](../enums/_network_gossip_constants_.gossipevent.md)*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:45](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | keyof IGossipEvents &#124; string |

**Returns:** *[GossipEvent](../enums/_network_gossip_constants_.gossipevent.md)*

___

###  normalizeInRpcMessage

▸ **normalizeInRpcMessage**(`rawMessage`: IGossipMessage): *[ILodestarGossipMessage](../interfaces/_network_gossip_interface_.ilodestargossipmessage.md)*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:81](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`rawMessage` | IGossipMessage |

**Returns:** *[ILodestarGossipMessage](../interfaces/_network_gossip_interface_.ilodestargossipmessage.md)*

___

###  topicToGossipEvent

▸ **topicToGossipEvent**(`topic`: string): *[GossipEvent](../enums/_network_gossip_constants_.gossipevent.md)*

*Defined in [packages/lodestar/src/network/gossip/utils.ts:52](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/gossip/utils.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *[GossipEvent](../enums/_network_gossip_constants_.gossipevent.md)*
