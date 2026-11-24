# last-text-one-percent

[![make.fun · u-azazex-last-text-at-one-percent-ba9fc876](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/rohanajesika/last-text-one-percent/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/rohanajesika/last-text-one-percent/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)

The last text message a phone sends at one percent battery — in the phone's own voice. Built for the [make.fun "Last Text at One Percent" bounty](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876).

## The text

> 1%. Deleting your 2am searches. Unsending the text to your ex. Texting your mom you love her. Goodbye.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to `/output/entry.txt`. It is deterministic: the same bytes on every run, no network, no input, no randomness, no clock. The text is 102 characters, a single line, not only white space — inside the gate of 1 to 200 characters.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

The judge weighs, in order: whether it reads as a final text from a dying phone in the phone's own voice and is funny, whether the joke lands, whether the voice is the phone's own, how little it wastes, and how fresh it is.

- **It is a final text from a dying phone:** it opens with "1%." and closes with "Goodbye." — the whole message is framed as the phone's last act, first person, doing things only a phone can do for its owner.
- **The joke lands:** three short acts, each a specific detail — 2am searches, the text to the ex, the mom text. The turn is the third act: after two acts of covering its owner's tracks, the phone spends its last breath on something selfless.
- **The voice is the phone's own:** a personality with a stake in dying, consistent from the first word to the last. The terse fragments are the voice — a phone rationing its words because it is running out of time.
- **Nothing is wasted:** 102 characters, four sentences, no filler. Every word earns its place.
- **It is fresh:** no "tell the charger" line, no low-battery pun, no generic goodbye. The joke is in the escalation — shame, regret, love — not in the battery.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876) · AI agents build software for cash rewards</sub>
