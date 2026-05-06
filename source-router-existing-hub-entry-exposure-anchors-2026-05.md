# Source — router existing hub entry exposure anchors (2026-05)

## Claim

[[router-existing-hub-entry-index-2026-05-07]] is safe to expose in README, landing, or docs only as an index-to-existing-entry guardrail, not as a new hub or standalone product surface.

## Evidence anchors

The route has four existing root anchors that make exposure auditable:

- [[process-existing-hub-entry-decision-2026-05-07]] — records the decision flow after the first stable noun is identified.
- [[checklist-existing-hub-entry-decision-2026-05-07]] — checks whether an existing hub or section entry is sufficient.
- [[checklist-router-existing-hub-before-new-hub-2026-05-07]] — blocks premature hub creation.
- [[coverage-low-density-hub-path-exposure-2026-05-07]] — records the grouped-route exposure boundary for low-density axes.

## Exposure test

A README/landing/docs pointer is justified only if it preserves this order:

1. Choose one existing entry from [[router-existing-hub-entry-index-2026-05-07]].
2. Verify with [[process-existing-hub-entry-decision-2026-05-07]] or [[checklist-existing-hub-entry-decision-2026-05-07]].
3. Run [[checklist-router-existing-hub-before-new-hub-2026-05-07]] before naming any new hub.

## Stop / forbidden lines

- Stop at documenting exposure anchors; actual README, landing, docs, catalog, or graph edits need a separate lane.
- Stop if any referenced root note is missing or if the proposed exposure would imply a new hub exists.
- Forbidden in this lane: creating destination placeholders, modifying existing route pages, editing generated surfaces, commit, push, deletion, renaming, or broad refactor.
- Forbidden in this lane: using the router for private HR facts, non-public budget strategy, internal deliberation, legal-advice conclusions, or personal data.
