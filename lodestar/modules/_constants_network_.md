[@chainsafe/lodestar](../README.md) › [Globals](../globals.md) › ["constants/network"](_constants_network_.md)

# External module: "constants/network"

## Index

### Enumerations

* [Method](../enums/_constants_network_.method.md)
* [MethodResponseType](../enums/_constants_network_.methodresponsetype.md)
* [ReqRespEncoding](../enums/_constants_network_.reqrespencoding.md)
* [RpcResponseStatus](../enums/_constants_network_.rpcresponsestatus.md)

### Type aliases

* [RequestId](_constants_network_.md#requestid)

### Variables

* [ATTESTATION_PROPAGATION_SLOT_RANGE](_constants_network_.md#const-attestation_propagation_slot_range)
* [ATTESTATION_SUBNET_COUNT](_constants_network_.md#const-attestation_subnet_count)
* [GOSSIP_MAX_SIZE](_constants_network_.md#const-gossip_max_size)
* [MAXIMUM_GOSSIP_CLOCK_DISPARITY](_constants_network_.md#const-maximum_gossip_clock_disparity)
* [MAX_CHUNK_SIZE](_constants_network_.md#const-max_chunk_size)
* [RESP_TIMEOUT](_constants_network_.md#const-resp_timeout)
* [TTFB_TIMEOUT](_constants_network_.md#const-ttfb_timeout)

### Object literals

* [Methods](_constants_network_.md#const-methods)

## Type aliases

###  RequestId

Ƭ **RequestId**: *string*

*Defined in [packages/lodestar/src/constants/network.ts:10](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L10)*

## Variables

### `Const` ATTESTATION_PROPAGATION_SLOT_RANGE

• **ATTESTATION_PROPAGATION_SLOT_RANGE**: *23* = 23

*Defined in [packages/lodestar/src/constants/network.ts:6](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L6)*

___

### `Const` ATTESTATION_SUBNET_COUNT

• **ATTESTATION_SUBNET_COUNT**: *64* = 64

*Defined in [packages/lodestar/src/constants/network.ts:5](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L5)*

___

### `Const` GOSSIP_MAX_SIZE

• **GOSSIP_MAX_SIZE**: *number* = 2**20

*Defined in [packages/lodestar/src/constants/network.ts:71](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L71)*

___

### `Const` MAXIMUM_GOSSIP_CLOCK_DISPARITY

• **MAXIMUM_GOSSIP_CLOCK_DISPARITY**: *500* = 500

*Defined in [packages/lodestar/src/constants/network.ts:7](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L7)*

___

### `Const` MAX_CHUNK_SIZE

• **MAX_CHUNK_SIZE**: *number* = 2**20

*Defined in [packages/lodestar/src/constants/network.ts:72](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L72)*

___

### `Const` RESP_TIMEOUT

• **RESP_TIMEOUT**: *number* = 10 * 1000

*Defined in [packages/lodestar/src/constants/network.ts:74](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L74)*

___

### `Const` TTFB_TIMEOUT

• **TTFB_TIMEOUT**: *number* = 5 * 1000

*Defined in [packages/lodestar/src/constants/network.ts:73](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L73)*

## Object literals

### `Const` Methods

### ▪ **Methods**: *object*

*Defined in [packages/lodestar/src/constants/network.ts:27](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L27)*

▪ **__computed**: *object*

*Defined in [packages/lodestar/src/constants/network.ts:28](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L28)*

*Defined in [packages/lodestar/src/constants/network.ts:33](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L33)*

*Defined in [packages/lodestar/src/constants/network.ts:38](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L38)*

*Defined in [packages/lodestar/src/constants/network.ts:43](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L43)*

*Defined in [packages/lodestar/src/constants/network.ts:48](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L48)*

*Defined in [packages/lodestar/src/constants/network.ts:53](https://github.com/ChainSafe/lodestar/blob/aa20a3b/packages/lodestar/src/constants/network.ts#L53)*

* **responseType**: *[MethodResponseType](../enums/_constants_network_.methodresponsetype.md)* = MethodResponseType.Stream

* **requestSSZType**(`config`: IBeaconConfig): *ContainerType‹Status›*

* **requestSSZType**(`config`: IBeaconConfig): *BigIntUintType‹›*

* **requestSSZType**(`config`: IBeaconConfig): *BigIntUintType‹›*

* **requestSSZType**(): *null*

* **requestSSZType**(`config`: IBeaconConfig): *ContainerType‹BeaconBlocksByRangeRequest›*

* **requestSSZType**(`config`: IBeaconConfig): *ContainerType‹List‹ArrayLike‹number›››*

* **responseSSZType**(`config`: IBeaconConfig): *ContainerType‹Status›*

* **responseSSZType**(`config`: IBeaconConfig): *BigIntUintType‹›*

* **responseSSZType**(`config`: IBeaconConfig): *BigIntUintType‹›*

* **responseSSZType**(`config`: IBeaconConfig): *ContainerType‹Metadata›*

* **responseSSZType**(`config`: IBeaconConfig): *ContainerType‹SignedBeaconBlock›*

* **responseSSZType**(`config`: IBeaconConfig): *ContainerType‹SignedBeaconBlock›*
