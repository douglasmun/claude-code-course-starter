# Native Operations Notes

## Background Agent Pattern

Use a scheduled review loop for low-risk recurring checks:

```text
/loop every 1h "run /pr-review main for open branch work and summarize blockers"
```

## Voice Control Pattern

Use voice input for short steering prompts only:

```text
/voice
"pause and explain the current failing test"
```

## Worktree Pattern

Use separate worktrees for isolated experiments:

```bash
claude -w feature-priority
claude -w feature-tags
claude -w bugfix-invalid-id
```

Each worktree should run `npm test` before merging.
