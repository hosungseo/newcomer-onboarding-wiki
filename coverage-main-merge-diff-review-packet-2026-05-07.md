# Coverage — main merge diff review packet

## Covered surfaces

- `docs/index.html`: exposes the final main-merge readiness gate inside the existing docs/landing exposure 운영 section: HEAD `d7f853e`, changed files vs `origin/main` `1643`, recommendation `REVIEW_REQUIRED`, Pages source `main:/docs` mismatch risk, and no automatic merge.
- `docs/gates.json`: records `main-merge-diff-risk-review` and `main-merge-diff-review-packet` as blocking review gates with normalized markdown refs (no `../` prefixes) and the final HEAD/diff/Pages-source summary.
- [[section-main-merge-diff-review-packet-2026-05-07]]: gives the packet entry route.
- [[quality-gate-main-diff-risk-2026-05-07]]: preserves the review-required stop line.
- [[manifest-main-merge-diff-review-packet-2026-05-07]]: records the lane scope and validation expectations.

## Deliberately not covered

- No merge, commit, push, rebase, or Pages publication.
- No README, landing, catalog, graph/data, or generated index expansion.
- No claim that GitHub Pages live state has passed; the existing WAIT/live-local mismatch gate remains separate, and `main:/docs` remains a publication mismatch risk.

## Validation target

- `docs/gates.json` parses as JSON.
- Every relative `href` in `docs/index.html` resolves locally.
- Root markdown wikilinks introduced or updated by this lane resolve to existing root markdown files.
