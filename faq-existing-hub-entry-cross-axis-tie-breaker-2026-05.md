# FAQ — existing hub entry: how do cross-axis tie-breakers work? (2026-05)

## Question

If a newcomer question mentions two axes at once, how should the router-existing-hub-entry-index lane decide which existing hub or section checkpoint comes first?

## Answer

Pick the first entry by the stable noun that must be fixed before the rest of the route makes sense. Do not route by the longest downstream bundle.

Use [[process-existing-hub-entry-decision-2026-05-07]] for the decision rule and [[checklist-existing-hub-entry-decision-2026-05-07]] for the pre-check before handoff.

Common tie-breakers:

- 기관/기능 + 예산 → start at [[hub-기관또는기능]], then route to [[hub-예산대응]] after the function is fixed.
- 예산 + 민원 → start at [[hub-예산대응]], then use [[section-low-density-hub-path-exposure-2026-05-07]] for the 민원대응 boundary route.
- 인사 + 기관/기능 → start at [[hub-인사]], then add [[hub-기관또는기능]] only for public function context.
- 홍보, 법령, 협업회의, or other low-density exposure wording → start from [[section-low-density-hub-path-exposure-2026-05-07]] and choose one existing path, walkthrough, or checklist.

The handoff should name one next route, not every plausible route.

## Stop / forbidden lines

- Stop if two competing axes cannot be reduced to one first stable noun.
- Stop if the handoff would expose private HR records, non-public budget strategy, internal deliberation, personal data, or legal-advice conclusions.
- Forbidden in this lane: inventing a new hub to resolve ambiguity already covered by an existing route.
- Forbidden in this lane: editing existing hubs, README.md, docs/index.html, landing files, graph/data files, generated catalogs, commit, push, deletion, renaming, or broad refactor.
