---
type: project
status: active
date: 2026-05-11
tags: [course, hooks, templates]
---

# Hook Templates

## `.claude/settings.json` Hook Schema

The `hooks` key in `.claude/settings.json` accepts two trigger types:

- `PostToolUse` — runs after a tool call completes. Use for formatting, linting, or logging.
- `PreToolUse` — runs before a tool call executes. Use for safety checks and deny-list enforcement.

Each hook entry requires:
- `matcher` — a string matched against the tool name (supports `|` for OR, e.g. `"Edit|Write"`)
- `hooks` — an array of hook objects, each with `type: "command"` and a `command` path

Full schema used in this repo:

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Edit(src/**/*.ts)",
      "Edit(__tests__/**/*.ts)",
      "Write(src/**/*.ts)",
      "Write(__tests__/**/*.ts)",
      "Bash(npm test *)",
      "Bash(npm run format *)",
      "Bash(npm run build *)",
      "Bash(git status *)",
      "Bash(git diff *)",
      "Bash(git log *)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(sudo *)",
      "Edit(*.env)"
    ]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/format-file.sh"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/block-dangerous-bash.sh"
          }
        ]
      }
    ]
  }
}
```

---

## `format-file.sh` — Auto-format on Edit/Write

Runs Prettier on any TypeScript, JavaScript, JSON, or Markdown file that Claude Code edits or writes. Fails silently so a missing Prettier install does not block work.

```sh
#!/usr/bin/env sh
set -eu

if [ -n "${CLAUDE_FILE_PATH:-}" ] && [ -f "$CLAUDE_FILE_PATH" ]; then
  case "$CLAUDE_FILE_PATH" in
    *.ts|*.tsx|*.js|*.json|*.md)
      npx prettier --write "$CLAUDE_FILE_PATH" >/dev/null 2>&1 || true
      ;;
  esac
fi
```

---

## `block-dangerous-bash.sh` — Pre-execution safety hook

Reads the proposed Bash command from `CLAUDE_TOOL_INPUT` and exits with status 1 (blocking the command) if it matches a deny pattern. Covers `rm -rf`, `sudo`, `chmod 777`, and pipe-to-bash patterns.

```sh
#!/usr/bin/env sh
set -eu

tool_input="${CLAUDE_TOOL_INPUT:-}"

if printf "%s" "$tool_input" | grep -Eq "rm -rf|sudo|chmod 777|curl .*\|.*bash"; then
  echo "BLOCKED: command violates task-cli safety policy"
  exit 1
fi

exit 0
```

---

Copy these scripts into `.claude/hooks/` in any new project and reference them in `.claude/settings.json`.

## Available Hook Environment Variables

| Variable | Available in | Description |
|---|---|---|
| `CLAUDE_FILE_PATH` | PostToolUse (Edit/Write) | Absolute path of the file just written |
| `CLAUDE_TOOL_INPUT` | PreToolUse (Bash) | The command string about to be run |
| `CLAUDE_SESSION_ID` | All hooks | Unique ID for the current session |
| `CLAUDE_PROJECT_DIR` | All hooks | Root directory of the current project |
| `CLAUDE_TOOL_NAME` | All hooks | Name of the tool being invoked |
