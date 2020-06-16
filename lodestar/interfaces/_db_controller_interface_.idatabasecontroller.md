[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/controller/interface"](../modules/_db_controller_interface_.md) › [IDatabaseController](_db_controller_interface_.idatabasecontroller.md)

# Interface: IDatabaseController <**K, V**>

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

* **IDatabaseController**

## Implemented by

* [LevelDbController](../classes/_db_controller_impl_level_.leveldbcontroller.md)
* [PouchDbController](../classes/_db_controller_impl_pouch_.pouchdbcontroller.md)

## Index

### Methods

* [batchDelete](_db_controller_interface_.idatabasecontroller.md#batchdelete)
* [batchPut](_db_controller_interface_.idatabasecontroller.md#batchput)
* [delete](_db_controller_interface_.idatabasecontroller.md#delete)
* [entries](_db_controller_interface_.idatabasecontroller.md#entries)
* [entriesStream](_db_controller_interface_.idatabasecontroller.md#entriesstream)
* [get](_db_controller_interface_.idatabasecontroller.md#get)
* [keys](_db_controller_interface_.idatabasecontroller.md#keys)
* [keysStream](_db_controller_interface_.idatabasecontroller.md#keysstream)
* [put](_db_controller_interface_.idatabasecontroller.md#put)
* [start](_db_controller_interface_.idatabasecontroller.md#start)
* [stop](_db_controller_interface_.idatabasecontroller.md#stop)
* [values](_db_controller_interface_.idatabasecontroller.md#values)
* [valuesStream](_db_controller_interface_.idatabasecontroller.md#valuesstream)

## Methods

###  batchDelete

▸ **batchDelete**(`keys`: K[]): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:33](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | K[] |

**Returns:** *Promise‹void›*

___

###  batchPut

▸ **batchPut**(`items`: [IKeyValue](_db_controller_interface_.ikeyvalue.md)‹K, V›[]): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:32](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`items` | [IKeyValue](_db_controller_interface_.ikeyvalue.md)‹K, V›[] |

**Returns:** *Promise‹void›*

___

###  delete

▸ **delete**(`key`: K): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:28](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *Promise‹void›*

___

###  entries

▸ **entries**(`opts?`: [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K›): *Promise‹[IKeyValue](_db_controller_interface_.ikeyvalue.md)‹K, V›[]›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:44](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K› |

**Returns:** *Promise‹[IKeyValue](_db_controller_interface_.ikeyvalue.md)‹K, V›[]›*

___

###  entriesStream

▸ **entriesStream**(`opts?`: [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K›): *AsyncIterable‹[IKeyValue](_db_controller_interface_.ikeyvalue.md)‹K, V››*

*Defined in [packages/lodestar/src/db/controller/interface.ts:43](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K› |

**Returns:** *AsyncIterable‹[IKeyValue](_db_controller_interface_.ikeyvalue.md)‹K, V››*

___

###  get

▸ **get**(`key`: K): *Promise‹V | null›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:26](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |

**Returns:** *Promise‹V | null›*

___

###  keys

▸ **keys**(`opts?`: [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K›): *Promise‹K[]›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:38](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K› |

**Returns:** *Promise‹K[]›*

___

###  keysStream

▸ **keysStream**(`opts?`: [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K›): *AsyncIterable‹K›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:37](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K› |

**Returns:** *AsyncIterable‹K›*

___

###  put

▸ **put**(`key`: K, `value`: V): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:27](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:21](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L21)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:22](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L22)*

**Returns:** *Promise‹void›*

___

###  values

▸ **values**(`opts?`: [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K›): *Promise‹V[]›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:41](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K› |

**Returns:** *Promise‹V[]›*

___

###  valuesStream

▸ **valuesStream**(`opts?`: [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K›): *AsyncIterable‹V›*

*Defined in [packages/lodestar/src/db/controller/interface.ts:40](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar/src/db/controller/interface.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | [IFilterOptions](_db_controller_interface_.ifilteroptions.md)‹K› |

**Returns:** *AsyncIterable‹V›*
