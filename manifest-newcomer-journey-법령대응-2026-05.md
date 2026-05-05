# Manifest — Newcomer Journey 법령대응 2026-05

이 manifest는 법령 제·개정 시즌에 처음 투입된 전입자가 `정책목적 → 법령층위 → 절차단계 → 자료대조 → 설명초안 → 제출 전 검토 → 국회/홍보 분기`까지 한 번에 따라가도록 연결한 실행 경로다.

## Journey 1 — 업무축 진입

- 시작: [[hub-법령대응]]
- 첫 주 경로: [[newcomer-path-법령제개정시즌-첫주-2026-05]]
- walkthrough: [[walkthrough-법령대응-기관상황업무축-공개경계-2026-05]]
- coverage: [[coverage-법령대응-공통업무축-2026-05]]
- execution boundary coverage: [[coverage-법령대응-boundary-router-실행경계-2026-05]]
- 확인 질문: 지금 다루는 일이 법률, 시행령, 시행규칙, 행정규칙 중 어디에 걸려 있는가?

## Journey 2 — 먼저 확인할 질문

- FAQ: [[faq-법령제개정-처음-무엇부터-확인하나]]
- FAQ: [[faq-법령제개정-조문보다-먼저-봐야-할-자료는]]
- FAQ: [[faq-법령설명-법률자문성결론은-어디서-멈추나]]
- 추가 FAQ: [[faq-법령대응-신구조문대비표와-설명자료가-다르면]], [[faq-법령대응-의견조회-답변초안은-어디서-멈추나]]
- 확인 질문: 조문 문구를 고치기 전에 정책목적, 절차단계, 공개자료, 내부확인 대상을 나누었는가?
- 멈춤 질문: 설명 문장이 공개 가능한 일반 설명인지, 특정 사안에 대한 법률자문성 결론인지 구분했는가?

## Journey 3 — 자료대조

- Source: [[source-법령대응-자료대조순서]]
- 공개근거 source: [[source-법령대응-공개근거-우선순위]]
- 의견조회 source: [[source-법령대응-의견조회-공개자료-대조순서]]
- 연결: [[hub-법제]], [[gate-정부입법]]
- 확인 질문: 조문안, 신구조문대비표, 제안이유, 설명자료, Q&A가 서로 모순되지 않는가?

## Journey 4 — 설명초안 작성

- Process: [[process-법령대응-설명초안-작성흐름]]
- First execution: [[process-법령대응-전입자-첫실행흐름]]
- 국회 분기: [[hub-국회대응]]
- 홍보 분기: [[hub-홍보대응]]
- 확인 질문: 확정되지 않은 협의·심사 내용을 확정 문장처럼 쓰고 있지 않은가?

## Journey 5 — 제출 전 검토

- Checklist: [[checklist-법령대응-설명초안-제출전검토]]
- 공개문안 checklist: [[checklist-법령대응-공개문안-초안검토]]
- 질문형 boundary checklist: [[checklist-법령대응-boundary-router-질문형-검토]]
- 보고 분기: [[hub-장관보고]]
- 예산 분기: [[hub-예산]]
- 멈춤선: 법률자문성 결론, 비공개 협의 내용, 내부 검토의견, 개인정보·영업비밀, 사건별 수사·감사·감독 자료는 공개 note에 남기지 않는다.

## Journey 6 — walkthrough 상태

- Walkthrough: [[walkthrough-법령대응-기관상황업무축-공개경계-2026-05]]
- coverage에서 walkthrough 노출 상태를 추적한다: [[coverage-법령대응-공통업무축-2026-05]]
- boundary 실행경계 coverage: [[coverage-법령대응-boundary-router-실행경계-2026-05]]
- 다음 세분화 후보: 입법예고 의견 대응, 규제심사 보완자료 정리, 국회심사 설명자료 전환.
- 확인 질문: 지금 필요한 것은 일반 설명초안인지, 기관·상황·업무축을 따라가는 공개경계 walkthrough인지 구분했는가?

## Agent-readable route

1. `hub-법령대응`에서 업무축을 확인한다.
2. `newcomer-path-법령제개정시즌-첫주-2026-05`에서 첫 주 순서를 잡는다.
3. 세 FAQ로 첫 질문, 선행자료, 법률자문성 멈춤선을 좁힌다.
4. `source-법령대응-자료대조순서`로 공개근거와 내부확인 대상을 분리한다.
5. `process-법령대응-설명초안-작성흐름`으로 초안을 작성한다.
6. `checklist-법령대응-설명초안-제출전검토`로 공개/비공개 경계와 절차단계를 검토한다.
7. `coverage-법령대응-공통업무축-2026-05`와 `coverage-법령대응-boundary-router-실행경계-2026-05`에서 FAQ/source/process/checklist/walkthrough 노출과 공개·비공개 판단 지점을 확인한다.

## Exposure inventory

```yaml
route_id: newcomer-journey-law-response-2026-05
hub: hub-법령대응
path: newcomer-path-법령제개정시즌-첫주-2026-05
faq:
  - faq-법령제개정-처음-무엇부터-확인하나
  - faq-법령제개정-조문보다-먼저-봐야-할-자료는
  - faq-법령설명-법률자문성결론은-어디서-멈추나
source:
  - source-법령대응-자료대조순서
  - source-법령대응-공개근거-우선순위
  - source-법령대응-의견조회-공개자료-대조순서
process:
  - process-법령대응-설명초안-작성흐름
  - process-법령대응-전입자-첫실행흐름
checklist:
  - checklist-법령대응-설명초안-제출전검토
  - checklist-법령대응-공개문안-초안검토
  - checklist-법령대응-boundary-router-질문형-검토
coverage:
  - coverage-법령대응-공통업무축-2026-05
  - coverage-법령대응-boundary-router-실행경계-2026-05
boundary_execution_coverage: coverage-법령대응-boundary-router-실행경계-2026-05
quality_gate: quality-gate-법령대응-공통업무축-2026-05
walkthrough: walkthrough-법령대응-기관상황업무축-공개경계-2026-05
walkthrough_status: exposed
walkthrough_next_split_candidates:
  - 입법예고 의견 대응
  - 규제심사 보완자료 정리
  - 국회심사 설명자료 전환
stop_lines:
  - 법률자문성 결론
  - 비공개 협의 내용
  - 내부 검토의견
  - 개인정보·영업비밀
  - 사건별 수사·감사·감독 자료
  - 미확정 정책판단의 확정 표현
```

## Quality Gate
- [[quality-gate-법령대응-공통업무축-2026-05]]

- 공개설명경계 보강: [[manifest-newcomer-journey-법령대응-공개설명경계-2026-05]], [[coverage-법령대응-공개설명경계-2026-05]]
