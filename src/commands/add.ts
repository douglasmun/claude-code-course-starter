import { loadTasks, saveTasks, getNextId } from "../store/tasks";
import { TaskPriority } from "../types";

export function addTask(
  title: string,
  priority: TaskPriority = "normal",
): void {
  const tasks = loadTasks();
  const task = {
    id: getNextId(tasks),
    title,
    priority,
    done: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  saveTasks(tasks);
  console.log(`✓ Added ${priority} priority task #${task.id}: ${title}`);
}
