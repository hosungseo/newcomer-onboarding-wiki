---
title: 예산대응 민원대응 실행경계 newcomer journey manifest
kind: manifest
status: draft
created: 2026-05-06
updated: 2026-05-06
audience: 전입자·예산대응 담당자·민원대응 담당자·agent
scope: 예산 요구자료와 민원 답변이 겹치는 사안의 공개자료 기반 실행 경로
confidentiality: public-only
---

# manifest — 예산대응 ↔ 민원대응 실행경계 newcomer journey

```yaml
id: newcomer-journey-budget-civil-boundary-2026-05
label: 예산대응·민원대응 실행경계
entry: walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05
coverage: coverage-예산대응-민원대응-실행경계-2026-05
quality_gate: quality-gate-예산대응-민원대응-실행경계-2026-05
discovery_coverage: coverage-execution-boundary-routes-discovery-2026-05
audience:
  - 예산대응 전입자
  - 민원대응 전입자
  - 예산 관련 민원 답변 초안 작성자
  - agent routing
route:
  - step: route_map
    file: walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05
    purpose: 접수물이 예산 요구자료인지 민원 답변인지, 또는 둘이 섞였는지 먼저 고른다.
  - step: budget_router
    file: walkthrough-예산대응-전입자-라우터-2026-05
    purpose: 요구자료 양식·표·기한이 중심인 경우 공개·확정 예산자료 route를 탄다.
  - step: civil_router
    file: walkthrough-민원대응-전입자-라우터-2026-05
    purpose: 국민신문고·전화·공문 민원 문장이 중심인 경우 소관·이송·답변 경계를 먼저 자른다.
  - step: budget_item_split
    file: faq-예산대응-요구자료-항목은-어떻게-쪼개나
    purpose: 요구 항목을 공개자료, 확인필요, 제외자료, 후속질문으로 쪼갠다.
  - step: budget_public_boundary
    file: faq-예산대응-공개자료와-내부검토는-어디서-갈리나
    purpose: 공개 예산자료와 내부검토·미확정 예산안을 분리한다.
  - step: budget_stage_split
    file: faq-예산대응-편성과-집행자료는-어떻게-구분하나
    purpose: 편성자료와 집행자료가 섞인 문장을 단계별로 나눈다.
  - step: budget_draft_process
    file: process-예산대응-요구자료-작성흐름
    purpose: 요구자료 초안을 공개자료, 확인필요, 제외자료로 만든다.
  - step: budget_submission_checklist
    file: checklist-예산대응-요구자료-제출전검토
    purpose: 제출 전 미확정 예산안과 내부검토가 섞였는지 판정한다.
  - step: civil_boundary_classification
    file: faq-민원대응-처음-질의-불만-고충-반복민원-구분-2026-05
    purpose: 접수문을 단순 질의, 불만, 고충 해결요구, 반복민원으로 먼저 구분한다.
  - step: civil_first_30min_checklist
    file: checklist-민원대응-첫30분-소관이송-공개경계
    purpose: 접수 직후 답변 초안 작성 전에 5칸 요약, 소관, 이송 후보, 공개자료 대조를 고정한다.
  - step: civil_repetition_process
    file: process-민원대응-반복민원-처리경계
    purpose: 반복 민원, 새 사실, 새 요구를 구분해 답변 범위를 정한다.
  - step: civil_repeat_public_faq
    file: faq-민원대응-반복민원-공개답변은-어디서-멈추나
    purpose: 반복민원의 공개답변 가능 범위와 내부검토·별도절차 멈춤선을 확인한다.
  - step: civil_new_material_faq
    file: faq-민원대응-새자료가-붙으면-반복민원인가
    purpose: 새 사실·새 증빙이 붙은 반복민원을 기계적으로 닫지 않고 재검토 여부를 가른다.
  - step: civil_jurisdiction_source
    file: source-민원대응-타기관이송-소관대조순서
    purpose: 타기관·타부서 소관과 이송 후보를 대조한다.
  - step: civil_masking_source
    file: source-민원대응-마스킹-이송-원천대조순서
    purpose: 원문·첨부·이송 후보를 마스킹한 뒤 공유 가능한 근거로 줄인다.
  - step: civil_attachment_source
    file: source-민원대응-첨부자료-공개근거-대조순서
    purpose: 민원 첨부자료를 공개근거, 확인필요, 제외로 나눠 답변 근거 사용 가능성을 판단한다.
  - step: civil_standard_faq
    file: faq-민원대응-반복질문은-어디까지-표준답변으로-묶나
    purpose: 표준답변으로 묶을 수 있는 반복질문 범위를 확인한다.
  - step: civil_masking_checklist
    file: checklist-민원대응-마스킹-이송-답변초안
    purpose: 개인정보 마스킹, 이송, 답변초안 공개경계를 제출 전 점검한다.
  - step: civil_response_repeat_log
    file: process-민원대응-접수부터-재민원로그-2026-05
    purpose: 답변근거, 마스킹, 반복/새자료 판단, 담당·이송, 다음 조치를 재민원 로그에 남긴다.
  - step: civil_public_private_personal_info_precheck
    file: checklist-민원대응-답변전-공개경계-precheck
    purpose: 답변 초안 외부공유 전 공개자료, 비공개자료, 개인정보·제3자정보 경계를 최종 확인한다.
  - step: coverage
    file: coverage-예산대응-민원대응-실행경계-2026-05
    purpose: route 노출과 빈칸을 점검한다.
  - step: quality_gate
    file: quality-gate-예산대응-민원대응-실행경계-2026-05
    purpose: 공개 답변·요구자료 제출 전 금지선과 완성도를 검증한다.
  - step: discovery_coverage
    file: coverage-execution-boundary-routes-discovery-2026-05
    purpose: docs/landing 노출명과 route 묶음 순서를 확인한다.
branch_to:
  contract_procurement:
    when: 계약금액, 예정가격, 입찰·조달 정보가 함께 들어온 경우
    file: newcomer-path-예산대응-계약조달-첫흐름
  info_disclosure:
    when: 정보공개 청구성 요구가 포함된 경우
    file: faq-정보공개-공개비공개-경계는-어디서-나누나
stop_lines:
  - 예산 수치가 공개·확정 원천으로 대조되지 않으면 확인 필요로 남기고 답변 본문에 넣지 않는다.
  - 민원 원문의 개인정보, 제3자 정보, 민감 사건 사실, 계정·주소·연락처는 요약 단계에서 제거한다.
  - 비공개 내부검토, 미확정 예산안, 국회·감사 대응전략, 삭감·증액 협의 내용은 공개 route에 올리지 않는다.
  - 업체별 가격·제안·평가·영업비밀, 입찰 전 검토자료는 예산민원 답변에 섞지 않는다.
  - 타기관 소관을 우리 기관 확정 답변처럼 단정하지 않는다.
  - 감사·조사·처분·징계 판단이나 법률자문성 결론은 민원 답변 문안으로 단정하지 않는다.
completion_rule: 예산 checklist와 민원 checklist, quality_gate를 통과하거나 중지/확인 요청으로 종료한다.
```

