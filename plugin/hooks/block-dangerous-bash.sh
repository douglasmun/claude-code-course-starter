#!/usr/bin/env sh
set -eu

if printf "%s" "${CLAUDE_TOOL_INPUT:-}" | grep -Eq "rm -rf|sudo|chmod 777|curl .*\|.*bash"; then
  echo "BLOCKED: command violates task-cli safety policy"
  exit 1
fi
