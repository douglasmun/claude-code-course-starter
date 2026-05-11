# Claude Code Handoff

Use this file after exiting Codex and launching Claude Code in this folder:

```bash
cd "/Users/douglasmun/Work/Claude Code/claude-code-course-starter"
claude
```

## Current State

This repo has been updated as a completed student submission for the live Claude Code course.

Key artifacts:

- `docs/course/student-course-review.md` — narrative student review
- `docs/course/course-improvement-backlog.md` — actionable fix backlog
- `docs/course/completion-matrix.md` — capstone evidence matrix
- `docs/course/lab-a-rag.md` — Lab A notes
- `docs/course/lab-b-agent-pipeline.md` — Lab B notes
- `docs/course/lab-c-sandbox-runtime.md` — Lab C notes
- `docs/course/native-operations.md` — Level 4 operations notes
- `cowork/plugin/` — sample Cowork plugin package
- `.claude/skills/` — course skills
- `.claude/hooks/` — format and safety hooks
- `.mcp.json` and `.claude/mcp.json` — filesystem MCP config

The CLI also has a concrete feature added:

```bash
bun run src/index.ts add "Fix production bug" --priority high
bun run src/index.ts list
```

## Verification Already Run

These passed in Codex:

```bash
bun install
bun run format
bun run build
bun run test:bun
jq empty package.json .claude/settings.json .mcp.json .claude/mcp.json plugin/.claude-plugin/plugin.json plugin/.mcp.json cowork/plugin/.claude-plugin/plugin.json
git diff --check
```

Note: `node` and `npm` were not available in the Codex shell. Jest remains configured for normal Node/npm environments, but Codex verified with Bun.

## Suggested Claude Code Prompt

```text
Read docs/course/student-course-review.md and docs/course/course-improvement-backlog.md.
Then inspect the live course HTML at ../claude-code-ai-course.html if present, and also compare against the live published page if web access is available.
Implement the highest-priority course improvements from the backlog.
Start with:
1. Align starter repo docs with the live course rubric.
2. Add Core / Professional / Native tracks.
3. Add local/offline fallback paths for MCP, plugin install, Cowork plugin, and CI.
4. Add exact starter templates for skills, hooks, agents, MCP, and plugin marketplace.
5. Add evidence/export guidance for students.
Keep changes scoped and run verification before summarizing.
```

## Suggested First Fixes

Start with the high-priority backlog items:

- `CCI-001` Tooling standardization
- `CCI-002` Starter repo alignment
- `CCI-003` Capstone scope split
- `CCI-004` External service fallbacks
- `CCI-005` Minimum viable labs
- `CCI-006` Security guardrails

## Git State

There are uncommitted changes. Review with:

```bash
git status --short
git diff --stat
```

Do not reset or discard changes unless you intentionally want to throw away the completed student submission and review artifacts.
