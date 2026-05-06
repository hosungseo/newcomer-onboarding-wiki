---
title: 법령대응 공개설명경계 newcomer journey manifest
kind: manifest
status: draft
created: 2026-05-06
updated: 2026-05-07
audience: 법령대응·법제·전입자·agent
scope: 공개자료 기반 법령대응 설명 경로
confidentiality: public-only
---

# manifest — 법령대응 공개설명경계 newcomer journey

```yaml
id: newcomer-journey-law-response-public-boundary-2026-05
label: 법령대응 공개설명경계
section: section-법무거버넌스부처-전입경로
entry: source-법령대응-입법예고-공개자료-대조순서
coverage: coverage-법령대응-공개설명경계-2026-05
quality_gate: quality-gate-법령대응-공개설명경계-2026-05
audience:
  - 법령대응 전입자
  - 법제·법무 공개자료 설명 작성자
  - agent routing
route:
  - step: section_onboarding_boundary
    file: section-법무거버넌스부처-전입경로
    purpose: 법령조회, 유권해석, 개정검토, 공개 의견·답변, 내부 법무검토 중 어디에 해당하는지 먼저 분류한다.
  - step: faq_first_boundary
    file: faq-법령대응-전입자-첫구분-법령조회-유권해석-입법예고-내부검토-2026-05
    purpose: 법령조회/유권해석/입법예고/내부검토 boundary를 잡고 공개 답변 가능 범위를 좁힌다.
  - step: source_evidence_bundle
    file: source-법령대응-법무검토-답변초안-최소근거묶음-2026-05
    purpose: 현행 법령 원문, 공개 개정자료, 신구조문, 공개 해석·해설, 검토자 확인, 제외 자료를 evidence bundle로 분리한다.
  - step: source_public_route
    file: source-법무거버넌스부처-공개경로-전입자메모-2026-05
    purpose: 법무·법제 업무의 공개자료 진입점과 부처별 공개 경로를 먼저 확인한다.
  - step: source_lawmaking_notice
    file: source-법령대응-입법예고-공개자료-대조순서
    purpose: 입법예고문, 관보, 법령정보센터, 부처 누리집 등 공개 원문을 대조한다.
  - step: source_public_explanation_priority
    file: source-법령대응-공개설명-출처우선순위
    purpose: 현행 법령 원문, 공개 입법예고·개정안, 공개 해설·보도자료, 담당 확인사항의 출처 우선순위를 정한다.
  - step: source_article_comparison
    file: source-법령대응-신구조문-대비표-검토순서
    purpose: 신구조문 대비표의 문언 변화와 정책·법률 판단을 분리한다.
  - step: process_notice_explanation
    file: process-법령대응-입법예고-의견수렴-설명초안
    purpose: 입법예고 의견수렴과 설명자료 초안의 공개 실행 경계를 적용한다.
  - step: review_reply_tracking
    file: process-법령대응-입법예고-의견수렴-설명초안
    purpose: 접수일, 답변기한, 검토자/소관, 회신 범위, 공개/비공개 경계, 남은 질문, 다음 확인일을 추적한다.
  - step: faq_boundary
    file: faq-법령대응-의견조회와-신구조문은-어디까지-공개설명하나
    purpose: 의견조회와 신구조문 대비표의 공개 설명 가능 범위와 금지 범위를 나눈다.
  - step: faq_external_answer_boundary
    file: faq-법령대응-의견조회-대외답변은-어디까지-가능한가
    purpose: 의견조회 관련 대외답변을 공개 절차·원문·일반 검토 절차로 제한하고 채택 전망을 제외한다.
  - step: coverage_process_checklist_walkthrough
    file: coverage-법령대응-공개설명경계-2026-05
    purpose: 독립 process/checklist/walkthrough가 없을 때 실행 순서, 점검표, 전입자 판단 순서를 사용한다.
  - step: checklist_law_precheck
    file: checklist-법령대응-공개설명-법무precheck
    purpose: 공개 설명 전 조문 번호, 시행일, 신구조문, 내부 법무검토, 개별사안 적용 결론 금지선을 선점검한다.
  - step: checklist_before_submit
    file: checklist-법령대응-입법예고-설명초안-제출전검토
    purpose: 설명자료·Q&A·반복답변·보도 참고문안 제출 전 금지선을 점검한다.
  - step: quality_gate
    file: quality-gate-법령대응-공개설명경계-2026-05
    purpose: 공개 설명·FAQ·대외문안 작성 전 금지선과 통과 기준을 검증한다.
branch_to:
  info_disclosure:
    when: 정보공개 청구, 자료제공 요청, 공개/비공개 판단으로 전환되는 경우
    file: source-정보공개기록관리-공개자료-대조순서
  external_copy:
    when: 국민용 설명자료, 보도자료, 대외 답변 문안으로 전환되는 경우
    file: walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05
    gate: quality-gate-홍보대응-대외문안-실행경계-2026-05
stop_lines:
  - 관계기관 비공개 의견조회 회신, 이견, 조정 문안, 협의 전략은 공개 설명에 쓰지 않는다.
  - 내부 법무·법제 검토의견, 결재 전 대안, 쟁점표, 법률자문성 결론은 공개 FAQ로 바꾸지 않는다.
  - 미확정 조문안, 시행일, 후속 개정 방향, 예산·조직·정원 영향은 확정·공표 전까지 단정하지 않는다.
  - 특정 민원·소송·감사·징계·수사·조사 사안의 법령 적용 결론은 일반 설명으로 쓰지 않는다.
  - 개인정보, 업체·단체 이해관계, 평가·입찰·계약·협상 정보는 조문 설명에서 제외한다.
completion_rule: quality_gate를 통과하거나 중지/확인 요청으로 종료한다.
```

## 읽는 순서

1. [[section-법무거버넌스부처-전입경로]]
2. [[faq-법령대응-전입자-첫구분-법령조회-유권해석-입법예고-내부검토-2026-05]]
3. [[source-법령대응-법무검토-답변초안-최소근거묶음-2026-05]]
4. [[source-법무거버넌스부처-공개경로-전입자메모-2026-05]]
5. [[source-법령대응-입법예고-공개자료-대조순서]]
6. [[source-법령대응-공개설명-출처우선순위]]
7. [[source-법령대응-신구조문-대비표-검토순서]]
8. [[process-법령대응-입법예고-의견수렴-설명초안]]
9. [[faq-법령대응-의견조회와-신구조문은-어디까지-공개설명하나]]
10. [[faq-법령대응-의견조회-대외답변은-어디까지-가능한가]]
11. [[checklist-법령대응-공개설명-법무precheck]]
12. [[checklist-법령대응-입법예고-설명초안-제출전검토]]
13. [[coverage-법령대응-공개설명경계-2026-05]]
14. [[quality-gate-법령대응-공개설명경계-2026-05]]

## branch 읽기

- 정보공개·자료제공으로 바뀌면 [[source-정보공개기록관리-공개자료-대조순서]]를 읽는다.
- 국민용·대외문안으로 바뀌면 [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]]와 [[quality-gate-홍보대응-대외문안-실행경계-2026-05]]를 읽는다.
