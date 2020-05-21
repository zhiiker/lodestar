[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/nodejs/util"](_network_nodejs_util_.md)

# External module: "network/nodejs/util"

## Index

### Functions

* [createNodeJsLibp2p](_network_nodejs_util_.md#createnodejslibp2p)
* [loadPeerIdFromJsonFile](_network_nodejs_util_.md#loadpeeridfromjsonfile)
* [savePeerId](_network_nodejs_util_.md#savepeerid)

## Functions

###  createNodeJsLibp2p

▸ **createNodeJsLibp2p**(`peerIdOrPromise`: PeerId | Promise‹PeerId›, `network`: Partial‹[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)›, `autoDial`: boolean): *Promise‹LibP2p›*

*Defined in [packages/lodestar/src/network/nodejs/util.ts:34](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/nodejs/util.ts#L34)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`peerIdOrPromise` | PeerId &#124; Promise‹PeerId› | - | Create an instance of NodejsNode asynchronously |
`network` | Partial‹[INetworkOptions](../interfaces/_network_options_.inetworkoptions.md)› | {} |   |
`autoDial` | boolean | true | - |

**Returns:** *Promise‹LibP2p›*

___

###  loadPeerIdFromJsonFile

▸ **loadPeerIdFromJsonFile**(`path`: string): *Promise‹PeerId›*

*Defined in [packages/lodestar/src/network/nodejs/util.ts:24](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/nodejs/util.ts#L24)*

Load a peer id from disk

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹PeerId›*

___

###  savePeerId

▸ **savePeerId**(`path`: string, `peerId`: PeerId): *Promise‹void›*

*Defined in [packages/lodestar/src/network/nodejs/util.ts:17](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/nodejs/util.ts#L17)*

Save a peer id to disk

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`peerId` | PeerId |

**Returns:** *Promise‹void›*
