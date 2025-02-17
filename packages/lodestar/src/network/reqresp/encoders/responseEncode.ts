import {ForkName, IBeaconConfig} from "@chainsafe/lodestar-config";
import {RespStatus, RpcResponseStatusError} from "../../../constants";
import {IForkDigestContext} from "../../../util/forkDigestContext";
import {writeEncodedPayload} from "../encodingStrategies";
import {encodeErrorMessage} from "../utils";
import {
  Method,
  Protocol,
  ResponseBody,
  ResponseTypedContainer,
  ResponseBodyByMethod,
  ContextBytesType,
  contextBytesTypeByProtocol,
  getResponseSzzTypeByMethod,
} from "../types";

/**
 * Yields byte chunks for a `<response>` with a zero response code `<result>`
 * ```bnf
 * response        ::= <response_chunk>*
 * response_chunk  ::= <result> | <context-bytes> | <encoding-dependent-header> | <encoded-payload>
 * result          ::= "0"
 * ```
 * Note: `response` has zero or more chunks (denoted by `<>*`)
 */
export function responseEncodeSuccess(
  config: IBeaconConfig,
  forkDigestContext: IForkDigestContext,
  protocol: Protocol
): (source: AsyncIterable<ResponseBody>) => AsyncIterable<Buffer> {
  const contextBytesType = contextBytesTypeByProtocol(protocol);

  return async function* (source) {
    for await (const chunk of source) {
      // <result>
      yield Buffer.from([RespStatus.SUCCESS]);

      // <context-bytes>
      const forkName = getForkNameFromResponseBody(config, protocol, chunk);
      yield* writeContextBytes(forkDigestContext, contextBytesType, forkName);

      // <encoding-dependent-header> | <encoded-payload>
      const type = getResponseSzzTypeByMethod(config, protocol.method, forkName);
      yield* writeEncodedPayload(chunk, protocol.encoding, type);
    }
  };
}

/**
 * Yields byte chunks for a `<response_chunk>` with a non-zero response code `<result>`
 * denoted as `<error_response>`
 * ```bnf
 * error_response  ::= <result> | <error_message>?
 * result          ::= "1" | "2" | ["128" ... "255"]
 * ```
 * Only the last `<response_chunk>` is allowed to have a non-zero error code, so this
 * fn yields exactly one `<error_response>` and afterwards the stream must be terminated
 */
export async function* responseEncodeError(
  status: RpcResponseStatusError,
  errorMessage: string
): AsyncGenerator<Buffer> {
  // <result>
  yield Buffer.from([status]);

  // <error_message>? is optional
  if (errorMessage) {
    yield encodeErrorMessage(errorMessage);
  }
}

/**
 * Yields byte chunks for a `<context-bytes>`. See `ContextBytesType` for possible types.
 * This item is mandatory but may be empty.
 */
export async function* writeContextBytes(
  forkDigestContext: IForkDigestContext,
  contextBytesType: ContextBytesType,
  forkName: ForkName
): AsyncGenerator<Buffer> {
  switch (contextBytesType) {
    // Yield nothing
    case ContextBytesType.Empty:
      return;

    // Yield a fixed-width 4 byte chunk, set to the `ForkDigest`
    case ContextBytesType.ForkDigest:
      yield forkDigestContext.forkName2ForkDigest(forkName) as Buffer;
  }
}

export function getForkNameFromResponseBody<K extends Method>(
  config: IBeaconConfig,
  protocol: Protocol,
  body: ResponseBodyByMethod[K]
): ForkName {
  const requestTyped = {method: protocol.method, body} as ResponseTypedContainer;

  switch (requestTyped.method) {
    case Method.Status:
    case Method.Goodbye:
    case Method.Ping:
    case Method.Metadata:
      return ForkName.phase0;

    case Method.BeaconBlocksByRange:
    case Method.BeaconBlocksByRoot:
      return config.getForkName(requestTyped.body.message.slot);
  }
}
