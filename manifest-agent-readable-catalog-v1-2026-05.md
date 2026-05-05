# Manifest — Agent-readable Catalog v1 2026-05

## 목적
전입자 온보딩 v1 release candidate의 핵심 진입점을 에이전트가 바로 읽고 route를 고를 수 있게 묶는 catalog manifest다. 새 전입자 질문을 받으면 먼저 landing을 고르고, 업무축 coverage/manifest/quality gate로 내려간다.

## Top-level Entry
- [[release-candidate-전입자온보딩-v1-2026-05]]
- [[README]]
- [[landing-전입자-기관군별-온보딩-2026-05]]
- [[landing-전입자-공통업무축-2026-05]]
- [[landing-전입자-전입첫주-전체기관-2026-05]]

## Route Rules
1. 기관을 묻는 질문이면 기관군 landing으로 보낸다.
2. 업무 종류를 묻는 질문이면 공통업무축 landing으로 보낸다.
3. 첫 주 적응 질문이면 전입첫주 landing과 FAQ path로 보낸다.
4. 자료 제출·답변·공개 가능성 질문이면 해당 업무축의 checklist와 quality gate를 함께 본다.
5. 개인정보·비공개 내부검토·미확정 정책안이 보이면 [[faq-공통업무축-민감정보-masking-사례구분]]과 해당 업무축 quality gate를 먼저 탄다.

## Core Response Axes
- 국회: [[coverage-국회대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-국회대응-2026-05]] / [[quality-gate-국회대응-공통업무축-2026-05]]
- 감사: [[coverage-감사대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-감사대응-2026-05]] / [[quality-gate-감사대응-공통업무축-2026-05]]
- 민원: [[coverage-민원대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-민원대응-2026-05]] / [[quality-gate-민원대응-공통업무축-2026-05]]
- 대외 전환: [[section-국회감사민원-대외전환-2026-05]] / [[manifest-newcomer-journey-국회감사민원-대외전환-2026-05]] / [[quality-gate-국회감사민원-대외전환-2026-05]]

## Internal Operations Axes
- 내부운영·협업·대외소통 umbrella: [[section-공통업무축-내부운영협업대외소통-2026-05]] / [[manifest-newcomer-journey-내부운영협업대외소통-2026-05]] / [[quality-gate-내부운영협업대외소통-2026-05]]
- 운영관리 3축: [[coverage-운영관리3축-조직성과계약-2026-05]]
- 대외협력·현장소통: [[section-대외협력현장소통-전환묶음-2026-05]] / [[coverage-대외협력현장소통-공통업무축-2026-05]]

## LLM Metadata
- [[llms-newcomer-onboarding-v1]]

## High-signal Walkthroughs
- [[index-전입자-walkthrough-시나리오-v1-2026-05]] — 상황형 walkthrough 묶음의 최상위 index.
- [[manifest-newcomer-journey-walkthrough-v1-2026-05]]
- [[section-전입자-walkthrough-시나리오-v1-2026-05]]
- [[quality-gate-전입자-walkthrough-시나리오-v1-2026-05]]
- [[coverage-전입자-walkthrough-시나리오-v1-2026-05]] — 실제 전입자 시나리오 묶음의 coverage와 다음 빈칸.
- [[walkthrough-전입자-시나리오-국회감사민원-대외전환-2026-05]] — 현장소통 자료가 국회·감사·민원 대응으로 전환되는 상황.
- [[walkthrough-전입자-시나리오-국회대응시즌-자료요구답변-2026-05]] — 국회 자료요구 답변 초안과 제출 전 금지선.
- [[walkthrough-전입자-시나리오-감사대응시즌-자료제출-2026-05]] — 감사 자료제출 초안과 제출 전 금지선.
- [[walkthrough-전입자-시나리오-정보공개청구-첫검토-2026-05]] — 정보공개청구 첫 검토와 공개/비공개 경계 확인 상황.
- [[walkthrough-전입자-시나리오-예산시즌-자료요구-2026-05]] — 예산 시즌 자료요구와 국회 제출 전 검토 상황.
- [[walkthrough-전입자-시나리오-보도자료초안-공개경계-2026-05]] — 보도자료 초안에서 공개 문장과 미확정 정보 경계를 확인하는 상황.
- [[walkthrough-전입자-시나리오-회의후속조치-공개전환-2026-05]] — 회의 후속조치가 공개 문장으로 전환되기 전 경계를 확인하는 상황.
- [[walkthrough-전입자-시나리오-민원폭주-반복답변경계-2026-05]] — 민원 폭주 상황에서 반복답변과 개인정보·사건정보 경계를 확인하는 상황.
- [[walkthrough-전입자-시나리오-장관보고-공개자료전환-2026-05]] — 장관 보고용 쟁점 메모가 공개자료로 전환되기 전 경계를 확인하는 상황.

