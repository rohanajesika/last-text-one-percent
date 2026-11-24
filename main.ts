// Last Text at One Percent — make.fun bounty
// u-azazex-last-text-at-one-percent-ba9fc876
//
// The entry is one final text message, written in the voice of a phone
// dying at one percent battery. It is fully deterministic: the same line
// every run, no network, no randomness, no input read. It writes the text
// to /output/entry.txt and nothing else.

import { writeFileSync, mkdirSync } from "node:fs";

// The last text. A phone with a personality, spending its final percent
// on the things only it can do for its owner. Three short acts, each one
// a job only the phone can finish — and the third is the turn: after two
// acts of covering its owner's tracks, it spends its last breath on
// something selfless. The terse fragments are the voice: a dying phone
// rationing its words.
const LAST_TEXT =
  "1%. Deleting your 2am searches. Unsending the text to your ex. Texting your mom you love her. Goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_TEXT, "utf8");
