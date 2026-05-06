# Coverage — main:/docs publication decision gate (2026-05-07)

## Scope

This coverage note verifies that the docs publication decision gate is exposed without changing the publication source. It only covers root markdown, `docs/index.html`, and `docs/gates.json`.

## Coverage matrix

| Surface | Expected exposure | Status |
|---|---|---|
| `docs/index.html` | Links to section, coverage, quality gate, and manifest for the main:/docs publication decision gate. | Local branch exposure only. |
| `docs/gates.json` | Records `main-docs-publication-decision` with current branch and Pages source. | Local branch gate metadata. |
| Root markdown | Section/coverage/quality/manifest notes cross-link each other. | Covered. |
| GitHub Pages | Source remains `main:/docs`; feature branch changes are not live until merged. | Pending merge/deploy verification. |

## Branch/source record

- Current branch: `feature/search-priority-feedback-v2`.
- Pages source: `main:/docs`.
- Publication claim requires a later live check against the Pages URL after merge/deploy.

## Related notes

- [[section-main-docs-publication-decision-gate-2026-05-07]]
- [[quality-gate-main-docs-publication-decision-gate-2026-05-07]]
- [[manifest-main-docs-publication-decision-gate-2026-05-07]]

## Stop line

This coverage note does not authorize commit, push, merge, Pages setting changes, README edits, landing edits, or generated catalog/data changes.
