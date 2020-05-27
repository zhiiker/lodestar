[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["chain/forkChoice/attestationAggregator"](../modules/_chain_forkchoice_attestationaggregator_.md) › [AttestationAggregator](_chain_forkchoice_attestationaggregator_.attestationaggregator.md)

# Class: AttestationAggregator

Keep track of the latest attestations per validator
as well as aggregated attestations per block root

## Hierarchy

* **AttestationAggregator**

## Index

### Constructors

* [constructor](_chain_forkchoice_attestationaggregator_.attestationaggregator.md#constructor)

### Properties

* [latestAggregates](_chain_forkchoice_attestationaggregator_.attestationaggregator.md#latestaggregates)
* [latestAttestations](_chain_forkchoice_attestationaggregator_.attestationaggregator.md#latestattestations)
* [slotLookup](_chain_forkchoice_attestationaggregator_.attestationaggregator.md#private-slotlookup)

### Methods

* [addAttestation](_chain_forkchoice_attestationaggregator_.attestationaggregator.md#addattestation)
* [ensureAggregate](_chain_forkchoice_attestationaggregator_.attestationaggregator.md#private-ensureaggregate)
* [prune](_chain_forkchoice_attestationaggregator_.attestationaggregator.md#prune)

## Constructors

###  constructor

\+ **new AttestationAggregator**(`slotLookup`: function): *[AttestationAggregator](_chain_forkchoice_attestationaggregator_.attestationaggregator.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/attestationAggregator.ts:28](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/chain/forkChoice/attestationAggregator.ts#L28)*

**Parameters:**

▪ **slotLookup**: *function*

▸ (`Root`: string): *Slot | null*

**Parameters:**

Name | Type |
------ | ------ |
`Root` | string |

**Returns:** *[AttestationAggregator](_chain_forkchoice_attestationaggregator_.attestationaggregator.md)*

## Properties

###  latestAggregates

• **latestAggregates**: *Record‹[RootHex](../modules/_chain_forkchoice_interface_.md#roothex), [AggregatedAttestation](../interfaces/_chain_forkchoice_interface_.aggregatedattestation.md)›*

*Defined in [packages/lodestar/src/chain/forkChoice/attestationAggregator.ts:18](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/chain/forkChoice/attestationAggregator.ts#L18)*

aggregation: target -> sum of all attestations

___

###  latestAttestations

• **latestAttestations**: *Record‹ValidatorIndex, [ForkChoiceAttestation](../interfaces/_chain_forkchoice_interface_.forkchoiceattestation.md)›*

*Defined in [packages/lodestar/src/chain/forkChoice/attestationAggregator.ts:23](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/chain/forkChoice/attestationAggregator.ts#L23)*

lookup: validator -> target + weight contributed by validator

___

### `Private` slotLookup

• **slotLookup**: *function*

*Defined in [packages/lodestar/src/chain/forkChoice/attestationAggregator.ts:28](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/chain/forkChoice/attestationAggregator.ts#L28)*

Rather than storing the slot on every attestation, a lookup function is required

#### Type declaration:

▸ (`Root`: string): *Slot | null*

**Parameters:**

Name | Type |
------ | ------ |
`Root` | string |

## Methods

###  addAttestation

▸ **addAttestation**(`a`: [ForkChoiceAttestation](../interfaces/_chain_forkchoice_interface_.forkchoiceattestation.md)): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/attestationAggregator.ts:39](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/chain/forkChoice/attestationAggregator.ts#L39)*

Add an attestion into the aggregator

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ForkChoiceAttestation](../interfaces/_chain_forkchoice_interface_.forkchoiceattestation.md) |

**Returns:** *void*

___

### `Private` ensureAggregate

▸ **ensureAggregate**(`target`: [RootHex](../modules/_chain_forkchoice_interface_.md#roothex)): *[AggregatedAttestation](../interfaces/_chain_forkchoice_interface_.aggregatedattestation.md)*

*Defined in [packages/lodestar/src/chain/forkChoice/attestationAggregator.ts:83](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/chain/forkChoice/attestationAggregator.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | [RootHex](../modules/_chain_forkchoice_interface_.md#roothex) |

**Returns:** *[AggregatedAttestation](../interfaces/_chain_forkchoice_interface_.aggregatedattestation.md)*

___

###  prune

▸ **prune**(): *void*

*Defined in [packages/lodestar/src/chain/forkChoice/attestationAggregator.ts:73](https://github.com/ChainSafe/lodestar/blob/34417abad/packages/lodestar/src/chain/forkChoice/attestationAggregator.ts#L73)*

Remove all unused aggregations

Note: latestAttestations is currently never pruned

**Returns:** *void*
