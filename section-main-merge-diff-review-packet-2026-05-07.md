# Section — main merge diff review packet

## Purpose

Expose the review packet route that must run before any merge/publication of the current branch into `main`.

## Baseline recorded for this lane

- Assigned current HEAD to record: `ce62d47`
- Observed HEAD at lane start: `d8d7475`
- `docs/index.html` line count at lane start: `189`
- Scope: `docs/index.html`, `docs/gates.json`, and root `section-*` / `coverage-*` / `quality-gate-*` / `manifest-*` markdown only.

## Entry route

1. Start with [[quality-gate-main-diff-risk-2026-05-07]].
2. Use [[process-main-merge-diff-review-packet-2026-05-07]] as the packet procedure.
3. Check [[faq-main-merge-diff-review-packet-contents-2026-05-07]] for required contents.
4. Preserve the stop line from [[source-main-publication-diff-risk-review-trigger-2026-05-07]].

## Stop line

STOP: this section exposes the review packet only. It does not authorize commit, push, merge, rebase, Pages publication, README expansion, graph/data export, or landing promotion.
