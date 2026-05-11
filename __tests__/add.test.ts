import { loadTasks, saveTasks } from "../src/store/tasks";
import { addTask } from "../src/commands/add";

jest.mock("../src/store/tasks");
const mockLoad = loadTasks as jest.MockedFunction<typeof loadTasks>;
const mockSave = saveTasks as jest.MockedFunction<typeof saveTasks>;

describe("addTask", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLoad.mockReturnValue([]);
  });

  it("adds a task with correct structure", () => {
    addTask("Buy milk");
    expect(mockSave).toHaveBeenCalledWith([
      expect.objectContaining({
        id: 1,
        title: "Buy milk",
        priority: "normal",
        done: false,
      }),
    ]);
  });

  it("auto-increments IDs and preserves existing tasks", () => {
    const existing = {
      id: 1,
      title: "Existing",
      priority: "normal" as const,
      done: false,
      createdAt: "",
    };
    mockLoad.mockReturnValue([existing]);
    addTask("New task");
    expect(mockSave).toHaveBeenCalledWith([
      existing,
      expect.objectContaining({ id: 2, title: "New task", priority: "normal" }),
    ]);
  });

  it("stores the requested priority", () => {
    addTask("Fix production bug", "high");
    expect(mockSave).toHaveBeenCalledWith([
      expect.objectContaining({
        title: "Fix production bug",
        priority: "high",
      }),
    ]);
  });
});
