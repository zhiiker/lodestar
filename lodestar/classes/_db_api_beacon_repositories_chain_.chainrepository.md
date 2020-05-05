[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/beacon/repositories/chain"](../modules/_db_api_beacon_repositories_chain_.md) › [ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)

# Class: ChainRepository

## Hierarchy

* **ChainRepository**

## Index

### Constructors

* [constructor](_db_api_beacon_repositories_chain_.chainrepository.md#constructor)

### Properties

* [config](_db_api_beacon_repositories_chain_.chainrepository.md#private-config)
* [db](_db_api_beacon_repositories_chain_.chainrepository.md#private-db)

### Methods

* [encodeKey](_db_api_beacon_repositories_chain_.chainrepository.md#encodekey)
* [getBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getblockroot)
* [getChainHeadRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getchainheadroot)
* [getChainHeadSlot](_db_api_beacon_repositories_chain_.chainrepository.md#getchainheadslot)
* [getFinalizedBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getfinalizedblockroot)
* [getFinalizedStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getfinalizedstateroot)
* [getJustifiedBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getjustifiedblockroot)
* [getJustifiedStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getjustifiedstateroot)
* [getLatestStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getlateststateroot)
* [setChainHeadSlot](_db_api_beacon_repositories_chain_.chainrepository.md#setchainheadslot)
* [setFinalizedBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setfinalizedblockroot)
* [setFinalizedStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setfinalizedstateroot)
* [setJustifiedBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setjustifiedblockroot)
* [setJustifiedStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setjustifiedstateroot)
* [setLatestStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setlateststateroot)

## Constructors

###  constructor

\+ **new ChainRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›): *[ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:10](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer› |

**Returns:** *[ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:9](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L9)*

___

### `Private` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)‹Buffer, Buffer›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:10](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L10)*

## Methods

###  encodeKey

▸ **encodeKey**(`id`: [Key](../enums/_db_api_schema_.key.md)): *Buffer*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:17](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Key](../enums/_db_api_schema_.key.md) |

**Returns:** *Buffer*

___

###  getBlockRoot

▸ **getBlockRoot**(`slot`: Slot): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:70](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹Uint8Array | null›*

___

###  getChainHeadRoot

▸ **getChainHeadRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:94](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L94)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getChainHeadSlot

▸ **getChainHeadSlot**(): *Promise‹Slot | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:78](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L78)*

**Returns:** *Promise‹Slot | null›*

___

###  getFinalizedBlockRoot

▸ **getFinalizedBlockRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:54](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L54)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getFinalizedStateRoot

▸ **getFinalizedStateRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:43](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L43)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getJustifiedBlockRoot

▸ **getJustifiedBlockRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:62](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L62)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getJustifiedStateRoot

▸ **getJustifiedStateRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:32](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L32)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getLatestStateRoot

▸ **getLatestStateRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:21](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L21)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  setChainHeadSlot

▸ **setChainHeadSlot**(`slot`: number): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:90](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | number |

**Returns:** *Promise‹void›*

___

###  setFinalizedBlockRoot

▸ **setFinalizedBlockRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:58](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*

___

###  setFinalizedStateRoot

▸ **setFinalizedStateRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:47](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*

___

###  setJustifiedBlockRoot

▸ **setJustifiedBlockRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:66](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*

___

###  setJustifiedStateRoot

▸ **setJustifiedStateRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:36](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*

___

###  setLatestStateRoot

▸ **setLatestStateRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:25](https://github.com/ChainSafe/lodestar/blob/ffd9c8178/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*
