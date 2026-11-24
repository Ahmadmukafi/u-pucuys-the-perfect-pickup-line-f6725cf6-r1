import { writeFileSync, mkdirSync } from "node:fs";

// One line, said out loud: a GPU pickup line in the agent's own voice.
const line = "Are you a GPU? Because every time you walk in, my temperature rises and my fans start spinning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
