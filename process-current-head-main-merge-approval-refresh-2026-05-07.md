# process — current HEAD main merge approval refresh

## Purpose
Refresh the final approval packet whenever a new readiness or coverage commit changes HEAD.

## Steps
1. Check branch/source: confirm feature branch and remote tracking state.
2. Recompute HEAD: record `git rev-parse --short HEAD`.
3. Recompute diff count: record `git diff --name-only origin/main...HEAD | wc -l`.
4. Re-run validation gates: root wikilinks, docs links, gates JSON, gates md refs.
5. Reclassify risk: Pages source `main:/docs`, diff size, docs exposure impact.
6. Set recommendation: default `REVIEW_REQUIRED` unless explicit reviewer decision exists.
7. Record outcome: `APPROVE`, `DEFER`, or `REJECT`.
8. Preserve no automatic merge.

## Links
- [[process-final-main-merge-readiness-packet-2026-05-07]]
- [[process-explicit-main-merge-approval-decision-2026-05-07]]
- [[faq-current-head-main-merge-review-required-b81f3d2-2026-05-07]]
- [[source-current-head-main-merge-approval-evidence-bundle-b81f3d2-2026-05-07]]

## STOP
Stop if HEAD or diff count cannot be reproduced.

## FORBIDDEN
Do not merge based on stale HEAD, stale diff count, or validation-only evidence.
