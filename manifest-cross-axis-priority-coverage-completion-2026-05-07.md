# Manifest — cross-axis priority coverage completion

## Identity

- id: `cross-axis-priority-coverage-completion`
- date: `2026-05-07`
- status: `EXPOSED_READ_ONLY`
- latest observed HEAD: `506e5d8`
- priority axes: `10`
- pre-lane markdown-bearing refs in `docs/gates.json`: `96`

## Public root files

- [[section-cross-axis-priority-coverage-completion-2026-05-07]]
- [[coverage-cross-axis-priority-coverage-completion-2026-05-07]]
- [[quality-gate-cross-axis-priority-coverage-completion-2026-05-07]]

## Supporting inventory

- [[source-cross-axis-onboarding-coverage-inventory-2026-05-07]]

## Scope

Allowed files for this lane: `docs/index.html`, `docs/gates.json`, and root `section-*`, `coverage-*`, `quality-gate-*`, `manifest-*` markdown.

## Guardrails

- Preserve existing `docs/index.html` sections.
- Normalize `docs/gates.json` markdown refs without `../` prefixes.
- Do not commit, push, merge, rebase, publish, delete, rename, or create new hubs.
- Do not edit README, landing pages, catalogs, graph/data exports, or generated indexes.
