# Course Improvement Backlog

Use this as the issue list for a future Claude Code fix pass.

## High Priority

| ID | Area | Issue | Suggested fix |
| --- | --- | --- | --- |
| CCI-001 | Install and tooling | The course mixes native Claude Code install, deprecated npm install, project `npm`, example `pnpm`, and starter repo Node/Jest assumptions. This creates avoidable setup confusion. | Add a single "tooling standard" table: Claude Code install method, project package manager, fallback package manager, and exact commands. Keep npm/pnpm/bun examples separated by environment. |
| CCI-002 | Starter repo alignment | The live course is newer than the starter repo README and older local course copy. Some live capstone requirements are not obviously present in the starter. | Update starter README with live-course v1.2 requirements and link to `docs/course/completion-matrix.md`. Add a "How to grade this repo" section. |
| CCI-003 | Capstone scope | The capstone requires Code artifacts, Cowork artifacts, MCP, plugin publishing, CI, and teammate validation. This is too much for a single mandatory pass. | Split capstone into Core, Professional, and Native/Team tracks with explicit minimum passing criteria. |
| CCI-004 | External service dependency | MCP, Cowork connectors, GitHub App, Slack, Obsidian, and private marketplace steps require accounts or plan tiers students may not have. | Provide local/offline alternatives for every external dependency, such as filesystem MCP, local plugin install, mock Cowork plugin, and simulated teammate validation. |
| CCI-005 | Labs too broad | Labs A, B, and C are 8-12 hours each and can become independent courses in RAG, multi-agent orchestration, and LLM sandboxing. | Add minimum viable lab versions with sample input, expected output, and "stretch" sections. |
| CCI-006 | Security guardrails | Lab C and MCP examples could encourage risky command execution or broad connector scope if copied without context. | Add explicit "do not scan public networks", "least privilege connector scope", and "never pipe remote scripts in production hooks" warnings. |

## Medium Priority

| ID | Area | Issue | Suggested fix |
| --- | --- | --- | --- |
| CCI-007 | Skill examples | The course says students need static, `$ARGUMENTS`, and `context:fork` skills, but the distinction can blur during implementation. | Add three complete minimal `SKILL.md` examples side by side and explain when each is appropriate. |
| CCI-008 | Hooks | Hook examples are conceptually clear, but students need exact JSON/schema and cross-platform scripts. | Provide `.claude/settings.json` plus reusable shell scripts for format and safety hooks. |
| CCI-009 | Agent memory | The rubric asks for real `MEMORY.md` content, but user-level memory may contain private information and may not belong in git. | Clarify what should be committed: a demo memory file or screenshot evidence, not sensitive user memory. |
| CCI-010 | Plugin publishing | The course asks for marketplace publishing, which is hard for solo learners. | Add "local install pass" and "marketplace pass" alternatives. Provide a sample `marketplace.json`. |
| CCI-011 | CI workflow | The CI example assumes `ANTHROPIC_API_KEY` and GitHub Actions permissions. | Add a preflight checklist: secrets, permissions, fork PR limitations, budget cap, and expected failure modes. |
| CCI-012 | Cowork plugin | The Cowork capstone requirement is useful but under-scaffolded for students who have only used Code. | Add a minimal Cowork plugin example with two skills, one slash command, context files, and connector notes. |
| CCI-013 | Progress tracking | The course has local progress buttons but no obvious export/share of completion evidence. | Add "export completion" or "copy progress summary" button. |
| CCI-014 | Rubric evidence | The rubric scores artifacts, but students may not know what evidence to submit. | Add an evidence table: requirement, expected file path, screenshot or command output, pass criteria. |

## Low Priority

| ID | Area | Issue | Suggested fix |
| --- | --- | --- | --- |
| CCI-015 | Copy edit | The live course contains a small typo: "Open-sourced on GitHub for forking and customization" has a duplicated "for". | Change to "Open-sourced on GitHub for customization." |
| CCI-016 | Terminology | Some modules use "plugin", "skill", "command", and "slash command" close together. New students may mix them up. | Add a visual artifact taxonomy. |
| CCI-017 | Accessibility | Dense dark UI and long modules may be tiring. | Add print-friendly and high-contrast review modes, plus keyboard navigation hints. |
| CCI-018 | Version volatility | The course names specific Claude Code versions and feature states. These can age quickly. | Add a "last verified" date and a small version matrix at the top. |
| CCI-019 | Command reference | The command reference is useful but long. | Add filters by surface: Code CLI, Code IDE, Cowork, CI/headless. |
| CCI-020 | Starter repo tests | Jest assumes Node/npm, but some student environments may have Bun only. | Keep Jest for Node users, but document Bun fallback or commit a runtime-agnostic smoke test. |

## Suggested Fix Order

1. Align starter repo and live course requirements.
2. Add Core/Professional/Native tracks.
3. Add local/offline fallback paths for MCP, plugin install, Cowork plugin, and CI.
4. Add exact starter templates for skills, hooks, agents, MCP, and plugin marketplace.
5. Tighten security warnings and least-privilege connector guidance.
6. Add exportable progress/evidence.

## Acceptance Criteria for the Next Course Revision

- A student can complete the Core Pass without paid enterprise features or external services.
- Every module checkpoint has a copy-paste runnable example or a clearly marked conceptual-only task.
- The starter repo `main` branch satisfies the live capstone rubric.
- The capstone evidence can be reviewed from files and command output without relying on screenshots.
- Labs have sample inputs, expected outputs, and a minimal pass version.
