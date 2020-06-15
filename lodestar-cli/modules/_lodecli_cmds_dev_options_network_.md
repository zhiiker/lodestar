[@chainsafe/lodestar-cli](../README.md) › [Globals](../globals.md) › ["lodecli/cmds/dev/options/network"](_lodecli_cmds_dev_options_network_.md)

# External module: "lodecli/cmds/dev/options/network"

## Index

### Object literals

* [discv5BindAddr](_lodecli_cmds_dev_options_network_.md#const-discv5bindaddr)
* [discv5BootEnrs](_lodecli_cmds_dev_options_network_.md#const-discv5bootenrs)
* [discv5Enabled](_lodecli_cmds_dev_options_network_.md#const-discv5enabled)
* [networkBootMultiaddrs](_lodecli_cmds_dev_options_network_.md#const-networkbootmultiaddrs)
* [networkLocalMultiaddrs](_lodecli_cmds_dev_options_network_.md#const-networklocalmultiaddrs)
* [networkMaxPeers](_lodecli_cmds_dev_options_network_.md#const-networkmaxpeers)

## Object literals

### `Const` discv5BindAddr

### ▪ **discv5BindAddr**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:15](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L15)*

###  alias

• **alias**: *string[]* = [
    "network.discv5.bindAddr",
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:16](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L16)*

###  default

• **default**: *string* = "/ip4/127.0.0.1/udp/0"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:20](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L20)*

###  group

• **group**: *string* = "network"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:21](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L21)*

###  type

• **type**: *"string"* = "string"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:19](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L19)*

___

### `Const` discv5BootEnrs

### ▪ **discv5BootEnrs**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:24](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L24)*

###  alias

• **alias**: *string[]* = [
    "network.discv5.bootEnrs",
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:25](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L25)*

###  default

• **default**: *undefined[]* = []

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:29](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L29)*

###  group

• **group**: *string* = "network"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:30](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L30)*

###  type

• **type**: *"array"* = "array"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:28](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L28)*

___

### `Const` discv5Enabled

### ▪ **discv5Enabled**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:6](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L6)*

###  alias

• **alias**: *string[]* = [
    "network.discv5.enabled",
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:7](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L7)*

###  default

• **default**: *boolean* = true

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:11](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L11)*

###  group

• **group**: *string* = "network"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:12](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L12)*

###  type

• **type**: *"boolean"* = "boolean"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:10](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L10)*

___

### `Const` networkBootMultiaddrs

### ▪ **networkBootMultiaddrs**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:44](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L44)*

###  alias

• **alias**: *string[]* = [
    "network.bootMultiaddrs",
    "network.bootnodes",
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:45](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L45)*

###  default

• **default**: *undefined[]* = []

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:50](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L50)*

###  group

• **group**: *string* = "network"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:51](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L51)*

###  type

• **type**: *"array"* = "array"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:49](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L49)*

___

### `Const` networkLocalMultiaddrs

### ▪ **networkLocalMultiaddrs**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:54](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L54)*

###  alias

• **alias**: *string[]* = [
    "network.localMultiaddrs",
    "network.multiaddrs",
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:55](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L55)*

###  default

• **default**: *string[]* = [
    "/ip4/127.0.0.1/tcp/30606"
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:61](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L61)*

###  group

• **group**: *string* = "network"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:64](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L64)*

###  type

• **type**: *"array"* = "array"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:59](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L59)*

___

### `Const` networkMaxPeers

### ▪ **networkMaxPeers**: *object*

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:35](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L35)*

###  alias

• **alias**: *string[]* = [
    "network.maxPeers",
  ]

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:36](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L36)*

###  default

• **default**: *number* = 25

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:40](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L40)*

###  group

• **group**: *string* = "network"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:41](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L41)*

###  type

• **type**: *"number"* = "number"

*Defined in [packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts:39](https://github.com/ChainSafe/lodestar/blob/a092bb827/packages/lodestar-cli/src/lodecli/cmds/dev/options/network.ts#L39)*
