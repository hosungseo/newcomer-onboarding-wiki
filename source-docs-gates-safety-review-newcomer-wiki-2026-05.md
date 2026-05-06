# Source — docs/gates.json safety review for newcomer wiki exposure (2026-05)

## Claim

`docs/gates.json` is a safety review ledger, not a permission slip to broaden exposure. Each gate should confirm that a live docs surface points to existing public-root markdown and that the newcomer route still passes through coverage or quality review before execution.

## Existing anchors

- [[process-docs-gates-index-exposure-review-2026-05-07]] — defines the review order when `docs/gates.json` or `docs/index.html` changes.
- [[quality-gate-router-existing-hub-entry-index-2026-05-07]] — verifies that existing-hub routing does not create a duplicate or premature hub.
- [[coverage-router-existing-hub-entry-index-2026-05-07]] — records exposure coverage for the existing-hub entry router.
- [[manifest-router-existing-hub-entry-index-2026-05-07]] — keeps the exposed router family tied to an explicit manifest.

## Safety review checks

1. **Scope check** — the gate must stay within public-root markdown exposure and avoid graph/data export, catalog, README, landing, commit, or push work unless separately authorized.
2. **Existence check** — every `entry`, `coverage`, `qualityGate`, or `manifest` path in the gate must resolve to an existing root markdown file.
3. **Boundary check** — the gate must route through coverage, quality, or manifest notes that name public/non-public stop lines.
4. **Newcomer check** — the gate should reduce newcomer confusion by choosing an existing entrypoint; it must not imply official completeness or hidden internal access.

## Review result pattern

Use this note to support a narrow finding: “safe to expose as a newcomer route index because the linked root notes exist and carry boundary checks.” Do not use it to approve a broader publishing, deployment, or data-export change.

## Stop / forbidden lines

- Stop at safety review of `docs/gates.json` semantics and linked root markdown existence; do not modify JSON, HTML, Pages build output, README, landing files, or graph/data artifacts here.
- Forbidden: commit, push, deploy, deletion, rename, placeholder creation, or changing gate status without a separate authorized lane.
- Forbidden: treating a gate as approval to expose private HR records, personal data, internal deliberation, non-public budget strategy, meeting remarks, audit/security details, legal-advice conclusions, or unverified source claims.
