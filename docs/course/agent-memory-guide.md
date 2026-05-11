---
type: project
status: active
date: 2026-05-11
tags: [course, agents, memory]
---

# Agent Memory Guide

## What MEMORY.md Is

`MEMORY.md` is a plain Markdown file that a Claude Code agent reads at the start of a session to recall facts it has accumulated over previous runs. It is not a database — it is a text file that you and the agent both maintain.

The agent appends learnings to its MEMORY.md when it notices something worth remembering: a project invariant, a common mistake, a constraint that the user confirmed. On the next session it reads the file and uses those facts without re-discovering them.

## What Belongs in Git vs. What Does Not

| Content | Commit to git? | Reason |
|---|---|---|
| Project-specific facts: conventions, patterns, invariants | Yes | These are the same for every developer who checks out the repo. |
| Demonstration or sample memory (this guide's content) | Yes | Useful as a teaching example for course submissions. |
| Personal user-level memory from `~/.claude/` | No | Contains private context about you, not the project. Never in a project repo. |
| Real teammate names, client names, or internal URLs | No | Sensitive; can leak if the repo is public. |
| API keys, tokens, or credentials | Never | Would be a secrets exposure. |

## This Repo's `.claude/agent-memory/` Structure

The directory `.claude/agent-memory/` contains one subdirectory per agent that has persistent memory:

```
.claude/agent-memory/
└── test-reviewer/
    └── MEMORY.md
```

### `test-reviewer/MEMORY.md`

The `test-reviewer` agent accumulates observations about the task-cli project's test conventions. Current contents:

- The store layer invariant: all file I/O lives in `src/store/tasks.ts`; tests should flag command handlers that bypass it.
- New CLI features require both command-level behavior checks and storage-shape checks.
- Priority support was added as the first feature exercise; future tests should cover invalid priority values at the CLI boundary.

This is a project-scoped memory file. It is safe to commit because it describes the project, not the user.

## Guidance for Your Capstone

For the capstone submission, commit a demo `MEMORY.md` that shows the agent has learned something meaningful about your project. Do not commit your personal `~/.claude/` memory. If your agent memory contains anything private, replace it with a plausible demo value before committing.

A good demo MEMORY.md has 2–4 bullet points that would genuinely help the agent on a second session: a naming convention it confirmed with you, a constraint it learned from a failed test, or a preference you stated explicitly.
