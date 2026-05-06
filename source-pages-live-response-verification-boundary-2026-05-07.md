# Source — Pages live response verification boundary (2026-05-07)

## Atomic claim

GitHub Pages live-response verification should be a boundary check, not a publishing action. Its job is to compare local restored intent with live served HTML and to stop before any additional exposure work begins.

## Boundary sequence

1. Read local `docs/index.html` and identify the restored labels or link targets that should appear live.
2. Fetch the live Pages HTML and compare labels, not just status code.
3. Check every live `.md` href against existing root markdown files.
4. If labels are stale or links are missing, record the mismatch as evidence and stop.

## Existing anchors

- [[source-docs-index-safe-restoration-anchors-2026-05-07]] — anchor set for restoring `docs/index.html` without inventing new public structure.
- [[process-pages-live-reflection-check-2026-05-07]] — concrete local/live reflection checklist.
- [[faq-pages-live-response-after-index-restore-2026-05-07]] — FAQ framing for why 200-only verification is insufficient.

## Stop / forbidden lines

- Stop at verification evidence; do not widen docs, README, catalog, graph, gate, or landing exposure from this source note.
- Stop if live Pages is behind local state; wait for deployment or report stale labels instead of changing unrelated files.
- Forbidden: commit, push, deploy, edit generated Pages assets, create new hubs, create placeholder targets, delete notes, or treat live 200 as completion by itself.
- Forbidden: exposing private HR records, personal data, internal deliberation, non-public budget strategy, audit/security details, legal-advice conclusions, or unverified source claims.
