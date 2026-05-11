import { afterEach, expect, test } from "bun:test";
import { mkdtempSync, readFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const tempHomes: string[] = [];

afterEach(() => {
  while (tempHomes.length > 0) {
    const tempHome = tempHomes.pop();
    if (tempHome) {
      rmSync(tempHome, { recursive: true, force: true });
    }
  }
});

test("CLI stores and lists task priority", () => {
  const tempHome = mkdtempSync(join(tmpdir(), "task-cli-"));
  tempHomes.push(tempHome);

  const addResult = Bun.spawnSync({
    cmd: [
      "bun",
      "run",
      "src/index.ts",
      "add",
      "Fix production bug",
      "--priority",
      "high",
    ],
    env: { ...process.env, HOME: tempHome },
    stdout: "pipe",
    stderr: "pipe",
  });

  expect(addResult.exitCode).toBe(0);
  expect(addResult.stdout.toString()).toContain("high priority task");

  const rawStore = readFileSync(join(tempHome, ".task-cli-data.json"), "utf-8");
  expect(JSON.parse(rawStore)).toEqual([
    expect.objectContaining({
      title: "Fix production bug",
      priority: "high",
      done: false,
    }),
  ]);

  const listResult = Bun.spawnSync({
    cmd: ["bun", "run", "src/index.ts", "list"],
    env: { ...process.env, HOME: tempHome },
    stdout: "pipe",
    stderr: "pipe",
  });

  expect(listResult.exitCode).toBe(0);
  expect(listResult.stdout.toString()).toContain("[high] Fix production bug");
});
