import { loadTasks } from "../store/tasks";

export function listTasks(): void {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log('No tasks yet. Add one with: task add "Your task"');
    return;
  }
  tasks.forEach((t) => {
    const status = t.done ? "✓" : "○";
    const style = t.done ? "\x1b[9m\x1b[2m" : "";
    const reset = "\x1b[0m";
    console.log(`  ${status} #${t.id} ${style}${t.title}${reset}`);
  });
  const pending = tasks.filter((t) => !t.done).length;
  console.log(`\n  ${pending} pending, ${tasks.length} total`);
}
