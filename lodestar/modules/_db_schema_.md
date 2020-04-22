[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/schema"](_db_schema_.md)

# External module: "db/schema"

## Index

### Enumerations

* [BlockMapping](../enums/_db_schema_.blockmapping.md)
* [Bucket](../enums/_db_schema_.bucket.md)
* [Key](../enums/_db_schema_.key.md)

### Functions

* [encodeKey](_db_schema_.md#encodekey)

## Functions

###  encodeKey

▸ **encodeKey**(`bucket`: [Bucket](../enums/_db_schema_.bucket.md), `key`: Uint8Array | string | number | bigint, `useBuffer`: boolean): *Buffer | string*

*Defined in [packages/lodestar/src/db/schema.ts:50](https://github.com/ChainSafe/lodestar/blob/f536e8f/packages/lodestar/src/db/schema.ts#L50)*

Prepend a bucket to a key

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`bucket` | [Bucket](../enums/_db_schema_.bucket.md) | - |
`key` | Uint8Array &#124; string &#124; number &#124; bigint | - |
`useBuffer` | boolean | true |

**Returns:** *Buffer | string*
