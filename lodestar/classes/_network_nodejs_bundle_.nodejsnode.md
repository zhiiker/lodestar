[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/nodejs/bundle"](../modules/_network_nodejs_bundle_.md) › [NodejsNode](_network_nodejs_bundle_.nodejsnode.md)

# Class: NodejsNode

## Hierarchy

* LibP2p

  ↳ **NodejsNode**

## Index

### Interfaces

* [ConnectionEncryption](../interfaces/_network_nodejs_bundle_.nodejsnode.connectionencryption.md)
* [SecureConnection](../interfaces/_network_nodejs_bundle_.nodejsnode.secureconnection.md)

### Type aliases

* [Events](_network_nodejs_bundle_.nodejsnode.md#static-events)
* [Options](_network_nodejs_bundle_.nodejsnode.md#static-options)
* [OptionsConfig](_network_nodejs_bundle_.nodejsnode.md#static-optionsconfig)
* [OptionsModules](_network_nodejs_bundle_.nodejsnode.md#static-optionsmodules)

### Constructors

* [constructor](_network_nodejs_bundle_.nodejsnode.md#constructor)

### Properties

* [_dht](_network_nodejs_bundle_.nodejsnode.md#_dht)
* [_discovery](_network_nodejs_bundle_.nodejsnode.md#_discovery)
* [peerInfo](_network_nodejs_bundle_.nodejsnode.md#peerinfo)
* [peerStore](_network_nodejs_bundle_.nodejsnode.md#peerstore)
* [registrar](_network_nodejs_bundle_.nodejsnode.md#registrar)

### Methods

* [dial](_network_nodejs_bundle_.nodejsnode.md#dial)
* [dialProtocol](_network_nodejs_bundle_.nodejsnode.md#dialprotocol)
* [handle](_network_nodejs_bundle_.nodejsnode.md#handle)
* [hangUp](_network_nodejs_bundle_.nodejsnode.md#hangup)
* [isStarted](_network_nodejs_bundle_.nodejsnode.md#isstarted)
* [on](_network_nodejs_bundle_.nodejsnode.md#on)
* [once](_network_nodejs_bundle_.nodejsnode.md#once)
* [ping](_network_nodejs_bundle_.nodejsnode.md#ping)
* [removeListener](_network_nodejs_bundle_.nodejsnode.md#removelistener)
* [start](_network_nodejs_bundle_.nodejsnode.md#start)
* [stop](_network_nodejs_bundle_.nodejsnode.md#stop)
* [unhandle](_network_nodejs_bundle_.nodejsnode.md#unhandle)
* [create](_network_nodejs_bundle_.nodejsnode.md#static-create)

## Type aliases

### `Static` Events

Ƭ **Events**: *"peer:connect" | "peer:disconnect" | "peer:discovery" | "start" | "stop"*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:88

___

### `Static` Options

Ƭ **Options**: *object*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:71

#### Type declaration:

* **config**: *[OptionsConfig](_network_nodejs_bundle_.nodejsnode.md#static-optionsconfig)*

* **modules**: *[OptionsModules](_network_nodejs_bundle_.nodejsnode.md#static-optionsmodules)*

* **peerInfo**: *PeerInfo*

___

### `Static` OptionsConfig

Ƭ **OptionsConfig**: *object*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:18

#### Type declaration:

* **contentRouting**(): *object*

* **dht**(): *object*

  * **kBucketSize**? : *number*

* **peerDiscovery**(): *object*

  * **autoDial**? : *boolean*

  * **bootstrap**(): *object*

    * **enabled**? : *boolean*

    * **interval**? : *number*

    * **list**: *Array‹string | Multiaddr›*

  * **enabled**? : *boolean*

  * **mdns**(): *object*

    * **broadcast**? : *boolean*

    * **enabled**? : *boolean*

    * **interval**? : *number*

    * **peerInfo**: *PeerInfo*

    * **port**? : *number*

    * **serviceTag**? : *string*

  * **webRTCStar**(): *object*

    * **enabled**? : *boolean*

    * **interval**? : *number*

  * **websocketStar**(): *object*

    * **enabled**? : *boolean*

* **peerRouting**(): *object*

* **pubsub**(): *object*

  * **emitSelf**? : *boolean*

  * **enabled**? : *boolean*

  * **signMessages**? : *boolean*

  * **strictSigning**? : *boolean*

* **relay**(): *object*

  * **enabled**? : *boolean*

  * **hop**(): *object*

    * **active**? : *boolean*

    * **enabled**? : *boolean*

___

### `Static` OptionsModules

Ƭ **OptionsModules**: *object*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:63

#### Type declaration:

* **connEncryption**? : *Array‹[ConnectionEncryption](../interfaces/_network_nodejs_bundle_.nodejsnode.connectionencryption.md)›*

* **dht**? : *typeof LibP2pKadDht*

* **peerDiscovery**: *Array‹typeof LibP2pBootstrap | typeof LibP2pMdns | Discv5Discovery›*

* **streamMuxer**: *Array‹LibP2pMplex | LibP2pSpdy›*

* **transport**: *LibP2pTransport[]*

## Constructors

###  constructor

\+ **new NodejsNode**(`options`: [ILibp2pOptions](../interfaces/_network_nodejs_bundle_.ilibp2poptions.md)): *[NodejsNode](_network_nodejs_bundle_.nodejsnode.md)*

*Overrides void*

*Defined in [packages/lodestar/src/network/nodejs/bundle.ts:28](https://github.com/ChainSafe/lodestar/blob/be953aad3/packages/lodestar/src/network/nodejs/bundle.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ILibp2pOptions](../interfaces/_network_nodejs_bundle_.ilibp2poptions.md) |

**Returns:** *[NodejsNode](_network_nodejs_bundle_.nodejsnode.md)*

## Properties

###  _dht

• **_dht**: *LibP2pKadDht*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[_dht](_network_nodejs_bundle_.nodejsnode.md#_dht)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:103

___

###  _discovery

• **_discovery**: *Map‹"bootstrap" | "mdns" | "discv5", LibP2pBootstrap | LibP2pMdns | Discv5Discovery›*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[_discovery](_network_nodejs_bundle_.nodejsnode.md#_discovery)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:112

___

###  peerInfo

• **peerInfo**: *PeerInfo*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[peerInfo](_network_nodejs_bundle_.nodejsnode.md#peerinfo)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:109

___

###  peerStore

• **peerStore**: *PeerStore*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[peerStore](_network_nodejs_bundle_.nodejsnode.md#peerstore)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:110

___

###  registrar

• **registrar**: *Registrar*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[registrar](_network_nodejs_bundle_.nodejsnode.md#registrar)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:111

## Methods

###  dial

▸ **dial**(`peerInfo`: PeerInfo | PeerId | Multiaddr | string, `options?`: Object): *Promise‹LibP2pConnection | object›*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[dial](_network_nodejs_bundle_.nodejsnode.md#dial)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:114

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo &#124; PeerId &#124; Multiaddr &#124; string |
`options?` | Object |

**Returns:** *Promise‹LibP2pConnection | object›*

___

###  dialProtocol

▸ **dialProtocol**(`peerInfo`: PeerInfo | PeerId | Multiaddr | string, `protocols`: string[] | string, `options?`: Object): *Promise‹LibP2pConnection | object›*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[dialProtocol](_network_nodejs_bundle_.nodejsnode.md#dialprotocol)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:115

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo &#124; PeerId &#124; Multiaddr &#124; string |
`protocols` | string[] &#124; string |
`options?` | Object |

**Returns:** *Promise‹LibP2pConnection | object›*

___

###  handle

▸ **handle**(`protocols`: string[] | string, `handler`: function): *void*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[handle](_network_nodejs_bundle_.nodejsnode.md#handle)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:117

**Parameters:**

▪ **protocols**: *string[] | string*

▪ **handler**: *function*

▸ (`param`: object): *void*

**Parameters:**

▪ **param**: *object*

Name | Type |
------ | ------ |
`connection` | LibP2pConnection |
`protocol` | string |
`stream` | Stream |

**Returns:** *void*

___

###  hangUp

▸ **hangUp**(`peerInfo`: PeerInfo | PeerId | Multiaddr | string): *Promise‹void›*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[hangUp](_network_nodejs_bundle_.nodejsnode.md#hangup)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:116

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo &#124; PeerId &#124; Multiaddr &#124; string |

**Returns:** *Promise‹void›*

___

###  isStarted

▸ **isStarted**(): *boolean*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[isStarted](_network_nodejs_bundle_.nodejsnode.md#isstarted)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:119

**Returns:** *boolean*

___

###  on

▸ **on**(`event`: LibP2p.Events, `cb`: function): *this*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[on](_network_nodejs_bundle_.nodejsnode.md#on)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:120

**Parameters:**

▪ **event**: *LibP2p.Events*

▪ **cb**: *function*

▸ (`event`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

**Returns:** *this*

___

###  once

▸ **once**(`event`: LibP2p.Events, `cb`: function): *this*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[once](_network_nodejs_bundle_.nodejsnode.md#once)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:121

**Parameters:**

▪ **event**: *LibP2p.Events*

▪ **cb**: *function*

▸ (`event`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

**Returns:** *this*

___

###  ping

▸ **ping**(`peerInfo`: PeerInfo | PeerId | Multiaddr | string): *Promise‹void›*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[ping](_network_nodejs_bundle_.nodejsnode.md#ping)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:123

**Parameters:**

Name | Type |
------ | ------ |
`peerInfo` | PeerInfo &#124; PeerId &#124; Multiaddr &#124; string |

**Returns:** *Promise‹void›*

___

###  removeListener

▸ **removeListener**(`event`: LibP2p.Events, `cb`: function): *this*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[removeListener](_network_nodejs_bundle_.nodejsnode.md#removelistener)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:122

**Parameters:**

▪ **event**: *LibP2p.Events*

▪ **cb**: *function*

▸ (`event`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

**Returns:** *this*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[start](_network_nodejs_bundle_.nodejsnode.md#start)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:124

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[stop](_network_nodejs_bundle_.nodejsnode.md#stop)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:125

**Returns:** *Promise‹void›*

___

###  unhandle

▸ **unhandle**(`protocols`: string[] | string): *void*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[unhandle](_network_nodejs_bundle_.nodejsnode.md#unhandle)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:118

**Parameters:**

Name | Type |
------ | ------ |
`protocols` | string[] &#124; string |

**Returns:** *void*

___

### `Static` create

▸ **create**(`options`: LibP2p.Options): *Promise‹LibP2p›*

*Inherited from [NodejsNode](_network_nodejs_bundle_.nodejsnode.md).[create](_network_nodejs_bundle_.nodejsnode.md#static-create)*

Defined in node_modules/libp2p-ts/types/libp2p/index.d.ts:107

**Parameters:**

Name | Type |
------ | ------ |
`options` | LibP2p.Options |

**Returns:** *Promise‹LibP2p›*
