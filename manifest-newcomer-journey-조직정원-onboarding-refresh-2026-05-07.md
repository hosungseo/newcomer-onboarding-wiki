---
title: 조직정원 onboarding refresh newcomer journey manifest
kind: manifest
status: draft
created: 2026-05-07
updated: 2026-05-07
audience: 조직정원·전입자·agent
scope: 조직정원 onboarding refresh route
confidentiality: public-only
---

# manifest — 조직정원 onboarding refresh newcomer journey

```yaml
id: newcomer-journey-org-staffing-onboarding-refresh-2026-05-07
label: 조직정원 onboarding refresh
entry: section-조직정원-onboarding-refresh-2026-05-07
coverage: coverage-조직정원-onboarding-refresh-2026-05-07
quality_gate: quality-gate-조직정원-onboarding-refresh-2026-05-07
audience:
  - 조직정원 전입자
  - 조직개편/정원조정 검토 메모 작성자
  - agent routing
route:
  - step: org_restructuring_intake
    file: newcomer-path-조직정원-공개경계
    purpose: 신설·폐지·이관·통합·명칭변경과 확정/검토/협의 상태를 먼저 기록한다.
  - step: staffing_quota_adjustment_boundary
    file: faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치
    purpose: 조직개편, 정원조정, 직제개정, 인력배치 요청을 분리하고 현정원/소요정원/업무량 근거를 확인한다.
  - step: decree_rule_revision_check
    file: source-조직정원-공개자료-대조순서
    purpose: 직제·시행규칙 원문, 개정 필요 조문, 시행일, 확정 상태를 공개 원문 중심으로 대조한다.
  - step: personnel_allocation_boundary
    file: checklist-조직정원-boundary-router-공개문안-제출전검토-2026-05
    purpose: 개인 인사정보, 세부 배치전략, 결원/충원 우선순위를 공개 설명에서 제거한다.
  - step: evidence_bundle
    file: source-조직정원-검토메모-작성전-증거묶음
    purpose: 공개 원천, 현행 직제/정원표, 업무량 근거, 내부 확인, 제외자료, 담당자 질문을 분리한다.
  - step: coordination_deadline_tracking
    file: process-조직정원-요청접수-결정추적-log-2026-05
    purpose: 요청자, 소관, 협의 대상, 회신기한, 보완요청, 결정/보류, 다음 확인일을 기록한다.
  - step: exposure_coverage
    file: coverage-조직정원-onboarding-refresh-2026-05-07
    purpose: section/coverage/quality/manifest와 docs/gates 노출 상태를 점검한다.
  - step: quality_gate
    file: quality-gate-조직정원-onboarding-refresh-2026-05-07
    purpose: 공개·제출 전 금지선과 통과 기준을 검증한다.
branch_to:
  legal_response:
    when: 직제·시행규칙 개정 문안 자체의 법령질의/유권해석으로 넘어가는 경우
    file: manifest-newcomer-journey-법령대응-공개설명경계-2026-05
  info_disclosure:
    when: 공개/비공개 판단이 조직정원 route 밖의 정보공개 판단으로 넘어가는 경우
    file: manifest-newcomer-journey-정보공개기록관리-협업회의-실행경계-2026-05
stop_lines:
  - 미확정 조직개편안과 정원조정 시나리오는 확정 사실처럼 쓰지 않는다.
  - 협의전략, 삭감/증원 요구 의견, 내부 쟁점표, 보고라인은 공개 설명으로 바꾸지 않는다.
  - 개인별 보직·평정·고충·연락처·인사이력과 세부 배치전략은 제외한다.
completion_rule: quality_gate를 통과하거나 중지/확인 요청으로 종료한다.
```

## 읽는 순서

1. [[section-조직정원-onboarding-refresh-2026-05-07]]
2. [[newcomer-path-조직정원-공개경계]]
3. [[faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치]]
4. [[source-조직정원-공개자료-대조순서]]
5. [[source-조직정원-검토메모-작성전-증거묶음]]
6. [[process-조직정원-요청접수-결정추적-log-2026-05]]
7. [[checklist-조직정원-boundary-router-공개문안-제출전검토-2026-05]]
8. [[coverage-조직정원-onboarding-refresh-2026-05-07]]
9. [[quality-gate-조직정원-onboarding-refresh-2026-05-07]]
