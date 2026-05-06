# Source — final main merge evidence bundle after d7f853e

## Source claim

For final main-merge packet assembly, the assigned review surface is `HEAD d7f853e` with `1643` changed files versus `origin/main`.

## Evidence bundle to carry forward

Use this bundle as the minimum source/evidence checklist for the final packet:

1. Exact branch state: reviewed HEAD `d7f853e` and comparison baseline `origin/main`.
2. Diff size: `1643` changed files versus `origin/main`.
3. Public-entrypoint review: README/docs/root route notes are review surfaces, not implicit publication approval.
4. Link integrity: root wikilinks and docs relative href checks must be reported as current, not assumed from older packets.
5. Pages/publication boundary: GitHub Pages or `main:/docs` exposure remains a separate post-approval/publication concern.
6. Decision boundary: the final packet may recommend review/approval, but the owner must explicitly approve before merge.

## Existing anchors

- [[process-explicit-main-merge-approval-decision-2026-05-07]]
- [[source-main-merge-review-packet-minimum-evidence-2026-05-07]]
- [[coverage-main-merge-diff-review-packet-2026-05-07]]
- [[manifest-main-merge-diff-review-packet-2026-05-07]]

## Interpretation

The evidence bundle is a handoff object, not an authorization object. Its purpose is to make the final merge packet auditable: what was reviewed, what changed, what was validated, and what remains blocked on human approval.

## STOP / FORBIDDEN

STOP: If HEAD changes after this evidence is copied into a final packet, refresh the HEAD, changed-file count, and validation lines before asking for approval.

FORBIDDEN: Do not commit, push, merge, rebase, force-update, deploy, modify existing notes, edit `docs/`, or convert this source note into a merge approval record.
