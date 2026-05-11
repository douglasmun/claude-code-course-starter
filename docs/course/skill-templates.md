---
type: project
status: active
date: 2026-05-11
tags: [course, skills, templates]
---

# Skill Templates

## Skill Type Comparison

| Type | How it works | When to use |
|---|---|---|
| Static | The SKILL.md body is the complete instruction. No user input is substituted. | Checklist-style workflows that always do the same thing, such as a release verification or a linting pass. |
| `$ARGUMENTS` | The literal token `$ARGUMENTS` in the SKILL.md body is replaced at runtime with whatever the user typed after the slash command. | Any skill where the user provides a subject: a feature name, a branch ref, an environment name, a decision title. |
| `context:fork` | Claude spawns a subagent with its own context window to execute the skill, then returns results to the parent. | Long-running or deep-search tasks where you want the parent context to stay clean: codebase exploration, large test sweeps, research passes. |

---

## Example 1: Static Skill (`pr-review`)

This is the actual `.claude/skills/pr-review/SKILL.md` in this repo. It is **static** — the review process is fixed regardless of what the user types. `$ARGUMENTS` is used here to accept an optional base ref, but the workflow steps do not change.

```markdown
---
name: pr-review
description: Review a branch diff against the task-cli project standards
tools: [Read, Grep, Glob, Bash]
user-invocable: true
---
Review the pull request or branch diff described by $ARGUMENTS.

Process:
1. Read CLAUDE.md and docs/architecture.md.
2. Run `git status --short` and inspect the diff against the requested base ref, defaulting to `main`.
3. Review for correctness, security issues, TypeScript strictness, missing tests, and direct file I/O outside src/store/.
4. Run `npm test` when dependencies are installed.
5. Return findings first, ordered by severity, with file and line references.

Do not rewrite the code during review unless the user explicitly asks for fixes.
```

Type classification: the workflow is a fixed checklist. The `$ARGUMENTS` value customises the base ref but does not change the steps.

---

## Example 2: `$ARGUMENTS` Skill (`add-feature`)

This is the actual `.claude/skills/add-feature/SKILL.md`. It is a pure **`$ARGUMENTS`** skill: every invocation is different because the user supplies a feature description that drives the entire implementation.

```markdown
---
name: add-feature
description: Plan and implement a new feature for the task-cli project
tools: [Read, Edit, Write, Bash, Grep, Glob]
user-invocable: true
---
Implement the feature described by $ARGUMENTS for the task-cli project.

Follow this process:
1. Read CLAUDE.md and understand the project conventions
2. Plan the changes needed (which files to modify/create)
3. Implement the feature following the existing patterns in src/commands/
4. Add or update tests in __tests__/
5. Run `npm test` to verify all tests pass
6. Run `npm run format` to ensure consistent formatting

Constraints:
- Follow the conventions in CLAUDE.md
- All file I/O goes through src/store/tasks.ts
- Every new command gets its own file in src/commands/
- Every new feature gets at least one test
```

Type classification: `$ARGUMENTS` drives the entire task. The user provides the feature description; the steps are a scaffold, not a rigid checklist.

---

## Example 3: `$ARGUMENTS` + `context:fork`-Ready Skill (`deploy-check`)

This is the actual `.claude/skills/deploy-check/SKILL.md`. It is designed as a **`context:fork`** candidate: it reads multiple files, runs multiple commands, and produces a structured report. Running it in a subagent keeps the parent context clean.

```markdown
---
name: deploy-check
description: Verify task-cli is ready to build, release, or deploy
tools: [Read, Grep, Glob, Bash]
user-invocable: true
---
Run a release readiness check for $ARGUMENTS.

Checklist:
1. Read package.json, tsconfig.json, CLAUDE.md, and README.md.
2. Verify dependencies are installed or report that `npm install` is needed.
3. Run `npm test`.
4. Run `npm run build`.
5. Check `git status --short` and summarize uncommitted changes.
6. Confirm README usage examples match the current CLI behavior.

Return:
- Status: ready or blocked
- Evidence: exact commands run
- Blockers: concrete fixes required before release
- Follow-ups: non-blocking improvements
```

Type classification: this skill reads broadly, runs multiple commands, and produces a structured report. Forking a subagent prevents these tool calls from polluting the parent conversation context.

To invoke as a fork, add `context: fork` to the frontmatter:

```yaml
---
name: deploy-check
context: fork
...
---
```

This skill uses `$ARGUMENTS` and is ready to be upgraded to `context:fork` by adding `context: fork` to the frontmatter. See `deep-research` for a fully wired `context:fork` example.
