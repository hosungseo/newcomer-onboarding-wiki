---
title: 민원대응 onboarding refresh newcomer journey manifest
kind: manifest
status: exposed
created: 2026-05-07
updated: 2026-05-07
audience: 민원대응·전입자·agent
scope: complaint intake, classification, deadline tracking, reply evidence bundle, escalation, disclosure/privacy boundary
confidentiality: public-only
---

# manifest — 민원대응 onboarding refresh newcomer journey

```yaml
id: newcomer-journey-civil-complaints-onboarding-refresh-2026-05-07
label: 민원대응 onboarding refresh
entry: section-민원대응-onboarding-refresh-2026-05-07
section: section-민원대응-onboarding-refresh-2026-05-07
coverage: coverage-민원대응-onboarding-refresh-2026-05-07
quality_gate: quality-gate-민원대응-onboarding-refresh-2026-05-07
audience:
  - 민원대응 전입자
  - 답변 초안 작성자
  - agent routing
route:
  - step: complaint_intake
    file: faq-민원대응-처음-질의-불만-고충-반복민원-구분-2026-05
    purpose: 접수 요지, 신청인, 첨부자료, 소관 후보를 먼저 분리한다.
  - step: classification
    file: walkthrough-민원대응-전입자-라우터-2026-05
    purpose: 질의·불만·고충·반복민원·타기관 소관 여부를 첫 판단으로 둔다.
  - step: deadline_tracking
    file: process-민원대응-접수부터-재민원로그-2026-05
    purpose: 접수일, 보완요청, 이송기한, 답변기한, 연장/재분류 사유를 추적한다.
  - step: reply_evidence_bundle
    file: source-민원대응-첨부자료-공개근거-대조순서
    purpose: 민원 원문·첨부·공개근거·확인중·제외자료를 나눈다.
  - step: escalation_transfer
    file: newcomer-path-민원대응-첫30분-소관이송-2026-05
    purpose: 소관불명, 타기관 이송, 반복/집단 민원, 민감 쟁점의 상향보고 필요성을 확인한다.
  - step: disclosure_privacy_boundary
    file: checklist-민원대응-답변전-공개경계-precheck
    purpose: 개인정보, 제3자 정보, 내부검토, 수사·감사·분쟁 민감정보를 외부 문안에서 제거한다.
  - step: quality_gate
    file: quality-gate-민원대응-onboarding-refresh-2026-05-07
    purpose: 공개 전 route 완성도와 금지선을 검증한다.
outputs:
  docs_index: docs/index.html
  gates_json: docs/gates.json
constraints:
  - public-root-markdown-only
  - no-graph-data-export
  - no-readme-or-landing-expansion
```
