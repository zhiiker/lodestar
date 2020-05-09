[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/interface"](../modules/_chain_interface_.md) › [IChainEvents](_chain_interface_.ichainevents.md)

# Interface: IChainEvents

## Hierarchy

* **IChainEvents**

## Index

### Properties

* [finalizedCheckpoint](_chain_interface_.ichainevents.md#finalizedcheckpoint)
* [forkDigest](_chain_interface_.ichainevents.md#forkdigest)
* [forkDigestChanged](_chain_interface_.ichainevents.md#forkdigestchanged)
* [justifiedCheckpoint](_chain_interface_.ichainevents.md#justifiedcheckpoint)
* [processedAttestation](_chain_interface_.ichainevents.md#processedattestation)
* [processedBlock](_chain_interface_.ichainevents.md#processedblock)
* [processedCheckpoint](_chain_interface_.ichainevents.md#processedcheckpoint)
* [unknownBlockRoot](_chain_interface_.ichainevents.md#unknownblockroot)

## Properties

###  finalizedCheckpoint

• **finalizedCheckpoint**: *function*

*Defined in [packages/lodestar/src/chain/interface.ts:25](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/chain/interface.ts#L25)*

#### Type declaration:

▸ (`checkpoint`: Checkpoint): *void*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

___

###  forkDigest

• **forkDigest**: *function*

*Defined in [packages/lodestar/src/chain/interface.ts:27](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/chain/interface.ts#L27)*

#### Type declaration:

▸ (`forkDigest`: ForkDigest): *void*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

___

###  forkDigestChanged

• **forkDigestChanged**: *function*

*Defined in [packages/lodestar/src/chain/interface.ts:26](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/chain/interface.ts#L26)*

#### Type declaration:

▸ (): *void*

___

###  justifiedCheckpoint

• **justifiedCheckpoint**: *function*

*Defined in [packages/lodestar/src/chain/interface.ts:24](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/chain/interface.ts#L24)*

#### Type declaration:

▸ (`checkpoint`: Checkpoint): *void*

**Parameters:**

Name | Type |
------ | ------ |
`checkpoint` | Checkpoint |

___

###  processedAttestation

• **processedAttestation**: *function*

*Defined in [packages/lodestar/src/chain/interface.ts:23](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/chain/interface.ts#L23)*

#### Type declaration:

▸ (`attestation`: Attestation): *void*

**Parameters:**

Name | Type |
------ | ------ |
`attestation` | Attestation |

___

###  processedBlock

• **processedBlock**: *function*

*Defined in [packages/lodestar/src/chain/interface.ts:21](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/chain/interface.ts#L21)*

#### Type declaration:

▸ (`signedBlock`: SignedBeaconBlock): *void*

**Parameters:**

Name | Type |
------ | ------ |
`signedBlock` | SignedBeaconBlock |

___

###  processedCheckpoint

• **processedCheckpoint**: *function*

*Defined in [packages/lodestar/src/chain/interface.ts:22](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/chain/interface.ts#L22)*

#### Type declaration:

▸ (`checkPoint`: Checkpoint): *void*

**Parameters:**

Name | Type |
------ | ------ |
`checkPoint` | Checkpoint |

___

###  unknownBlockRoot

• **unknownBlockRoot**: *function*

*Defined in [packages/lodestar/src/chain/interface.ts:20](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/chain/interface.ts#L20)*

#### Type declaration:

▸ (`root`: Root): *void*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Root |
