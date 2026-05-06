---
title: 예산대응 onboarding refresh coverage
kind: coverage
status: exposed
created: 2026-05-07
updated: 2026-05-07
audience: 예산대응·전입자·agent
scope: 예산대응 refresh route 노출 점검
confidentiality: public-only
---

# coverage — 예산대응 onboarding refresh

## 한 줄 요약

예산대응 refresh route는 기존 예산·민원 묶음에서 예산 축을 분리해 **요구 접수, 조정/집행변경 분류, 근거묶음, 협의·기한, 국회 설명자료, 공개경계**를 한 번에 재탐색하게 한다.

## 현재 연결된 제품군

| 층 | 노트 | 역할 |
|---|---|---|
| section | [[section-예산대응-onboarding-refresh-2026-05-07]] | refresh route의 한 화면 진입점 |
| entry | [[walkthrough-예산대응-전입자-라우터-2026-05]] | 예산 요구자료·표·기한 중심 접수물 첫 route |
| intake/classification | [[faq-예산대응-예산요구-예산조정-집행변경-국회의회설명자료-첫구분-2026-05]] | 예산요구·조정·집행변경·국회/의회 설명자료 분류 |
| evidence bundle | [[source-예산대응-검토메모-작성전-증거묶음-2026-05]] | 공개·확정 예산자료와 내부검토·미확정 예산안 대조 |
| coordination/deadline tracking | [[process-예산대응-요청접수-회신추적로그-2026-05]] | 요청자, 담당, 기한, 보완요청, 후속상태 추적 |
| National Assembly explanation materials | [[checklist-예산대응-요구자료-제출전검토]] | 국회·의회 제출 전 수치·설명 범위 점검 |
| disclosure boundary | [[faq-예산대응-공개자료와-내부검토는-어디서-갈리나]] | 공개자료와 내부검토·잠정액·전략자료 멈춤선 |
| quality gate | [[quality-gate-예산대응-onboarding-refresh-2026-05-07]] | route 완성도와 금지선 검증 |
| manifest | [[manifest-newcomer-journey-예산대응-onboarding-refresh-2026-05-07]] | agent-readable route |

## coverage 판정

- [x] docs/index.html에서 예산·민원 section 안에 예산 refresh route가 보인다.
- [x] docs/gates.json에서 section, coverage, qualityGate, manifest가 root markdown으로 연결된다.
- [x] 모든 참조는 공개 root markdown이며 graph/data export, README, landing 확장 없이 유지된다.
- [x] 예산 수치와 설명자료가 내부검토·미확정 예산안·협상전략과 분리된다.

## 남은 고도화 후보

- 국회·의회 제출자료 양식은 공개 문서로 확인된 경우에만 별도 source로 승격한다.
- 집행변경 유형별 세부 요건은 법령·지침 근거가 확보될 때 별도 FAQ로 분리한다.
