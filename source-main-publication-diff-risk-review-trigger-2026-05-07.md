# Source — main publication diff-risk review trigger

## Atomic claim
If `origin/main..feature` contains many commits and `docs/index` has a large diff, the branch is not ready for direct main publication; it requires a diff-risk review first.

## Rationale
A many-commit branch increases review ambiguity: unrelated edits, stale experiments, and accidental route-map changes can be hidden inside the range. A large `docs/index` diff is especially risky because it can change public entry points, navigation weight, and newcomer reading order at once.

## Review action
Before publication, compare the branch against `origin/main`, isolate the `docs/index` intent, and record the decision trail against existing operating notes such as ACTIVE-TASK and QUALITY-GATE. If the publication changes user-facing entry points, also verify the final path from [[README]].

## Stop
STOP: Treat this state as a publication blocker until the large `docs/index` diff has a named reviewer decision and rollback boundary.

## Forbidden
FORBIDDEN: Do not collapse many feature commits into main publication merely because the branch builds or the page renders.
