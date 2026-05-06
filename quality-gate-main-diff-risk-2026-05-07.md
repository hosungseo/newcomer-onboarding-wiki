# Quality gate — main merge diff risk (2026-05-07)

## Gate purpose

Expose the current main-merge risk before treating local `docs/index.html` restoration or docs exposure as safe to merge into `main`.

## Risk evidence

- Current merge review packet summary: HEAD `b1887d5`; root markdown file count `1791`; `docs/index.html` `190 lines`; GitHub Pages source `main:/docs`; recommendation **REVIEW_REQUIRED** until the branch diff and Pages source are accepted.
- Review packet exposure: [[section-main-merge-diff-review-packet-2026-05-07]], [[coverage-main-merge-diff-review-packet-2026-05-07]], [[manifest-main-merge-diff-review-packet-2026-05-07]].
- Branch comparison: `origin/main..HEAD` remains subject to review; do not treat the branch diff as accepted in this lane.
- Baseline inventory for the recommendation gate: root markdown file count **1,791**; `docs/index.html` **190 lines**.
- Interpretation: this is not yet an accepted publication delta. A merge to `main` requires human/process-owner acceptance of the branch diff, the `docs/index.html` section preservation, and the Pages source `main:/docs` risk.

## Checks

- [x] Risk is exposed from `docs/index.html` without adding a new docs section.
- [x] Risk is recorded in `docs/gates.json` as a blocking review gate.
- [x] Existing docs index sections are preserved; only a quick-link and docs/landing exposure row are added.
- [x] Gate stays inside root markdown + docs surfaces; no README, landing, catalog, graph/data, commit, or push action is implied.
- [x] Main merge review packet route is exposed from the existing docs/landing exposure section without creating a new docs/index section.

## Stop line

Do not merge or publish this branch to `main` from this lane. Treat the gate as **review required** until the main/process owner explicitly reviews HEAD `b1887d5`, the branch diff, root markdown file count `1791`, `docs/index.html` `190 lines`, and the Pages source `main:/docs` publication risk.
