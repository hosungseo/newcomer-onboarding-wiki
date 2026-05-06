# Process — merge review packet from existing gates

## Purpose

Assemble a concise, read-only review packet before any `main` merge/publication decision. The packet must let a reviewer reproduce the same evidence from existing gates without committing, pushing, merging, rebasing, or changing Pages settings.

## Existing gate anchors

- [[source-main-merge-review-packet-minimum-evidence-2026-05-07]]
- [[quality-gate-main-diff-risk-2026-05-07]]
- [[coverage-main-merge-diff-review-packet-2026-05-07]]
- [[manifest-main-merge-diff-review-packet-2026-05-07]]
- [[faq-main-merge-diff-review-packet-contents-2026-05-07]]
- [[checklist-safe-main-docs-publication-2026-05-07]]
- [[process-large-docs-index-diff-premerge-pages-source-2026-05-07]]
- [[process-github-pages-live-html-vs-docs-index-2026-05-07]]

## Packet assembly steps

1. **Baseline head**
   - Record current branch, short `HEAD`, and intended compare range.
   - Prefer `origin/main..HEAD` only when that is the actual review range; otherwise write the explicit range used.

2. **Diffstat**
   - Capture a compact `git diff --stat <range>` and list publication-facing files separately.
   - Bucket the diff into: `docs/index.html`, `docs/gates.json`, root Markdown route targets, generated graph/data/assets, and deletions.

3. **Validation outputs**
   - Include JSON parse result for `docs/gates.json` when touched.
   - Include local relative-link validation for `docs/index.html` when touched.
   - Include root Markdown wikilink validation for newly introduced or touched root notes.
   - Report failing paths only; do not paste private or irrelevant repository-wide output.

4. **Pages source**
   - State the verified Pages source: `main:/docs`, `UNKNOWN`, or other.
   - If the source is not verified, classify the packet as `HOLD_SOURCE_UNKNOWN`.
   - Do not treat HTTP `200` as proof of the intended docs index; include title/marker comparison when live evidence is used.

5. **Recommendation**
   - Choose exactly one: `MERGE_RECOMMENDED`, `HOLD_REVIEW_FIRST`, `SPLIT_REQUIRED`, or `NO_PUBLICATION_ACTION`.
   - Add one rollback/safe-next-action line.

## Minimum packet template

```text
Baseline: branch=<name>; head=<short-sha>; range=<range>
Diffstat: <short summary>; publication-facing=<files>
Validation: gates-json=<pass/fail/na>; docs-links=<pass/fail/na>; wikilinks=<pass/fail/na>
Pages source: <main:/docs|UNKNOWN|other>; live marker=<matched/mismatched/not checked>
Recommendation: <MERGE_RECOMMENDED|HOLD_REVIEW_FIRST|SPLIT_REQUIRED|NO_PUBLICATION_ACTION>
Safe next action: <one line>
```

## Stop / forbidden lines

- STOP: If baseline head, diffstat, validation output, Pages source, or recommendation is missing, the packet is incomplete.
- STOP: If Pages source is `UNKNOWN` or live/local title markers mismatch, recommend `HOLD_REVIEW_FIRST` unless a narrower safe action is obvious.
- STOP: If link validation fails for public-facing routes, do not recommend merge until the failing paths are reviewed.
- FORBIDDEN: commit, push, merge, rebase, cherry-pick, force-update, deploy, or change GitHub Pages settings from this packet lane.
- FORBIDDEN: edit `docs/index.html`, `docs/gates.json`, generated graph/data files, README, or existing notes while assembling the packet.
- FORBIDDEN: create placeholder route targets merely to make validation pass.
- FORBIDDEN: expose tokens, cookies, credentials, private HR/budget/audit/security/legal-advice material, or unrelated repository metadata in the packet.

## Output rule

Return one concise packet plus the validation commands/results used. If evidence is partial, mark the missing item explicitly instead of filling it by assumption.
