# FAQ — GitHub Pages live exposure for newcomer wiki routes (2026-05)

## Short answer

Treat GitHub Pages live exposure as a read-only public doorway into already-reviewed newcomer wiki routes. A note is safe to surface only when it points to existing root markdown, preserves the newcomer path, and keeps the public/non-public boundary visible before any task execution.

## When is live exposure acceptable?

Live exposure is acceptable when all four checks pass:

1. The exposed link resolves to an existing root markdown note.
2. The route is already covered by a section, coverage, quality gate, or manifest note.
3. The title tells a newcomer where to start, not what the organization officially decided.
4. The path keeps stop/forbidden lines near the entrypoint.

## Existing anchors

- [[process-docs-gates-index-exposure-review-2026-05-07]] — review sequence for `docs/gates.json` and `docs/index.html` exposure.
- [[section-low-density-hub-path-exposure-2026-05-07]] — grouped newcomer entrypoint for lower-density axes without per-axis catalog expansion.
- [[coverage-low-density-hub-path-exposure-2026-05-07]] — records why the grouped GitHub Pages exposure is safe enough for public-root markdown.
- [[router-existing-hub-entry-index-2026-05-07]] — keeps newcomers on existing hub/router entries before any new hub is created.

## Practical rule

If a GitHub Pages page would help a newcomer choose the next safe public route, expose the reviewed route pair. If it would make draft work look complete, searchable, official, or operationally authoritative, do not expose it.

## Stop / forbidden lines

- Stop at live-exposure guidance; do not edit `docs/index.html`, `docs/gates.json`, generated Pages assets, graph exports, README, landing pages, or catalogs in this note.
- Forbidden: commit, push, deploy, rename, delete, create placeholder destinations, or expand a public surface beyond existing root markdown anchors.
- Forbidden: exposing private HR records, personal data, non-public budget strategy, internal deliberation, meeting remarks, audit/security details, legal-advice conclusions, or unverified source claims.
