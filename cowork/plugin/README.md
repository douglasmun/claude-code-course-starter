# Cowork Starter Plugin

A minimal Cowork plugin template for the Claude Code course capstone.

## What's included

### Skills
- `skills/summarize-thread` — static skill, no arguments needed; summarizes the current conversation thread
- `skills/draft-reply` — takes a topic as `$ARGUMENTS`; drafts a professional reply
- `skills/campaign-brief` — takes a launch name as `$ARGUMENTS`; produces a non-technical campaign brief
- `skills/stakeholder-update` — takes an audience as `$ARGUMENTS`; produces a concise status update

### Commands
- `commands/daily-brief.md` — slash command for a morning briefing
- `commands/weekly-product-update.md` — slash command for a weekly stakeholder update

### Context
- `context/` — template files you fill in with your own context

## Local install (Core Pass)

```bash
claude plugin install ./cowork/plugin
```

## Using the skills

```
/summarize-thread
/draft-reply Q3 investor update
/daily-brief
/campaign-brief product launch v2
/stakeholder-update engineering leads
/weekly-product-update
```

## Context files

Fill in `context/about-me.md`, `context/brand-voice.md`, and `context/working-preferences.md` before using the plugin. These files give Claude the context it needs to personalize responses.

## Connector notes

For full Cowork integration (Native/Team Pass), connect this plugin to your Cowork workspace via the Cowork dashboard. The skills and commands work without a live Cowork connection for local use.

See `connectors/google-drive-and-slack.md` for connector scope recommendations.
