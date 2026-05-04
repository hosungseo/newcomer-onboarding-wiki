# Manifest — newcomer journey 문서·기안 2026-05

## 목적
문서·기안 업무를 처음 맡은 전입자와 newcomer-facing agent가 같은 순서로 문서 성격, 결재·협조선, 자료 대조, 검토초안, 제출 전 멈춤선을 확인하도록 묶은 실행 manifest다.

## Journey order
1. **업무축 이해** — [[hub-문서기안]]에서 기안, 검토·협조, 결재, 등록번호, 시행·접수, 공개/비공개 경계를 나눈다.
2. **첫주 경로 진입** — [[newcomer-path-문서기안-첫주-2026-05]]에서 문서 성격, 결재·협조선, 등록·시행 단계, 연결 업무축, 제출 전 멈춤선을 본다.
3. **첫 질문 처리** — [[faq-문서기안-처음-무엇부터-확인하나]]에서 문서 성격, 결재선, 단계, 연결 업무축, 금지선을 첫 30분 질문으로 점검한다.
4. **자료 대조** — [[source-문서기안-자료대조순서]]에서 기준자료, 처리 흐름, 검토·협조, 등록번호, 공개자료/담당 확인 대상을 대조한다.
5. **검토초안 작성** — [[process-문서기안-검토초안-작성흐름]]에서 문서 성격, 목적, 독자, 근거와 사실, 초안 구조, 검토 요청, 멈춤선을 따른다.
6. **제출 전 점검** — [[checklist-문서기안-검토초안-검토]]에서 문서 성격, 결재·협조선, 자료와 단계, 연결 업무축, 공개/비공개 멈춤선을 확인한다.
7. **coverage 확인** — [[coverage-문서기안-공통업무축-2026-05]]에서 완성도와 다음 gap을 확인한다.

## Agent-readable routing
```yaml
journey: 문서기안
version: 2026-05
entry:
  - hub-문서기안.md
  - newcomer-path-문서기안-첫주-2026-05.md
steps:
  first_questions: faq-문서기안-처음-무엇부터-확인하나.md
  check_evidence: source-문서기안-자료대조순서.md
  draft_review: process-문서기안-검토초안-작성흐름.md
  pre_submit_check: checklist-문서기안-검토초안-검토.md
  coverage: coverage-문서기안-공통업무축-2026-05.md
branch_to:
  civil_petition: hub-민원대응.md
  assembly: hub-국회대응.md
  audit: hub-감사대응.md
  public_relations: hub-홍보대응.md
  records_disclosure: hub-정보공개기록관리.md
  minister_report: hub-장관보고.md
stop_lines:
  - 개인정보
  - 비공개 내부검토의견
  - 미확정 기관 입장
  - 사건별 조사·감독·민원 세부
  - 보안 문서
  - 법률자문성 결론
```

## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 개인정보, 비공개 내부검토의견, 미확정 기관 입장, 사건별 조사·감독·민원 세부, 보안 문서, 법률자문성 결론은 초안·체크리스트·agent routing에 넣지 않는다.

## Related Notes
- [[landing-전입자-공통업무축-2026-05]]
- [[README]]
- [[process-행정문서-기안에서결재까지]]
- [[process-행정문서-기안]]
- [[faq-검토와-협조는-무엇이-다른가]]
- [[faq-문서등록번호는-언제-붙나]]
