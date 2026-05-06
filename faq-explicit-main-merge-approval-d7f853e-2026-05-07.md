# FAQ — why main merge still requires explicit human approval after d7f853e

## Question

If the merge-readiness notes and validation packets exist, why does merging to `main` still require explicit human approval?

## Short answer

Because the assigned merge surface is `HEAD d7f853e` with `1643` changed files versus `origin/main`. That is too broad to treat as an automatic docs-only merge, even if the packet links resolve and the local checks pass. The safe state is **REVIEW_REQUIRED** until the human/process owner approves the exact branch state.

## Decision rule

A merge packet can prepare evidence, but it cannot approve itself. Approval must be a separate, explicit owner decision that names the reviewed HEAD, comparison baseline, validation result, Pages/publication assumption, and accepted risk.

## Existing anchors

- [[process-explicit-main-merge-approval-decision-2026-05-07]]
- [[quality-gate-main-diff-risk-2026-05-07]]
- [[coverage-main-merge-diff-review-packet-2026-05-07]]
- [[source-main-merge-approval-diff-count-db8b681-2026-05-07]]

## Practical implication

For final merge readiness, the packet may say “ready for review,” but not “approved to merge.” The next valid action is owner review/approval, not `git merge`, `git push`, deployment, or Pages verification.

## STOP / FORBIDDEN

STOP: If explicit human approval for `HEAD d7f853e` and the `1643`-file merge surface is absent, keep the recommendation at `REVIEW_REQUIRED`.

FORBIDDEN: Do not commit, push, merge, rebase, deploy, change GitHub Pages settings, edit `docs/`, or treat this FAQ as approval.
