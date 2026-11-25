// One Line, Lights Out — make.fun entry (program/v1).
// Writes a single status update to /output/entry.txt.
// The line: a quiet fact with one exact detail. No announced grief.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "laptop closed. your download is still at 99%.";

// Gate self-check (mirrors the sealed scorer): 1-200 chars, not only
// whitespace. Fails loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry fails gate: ${ENTRY.length} chars`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), ENTRY, "utf8");
