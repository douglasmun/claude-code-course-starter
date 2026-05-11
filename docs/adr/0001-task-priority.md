# ADR 0001: Add Priority to Tasks

## Status

Accepted

## Context

The course project needs a concrete feature change that exercises the full Claude Code workflow: inspect the codebase, plan a scoped implementation, edit TypeScript, update tests, and verify behavior.

## Decision

Tasks now include a `priority` field with allowed values `low`, `normal`, and `high`. The `add` command accepts `--priority` and defaults to `normal`. The `list` command displays the priority beside each task.

## Consequences

- The CLI remains backward-compatible for existing `task add "title"` usage.
- Older task data without a priority is displayed as `normal`.
- Input validation happens at the CLI boundary in `src/index.ts`.

## Alternatives Considered

- Tags: more flexible, but less focused for a first feature.
- Due dates: useful, but requires date parsing and a larger test surface.
