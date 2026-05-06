# Coverage — main merge diff review packet

## Covered surfaces

- `docs/index.html`: exposes the review packet summary inside the existing docs/landing exposure 운영 section: HEAD `f1dab6d`, `docs/index.html` `+183/-671`, Pages source `main:/docs`, review required.
- `docs/gates.json`: records a `main-merge-diff-review-packet` gate linked to the section, quality gate, and manifest, with the current HEAD/diff/Pages-source summary.
- [[section-main-merge-diff-review-packet-2026-05-07]]: gives the packet entry route.
- [[quality-gate-main-diff-risk-2026-05-07]]: preserves the review-required stop line.
- [[manifest-main-merge-diff-review-packet-2026-05-07]]: records the lane scope and validation expectations.

## Deliberately not covered

- No merge, commit, push, rebase, or Pages publication.
- No README, landing, catalog, graph/data, or generated index expansion.
- No claim that GitHub Pages live state has passed; the existing WAIT/live-local mismatch gate remains separate.

## Validation target

- `docs/gates.json` parses as JSON.
- Every relative `href` in `docs/index.html` resolves locally.
- Root markdown wikilinks introduced by this lane resolve to existing root markdown files.
