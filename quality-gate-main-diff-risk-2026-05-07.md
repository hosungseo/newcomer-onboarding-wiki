# Quality gate — main merge diff risk (2026-05-07)

## Gate purpose

Expose the current main-merge risk before treating local `docs/index.html` restoration or docs exposure as safe to merge into `main`.

## Risk evidence

- Lane baseline recorded for review exposure: assigned HEAD `ce62d47`; observed lane-start HEAD `d8d7475`; lane-start `docs/index.html` line count `189`.
- Review packet exposure: [[section-main-merge-diff-review-packet-2026-05-07]], [[coverage-main-merge-diff-review-packet-2026-05-07]], [[manifest-main-merge-diff-review-packet-2026-05-07]].
- Branch comparison: `origin/main..HEAD` contains **1,576 commits**.
- `docs/index.html` comparison against `origin/main`: **+183 / -671** lines.
- Interpretation: this is not a small docs-only publication delta. A merge to `main` requires human review of the accumulated branch diff and the `docs/index.html` section preservation risk.

## Checks

- [x] Risk is exposed from `docs/index.html` without adding a new docs section.
- [x] Risk is recorded in `docs/gates.json` as a blocking review gate.
- [x] Existing docs index sections are preserved; only a quick-link and docs/landing exposure row are added.
- [x] Gate stays inside root markdown + docs surfaces; no README, landing, catalog, graph/data, commit, or push action is implied.
- [x] Main merge review packet route is exposed from the existing docs/landing exposure section without creating a new docs/index section.

## Stop line

Do not merge or publish this branch to `main` from this lane. Treat the gate as **review required** until the main/process owner explicitly reviews the 1,576-commit branch delta and the `docs/index.html` +183/-671 diff.
