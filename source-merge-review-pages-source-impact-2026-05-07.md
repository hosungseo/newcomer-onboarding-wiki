# Source — Pages source impact blocks merge packet approval

## Atomic claim
The merge review packet remains `REVIEW_REQUIRED` when the Pages source impact has not been accepted, even if the recommendation text is otherwise ready.

## Source facts captured for the packet
- Baseline HEAD: `b1887d5`
- Baseline root markdown count: `1791`
- Baseline `docs/index`: `190` lines

## Review logic
Pages source configuration determines which documentation surface is published. A `docs/index` change can be harmless in isolation, but paired with an unaccepted Pages source impact it becomes a publication-route decision. That decision needs human review, so the packet should not be auto-approved.

## Related local context
- [[checklist-existing-hub-entry-decision-2026-05-07]] frames when existing hub entry decisions are safe to promote.
- [[checklist-low-density-hub-path-promotion-readiness-2026-05-07]] frames readiness checks before promoting thin paths.

## Stop / forbidden
- STOP: Keep the recommendation at `REVIEW_REQUIRED` until reviewers accept both the `docs/index` diff and Pages source impact.
- FORBIDDEN: Do not collapse Pages source impact into a routine markdown-count or wikilink validation result.
