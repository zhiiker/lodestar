[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["validator/nodejs"](../modules/_validator_nodejs_.md) › [ValidatorClient](_validator_nodejs_.validatorclient.md)

# Class: ValidatorClient

## Hierarchy

* **ValidatorClient**

## Implements

* [IService](../interfaces/_node_nodejs_.iservice.md)

## Index

### Constructors

* [constructor](_validator_nodejs_.validatorclient.md#constructor)

### Properties

* [logger](_validator_nodejs_.validatorclient.md#private-logger)
* [opts](_validator_nodejs_.validatorclient.md#private-opts)
* [validator](_validator_nodejs_.validatorclient.md#private-validator)

### Methods

* [initDb](_validator_nodejs_.validatorclient.md#private-initdb)
* [start](_validator_nodejs_.validatorclient.md#start)
* [stop](_validator_nodejs_.validatorclient.md#stop)

## Constructors

###  constructor

\+ **new ValidatorClient**(`opts`: Partial‹[IValidatorClientOptions](../interfaces/_validator_options_.ivalidatorclientoptions.md)›, `modules`: object): *[ValidatorClient](_validator_nodejs_.validatorclient.md)*

*Defined in [packages/lodestar/src/validator/nodejs.ts:17](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/validator/nodejs.ts#L17)*

**Parameters:**

▪ **opts**: *Partial‹[IValidatorClientOptions](../interfaces/_validator_options_.ivalidatorclientoptions.md)›*

▪ **modules**: *object*

Name | Type |
------ | ------ |
`logger` | ILogger |

**Returns:** *[ValidatorClient](_validator_nodejs_.validatorclient.md)*

## Properties

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar/src/validator/nodejs.ts:15](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/validator/nodejs.ts#L15)*

___

### `Private` opts

• **opts**: *[IValidatorClientOptions](../interfaces/_validator_options_.ivalidatorclientoptions.md)*

*Defined in [packages/lodestar/src/validator/nodejs.ts:16](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/validator/nodejs.ts#L16)*

___

### `Private` validator

• **validator**: *Validator | null*

*Defined in [packages/lodestar/src/validator/nodejs.ts:17](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/validator/nodejs.ts#L17)*

## Methods

### `Private` initDb

▸ **initDb**(`config`: IBeaconConfig, `db`: string): *[IValidatorDB](../interfaces/_db_api_validator_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar/src/validator/nodejs.ts:45](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/validator/nodejs.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | IBeaconConfig |
`db` | string |

**Returns:** *[IValidatorDB](../interfaces/_db_api_validator_interface_.ivalidatordb.md)*

___

###  start

▸ **start**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/validator/nodejs.ts:27](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/validator/nodejs.ts#L27)*

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Implementation of [IService](../interfaces/_node_nodejs_.iservice.md)*

*Defined in [packages/lodestar/src/validator/nodejs.ts:39](https://github.com/ChainSafe/lodestar/blob/5eceb6c26/packages/lodestar/src/validator/nodejs.ts#L39)*

**Returns:** *Promise‹void›*
