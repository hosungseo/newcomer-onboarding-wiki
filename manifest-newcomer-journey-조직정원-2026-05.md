# Manifest — newcomer journey 조직·정원 2026-05

## 목적
조직·정원 업무를 처음 맡은 전입자와 newcomer-facing agent가 공식 조직, 법령 근거, 정원·직급·기구 쟁점, 협의 경로, 제출 전 금지선을 같은 순서로 확인하도록 만든 실행 manifest다.

## Journey order
1. **업무축 이해** — [[hub-조직정원]]에서 법령상 조직, 실제 업무분장, 정원 관리, 협의 경로를 나눈다.
2. **첫주 경로** — [[newcomer-path-조직정원-첫주-2026-05]]에서 공식 구조, 정원·직급·기구 이슈, 협의·설명 경로를 확인한다.
3. **자료 대조** — [[source-조직정원-공식자료-대조순서]]에서 공식 조직도, 직제·시행규칙, 업무 안내, 내부 업무분장, 검토 중 자료를 구분한다.
4. **검토초안 작성** — [[process-조직정원-검토초안-작성흐름]]에서 현황, 쟁점, 근거, 협의 필요성, 금지선을 분리한다.
5. **제출 전 점검** — [[checklist-조직정원-검토초안-제출전검토]]에서 공식자료, 쟁점 구분, 협의 경로, 멈춤선을 확인한다.
6. **coverage 확인** — [[coverage-조직정원-공통업무축-2026-05]]에서 현재 완성도와 다음 gap을 확인한다.

## Agent-readable routing
```yaml
journey: 조직정원
version: 2026-05
entry:
  - hub-조직정원.md
  - newcomer-path-조직정원-첫주-2026-05.md
steps:
  check_sources: source-조직정원-공식자료-대조순서.md
  draft_review: process-조직정원-검토초안-작성흐름.md
  pre_submission_check: checklist-조직정원-검토초안-제출전검토.md
  coverage: coverage-조직정원-공통업무축-2026-05.md
  boundary_router:
    question_checklist: checklist-조직정원-boundary-router-질문형-검토.md
    public_faq: faq-조직정원-boundary-router-공개문안-초안-2026-05.md
    public_process: process-조직정원-boundary-router-공개문안-작성흐름-2026-05.md
    walkthrough: walkthrough-core-boundary-checklist-entry-2026-05.md
branch_to:
  예산_인건비: hub-예산.md
  직급_인사운영: hub-인사승진.md
  국회_설명자료: hub-국회대응.md
  감사_근거확인: hub-감사대응.md
  장관_보고초안: hub-장관보고.md
  문서_협의문: hub-문서기안.md
stop_lines:
  - 비공개 조직개편안
  - 내부 검토의견과 기관 간 협의전략
  - 개인별 인사·평정 정보
  - 특정 부서의 민감한 정원 협상 내용
  - 법률자문성 결론
  - 미확정 기구·정원 조정안을 확정 사실처럼 쓰는 표현
```

## Boundary router route
1. [[source-조직정원-공식자료-대조순서]]에서 공개근거와 내부확인 대상을 먼저 분리한다.
2. [[process-조직정원-검토초안-작성흐름]]로 기본 초안을 만들되, 외부 설명·민원·국회·보고 문안으로 바꾸기 전 [[checklist-조직정원-boundary-router-질문형-검토]]를 먼저 통과한다.
3. 공개문안이 필요하면 [[faq-조직정원-boundary-router-공개문안-초안-2026-05]]에서 답변 가능한 범위를 확인하고 [[process-조직정원-boundary-router-공개문안-작성흐름-2026-05]]로 문장화한다.
4. [[coverage-조직정원-boundary-router-공개문안-faq-2026-05]]와 [[coverage-조직정원-boundary-router-공개문안-process-2026-05]]에서 FAQ/process coverage가 manifest·quality gate에 노출됐는지 확인한다.
5. 길을 잃으면 [[walkthrough-core-boundary-checklist-entry-2026-05]]로 돌아가 core boundary checklist entry에서 조직정원으로 다시 분기한다.

## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 비공개 조직개편안, 내부 검토의견, 개인별 인사·평정 정보, 특정 부서의 민감한 정원 협상 내용, 기관 간 협의전략, 법률자문성 결론은 route, 초안, checklist에 넣지 않는다.

## Related Notes
- [[landing-전입자-공통업무축-2026-05]]
- [[coverage-운영관리3축-조직성과계약-2026-05]]
- [[README]]

- 공통 공개/비공개 경계 경로: [[newcomer-path-예산계약조직정원-공개경계]]
