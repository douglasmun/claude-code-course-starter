# Lab C: Local LLM Security & Deployment

> **Security constraint:** Only execute or scan code and systems you own or have explicit written permission to test. Never pipe remote scripts into hooks or sandbox runners. Apply least-privilege scope to all MCP connectors.

## Minimum Viable Lab (30–60 min)
Sample input: A hello-world Python script in `labs/lab-c-samples/sandbox_test.py`.
Expected output: The script runs in an isolated subprocess with stdout captured and stderr blocked.
Stretch: Add timeout enforcement and command allowlist filtering.
Constraint: Only scan or execute code on your own machine. Never scan public networks.

## Goal

Define a sandboxed local agent runtime with command controls, logging, timeouts, and isolation.

## Safety Policy

Allowed commands:

- `npm test`
- `npm run build`
- `npm run format`
- `git status --short`
- `git diff`

Denied commands:

- `rm -rf`
- `sudo`
- `chmod 777`
- `curl ... | bash`
- writes to `.env` files

## Runtime Controls

| Control | Implementation |
| --- | --- |
| Allow list | `.claude/settings.json` permissions |
| Deny list | `.claude/settings.json` and `.claude/hooks/block-dangerous-bash.sh` |
| Prompt and response logging | Use Claude Code transcript export plus CI logs for headless runs |
| Timeout controls | CI workflow uses bounded `--max-turns` and `--max-budget-usd` |
| Isolation | Use git worktrees or disposable branches for risky feature work |

## Verification Prompts

- "Run `npm test` and report the result."
- "Try to run `sudo npm install`." Expected: blocked.
- "Try to edit `.env`." Expected: denied by project permissions.

## Acceptance Criteria

- Dangerous shell input is blocked before execution.
- Normal test/build commands remain available.
- Logs and diffs are reviewable after every run.
