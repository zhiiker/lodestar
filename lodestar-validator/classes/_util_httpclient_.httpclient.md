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

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:16](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-validator/src/util/httpClient.ts#L16)*

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

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:15](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-validator/src/util/httpClient.ts#L15)*

___

### `Private` logger

• **logger**: *ILogger*

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:16](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-validator/src/util/httpClient.ts#L16)*

## Methods

###  get

▸ **get**<**T**>(`url`: string, `query?`: [IHttpQuery](../interfaces/_util_httpclient_.ihttpquery.md)): *Promise‹T›*

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:25](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-validator/src/util/httpClient.ts#L25)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`query?` | [IHttpQuery](../interfaces/_util_httpclient_.ihttpquery.md) |

**Returns:** *Promise‹T›*

___

###  post

▸ **post**<**T**, **T2**>(`url`: string, `data`: T, `query?`: [IHttpQuery](../interfaces/_util_httpclient_.ihttpquery.md)): *Promise‹T2›*

*Defined in [packages/lodestar-validator/src/util/httpClient.ts:37](https://github.com/ChainSafe/lodestar/blob/bbe465408/packages/lodestar-validator/src/util/httpClient.ts#L37)*

**Type parameters:**

▪ **T**

▪ **T2**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | T |
`query?` | [IHttpQuery](../interfaces/_util_httpclient_.ihttpquery.md) |

**Returns:** *Promise‹T2›*
