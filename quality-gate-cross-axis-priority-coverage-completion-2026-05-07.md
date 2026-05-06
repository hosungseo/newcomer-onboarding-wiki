# Quality gate — cross-axis priority coverage completion (2026-05-07)

## Gate purpose

Confirm that the newcomer onboarding surface has moved from single-note islands to cross-axis coverage across the 10 priority axes after latest observed HEAD `506e5d8`.

## Checks

- [x] Ten priority axes are named explicitly: 조직정원, 국회대응, 홍보대응, 예산대응, 민원대응, 법령대응, 계약조달, 감사대응, 정보공개기록관리, 협업회의운영.
- [x] Each axis has at least one newcomer-facing route type across hub/path/FAQ/source/process/coverage.
- [x] `docs/index.html` exposure is added inside existing sections; no new HTML section is required.
- [x] `docs/gates.json` has a dedicated completion gate and keeps markdown refs root-relative without `../` prefixes.
- [x] The gate records the pre-lane markdown-bearing gate reference count: `96`.
- [x] The gate does not authorize commit, push, merge, rebase, Pages publication, README/catalog/landing expansion, graph/data export, or new hub creation.

## Interpretation

The next safe work is comparison and gap selection: choose the axis whose newcomer route lacks the clearest first action, not the axis with the fewest files. Raw observed label counts are diagnostic only.

## Stop line

Do not treat completion as publication approval. Keep this lane limited to `docs/index.html`, `docs/gates.json`, and root section/coverage/quality/manifest markdown exposure.
