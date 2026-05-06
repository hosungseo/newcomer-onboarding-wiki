---
title: 계약조달 실행경계 newcomer journey manifest
kind: manifest
status: draft
created: 2026-05-06
updated: 2026-05-06
audience: 예산·계약·조달·전입자·agent
scope: 공개자료 기반 예산대응·계약조달 실행 경로
confidentiality: public-only
---

# manifest — 계약조달 실행경계 newcomer journey

```yaml
id: newcomer-journey-contract-procurement-boundary-2026-05
label: 예산대응·계약조달 실행경계
entry: newcomer-path-계약조달-첫주-2026-05
coverage: coverage-계약조달-실행경계-2026-05
quality_gate: quality-gate-계약조달-실행경계-2026-05
discovery_coverage: coverage-execution-boundary-routes-discovery-2026-05
audience:
  - 예산대응 전입자
  - 계약조달 전입자
  - 공개·확정 자료 기반 검토초안 작성자
  - agent routing
route:
  - step: first_week
    file: newcomer-path-계약조달-첫주-2026-05
    purpose: 공개 기준문서를 먼저 모으고 현재 단계를 표시한다.
  - step: budget_contract_entry
    file: newcomer-path-예산대응-계약조달-첫흐름
    purpose: 예산과 계약이 함께 걸린 사안의 첫 판단 순서를 잡는다.
  - step: budget_request_faq
    file: faq-예산대응-요구자료는-어디까지-내나
    purpose: 요구자료에 낼 수 있는 확정·공개 사실과 제외 대상을 가른다.
  - step: budget_stage_faq
    file: faq-예산대응-편성과-집행자료는-어떻게-구분하나
    purpose: 편성자료와 집행자료를 구분해 미확정 수치와 집행 민감정보를 분리한다.
  - step: budget_source
    file: source-예산대응-공개자료-대조순서
    purpose: 공개 원천, 확정 수치, 제외한 비공개 범주, 확인 질문을 네 칸으로 정리한다.
  - step: budget_request_process
    file: process-예산대응-요구자료-작성흐름
    purpose: 요구자료 초안을 공개자료, 확인필요, 제외자료로 나눈다.
  - step: budget_request_checklist
    file: checklist-예산대응-요구자료-제출전검토
    purpose: 제출 전 미확정 예산안과 내부검토가 섞였는지 판정한다.
  - step: notice_process
    file: process-조달-입찰공고
    purpose: 공고·정정·질의응답의 공개 기준을 확인한다.
  - step: draft_process
    file: process-계약조달-검토초안-작성흐름
    purpose: 사안 단계, 공개 기준문서, 제외 자료를 분리한다.
  - step: execution_checklist
    file: checklist-계약조달-공개비공개-실행경계
    purpose: 진행, 수정 후 진행, 중지/확인 요청 중 하나로 판정한다.
  - step: concept_price
    file: concept-예정가격
    purpose: 예산액, 예정가격, 입찰가격, 계약금액을 섞지 않는다.
  - step: coverage
    file: coverage-계약조달-실행경계-2026-05
    purpose: walkthrough/process/checklist 노출과 빈칸을 점검한다.
  - step: quality_gate
    file: quality-gate-계약조달-실행경계-2026-05
    purpose: 공개 설명 전 금지선과 완성도를 검증한다.
  - step: discovery_coverage
    file: coverage-execution-boundary-routes-discovery-2026-05
    purpose: docs/landing 노출명과 route 묶음 순서를 확인한다.
branch_to:
  info_disclosure:
    when: 공개 여부가 애매한 경우
    file: faq-정보공개-공개비공개-경계는-어디서-나누나
  budget_source:
    when: 예산 공개자료 대조가 필요한 경우
    file: source-예산대응-공개자료-대조순서
stop_lines:
  - 비공개 내부검토, 미확정 예산안·잠정액, 협의 중 증감 시나리오, 삭감·증액 대응전략은 공개 요구자료에 쓰지 않는다.
  - 업체별 제안서, 가격입찰서, 원가자료, 영업비밀, 기술자료는 공개 설명에 쓰지 않는다.
  - 예정가격 산정 세부, 내부 평가기준 조율, 평가위원 논의, 심사 메모는 공개자료로 재가공하지 않는다.
  - 공고 전 초안, 정정 검토 중 문안, 낙찰·협상 전망, 승인 전 계약조건 변경 가능성은 확정 사실로 쓰지 않는다.
  - 특정 참여자에게만 준 해석·힌트는 공개 질의응답처럼 옮기지 않는다.
completion_rule: checklist와 quality_gate를 통과하거나 중지/확인 요청으로 종료한다.
```

## 읽는 순서

1. [[newcomer-path-계약조달-첫주-2026-05]]
2. [[newcomer-path-예산대응-계약조달-첫흐름]]
3. [[faq-예산대응-요구자료는-어디까지-내나]]
4. [[faq-예산대응-편성과-집행자료는-어떻게-구분하나]]
5. [[source-예산대응-공개자료-대조순서]]
6. [[process-예산대응-요구자료-작성흐름]]
7. [[checklist-예산대응-요구자료-제출전검토]]
8. [[process-조달-입찰공고]]
9. [[process-계약조달-검토초안-작성흐름]]
10. [[checklist-계약조달-공개비공개-실행경계]]
11. [[coverage-계약조달-실행경계-2026-05]]
12. [[quality-gate-계약조달-실행경계-2026-05]]
13. [[coverage-execution-boundary-routes-discovery-2026-05]]
