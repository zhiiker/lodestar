[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["network/error"](../modules/_network_error_.md) › [RpcError](_network_error_.rpcerror.md)

# Class: RpcError

Error of network req/resp

## Hierarchy

* [Error](_network_error_.rpcerror.md#static-error)

  ↳ **RpcError**

## Index

### Constructors

* [constructor](_network_error_.rpcerror.md#constructor)

### Properties

* [message](_network_error_.rpcerror.md#message)
* [name](_network_error_.rpcerror.md#name)
* [stack](_network_error_.rpcerror.md#optional-stack)
* [status](_network_error_.rpcerror.md#status)
* [Error](_network_error_.rpcerror.md#static-error)

## Constructors

###  constructor

\+ **new RpcError**(`status`: [RpcResponseStatus](../enums/_constants_network_.rpcresponsestatus.md), `message?`: string): *[RpcError](_network_error_.rpcerror.md)*

*Defined in [packages/lodestar/src/network/error.ts:8](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/error.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`status` | [RpcResponseStatus](../enums/_constants_network_.rpcresponsestatus.md) |
`message?` | string |

**Returns:** *[RpcError](_network_error_.rpcerror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [RpcError](_network_error_.rpcerror.md).[message](_network_error_.rpcerror.md#message)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [RpcError](_network_error_.rpcerror.md).[name](_network_error_.rpcerror.md#name)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [RpcError](_network_error_.rpcerror.md).[stack](_network_error_.rpcerror.md#optional-stack)*

*Overrides [RpcError](_network_error_.rpcerror.md).[stack](_network_error_.rpcerror.md#optional-stack)*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:975

___

###  status

• **status**: *[RpcResponseStatus](../enums/_constants_network_.rpcresponsestatus.md)*

*Defined in [packages/lodestar/src/network/error.ts:8](https://github.com/ChainSafe/lodestar/blob/e5567ed22/packages/lodestar/src/network/error.ts#L8)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:984
