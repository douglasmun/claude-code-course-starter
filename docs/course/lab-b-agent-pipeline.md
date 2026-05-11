# Lab B: Multi-Agent Orchestration

## Minimum Viable Lab (30–60 min)
Sample input: Use the mock threat intel JSON in `labs/lab-b-samples/`.
Expected output: A pipeline that runs collector → extractor → reporter and prints a 5-line summary.
Stretch: Add a mapper agent and structured output.

## Goal

Model a four-agent threat-hunting workflow using Claude Code project assets.

## Agent Roles

| Agent | Responsibility | Course loop step |
| --- | --- | --- |
| Collector | Gather changed files, docs, and test outputs. | Perceive |
| Extractor | Extract risks, missing tests, and policy violations. | Reason |
| Mapper | Map findings to project rules and severity. | Reason and act |
| Reporter | Produce a structured review or issue-ready report. | Act |

## Implementation Mapping

- Collector and extractor behavior live in `.claude/skills/deep-research/SKILL.md`.
- Mapper and reporter behavior live in `.claude/skills/pr-review/SKILL.md`.
- Test-specific review is delegated to `.claude/agents/test-reviewer.md`.

## Sample Output Shape

```markdown
## Findings
- High: src/commands/example.ts:12 writes directly to disk, bypassing src/store/tasks.ts.
- Medium: __tests__/example.test.ts does not cover invalid input.

## Evidence
- CLAUDE.md requires all file I/O through src/store/tasks.ts.
- npm test passed or failed with summarized output.
```

## Acceptance Criteria

- Each role has a bounded responsibility.
- Findings are grounded in project rules.
- The reporter output is directly usable in a PR review.
