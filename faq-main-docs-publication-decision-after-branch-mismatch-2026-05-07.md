# FAQ — After the feature-branch Pages source mismatch, when is `main:/docs` safe to publish?

## Atomic answer

Publish from `main:/docs` only after the feature-branch route-index intent has been reduced to public, docs-safe content and the live mismatch has been classified as source promotion pending, not as a route failure.

## Decision rule

The safe decision is **not** “force the feature branch live.” The safe decision is:

1. confirm the desired route/index material is intended for public docs,
2. exclude private or unresolved operational content,
3. promote only the reviewed `docs/` source to `main`, and
4. verify the live response after Pages rebuilds.

If `main:/docs` still contains the older gateway source, the live title mismatch is expected and should be logged as pending publication.

## Existing anchors

- [[faq-pages-source-main-docs-feature-branch-title-2026-05-07]]
- [[source-pages-main-docs-publication-boundary-2026-05-07]]
- [[checklist-pages-url-response-comparison-2026-05-07]]

## Stop / forbidden lines

- STOP: Do not treat a feature-branch/local `docs/` success as proof that GitHub Pages is already safe or current.
- STOP: If `main:/docs` has not received the reviewed source, keep the status as pending publication rather than live-route failure.
- FORBIDDEN: commit, push, merge, deploy, edit `docs/`, edit existing notes, delete files, change Pages settings, or create route placeholders from this FAQ.
- FORBIDDEN: expose secrets, tokens, cookies, private repository settings, non-public personnel/budget/audit/security material, or unverified claims.
