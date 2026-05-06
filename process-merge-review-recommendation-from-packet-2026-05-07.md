# Merge review recommendation from packet

## Purpose

Issue exactly one merge-review recommendation from an existing review packet: `REVIEW_REQUIRED`, `PASS`, `WAIT`, or `FAIL`.

Use this process after the packet has collected baseline, validations, diffstat, and Pages source evidence. It complements [[process-main-merge-diff-review-packet-2026-05-07]], [[quality-gate-main-diff-risk-2026-05-07]], [[manifest-main-merge-diff-review-packet-2026-05-07]], and [[source-pages-main-docs-publication-boundary-2026-05-07]].

## Required evidence fields

Record these fields before choosing a recommendation:

- `baseline_head`: `b1887d5`
- `validation_wikilinks`: `PASS`, `FAIL`, or `NOT_RUN`
- `validation_docs_hrefs`: `PASS`, `FAIL`, or `NOT_RUN`
- `validation_status_clean`: `PASS`, `FAIL`, or `NOT_RUN`
- `diffstat_summary`: line/file summary from the packet, including whether `docs/index.html` changed
- `pages_source`: expected source such as `main:/docs`, another branch/folder, or `UNKNOWN`
- `reviewer_notes`: short reason for the final recommendation

## Recommendation rules

### REVIEW_REQUIRED

Use `REVIEW_REQUIRED` when evidence exists but human/process-owner judgment is still needed.

Required conditions:

- `baseline_head` is recorded as `b1887d5` or the packet explicitly explains why the baseline moved.
- Validations are not failing, but one or more are `NOT_RUN`, stale, or not clearly tied to the packet baseline.
- `diffstat_summary` shows large, structural, publication-surface, or docs-index changes.
- `pages_source` is known, but source impact still needs reviewer interpretation.

### PASS

Use `PASS` only when the packet is merge-ready.

Required conditions:

- `baseline_head` is recorded as `b1887d5` or an explicitly superseding reviewed baseline.
- `validation_wikilinks`, `validation_docs_hrefs`, and `validation_status_clean` are all `PASS`.
- `diffstat_summary` is explained at section level for any `docs/index.html`, `docs/gates.json`, README, landing, router, section, hub, or newcomer-path change.
- `pages_source` is confirmed and the packet explains whether merge will affect live Pages.
- No stop line is triggered.

### WAIT

Use `WAIT` when the packet is blocked by timing or missing source propagation, not by a confirmed defect.

Typical cases:

- GitHub Pages is expected to publish from `main:/docs`, but the intended source is not yet on `main`.
- A Pages rebuild or live-content check is pending.
- Required validation is queued and expected to finish without changing the packet content.

### FAIL

Use `FAIL` when the packet confirms a defect or unsafe merge condition.

Any one condition is enough:

- Broken wikilinks or broken docs hrefs.
- Dirty workspace with unexplained changes inside the merge surface.
- `pages_source` contradicts the intended publication source and the packet cannot explain it.
- `diffstat_summary` shows unexplained deletion, rewrite, private/internal exposure, unsafe external links, or unreviewed generated HTML replacement.
- The packet asks for merge despite an active stop line.

## Output format

Write the recommendation as:

```text
recommendation: REVIEW_REQUIRED | PASS | WAIT | FAIL
baseline_head: b1887d5
validations: wikilinks=<PASS|FAIL|NOT_RUN>; docs_hrefs=<PASS|FAIL|NOT_RUN>; status_clean=<PASS|FAIL|NOT_RUN>
diffstat: <short summary>
pages_source: <main:/docs|other|UNKNOWN>
reason: <one short paragraph>
next_action: <one concrete next step>
```

## Stop / forbidden lines

- STOP: Do not issue `PASS` if any required validation is `FAIL` or `NOT_RUN`.
- STOP: Do not issue `PASS` if `docs/index.html` or `docs/gates.json` changed and the section-level impact is not explained.
- STOP: Do not issue `FAIL` for stale live Pages until [[source-pages-main-docs-publication-boundary-2026-05-07]] confirms the intended source is on the live Pages source.
- STOP: If the packet baseline differs from `b1887d5`, record `REVIEW_REQUIRED` unless the new baseline has its own complete evidence fields.
- FORBIDDEN: Do not commit, push, merge, rebase, force-publish, delete files, edit existing review notes, or edit `docs/index.html` from this process.
- FORBIDDEN: Do not turn HTTP 200 alone into a Pages freshness claim.
- FORBIDDEN: Do not hide large deletions or generated-index rewrites behind a one-word `PASS`.
- FORBIDDEN: Do not expose private tokens, credentials, deployment secrets, internal personnel/budget/audit/security details, or unverified legal conclusions.

## Current packet disposition template

```text
recommendation: REVIEW_REQUIRED
baseline_head: b1887d5
validations: wikilinks=NOT_RUN; docs_hrefs=NOT_RUN; status_clean=NOT_RUN
diffstat: packet diffstat must be copied from the current review packet before promotion
pages_source: main:/docs if confirmed by packet evidence; otherwise UNKNOWN
reason: baseline and Pages-source evidence are mandatory, but PASS requires fresh validation and section-level diff explanation.
next_action: run packet validations, copy diffstat, confirm Pages source, then choose PASS/WAIT/FAIL.
```
