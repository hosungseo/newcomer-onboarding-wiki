# Coverage — cross-axis priority coverage completion

## Covered surfaces

- `docs/index.html`: exposes a cross-axis completion link inside existing sections, preserving the current section structure.
- `docs/gates.json`: records a `cross-axis-priority-coverage-completion` gate with latest observed HEAD `506e5d8`, 10 priority axes, and pre-lane markdown-bearing gate reference count `96`.
- [[section-cross-axis-priority-coverage-completion-2026-05-07]]: records the priority-axis table and observed `docs/index.html` axis label counts.
- [[quality-gate-cross-axis-priority-coverage-completion-2026-05-07]]: preserves the completion/stop-line criteria.
- [[manifest-cross-axis-priority-coverage-completion-2026-05-07]]: records scope, files, and validation expectations.

## Deliberately not covered

- No commit, push, merge, rebase, or Pages publication.
- No README, landing, catalog, graph/data, or generated index expansion.
- No claim that every axis has equal density; 계약조달 remains lower density by observed label count, but it has path/FAQ/source/process/coverage exposure.

## Validation target

- `docs/gates.json` parses as JSON.
- Markdown refs in `docs/gates.json` do not use `../` prefixes.
- Every relative `href` in `docs/index.html` resolves locally.
- Root markdown wikilinks introduced by this lane resolve to existing root markdown files.
