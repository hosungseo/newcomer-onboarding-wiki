---
title: 조직정원 실행경계 coverage
kind: coverage
status: draft
created: 2026-05-06
updated: 2026-05-06
audience: 조직정원·전입자·agent
scope: 조직정원 FAQ/source/process/checklist/walkthrough/manifest 노출 점검
confidentiality: public-only
---

# coverage — 조직정원 실행경계

## 한 줄 요약

조직정원 묶음은 **공개 조직·정원 자료를 설명하는 경로**와 **비공개 내부검토·인사 민감정보를 멈추는 경계**를 동시에 갖춰야 한다. 이 coverage는 현재 노출된 FAQ/source/walkthrough와 새 manifest·quality gate가 같은 순서로 읽히는지 점검한다.

## 현재 연결된 제품군

| 층 | 노트 | 역할 |
|---|---|---|
| walkthrough | [[newcomer-path-조직정원-공개경계]] | 기관 → 상황 → 업무축 → 자료 → 초안/체크리스트 → 공개경계 순서 안내 |
| FAQ | [[faq-조직정원-조직도와-업무분장은-무엇이-다른가]] | 조직도·업무분장 구분 |
| FAQ | [[faq-조직정원-정원-공개자료와-내부검토는-어디서-갈리나]] | 정원 공개자료와 내부검토 경계 |
| section | [[section-조직정원-onboarding-coverage-2026-05-07]] | 조직·정원·법령근거 boundary, evidence bundle, review/decision tracking, 공개/비공개/인사정보 boundary 진입면 |
| FAQ | [[faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치]] | 조직개편·정원조정·직제개정·인력배치 첫 분기 |
| section | [[section-조직정원-onboarding-coverage-2026-05-07]] | 조직·정원·법령근거 boundary, evidence bundle, review/decision tracking, 공개/비공개/인사정보 boundary 진입면 |
| FAQ | [[faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치]] | 조직개편·정원조정·직제개정·인력배치 첫 분기 |
| source | [[source-조직정원-공개자료-대조순서]] | 공개 원문과 내부 확인자료 대조 순서 |
| source | [[source-조직정원-검토메모-작성전-증거묶음]] | 검토메모 작성 전 공개 원천·내부 확인·제외정보·확인질문 증거묶음 |
| process/checklist | [[process-조직정원-요청접수-결정추적-log-2026-05]] | 요청접수→기능·업무량·법령근거→현정원/소요정원→결정/보류/추적 log |
| checklist | [[checklist-조직정원-boundary-router-공개문안-제출전검토-2026-05]] | 공개문안 제출 전 공개/비공개/인사정보 boundary |
| source | [[source-조직정원-검토메모-작성전-증거묶음]] | 검토메모 작성 전 공개 원천·내부 확인·제외정보·확인질문 증거묶음 |
| process/checklist | [[process-조직정원-요청접수-결정추적-log-2026-05]] | 요청접수→기능·업무량·법령근거→현정원/소요정원→결정/보류/추적 log |
| checklist | [[checklist-조직정원-boundary-router-공개문안-제출전검토-2026-05]] | 공개문안 제출 전 공개/비공개/인사정보 boundary |
| hub | [[hub-기관또는기능]] | 기관·기능의 상위 진입점 |
| process | [[process-기능-단계]] | 기능 흐름과 산출물 분류 |
| manifest | [[manifest-newcomer-journey-조직정원-실행경계-2026-05]] | agent-readable 실행 경로 |
| quality gate | [[quality-gate-조직정원-실행경계-2026-05]] | 제품군 완성도·금지선 검증 |
| discovery | [[coverage-execution-boundary-routes-discovery-2026-05]] | docs/landing 노출명과 route 묶음 점검 |

## 전입자 판단 순서

1. [[hub-기관또는기능]]에서 기관의 법적 임무와 기능 묶음을 잡는다.
2. [[newcomer-path-조직정원-공개경계]]로 현재 장면을 현황 파악, 직제 확인, 정원 변동 설명, 기능 조정, 대외 질의, 보고서 초안 중 하나로 표시한다.
3. [[faq-조직정원-조직도와-업무분장은-무엇이-다른가]]로 조직 단위와 업무분장 문장을 분리한다.
4. [[faq-조직정원-정원-공개자료와-내부검토는-어디서-갈리나]]로 총괄 공개자료와 정원 협의·조정 내부검토를 나눈다.
5. [[source-조직정원-공개자료-대조순서]]에 공개 위치, 확인일, 확정 상태, 제외 범주를 남긴다.
6. 기능 흐름과 산출물 성격이 애매하면 [[process-기능-단계]]로 기능 단계, 산출물, 공개 설명 가능 범위를 다시 분류한다.
7. 공개 설명·학습노트·외부 공유 전에는 [[quality-gate-조직정원-실행경계-2026-05]]의 멈춤선을 통과한다.

## 실행 경계 노출 체크

- [x] 공개 조직도·직제·업무분장·정원 총괄 자료를 먼저 보게 한다.
- [x] 내부 정원 요구, 협의 전략, 직급·부서별 세부 배치, 결원·충원 우선순위를 공개문장으로 바꾸지 않게 한다.
- [x] 미확정 조직개편안과 확정·공표된 결과를 분리한다.
- [x] 개인별 보직·평정·고충·연락처·인사이력은 조직정원 설명에서 제외한다.
- [x] 공개자료 근거가 없으면 “확인 필요”로 남기고 단정하지 않게 한다.

## docs/landing 발견성

- docs/landing 노출명은 “조직정원 실행경계”로 고정한다.
- 사람이 먼저 읽을 링크는 이 coverage이고, agent 실행 링크는 [[manifest-newcomer-journey-조직정원-실행경계-2026-05]]로 둔다.
- 공개 설명·학습노트·외부 공유 직전의 마지막 검증 링크는 [[quality-gate-조직정원-실행경계-2026-05]]로 둔다.
- 통합 discovery 묶음은 [[coverage-execution-boundary-routes-discovery-2026-05]]에서 관리한다.

## 남은 고도화 후보

- 조직정원 전용 checklist가 아직 독립 파일로 분리되어 있지 않다. 현재는 [[newcomer-path-조직정원-공개경계]]의 제출 전 체크리스트와 이 coverage의 실행 경계 체크로 대체한다.
- 조직정원 process가 독립 파일로 충분히 세분화되기 전까지는 [[process-기능-단계]]와 [[source-조직정원-공개자료-대조순서]]를 조합해 사용한다.

## 공개 금지선

- 인사·정원 민감정보: 개인별 담당·보직·평정·고충, 직급별 세부 배치, 결원·충원 전략
- 비공개 내부검토: 정원 요구안, 협의·조정 의견, 쟁점표, 보고라인, 내부 검토의견
- 미확정 조직개편안: 승인·공표 전 신설·폐지·이관·증감 시나리오
- 보안·감독 민감정보: 공개 원문을 넘는 보안조직, 조사·감독·감사·수사 세부 인력운용
