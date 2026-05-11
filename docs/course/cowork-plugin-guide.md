---
type: project
status: active
date: 2026-05-11
tags: [course, cowork, plugin]
---

# Cowork Plugin Guide

## What are Cowork plugins?

Cowork is a non-developer interface for Claude. It surfaces Claude's capabilities — skills, slash commands, and context files — through a workspace UI that knowledge workers can use without opening a terminal or reading source code.

A Cowork plugin is a structured folder that Cowork (or the Claude Code `plugin install` command) reads to register skills, commands, and context files into a workspace session. The folder follows a convention:

```
plugin/
├── .claude-plugin/plugin.json   # manifest: declares what the plugin contains
├── skills/                      # skills invocable by name or /slash-command
├── commands/                    # slash commands shown in the Cowork command palette
├── context/                     # files loaded into context at session start
└── connectors/                  # notes on external service integrations
```

### How Cowork plugins differ from Claude Code plugins

| | Claude Code plugin | Cowork plugin |
|---|---|---|
| Primary user | Developer in terminal | Knowledge worker in browser or app |
| Install method | `claude plugin install <path>` | Cowork dashboard or `claude plugin install` |
| Skills | SKILL.md files with tool access | SKILL.md files, same format |
| Commands | Slash commands in Claude Code | Slash commands in Cowork command palette |
| Context | CLAUDE.md and project files | Explicit context files declared in manifest |
| Connectors | Not applicable | Google Drive, Slack, Notion, and others |

Both formats use the same SKILL.md schema. A plugin folder that works locally with Claude Code also works as a Cowork plugin — the manifest adds the Cowork-specific declarations.

---

## Core Pass (local only)

Install and use the plugin entirely within Claude Code, without a Cowork account.

### Install

```bash
# From the repo root
claude plugin install ./cowork/plugin
```

### Verify

After install, the skills and commands are available in your Claude Code session:

```
/summarize-thread
/draft-reply Q3 investor update
/daily-brief
```

### Fill in context files

Before using the plugin, fill in the three context templates:

- `cowork/plugin/context/about-me.md` — your name, role, company, and focus areas
- `cowork/plugin/context/brand-voice.md` — tone, phrases to use, phrases to avoid
- `cowork/plugin/context/working-preferences.md` — working hours, deep work blocks, daily tools

These files are loaded into the model context at session start. The more specific you are, the more useful the plugin becomes.

---

## Native/Team Pass (Cowork connector integration)

For a live Cowork integration, connect the plugin to your workspace via the Cowork dashboard.

### Steps

1. Log in to your Cowork workspace.
2. Open **Plugins** and select **Install from folder** or **Install from GitHub**.
3. Point to `cowork/plugin/` or the published repo URL.
4. Cowork reads `plugin.json` and registers the skills and commands automatically.

### Connector setup

The plugin ships with connector notes at `cowork/plugin/connectors/google-drive-and-slack.md`. Connect only the folders and channels relevant to your current work:

- **Google Drive**: product launch folder, approved brand assets folder
- **Slack**: product launch channel, customer-facing feedback channel

Narrow connector scope keeps the context budget focused and reduces the risk of surfacing irrelevant or sensitive documents.

### Team sharing

On a Team Pass, installed plugins are shared across the workspace. Each team member fills in their own `context/about-me.md` and `context/working-preferences.md` in their personal profile. Brand voice and connector notes are shared at the workspace level.

---

## Scaffolding walkthrough

Each file in `cowork/plugin/` has a specific role. Here is what students should customize.

### `.claude-plugin/plugin.json`

The manifest. Declares plugin name, version, and which skills, commands, and context files are included. Update `"author"` to your name. Add or remove skill paths as you build out the plugin.

### `skills/summarize-thread/SKILL.md`

A static skill — no `$ARGUMENTS` required. Invoked as `/summarize-thread`. The instruction tells Claude to read the current conversation and produce a 3–5 bullet summary. Customize the bullet format or summary focus for your team's workflow.

### `skills/draft-reply/SKILL.md`

A dynamic skill with `$ARGUMENTS`. Invoked as `/draft-reply <topic>`. The `$ARGUMENTS` token is replaced at runtime with whatever the user passes (e.g. `/draft-reply Q3 investor update`). The instruction references `context/brand-voice.md` — fill that file in first for best results.

### `commands/daily-brief.md`

A slash command. Commands are similar to skills but are optimized for the Cowork command palette UI. This one produces a morning briefing using `context/about-me.md` and `context/working-preferences.md`. Customize the output format or add sections relevant to your role.

### `context/about-me.md`

Who you are. Used by skills that need to personalize output (audience, positioning, role context). Fill in all fields before your first session.

### `context/brand-voice.md`

Tone and language guidelines. Used by `draft-reply` and `campaign-brief`. The more specific you are — concrete phrases to use and avoid — the more consistent the output.

### `context/working-preferences.md`

Your working style. Used by `daily-brief` and `stakeholder-update`. Helps the model infer priorities and communication norms without asking every session.

### `connectors/google-drive-and-slack.md`

Notes on external service integrations. These are read by skills when a connector is active in Cowork. For local-only use, these notes have no effect — they only activate when the corresponding connector is configured in the Cowork dashboard.
