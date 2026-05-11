# Course Completion Matrix

This repository is the completed course submission for "Claude Code: From Unaware to Native".

## Level 1: Unaware

| Module | Completion evidence |
| --- | --- |
| What is Claude Code? | The repo demonstrates an agent-managed CLI project with source, tests, docs, hooks, and CI. |
| What is an AI Agent? | CLAUDE.md, skills, hooks, and the test-reviewer agent map the perceive, reason, act, observe, and iterate loop into project assets. |
| Why Teams Are Switching | The repo packages repeatable team workflows instead of one-off prompts. |

## Level 2: Curious

| Module | Completion evidence |
| --- | --- |
| Install in 5 Minutes | README includes install and first-run commands. |
| First Prompt + Housekeeping | The priority feature is a concrete accepted diff with tests. |
| VS Code | The project is editor-ready TypeScript with strict config and discoverable commands. |
| Plan Mode & Diff Review | `.claude/skills/pr-review` defines a read-first review workflow. |
| Prompting Patterns | Skills constrain scope, verification, and file references. |

## Level 3: Fluent

| Module | Completion evidence |
| --- | --- |
| CLAUDE.md & Project Setup | `CLAUDE.md`, `.claudeignore`, and `docs/architecture.md`. |
| Lab A: Advanced RAG & Knowledge Memory | `docs/course/lab-a-rag.md` specifies a citation-grounded retrieval pipeline and sample answer. |
| Custom Skills | `add-feature`, `pr-review`, `deploy-check`, `generate-adr`, and `deep-research`. |
| Built-in Subagents | `test-reviewer` captures isolated QA review behavior with persistent memory. |
| Lab B: Multi-Agent Orchestration | `docs/course/lab-b-agent-pipeline.md` defines the collector, extractor, mapper, and reporter pipeline. |
| Plugin Marketplace | `plugin/` packages skills, hooks, an agent, and MCP config for distribution. |
| Obsidian via MCP | `.mcp.json` provides a portable filesystem MCP connection for project knowledge. |
| Hooks | `.claude/settings.json` wires formatting and safety hooks. |
| Debugging | Tests and the review workflow support reproduce-first debugging. |

## Level 4: Native

| Module | Completion evidence |
| --- | --- |
| Custom Agent Teams | `.claude/agents/test-reviewer.md`. |
| Lab C: Local LLM Security & Deployment | `docs/course/lab-c-sandbox-runtime.md` specifies allowed/denied commands, logging, timeouts, and isolation. |
| Background Agents & Voice | `docs/course/native-operations.md` documents scheduled review and voice-control operating patterns. |
| Worktrees & Batch | `docs/course/native-operations.md` documents parallel worktree usage. |
| Headless Mode & Agent SDK | `.github/workflows/claude-review.yml`. |
| Build Your Plugin | `plugin/.claude-plugin/plugin.json` and packaged plugin folders. |
| Team Operating System | Project memory, skills, hooks, agent, MCP, plugin, and CI are all present. |

## Capstone Checklist

| Requirement | Artifact |
| --- | --- |
| CLAUDE.md | `CLAUDE.md` |
| Three custom skills | Static: `.claude/skills/pr-review`; `$ARGUMENTS`: `.claude/skills/deploy-check`; `context:fork`: `.claude/skills/deep-research` |
| One custom agent | `.claude/agents/test-reviewer.md` |
| Two hooks | `.claude/hooks/format-file.sh`, `.claude/hooks/block-dangerous-bash.sh` |
| One MCP connection | `.mcp.json` and `.claude/mcp.json` |
| Plugin | `plugin/` |
| CI integration | `.github/workflows/claude-review.yml` |
| Cowork context files | `cowork/about-me.md`, `cowork/brand-voice.md`, `cowork/working-preferences.md` |
| Custom Cowork plugin | `cowork/plugin/` |
