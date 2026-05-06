# Quality gate — main:/docs publication decision (2026-05-07)

## Gate question

Can the docs/index exposure be called published?

## Required answers

- Local files validate on `feature/search-priority-feedback-v2`: yes, this can support “ready for merge/review.”
- GitHub Pages source is `main:/docs`: yes, publication depends on main.
- Feature branch equals live Pages: no, not by itself.
- PASS requires live Pages to contain the expected labels/links after merge/deploy.

## Checks

1. `docs/gates.json` parses as JSON.
2. `docs/index.html` links to the publication decision section, coverage, quality gate, and manifest.
3. Root markdown wikilinks among the four publication decision notes resolve.
4. The branch/source record says: current branch `feature/search-priority-feedback-v2`; Pages source `main:/docs`.
5. Any 200 response from Pages without expected labels remains WAIT/FAIL evidence, not PASS.

## Decision

Status: ready-for-merge-review, not live-published.

## Related notes

- [[section-main-docs-publication-decision-gate-2026-05-07]]
- [[coverage-main-docs-publication-decision-gate-2026-05-07]]
- [[manifest-main-docs-publication-decision-gate-2026-05-07]]
