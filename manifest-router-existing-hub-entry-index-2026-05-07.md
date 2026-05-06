# Manifest — router existing hub entry index (2026-05-07)

## Family

- Router: [[router-existing-hub-entry-index-2026-05-07]]
- Section fallback: [[section-low-density-hub-path-exposure-2026-05-07]]
- Coverage: [[coverage-router-existing-hub-entry-index-2026-05-07]]
- Quality gate: [[quality-gate-router-existing-hub-entry-index-2026-05-07]]

## Exposure intent

This manifest keeps the existing-hub router family small: one router, one low-density fallback section, one coverage note, and one quality gate. The purpose is to help newcomers choose an existing hub before naming a new one.

## Safe surfaces

- Root markdown wikilinks among the router family.
- `docs/index.html` operational exposure under docs/landing exposure.
- `docs/gates.json` as the compact gate inventory for later GitHub Pages live verification.
- [[process-pages-live-reflection-check-2026-05-07]] as the read-only comparison checklist when local docs/gates need to be compared with the served GitHub Pages HTML.
- Live response evidence from 2026-05-07 05:17 KST second WAIT recheck: HTTP 200, 31,241 live bytes, and 19,192 local bytes were observed; expected `Execution Boundary Route Index` was absent and gateway title `신규공무원 적응 위키 · 관문` was present, so the manifest classifies this as WAIT-2, not PASS, and keeps it as a live comparison guardrail rather than completed Pages reflection.

## Out of scope

README, landing pages, catalogs, graph/data, commits, and pushes are intentionally out of scope for this lane.
