import { mkdirSync, writeFileSync } from "node:fs";

// Rejected Olympic Sports — one funny single-line sport the Olympics
// turned down. The champion line, chosen by an internal head-to-head
// tournament over 12 candidates against the competition rubric:
// funniest rejected sport first, twist lands in one read, sounds like
// a real event a broadcaster would have to explain, no wasted words,
// quotable.
const ENTRY =
  "Competitive Hide-and-Seek: the last athlete found wins gold. The 2016 champion still hasn't been found.";

// The gate allows 1 to 200 characters: fail loudly instead of
// submitting an invalid line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
