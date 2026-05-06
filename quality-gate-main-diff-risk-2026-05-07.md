# Quality gate — main merge diff risk (2026-05-07)

## Gate purpose

Expose the final main-merge readiness risk before treating local `docs/index.html` restoration or docs exposure as safe to merge into `main`.

## Risk evidence

- Final readiness packet summary: HEAD `d7f853e`; changed files vs `origin/main` `1643`; GitHub Pages source `main:/docs`; Pages source mismatch risk unresolved; recommendation **REVIEW_REQUIRED**; automatic merge **not authorized**.
- Review packet exposure: [[section-main-merge-diff-review-packet-2026-05-07]], [[coverage-main-merge-diff-review-packet-2026-05-07]], [[manifest-main-merge-diff-review-packet-2026-05-07]].
- Branch comparison: `origin/main..HEAD` remains subject to review; do not treat the `1643` changed files as accepted in this lane.
- Evidence handoff: [[source-final-main-merge-evidence-bundle-d7f853e-2026-05-07]] and [[process-final-main-merge-readiness-packet-2026-05-07]].
- Interpretation: this is not yet an accepted publication delta. A merge to `main` requires human/process-owner acceptance of the branch diff, the `docs/index.html` section preservation, and the Pages source `main:/docs` mismatch risk.

## Checks

- [x] Risk is exposed from `docs/index.html` without adding a new docs section.
- [x] Risk is recorded in `docs/gates.json` as a blocking review gate.
- [x] Existing docs index sections are preserved; only a quick-link and docs/landing exposure row are added.
- [x] Gate stays inside root markdown + docs surfaces; no README, landing, catalog, graph/data, commit, or push action is implied.
- [x] Main merge review packet route is exposed from the existing docs/landing exposure section without creating a new docs/index section.

## Stop line

Do not merge or publish this branch to `main` from this lane. Treat the gate as **REVIEW_REQUIRED** until the main/process owner explicitly reviews HEAD `d7f853e`, the `1643` changed files vs `origin/main`, `docs/index.html` section preservation, and the Pages source `main:/docs` mismatch/publication risk.
