# FAQ — docs/index.html over-truncation and Pages live-surface risk (2026-05-07)

## Question

Why is an over-truncated `docs/index.html` risky even when every remaining link still resolves?

## Short answer

Because `docs/index.html` is a GitHub Pages live surface, not just a local checklist. If it is cut down too aggressively, newcomers may see only a narrow surviving slice and mistake the reduced page for the complete execution-boundary route map. Link-validity alone does not prove the live surface still preserves the intended route coverage.

## Risk pattern

- A shortened page can hide reviewed route families while still passing a missing-link check.
- A compact docs/landing block can look authoritative even when it no longer exposes enough first-hop routes.
- Removing route-map, coverage, quality-gate, or manifest anchors can break newcomer orientation without creating a broken hyperlink.
- Pages deployment turns local simplification into a public discovery path, so the restore point must be explicit before further edits.

## Safe restoration anchors

Use existing root notes as anchors before restoring or expanding the live surface:

- [[process-docs-gates-index-exposure-review-2026-05-07]] — review sequence for `docs/index.html` and `docs/gates.json` exposure.
- [[coverage-low-density-hub-path-exposure-2026-05-07]] — confirms why grouped low-density exposure is acceptable without per-axis duplication.
- [[quality-gate-router-existing-hub-entry-index-2026-05-07]] — checks that existing-hub routing remains a guardrail, not a new hub generator.
- [[faq-github-pages-live-exposure-newcomer-wiki-2026-05]] — frames GitHub Pages exposure as a read-only public doorway.

## Practical rule

A safe `docs/index.html` restoration should restore orientation first: route-map families, docs/landing exposure operations, and gate/coverage anchors. Do not optimize for fewer links until the intended newcomer path remains visible.

## Stop / forbidden lines

- Stop at documenting the risk and restoration anchors; do not edit `docs/index.html`, `docs/gates.json`, README, catalogs, graph/data exports, or landing files in this note.
- Forbidden: commit, push, deploy, delete, rename, create placeholder destinations, or treat a green missing-link check as proof that live Pages coverage is complete.
- Forbidden: exposing private HR records, personal data, non-public budget strategy, internal deliberation, meeting remarks, audit/security details, legal-advice conclusions, or unverified source claims.
