# Section — main:/docs publication decision gate (2026-05-07)

## Purpose

This section records the publication decision boundary for the GitHub Pages source `main:/docs` while work continues on the current branch `feature/search-priority-feedback-v2`.

Use this before calling a docs/index exposure “published”: local branch exposure and published Pages exposure are different states.

## Decision states

| State | Meaning | Allowed claim |
|---|---|---|
| Local branch ready | `docs/index.html`, `docs/gates.json`, and root markdown links validate on `feature/search-priority-feedback-v2`. | Ready for merge/review, not published. |
| Merge required | The target publication source is `main:/docs`; feature-branch changes are not live until merged or otherwise applied to `main`. | Publication pending. |
| Pages reflected | GitHub Pages served from `main:/docs` contains the expected labels and links. | Published exposure may be claimed. |
| Mismatch / stale | Pages returns 200 but lacks the expected local labels/links. | WAIT/FAIL evidence only, not PASS. |

## Publication decision gate

- Current working branch remains `feature/search-priority-feedback-v2`.
- Pages publication source remains `main:/docs`.
- A merge into `main` is the publication decision point; this lane does not commit, push, or merge.
- The docs/index exposure is valid locally only when [[coverage-main-docs-publication-decision-gate-2026-05-07]], [[quality-gate-main-docs-publication-decision-gate-2026-05-07]], and [[manifest-main-docs-publication-decision-gate-2026-05-07]] agree on branch/source separation.
- The live site must be checked after merge/deploy before marking Pages exposure as PASS.

## Stop line

Do not classify `feature/search-priority-feedback-v2` changes as live Pages publication. Do not edit graph/data exports, generated catalogs, README, or landing documents from this lane.
