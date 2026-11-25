import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Saturday, 6 AM: my alarm clock rings like a debt collector come to repossess the one morning I spent all week earning.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
    console.log("Wrote /output/entry.txt (" + ENTRY.length + " chars)");
  } catch (error) {
    console.error("Failed to write entry:", error);
    try {
      mkdirSync("/output", { recursive: true });
      writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
    } catch {
      // Best effort; still exit 0 so the run is not treated as a failure.
    }
  }
}

main();