## 읽는 순서

1. [[walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05]]
2. [[walkthrough-예산대응-전입자-라우터-2026-05]] 또는 [[walkthrough-민원대응-전입자-라우터-2026-05]]
3. [[faq-예산대응-요구자료-항목은-어떻게-쪼개나]]
4. [[faq-예산대응-공개자료와-내부검토는-어디서-갈리나]]
5. [[process-예산대응-요구자료-작성흐름]]
6. [[checklist-예산대응-요구자료-제출전검토]]
7. [[faq-민원대응-처음-질의-불만-고충-반복민원-구분-2026-05]]
8. [[checklist-민원대응-첫30분-소관이송-공개경계]]
9. [[process-민원대응-반복민원-처리경계]]
10. [[faq-민원대응-새자료가-붙으면-반복민원인가]]
11. [[source-민원대응-타기관이송-소관대조순서]]
12. [[source-민원대응-마스킹-이송-원천대조순서]]
13. [[source-민원대응-첨부자료-공개근거-대조순서]]
14. [[checklist-민원대응-마스킹-이송-답변초안]]
15. [[process-민원대응-접수부터-재민원로그-2026-05]]
16. [[checklist-민원대응-답변전-공개경계-precheck]]
17. [[coverage-예산대응-민원대응-실행경계-2026-05]]
18. [[quality-gate-예산대응-민원대응-실행경계-2026-05]]
19. [[coverage-execution-boundary-routes-discovery-2026-05]]
