# FAQ — Pages returns 200 but index may still be stale (2026-05-07)

## Question

How can GitHub Pages return HTTP 200 while the restored `docs/index.html` is not actually live yet?

## Short answer

Pages can answer successfully from a previously built or cached public surface. Therefore, a 200 response must be paired with content verification: check for restored route labels, expected newcomer entry anchors, and `.md` links that match existing root markdown.

## Practical check

Use this order:

1. Fetch the live Pages HTML and search for a label that only exists in the restored local `docs/index.html`.
2. Sample live markdown links and confirm they resolve to existing root notes.
3. Confirm the public/non-public boundary remains visible near the restored entrypoint.

## Existing anchors

- [[faq-docs-index-over-truncation-pages-risk-2026-05-07]] — explains why green links alone do not prove live route coverage.
- [[faq-github-pages-live-exposure-newcomer-wiki-2026-05]] — defines safe public exposure for newcomer routes.
- [[process-docs-index-restore-safety-2026-05-07]] — restore safety order and missing-link stop rules.

## Stop / forbidden lines

- Stop if HTTP 200 is the only evidence; collect content evidence before calling the restore live.
- Forbidden: commit, push, deploy, edit `docs/index.html`, edit `docs/gates.json`, rename files, delete files, or create placeholder destinations from this note.
- Forbidden: exposing private HR records, personal data, non-public budget strategy, internal deliberation, meeting remarks, audit/security details, legal-advice conclusions, or unverified source claims.
