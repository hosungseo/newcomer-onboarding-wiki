# Manifest — Newcomer Journey: 국회대응 2026-05

## 목적
전입자가 국회 자료요구, 서면질의, 예산심사, 국정감사 대응을 만났을 때 `요구 유형 → 공개근거 → 내부확인 → 초안 → 제출 전 검토 → 상황형 path` 순서로 이동하게 하는 agent-readable journey manifest다.

## entrypoints
- coverage: [[coverage-국회대응-공통업무축-2026-05]]
- hub: [[hub-국회대응]]
- season_path: [[newcomer-path-국회대응시즌-첫주-2026-05]]

## core_route
- faq_start: [[faq-국회대응-처음-무엇부터-확인하나]]
- faq_boundary: [[faq-국회자료요구-비공개정보는-어디서-멈추나]]
- source_order: [[source-국회대응-자료대조순서]]
- response_process: [[process-국회대응-자료요구답변-작성흐름]]
- pre_submission_checklist: [[checklist-국회대응-자료요구답변-제출전검토]]

## situation_routes

### budget_review
- path: [[newcomer-path-국회예산심사-첫주-2026-05]]
- budget_axis: [[hub-예산]]

### national_audit
- path: [[newcomer-path-국정감사대응-첫주-2026-05]]
- audit_axis: [[hub-감사대응]]

## route_order
1. 요구 유형을 먼저 고른다.
2. 일반 자료요구·서면질의는 `core_route`를 따른다.
3. 예산심사이면 `budget_review`로 분기한다.
4. 국정감사이면 `national_audit`로 분기한다.
5. 모든 route에서 공개근거와 내부확인 문장을 분리한다.
6. 제출 전에는 checklist의 금지선을 우선한다.

## do_not_include
국회 대응 전략, 비공개 내부검토, 비공개 협의 내용, 개인정보, 사건별 민감정보, 수사·감사·감독 세부, 비공개 예산수치, 업체·입찰·평가 정보, 법률자문성 결론.
