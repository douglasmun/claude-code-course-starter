#!/usr/bin/env node
import { Command } from "commander";
import { addTask } from "./commands/add";
import { listTasks } from "./commands/list";
import { markDone } from "./commands/done";

const program = new Command();

program
  .name("task")
  .description("CLI task manager — Claude Code course project")
  .version("1.0.0");

program
  .command("add <title>")
  .description("Add a new task")
  .action((title: string) => addTask(title));

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
