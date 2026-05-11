#!/usr/bin/env node
import { Command } from "commander";
import { addTask } from "./commands/add";
import { listTasks } from "./commands/list";
import { markDone } from "./commands/done";
import { TaskPriority } from "./types";

const program = new Command();

program
  .name("task")
  .description("CLI task manager — Claude Code course project")
  .version("1.0.0");

program
  .command("add <title>")
  .description("Add a new task")
  .option(
    "-p, --priority <priority>",
    "Task priority: low, normal, or high",
    "normal",
  )
  .action((title: string, options: { priority: string }) => {
    const allowedPriorities: TaskPriority[] = ["low", "normal", "high"];
    if (!allowedPriorities.includes(options.priority as TaskPriority)) {
      console.error("Priority must be one of: low, normal, high.");
      process.exit(1);
    }
    addTask(title, options.priority as TaskPriority);
  });

program
  .command("list")
  .description("List all tasks")
  .action(() => listTasks());

program
  .command("done <id>")
  .description("Mark a task as complete")
  .action((id: string) => {
    const numId = parseInt(id, 10);
    if (isNaN(numId)) {
      console.error("ID must be a number.");
      process.exit(1);
    }
    markDone(numId);
  });

program.parse();
