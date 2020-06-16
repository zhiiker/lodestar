[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/network/enr"](_lodecli_network_enr_.md)

# External module: "lodecli/network/enr"

## Index

### Functions

* [createEnr](_lodecli_network_enr_.md#createenr)
* [initEnr](_lodecli_network_enr_.md#initenr)
* [readEnr](_lodecli_network_enr_.md#readenr)
* [writeEnr](_lodecli_network_enr_.md#writeenr)

## Functions

###  createEnr

▸ **createEnr**(`peerId`: PeerId): *Promise‹ENR›*

*Defined in [packages/lodestar-cli/src/lodecli/network/enr.ts:7](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-cli/src/lodecli/network/enr.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`peerId` | PeerId |

**Returns:** *Promise‹ENR›*

___

###  initEnr

▸ **initEnr**(`filename`: string, `peerId`: PeerId): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/lodecli/network/enr.ts:21](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-cli/src/lodecli/network/enr.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |
`peerId` | PeerId |

**Returns:** *Promise‹void›*

___

###  readEnr

▸ **readEnr**(`filename`: string): *Promise‹ENR›*

*Defined in [packages/lodestar-cli/src/lodecli/network/enr.ts:17](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-cli/src/lodecli/network/enr.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |

**Returns:** *Promise‹ENR›*

___

###  writeEnr

▸ **writeEnr**(`filename`: string, `enr`: ENR, `peerId`: PeerId): *Promise‹void›*

*Defined in [packages/lodestar-cli/src/lodecli/network/enr.ts:12](https://github.com/ChainSafe/lodestar/blob/08fb27fc7/packages/lodestar-cli/src/lodecli/network/enr.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`filename` | string |
`enr` | ENR |
`peerId` | PeerId |

**Returns:** *Promise‹void›*
