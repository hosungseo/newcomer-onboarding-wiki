# Source — Pages publication boundary is `main:/docs`, not the feature branch (2026-05-07)

## Atomic claim

For the GitHub Pages publication check, the controlling source is `main:/docs`; `feature/search-priority-feedback-v2` is current work context, not live publication context, until its `docs/` changes reach `main` and Pages rebuilds.

## Boundary rule

Treat a persistent live gateway title as compatible with correct feature-branch work when all of these hold:

1. The intended route-index source is present only on `feature/search-priority-feedback-v2` or has not yet landed in `main:/docs`.
2. The live site is still built from the older `main:/docs` artifact.
3. No live page exposes unsafe links, private content, or broken root-note routes.

Escalate only after the intended `docs/` source is present on `main`, the Pages deployment for that source has completed or timed out, and content-level checks still show the old gateway title.

## Existing anchors

- [[source-pages-200-is-not-docs-index-proof-2026-05-07]] — HTTP 200 does not prove the intended docs index is live.
- [[source-pages-live-response-verification-boundary-2026-05-07]] — defines what live-response verification can and cannot prove.
- [[process-github-pages-live-html-vs-docs-index-2026-05-07]] — separates live HTML evidence from local/source index evidence.

## Stop / forbidden lines

- STOP: Before declaring FAIL, identify which branch and `docs/` artifact Pages actually published.
- STOP: If `main:/docs` lacks the feature-branch source, record the result as pending source promotion, not as broken live routing.
- FORBIDDEN: commit, push, merge, force-publish, edit existing root notes, edit `docs/index.html`, edit `docs/gates.json`, delete files, or create placeholder route targets from this source note.
- FORBIDDEN: print private tokens, cookies, credentials, deployment secrets, private repository metadata, non-public HR/budget/audit/security material, legal-advice conclusions, or unverified claims.
