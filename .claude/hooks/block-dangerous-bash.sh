#!/usr/bin/env sh
set -eu

tool_input="${CLAUDE_TOOL_INPUT:-}"

if printf "%s" "$tool_input" | grep -Eq "rm -rf|sudo|chmod 777|curl .*\|.*bash"; then
  echo "BLOCKED: command violates task-cli safety policy"
  exit 1
fi

exit 0
