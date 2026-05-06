# FAQ — Pages shows gateway title while local docs/index is route index (2026-05-07)

## Question

If GitHub Pages still shows `신규공무원 적응 위키 · 관문` while local `docs/index.html` has `Execution Boundary Route Index`, is that `WAIT` or `FAIL`?

## Short answer

Treat it as `WAIT` when the live response is HTTP 200 but clearly stale: live title/h1 still match the older gateway surface, while local title/h1 already match the route index. Treat it as `FAIL` only when the same stale mismatch repeats past the agreed wait window, the Pages deployment points to the wrong artifact/SHA, or live links expose missing or unsafe root markdown.

## Current evidence pattern

- Local evidence: `docs/index.html` title/h1 = `Execution Boundary Route Index`.
- Live evidence: Pages status = `200`, title = `신규공무원 적응 위키 · 관문`, h1 = `상황을 고르면, 읽을 자료를 안내합니다`.
- Interpretation: HTTP transport works, but live content has not caught up to the route-index artifact.

## Existing anchors

- [[process-pages-wait-recheck-2026-05-07]] — defines PASS/WAIT/FAIL thresholds for stale Pages responses.
- [[process-github-pages-live-html-vs-docs-index-2026-05-07]] — compares live HTML against local `docs/index.html` by title, h1, headings, and markdown links.
- [[source-pages-200-is-not-docs-index-proof-2026-05-07]] — explains why HTTP 200 alone is not proof of route-index exposure.

## Stop / forbidden lines

- STOP: Do not call this `PASS` while live title/h1 remain the gateway surface.
- STOP: Do not rewrite `docs/index.html` just because Pages is stale.
- FORBIDDEN: commit, push, deploy, edit existing root notes, edit `docs/index.html`, edit `docs/gates.json`, or create placeholder markdown destinations from this note.
- FORBIDDEN: expose private records, credentials, cookies, tokens, internal deliberation, legal-advice conclusions, or unverified source claims.
