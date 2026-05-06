# section — main:/docs publication decision

## purpose

GitHub Pages is configured to publish `main:/docs`, while the active work is on `feature/search-priority-feedback-v2`. This section keeps the publication decision separate from content quality decisions.

## links

- [[checklist-safe-main-docs-publication-2026-05-07]]
- [[process-pages-source-branch-triage-2026-05-07]]
- [[coverage-pages-source-branch-mismatch-2026-05-07]]
- [[quality-gate-pages-source-branch-mismatch-2026-05-07]]

## decision rule

Do not mark the live gateway title as a content failure until the configured Pages source has received the intended `docs/` content or an intentional source change has been approved.

## STOP

- STOP: do not change GitHub Pages source as part of this note.
- STOP: do not merge to `main` without explicit publication decision.

## FORBIDDEN

- FORBIDDEN: do not create placeholder pages to force link checks green.
- FORBIDDEN: do not expose private or unfinished material through Pages.
