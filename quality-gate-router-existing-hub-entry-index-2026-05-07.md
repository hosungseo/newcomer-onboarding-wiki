# Quality gate — router existing hub entry index (2026-05-07)

## Gate purpose

Use this gate before promoting [[router-existing-hub-entry-index-2026-05-07]] from a root note into any lightweight docs surface. The router must remain an existing-entry guardrail, not a new hub generator.

## Checks

- [x] The promoted target is exactly [[router-existing-hub-entry-index-2026-05-07]].
- [x] Each first-hop route in the router points to an existing root markdown note.
- [x] Low-density axes route through [[section-low-density-hub-path-exposure-2026-05-07]] instead of creating five new hub pages.
- [x] Coverage is recorded in [[coverage-router-existing-hub-entry-index-2026-05-07]].
- [x] Manifest exposure is recorded in [[manifest-router-existing-hub-entry-index-2026-05-07]].
- [x] `docs/index.html` links are relative GitHub/Page-safe `.md` links.
- [x] Live Pages response evidence is recorded as a guardrail, not completion: second WAIT recheck observed HTTP 200, 31,241 live bytes, and 19,192 local bytes; the expected `Execution Boundary Route Index` title was absent and gateway title `신규공무원 적응 위키 · 관문` was present, so classify WAIT-2, not PASS.

## Failure conditions

Stop and split the work if any target is missing, if the router is copied into graph/data or catalogs, if a docs link points to a non-existent `.md` file, or if live Pages returns HTTP 200 but stale/mismatched labels compared with local docs/gates.
