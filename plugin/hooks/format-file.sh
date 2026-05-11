#!/usr/bin/env sh
set -eu

if [ -n "${CLAUDE_FILE_PATH:-}" ] && [ -f "$CLAUDE_FILE_PATH" ]; then
  npx prettier --write "$CLAUDE_FILE_PATH" >/dev/null 2>&1 || true
fi
