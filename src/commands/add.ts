import { loadTasks, saveTasks, getNextId } from "../store/tasks";

export function addTask(title: string): void {
  const tasks = loadTasks();
  const task = {
    id: getNextId(tasks),
    title,
    done: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  saveTasks(tasks);
  console.log(`✓ Added task #${task.id}: ${title}`);
}
