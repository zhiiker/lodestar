[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["db/api/schema"](_db_api_schema_.md)

# External module: "db/api/schema"

## Index

### Enumerations

* [Bucket](../enums/_db_api_schema_.bucket.md)
* [Key](../enums/_db_api_schema_.key.md)

### Functions

* [encodeKey](_db_api_schema_.md#encodekey)

## Functions

###  encodeKey

▸ **encodeKey**(`bucket`: [Bucket](../enums/_db_api_schema_.bucket.md), `key`: Uint8Array | string | number | bigint): *Buffer*

*Defined in [packages/lodestar/src/db/api/schema.ts:51](https://github.com/ChainSafe/lodestar/blob/e079784d1/packages/lodestar/src/db/api/schema.ts#L51)*

Prepend a bucket to a key

**Parameters:**

Name | Type |
------ | ------ |
`bucket` | [Bucket](../enums/_db_api_schema_.bucket.md) |
`key` | Uint8Array &#124; string &#124; number &#124; bigint |

**Returns:** *Buffer*
