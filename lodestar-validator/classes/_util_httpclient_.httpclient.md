[@chainsafe/lodestar-validator](../README.md) › [Globals](../globals.md) › ["util/httpClient"](../modules/_util_httpclient_.md) › [HttpClient](_util_httpclient_.httpclient.md)

# Class: HttpClient

## Hierarchy

* **HttpClient**

## Index

### Constructors

* [constructor](_util_httpclient_.httpclient.md#constructor)

### Properties

* [client](_util_httpclient_.httpclient.md#private-client)
* [logger](_util_httpclient_.httpclient.md#private-logger)

### Methods

* [get](_util_httpclient_.httpclient.md#get)
* [post](_util_httpclient_.httpclient.md#post)

## Constructors

###  constructor

\+ **new HttpClient**(`opt`: Partial‹[IHttpClientOptions](../interfaces/_util_httpclient_.ihttpclientoptions.md)›, `__namedParameters`: object): *[HttpClient](_util_httpclient_.httpclient.md)*

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:11](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar-validator/src/util/httpClient.ts#L11)*

**Parameters:**

▪ **opt**: *Partial‹[IHttpClientOptions](../interfaces/_util_httpclient_.ihttpclientoptions.md)›*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`logger` | ILogger |

**Returns:** *[HttpClient](_util_httpclient_.httpclient.md)*

## Properties

### `Private` client

• **client**: *AxiosInstance*

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:10](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar-validator/src/util/httpClient.ts#L10)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:11](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar-validator/src/util/httpClient.ts#L11)*

## Methods

###  get

▸ **get**<**T**>(`url`: string): *Promise‹T›*

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:20](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar-validator/src/util/httpClient.ts#L20)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹T›*

___

###  post

▸ **post**<**T**, **T2**>(`url`: string, `data`: T): *Promise‹T2›*

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:31](https://github.com/ChainSafe/lodestar/blob/8ae83570a/packages/lodestar-validator/src/util/httpClient.ts#L31)*

**Type parameters:**

▪ **T**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | T |

**Returns:** *Promise‹T2›*
