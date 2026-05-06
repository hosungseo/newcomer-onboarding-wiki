# Process — Cross-axis newcomer route QA

## 목적
전입자 공통업무축을 새로 만들거나 보강하기 전에, 각 우선 업무축이 이미 `FAQ / source / process / router-or-hub / coverage / quality / manifest / docs exposure` 8칸을 갖췄는지 먼저 확인한다. 빈칸이 가장 많은 축을 다음 gap으로 고른다.

## STOP
- STOP: 이 점검표는 새 허브를 만드는 근거가 아니다. 먼저 기존 hub/router/landing에 붙일 수 있는지 확인한다.
- STOP: 8칸 중 하나라도 확인 전이면 “완료”로 표시하지 않는다.
- STOP: docs exposure는 내부 wikilink만으로 충분하지 않다. [[README]] 또는 공개/카탈로그 노출 메모까지 확인한다.

## FORBIDDEN
- FORBIDDEN: 존재하지 않는 노트로 wikilink를 만들지 않는다.
- FORBIDDEN: 축 이름이 비슷하다는 이유만으로 coverage/quality/manifest를 다른 축의 완료 증거로 대체하지 않는다.
- FORBIDDEN: 감사+국회, 예산+민원, 정보공개+협업회의처럼 묶음 manifest가 있는 축을 개별 축 검토 없이 통과시키지 않는다.
- FORBIDDEN: 커밋/푸시 없이 만들라는 지시가 있을 때 commit/push 하지 않는다.

## 공통 기준
각 축마다 아래 8개 증거를 모두 찾는다.

1. FAQ: 신규자가 처음 물을 질문 1개 이상
2. source: 답변·검토 전 원천자료/증거 확인 순서
3. process: 접수→검토→작성→회신/후속조치 흐름
4. router-or-hub: 신규자가 첫 분기를 타는 route, walkthrough, hub, landing 중 하나
5. coverage: 해당 축 노출/경계 coverage
6. quality: 해당 축 quality gate
7. manifest: newcomer journey manifest
8. docs exposure: [[README]] 또는 공개 docs/catalog/release 노출 메모

## 우선 업무축 QA 매트릭스

