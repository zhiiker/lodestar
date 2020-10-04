/**
 * Limits the amount of response text printed on JSON parse errors
 */
const maxStringLengthToPrint = 100;

/**
 * Util: Parse JSON but display the original source string in case of error
 * Helps debug instances where an API returns a plain text instead of JSON,
 * such as getting an HTML page due to a wrong API URL
 */
export function parseJson<T>(json: string): T {
  try {
    return JSON.parse(json);
  } catch (e) {
    throw new ErrorParseJson(json, e);
  }
}

export class ErrorParseJson extends Error {
  constructor(json: string, e: Error) {
    super(`Error parsing JSON: ${e.message}\n${getTextToShowFromJsonError(json, e)}`);
  }
}

function getTextToShowFromJsonError(json: string, e: Error): string {
  if (e.message.includes("Unexpected end of JSON input")) {
    return json.slice(-maxStringLengthToPrint);
  }

  const unexpectedTokenMatch = /Unexpected token . in JSON at position (\d+)/.exec(e.message);
  if (unexpectedTokenMatch) {
    const position = parseInt(unexpectedTokenMatch[1]);
    if (Number.isInteger(position)) {
      return json.slice(position - maxStringLengthToPrint / 2, position + maxStringLengthToPrint / 2);
    }
  }

  return json.slice(0, maxStringLengthToPrint);
}
