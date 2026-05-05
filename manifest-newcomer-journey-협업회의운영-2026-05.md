# Manifest — newcomer journey 협업·회의운영 2026-05

## 목적
협업·회의운영 업무를 처음 맡은 전입자와 newcomer-facing agent가 회의 목적, 참석 범위, 자료 경계, 결과초안, 후속 조치, 공개·기록 경계를 같은 순서로 확인하도록 만든 실행 manifest다.

## Journey order
1. **업무축 이해** — [[hub-협업회의운영]]에서 회의 준비, 참석자 조율, 회의자료 정리, 후속 조치 관리를 나눈다.
2. **첫주 경로** — [[newcomer-path-협업회의운영-첫주-2026-05]]에서 회의 목적, 참석 범위, 자료 경계, 후속 조치 흐름을 확인한다.
3. **첫 질문** — [[faq-회의자료와-내부검토자료는-어떻게-구분하나]]로 공개 가능 자료와 내부 검토자료를 구분한다.
4. **자료 대조** — [[source-협업회의운영-자료대조순서]]에서 사전 배포자료, 내부 검토자료, 결정사항, 미결사항, 기록물 경계를 대조한다.
5. **결과초안 작성** — [[process-협업회의운영-결과초안-작성흐름]]에서 회의 목적, 참석 범위, 결정사항, 쟁점, 후속 과제, 보고 경로를 분리한다.
6. **후속조치 점검** — [[checklist-협업회의운영-후속조치-검토]]에서 담당자·기한·보고경로·공개경계를 확인한다.
7. **coverage 확인** — [[coverage-협업회의운영-공통업무축-2026-05]]에서 현재 완성도와 다음 gap을 확인한다.

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

## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 비공개 내부검토 의견, 개인정보, 업체별 민감정보, 보안정보, 미확정 정책안, 회의 참석자 개인 평가나 발언 왜곡은 route, 결과초안, checklist에 넣지 않는다.

## Related Notes
- [[landing-전입자-공통업무축-2026-05]]
- [[coverage-내부운영협업3축-운영정보공개회의-2026-05]]
- [[README]]
