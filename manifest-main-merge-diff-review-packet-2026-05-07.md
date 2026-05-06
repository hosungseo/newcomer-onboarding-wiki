# Manifest — main merge diff review packet

## Identity

- id: `main-merge-diff-review-packet`
- date: `2026-05-07`
- status: `REVIEW_REQUIRED`
- lane baseline: assigned HEAD `ce62d47`; observed lane-start HEAD `d8d7475`; lane-start `docs/index.html` lines `189`

## Public root files

- [[section-main-merge-diff-review-packet-2026-05-07]]
- [[coverage-main-merge-diff-review-packet-2026-05-07]]
- [[quality-gate-main-diff-risk-2026-05-07]]

## Supporting review packet notes

- [[process-main-merge-diff-review-packet-2026-05-07]]
- [[faq-main-merge-diff-review-packet-contents-2026-05-07]]
- [[source-main-publication-diff-risk-review-trigger-2026-05-07]]

## Guardrails

- Keep exposure in existing docs/index sections; do not create a new HTML section for this lane.
- Keep the gate blocking/review-required until a human/process owner reviews the branch delta and `docs/index.html` section preservation.
- Do not commit, push, merge, rebase, or publish from this lane.
