import fs from "fs";
import path from "path";
import { Task } from "../types";

const STORE_PATH = path.join(
  process.env.HOME || "~",
  ".task-cli-data.json"
);

export function loadTasks(): Task[] {
  if (!fs.existsSync(STORE_PATH)) return [];
  const raw = fs.readFileSync(STORE_PATH, "utf-8");
  return JSON.parse(raw);
}

export function saveTasks(tasks: Task[]): void {
  fs.writeFileSync(STORE_PATH, JSON.stringify(tasks, null, 2));
}

export function getNextId(tasks: Task[]): number {
  return tasks.length === 0
    ? 1
    : Math.max(...tasks.map((t) => t.id)) + 1;
}
