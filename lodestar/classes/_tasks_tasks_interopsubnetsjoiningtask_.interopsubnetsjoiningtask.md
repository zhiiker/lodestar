[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["tasks/tasks/interopSubnetsJoiningTask"](../modules/_tasks_tasks_interopsubnetsjoiningtask_.md) › [InteropSubnetsJoiningTask](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md)

# Class: InteropSubnetsJoiningTask

## Hierarchy

* **InteropSubnetsJoiningTask**

## Implements

* [ITask](../interfaces/_tasks_interface_.itask.md)

## Index

### Constructors

* [constructor](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#constructor)

### Properties

* [chain](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-chain)
* [config](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-config)
* [network](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-network)
* [timers](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-timers)

### Methods

* [handleChangeSubnets](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-handlechangesubnets)
* [handleWireAttestation](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-handlewireattestation)
* [run](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#run)
* [stop](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#stop)
* [subscribeToRandomSubnet](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-subscribetorandomsubnet)

## Constructors

###  constructor

\+ **new InteropSubnetsJoiningTask**(`config`: IBeaconConfig, `modules`: [IInteropSubnetsJoiningModules](../interfaces/_tasks_tasks_interopsubnetsjoiningtask_.iinteropsubnetsjoiningmodules.md)): *[InteropSubnetsJoiningTask](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:20](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`modules` | [IInteropSubnetsJoiningModules](../interfaces/_tasks_tasks_interopsubnetsjoiningtask_.iinteropsubnetsjoiningmodules.md) |

**Returns:** *[InteropSubnetsJoiningTask](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:18](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L18)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:16](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L16)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:17](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L17)*

___

### `Private` timers

• **timers**: *Timeout[]* = []

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:20](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L20)*

## Methods

### `Private` handleChangeSubnets

▸ **handleChangeSubnets**(`forkDigest`: ForkDigest, `subnet`: number): *Promise‹void›*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:67](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |
`subnet` | number |

**Returns:** *Promise‹void›*

___

### `Private` handleWireAttestation

▸ **handleWireAttestation**(): *void*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:72](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L72)*

**Returns:** *void*

___

###  run

▸ **run**(): *Promise‹void›*

*Implementation of [ITask](../interfaces/_tasks_interface_.itask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:28](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L28)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:35](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L35)*

**Returns:** *Promise‹void›*

___

### `Private` subscribeToRandomSubnet

▸ **subscribeToRandomSubnet**(`forkDigest`: ForkDigest): *number*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:44](https://github.com/ChainSafe/lodestar/blob/0e426d2/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *number*

choosen subnet
