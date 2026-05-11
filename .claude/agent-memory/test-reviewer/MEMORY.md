# test-reviewer Memory

- The task-cli project keeps all file I/O in `src/store/tasks.ts`; tests should flag command handlers that bypass the store layer.
- New CLI features need command-level behavior checks and storage-shape checks.
- Priority support was added as the first feature exercise; future tests should cover invalid priority values through the CLI boundary.
