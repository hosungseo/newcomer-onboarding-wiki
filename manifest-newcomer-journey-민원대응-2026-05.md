# Manifest — Newcomer Journey 민원대응 2026-05

이 manifest는 민원대응 업무를 처음 맡은 전입자가 `민원 유입 → 분류 → 근거 대조 → 답변 초안 → 제출 전 검토 → 반복민원 재사용`까지 한 번에 따라가도록 연결한 실행 경로다.

## Journey 1 — 유입경로 확인

- 시작: [[hub-민원대응]]
- 첫 주 경로: [[newcomer-path-민원폭주대응-첫주-2026-05]]
- 확인 질문: 민원이 국민신문고, 홈페이지, 전화, 방문, 정보공개, 신고센터 중 어디에서 들어왔는가?

## Journey 2 — 민원유형 분류

- FAQ: [[faq-민원폭주-처음-무엇부터-분류하나]]
- 분류 축: 안내, 제도 설명, 고충, 신고, 제안, 정보공개, 사건성 민원
- 멈춤선: 사건성 민원은 개별 사건정보와 민원인 식별정보를 공개 note에 쓰지 않는다.

## Journey 3 — 근거와 내부확인 분리

- Source: [[source-민원대응-자료대조순서]]
- Masking/transfer source: [[source-민원대응-마스킹-이송-원천대조순서]]
- 연결 업무축: [[hub-정보공개기록관리]], [[hub-법령대응]]
- 확인 질문: 공개근거로 답할 수 있는 문장과 담당 부서 내부확인이 필요한 문장은 무엇인가?

## Journey 4 — 답변 초안 작성

- FAQ: [[faq-민원대응-boundary-router-공개문안-초안-2026-05]]
- First sentence: [[faq-민원답변-첫문장은-어떻게-쓰나]]
- 타기관 소관 분기: [[faq-민원답변-타기관소관은-어떻게-처리하나]]
- Process: [[process-민원대응-답변초안-작성흐름]]
- 연결 업무축: [[hub-홍보대응]], [[hub-감사대응]]
- 초안 원칙: 제도 설명, 확인된 사실, 추가 확인 경로, 금지선을 분리한다.

## Journey 5 — 제출 전 검토

- Checklist: [[checklist-민원대응-답변초안-제출전검토]]
- Boundary checklist: [[checklist-민원대응-boundary-router-질문형-검토]]
- Precheck: [[checklist-민원대응-답변전-공개경계-precheck]]
- Process coverage: [[coverage-민원대응-boundary-router-공개문안-process-2026-05]]
- 핵심 확인: 개인정보, 사건정보, 내부검토 의견, 법률자문성 결론, 비공개 협의 내용이 섞이지 않았는가?

## Journey 6 — 반복민원 walkthrough와 재사용

- Coverage: [[coverage-민원대응-공통업무축-2026-05]]
- Walkthrough: [[walkthrough-전입자-시나리오-민원폭주-반복답변경계-2026-05]]
- Walkthrough coverage: [[coverage-민원대응-boundary-router-walkthrough-2026-05]]
- Budget/civil boundary route: [[walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05]]
- 반복 질문은 FAQ 후보로, 반복 절차는 process 후보로, 반복 자료 확인은 source 후보로 승격한다.
- 타기관 소관은 [[checklist-민원대응-타기관이송-제출전검토]]에서 이송·안내 경계를 닫고, 국회·감사·홍보로 이어지는 민원은 관련 업무축에 cross-link를 남긴다.

## Exposure inventory

```yaml
route_id: newcomer-journey-civil-complaint-response-2026-05
hub: hub-민원대응
path: newcomer-path-민원폭주대응-첫주-2026-05
faq:
  - faq-민원폭주-처음-무엇부터-분류하나
  - faq-민원답변-개인정보와-사건정보는-어디서-멈추나
  - faq-민원대응-boundary-router-공개문안-초안-2026-05
  - faq-민원답변-첫문장은-어떻게-쓰나
  - faq-민원답변-타기관소관은-어떻게-처리하나
source:
  - source-민원대응-자료대조순서
  - source-민원대응-마스킹-이송-원천대조순서
process: process-민원대응-답변초안-작성흐름
checklist:
  - checklist-민원대응-답변초안-제출전검토
  - checklist-민원대응-boundary-router-질문형-검토
  - checklist-민원대응-민감정보-masking-제출전검토
  - checklist-민원대응-타기관이송-제출전검토
  - checklist-민원대응-답변전-공개경계-precheck
walkthrough:
  - walkthrough-전입자-시나리오-민원폭주-반복답변경계-2026-05
  - walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05
coverage:
  - coverage-민원대응-공통업무축-2026-05
  - coverage-민원대응-boundary-router-공개문안-faq-2026-05
  - coverage-민원대응-boundary-router-공개문안-process-2026-05
  - coverage-민원대응-boundary-router-walkthrough-2026-05
quality_gate: quality-gate-민원대응-공통업무축-2026-05
discovery:
  agent_catalog: manifest-agent-readable-catalog-v1-2026-05
  public_draft_products_manifest: manifest-boundary-router-public-draft-products-2026-05
  public_draft_products_coverage: coverage-boundary-router-public-draft-products-2026-05
  docs_landing_candidate: true
stop_lines:
  - 민원인 개인정보
  - 사건별 사실관계
  - 신고·조사·수사·감사 세부
  - 내부 대응전략
  - 법률자문성 결론
```

## Discovery exposure

- Agent catalog: [[manifest-agent-readable-catalog-v1-2026-05]]
- Public draft products: [[manifest-boundary-router-public-draft-products-2026-05]], [[coverage-boundary-router-public-draft-products-2026-05]], [[quality-gate-boundary-router-public-draft-products-2026-05]]
- Landing/docs 후보: 공개문안 FAQ/process coverage와 반복답변 walkthrough coverage를 함께 노출한다.

## 다음 확장 후보

- 정보공개 청구와 민원 답변이 겹칠 때의 상황형 path
- 반복 민원 FAQ template
- 민원 답변 tone checklist
- 민원대응 ↔ 홍보대응 ↔ 감사대응 연결 section

## 금지선

민원인 개인정보, 식별 가능한 사건 내용, 신고·조사·수사·감사 세부, 내부 대응 전략, 비공개 협의 내용, 업체·입찰·평가 정보, 법률자문성 결론은 포함하지 않는다.

## Quality Gate
- [[quality-gate-민원대응-공통업무축-2026-05]]
