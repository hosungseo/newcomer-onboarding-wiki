# Source — main merge review packet minimum evidence

## Atomic claim
After [[quality-gate-main-diff-risk-2026-05-07]], a main merge review packet is sufficient only when it records reproducible evidence for branch scope, publication-surface diff, link integrity, and live-route verification.

## Rationale
The risk gate already identifies the branch as review-required, not publication-ready. A useful packet therefore should not add more narrative first; it should preserve evidence that another reviewer can re-run or inspect without guessing which files or routes mattered.

## Minimum evidence
1. Branch scope: current branch, target branch, and exact comparison range.
2. Publication-surface diff: `docs/index.html`, root `index.html`, `README.md`, catalog/metadata, and deletion/rename buckets.
3. Link validation: root wikilinks and docs relative markdown links, with missing counts.
4. Route verification: local expected title/marker and live Pages route title/marker after deployment or explicit hold.
5. Rollback boundary: the smallest file set or commit range that can be reverted if the route is wrong.

## Related anchors
- [[process-large-docs-index-diff-premerge-pages-source-2026-05-07]]
- [[source-main-publication-diff-risk-review-trigger-2026-05-07]]
- [[README]]
- ACTIVE-TASK

## Stop
STOP: If evidence cannot identify the exact branch range and publication-facing files, keep the branch unmerged and mark the packet incomplete.

## Forbidden
FORBIDDEN: Do not turn the risk gate into a release note; it is a blocker until the packet has reproducible evidence and a reviewer decision.
