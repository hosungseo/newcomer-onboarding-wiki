# Manifest — newcomer journey 장관보고 2026-05

## 목적
장관보고 준비를 처음 맡은 전입자와 newcomer-facing agent가 같은 순서로 보고 목적, 공개근거, 쟁점 구조, 보고초안, 제출 전 멈춤선을 확인하도록 묶은 실행 manifest다.

## Journey order
1. **업무축 이해** — [[hub-장관보고]]에서 목적, 공개근거, 핵심 쟁점, 결정 필요사항, 금지선을 나눈다.
2. **첫주 경로 진입** — [[newcomer-path-장관보고준비-첫주-2026-05]]에서 보고 목적, 공개근거, 쟁점 구조, 문서 흐름, 둘째 주 질문을 잡는다.
3. **첫 질문 처리** — [[faq-장관보고준비-처음-무엇부터-확인하나]]와 [[faq-장관보고-비공개판단은-어디서-멈추나]]로 첫 분류와 멈춤선을 점검한다.
4. **자료 대조** — [[source-장관보고-자료대조순서]]에서 보고 목적, 공개근거, 쟁점 자료, 확인 필요사항, 공개/비공개 경계를 대조한다.
5. **보고초안 작성** — [[process-장관보고-보고초안-작성흐름]]에서 보고 목적, 공개근거, 핵심 쟁점, 선택지·리스크, 확인 필요사항, 멈춤선을 따른다.
6. **제출 전 점검** — [[checklist-장관보고-보고초안-제출전검토]]에서 목적·구조, 근거·자료, 결정·후속조치, 공개·비공개 멈춤선을 확인한다.
7. **coverage 확인** — [[coverage-장관보고-공통업무축-2026-05]]에서 완성도와 다음 gap을 확인한다.

## Agent-readable routing
```yaml
journey: 장관보고
version: 2026-05
entry:
  - hub-장관보고.md
  - newcomer-path-장관보고준비-첫주-2026-05.md
steps:
  first_questions: faq-장관보고준비-처음-무엇부터-확인하나.md
  stop_line_faq: faq-장관보고-비공개판단은-어디서-멈추나.md
  check_evidence: source-장관보고-자료대조순서.md
  draft_review: process-장관보고-보고초안-작성흐름.md
  pre_submit_check: checklist-장관보고-보고초안-제출전검토.md
  coverage: coverage-장관보고-공통업무축-2026-05.md
branch_to:
  budget: hub-예산.md
  assembly: hub-국회대응.md
  audit: hub-감사대응.md
  public_relations: hub-홍보대응.md
  drafting: hub-문서기안.md
  records_disclosure: hub-정보공개기록관리.md
stop_lines:
  - 비공개 보고라인
  - 내부 검토의견
  - 미확정 정책결정
  - 개인정보와 사건별 민감정보
  - 수사·감사·감독·보안·작전 세부
  - 업체·입찰·평가 정보
  - 법률자문성 결론
```

## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 비공개 보고라인, 내부 검토의견, 미확정 정책결정, 개인정보와 사건별 민감정보, 수사·감사·감독·보안·작전 세부, 업체·입찰·평가 정보, 법률자문성 결론은 초안·체크리스트·agent routing에 넣지 않는다.

## Related Notes
- [[quality-gate-장관보고-2026-05]]
- [[landing-전입자-공통업무축-2026-05]]
- [[README]]
- [[hub-예산]]
- [[hub-국회대응]]
- [[hub-감사대응]]
- [[hub-홍보대응]]
- [[hub-문서기안]]
- [[hub-정보공개기록관리]]
