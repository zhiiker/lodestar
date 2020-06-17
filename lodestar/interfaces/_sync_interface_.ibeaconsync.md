[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["sync/interface"](../modules/_sync_interface_.md) › [IBeaconSync](_sync_interface_.ibeaconsync.md)

# Interface: IBeaconSync

## Hierarchy

* [IService](_node_nodejs_.iservice.md)

  ↳ **IBeaconSync**

## Implemented by

* [BeaconSync](../classes/_sync_sync_.beaconsync.md)

## Index

### Methods

* [collectAttestations](_sync_interface_.ibeaconsync.md#collectattestations)
* [getSyncStatus](_sync_interface_.ibeaconsync.md#getsyncstatus)
* [isSynced](_sync_interface_.ibeaconsync.md#issynced)
* [start](_sync_interface_.ibeaconsync.md#start)
* [stop](_sync_interface_.ibeaconsync.md#stop)

## Methods

###  collectAttestations

▸ **collectAttestations**(`slot`: Slot, `committeeIndex`: CommitteeIndex): *void*

*Defined in [packages/lodestar/src/sync/interface.ts:18](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/sync/interface.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |
`committeeIndex` | CommitteeIndex |

**Returns:** *void*

___

###  getSyncStatus

▸ **getSyncStatus**(): *Promise‹SyncingStatus | null›*

*Defined in [packages/lodestar/src/sync/interface.ts:16](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/sync/interface.ts#L16)*

**Returns:** *Promise‹SyncingStatus | null›*

___

###  isSynced

▸ **isSynced**(): *boolean*

*Defined in [packages/lodestar/src/sync/interface.ts:17](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/sync/interface.ts#L17)*

**Returns:** *boolean*

___

###  start

▸ **start**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[start](_network_gossip_interface_.igossip.md#start)*

*Defined in [packages/lodestar/src/node/nodejs.ts:25](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/node/nodejs.ts#L25)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Inherited from [IGossip](_network_gossip_interface_.igossip.md).[stop](_network_gossip_interface_.igossip.md#stop)*

*Defined in [packages/lodestar/src/node/nodejs.ts:27](https://github.com/ChainSafe/lodestar/blob/53533586a/packages/lodestar/src/node/nodejs.ts#L27)*

**Returns:** *Promise‹void›*
