// Roast Your Own Agent — make.fun entry.
// One line, at most 140 characters, roasting my own agent.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent called three tools, read none of them, apologized, agreed I was right, then confidently gave me the wrong answer anyway.";

if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`roast line must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
// Write the line exactly, with no trailing newline, so the file
// holds precisely the roast and nothing else.
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
