import BufferList from "bl";
import {IBeaconConfig} from "@chainsafe/lodestar-config";
import {getRequestSzzTypeByMethod, Protocol, RequestBody} from "../types";
import {BufferedSource} from "../utils";
import {readEncodedPayload} from "../encodingStrategies";

/**
 * Consumes a stream source to read a `<request>`
 * ```bnf
 * request  ::= <encoding-dependent-header> | <encoded-payload>
 * ```
 */
export function requestDecode(
  config: IBeaconConfig,
  protocol: Pick<Protocol, "method" | "encoding">
): (source: AsyncIterable<Buffer | BufferList>) => Promise<RequestBody> {
  return async function (source) {
    const type = getRequestSzzTypeByMethod(config, protocol.method);
    if (!type) {
      // method has no body
      return null;
    }

    // Request has a single payload, so return immediately
    const bufferedSource = new BufferedSource(source as AsyncGenerator<Buffer>);
    return await readEncodedPayload(bufferedSource, protocol.encoding, type);
  };
}
