[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["api/rest/interface"](_api_rest_interface_.md)

# External module: "api/rest/interface"

## Index

### Interfaces

* [ILodestarApiOpts](../interfaces/_api_rest_interface_.ilodestarapiopts.md)
* [IRestApiModules](../interfaces/_api_rest_interface_.irestapimodules.md)

### Type aliases

* [LodestarApiPlugin](_api_rest_interface_.md#lodestarapiplugin)
* [LodestarRestApiEndpoint](_api_rest_interface_.md#lodestarrestapiendpoint)

## Type aliases

###  LodestarApiPlugin

Ƭ **LodestarApiPlugin**: *Plugin‹Server, IncomingMessage, ServerResponse, [ILodestarApiOpts](../interfaces/_api_rest_interface_.ilodestarapiopts.md)›*

*Defined in [packages/lodestar/src/api/rest/interface.ts:16](https://github.com/ChainSafe/lodestar/blob/16dbdb2e2/packages/lodestar/src/api/rest/interface.ts#L16)*

___

###  LodestarRestApiEndpoint

Ƭ **LodestarRestApiEndpoint**: *function*

*Defined in [packages/lodestar/src/api/rest/interface.ts:17](https://github.com/ChainSafe/lodestar/blob/16dbdb2e2/packages/lodestar/src/api/rest/interface.ts#L17)*

#### Type declaration:

▸ (`server`: FastifyInstance, `opts`: [ILodestarApiOpts](../interfaces/_api_rest_interface_.ilodestarapiopts.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`server` | FastifyInstance |
`opts` | [ILodestarApiOpts](../interfaces/_api_rest_interface_.ilodestarapiopts.md) |
