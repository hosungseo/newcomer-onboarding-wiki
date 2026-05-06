# Process — low-density hub/path promotion readiness (2026-05-07)

## Purpose

Use this process when promoting the low-density hub/path section into a landing, README, or docs surface. It keeps promotion small, reversible, and public-only.

## Promotion order

1. Start from [[section-low-density-hub-path-exposure-2026-05-07]] as the section-level source of truth.
2. Cross-check exposure readiness in [[coverage-low-density-hub-path-exposure-2026-05-07]] before touching any public surface.
3. If the target is a docs/landing surface, compare against [[coverage-docs-landing-low-density-newcomer-paths-2026-05]] so route-map density does not increase blindly.
4. Promote no more than three first-click routes at once; prefer `path → walkthrough → checklist/quality` over exposing every coverage/manifest note.
5. After promotion, run the root markdown wikilink check and the docs/index link check before any commit or push.

## Candidate first-click routes

| Use case | First route | Follow-up route |
|---|---|---|
| Budget/civil-response boundary | [[newcomer-path-예산대응-계약조달-첫흐름]] | [[coverage-예산대응-민원대응-실행경계-2026-05]] |
| Civil-response public boundary | [[newcomer-path-민원대응-공개경계]] | [[checklist-민원대응-첫30분-소관이송-공개경계]] |
| Legal public explanation | [[newcomer-path-법령대응-공개설명경계]] | [[quality-gate-법령대응-공개설명경계-2026-05]] |
| Collaboration meeting follow-up | [[newcomer-path-협업회의운영-회의결과-공개경계-2026-05]] | [[walkthrough-협업회의운영-전입자-라우터-2026-05]] |

## Stop / forbidden lines

- Stop if a candidate route lacks an existing root markdown note.
- Stop if the promotion would require private review opinions, personal data, non-public deliberation lines, or legal-advice conclusions.
- Forbidden in this lane: editing README.md, docs/index.html, landing files, graph/data files, or generated catalogs before explicit promotion authorization.
- Forbidden in this lane: commit, push, deletion, or broad refactor.
