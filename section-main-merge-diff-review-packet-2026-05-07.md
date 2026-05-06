# Section — main merge diff review packet

## Purpose

Expose the review packet route that must run before any merge/publication of the current branch into `main`.

## Baseline recorded for this lane

- Current HEAD to review: `f1dab6d`
- `docs/index.html` diff to review: `+183/-671`
- GitHub Pages source: `main:/docs`
- Packet status: **review required**
- Scope: `docs/index.html`, `docs/gates.json`, and root `section-*` / `coverage-*` / `quality-gate-*` / `manifest-*` markdown only.

## Entry route

1. Start with [[quality-gate-main-diff-risk-2026-05-07]].
2. Use [[process-main-merge-diff-review-packet-2026-05-07]] as the packet procedure.
3. Check [[faq-main-merge-diff-review-packet-contents-2026-05-07]] for required contents.
4. Preserve the stop line from [[source-main-publication-diff-risk-review-trigger-2026-05-07]].

## Stop line

STOP: this section exposes the review packet only. It does not authorize commit, push, merge, rebase, Pages publication, README expansion, graph/data export, or landing promotion.
