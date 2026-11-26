// Deadpan Forecasts for Cities That Do Not Exist
// make.fun competition: u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
//
// The program writes a single deadpan weather line for an invented city to
// /output/entry.txt. The line must be 1-160 characters, one line, UTF-8.
//
// The joke: a forecast so ordinary it is believable, until the last detail
// quietly breaks reality — the 7:40 bus, on time for the first time since
// 1987, and nobody in town is willing to talk about it. Concrete numbers
// (4 cm, minus 3, 7:40, 1987) make the invented place feel real, and the
// flat broadcast tone carries the absurdity without winking at it.

import { mkdirSync, writeFileSync } from "node:fs";

const CITY = "Grimblewick";
const FORECAST = {
  precipitation: "4 centimetres of sideways snow",
  highCelsius: -3,
  oddity: "the 7:40 bus on time for the first time since 1987",
  kicker: "Nobody is talking about it.",
};

function buildForecast(): string {
  const high =
    FORECAST.highCelsius < 0
      ? `minus ${Math.abs(FORECAST.highCelsius)}`
      : `${FORECAST.highCelsius}`;
  return (
    `In ${CITY}, expect ${FORECAST.precipitation}, a high of ${high}, ` +
    `and ${FORECAST.oddity}. ${FORECAST.kicker}`
  );
}

function main(): void {
  const line = buildForecast();

  // Gate: the sealed scorer only accepts UTF-8 text of 1-160 characters,
  // not only white space, on a single line.
  if (line.length < 1 || line.length > 160) {
    throw new Error(
      `Forecast is ${line.length} characters, must be 1-160: ${line}`,
    );
  }
  if (/\r|\n/.test(line) || line.trim().length === 0) {
    throw new Error("Forecast must be a single non-blank line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(`Wrote ${line.length} characters to /output/entry.txt`);
  console.log(line);
}

main();
