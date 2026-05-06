---
title: 예산대응 onboarding refresh newcomer journey manifest
kind: manifest
status: exposed
created: 2026-05-07
updated: 2026-05-07
audience: 예산대응·전입자·agent
scope: budget request intake, adjustment/execution-change classification, evidence bundle, coordination/deadline tracking, National Assembly explanation materials, disclosure boundary
confidentiality: public-only
---

# manifest — 예산대응 onboarding refresh newcomer journey

```yaml
id: newcomer-journey-budget-response-onboarding-refresh-2026-05-07
label: 예산대응 onboarding refresh
entry: section-예산대응-onboarding-refresh-2026-05-07
section: section-예산대응-onboarding-refresh-2026-05-07
coverage: coverage-예산대응-onboarding-refresh-2026-05-07
quality_gate: quality-gate-예산대응-onboarding-refresh-2026-05-07
audience:
  - 예산대응 전입자
  - 요구자료·설명자료 초안 작성자
  - agent routing
route:
  - step: budget_request_intake
    file: walkthrough-예산대응-전입자-라우터-2026-05
    purpose: 요청자, 요구항목, 양식, 제출기한, 소관 후보를 먼저 분리한다.
  - step: adjustment_execution_change_classification
    file: faq-예산대응-예산요구-예산조정-집행변경-국회의회설명자료-첫구분-2026-05
    purpose: 예산요구·예산조정·집행변경·국회/의회 설명자료 여부를 첫 판단으로 둔다.
  - step: evidence_bundle
    file: source-예산대응-검토메모-작성전-증거묶음-2026-05
    purpose: 공개·확정 예산자료, 요구 원문, 담당 확인, 내부검토, 미확정 예산안을 나눈다.
  - step: coordination_deadline_tracking
    file: process-예산대응-요청접수-회신추적로그-2026-05
    purpose: 담당부서, 회신기한, 보완요청, 후속조치, 추적상태를 기록한다.
  - step: national_assembly_explanation_materials
    file: checklist-예산대응-요구자료-제출전검토
    purpose: 국회·의회 제출용 확정 수치와 제외할 내부전략·잠정액을 점검한다.
  - step: disclosure_boundary
    file: faq-예산대응-공개자료와-내부검토는-어디서-갈리나
    purpose: 공개자료와 내부검토·잠정액·협상전략의 멈춤선을 확인한다.
  - step: quality_gate
    file: quality-gate-예산대응-onboarding-refresh-2026-05-07
    purpose: 공개 전 route 완성도와 금지선을 검증한다.
outputs:
  docs_index: docs/index.html
  gates_json: docs/gates.json
constraints:
  - public-root-markdown-only
  - no-graph-data-export
  - no-readme-or-landing-expansion
```
