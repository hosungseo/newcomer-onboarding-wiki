# Manifest — newcomer journey 계약·조달 2026-05

## 목적
계약·조달 업무를 처음 맡은 전입자와 newcomer-facing agent가 같은 순서로 계약 성격, 예산·절차 단계, 증빙, 공개/비공개 경계, 후속 대응 가능성을 확인하도록 묶은 실행 manifest다.

## Journey order
1. **업무축 이해** — [[hub-계약조달]]에서 예산 집행, 구매·용역·공사 계약, 조달 요청, 검사·검수, 감사 대응 경계를 나눈다.
2. **첫주 경로 진입** — [[newcomer-path-계약조달-첫주-2026-05]]에서 계약 성격, 절차·증빙, 설명·대응 경로를 첫 주 단위로 확인한다.
3. **첫 질문 처리** — [[faq-계약조달-처음-무엇부터-확인하나]]에서 계약 성격, 예산 단계, 절차 단계, 증빙, 금지선을 첫 30분 질문으로 점검한다.
4. **자료 대조** — [[source-계약조달-증빙자료-대조순서]]에서 예산 근거, 계약 성격, 절차 증빙, 공개자료/내부확인 대상, 후속 대응 연결을 확인한다.
5. **검토초안 작성** — [[process-계약조달-검토초안-작성흐름]]에서 계약 성격, 예산·절차 단계, 증빙 대조, 공개/비공개 경계, 후속 대응, 표시어를 따라 초안을 만든다.
6. **제출 전 점검** — [[checklist-계약조달-검토초안-검토]]에서 계약 성격, 예산·절차 단계, 증빙, 금지선, 후속 대응, 제출 전 멈춤선을 점검한다.
7. **coverage 확인** — [[coverage-계약조달-공통업무축-2026-05]]에서 현재 완성도와 남은 manifest/quality gate gap을 확인한다.

## Agent-readable routing
```yaml
journey: 계약조달
version: 2026-05
entry:
  - hub-계약조달.md
  - newcomer-path-계약조달-첫주-2026-05.md
steps:
  first_questions: faq-계약조달-처음-무엇부터-확인하나.md
  check_evidence: source-계약조달-증빙자료-대조순서.md
  draft_review: process-계약조달-검토초안-작성흐름.md
  pre_submit_check: checklist-계약조달-검토초안-검토.md
  coverage: coverage-계약조달-공통업무축-2026-05.md
  boundary_router:
    question_checklist: checklist-계약조달-boundary-router-질문형-검토.md
    execution_boundary_checklist: checklist-계약조달-공개비공개-실행경계.md
    public_faq: faq-계약조달-boundary-router-공개문안-초안-2026-05.md
    public_faq_coverage: coverage-계약조달-boundary-router-공개문안-faq-2026-05.md
    public_process: process-계약조달-boundary-router-공개문안-작성흐름-2026-05.md
    public_process_coverage: coverage-계약조달-boundary-router-공개문안-process-2026-05.md
    source_basis: source-계약조달-증빙자료-대조순서.md
    walkthrough: walkthrough-core-boundary-checklist-entry-2026-05.md
stop_lines:
  - 입찰 전 비공개 검토자료
  - 업체별 민감정보
  - 내부 평가·심사자료
  - 특정 계약 상대방에 대한 비공개 판단
  - 협상전략
  - 예정가격 산정 세부
  - 법률자문성 결론
```

## Boundary router route
1. [[source-계약조달-증빙자료-대조순서]]에서 공개근거와 내부확인 대상을 먼저 분리한다.
2. [[process-계약조달-검토초안-작성흐름]]로 기본 초안을 만들되, 외부 설명·민원·국회·보고 문안으로 바꾸기 전 [[checklist-계약조달-boundary-router-질문형-검토]]를 먼저 통과한다.
3. 공개문안이 필요하면 [[faq-계약조달-boundary-router-공개문안-초안-2026-05]]에서 답변 가능한 범위를 확인하고 [[process-계약조달-boundary-router-공개문안-작성흐름-2026-05]]로 문장화한다.
4. 제출 전에는 [[checklist-계약조달-공개비공개-실행경계]]로 공개자료·업체민감정보·내부검토 메모가 섞이지 않았는지 확인한다.
5. [[coverage-계약조달-boundary-router-공개문안-faq-2026-05]]와 [[coverage-계약조달-boundary-router-공개문안-process-2026-05]]에서 FAQ/process coverage가 manifest·quality gate에 노출됐는지 확인한다.
6. 길을 잃으면 [[walkthrough-core-boundary-checklist-entry-2026-05]]로 돌아가 core boundary checklist entry에서 계약조달로 다시 분기한다.

## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 입찰 전 비공개 검토자료, 업체별 민감정보, 내부 평가·심사자료, 특정 계약 상대방에 대한 비공개 판단, 협상전략, 예정가격 산정 세부, 법률자문성 결론은 초안·체크리스트·agent routing에 넣지 않는다.

## Related Notes
- [[quality-gate-계약조달-2026-05]]
- [[landing-전입자-공통업무축-2026-05]]
- [[README]]
- [[hub-예산]]
- [[hub-감사대응]]
- [[hub-국회대응]]
- [[hub-민원대응]]
- [[hub-문서기안]]

- 공통 공개/비공개 경계 경로: [[newcomer-path-예산계약조직정원-공개경계]]
