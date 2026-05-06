# checklist — safe `main:/docs` publication decision

## Purpose

Use this before any action that would make a feature-branch `docs/` artifact public through GitHub Pages when the intended Pages source is `main:/docs`.

## Existing anchors

- [[source-pages-main-docs-publication-boundary-2026-05-07]]
- [[process-pages-source-branch-triage-2026-05-07]]
- [[process-github-pages-live-html-vs-docs-index-2026-05-07]]
- [[checklist-pages-url-response-comparison-2026-05-07]]
- [[source-docs-index-safe-restoration-anchors-2026-05-07]]

## Pre-flight questions

- What worries me: publishing the wrong `docs/index.html` can expose stale, unsafe, or broken newcomer-wiki routes.
- What can block this: `origin/main:docs/index.html` may be absent, stale, or different from local `docs/index.html`; the feature branch may not exist locally.
- Safe fallback: stop at read-only comparison and report `PENDING_MERGE`, `SETTINGS_RISK`, or `UNKNOWN_SOURCE` without changing branches/settings.

## Read-only evidence checklist

- [ ] Confirm Pages source is `main:/docs`; if not confirmed, mark `UNKNOWN_SOURCE` and stop before any publication decision.
- [ ] Record current branch and worktree state without cleaning, committing, or stashing.
- [ ] Confirm whether `origin/main:docs/index.html` exists:
  - if absent, record `MAIN_DOCS_INDEX_ABSENT`;
  - if present, save only hash/byte/title/link signals, not secrets or full private metadata.
- [ ] Confirm whether the feature branch has `docs/index.html`:
  - compare feature `docs/index.html` vs `origin/main:docs/index.html` when both exist;
  - if `origin/main` lacks it, compare feature `docs/index.html` against local `docs/index.html` only as advisory evidence.
- [ ] Compare public-facing signals, at minimum:
  - `<title>`;
  - first visible heading or gateway label;
  - route/index links added or removed;
  - links to root Markdown notes;
  - links to `docs/gates.json` or generated graph/data artifacts.
- [ ] Verify every feature-branch link target that would become public:
  - target exists in the branch being published;
  - target is intentionally public;
  - target does not expose private HR/budget/audit/security/legal-advice content.
- [ ] Run the live/local response comparison from [[process-github-pages-live-html-vs-docs-index-2026-05-07]] after the source comparison; do not treat HTTP `200` alone as success.

## Decision gate

Choose exactly one before asking for action:

- `MERGE_TO_MAIN_RECOMMENDED`: feature `docs/` changes are required, link targets pass review, and Pages source remains `main:/docs`.
- `DO_NOT_MERGE_REVIEW_FIRST`: feature `docs/` changes include unsafe exposure, broken links, generated-data ambiguity, or unreviewed route expansion.
- `PAGES_SOURCE_CHANGE_NOT_RECOMMENDED`: changing Pages to the feature branch would bypass the `main:/docs` publication boundary.
- `NO_PUBLICATION_ACTION`: no feature `docs/` delta affects Pages, or evidence is insufficient.
- `UNKNOWN_SOURCE`: Pages source or compared branch artifacts cannot be verified.

## Stop / forbidden lines

- STOP: If `origin/main:docs/index.html` is absent, do not claim that feature-vs-main index parity exists; classify as missing main artifact or wrong source evidence.
- STOP: If any feature link target is missing, private, or generated from unreviewed data, require review before merge.
- STOP: If the desired fix requires merge, push, branch switch with dirty worktree risk, Pages settings change, or public exposure expansion, ask the main session/user first.
- FORBIDDEN: commit, push, merge, rebase, cherry-pick, force-update, change GitHub Pages settings, or deploy from this checklist lane.
- FORBIDDEN: edit `docs/index.html`, `docs/gates.json`, generated graph/data files, README, existing notes, or route targets while performing this check.
- FORBIDDEN: create placeholder route targets merely to make link validation pass.
- FORBIDDEN: print tokens, cookies, credentials, deployment secrets, private repository metadata, or non-public personnel/budget/audit/security/legal-advice material.

## Minimum report

- Pages source: `main:/docs` / `UNKNOWN` / other.
- `origin/main:docs/index.html`: present/absent + hash/byte/title signals.
- Feature `docs/index.html`: branch name + present/absent + hash/byte/title signals.
- Link verification: pass/fail + failing paths only.
- Decision gate result and smallest safe next action.
