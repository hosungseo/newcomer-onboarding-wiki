# Source — main merge review baseline snapshot

## Atomic claim
The current main merge review packet baseline should be treated as a review hold snapshot: `HEAD f1dab6d`, `docs/index` diff `+183/-671` versus `origin/main`, and GitHub Pages source `main:/docs`.

## Evidence captured
- Branch baseline: `HEAD f1dab6d` is the packet baseline to review, even if the local workspace later advances.
- Publication surface: `docs/index` is a large replacement-style delta at `+183/-671` versus `origin/main`, so it is not a routine small docs exposure change.
- Pages boundary: GitHub Pages publishes from `main:/docs`; feature-branch docs changes are not live until merged to main and Pages rebuilds.

## Interpretation
The packet is ready for review evidence collection, not automatic merge. A reviewer should check whether the smaller `docs/index` preserves required newcomer routes and whether any removed index content was intentional.

## Related anchors
- [[process-main-merge-diff-review-packet-2026-05-07]]
- [[source-main-merge-review-packet-minimum-evidence-2026-05-07]]
- [[coverage-main-merge-diff-review-packet-2026-05-07]]

## Stop
STOP: Do not treat `HEAD f1dab6d` plus a large `docs/index` shrink as publication-ready until the packet records link validation and reviewer disposition.

## Forbidden
FORBIDDEN: Do not merge, commit, push, rebase, or rewrite existing review notes from this lane.
