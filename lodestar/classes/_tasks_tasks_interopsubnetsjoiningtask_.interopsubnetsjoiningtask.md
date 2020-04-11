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

* [config](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-config)
* [network](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-network)

### Methods

* [handleChangeSubnets](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-handlechangesubnets)
* [handleWireAttestation](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-handlewireattestation)
* [run](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#run)
* [subscribeToRandomSubnet](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-subscribetorandomsubnet)

## Constructors

###  constructor

\+ **new InteropSubnetsJoiningTask**(`config`: IBeaconConfig, `modules`: [IInteropSubnetsJoiningModules](../interfaces/_tasks_tasks_interopsubnetsjoiningtask_.iinteropsubnetsjoiningmodules.md)): *[InteropSubnetsJoiningTask](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:14](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`modules` | [IInteropSubnetsJoiningModules](../interfaces/_tasks_tasks_interopsubnetsjoiningtask_.iinteropsubnetsjoiningmodules.md) |

**Returns:** *[InteropSubnetsJoiningTask](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md)*

## Properties

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:13](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L13)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:14](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L14)*

## Methods

### `Private` handleChangeSubnets

▸ **handleChangeSubnets**(`subnet`: number): *void*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:49](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`subnet` | number |

**Returns:** *void*

___

### `Private` handleWireAttestation

▸ **handleWireAttestation**(): *void*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:54](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L54)*

**Returns:** *void*

___

###  run

▸ **run**(): *Promise‹void›*

*Implementation of [ITask](../interfaces/_tasks_interface_.itask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:21](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L21)*

**Returns:** *Promise‹void›*

___

### `Private` subscribeToRandomSubnet

▸ **subscribeToRandomSubnet**(): *number*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:32](https://github.com/ChainSafe/lodestar/blob/2fb982b/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L32)*

**Returns:** *number*

choosen subnet
