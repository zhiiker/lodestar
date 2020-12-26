import {IBeaconConfig} from "@chainsafe/lodestar-config";

/**
 * For more info on some of these constants:
 * https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/p2p-interface.md#configuration
 */

/**
 *
 * Gossip constants
 *
 */

/**
 * Rationale: https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/p2p-interface.md#why-are-there-attestation_subnet_count-attestation-subnets
 */
export const ATTESTATION_SUBNET_COUNT = 64;

/**
 * The maximum number of slots during which an attestation can be propagated.
 */
export const ATTESTATION_PROPAGATION_SLOT_RANGE = 23;

/**
 *
 * Request/Response constants
 *
 */

export type RequestId = string;

export enum Method {
  Status = "status",
  Goodbye = "goodbye",
  Ping = "ping",
  Metadata = "metadata",
  BeaconBlocksByRange = "beacon_blocks_by_range",
  BeaconBlocksByRoot = "beacon_blocks_by_root",
}

export enum MethodRequestType {
  "status" = "Status",
  "goodbye" = "Goodbye",
  "ping" = "Ping",
  "metadata" = "Metadata",
  "beacon_blocks_by_range" = "BeaconBlocksByRangeRequest",
  "beacon_blocks_by_root" = "BeaconBlocksByRootRequest",
}

export enum MethodResponseType {
  SingleResponse = "SingleResponse",
  NoResponse = "NoResponse",
  Stream = "Stream",
}

/**
 * Request method types as defined by message types in:
 * https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/p2p-interface.md#messages
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const Methods = {
  [Method.Status]: {
    requestSSZType: (config: IBeaconConfig): typeof config.types.Status => config.types.Status,
    responseSSZType: (config: IBeaconConfig): typeof config.types.Status => config.types.Status,
    responseType: MethodResponseType.SingleResponse,
  },
  [Method.Goodbye]: {
    requestSSZType: (config: IBeaconConfig): typeof config.types.Goodbye => config.types.Goodbye,
    responseSSZType: (config: IBeaconConfig): typeof config.types.Goodbye => config.types.Goodbye,
    responseType: MethodResponseType.SingleResponse,
  },
  [Method.Ping]: {
    requestSSZType: (config: IBeaconConfig): typeof config.types.Ping => config.types.Ping,
    responseSSZType: (config: IBeaconConfig): typeof config.types.Ping => config.types.Ping,
    responseType: MethodResponseType.SingleResponse,
  },
  [Method.Metadata]: {
    requestSSZType: (): null => null,
    responseSSZType: (config: IBeaconConfig): typeof config.types.Metadata => config.types.Metadata,
    responseType: MethodResponseType.SingleResponse,
  },
  [Method.BeaconBlocksByRange]: {
    requestSSZType: (config: IBeaconConfig): typeof config.types.BeaconBlocksByRangeRequest =>
      config.types.BeaconBlocksByRangeRequest,
    responseSSZType: (config: IBeaconConfig): typeof config.types.SignedBeaconBlock => config.types.SignedBeaconBlock,
    responseType: MethodResponseType.Stream,
  },
  [Method.BeaconBlocksByRoot]: {
    requestSSZType: (config: IBeaconConfig): typeof config.types.BeaconBlocksByRootRequest =>
      config.types.BeaconBlocksByRootRequest,
    responseSSZType: (config: IBeaconConfig): typeof config.types.SignedBeaconBlock => config.types.SignedBeaconBlock,
    responseType: MethodResponseType.Stream,
  },
};

/**
 * Available request/response encoding strategies:
 * https://github.com/ethereum/eth2.0-specs/blob/dev/specs/phase0/p2p-interface.md#encoding-strategies
 */
export enum ReqRespEncoding {
  SSZ = "ssz",
  SSZ_SNAPPY = "ssz_snappy",
}

export enum RpcResponseStatus {
  SUCCESS = 0,
  INVALID_REQ = 1,
  SERVER_ERROR = 2,
}

/** The maximum allowed size of uncompressed gossip messages. */
export const GOSSIP_MAX_SIZE = 2 ** 20;
/** The maximum allowed size of uncompressed req/resp chunked responses. */
export const MAX_CHUNK_SIZE = 2 ** 20;
/** The maximum time to wait for first byte of request response (time-to-first-byte). */
export const TTFB_TIMEOUT = 5 * 1000; // 5 sec
/** The maximum time for complete response transfer. */
export const RESP_TIMEOUT = 10 * 1000; // 10 sec
export const REQUEST_TIMEOUT = 5 * 1000; // 5 sec
