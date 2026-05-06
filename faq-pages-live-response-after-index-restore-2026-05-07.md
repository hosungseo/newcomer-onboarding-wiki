# FAQ — GitHub Pages live response after docs index restore (2026-05-07)

## Atomic claim

After `docs/index.html` is restored, a GitHub Pages live response is useful only if it proves the restored public entrypoint is being served and still points to existing root markdown. HTTP 200 alone is not enough.

## What should be verified first?

Verify three things in this order:

1. The live Pages HTML contains the restored route labels expected from local `docs/index.html`.
2. The live `.md` links are relative Pages links that resolve back to existing root markdown files.
3. The restored surface still keeps the public/non-public boundary visible near newcomer entrypoints.

## Existing anchors

- [[process-docs-index-restore-safety-2026-05-07]] — restore order and missing-link stop rules for `docs/index.html`.
- [[process-pages-live-reflection-check-2026-05-07]] — live reflection checklist after local docs/gates checks.
- [[faq-github-pages-live-exposure-newcomer-wiki-2026-05]] — public exposure rule for reviewed newcomer routes.

## Stop / forbidden lines

- Stop if live Pages serves stale HTML; record missing labels instead of editing more files.
- Stop if any live `.md` link resolves missing or points outside root markdown.
- Forbidden: commit, push, deploy, edit `docs/index.html`, edit `docs/gates.json`, rename files, delete files, or create placeholder destinations from this note.
- Forbidden: exposing private HR records, personal data, internal deliberation, non-public budget strategy, audit/security details, legal-advice conclusions, or unverified source claims.
