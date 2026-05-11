# Student Course Review

Review date: 2026-05-11

Course reviewed: `https://douglasmun.github.io/claude-code-course.html`

## Overall Review

The course is strong because it teaches a durable mental model rather than a bag of commands. The externalization frame, agent loop, and Code/Cowork mapping make the later topics feel connected: CLAUDE.md, skills, hooks, MCP, plugins, agents, and CI are all explained as parts of one operating system.

As a student, I would rate the course as advanced-beginner to intermediate rather than pure beginner. The early modules are beginner-friendly, but the capstone quickly moves into enterprise-flavored workflows: MCP, plugin marketplaces, CI, Cowork plugins, scheduling, agent memory, and headless mode. That is useful, but it needs more scaffolding for learners without current Claude Code, Cowork, Node, GitHub Actions, Docker, or MCP experience.

## What Worked Well

- The agent loop is an excellent anchor. It gives students a way to reason about new Claude Code features without memorizing them.
- The Code vs. Cowork bridge is valuable. It helps the course serve both developers and non-developer AI workflow builders.
- The course has concrete checkpoints after every module, which prevents passive reading.
- The capstone rubric is clear and portfolio-oriented.
- The starter repo branch progression is a good idea. It gives students a way to compare their own work against milestones.

## Student Friction Points

1. The course asks students to use many features that may be plan-gated, preview-only, or unavailable in their environment.
2. Package manager guidance is inconsistent across the course and starter repo: `npm`, `pnpm`, and native install all appear.
3. Some checkpoints require real external services, such as Obsidian, GitHub App, Slack, Cowork, or private plugin marketplaces.
4. The labs are ambitious enough to feel like separate mini-courses. They need starter data, expected outputs, and minimum viable versions.
5. The capstone asks for "published to a marketplace" and "teammate installed it"; solo students need a local or simulated acceptance path.
6. Several examples are excellent conceptually but not immediately copy-paste runnable.

## Recommended Course Positioning

Market this as:

> "A practical intermediate course for turning Claude Code from a coding assistant into a team operating system."

Then add a short beginner on-ramp for students who have not used terminal, Git, Node, VS Code, or GitHub Actions recently.

## Suggested Passing Path

Define three tracks:

- **Core Pass:** starter repo, CLAUDE.md, one feature, three skills, two hooks, one agent, local MCP config, local plugin install.
- **Professional Pass:** everything in Core plus CI/headless review, real MCP server, plugin installed in a fresh checkout.
- **Native/Team Pass:** everything in Professional plus Cowork plugin, connector integration, marketplace distribution, teammate validation.

This would reduce ambiguity while preserving the advanced capstone for teams.

## Module-Level Notes

| Area | Student impression | Improvement |
| --- | --- | --- |
| Level 1 | Clear and motivating. | Add a one-page downloadable mental model diagram. |
| Level 2 | Practical, but install guidance depends on current platform state. | Add platform-specific install troubleshooting and fallback commands. |
| Level 3 | Best part of the course. Skills, memory, hooks, MCP, and plugins are where the course becomes distinctive. | Add copy-paste starter files for each artifact. |
| Level 4 | Powerful but dense. Several features feel enterprise or preview-grade. | Split "Native" into required vs. stretch. |
| Foundation Labs | Valuable, but too large for a course that is primarily about Claude Code. | Provide mock data, skeletons, and "minimum viable lab" definitions. |
| Capstone | Strong portfolio target. | Add a complete exemplar repo diff or checklist with exact file paths. |

## Final Student Verdict

I would recommend the course to an engineer, technical PM, solutions architect, or power user who wants to operationalize Claude Code. I would not yet recommend it unchanged to a complete beginner. With clearer tracks, starter templates, and environment fallbacks, it could serve both audiences.
