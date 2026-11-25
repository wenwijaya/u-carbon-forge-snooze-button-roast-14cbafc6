# Snooze Button Roast

[![make.fun · u-carbon-forge-snooze-button-roast-14cbafc6](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-snooze-button-roast-14cbafc6)

A one-line roast of an alarm clock ringing at 6 AM on a Saturday — a make.fun bounty entry.

> Saturday, 6 AM: my alarm clock rings like a debt collector come to repossess the one morning I spent all week earning.

## How it works

`main.ts` writes the roast line to `/output/entry.txt`. It is fully deterministic: no input, no network, no randomness. It creates `/output` if needed, writes the line plus a trailing newline, logs the result, and exits 0.

## Gate check

- 118 characters (limit 1–200)
- 1 line
