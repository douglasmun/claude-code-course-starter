# task-cli-toolkit Plugin

Completed course plugin for the Claude Code + Cowork course.

## Install

### Local install (Core Pass — sufficient for course completion)

Run from the repo root:

```bash
claude plugin install ./plugin
```

### GitHub install

Install directly from a public GitHub repository:

```bash
claude plugin install https://github.com/<user>/repo/plugin
```

Replace `<user>/repo` with the GitHub path of the forked or published repo.

### Marketplace publish (Professional / Native Pass)

To publish to the Claude Code plugin marketplace:

1. Ensure `plugin/.claude-plugin/plugin.json` has a unique `name`, a valid `version`, and an `author` field.
2. Run `claude plugin publish ./plugin` from the repo root. This requires a Claude Pro or Team plan with marketplace access enabled.
3. After publishing, any user can install via `claude plugin install <plugin-name>`.

The marketplace publish flow may require plan access. For the Core Pass, local install is sufficient.

> **Note:** For the Core Pass, local install is sufficient. Marketplace publishing is a stretch goal for the Professional and Native/Team tracks.

## What's Included

- `/add-feature <description>` — Plan and implement a new feature
- `/pr-review <base-ref>` — Review a branch diff against project policy
- `/deploy-check <environment>` — Validate release readiness
- `/generate-adr <decision>` — Draft an architecture decision record
- `/deep-research <topic>` — Explore the codebase (runs in subagent)
- `test-reviewer` agent — Automated test coverage review with memory
- Auto-format hook — Prettier runs on every edit
- Safety hook — Blocks destructive commands (rm -rf, sudo)
- Filesystem MCP config — Exposes docs, cowork context, and CLAUDE.md

## Customize

Edit any SKILL.md or agent file to match your project's conventions.
