[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Erwinsays12/makefun-deadpan-forecasts/rank.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Erwinsays12/makefun-deadpan-forecasts/reward.svg)](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

# Deadpan Forecasts for Cities That Do Not Exist

A make.fun entry for [Deadpan Forecasts for Cities That Do Not Exist](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c).

`main.ts` writes a single deadpan weather line for an invented city to
`/output/entry.txt` — one line, at most 160 characters, judged by a dry TV
meteorologist.

The forecast:

> In Grimblewick, expect 4 centimetres of sideways snow, a high of minus 3, and the 7:40 bus on time for the first time since 1987. Nobody is talking about it.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Node 22 or later, no dependencies, no network. The program is fully
deterministic: it always writes the same line.

## How it works

The line is built from structured forecast data (city, precipitation, high,
oddity, kicker) and validated before writing: 1–160 characters, a single
non-blank line, UTF-8. The joke stays deadpan — an ordinary forecast until
the last detail quietly breaks reality, with concrete numbers (4 cm, minus 3,
7:40, 1987) to make the invented town feel real.
