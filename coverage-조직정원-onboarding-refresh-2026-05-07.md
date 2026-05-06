---
title: 조직정원 onboarding refresh coverage
kind: coverage
status: draft
created: 2026-05-07
updated: 2026-05-07
audience: 조직정원·전입자·agent
scope: 조직정원 onboarding refresh route 노출 점검
confidentiality: public-only
---

# coverage — 조직정원 onboarding refresh

## 한 줄 요약

조직정원 onboarding refresh는 전입자가 조직개편·정원조정·직제/시행규칙 개정·인력배치 요청을 섞지 않고, evidence bundle과 협의·기한 tracking, 공개/인사민감 boundary까지 한 경로로 확인하게 하는 노출 묶음이다.

## 노출된 route 구성

| 역할 | 노트 | 노출 상태 |
|---|---|---|
| section | [[section-조직정원-onboarding-refresh-2026-05-07]] | refresh route 여섯 칸 진입면 |
| entry | [[newcomer-path-조직정원-공개경계]] | 공개경계 첫 흐름 |
| boundary FAQ | [[faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치]] | 조직개편·정원조정·직제개정·인력배치 첫 분기 |
| legal/source check | [[source-조직정원-공개자료-대조순서]] | 직제·시행규칙 등 공개 원문 대조 |
| evidence bundle | [[source-조직정원-검토메모-작성전-증거묶음]] | 공개 원천·내부 확인·제외정보 분리 |
| tracking | [[process-조직정원-요청접수-결정추적-log-2026-05]] | 협의·기한·결정/보류·후속확인 log |
| boundary checklist | [[checklist-조직정원-boundary-router-공개문안-제출전검토-2026-05]] | 공개/비공개/인사민감 boundary |
| quality gate | [[quality-gate-조직정원-onboarding-refresh-2026-05-07]] | refresh route 검증 |
| manifest | [[manifest-newcomer-journey-조직정원-onboarding-refresh-2026-05-07]] | agent-readable route |

## coverage checklist

- [x] 조직개편 intake가 신설·폐지·이관·통합·명칭변경과 확정/검토/협의 상태를 먼저 보게 한다.
- [x] 정원조정은 현정원/소요정원/증감/업무량 근거와 결원·충원전략 제외선을 분리한다.
- [x] 직제·시행규칙 개정은 공개 법령 원문, 개정 필요 조문, 시행일 확인을 요구한다.
- [x] 인력배치 boundary는 개인별 보직·평정·고충·연락처·인사이력을 공개 route에서 멈춘다.
- [x] evidence bundle은 공개 원천, 내부 확인, 담당자 질문, 제외 자료를 분리한다.
- [x] 협의·기한 tracking은 요청자, 소관, 협의 대상, 회신기한, 보완요청, 다음 확인일을 남긴다.
- [x] docs/index.html과 docs/gates.json에 section/coverage/quality/manifest가 노출된다.

## 공개 금지선

- 미확정 조직개편안, 정원 요구·삭감 의견, 협의전략, 부처 간 비공개 이견
- 개인별 보직·평정·고충·건강·가족·연락처·인사이력
- 직급·부서별 세부 배치, 결원관리, 충원 우선순위, 보안·조사·감독 세부 인력운용
