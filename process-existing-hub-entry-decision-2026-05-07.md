# Process — existing hub entry decision when priority axes already have hubs (2026-05-07)

## Purpose

Use this process when every priority axis already has a root-level hub or reusable hub entry, and the next decision is **which existing hub to enter first** rather than whether to create another hub.

This is a cross-process artifact for [[section-low-density-hub-path-exposure-2026-05-07]]. It intentionally does not create, rename, or expand hubs.

## Decision rule

Pick the hub by the user's first stable noun, not by the longest downstream route.

1. If the noun is an institution, bureau, team, function, or unfamiliar portfolio, start at [[hub-기관또는기능]].
2. If the noun is a budget request, budget explanation, execution status, contract/procurement money flow, or National Assembly/audit budget material, start at [[hub-예산대응]].
3. If the noun is appointment, transfer, leave, return to duty, promotion, training, e사람, personnel record, or HR calculation, start at [[hub-인사]].
4. If the noun is one of the low-density exposed axes without its own dedicated hub in the current surface, start from [[section-low-density-hub-path-exposure-2026-05-07]] and choose the listed path/walkthrough/checklist instead of creating a new hub.

## Cross-axis tie-breakers

| If the request mentions both... | Enter first | Then route to |
|---|---|---|
| 기관/기능 + 예산 | [[hub-기관또는기능]] | [[hub-예산대응]] after the function is fixed |
| 예산 + 민원 | [[hub-예산대응]] | [[section-low-density-hub-path-exposure-2026-05-07]] for the 민원대응 boundary route |
| 예산 + 계약조달 | [[hub-예산대응]] | the contract/procurement first-flow route listed in [[section-low-density-hub-path-exposure-2026-05-07]] |
| 인사 + 기관/기능 | [[hub-인사]] | [[hub-기관또는기능]] only for public function context |
| 홍보/법령/협업회의 + 공개경계 | [[section-low-density-hub-path-exposure-2026-05-07]] | the axis row's existing path/walkthrough/checklist |

## Minimal output packet

When using this process, leave only four fields in the working note or handoff:

```text
Input noun:
Chosen entry hub/section:
Why this entry came first:
Next existing route:
```

## Stop / forbidden lines

- Stop if the decision would require creating a new hub for an axis that already has an adequate route in [[section-low-density-hub-path-exposure-2026-05-07]].
- Stop if the request needs private HR records, non-public budget strategy, internal deliberation, personal data, or legal-advice conclusions.
- Forbidden in this lane: editing existing hubs, README.md, docs/index.html, landing files, graph/data files, or generated catalogs.
- Forbidden in this lane: commit, push, deletion, renaming, or broad refactor.
