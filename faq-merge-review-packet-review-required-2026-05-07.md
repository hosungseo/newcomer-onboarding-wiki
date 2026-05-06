# FAQ — Merge review packet recommendation gate

## Atomic claim
A merge review packet recommendation should be `REVIEW_REQUIRED` unless reviewers explicitly accept both the `docs/index` diff and the GitHub Pages source impact.

## Packet baseline
- Baseline HEAD: `b1887d5`
- Baseline root markdown count: `1791`
- Baseline `docs/index`: `190` lines

## Why this stays review-required
The packet changes public navigation risk, not just note text. Even if the root note content is internally consistent, `docs/index` can alter reader entry points and the Pages source setting can alter what gets published. The safe recommendation is therefore `REVIEW_REQUIRED` until both publication-surface changes are deliberately accepted.

## Required acceptance before approval
- Confirm the `docs/index` diff is intentional and acceptable.
- Confirm the GitHub Pages source impact is intentional and acceptable.
- Cross-check against [[README]] and [[QUALITY-GATE]] before moving the packet out of review.

## Stop / forbidden
- STOP: Do not recommend `APPROVE` while either `docs/index` diff or Pages source impact is unaccepted.
- FORBIDDEN: Do not treat a clean local note validation as acceptance of public documentation routing.
