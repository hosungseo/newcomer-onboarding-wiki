# Manifest — main merge diff review packet

## Identity

- id: `main-merge-diff-review-packet`
- date: `2026-05-07`
- status: `REVIEW_REQUIRED`
- current final readiness gate: HEAD `d7f853e`; changed files vs `origin/main` `1643`; Pages source `main:/docs` mismatch risk; recommendation `REVIEW_REQUIRED`; automatic merge not authorized

## Public root files

- [[section-main-merge-diff-review-packet-2026-05-07]]
- [[coverage-main-merge-diff-review-packet-2026-05-07]]
- [[quality-gate-main-diff-risk-2026-05-07]]

## Supporting review packet notes

- [[process-main-merge-diff-review-packet-2026-05-07]]
- [[process-final-main-merge-readiness-packet-2026-05-07]]
- [[source-final-main-merge-evidence-bundle-d7f853e-2026-05-07]]
- [[faq-main-merge-diff-review-packet-contents-2026-05-07]]
- [[source-main-publication-diff-risk-review-trigger-2026-05-07]]

## Guardrails

- Keep exposure in existing docs/index sections; do not create a new HTML section for this lane.
- Keep the gate blocking/REVIEW_REQUIRED until a human/process owner reviews HEAD `d7f853e`, the `1643` changed files vs `origin/main`, `docs/index.html` section preservation, and Pages source `main:/docs` mismatch risk.
- Do not commit, push, merge, rebase, or publish from this lane.
