---
title: 조직정원 실행경계 newcomer journey manifest
kind: manifest
status: draft
created: 2026-05-06
updated: 2026-05-06
audience: 조직정원·전입자·agent
scope: 공개자료 기반 조직정원 실행 경로
confidentiality: public-only
---

# manifest — 조직정원 실행경계 newcomer journey

```yaml
id: newcomer-journey-org-staffing-boundary-2026-05
label: 조직정원 실행경계
entry: newcomer-path-조직정원-공개경계
coverage: coverage-조직정원-실행경계-2026-05
quality_gate: quality-gate-조직정원-실행경계-2026-05
discovery_coverage: coverage-execution-boundary-routes-discovery-2026-05
audience:
  - 조직정원 전입자
  - 공개자료 기반 설명 메모 작성자
  - agent routing
route:
  - step: hub
    file: hub-기관또는기능
    purpose: 기관 임무와 기능 묶음을 먼저 고정한다.
  - step: onboarding_section
    file: section-조직정원-onboarding-coverage-2026-05-07
    purpose: 조직·정원·법령근거 boundary, evidence bundle, review/decision tracking checklist, 공개/비공개/인사정보 boundary를 한 번에 고정한다.
  - step: onboarding_section
    file: section-조직정원-onboarding-coverage-2026-05-07
    purpose: 조직·정원·법령근거 boundary, evidence bundle, review/decision tracking checklist, 공개/비공개/인사정보 boundary를 한 번에 고정한다.
  - step: walkthrough
    file: newcomer-path-조직정원-공개경계
    purpose: 현재 장면과 공개·비공개 범위를 분류한다.
  - step: faq_first_boundary
    file: faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치
    purpose: 조직개편, 정원조정, 직제/시행규칙 개정, 인력배치 요청을 먼저 나눈다.
  - step: evidence_bundle
    file: source-조직정원-검토메모-작성전-증거묶음
    purpose: 공개 원천, 내부 확인자료, 제외 민감정보, 담당자 확인 질문을 분리한다.
  - step: review_decision_tracking
    file: process-조직정원-요청접수-결정추적-log-2026-05
    purpose: 접수, 기능·업무량·법령근거, 현정원/소요정원, 협의, 결정/보류, 후속조치를 기록한다.
  - step: public_private_personnel_boundary
    file: checklist-조직정원-boundary-router-공개문안-제출전검토-2026-05
    purpose: 공개문안 전환 전 내부검토, 미확정안, 개인 인사정보를 제거한다.
  - step: faq_first_boundary
    file: faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치
    purpose: 조직개편, 정원조정, 직제/시행규칙 개정, 인력배치 요청을 먼저 나눈다.
  - step: evidence_bundle
    file: source-조직정원-검토메모-작성전-증거묶음
    purpose: 공개 원천, 내부 확인자료, 제외 민감정보, 담당자 확인 질문을 분리한다.
  - step: review_decision_tracking
    file: process-조직정원-요청접수-결정추적-log-2026-05
    purpose: 접수, 기능·업무량·법령근거, 현정원/소요정원, 협의, 결정/보류, 후속조치를 기록한다.
  - step: public_private_personnel_boundary
    file: checklist-조직정원-boundary-router-공개문안-제출전검토-2026-05
    purpose: 공개문안 전환 전 내부검토, 미확정안, 개인 인사정보를 제거한다.
  - step: faq_structure
    file: faq-조직정원-조직도와-업무분장은-무엇이-다른가
    purpose: 조직도, 업무분장, 기능 설명을 섞지 않는다.
  - step: faq_staffing_boundary
    file: faq-조직정원-정원-공개자료와-내부검토는-어디서-갈리나
    purpose: 정원 총괄 공개자료와 내부 정원 검토를 분리한다.
  - step: source
    file: source-조직정원-공개자료-대조순서
    purpose: 공개 위치, 확인일, 확정 상태, 제외 범주를 기록한다.
  - step: process_support
    file: process-기능-단계
    purpose: 기능 흐름과 산출물을 분류한다.
  - step: coverage
    file: coverage-조직정원-실행경계-2026-05
    purpose: FAQ/source/walkthrough 노출과 빈칸을 점검한다.
  - step: quality_gate
    file: quality-gate-조직정원-실행경계-2026-05
    purpose: 공개 설명 전 금지선과 완성도를 검증한다.
  - step: discovery_coverage
    file: coverage-execution-boundary-routes-discovery-2026-05
    purpose: docs/landing 노출명과 route 묶음 순서를 확인한다.
branch_to:
  info_disclosure:
    when: 공개 여부가 애매한 경우
    file: faq-정보공개-공개비공개-경계는-어디서-나누나
  report_draft:
    when: 공개자료 기반 첫 보고서로 전환하는 경우
    file: newcomer-path-첫보고서작성-공통행정업무
stop_lines:
  - 개인별 보직·평정·고충·연락처·인사이력은 공개 설명에 쓰지 않는다.
  - 직급별 세부 배치, 결원, 충원 우선순위, 정원 협의 전략은 공개자료로 재가공하지 않는다.
  - 미확정 조직개편안은 확정·공표 전까지 신설·폐지·이관·증감 사실로 쓰지 않는다.
  - 내부 검토의견, 보고라인, 기관 간 비공개 이견은 공개 문장으로 바꾸지 않는다.
completion_rule: quality_gate를 통과하거나 중지/확인 요청으로 종료한다.
```

## 읽는 순서

1. [[hub-기관또는기능]]
2. [[section-조직정원-onboarding-coverage-2026-05-07]]
3. [[newcomer-path-조직정원-공개경계]]
4. [[faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치]]
5. [[faq-조직정원-조직도와-업무분장은-무엇이-다른가]]
6. [[faq-조직정원-정원-공개자료와-내부검토는-어디서-갈리나]]
7. [[source-조직정원-검토메모-작성전-증거묶음]]
8. [[source-조직정원-공개자료-대조순서]]
9. [[process-조직정원-요청접수-결정추적-log-2026-05]]
10. [[checklist-조직정원-boundary-router-공개문안-제출전검토-2026-05]]
11. [[process-기능-단계]]
12. [[coverage-조직정원-실행경계-2026-05]]
13. [[quality-gate-조직정원-실행경계-2026-05]]
14. [[coverage-execution-boundary-routes-discovery-2026-05]]
