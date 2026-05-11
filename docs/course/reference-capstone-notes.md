---
type: project
status: active
date: 2026-05-11
tags: [course, capstone, reference]
---

# Reference Capstone Notes

This branch is the reference capstone submission. Every required artifact is present and annotated. Use it to understand what "passing" looks like — not to copy, but to compare.

Compare your work to this branch at any time:
```bash
git diff main reference-capstone -- .claude/
git diff main reference-capstone -- plugin/
git diff main reference-capstone -- cowork/
git diff main reference-capstone -- .github/
```

## Artifact Annotations

### 1. CLAUDE.md
**Path:** `CLAUDE.md`
**What was built:** Project policy covering stack, commands, conventions, architecture references, and a Don't list. Uses @file references to docs/architecture.md to keep it under 200 lines.
**What a reviewer looks for:** Presence of @file references, a clear Don't section with non-obvious rules (not just "write good code"), and commands that actually match package.json.

### 2. Three Custom Skills
**Paths:** `.claude/skills/pr-review/SKILL.md`, `.claude/skills/deploy-check/SKILL.md`, `.claude/skills/deep-research/SKILL.md`
**What was built:** pr-review is a static skill (no arguments) that enforces a read-first review workflow. deploy-check takes $ARGUMENTS (environment name) and runs a release readiness checklist. deep-research uses context:fork with agent: Explore to delegate codebase research to a subagent.
**What a reviewer looks for:** One skill of each type (static, $ARGUMENTS, context:fork). Each should have a frontmatter with name and description. The $ARGUMENTS skill should reference $ARGUMENTS in its body. The context:fork skill should have `context: fork` in frontmatter.

### 3. One Custom Agent
**Path:** `.claude/agents/test-reviewer.md`
**What was built:** A proactive test-coverage reviewer with `memory: user` frontmatter. It maintains a MEMORY.md tracking patterns it has observed across sessions — which modules have weak test coverage, which edge cases were previously found.
**What a reviewer looks for:** Frontmatter with at least `name`, `description`, and `memory: user`. A clear persona and scope — the agent should have a specific job, not be a general assistant.

### 4. Two Hooks
**Paths:** `.claude/hooks/format-file.sh`, `.claude/hooks/block-dangerous-bash.sh`
**What was built:** format-file.sh runs Prettier on any TypeScript/JS/JSON/Markdown file after every Edit or Write. block-dangerous-bash.sh exits non-zero if the command matches dangerous patterns (rm -rf, sudo, chmod 777, curl|bash).
**What a reviewer looks for:** Both hooks are wired in `.claude/settings.json` under the correct lifecycle events (PostToolUse and PreToolUse respectively). The scripts are executable and use `set -eu`.

### 5. One MCP Connection
**Paths:** `.mcp.json`, `.claude/mcp.json`
**What was built:** A filesystem MCP server exposing the project docs directory. No external service required — works offline with `@anthropic-ai/mcp-server-filesystem`.
**What a reviewer looks for:** Valid JSON with a `mcpServers` key. For the Core Pass, a local filesystem server is sufficient — no Obsidian account needed.

### 6. Plugin Package
**Path:** `plugin/`
**What was built:** A complete plugin package with `.claude-plugin/plugin.json`, copies of all skills, the test-reviewer agent, both hooks, and a bundled `.mcp.json`. Installable with `claude plugin install ./plugin`.
**What a reviewer looks for:** A valid `plugin.json` with name, version, description, and author. The plugin folder should be self-contained — a teammate should be able to install it in a fresh clone.

### 7. CI Integration
**Path:** `.github/workflows/claude-review.yml`
**What was built:** A GitHub Actions workflow that runs `claude -p "Review this PR diff for missing tests and security issues."` on every pull request. Requires `ANTHROPIC_API_KEY` secret in repo settings.
**What a reviewer looks for:** A valid workflow YAML with a trigger (`on: pull_request`), the `ANTHROPIC_API_KEY` env var, and a headless claude invocation using `claude -p` or `npx @anthropic-ai/claude-code -p`.

### 8. Cowork Context Files
**Paths:** `cowork/about-me.md`, `cowork/brand-voice.md`, `cowork/working-preferences.md`
**What was built:** Three context files that give Cowork the same semantic memory that CLAUDE.md gives Claude Code. about-me covers role and responsibilities. brand-voice covers tone and communication style. working-preferences covers working hours and tool preferences.
**What a reviewer looks for:** All three files present and populated (not blank templates). Content should be specific — "I work in TypeScript" is better than "I am a developer".

### 9. Cowork Plugin
**Path:** `cowork/plugin/`
**What was built:** A minimal Cowork plugin with two skills (summarize-thread, draft-reply), one slash command (daily-brief), and three context template files. Installable locally with `claude plugin install ./cowork/plugin`.
**What a reviewer looks for:** A valid `.claude-plugin/plugin.json`. At least one skill and one command. Context files in `context/` that students have filled in.

## What I Would Do Differently

1. **The deploy-check skill could be smarter.** It runs a fixed checklist but doesn't adapt to the environment argument — staging vs. production checks are identical. A better version would branch on `$ARGUMENTS` to run stricter checks for production.

2. **The test-reviewer agent MEMORY.md is sparse.** After a real project it would contain accumulated observations about which files historically have the weakest coverage. A richer starting memory would make it more useful from session one.

3. **The CI workflow has no cost cap.** A `--max-tokens` flag or a budget guardrail would prevent runaway spend on large PRs. Add `--output-format json` and pipe to a cost-checking script for production use.

## How to Use This Reference

1. Clone the repo and work on `main` — that is your working copy
2. Build your capstone from scratch following the course modules
3. When you want to compare: `git diff main reference-capstone -- <path>`
4. Use `docs/course/self-check.md` to verify your submission before grading
5. Don't copy files from this branch — the point is to understand why each artifact is built the way it is
