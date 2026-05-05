# Manifest — newcomer journey 정보공개·기록관리 2026-05

## 목적
정보공개·기록관리 업무축 전입자와 newcomer-facing agent가 요청·제출 경로, 공개자료/내부검토자료, 기록물 성격, 부분공개·비공개 금지선, 민원·국회·감사·홍보 분기를 같은 순서로 확인하도록 만든 실행 manifest다.

## Journey order
1. **업무축 진입** — [[landing-전입자-공통업무축-2026-05]] 또는 [[hub-정보공개기록관리]]에서 정보공개·기록관리 축으로 들어온다.
2. **첫주 path 확인** — [[newcomer-path-정보공개기록관리-첫주-2026-05]]에서 요청·제출 경로, 공개자료/내부검토자료, 기록물 성격을 먼저 나눈다.
3. **청구 상황 분기** — 정보공개청구이면 [[faq-정보공개청구-처음-무엇부터-확인하나]] → [[newcomer-path-정보공개청구대응-첫주-2026-05]] → [[manifest-newcomer-journey-정보공개청구-2026-05]] 순서로 간다.
4. **자료 대조** — 일반 공개검토는 [[source-정보공개기록관리-자료대조순서]], 청구 대응은 [[source-정보공개청구-공개자료-대조순서]]로 근거를 낮춘다.
5. **초안 작성** — 일반 공개검토 초안은 [[process-정보공개기록관리-공개검토초안-작성흐름]]과 [[checklist-정보공개기록관리-공개검토초안-검토]]로 처리한다.
6. **결정 유형 분기** — 부분공개, 부존재·이송, 결정 전 검토는 [[coverage-정보공개청구-상황형경로-2026-05]]에서 하위 process/checklist로 이동한다.
7. **공통 업무축 연결** — 민원·국회·감사·홍보·문서 쟁점은 [[hub-민원대응]], [[hub-국회대응]], [[hub-감사대응]], [[hub-홍보대응]], [[hub-문서기안]]으로 분기한다.
8. **coverage 확인** — [[coverage-정보공개기록관리-공통업무축-2026-05]]에서 현재 완성도와 다음 빈칸을 확인한다.

## Boundary router route
1. **질문형 walkthrough** — [[walkthrough-institution-boundary-router-question-flow-2026-05]]에서 기관·상황 질문을 먼저 좁힌다.
2. **질문형 checklist** — [[checklist-정보공개기록관리-boundary-router-질문형-검토]]에서 공개 가능한 기록과 비공개 검토 원문을 분리한다.
3. **source 회귀** — [[source-정보공개기록관리-자료대조순서]]와 [[source-정보공개청구-공개자료-대조순서]]로 근거·최종본·민감정보를 다시 확인한다.
4. **공개문안 FAQ/process** — [[faq-정보공개기록관리-boundary-router-공개문안-초안-2026-05]]와 [[process-정보공개기록관리-boundary-router-공개문안-작성흐름-2026-05]]로 설명 가능한 절차 문장만 남긴다.
5. **coverage 확인** — [[coverage-정보공개기록관리-boundary-router-질문형-검토-2026-05]], [[coverage-정보공개기록관리-boundary-router-공개문안-faq-2026-05]], [[coverage-정보공개기록관리-boundary-router-공개문안-process-2026-05]]로 노출을 검증한다.

## Agent-readable routing
```yaml
journey: 정보공개기록관리
version: 2026-05
entry:
  - landing-전입자-공통업무축-2026-05.md
  - hub-정보공개기록관리.md
  - newcomer-path-정보공개기록관리-첫주-2026-05.md
source:
  general: source-정보공개기록관리-자료대조순서.md
  claim: source-정보공개청구-공개자료-대조순서.md
process:
  general_draft: process-정보공개기록관리-공개검토초안-작성흐름.md
  claim_review: process-정보공개청구-검토흐름.md
  partial_disclosure: process-정보공개청구-부분공개-검토흐름.md
  nonexistence_transfer: process-정보공개청구-부존재이송-검토흐름.md
checklist:
  general_draft: checklist-정보공개기록관리-공개검토초안-검토.md
  claim_decision: checklist-정보공개청구-결정전검토.md
  partial_disclosure: checklist-정보공개청구-부분공개-제출전검토.md
  nonexistence_transfer: checklist-정보공개청구-부존재이송-제출전검토.md
coverage:
  - coverage-정보공개기록관리-공통업무축-2026-05.md
  - coverage-정보공개청구-상황형경로-2026-05.md
common_axes:
  민원대응: hub-민원대응.md
  국회대응: hub-국회대응.md
  감사대응: hub-감사대응.md
  홍보대응: hub-홍보대응.md
  문서기안: hub-문서기안.md
boundary_router:
  walkthrough: walkthrough-institution-boundary-router-question-flow-2026-05.md
  checklist: checklist-정보공개기록관리-boundary-router-질문형-검토.md
  faq_public_draft: faq-정보공개기록관리-boundary-router-공개문안-초안-2026-05.md
  source: source-정보공개기록관리-자료대조순서.md
  process_public_draft: process-정보공개기록관리-boundary-router-공개문안-작성흐름-2026-05.md
  coverage:
    - coverage-정보공개기록관리-boundary-router-질문형-검토-2026-05.md
    - coverage-정보공개기록관리-boundary-router-공개문안-faq-2026-05.md
    - coverage-정보공개기록관리-boundary-router-공개문안-process-2026-05.md
stop_lines:
  - 개인정보와 민감정보 원문
  - 보안정보와 업체별 영업비밀
  - 비공개 내부검토 의견
  - 법률자문성 결론
  - 공개 여부에 대한 단정적 법률 판단
  - 결재 전 확정처럼 보이는 표현
```

## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 개인정보, 보안정보, 업체별 민감정보, 비공개 내부검토 의견, 법률자문성 결론, 공개 여부에 대한 단정적 법률 판단은 route나 초안 문장에 넣지 않는다.

## Related Notes
- [[coverage-내부운영협업3축-운영정보공개회의-2026-05]]
- [[manifest-newcomer-journey-정보공개청구-분기-2026-05]]
- [[quality-gate-정보공개청구-2026-05]]
- [[README]]
