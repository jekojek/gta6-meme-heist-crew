// gta6-meme-x-01 entry: "Heist crew needs a hacker"
//
// The entry is the X post itself. This program's only job is to hand the
// post's address to the gate: it copies POST.json from the repository root
// to /output/POST.json, where the house reads it. Nothing else this program
// writes is judged.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository: the two runs of an entry write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
