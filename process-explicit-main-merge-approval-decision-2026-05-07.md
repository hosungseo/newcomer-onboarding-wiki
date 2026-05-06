# Process — explicit main merge approval decision

## Purpose

This process converts a completed main-merge review packet into an explicit owner decision. It exists because [[process-main-merge-diff-review-packet-2026-05-07]] and [[quality-gate-main-diff-risk-2026-05-07]] intentionally stop before merge approval.

No merge is automatic. Approval must be written as a separate decision after the evidence packet is reviewed.

## When to use

Use this process only after a packet has already fixed the comparison range, changed-file summary, docs/index delta, link validation, and Pages source impact.

Primary anchors:

- [[manifest-main-merge-diff-review-packet-2026-05-07]]
- [[coverage-main-merge-diff-review-packet-2026-05-07]]
- [[section-main-merge-diff-review-packet-2026-05-07]]
- [[source-main-merge-review-packet-minimum-evidence-2026-05-07]]
- [[faq-merge-review-packet-review-required-2026-05-07]]

## Required evidence packet

Before any approval outcome is recorded, collect the following into the review note or reviewer comment:

1. Commit evidence
   - current branch name
   - merge base against `main`
   - `main...HEAD` commit list or count
   - `git diff --stat main...HEAD`
2. File evidence
   - `git diff --name-status main...HEAD`
   - explicit list of public entrypoint changes: `README.md`, `docs/index.html`, `docs/gates.json`, root `landing-*`, `router-*`, `section-*`, `hub-*`, `newcomer-path-*`
3. Docs evidence
   - whether `docs/index.html` changed
   - section-level delta if changed
   - whether `docs/gates.json` remains parseable
4. Link evidence
   - root markdown wikilink validation result
   - `docs/index.html` relative href validation result
5. Pages evidence
   - Pages source assumption, especially `main:/docs`
   - whether this branch changes the Pages source content
   - whether live verification is post-merge, blocked, or not required for the current decision
6. Risk evidence
   - unresolved mismatches, stale Pages signals, large generated files, deletes, renames, or unexpected external links
   - why these risks are acceptable or why they force defer/reject

## Reviewer questions

The reviewer must answer every question before choosing an outcome.

1. Is the compared range clearly `main...HEAD`, with no hidden or ambiguous baseline?
2. Are all public entrypoint changes intentional and explainable?
3. If `docs/index.html` changed, is the section delta small enough to review and consistent with `docs/gates.json`?
4. Did wikilink and docs href validation pass without ignored failures?
5. Is the Pages source assumption consistent with the publication plan?
6. Does the packet explain what merge will and will not prove about live GitHub Pages state?
7. Are there any deleted, renamed, generated, or unexpectedly large files that need a second reviewer?
8. Is there a named owner who accepts the risk of merging this exact branch state?

## Allowed decision outcomes

Record exactly one of these outcomes.

### APPROVE

Use only when the evidence packet is complete, validation passed, Pages source impact is understood, and the owner explicitly accepts the exact branch state.

Required sentence:

`APPROVE: The owner approves merging this reviewed branch state into main. This approval does not itself execute merge, push, deployment, or live Pages verification.`

### DEFER

Use when the packet is close but one or more facts are missing or time-dependent.

Required sentence:

`DEFER: Do not merge yet. Missing or stale evidence must be refreshed before a new approval decision.`

Also write the blocker in one line.

### REJECT

Use when the packet shows broken links, unexplained public-entrypoint changes, unsafe deletion, wrong Pages source, or unaccepted risk.

Required sentence:

`REJECT: Do not merge this branch state. A revised packet is required after the unsafe delta is removed or explained.`

Also write the rejection reason in one line.

## Approval record template

```text
Decision: APPROVE | DEFER | REJECT
Reviewer/owner:
Reviewed branch:
Reviewed HEAD:
Merge base:
Evidence packet:
Validation:
Pages source assumption:
Outcome sentence:
Blocker or accepted risk:
Next action:
```

## Stop lines

- STOP: If the evidence packet is incomplete, choose `DEFER`; do not infer approval from prior green checks.
- STOP: If the reviewed HEAD changed after evidence collection, restart the review.
- STOP: If wikilink or docs href validation failed, choose `REJECT` or `DEFER`; do not approve with known broken links.
- STOP: If Pages source is unknown or contradicts the publication plan, choose `DEFER`.
- STOP: If the reviewer cannot name the accepted risk and exact branch state, choose `DEFER`.

## Forbidden lines

- FORBIDDEN: This process must not run `git merge`, `git push`, `git rebase`, `git commit`, or `gh pr merge`.
- FORBIDDEN: Do not treat `MERGE OK`, green local validation, or a generated packet as approval.
- FORBIDDEN: Do not auto-merge after `APPROVE`; approval and execution are separate steps.
- FORBIDDEN: Do not replace reviewer judgment with a script result.
- FORBIDDEN: Do not claim live GitHub Pages success unless a separate live verification step has actually passed.

## Validation for this process file

This file is valid only if every wikilink resolves to an existing root markdown page and it remains a root `process-*.md` document.
