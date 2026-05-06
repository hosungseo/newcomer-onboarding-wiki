# Process: large docs/index diff review before merging to Pages source

## Purpose
Use this process when `origin/main..feature` contains a large `docs/` or `index.html` diff and the branch may become the GitHub Pages source. It prevents a green local diff from publishing a broken, stale, or misleading Pages surface.

Related anchors: [[README]], [[checklist-safe-main-docs-publication-2026-05-07]], [[process-docs-index-restore-safety-2026-05-07]], [[process-pages-source-branch-triage-2026-05-07]], [[source-pages-main-docs-publication-boundary-2026-05-07]].

## Stop / forbidden lines
- STOP if the Pages source branch is unclear or differs from the branch being merged.
- STOP if `docs/index.html`, root `index.html`, or routing metadata changed but no live-route verification plan exists.
- STOP if the diff removes navigation, canonical links, generated indexes, or newcomer entry points without a named replacement.
- FORBIDDEN: merging only because `git diff` is large and hard to review.
- FORBIDDEN: treating HTTP 200 as proof that the new docs index is live.
- FORBIDDEN: editing unrelated files during this review pass.
- FORBIDDEN: committing or pushing from a review-only lane unless explicitly authorized.

## Review steps
1. Confirm branch shape: `git status --short`, `git branch --show-current`, and the intended Pages source.
2. List the publication diff: `git diff --name-status origin/main..feature -- docs index.html README.md`.
3. Split files into buckets: generated index, hand-written landing, metadata/catalog, assets, deletions.
4. For every deletion or rename, identify the replacement route or mark it as a blocker.
5. Inspect entry surfaces first: root `README.md`, root `index.html`, `docs/index.html`, and any catalog/llms metadata.
6. Check that every newly promoted document has at least one stable entry path from the docs index or README.
7. Check that every demoted/removed path has no remaining public link.
8. Validate Obsidian-style links in touched root markdown: each wikilink target must resolve to an existing root markdown file or an intentional existing wiki target.
9. Validate GitHub markdown links in docs indexes: each relative `.md` target must exist at the expected path.
10. Compare local file title/marker against the live Pages route after deployment; do not rely on status code alone.

## Merge-ready evidence packet
Before merge, leave these four lines in the PR/review note:
- Pages source branch checked: `<branch>`.
- Large diff buckets reviewed: `<generated / landing / metadata / assets / deletions>`.
- Link validation result: `<wikilinks missing N; docs markdown links missing N>`.
- Live-route check plan/result: `<route + title/marker match>`.

## Decision rule
Merge only when branch source, entry surfaces, link integrity, and live-route verification are all explainable in one short paragraph. If any one part is fuzzy, keep the branch unmerged and write the blocker next to the exact file or route.
