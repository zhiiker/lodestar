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

* [getBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getblockroot)
* [getChainHeadRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getchainheadroot)
* [getChainHeadSlot](_db_api_beacon_repositories_chain_.chainrepository.md#getchainheadslot)
* [getFinalizedBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getfinalizedblockroot)
* [getFinalizedStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getfinalizedstateroot)
* [getJustifiedBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getjustifiedblockroot)
* [getJustifiedStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getjustifiedstateroot)
* [getKey](_db_api_beacon_repositories_chain_.chainrepository.md#getkey)
* [getLatestStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#getlateststateroot)
* [setChainHeadSlot](_db_api_beacon_repositories_chain_.chainrepository.md#setchainheadslot)
* [setFinalizedBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setfinalizedblockroot)
* [setFinalizedStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setfinalizedstateroot)
* [setJustifiedBlockRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setjustifiedblockroot)
* [setJustifiedStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setjustifiedstateroot)
* [setLatestStateRoot](_db_api_beacon_repositories_chain_.chainrepository.md#setlateststateroot)

## Constructors

###  constructor

\+ **new ChainRepository**(`config`: IBeaconConfig, `db`: [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)): *[ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:11](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | [IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md) |

**Returns:** *[ChainRepository](_db_api_beacon_repositories_chain_.chainrepository.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:9](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L9)*

___

### `Private` db

• **db**: *[IDatabaseController](../interfaces/_db_controller_interface_.idatabasecontroller.md)*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:11](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L11)*

## Methods

###  getBlockRoot

▸ **getBlockRoot**(`slot`: Slot): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:71](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | Slot |

**Returns:** *Promise‹Uint8Array | null›*

___

###  getChainHeadRoot

▸ **getChainHeadRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:95](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L95)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getChainHeadSlot

▸ **getChainHeadSlot**(): *Promise‹Slot | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:79](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L79)*

**Returns:** *Promise‹Slot | null›*

___

###  getFinalizedBlockRoot

▸ **getFinalizedBlockRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:55](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L55)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getFinalizedStateRoot

▸ **getFinalizedStateRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:44](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L44)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getJustifiedBlockRoot

▸ **getJustifiedBlockRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:63](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L63)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getJustifiedStateRoot

▸ **getJustifiedStateRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:33](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L33)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  getKey

▸ **getKey**(`id`: [Key](../enums/_db_schema_.key.md)): *Buffer | string*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:18](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [Key](../enums/_db_schema_.key.md) |

**Returns:** *Buffer | string*

___

###  getLatestStateRoot

▸ **getLatestStateRoot**(): *Promise‹Uint8Array | null›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:22](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L22)*

**Returns:** *Promise‹Uint8Array | null›*

___

###  setChainHeadSlot

▸ **setChainHeadSlot**(`slot`: number): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:91](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`slot` | number |

**Returns:** *Promise‹void›*

___

###  setFinalizedBlockRoot

▸ **setFinalizedBlockRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:59](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*

___

###  setFinalizedStateRoot

▸ **setFinalizedStateRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:48](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*

___

###  setJustifiedBlockRoot

▸ **setJustifiedBlockRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:67](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*

___

###  setJustifiedStateRoot

▸ **setJustifiedStateRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:37](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*

___

###  setLatestStateRoot

▸ **setLatestStateRoot**(`root`: Uint8Array): *Promise‹void›*

*Defined in [packages/lodestar/src/db/api/beacon/repositories/chain.ts:26](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/db/api/beacon/repositories/chain.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`root` | Uint8Array |

**Returns:** *Promise‹void›*
