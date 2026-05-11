---
type: project
status: active
date: 2026-05-11
tags: [course, ci, github-actions]
---

# CI Workflow Preflight Checklist

Use this checklist before enabling the Claude Code CI workflow in a new repository.

## Required Secrets

`ANTHROPIC_API_KEY` must be set in the repo under **Settings → Secrets and variables → Actions → New repository secret**.

Without this secret the workflow will fail immediately with a `401 Unauthorized` error from the Anthropic API.

## Required Permissions

The workflow needs the following GitHub Actions permissions. Set them in `.github/workflows/claude-review.yml` under the `permissions` key:

```yaml
permissions:
  contents: read
  pull-requests: write
```

`pull-requests: write` is required if the workflow posts a review comment back to the PR. If you only log the output without posting, `contents: read` is sufficient.

## Fork PR Limitations

GitHub Actions does not pass repository secrets to workflows triggered by pull requests from forks. This means:

- A contributor who forks the repo and opens a PR will see the Claude review step fail with a missing secret error.
- Workaround: use the `pull_request_target` trigger with a manual approval gate, or restrict CI review to internal contributors only.
- For course submissions, run `npm test && npm run build` locally to satisfy the Core Pass requirement. CI is a stretch goal.

## Budget Cap

Add `--max-tokens 4096` or an equivalent budget flag to limit spend per run:

```yaml
- run: npx @anthropic-ai/claude-code -p "Review the latest diff for missing tests." --max-tokens 4096
```

Without a cap, a long diff or a verbose prompt can produce an unexpectedly large response and a higher API bill.

## Expected Failure Modes

| Symptom | Likely cause | Fix |
|---|---|---|
| `Error: ANTHROPIC_API_KEY is not set` | Secret not configured | Add the secret in repo Settings |
| `403 Forbidden` | Wrong key or plan tier | Verify the key in the Anthropic console |
| Workflow times out | Prompt too broad or diff too large | Add `--max-tokens` and scope the prompt |
| `pull-requests: write` permission denied | Permissions key missing from workflow | Add the `permissions` block |
| No output / empty review | Claude returned an empty response | Check that the prompt is non-empty and the diff is not empty |
| Fork PR: secret not found | Fork PRs do not receive secrets by default | Use `pull_request_target` with manual approval or restrict to internal PRs |
