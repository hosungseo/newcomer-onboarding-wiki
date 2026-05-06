---
title: 국회대응 자료요구경계 journey manifest
kind: manifest
status: draft
created: 2026-05-06
updated: 2026-05-07
audience: 전입자·agent
scope: 국회 자료요구 답변 작성 route
confidentiality: public-only
---

# manifest — 국회대응 자료요구경계

```yaml
route: 국회대응 자료요구경계
entrypoint: section-국회대응-onboarding-coverage-2026-05-07
recommended_docs_label: 국회대응 자료요구경계
newcomer_journey_route_notes:
  human_entry:
    - section-국회대응-onboarding-coverage-2026-05-07
    - walkthrough-국회대응-전입자-라우터-2026-05
    - coverage-국회대응-자료요구경계-2026-05
  source_and_answer:
    - faq-국회대응-전입자-첫구분-자료요구-서면질의-국감상임위-현안보고-2026-05
    - source-국회대응-답변메모-작성전-증거묶음-2026-05
    - source-국회대응-자료요구-답변초안-대조순서
    - process-국회대응-자료요구-답변작성흐름
    - faq-국회대응-공개답변과-비공개협의는-어디서-나누나
  shared_audit_boundary:
    - process-감사국회대응-초안공개답변-분기흐름
    - checklist-감사국회대응-제출전-precheck
    - faq-감사대응-자료제출은-어디까지-하나
  budget_and_disclosure_branch:
    - source-예산대응-공개자료-대조순서
    - checklist-예산대응-요구자료-제출전검토
    - faq-정보공개-공개비공개-경계는-어디서-나누나
  agent_control:
    - quality-gate-국회대응-자료요구경계-2026-05
sequence:
  - id: orient
    note: section-국회대응-onboarding-coverage-2026-05-07
    action: 의원실 자료요구, 서면질의, 국감/상임위 요구, 현안보고 중 어느 흐름인지 먼저 고른다.
  - id: request_boundary
    note: faq-국회대응-전입자-첫구분-자료요구-서면질의-국감상임위-현안보고-2026-05
    action: 요구 주체, 요구일, 제출기한, 요구 원문, 요구 번호, 대상 기간, 소관 후보를 고정한다.
  - id: evidence_bundle
    note: source-국회대응-답변메모-작성전-증거묶음-2026-05
    action: 요구 원문, 공개·확정 원천, 확인 필요, 제외 자료, 국회 제출 전용 자료를 분리한다.
  - id: source_check
    note: source-국회대응-자료요구-답변초안-대조순서
    action: 요구 원문, 소관, 공개·확정 원천, 비공개·확인 필요, 근거 원천을 분리한다.
  - id: answer_process
    note: process-국회대응-자료요구-답변작성흐름
    action: 답변 번호와 요구 항목을 맞추고 공개·확정자료 기준으로 문장화한다.
  - id: disclosure_boundary
    note: faq-정보공개-공개비공개-경계는-어디서-나누나
    action: 공개 가능한 자료와 비공개·내부검토·확인 필요 자료를 재확인한다.
  - id: assembly_private_coordination
    note: faq-국회대응-공개답변과-비공개협의는-어디서-나누나
    action: 공개 제출 답변과 비공개 협의·구두 설명·예상 Q&A를 분리한다.
  - id: shared_audit_assembly_branch
    note: process-감사국회대응-초안공개답변-분기흐름
    action: 감사 자료요구와 겹치는 경우 공개답변, 내부검토, 확인요청으로 분기한다.
  - id: shared_precheck
    note: checklist-감사국회대응-제출전-precheck
    action: 감사·국회 공통 제출 직전 개인정보·비공개 협의·미확정 사실을 걸러내고 일반 공개자료와 국회 제출 전용 자료를 구분한다.
  - id: budget_branch
    note: source-예산대응-공개자료-대조순서
    action: 예산·사업 수치가 있으면 기준일, 단위, 회계, 공개 원천을 맞춘다.
  - id: pre_submit_check
    note: checklist-예산대응-요구자료-제출전검토
    action: 예산 요구자료가 섞인 경우 제출 전 수치·원천·민감정보를 점검한다.
  - id: discovery_check
    note: coverage-execution-boundary-routes-discovery-2026-05
    action: 실행경계 묶음의 노출명, coverage, manifest, quality gate 삼각형이 맞는지 확인한다.
  - id: quality_gate
    note: quality-gate-국회대응-자료요구경계-2026-05
    action: 공개 공유·답변 제출·agent 결과 수락 전 stop line을 통과했는지 확인한다.
branch_to:
  budget: source-예산대응-공개자료-대조순서
  budget_pre_submit: checklist-예산대응-요구자료-제출전검토
  audit_related: faq-감사대응-자료제출은-어디까지-하나
  disclosure_internal_review: faq-정보공개-공개자료와-내부검토는-무엇이-다른가
  audit_overlap: process-감사국회대응-초안공개답변-분기흐름
  shared_precheck: checklist-감사국회대응-제출전-precheck
stop_lines:
  - 의원실·상임위 비공개 협의문안, 구두 설명, 질의 대응전략, 예상 Q&A는 공식 제출 답변과 분리한다.
  - 개인정보·식별 가능 사례와 감사·징계·수사·보안 세부는 답변 본문에 넣지 않는다.
  - 검토 중 정책안, 잠정 수치, 미공표 일정, 확정 전 조직·정원·예산안은 확정 사실처럼 쓰지 않는다.
  - 타 기관 소관을 우리 부 결론처럼 쓰지 않는다.
quality_gate: quality-gate-국회대응-자료요구경계-2026-05
section: section-국회대응-onboarding-coverage-2026-05-07
coverage: coverage-국회대응-자료요구경계-2026-05
discovery_coverage: coverage-execution-boundary-routes-discovery-2026-05
completion_rule: quality_gate를 통과하거나 확인 필요/소관 이송으로 종료한다.
```

## 연결 노트

### 전입자 route 노출

- [[section-국회대응-onboarding-coverage-2026-05-07]]
- [[walkthrough-국회대응-전입자-라우터-2026-05]]
- [[coverage-국회대응-자료요구경계-2026-05]]

### 답변 작성·공개/비공개 경계

- [[faq-국회대응-전입자-첫구분-자료요구-서면질의-국감상임위-현안보고-2026-05]]
- [[source-국회대응-답변메모-작성전-증거묶음-2026-05]]
- [[source-국회대응-자료요구-답변초안-대조순서]]
- [[process-국회대응-자료요구-답변작성흐름]]
- [[faq-정보공개-공개비공개-경계는-어디서-나누나]]
- [[faq-국회대응-공개답변과-비공개협의는-어디서-나누나]]
- [[process-감사국회대응-초안공개답변-분기흐름]]
- [[checklist-감사국회대응-제출전-precheck]]

### 분기·통제·발견

- [[source-예산대응-공개자료-대조순서]]
- [[checklist-예산대응-요구자료-제출전검토]]
- [[faq-감사대응-자료제출은-어디까지-하나]]
- [[quality-gate-국회대응-자료요구경계-2026-05]]
- [[coverage-execution-boundary-routes-discovery-2026-05]]
