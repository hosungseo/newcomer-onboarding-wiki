# Quality gate — existing hub entry router (2026-05-07)

## Scope

This quality gate verifies that [[router-existing-hub-entry-index-2026-05-07]] can be exposed through root markdown coverage without promoting README, docs index, landing, graph, or catalog surfaces.

## Checks

- [ ] Router entry starts from an existing hub, not a newly invented hub.
- [ ] Router hands off to [[process-existing-hub-entry-decision-2026-05-07]] before any secondary path is promoted.
- [ ] Final pre-promotion review uses [[checklist-existing-hub-entry-decision-2026-05-07]].
- [ ] Coverage is recorded in [[coverage-existing-hub-entry-router-2026-05-07]].
- [ ] Exposure bundle is listed in [[manifest-existing-hub-entry-router-2026-05-07]].
- [ ] Low-density exposure remains tied to [[section-low-density-hub-path-exposure-2026-05-07]] and [[coverage-low-density-hub-path-exposure-2026-05-07]].
- [ ] Every wikilink resolves to an existing root markdown file.
- [ ] Stop-line wording excludes personal data, private review, personnel, audit, investigation, security, vendor-sensitive material, and unconfirmed policy positions.

## Stop line

Do not expose this router in README.md, docs/index.html, landing files, graph/data, or generated catalogs from this gate. This gate is root-markdown exposure only.