| 축 | FAQ | source | process | router-or-hub | coverage | quality | manifest | docs exposure | 판정 |
|---|---|---|---|---|---|---|---|---|---|
| 감사대응 | [[faq-감사대응-전입자-첫구분-자료요구-사실확인-처분요구-후속조치-2026-05]] | [[source-감사대응-답변초안전-증거묶음-2026-05]] | [[process-감사대응-요청접수-제출후속조치-log-2026-05-07]] | [[walkthrough-감사대응-전입자-라우터-2026-05]] | [[coverage-감사대응-자료제출경계-2026-05]] | [[quality-gate-감사대응-자료제출경계-2026-05]] | [[manifest-newcomer-journey-감사대응-자료제출경계-2026-05]] | [[README]] | PASS 후보 |
| 국회대응 | [[faq-국회대응-전입자-첫구분-자료요구-서면질의-국감상임위-현안보고-2026-05]] | [[source-국회대응-답변메모-작성전-증거묶음-2026-05]] | [[process-국회대응-전입자-자료요구-첫흐름]] | [[walkthrough-국회대응-전입자-라우터-2026-05]] | [[coverage-국회대응-자료요구경계-2026-05]] | [[quality-gate-국회대응-자료요구경계-2026-05]] | [[manifest-newcomer-journey-국회대응-자료요구경계-2026-05]] | [[README]] | PASS 후보 |
| 계약조달 | [[faq-계약조달-구매요청-계약요청-조달검토-첫구분-2026-05]] | [[source-계약조달-구매계약메모-작성전-증거묶음-2026-05]] | [[process-계약조달-검토초안-작성흐름]] | [[newcomer-path-계약조달-첫주-2026-05]] | [[coverage-계약조달-실행경계-2026-05]] | [[quality-gate-계약조달-실행경계-2026-05]] | [[manifest-newcomer-journey-계약조달-실행경계-2026-05]] | [[README]] | PASS 후보 |
| 법령대응 | [[faq-법령대응-전입자-첫구분-법령조회-유권해석-입법예고-내부검토-2026-05]] | [[source-법령대응-법무검토-답변초안-최소근거묶음-2026-05]] | [[process-법령대응-요청접수-회신추적로그-2026-05]] | [[newcomer-path-법령대응-민원성질의-첫판단-2026-05]] | [[coverage-법령대응-공개설명경계-2026-05]] | [[quality-gate-법령대응-공개설명경계-2026-05]] | [[manifest-newcomer-journey-법령대응-공개설명경계-2026-05]] | [[README]] | PASS 후보 |
| 예산대응 | [[faq-예산대응-예산요구-예산조정-집행변경-국회의회설명자료-첫구분-2026-05]] | [[source-예산대응-검토메모-작성전-증거묶음-2026-05]] | [[process-예산대응-요청접수-회신추적로그-2026-05]] | [[walkthrough-예산대응-전입자-라우터-2026-05]] | [[coverage-예산대응-민원대응-실행경계-2026-05]] | [[quality-gate-예산대응-민원대응-실행경계-2026-05]] | [[manifest-newcomer-journey-예산대응-민원대응-실행경계-2026-05]] | [[README]] | 묶음 축 개별 확인 필요 |
| 민원대응 | [[faq-민원대응-처음-질의-불만-고충-반복민원-구분-2026-05]] | [[source-민원대응-답변초안전-증거묶음-준비순서-2026-05]] | [[process-민원대응-접수부터-재민원로그-2026-05]] | [[walkthrough-민원대응-전입자-라우터-2026-05]] | [[coverage-예산대응-민원대응-실행경계-2026-05]] | [[quality-gate-예산대응-민원대응-실행경계-2026-05]] | [[manifest-newcomer-journey-예산대응-민원대응-실행경계-2026-05]] | [[README]] | 묶음 축 개별 확인 필요 |
| 장관보고·성과평가 | [[faq-low-density-hub-path-axes-where-do-newcomers-start-2026-05]] | [ ] 전용 source 확인 | [ ] 전용 process 확인 | [[router-장관보고-성과평가-실행경계-2026-05]] | [[coverage-장관보고-성과평가-실행경계-2026-05]] | [[quality-gate-장관보고-성과평가-실행경계-2026-05]] | [[manifest-newcomer-journey-장관보고-성과평가-실행경계-2026-05]] | [[README]] | NEXT GAP 1순위 |
| 정보공개기록관리 | [[faq-정보공개기록관리-신규자-공개비공개-첫경계-2026-05]] | [[source-정보공개기록관리-답변초안-증거묶음-2026-05]] | [[process-정보공개기록관리-청구처리-응답로그-2026-05]] | [[router-정보공개기록관리-협업회의-신규자-공개경계]] | [[coverage-정보공개기록관리-협업회의-실행경계-2026-05]] | [[quality-gate-정보공개기록관리-협업회의-실행경계-2026-05]] | [[manifest-newcomer-journey-정보공개기록관리-협업회의-실행경계-2026-05]] | [[README]] | 묶음 축 개별 확인 필요 |
| 조직정원 | [[faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치]] | [[source-조직정원-검토메모-작성전-증거묶음]] | [[process-조직정원-요청접수-결정추적-log-2026-05]] | [[walkthrough-조직정원-공개문안-보조라우터-2026-05]] | [[coverage-조직정원-실행경계-2026-05]] | [[quality-gate-조직정원-실행경계-2026-05]] | [[manifest-newcomer-journey-조직정원-실행경계-2026-05]] | [[README]] | PASS 후보 |
| 홍보대응 | [[faq-홍보대응-처음-무엇을-구분하나-2026-05-07]] | [[source-홍보대응-초안전-증거묶음-2026-05-07]] | [[process-홍보대응-요청접수-배포질의로그-2026-05]] | [[walkthrough-홍보대응-대외문안-보조라우터-2026-05]] | [[coverage-홍보대응-대외문안-실행경계-2026-05]] | [[quality-gate-홍보대응-대외문안-실행경계-2026-05]] | [[manifest-newcomer-journey-홍보대응-대외문안-실행경계-2026-05]] | [[README]] | PASS 후보 |
| 협업회의운영 | [[faq-협업회의운영-조정회의와-결정회의는-무엇이-다른가-2026-05]] | [[source-협업회의운영-회의전-증거묶음-작성순서-2026-05]] | [[process-협업회의운영-agenda-to-followup-log-2026-05-07]] | [[walkthrough-협업회의운영-전입자-라우터-2026-05]] | [[coverage-정보공개기록관리-협업회의-실행경계-2026-05]] | [[quality-gate-정보공개기록관리-협업회의-실행경계-2026-05]] | [[manifest-newcomer-journey-정보공개기록관리-협업회의-실행경계-2026-05]] | [[README]] | 묶음 축 개별 확인 필요 |

## 다음 gap 선택 규칙
1. `[ ]`가 있는 축을 최우선으로 고른다.
2. 동률이면 묶음 coverage/quality/manifest만 있고 개별 축 설명이 약한 축을 고른다.
3. 그래도 동률이면 신규자 route가 `router` 하나에만 머물고 FAQ/source/process가 약한 축을 고른다.
4. 이번 점검 기준 다음 gap은 **장관보고·성과평가 전용 source + process**다.

## 실행 순서
1. 위 매트릭스의 wikilink가 모두 실제 root md 노트인지 검사한다.
2. 각 축마다 8칸을 PASS / WEAK / MISSING으로 표시한다.
3. MISSING이 있으면 새 docs exposure보다 해당 축의 source 또는 process를 먼저 만든다.
4. WEAK만 있으면 coverage 또는 quality gate에서 “묶음 축 개별 확인” 문구를 보강한다.
5. 최종 next gap 한 줄을 남긴다.

## 이번 파일의 결론
- cross-axis newcomer route QA의 다음 gap은 [[router-장관보고-성과평가-실행경계-2026-05]] 아래에 붙일 **장관보고·성과평가 전용 source/process**다.
- 다른 축은 대체로 route bundle이 있으나, 예산·민원·정보공개·협업회의는 묶음 manifest/coverage/quality를 쓰므로 후속 QA에서 개별 축 설명 강도를 다시 본다.
