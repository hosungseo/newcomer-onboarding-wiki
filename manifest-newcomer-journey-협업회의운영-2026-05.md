# Manifest — newcomer journey 협업·회의운영 2026-05

## 목적
협업·회의운영 업무를 처음 맡은 전입자와 newcomer-facing agent가 회의 목적, 참석 범위, 자료 경계, 결과초안, 후속 조치, 공개·기록 경계를 같은 순서로 확인하도록 만든 실행 manifest다.

## Journey order
1. **업무축 이해** — [[hub-협업회의운영]]에서 회의 준비, 참석자 조율, 회의자료 정리, 후속 조치 관리를 나눈다.
2. **첫주 경로** — [[newcomer-path-협업회의운영-첫주-2026-05]]에서 회의 목적, 참석 범위, 자료 경계, 후속 조치 흐름을 확인한다.
3. **첫 질문** — [[faq-회의자료와-내부검토자료는-어떻게-구분하나]]로 공개 가능 자료와 내부 검토자료를 구분한다.
4. **자료 대조** — [[source-협업회의운영-자료대조순서]]에서 사전 배포자료, 내부 검토자료, 결정사항, 미결사항, 기록물 경계를 대조한다.
5. **결과초안 작성** — [[process-협업회의운영-결과초안-작성흐름]]에서 회의 목적, 참석 범위, 결정사항, 쟁점, 후속 과제, 보고 경로를 분리한다.
6. **회의 전 precheck** — [[checklist-협업회의운영-후속조치-회의전-precheck]]로 회의 전부터 공개 가능한 결과물, 내부검토, 후속조치 금지선을 분리한다.
7. **정보공개 교차 경계** — [[router-정보공개기록관리-협업회의-신규자-공개경계]]와 [[newcomer-path-정보공개기록관리-협업회의-공개경계]]로 회의 결과가 공개·청구 대응으로 넘어가는 흐름을 확인한다.
8. **coverage 확인** — [[coverage-협업회의운영-공통업무축-2026-05]]에서 현재 완성도와 다음 gap을 확인한다.


## FAQ/source/process/checklist/walkthrough exposure
- FAQ: [[faq-회의자료와-내부검토자료는-어떻게-구분하나]], [[faq-회의후속조치-보고국회감사로-넘어가면-무엇이-달라지나]], [[faq-협업회의운영-boundary-router-공개문안-초안-2026-05]], [[faq-협업회의운영-회의결과는-어디까지-외부공유하나]], [[faq-정보공개기록관리-마스킹은-언제-먼저-하나]]
- Source: [[source-협업회의운영-자료대조순서]], [[source-정보공개기록관리-원천기록-확인우선순서]]
- Process: [[process-협업회의운영-결과초안-작성흐름]], [[process-협업회의운영-boundary-router-공개문안-작성흐름-2026-05]], [[process-정보공개기록관리-청구에서공개까지-분기흐름]]
- Checklist: [[checklist-협업회의운영-후속조치-검토]], [[checklist-협업회의운영-boundary-router-질문형-검토]], [[checklist-협업회의운영-후속조치-회의전-precheck]]
- Walkthrough: [[walkthrough-전입자-시나리오-회의후속조치-공개전환-2026-05]], [[walkthrough-institution-boundary-router-question-flow-2026-05]], [[walkthrough-정보공개기록관리-협업회의-실행경계-라우트맵-2026-05]]

## Boundary router route
1. **질문형 walkthrough** — [[walkthrough-institution-boundary-router-question-flow-2026-05]]에서 기관·상황 질문을 먼저 좁힌다.
2. **질문형 checklist** — [[checklist-협업회의운영-boundary-router-질문형-검토]]에서 공식 회의자료와 내부검토 메모, 후속조치, 대외공유 가능성을 분리한다.
3. **source 회귀** — [[source-협업회의운영-자료대조순서]]로 사전 배포자료, 결정사항, 미결사항, 기록물 경계를 다시 확인한다.
4. **공개문안 FAQ/process** — [[faq-협업회의운영-boundary-router-공개문안-초안-2026-05]]와 [[process-협업회의운영-boundary-router-공개문안-작성흐름-2026-05]]로 설명 가능한 회의 개요와 확정 후속조치만 남긴다.
5. **coverage 확인** — [[coverage-협업회의운영-boundary-router-질문형-검토-2026-05]], [[coverage-협업회의운영-boundary-router-공개문안-faq-2026-05]], [[coverage-협업회의운영-boundary-router-공개문안-process-2026-05]]로 노출을 검증한다.

