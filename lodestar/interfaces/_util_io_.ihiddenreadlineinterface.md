[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["util/io"](../modules/_util_io_.md) › [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md)

# Interface: IHiddenReadlineInterface

## Hierarchy

* Interface

  ↳ **IHiddenReadlineInterface**

## Index

### Constructors

* [constructor](_util_io_.ihiddenreadlineinterface.md#protected-constructor)

### Properties

* [cursor](_util_io_.ihiddenreadlineinterface.md#cursor)
* [line](_util_io_.ihiddenreadlineinterface.md#line)
* [output](_util_io_.ihiddenreadlineinterface.md#optional-output)
* [terminal](_util_io_.ihiddenreadlineinterface.md#terminal)
* [defaultMaxListeners](_util_io_.ihiddenreadlineinterface.md#static-defaultmaxlisteners)

### Methods

* [[Symbol.asyncIterator]](_util_io_.ihiddenreadlineinterface.md#[symbol.asynciterator])
* [_writeToOutput](_util_io_.ihiddenreadlineinterface.md#optional-_writetooutput)
* [addListener](_util_io_.ihiddenreadlineinterface.md#addlistener)
* [close](_util_io_.ihiddenreadlineinterface.md#close)
* [emit](_util_io_.ihiddenreadlineinterface.md#emit)
* [eventNames](_util_io_.ihiddenreadlineinterface.md#eventnames)
* [getMaxListeners](_util_io_.ihiddenreadlineinterface.md#getmaxlisteners)
* [listenerCount](_util_io_.ihiddenreadlineinterface.md#listenercount)
* [listeners](_util_io_.ihiddenreadlineinterface.md#listeners)
* [off](_util_io_.ihiddenreadlineinterface.md#off)
* [on](_util_io_.ihiddenreadlineinterface.md#on)
* [once](_util_io_.ihiddenreadlineinterface.md#once)
* [pause](_util_io_.ihiddenreadlineinterface.md#pause)
* [prependListener](_util_io_.ihiddenreadlineinterface.md#prependlistener)
* [prependOnceListener](_util_io_.ihiddenreadlineinterface.md#prependoncelistener)
* [prompt](_util_io_.ihiddenreadlineinterface.md#prompt)
* [question](_util_io_.ihiddenreadlineinterface.md#question)
* [rawListeners](_util_io_.ihiddenreadlineinterface.md#rawlisteners)
* [removeAllListeners](_util_io_.ihiddenreadlineinterface.md#removealllisteners)
* [removeListener](_util_io_.ihiddenreadlineinterface.md#removelistener)
* [resume](_util_io_.ihiddenreadlineinterface.md#resume)
* [setMaxListeners](_util_io_.ihiddenreadlineinterface.md#setmaxlisteners)
* [setPrompt](_util_io_.ihiddenreadlineinterface.md#setprompt)
* [write](_util_io_.ihiddenreadlineinterface.md#write)
* [listenerCount](_util_io_.ihiddenreadlineinterface.md#static-listenercount)

## Constructors

### `Protected` constructor

\+ **new IHiddenReadlineInterface**(`input`: ReadableStream, `output?`: WritableStream, `completer?`: Completer | AsyncCompleter, `terminal?`: boolean): *[IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md)*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[constructor](_util_io_.ihiddenreadlineinterface.md#protected-constructor)*

Defined in node_modules/@types/node/readline.d.ts:21

NOTE: According to the documentation:

> Instances of the `readline.Interface` class are constructed using the
> `readline.createInterface()` method.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface

**Parameters:**

Name | Type |
------ | ------ |
`input` | ReadableStream |
`output?` | WritableStream |
`completer?` | Completer &#124; AsyncCompleter |
`terminal?` | boolean |

**Returns:** *[IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md)*

\+ **new IHiddenReadlineInterface**(`options`: ReadLineOptions): *[IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md)*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[constructor](_util_io_.ihiddenreadlineinterface.md#protected-constructor)*

Defined in node_modules/@types/node/readline.d.ts:31

NOTE: According to the documentation:

> Instances of the `readline.Interface` class are constructed using the
> `readline.createInterface()` method.

**`see`** https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface

**Parameters:**

Name | Type |
------ | ------ |
`options` | ReadLineOptions |

**Returns:** *[IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md)*

## Properties

###  cursor

• **cursor**: *number*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[cursor](_util_io_.ihiddenreadlineinterface.md#cursor)*

Defined in node_modules/@types/node/readline.d.ts:21

The current cursor position in the input line

___

###  line

• **line**: *string*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[line](_util_io_.ihiddenreadlineinterface.md#line)*

Defined in node_modules/@types/node/readline.d.ts:19

The current input data

___

### `Optional` output

• **output**? : *any*

*Defined in [packages/lodestar/src/util/io.ts:9](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/util/io.ts#L9)*

___

###  terminal

• **terminal**: *boolean*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[terminal](_util_io_.ihiddenreadlineinterface.md#terminal)*

Defined in node_modules/@types/node/readline.d.ts:14

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[defaultMaxListeners](_network_gossip_interface_.igossipsub.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): *AsyncIterableIterator‹string›*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[[Symbol.asyncIterator]](_util_io_.ihiddenreadlineinterface.md#[symbol.asynciterator])*

Defined in node_modules/@types/node/readline.d.ts:114

**Returns:** *AsyncIterableIterator‹string›*

___

### `Optional` _writeToOutput

▸ **_writeToOutput**(`stringToWrite`: string): *void*

*Defined in [packages/lodestar/src/util/io.ts:10](https://github.com/ChainSafe/lodestar/blob/3dee406/packages/lodestar/src/util/io.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`stringToWrite` | string |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string, `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[addListener](_util_io_.ihiddenreadlineinterface.md#addlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[addListener](_network_gossip_interface_.igossipsub.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:61

events.EventEmitter
1. close
2. line
3. pause
4. resume
5. SIGCONT
6. SIGINT
7. SIGTSTP

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[addListener](_util_io_.ihiddenreadlineinterface.md#addlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[addListener](_network_gossip_interface_.igossipsub.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:62

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "line", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[addListener](_util_io_.ihiddenreadlineinterface.md#addlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[addListener](_network_gossip_interface_.igossipsub.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:63

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **addListener**(`event`: "pause", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[addListener](_util_io_.ihiddenreadlineinterface.md#addlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[addListener](_network_gossip_interface_.igossipsub.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:64

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "resume", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[addListener](_util_io_.ihiddenreadlineinterface.md#addlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[addListener](_network_gossip_interface_.igossipsub.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:65

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "SIGCONT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[addListener](_util_io_.ihiddenreadlineinterface.md#addlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[addListener](_network_gossip_interface_.igossipsub.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:66

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "SIGINT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[addListener](_util_io_.ihiddenreadlineinterface.md#addlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[addListener](_network_gossip_interface_.igossipsub.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:67

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **addListener**(`event`: "SIGTSTP", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[addListener](_util_io_.ihiddenreadlineinterface.md#addlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[addListener](_network_gossip_interface_.igossipsub.md#addlistener)*

Defined in node_modules/@types/node/readline.d.ts:68

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  close

▸ **close**(): *void*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[close](_util_io_.ihiddenreadlineinterface.md#close)*

Defined in node_modules/@types/node/readline.d.ts:47

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[emit](_util_io_.ihiddenreadlineinterface.md#emit)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[emit](_network_gossip_interface_.igossipsub.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[emit](_util_io_.ihiddenreadlineinterface.md#emit)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[emit](_network_gossip_interface_.igossipsub.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "line", `input`: string): *boolean*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[emit](_util_io_.ihiddenreadlineinterface.md#emit)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[emit](_network_gossip_interface_.igossipsub.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`event` | "line" |
`input` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "pause"): *boolean*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[emit](_util_io_.ihiddenreadlineinterface.md#emit)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[emit](_network_gossip_interface_.igossipsub.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`event` | "pause" |

**Returns:** *boolean*

▸ **emit**(`event`: "resume"): *boolean*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[emit](_util_io_.ihiddenreadlineinterface.md#emit)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[emit](_network_gossip_interface_.igossipsub.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:74

**Parameters:**

Name | Type |
------ | ------ |
`event` | "resume" |

**Returns:** *boolean*

▸ **emit**(`event`: "SIGCONT"): *boolean*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[emit](_util_io_.ihiddenreadlineinterface.md#emit)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[emit](_network_gossip_interface_.igossipsub.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:75

**Parameters:**

Name | Type |
------ | ------ |
`event` | "SIGCONT" |

**Returns:** *boolean*

▸ **emit**(`event`: "SIGINT"): *boolean*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[emit](_util_io_.ihiddenreadlineinterface.md#emit)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[emit](_network_gossip_interface_.igossipsub.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:76

**Parameters:**

Name | Type |
------ | ------ |
`event` | "SIGINT" |

**Returns:** *boolean*

▸ **emit**(`event`: "SIGTSTP"): *boolean*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[emit](_util_io_.ihiddenreadlineinterface.md#emit)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[emit](_network_gossip_interface_.igossipsub.md#emit)*

Defined in node_modules/@types/node/readline.d.ts:77

**Parameters:**

Name | Type |
------ | ------ |
`event` | "SIGTSTP" |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[eventNames](_network_gossip_interface_.igossipsub.md#eventnames)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[getMaxListeners](_network_gossip_interface_.igossipsub.md#getmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[listenerCount](_network_gossip_interface_.igossipsub.md#static-listenercount)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[listeners](_network_gossip_interface_.igossipsub.md#listeners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[off](_network_gossip_interface_.igossipsub.md#off)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string, `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[on](_util_io_.ihiddenreadlineinterface.md#on)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[on](_network_gossip_interface_.igossipsub.md#on)*

Defined in node_modules/@types/node/readline.d.ts:79

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[on](_util_io_.ihiddenreadlineinterface.md#on)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[on](_network_gossip_interface_.igossipsub.md#on)*

Defined in node_modules/@types/node/readline.d.ts:80

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "line", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[on](_util_io_.ihiddenreadlineinterface.md#on)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[on](_network_gossip_interface_.igossipsub.md#on)*

Defined in node_modules/@types/node/readline.d.ts:81

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **on**(`event`: "pause", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[on](_util_io_.ihiddenreadlineinterface.md#on)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[on](_network_gossip_interface_.igossipsub.md#on)*

Defined in node_modules/@types/node/readline.d.ts:82

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "resume", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[on](_util_io_.ihiddenreadlineinterface.md#on)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[on](_network_gossip_interface_.igossipsub.md#on)*

Defined in node_modules/@types/node/readline.d.ts:83

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "SIGCONT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[on](_util_io_.ihiddenreadlineinterface.md#on)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[on](_network_gossip_interface_.igossipsub.md#on)*

Defined in node_modules/@types/node/readline.d.ts:84

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "SIGINT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[on](_util_io_.ihiddenreadlineinterface.md#on)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[on](_network_gossip_interface_.igossipsub.md#on)*

Defined in node_modules/@types/node/readline.d.ts:85

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **on**(`event`: "SIGTSTP", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[on](_util_io_.ihiddenreadlineinterface.md#on)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[on](_network_gossip_interface_.igossipsub.md#on)*

Defined in node_modules/@types/node/readline.d.ts:86

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  once

▸ **once**(`event`: string, `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[once](_util_io_.ihiddenreadlineinterface.md#once)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[once](_network_gossip_interface_.igossipsub.md#once)*

Defined in node_modules/@types/node/readline.d.ts:88

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[once](_util_io_.ihiddenreadlineinterface.md#once)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[once](_network_gossip_interface_.igossipsub.md#once)*

Defined in node_modules/@types/node/readline.d.ts:89

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "line", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[once](_util_io_.ihiddenreadlineinterface.md#once)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[once](_network_gossip_interface_.igossipsub.md#once)*

Defined in node_modules/@types/node/readline.d.ts:90

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **once**(`event`: "pause", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[once](_util_io_.ihiddenreadlineinterface.md#once)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[once](_network_gossip_interface_.igossipsub.md#once)*

Defined in node_modules/@types/node/readline.d.ts:91

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "resume", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[once](_util_io_.ihiddenreadlineinterface.md#once)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[once](_network_gossip_interface_.igossipsub.md#once)*

Defined in node_modules/@types/node/readline.d.ts:92

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "SIGCONT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[once](_util_io_.ihiddenreadlineinterface.md#once)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[once](_network_gossip_interface_.igossipsub.md#once)*

Defined in node_modules/@types/node/readline.d.ts:93

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "SIGINT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[once](_util_io_.ihiddenreadlineinterface.md#once)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[once](_network_gossip_interface_.igossipsub.md#once)*

Defined in node_modules/@types/node/readline.d.ts:94

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **once**(`event`: "SIGTSTP", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[once](_util_io_.ihiddenreadlineinterface.md#once)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[once](_network_gossip_interface_.igossipsub.md#once)*

Defined in node_modules/@types/node/readline.d.ts:95

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  pause

▸ **pause**(): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[pause](_util_io_.ihiddenreadlineinterface.md#pause)*

Defined in node_modules/@types/node/readline.d.ts:45

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string, `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependListener](_util_io_.ihiddenreadlineinterface.md#prependlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:97

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: "close", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependListener](_util_io_.ihiddenreadlineinterface.md#prependlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:98

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "line", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependListener](_util_io_.ihiddenreadlineinterface.md#prependlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:99

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **prependListener**(`event`: "pause", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependListener](_util_io_.ihiddenreadlineinterface.md#prependlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:100

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "resume", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependListener](_util_io_.ihiddenreadlineinterface.md#prependlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:101

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "SIGCONT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependListener](_util_io_.ihiddenreadlineinterface.md#prependlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:102

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "SIGINT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependListener](_util_io_.ihiddenreadlineinterface.md#prependlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:103

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependListener**(`event`: "SIGTSTP", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependListener](_util_io_.ihiddenreadlineinterface.md#prependlistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependListener](_network_gossip_interface_.igossipsub.md#prependlistener)*

Defined in node_modules/@types/node/readline.d.ts:104

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string, `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependOnceListener](_util_io_.ihiddenreadlineinterface.md#prependoncelistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:106

**Parameters:**

▪ **event**: *string*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "close", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependOnceListener](_util_io_.ihiddenreadlineinterface.md#prependoncelistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:107

**Parameters:**

▪ **event**: *"close"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "line", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependOnceListener](_util_io_.ihiddenreadlineinterface.md#prependoncelistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:108

**Parameters:**

▪ **event**: *"line"*

▪ **listener**: *function*

▸ (`input`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *this*

▸ **prependOnceListener**(`event`: "pause", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependOnceListener](_util_io_.ihiddenreadlineinterface.md#prependoncelistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:109

**Parameters:**

▪ **event**: *"pause"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "resume", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependOnceListener](_util_io_.ihiddenreadlineinterface.md#prependoncelistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:110

**Parameters:**

▪ **event**: *"resume"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "SIGCONT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependOnceListener](_util_io_.ihiddenreadlineinterface.md#prependoncelistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:111

**Parameters:**

▪ **event**: *"SIGCONT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "SIGINT", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependOnceListener](_util_io_.ihiddenreadlineinterface.md#prependoncelistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:112

**Parameters:**

▪ **event**: *"SIGINT"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

▸ **prependOnceListener**(`event`: "SIGTSTP", `listener`: function): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prependOnceListener](_util_io_.ihiddenreadlineinterface.md#prependoncelistener)*

*Overrides [IGossipSub](_network_gossip_interface_.igossipsub.md).[prependOnceListener](_network_gossip_interface_.igossipsub.md#prependoncelistener)*

Defined in node_modules/@types/node/readline.d.ts:113

**Parameters:**

▪ **event**: *"SIGTSTP"*

▪ **listener**: *function*

▸ (): *void*

**Returns:** *this*

___

###  prompt

▸ **prompt**(`preserveCursor?`: boolean): *void*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[prompt](_util_io_.ihiddenreadlineinterface.md#prompt)*

Defined in node_modules/@types/node/readline.d.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`preserveCursor?` | boolean |

**Returns:** *void*

___

###  question

▸ **question**(`query`: string, `callback`: function): *void*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[question](_util_io_.ihiddenreadlineinterface.md#question)*

Defined in node_modules/@types/node/readline.d.ts:44

**Parameters:**

▪ **query**: *string*

▪ **callback**: *function*

▸ (`answer`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`answer` | string |

**Returns:** *void*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[rawListeners](_network_gossip_interface_.igossipsub.md#rawlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[removeAllListeners](_network_gossip_interface_.igossipsub.md#removealllisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[removeListener](_network_gossip_interface_.igossipsub.md#removelistener)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  resume

▸ **resume**(): *this*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[resume](_util_io_.ihiddenreadlineinterface.md#resume)*

Defined in node_modules/@types/node/readline.d.ts:46

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[setMaxListeners](_network_gossip_interface_.igossipsub.md#setmaxlisteners)*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setPrompt

▸ **setPrompt**(`prompt`: string): *void*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[setPrompt](_util_io_.ihiddenreadlineinterface.md#setprompt)*

Defined in node_modules/@types/node/readline.d.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`prompt` | string |

**Returns:** *void*

___

###  write

▸ **write**(`data`: string | Buffer, `key?`: Key): *void*

*Inherited from [IHiddenReadlineInterface](_util_io_.ihiddenreadlineinterface.md).[write](_util_io_.ihiddenreadlineinterface.md#write)*

Defined in node_modules/@types/node/readline.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`data` | string &#124; Buffer |
`key?` | Key |

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [IGossipSub](_network_gossip_interface_.igossipsub.md).[listenerCount](_network_gossip_interface_.igossipsub.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
