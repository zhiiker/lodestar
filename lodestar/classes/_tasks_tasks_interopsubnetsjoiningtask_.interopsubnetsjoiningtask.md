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
* [forkDigest](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-forkdigest)
* [logger](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-logger)
* [network](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-network)
* [subnets](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-subnets)
* [timers](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-timers)

### Methods

* [cleanUp](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-cleanup)
* [handleChangeSubnets](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-handlechangesubnets)
* [handleForkDigest](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-handleforkdigest)
* [handleWireAttestation](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-handlewireattestation)
* [run](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#run)
* [start](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#start)
* [stop](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#stop)
* [subscribeToRandomSubnet](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md#private-subscribetorandomsubnet)

## Constructors

###  constructor

\+ **new InteropSubnetsJoiningTask**(`config`: IBeaconConfig, `modules`: [IInteropSubnetsJoiningModules](../interfaces/_tasks_tasks_interopsubnetsjoiningtask_.iinteropsubnetsjoiningmodules.md)): *[InteropSubnetsJoiningTask](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:25](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`modules` | [IInteropSubnetsJoiningModules](../interfaces/_tasks_tasks_interopsubnetsjoiningtask_.iinteropsubnetsjoiningmodules.md) |

**Returns:** *[InteropSubnetsJoiningTask](_tasks_tasks_interopsubnetsjoiningtask_.interopsubnetsjoiningtask.md)*

## Properties

### `Private` chain

• **chain**: *[IBeaconChain](../interfaces/_chain_interface_.ibeaconchain.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:20](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L20)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:18](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L18)*

___

### `Private` forkDigest

• **forkDigest**: *ForkDigest*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:23](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L23)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:21](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L21)*

___

### `Private` network

• **network**: *[INetwork](../interfaces/_network_interface_.inetwork.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:19](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L19)*

___

### `Private` subnets

• **subnets**: *Set‹number›*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:22](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L22)*

___

### `Private` timers

• **timers**: *Timeout[]* = []

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:25](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L25)*

## Methods

### `Private` cleanUp

▸ **cleanUp**(): *Promise‹void›*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:59](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L59)*

**Returns:** *Promise‹void›*

___

### `Private` handleChangeSubnets

▸ **handleChangeSubnets**(`forkDigest`: ForkDigest, `subnet`: number): *Promise‹void›*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:94](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |
`subnet` | number |

**Returns:** *Promise‹void›*

___

### `Private` handleForkDigest

▸ **handleForkDigest**(`forkDigest`: ForkDigest): *Promise‹void›*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:52](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *Promise‹void›*

___

### `Private` handleWireAttestation

▸ **handleWireAttestation**(): *void*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:100](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L100)*

**Returns:** *void*

___

###  run

▸ **run**(): *Promise‹void›*

*Implementation of [ITask](../interfaces/_tasks_interface_.itask.md)*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:46](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L46)*

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:35](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L35)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:41](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L41)*

**Returns:** *Promise‹void›*

___

### `Private` subscribeToRandomSubnet

▸ **subscribeToRandomSubnet**(`forkDigest`: ForkDigest): *number*

*Defined in [packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts:70](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar/src/tasks/tasks/interopSubnetsJoiningTask.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`forkDigest` | ForkDigest |

**Returns:** *number*

choosen subnet
