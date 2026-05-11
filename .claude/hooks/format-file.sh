#!/usr/bin/env sh
set -eu

if [ -n "${CLAUDE_FILE_PATH:-}" ] && [ -f "$CLAUDE_FILE_PATH" ]; then
  case "$CLAUDE_FILE_PATH" in
    *.ts|*.tsx|*.js|*.json|*.md)
      npx prettier --write "$CLAUDE_FILE_PATH" >/dev/null 2>&1 || true
      ;;
  esac
fi