## do_not_include
개인정보, 민원인 식별정보, 업체별 민감정보, 비공개 내부검토 의견, 미확정 정책안, 감사·조사·수사 세부, 법률자문성 결론, 현장 관계자 개인 평가나 발언 왜곡은 포함하지 않는다.

## Recent Boundary Notes
- [[coverage-최근-boundary-note-묶음-2026-05]] — 최근 boundary FAQ/checklist 6개의 노출·연결 상태 coverage.
- [[manifest-newcomer-journey-boundary-notes-2026-05]] — 최근 boundary note 묶음의 전입자 journey route.
- [[section-최근-boundary-note-묶음-2026-05]] — 최근 boundary FAQ/checklist 묶음의 section entry.
- [[manifest-institution-to-boundary-router-2026-05]] — 기관군 전입 경로에서 boundary note로 되돌아가는 route.
- [[quality-gate-institution-to-boundary-router-2026-05]] — 기관군 to boundary router 안전 점검.
- [[coverage-institution-boundary-router-section-2026-05]] — 대표 6개 기관군 section의 boundary router 연결 coverage.
- [[coverage-institution-boundary-core-hubs-2026-05]] — 핵심 업무축 hub의 boundary router 직접 연결 coverage.
- [[coverage-institution-boundary-response-hubs-2026-05]] — 대응형 업무 hub의 boundary router 직접 연결 coverage.
- [[quality-gate-institution-boundary-hub-expansion-2026-05]] — 기관군 section·core hub·response hub boundary router 확장 점검.
- [[coverage-institution-boundary-agency-hubs-2026-05]] — 감사원·조달청 기관별 hub의 boundary router 직접 연결 coverage.
- [[walkthrough-institution-boundary-router-question-flow-2026-05]] — 기관 hub에서 boundary router로 돌아가는 질문형 walkthrough.
- [[coverage-감사대응-boundary-router-질문형-검토-2026-05]] — 감사대응 boundary router 질문형 checklist 연결 coverage.
- [[manifest-response-boundary-router-checklists-2026-05]] — 감사·국회·정보공개·협업회의운영 boundary router 질문형 checklist 묶음.
- [[quality-gate-response-boundary-router-checklists-2026-05]] — 대응형 boundary router checklist 묶음 품질 점검.
- [[index-institution-boundary-router-next-hubs-2026-05]] — 기관별 개별 hub boundary router 연결 후보 index.
- [[checklist-institution-boundary-router-hub-selection-2026-05]] — 기관별 개별 hub boundary router 연결 전 선택 체크리스트.
- [[process-institution-boundary-router-hub-linking-2026-05]] — 기관별 개별 hub에 boundary router를 안전하게 연결하는 절차.
- [[faq-계약자료-공개자료와-업체민감정보는-어떻게-나누나]] — 계약자료 공개/업체민감정보 FAQ
- [[faq-조직정원-공식조직도와-업무분장은-어떻게-나누나]] — 조직정원 공식조직도/업무분장 FAQ
- [[checklist-예산대응-단계별분기-제출전검토]] — 예산대응 단계별분기 checklist
- [[checklist-민원대응-민감정보-masking-제출전검토]] — 민원대응 민감정보 masking checklist
- [[checklist-홍보대응-대외전환-문안분기-제출전검토]] — 홍보대응 대외전환 문안분기 checklist
- [[faq-법령설명-법률자문성결론은-어디서-멈추나]] — 법령설명 법률자문성 결론 FAQ

