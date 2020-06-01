[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › [validator](../modules/validator.md) › [Validator](validator.validator-1.md)

# Class: Validator

Main class for the Validator client.

## Hierarchy

* **Validator**

## Index

### Constructors

* [constructor](validator.validator-1.md#constructor)

### Properties

* [apiClient](validator.validator-1.md#private-apiclient)
* [attestationService](validator.validator-1.md#private-attestationservice)
* [blockService](validator.validator-1.md#private-blockservice)
* [config](validator.validator-1.md#private-config)
* [db](validator.validator-1.md#private-db)
* [isRunning](validator.validator-1.md#private-isrunning)
* [logger](validator.validator-1.md#private-logger)
* [opts](validator.validator-1.md#private-opts)

### Methods

* [initApiClient](validator.validator-1.md#private-initapiclient)
* [run](validator.validator-1.md#run)
* [setup](validator.validator-1.md#private-setup)
* [setupAPI](validator.validator-1.md#private-setupapi)
* [start](validator.validator-1.md#start)
* [stop](validator.validator-1.md#stop)

## Constructors

###  constructor

\+ **new Validator**(`opts`: [IValidatorOptions](../interfaces/_options_.ivalidatoroptions.md)): *[Validator](validator.validator-1.md)*

*Defined in [packages/lodestar-validator/src/validator.ts:37](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`opts` | [IValidatorOptions](../interfaces/_options_.ivalidatoroptions.md) |

**Returns:** *[Validator](validator.validator-1.md)*

## Properties

### `Private` apiClient

• **apiClient**: *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/validator.ts:32](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L32)*

___

### `Private` attestationService

• **attestationService**: *[AttestationService](_services_attestation_.attestationservice.md)*

*Defined in [packages/lodestar-validator/src/validator.ts:34](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L34)*

___

### `Private` blockService

• **blockService**: *[BlockProposingService](_services_block_.blockproposingservice.md)*

*Defined in [packages/lodestar-validator/src/validator.ts:33](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L33)*

___

### `Private` config

• **config**: *IBeaconConfig*

*Defined in [packages/lodestar-validator/src/validator.ts:31](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L31)*

___

### `Private` db

• **db**: *[IValidatorDB](../interfaces/_db_interface_.ivalidatordb.md)*

*Defined in [packages/lodestar-validator/src/validator.ts:35](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L35)*

___

### `Private` isRunning

• **isRunning**: *boolean*

*Defined in [packages/lodestar-validator/src/validator.ts:37](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L37)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar-validator/src/validator.ts:36](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L36)*

___

### `Private` opts

• **opts**: *[IValidatorOptions](../interfaces/_options_.ivalidatoroptions.md)*

*Defined in [packages/lodestar-validator/src/validator.ts:30](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L30)*

## Methods

### `Private` initApiClient

▸ **initApiClient**(`api`: string | [IApiClient](../interfaces/_api_interface_.iapiclient.md)): *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

*Defined in [packages/lodestar-validator/src/validator.ts:77](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | string &#124; [IApiClient](../interfaces/_api_interface_.iapiclient.md) |

**Returns:** *[IApiClient](../interfaces/_api_interface_.iapiclient.md)*

___

###  run

▸ **run**(): *void*

*Defined in [packages/lodestar-validator/src/validator.ts:59](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L59)*

**Returns:** *void*

___

### `Private` setup

▸ **setup**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/validator.ts:84](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L84)*

**Returns:** *Promise‹void›*

___

### `Private` setupAPI

▸ **setupAPI**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/validator.ts:108](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L108)*

Establishes a connection to a specified beacon chain url.

**Returns:** *Promise‹void›*

___

###  start

▸ **start**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/validator.ts:51](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L51)*

Creates a new block processing service and starts it.

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *Promise‹void›*

*Defined in [packages/lodestar-validator/src/validator.ts:72](https://github.com/ChainSafe/lodestar/blob/26046d408/packages/lodestar-validator/src/validator.ts#L72)*

Stops all validator functions

**Returns:** *Promise‹void›*
