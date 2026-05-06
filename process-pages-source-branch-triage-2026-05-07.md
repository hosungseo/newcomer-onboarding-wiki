# process — Pages source branch triage

## Purpose

Use this when GitHub Pages is configured to publish from `main:/docs`, but a feature branch has changes that appear related to the Pages site. The process separates safe read-only triage from actions that can alter public exposure.

## Existing anchors

- [[process-github-pages-live-html-vs-docs-index-2026-05-07]]
- [[process-docs-index-restore-safety-2026-05-07]]
- [[process-pages-live-reflection-check-2026-05-07]]
- [[checklist-pages-url-response-comparison-2026-05-07]]
- [[source-docs-index-safe-restoration-anchors-2026-05-07]]
- [[source-pages-live-response-verification-boundary-2026-05-07]]
- [[faq-pages-gateway-title-while-local-route-index-wait-or-fail-2026-05-07]]

## Triage rule

If Pages source is `main:/docs`, then only files that reach `main` and sit under `docs/` can change the live Pages entry point. A feature branch can be inspected, compared, and reported, but it must not be treated as live unless it has been merged or Pages settings have explicitly been changed.

## Read-only triage sequence

1. Confirm current branch and worktree state.
2. Confirm the repository remote and whether this workspace is the intended repo for the Pages site.
3. Confirm Pages source from GitHub settings or repository metadata: branch must be `main`, path must be `/docs`.
4. Compare `main:docs/index.html` with the feature branch's `docs/index.html` if both exist.
5. List feature-branch changes under `docs/` separately from root Markdown changes.
6. Run the local/live response comparison in [[process-github-pages-live-html-vs-docs-index-2026-05-07]] against the current `main:/docs` artifact.
7. Classify the feature branch change as one of:
   - `NO_PAGES_IMPACT`: no `docs/` changes and no Pages source/settings change.
   - `PENDING_MERGE`: `docs/` changes exist, but Pages source remains `main:/docs`.
   - `SETTINGS_RISK`: making the feature branch live would require changing Pages settings.
   - `MERGE_RISK`: feature branch has public-exposure changes that require review before merge.
8. Report the classification, exact changed paths, and the smallest safe next action.

## Decision gate before action

Ask for explicit confirmation before either of these actions:

- changing GitHub Pages source branch or source path;
- merging, rebasing, fast-forwarding, cherry-picking, or pushing feature-branch changes into `main`.

Suggested confirmation wording: "Pages source is currently `main:/docs`; the feature branch is not live yet. Do you want me to change Pages settings or merge these changes into `main`?"

## Stop lines

- STOP: If Pages source is `main:/docs`, do not assume a feature-branch `docs/index.html` change is live.
- STOP: If source branch/path cannot be confirmed, stop at read-only comparison and report uncertainty.
- STOP: If feature-branch changes include public index, gate data, generated graph data, or root Markdown exposure links, require review before merge.
- STOP: If live Pages differs from local `main:/docs`, treat it as deployment lag, stale content, or wrong-repo risk until proven otherwise.
- STOP: If the required next step is settings change, merge, push, deploy, or public exposure expansion, ask first.

## Forbidden lines

- FORBIDDEN: change GitHub Pages settings from this triage lane without explicit confirmation.
- FORBIDDEN: merge, commit, push, rebase, cherry-pick, or force-update branches from this triage lane.
- FORBIDDEN: edit `docs/index.html`, `docs/gates.json`, generated graph/data files, README, or existing notes while doing branch-source triage.
- FORBIDDEN: create placeholder root Markdown files just to satisfy feature-branch links.
- FORBIDDEN: treat HTTP `200` alone as proof that feature-branch content is deployed.

## Minimum validation

- Confirmed Pages source: `main:/docs`, or marked `UNKNOWN` with reason.
- Feature-branch `docs/` changed paths listed, or explicitly `none`.
- Live response checked using title/heading/link signals, not status alone.
- Public-exposure changes classified before any merge/settings decision.
- No write actions beyond this single process/checklist note.
