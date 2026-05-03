import { loadTasks, saveTasks } from "../store/tasks";

export function markDone(id: number): void {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    console.error(`Task #${id} not found.`);
    process.exit(1);
  }
  if (task.done) {
    console.log(`Task #${id} is already done.`);
    return;
  }
  task.done = true;
  saveTasks(tasks);
  console.log(`✓ Completed: ${task.title}`);
}