## Agent-readable routing
```yaml
journey: 협업회의운영
version: 2026-05
entry:
  - hub-협업회의운영.md
  - newcomer-path-협업회의운영-첫주-2026-05.md
steps:
  classify_material: faq-회의자료와-내부검토자료는-어떻게-구분하나.md
  check_sources: source-협업회의운영-자료대조순서.md
  draft_result: process-협업회의운영-결과초안-작성흐름.md
  followup_check: checklist-협업회의운영-후속조치-검토.md
  coverage: coverage-협업회의운영-공통업무축-2026-05.md
branch_to:
  문서_결과보고: hub-문서기안.md
  기록_정보공개: hub-정보공개기록관리.md
  장관_보고사항: hub-장관보고.md
  국회_자료요구: hub-국회대응.md
  감사_후속확인: hub-감사대응.md
  홍보_대외설명: hub-홍보대응.md
boundary_router:
  cross_axis_router: router-정보공개기록관리-협업회의-신규자-공개경계.md
  cross_axis_path: newcomer-path-정보공개기록관리-협업회의-공개경계.md
  cross_axis_walkthrough: walkthrough-정보공개기록관리-협업회의-실행경계-라우트맵-2026-05.md
  source_original_record: source-정보공개기록관리-원천기록-확인우선순서.md
  process_claim_to_disclosure: process-정보공개기록관리-청구에서공개까지-분기흐름.md
  meeting_external_share_faq: faq-협업회의운영-회의결과는-어디까지-외부공유하나.md
  masking_faq: faq-정보공개기록관리-마스킹은-언제-먼저-하나.md
  meeting_precheck: checklist-협업회의운영-후속조치-회의전-precheck.md
  walkthrough: walkthrough-institution-boundary-router-question-flow-2026-05.md
  checklist: checklist-협업회의운영-boundary-router-질문형-검토.md
  faq_public_draft: faq-협업회의운영-boundary-router-공개문안-초안-2026-05.md
  source: source-협업회의운영-자료대조순서.md
  process_public_draft: process-협업회의운영-boundary-router-공개문안-작성흐름-2026-05.md
  coverage:
    - coverage-협업회의운영-boundary-router-질문형-검토-2026-05.md
    - coverage-협업회의운영-boundary-router-공개문안-faq-2026-05.md
    - coverage-협업회의운영-boundary-router-공개문안-process-2026-05.md
stop_lines:
  - 비공개 내부검토 의견
  - 개인정보와 재식별 가능한 사례
  - 업체별 민감정보
  - 보안정보
  - 미확정 정책안
  - 회의 참석자 개인 평가나 발언 왜곡
```

## Docs/Landing discovery route
- Quick entry: [[landing-response-boundary-router-checklists-2026-05]] → [[index-response-boundary-router-checklists-2026-05]] → [[checklist-협업회의운영-boundary-router-질문형-검토]] → [[coverage-협업회의운영-공통업무축-2026-05]].
- Product entry: [[landing-boundary-router-products-v1-2026-05]] → [[manifest-boundary-router-products-v1-2026-05]] → [[manifest-response-boundary-router-checklists-2026-05]] → 이 manifest.
- Agent fallback: landing/docs에서 바로 찾지 못하면 [[manifest-agent-readable-catalog-v1-2026-05]]의 Internal Operations Axes와 Recent Boundary Notes를 확인한다.


## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 비공개 내부검토 의견, 개인정보, 업체별 민감정보, 보안정보, 미확정 정책안, 회의 참석자 개인 평가나 발언 왜곡은 route, 결과초안, checklist에 넣지 않는다.

## Related Notes
- [[landing-전입자-공통업무축-2026-05]]
- [[coverage-내부운영협업3축-운영정보공개회의-2026-05]]
- [[README]]
