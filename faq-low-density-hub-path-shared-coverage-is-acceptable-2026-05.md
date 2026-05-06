# FAQ — when is shared coverage acceptable for low-density axes? (2026-05)

## Answer

Shared coverage is acceptable when two axes fail at the same execution boundary and already share root-level evidence. The section checkpoint explicitly allows this for 예산대응/민원대응 and 정보공개기록관리/협업회의운영.

## Acceptable shared pairs

- 예산대응 and 민원대응 can share [[coverage-예산대응-민원대응-실행경계-2026-05]] when the practical question is public material versus internal review, transfer, masking, or request handling.
- 협업회의운영 can share [[coverage-정보공개기록관리-협업회의-실행경계-2026-05]] when the practical question is meeting-result sharing, records handling, or follow-up traceability.

## When to split later

Split into a dedicated coverage note only when the axis has enough distinct root notes, distinct failure modes, and distinct newcomer routing needs. Until then, [[section-low-density-hub-path-exposure-2026-05-07]] is the safer exposure surface.

## Stop line

Stop at explaining why shared coverage is acceptable. Do not split coverage, duplicate notes, or promote a new route unless a later lane authorizes that work.

## Forbidden

Forbidden: placeholder split notes, invented coverage anchors, README edits, docs/index edits, landing-file edits, graph/data edits, commit, or push.
