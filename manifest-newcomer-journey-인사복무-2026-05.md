# Manifest — newcomer journey 인사·복무 2026-05

## 목적
인사·복무 업무를 처음 맡은 전입자와 newcomer-facing agent가 같은 순서로 질문 유형, 제도/개인사안, 자료 대조, 검토초안, 제출 전 멈춤선을 확인하도록 묶은 실행 manifest다.

## Journey order
1. **업무축 이해** — [[hub-인사복무]]에서 임용·전보·인사기록·교육·승진과 근무상황·휴가·출장·수당·여비를 나눈다.
2. **첫주 경로 진입** — [[newcomer-path-인사복무-첫주-2026-05]]에서 질문 분류, 기준 자료 확인, 문서화 범위, 연결 업무축, 제출 전 멈춤선을 본다.
3. **첫 질문 처리** — [[faq-인사복무-처음-무엇부터-확인하나]]에서 업무유형, 제도/개인사안, 단계, 담당선, 개인정보 금지선을 첫 30분 질문으로 점검한다.
4. **자료 대조** — [[source-인사복무-자료대조순서]]에서 공개 기준자료, 업무유형, 첫주 질문, 담당선, 공개 문서화 여부를 확인한다.
5. **검토초안 작성** — [[process-인사복무-검토초안-작성흐름]]에서 질문 유형, 제도/개인사안, 단계, 문장 구조, 공개/비공개 멈춤선, 후속 대응 경로를 따른다.
6. **제출 전 점검** — [[checklist-인사복무-검토초안-검토]]에서 질문 유형, 자료와 단계, 담당선, 개인정보·HR 민감정보 멈춤선을 확인한다.
7. **coverage 확인** — [[coverage-인사복무-공통업무축-2026-05]]에서 완성도와 다음 gap을 확인한다.

## Agent-readable routing
```yaml
journey: 인사복무
version: 2026-05
entry:
  - hub-인사복무.md
  - newcomer-path-인사복무-첫주-2026-05.md
steps:
  first_questions: faq-인사복무-처음-무엇부터-확인하나.md
  check_evidence: source-인사복무-자료대조순서.md
  draft_review: process-인사복무-검토초안-작성흐름.md
  pre_submit_check: checklist-인사복무-검토초안-검토.md
  coverage: coverage-인사복무-공통업무축-2026-05.md
branch_to:
  personnel_policy: hub-인사.md
  service_allowance_travel: hub-복무수당여비.md
  drafting: hub-문서기안.md
  audit: hub-감사대응.md
  civil_petition: hub-민원대응.md
stop_lines:
  - 개인별 인사기록
  - 개인별 복무기록
  - 병가·휴직·가족정보·건강정보
  - 급여·수당·여비 지급내역
  - 평가·승진·징계·고충 관련 비공개 판단
  - 비공개 심의·검토자료
  - 법률자문성 결론
```

## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 개인별 인사·복무기록, 병가·휴직·가족정보·건강정보, 급여·수당·여비 지급내역, 평가·승진·징계·고충 관련 비공개 판단, 비공개 심의·검토자료, 법률자문성 결론은 초안·체크리스트·agent routing에 넣지 않는다.

## Related Notes
- [[quality-gate-인사복무-2026-05]]
- [[landing-전입자-공통업무축-2026-05]]
- [[README]]
- [[hub-인사]]
- [[hub-복무수당여비]]
- [[hub-인사혁신처]]
- [[hub-문서기안]]
- [[hub-감사대응]]
- [[hub-민원대응]]
