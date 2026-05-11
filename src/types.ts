export type TaskPriority = "low" | "normal" | "high";

export interface Task {
  id: number;
  title: string;
  priority: TaskPriority;
  done: boolean;
  createdAt: string;
}
