[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/nodejs/bundle"](../modules/_network_nodejs_bundle_.md) › [NodejsNode](../classes/_network_nodejs_bundle_.nodejsnode.md) › [ConnectionEncryption](_network_nodejs_bundle_.nodejsnode.connectionencryption.md)

# Interface: ConnectionEncryption

## Hierarchy

* **ConnectionEncryption**

## Index

### Properties

* [protocol](_network_nodejs_bundle_.nodejsnode.connectionencryption.md#protocol)

### Methods

* [secureInbound](_network_nodejs_bundle_.nodejsnode.connectionencryption.md#secureinbound)
* [secureOutbound](_network_nodejs_bundle_.nodejsnode.connectionencryption.md#secureoutbound)

## Properties

###  protocol

• **protocol**: *string*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:78

## Methods

###  secureInbound

▸ **secureInbound**(`localPeer`: PeerId, `connection`: LibP2pConnection, `remotePeer`: PeerId): *Promise‹[SecureConnection](_network_nodejs_bundle_.nodejsnode.secureconnection.md)›*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:79

**Parameters:**

Name | Type |
------ | ------ |
`localPeer` | PeerId |
`connection` | LibP2pConnection |
`remotePeer` | PeerId |

**Returns:** *Promise‹[SecureConnection](_network_nodejs_bundle_.nodejsnode.secureconnection.md)›*

___

###  secureOutbound

▸ **secureOutbound**(`localPeer`: PeerId, `connection`: LibP2pConnection, `remotePeer?`: PeerId): *Promise‹[SecureConnection](_network_nodejs_bundle_.nodejsnode.secureconnection.md)›*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:80

**Parameters:**

Name | Type |
------ | ------ |
`localPeer` | PeerId |
`connection` | LibP2pConnection |
`remotePeer?` | PeerId |

**Returns:** *Promise‹[SecureConnection](_network_nodejs_bundle_.nodejsnode.secureconnection.md)›*
