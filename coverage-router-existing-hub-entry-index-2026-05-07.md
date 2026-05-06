# Coverage — router existing hub entry index (2026-05-07)

## Scope

This coverage note verifies that [[router-existing-hub-entry-index-2026-05-07]] is safely exposed as a guardrail for choosing existing hubs before creating new hub surfaces. It covers root markdown and `docs/index.html` exposure only.

## Coverage matrix

| Surface | Link target | State |
|---|---|---|
| Router root note | [[router-existing-hub-entry-index-2026-05-07]] | Existing entry index with explicit stop line and minimal handoff. |
| Section fallback | [[section-low-density-hub-path-exposure-2026-05-07]] | Existing lower-density section route for axes without a dedicated hub. |
| Quality gate | [[quality-gate-router-existing-hub-entry-index-2026-05-07]] | Added to check target existence, no-new-hub drift, and docs link safety. |
| Manifest | [[manifest-router-existing-hub-entry-index-2026-05-07]] | Added to record the router family and safe exposure boundaries. |
| Docs index | `docs/index.html` | Exposes the router, coverage, quality gate, and manifest as one operational group. |

## Stop line

Do not treat this coverage note as authority to add graph/data, README, landing, catalog, commit, or push changes. It only confirms the root markdown and docs index exposure path.
