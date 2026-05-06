# Section — low-density hub/path exposure checkpoint (2026-05-07)

## Purpose

This section checkpoint groups the low-density hub/path axes that already have operational notes and now need a single root-level exposure surface for docs index work without expanding landing, graph/data, or per-axis catalog lists.

Use [[router-existing-hub-entry-index-2026-05-07]] first when the question may belong to an existing hub before entering one of these lower-density route rows.

## Axes and entrypoints

| Axis | Hub/path checkpoint | Coverage / quality / manifest anchor |
|---|---|---|
| 예산대응 | [[hub-예산대응]], [[newcomer-path-예산대응-계약조달-첫흐름]], [[walkthrough-예산대응-전입자-라우터-2026-05]] | [[coverage-예산대응-민원대응-실행경계-2026-05]], [[quality-gate-예산대응-민원대응-실행경계-2026-05]], [[manifest-newcomer-journey-예산대응-민원대응-실행경계-2026-05]] |
| 민원대응 | [[newcomer-path-민원대응-공개경계]], [[walkthrough-민원대응-전입자-라우터-2026-05]], [[checklist-민원대응-첫30분-소관이송-공개경계]], [[faq-민원대응-처음-질의-불만-고충-반복민원-구분-2026-05]], [[process-민원대응-접수부터-재민원로그-2026-05]] | [[coverage-예산대응-민원대응-실행경계-2026-05]], [[quality-gate-예산대응-민원대응-실행경계-2026-05]], [[manifest-newcomer-journey-예산대응-민원대응-실행경계-2026-05]] |
| 홍보대응 | [[newcomer-path-홍보대응-대외문안-공개경계]], [[walkthrough-홍보대응-대외문안-보조라우터-2026-05]], [[checklist-홍보대응-초안공개전환-문장별-precheck]] | [[coverage-홍보대응-대외문안-실행경계-2026-05]], [[quality-gate-홍보대응-대외문안-실행경계-2026-05]], [[manifest-newcomer-journey-홍보대응-대외문안-실행경계-2026-05]] |
| 법령대응 | [[newcomer-path-법령대응-공개설명경계]], [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]], [[checklist-법령대응-입법예고-설명초안-제출전검토]] | [[coverage-법령대응-공개설명경계-2026-05]], [[quality-gate-법령대응-공개설명경계-2026-05]], [[manifest-newcomer-journey-법령대응-공개설명경계-2026-05]] |
| 협업회의운영 | [[newcomer-path-협업회의운영-회의결과-공개경계-2026-05]], [[walkthrough-협업회의운영-전입자-라우터-2026-05]], [[checklist-협업회의운영-회의결과-후속조치-실행경계]] | [[coverage-정보공개기록관리-협업회의-실행경계-2026-05]], [[quality-gate-정보공개기록관리-협업회의-실행경계-2026-05]], [[manifest-newcomer-journey-정보공개기록관리-협업회의-실행경계-2026-05]] |

## Section checkpoints

- Each axis has at least one newcomer path or walkthrough entrypoint reachable from this checkpoint.
- Each axis is tied to an existing coverage/quality/manifest anchor rather than a placeholder.
- Shared anchors are intentional where the existing root notes pair two axes: 예산대응/민원대응 and 정보공개기록관리/협업회의.
- 민원대응 onboarding exposure is explicit: classify inquiry/complaint/grievance/repeat complaint with [[faq-민원대응-처음-질의-불만-고충-반복민원-구분-2026-05]], build the evidence bundle with [[source-민원대응-첨부자료-공개근거-대조순서]], record response/repeat complaint handling in [[process-민원대응-접수부터-재민원로그-2026-05]], and check public/private/personal-info boundaries with [[checklist-민원대응-답변전-공개경계-precheck]].
- Docs exposure: this checkpoint is safe to expose from `docs/index.html` together with [[coverage-low-density-hub-path-exposure-2026-05-07]] because every linked route points to an existing root markdown note.
- Pages verification: `docs/gates.json` may be checked after GitHub Pages deploy to confirm live exposure, but that verification remains read-only and does not expand README, landing, graph/data, or catalogs.
- Live comparison handoff: [[process-pages-live-reflection-check-2026-05-07]] is the safe local-vs-live checklist; use it only after deploy/merge and stop on stale Pages, missing labels, or broken root `.md` links.
- Live response evidence 2026-05-07 05:22 KST, third WAIT recheck: GitHub Pages returned HTTP 200 with 31,241 live bytes while local `docs/index.html` was 19,194 bytes at capture; the expected local route title `Execution Boundary Route Index` was absent and the gateway title `신규공무원 적응 위키 · 관문` was present. Classify as WAIT-3, not PASS; any repeated-WAIT escalation to FAIL belongs to the main/process owner.
- Existing-hub router exposure: [[router-existing-hub-entry-index-2026-05-07]] is separately covered by [[coverage-router-existing-hub-entry-index-2026-05-07]], [[quality-gate-router-existing-hub-entry-index-2026-05-07]], and [[manifest-router-existing-hub-entry-index-2026-05-07]].
- Main merge risk: [[quality-gate-main-diff-risk-2026-05-07]] blocks treating this docs exposure as ready for `main` because `origin/main..HEAD` contains 1,576 commits and `docs/index.html` differs by +183/-671 lines; review is required before merge/publication.
- Stop line: do not expand landing files, graph/data, or per-axis catalog lists in this lane.
