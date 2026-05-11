---
type: project
status: active
date: 2026-05-11
tags: [course, capstone, self-check]
---

# Capstone Self-Check

Work through this checklist before submitting your capstone for review.

## Core Pass

- [ ] `CLAUDE.md` exists at repo root — run `cat CLAUDE.md | head -5` to confirm it has a project name and stack section
- [ ] `.claude/skills/pr-review/SKILL.md` exists — run `head -5 .claude/skills/pr-review/SKILL.md` and confirm it has `name: pr-review` in frontmatter
- [ ] `.claude/skills/deploy-check/SKILL.md` exists and references `$ARGUMENTS` — run `grep ARGUMENTS .claude/skills/deploy-check/SKILL.md`
- [ ] `.claude/skills/deep-research/SKILL.md` exists and has `context: fork` — run `grep "context:" .claude/skills/deep-research/SKILL.md`
- [ ] `.claude/agents/test-reviewer.md` exists and has `memory: user` — run `grep "memory:" .claude/agents/test-reviewer.md`
- [ ] `.claude/hooks/format-file.sh` is executable — run `ls -la .claude/hooks/`
- [ ] `.claude/hooks/block-dangerous-bash.sh` is executable — same as above
- [ ] Both hooks are wired in `.claude/settings.json` — run `cat .claude/settings.json | grep -A2 hooks`
- [ ] `.mcp.json` exists and is valid JSON — run `jq empty .mcp.json && echo valid`
- [ ] One MCP server is configured — run `jq '.mcpServers | keys' .mcp.json`

## Professional Pass

- [ ] `plugin/.claude-plugin/plugin.json` exists and is valid JSON — run `jq empty plugin/.claude-plugin/plugin.json && echo valid`
- [ ] Plugin is self-contained (has its own skills and hooks) — run `ls plugin/skills/ plugin/hooks/`
- [ ] `.github/workflows/` contains a workflow file — run `ls .github/workflows/`
- [ ] Workflow uses `ANTHROPIC_API_KEY` — run `grep ANTHROPIC .github/workflows/*.yml`

## Native/Team Pass

- [ ] `cowork/about-me.md` is populated (not a blank template) — run `cat cowork/about-me.md`
- [ ] `cowork/brand-voice.md` is populated — same check
- [ ] `cowork/working-preferences.md` is populated — same check
- [ ] `cowork/plugin/` exists with a valid plugin.json — run `jq empty cowork/plugin/.claude-plugin/plugin.json && echo valid`
- [ ] Simulated teammate validation: `git clone . /tmp/capstone-test && cd /tmp/capstone-test && claude --version && ls .claude/`

## Final diff check

Run this to see everything you added relative to the original scaffold:
```bash
git diff main -- .claude/ plugin/ cowork/ .github/workflows/
```

Compare to the reference:
```bash
git diff reference-capstone -- .claude/ plugin/ cowork/ .github/workflows/
```
