---
title: 홍보대응 대외문안 실행경계 newcomer journey manifest
kind: manifest
status: draft
created: 2026-05-06
updated: 2026-05-06
audience: 홍보대응·언론대응·현장소통·법령대응·전입자·agent
scope: 공개자료 기반 보도자료·설명자료·Q&A 초안 실행 경로
confidentiality: public-only
---

# manifest — 홍보대응 대외문안 실행경계 newcomer journey

```yaml
id: newcomer-journey-pr-external-copy-boundary-2026-05
label: 홍보대응 대외문안 실행경계
entry: newcomer-path-홍보대응-대외문안-공개경계
coverage: coverage-홍보대응-대외문안-실행경계-2026-05
quality_gate: quality-gate-홍보대응-대외문안-실행경계-2026-05
audience:
  - 홍보대응 전입자
  - 보도자료·설명자료·Q&A 초안 작성자
  - 현장소통 후속조치 담당자
  - agent routing
route:
  - step: newcomer_route
    file: newcomer-path-홍보대응-대외문안-공개경계
    purpose: 산출물 유형과 공개·비공개 경계의 첫 읽기 순서를 잡는다.
  - step: source_public_basis
    file: source-홍보대응-보도자료초안-공개근거-대조순서
    purpose: 보도자료초안에 넣을 공개 원문과 확정 사실을 대조한다.
  - step: source_boundary
    file: source-홍보대응-공개비공개-경계체크
    purpose: 문장 후보를 공개 가능, 확인 필요, 제외로 나눈다.
  - step: process_sentence_branch
    file: process-홍보대응-보도자료초안-대외전환-문안분기
    purpose: 보도자료 본문, Q&A, 확인 질문, 후속조치를 분기한다.
  - step: checklist_sentence_precheck
    file: checklist-홍보대응-초안공개전환-문장별-precheck
    purpose: 내부 초안을 대외 배포 문장으로 바꾸기 전 문장마다 출처, 확인 필요, 삭제, 후속조치를 표시한다.
  - step: faq_press_answer_boundary
    file: faq-홍보대응-보도문의-공식답변은-어디서-멈추나
    purpose: 보도문의 공식답변을 공개 가능한 사실, 확정 입장, 절차 안내 범위로 제한한다.
  - step: checklist_field_followup
    file: checklist-홍보대응-현장소통-후속조치-실행경계
    purpose: 현장소통 결과를 성과 문장과 실제 후속조치로 분리한다.
  - step: quality_gate
    file: quality-gate-홍보대응-대외문안-실행경계-2026-05
    purpose: 대외 배포 전 금지선과 통과 기준을 검증한다.
branch_to:
  law_response:
    when: 법령 개정, 입법예고, 신구조문 대비표, 조문 설명이 대외문안에 포함되는 경우
    file: walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05
    gate: quality-gate-법령대응-공개설명경계-2026-05
  info_disclosure:
    when: 정보공개 청구, 자료제공 요청, 공개/비공개 판단으로 전환되는 경우
    file: source-정보공개기록관리-공개자료-대조순서
  field_opinion:
    when: 현장 발언, 민원성 요구, 이해관계자 의견이 포함되는 경우
    file: faq-홍보대응-현장의견과-공식입장은-어떻게-구분하나
stop_lines:
  - 내부검토, 협의 중 문안, 회의 발언, 부처 간 이견, 조정전략은 대외문안으로 전환하지 않는다.
  - 공개 원문으로 확인되지 않은 수치·일정·효과·사업규모·예산·조직·정원 영향은 단정하지 않는다.
  - 현장 발언과 민원성 요구는 기관의 공식 약속이나 조치 완료로 쓰지 않는다.
  - 개인정보, 민원·신고자, 참석자, 업체·계약 상대방 식별·재식별 정보는 제외한다.
  - 감사·조사·수사·보안·입찰·계약·업체평가·감독검사 정보는 담당 확인 전까지 제외한다.
  - 법령 해석·개별사안 적용 결론은 법령대응 quality gate 없이 일반 홍보문안으로 쓰지 않는다.
completion_rule: quality_gate를 통과하거나 중지/확인 요청으로 종료한다.
```

## 읽는 순서

1. [[newcomer-path-홍보대응-대외문안-공개경계]]
2. [[source-홍보대응-보도자료초안-공개근거-대조순서]]
3. [[source-홍보대응-공개비공개-경계체크]]
4. [[process-홍보대응-보도자료초안-대외전환-문안분기]]
5. [[checklist-홍보대응-초안공개전환-문장별-precheck]]
6. [[faq-홍보대응-보도문의-공식답변은-어디서-멈추나]]
7. [[checklist-홍보대응-현장소통-후속조치-실행경계]]
8. [[quality-gate-홍보대응-대외문안-실행경계-2026-05]]

## branch 읽기

- 법령 개정·입법예고·신구조문 설명이 섞이면 [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]]와 [[quality-gate-법령대응-공개설명경계-2026-05]]를 읽는다.
- 정보공개·자료제공으로 바뀌면 [[source-정보공개기록관리-공개자료-대조순서]]를 읽는다.
- 현장 발언과 공식입장 경계가 애매하면 [[faq-홍보대응-현장의견과-공식입장은-어떻게-구분하나]]를 읽는다.
