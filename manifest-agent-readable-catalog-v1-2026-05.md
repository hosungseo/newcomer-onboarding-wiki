# Manifest — Agent-readable Catalog v1 2026-05

## 목적
- [[faq-계약조달-boundary-router-공개문안-초안-2026-05]] — 계약조달 boundary router 공개문안 초안 FAQ.
- [[coverage-계약조달-boundary-router-공개문안-faq-2026-05]] — 계약조달 boundary router 공개문안 FAQ coverage.
- [[process-계약조달-boundary-router-공개문안-작성흐름-2026-05]] — 계약조달 boundary router 공개문안 작성흐름.
- [[coverage-계약조달-boundary-router-공개문안-process-2026-05]] — 계약조달 boundary router 공개문안 process coverage.
- [[faq-정보공개기록관리-boundary-router-공개문안-초안-2026-05]] — 정보공개기록관리 boundary router 공개문안 초안 FAQ.
- [[coverage-정보공개기록관리-boundary-router-공개문안-faq-2026-05]] — 정보공개기록관리 boundary router 공개문안 FAQ coverage.
- [[process-정보공개기록관리-boundary-router-공개문안-작성흐름-2026-05]] — 정보공개기록관리 boundary router 공개문안 작성흐름.
- [[coverage-정보공개기록관리-boundary-router-공개문안-process-2026-05]] — 정보공개기록관리 boundary router 공개문안 process coverage.
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
- [[faq-국회대응-boundary-router-공개문안-초안-2026-05]] — 국회대응 boundary router 공개문안 초안 FAQ.
- [[coverage-국회대응-boundary-router-공개문안-faq-2026-05]] — 국회대응 boundary router 공개문안 FAQ coverage.
- [[process-국회대응-boundary-router-공개문안-작성흐름-2026-05]] — 국회대응 boundary router 공개문안 작성흐름.
- [[coverage-국회대응-boundary-router-공개문안-process-2026-05]] — 국회대응 boundary router 공개문안 process coverage.
- 감사: [[coverage-감사대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-감사대응-2026-05]] / [[quality-gate-감사대응-공통업무축-2026-05]]
- 민원: [[coverage-민원대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-민원대응-2026-05]] / [[quality-gate-민원대응-공통업무축-2026-05]]
- [[faq-민원대응-boundary-router-공개문안-초안-2026-05]] — 민원대응 boundary router 공개문안 초안 FAQ.
- [[coverage-민원대응-boundary-router-공개문안-faq-2026-05]] — 민원대응 boundary router 공개문안 FAQ coverage.
- [[coverage-민원대응-boundary-router-공개문안-process-2026-05]] — 민원대응 공개문안 FAQ/process/checklist layer coverage.
- [[coverage-민원대응-boundary-router-walkthrough-2026-05]] — 민원 폭주·반복답변 walkthrough의 landing/docs discovery 후보 coverage.
- [[faq-민원답변-첫문장은-어떻게-쓰나]] / [[faq-민원답변-타기관소관은-어떻게-처리하나]] / [[checklist-민원대응-boundary-router-질문형-검토]] — 민원답변 first sentence, 타기관 소관, 질문형 검토 layer.
- 법령: [[coverage-법령대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-법령대응-2026-05]] / [[quality-gate-법령대응-공통업무축-2026-05]]
- [[coverage-법령대응-boundary-router-실행경계-2026-05]] — 법령대응 FAQ/source/process/checklist/walkthrough 실행경계 coverage.
- [[manifest-newcomer-journey-법령대응-공개설명경계-2026-05]] / [[coverage-법령대응-공개설명경계-2026-05]] / [[quality-gate-법령대응-공개설명경계-2026-05]] — 입법예고 공개자료·신구조문·의견답변·제출전 검토의 공개설명경계 묶음.
- 대외 전환: [[section-국회감사민원-대외전환-2026-05]] / [[manifest-newcomer-journey-국회감사민원-대외전환-2026-05]] / [[quality-gate-국회감사민원-대외전환-2026-05]]

## Internal Operations Axes
- 내부운영·협업·대외소통 umbrella: [[section-공통업무축-내부운영협업대외소통-2026-05]] / [[manifest-newcomer-journey-내부운영협업대외소통-2026-05]] / [[quality-gate-내부운영협업대외소통-2026-05]]
- 운영관리 3축: [[coverage-운영관리3축-조직성과계약-2026-05]]
- 정보공개·기록관리: [[coverage-정보공개기록관리-공통업무축-2026-05]] / [[manifest-newcomer-journey-정보공개기록관리-2026-05]] / [[quality-gate-정보공개기록관리-2026-05]] — 공개자료·내부검토자료·기록물·정보공개청구 경계.
- 협업·회의운영: [[coverage-협업회의운영-공통업무축-2026-05]] / [[manifest-newcomer-journey-협업회의운영-2026-05]] / [[quality-gate-협업회의운영-2026-05]] — 회의자료·결정사항·후속조치·공개전환 경계.
- 대외협력·현장소통: [[coverage-대외협력현장소통-공통업무축-2026-05]] / [[manifest-newcomer-journey-대외협력현장소통-2026-05]] / [[quality-gate-대외협력현장소통-2026-05]] — 현장 의견, 기관 공식 입장, 후속조치, 국회·감사·민원 전환 경계.
- 홍보대응: [[coverage-홍보대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-홍보대응-2026-05]] / [[quality-gate-홍보대응-공통업무축-2026-05]] — 보도자료·설명자료의 공개근거, 미확정 정보, 대외전환 문안분기 경계.

### Recent boundary route order
1. 공개·기록 여부가 핵심이면 정보공개·기록관리 route를 먼저 탄다.
2. 회의 결과·후속조치·협업자료가 핵심이면 협업·회의운영 route를 탄다.
3. 현장 의견이나 관계기관 소통이 공식 입장으로 바뀌는지 묻는다면 대외협력·현장소통 route를 탄다.
4. 보도자료·설명자료·언론답변 문안이면 홍보대응 route를 타고, 장관보고·국회·감사·민원 재사용 전 대외전환 checklist를 다시 확인한다.
5. 위 route가 자료제출·답변·공개설명 경계로 바뀌면 Core Response Axes의 해당 업무축 manifest/quality gate로 되돌아간다.

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

## Execution Boundary Route Map
- [[section-execution-boundary-routes-2026-05]] — 최근 실행경계 route를 계약조달·조직정원·감사국회·민원법령·정보공개협업·홍보대외협력 흐름으로 고르는 section entry.
- [[index-execution-boundary-route-aliases-2026-05]] — 계약·조직, 예산·민원, 정보공개·협업회의, 홍보·법령 교차 route의 coverage/manifest/quality alias index.
- [[release-note-execution-boundary-route-aliases-2026-05]] — 실행경계 alias 묶음의 release note와 README/landing/docs/agent 노출 상태 요약.
- [[router-execution-boundary-route-aliases-newcomer-questions-2026-05]] — 신규자 질문 문장과 예시 질문을 4개 교차 route alias로 보내는 router.
- [[coverage-장관보고-성과평가-실행경계-2026-05]] — 장관보고 설명과 성과평가 판단을 분리하는 신규 교차 route coverage.
- [[release-note-장관보고-성과평가-실행경계-2026-05]] — 장관보고·성과평가 신규 교차 route의 포함 진입점과 노출 상태 요약.
- [[router-대외협력현장소통-홍보대응-실행경계-2026-05]] — 현장 소통과 공식 홍보문안 경계를 나누는 신규 교차 route router.
- [[coverage-대외협력현장소통-홍보대응-실행경계-2026-05]] — 대외협력현장소통과 홍보대응의 현장입력·공개문안 경계 coverage.
- [[release-note-대외협력현장소통-홍보대응-실행경계-2026-05]] — 대외협력현장소통·홍보대응 신규 교차 route의 포함 진입점과 노출 상태 요약.
- [[router-대외협력현장소통-정보공개기록관리-실행경계-2026-05]] — 현장 소통 기록과 공개·기록관리 경계를 나누는 신규 교차 route router.
- [[coverage-대외협력현장소통-정보공개기록관리-실행경계-2026-05]] — 대외협력현장소통과 정보공개기록관리의 현장기록·공개판단 경계 coverage.
- [[faq-execution-boundary-route-aliases-어떤-교차-route를-먼저-고르나]] — 교차 route 선택 기준을 짧게 설명하는 FAQ.
- [[manifest-newcomer-journey-execution-boundary-route-aliases-2026-05]] — 실행경계 alias 묶음의 agent-readable journey manifest.
- [[quality-gate-execution-boundary-route-aliases-2026-05]] — 실행경계 alias 묶음의 발견성·안전성 gate.
- [[coverage-execution-boundary-routes-discovery-2026-05]] — 실행경계 route의 manifest/coverage/quality gate 삼각형과 docs/landing 노출 순서 기준.
- [[quality-gate-execution-boundary-routes-discovery-2026-05]] — section entry와 중복 audit 노출 전 최종 quality gate.
- [[audit-boundary-duplicate-root-notes-2026-05]] — 실행경계 관련 audit/coverage/manifest/quality gate root note 중복 후보를 삭제 대신 route-map 기준으로 정리하는 audit.

## Recent Boundary Notes
- [[manifest-boundary-router-public-draft-products-2026-05]] — 공개문안 FAQ/process 제품군 통합 manifest.
- [[quality-gate-boundary-router-public-draft-products-2026-05]] — 공개문안 제품군 통합 quality gate.
- [[coverage-boundary-router-public-draft-products-2026-05]] — 공개문안 제품군 노출 coverage.
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
- [[faq-감사대응-boundary-router-공개문안-초안-2026-05]] — 감사대응 boundary router 공개문안 초안 FAQ.
- [[coverage-감사대응-boundary-router-공개문안-faq-2026-05]] — 감사대응 boundary router 공개문안 FAQ coverage.
- [[process-감사대응-boundary-router-공개문안-작성흐름-2026-05]] — 감사대응 boundary router 공개문안 작성흐름.
- [[coverage-감사대응-boundary-router-공개문안-process-2026-05]] — 감사대응 boundary router 공개문안 process coverage.
- [[manifest-response-boundary-router-checklists-2026-05]] — 감사·국회·정보공개·협업회의운영 boundary router 질문형 checklist 묶음.
- [[faq-협업회의운영-boundary-router-공개문안-초안-2026-05]] — 협업회의운영 boundary router 공개문안 초안 FAQ.
- [[coverage-협업회의운영-boundary-router-공개문안-faq-2026-05]] — 협업회의운영 boundary router 공개문안 FAQ coverage.
- [[process-협업회의운영-boundary-router-공개문안-작성흐름-2026-05]] — 협업회의운영 boundary router 공개문안 작성흐름.
- [[coverage-협업회의운영-boundary-router-공개문안-process-2026-05]] — 협업회의운영 boundary router 공개문안 process coverage.
- [[quality-gate-response-boundary-router-checklists-2026-05]] — 대응형 boundary router checklist 묶음 품질 점검.
- [[index-response-boundary-router-checklists-2026-05]] — 감사·국회·정보공개·협업회의운영 boundary checklist 상황별 색인.
- [[landing-response-boundary-router-checklists-2026-05]] — 감사·국회·정보공개·협업회의운영 boundary checklist를 바로 고르는 landing.
- [[landing-core-boundary-router-checklists-2026-05]] — 핵심 업무축 boundary checklist를 바로 고르는 landing.
- [[release-candidate-core-boundary-checklists-2026-05]] — 핵심 업무축 boundary checklist 묶음 release candidate.
- [[walkthrough-core-boundary-checklist-entry-2026-05]] — 핵심 업무축 boundary checklist 진입 walkthrough.
- [[index-core-boundary-router-checklists-2026-05]] — 핵심 업무축 boundary checklist 제품군 index.
- [[index-boundary-router-checklist-products-2026-05]] — response/core boundary router checklist 제품군 cross-index.
- [[release-candidate-boundary-checklist-products-2026-05]] — response/core boundary checklist products 통합 release candidate.
- [[quality-gate-boundary-checklist-products-2026-05]] — response/core boundary checklist products 통합 quality gate.
- [[walkthrough-boundary-checklist-products-entry-2026-05]] — response/core boundary checklist 제품군 통합 진입 walkthrough.
- [[manifest-boundary-checklist-products-2026-05]] — response/core boundary checklist products 최상위 manifest.
- [[coverage-boundary-router-products-v1-index-2026-05]] — boundary router products v1 index 노출 coverage.
- [[quality-gate-boundary-router-products-v1-2026-05]] — boundary router products v1 통합 quality gate.
- [[release-candidate-boundary-router-products-v1-2026-05]] — institution/response/core boundary router products v1 통합 release candidate.
- [[manifest-boundary-router-products-v1-2026-05]] — institution/response/core boundary router products v1 manifest.
- [[walkthrough-boundary-router-products-v1-entry-2026-05]] — institution/response/core boundary router products v1 통합 walkthrough.
- [[landing-boundary-router-products-v1-2026-05]] — boundary router products v1 빠른 선택 landing.
- [[section-boundary-router-products-v1-2026-05]] — boundary router products v1 README/docs 노출 섹션.
- [[index-boundary-router-products-v1-release-pack-2026-05]] — boundary router products v1 release pack index.
- [[quality-gate-boundary-router-products-v1-release-pack-2026-05]] — boundary router products v1 release pack quality gate.
- [[manifest-boundary-router-products-v1-release-pack-2026-05]] — boundary router products v1 release pack manifest.
- [[release-candidate-boundary-router-products-v1-release-pack-2026-05]] — boundary router products v1 release pack 최종 release candidate.
- [[checklist-boundary-router-products-v1-agent-readable-release-pack-2026-05]] — boundary router products v1 agent-readable release pack 확인 checklist.
- [[coverage-boundary-router-products-v1-agent-readable-checklist-2026-05]] — boundary router products v1 agent-readable checklist 노출 coverage.
- [[index-boundary-router-products-v1-agent-readable-pack-2026-05]] — boundary router products v1 agent-readable pack index.
- [[coverage-boundary-router-products-v1-agent-readable-pack-2026-05]] — boundary router products v1 agent-readable pack 노출 coverage.
- [[quality-gate-boundary-router-products-v1-agent-readable-pack-2026-05]] — boundary router products v1 agent-readable pack quality gate.
- [[coverage-boundary-router-products-v1-agent-readable-pack-manifest-2026-05]] — boundary router products v1 agent-readable pack manifest 노출 coverage.
- [[manifest-boundary-router-products-v1-agent-readable-pack-2026-05]] — boundary router products v1 agent-readable pack manifest.
- [[release-candidate-boundary-router-products-v1-agent-readable-pack-2026-05]] — boundary router products v1 agent-readable pack release candidate.
- [[coverage-boundary-router-products-v1-agent-readable-pack-release-2026-05]] — boundary router products v1 agent-readable pack release 노출 coverage.
- [[coverage-boundary-router-products-v1-release-pack-candidate-2026-05]] — boundary router products v1 release pack candidate 노출 coverage.
- [[coverage-boundary-router-products-v1-release-pack-manifest-2026-05]] — boundary router products v1 release pack manifest 노출 coverage.
- [[coverage-boundary-router-products-v1-release-pack-2026-05]] — boundary router products v1 release pack 노출 coverage.
- [[checklist-boundary-router-products-v1-release-ready-2026-05]] — boundary router products v1 release-ready 최종 체크리스트.
- [[coverage-boundary-router-products-v1-release-ready-checklist-2026-05]] — boundary router products v1 release-ready checklist 노출 coverage.
- [[coverage-boundary-router-products-v1-section-2026-05]] — boundary router products v1 section 노출 coverage.
- [[coverage-boundary-router-products-v1-landing-2026-05]] — boundary router products v1 landing 노출 coverage.
- [[coverage-boundary-router-products-v1-walkthrough-2026-05]] — boundary router products v1 walkthrough 노출 coverage.
- [[coverage-boundary-router-products-v1-manifest-2026-05]] — boundary router products v1 manifest 노출 coverage.
- [[coverage-boundary-router-products-v1-release-2026-05]] — boundary router products v1 release 노출 coverage.
- [[index-boundary-router-products-v1-2026-05]] — institution/response/core boundary router 제품군 v1 index.
- [[coverage-boundary-checklist-products-manifest-2026-05]] — checklist products manifest 노출 coverage.
- [[coverage-boundary-checklist-products-walkthrough-2026-05]] — checklist products 통합 walkthrough 노출 coverage.
- [[coverage-boundary-router-checklist-products-index-2026-05]] — checklist products cross-index 노출 coverage.
- [[coverage-core-boundary-checklist-walkthrough-2026-05]] — 핵심 업무축 boundary checklist walkthrough 노출 coverage.
- [[release-candidate-response-boundary-checklists-2026-05]] — 대응형 boundary checklist 묶음 release candidate.
- [[walkthrough-response-boundary-checklist-entry-2026-05]] — 대응형 업무에서 boundary checklist landing으로 들어가는 질문형 walkthrough.
- [[coverage-response-boundary-checklist-walkthrough-2026-05]] — 대응형 boundary checklist entry walkthrough 노출 coverage.
- [[coverage-response-boundary-router-landing-2026-05]] — 대응형 boundary checklist landing 노출 coverage.
- [[index-institution-boundary-router-next-hubs-2026-05]] — 기관별 개별 hub boundary router 연결 후보 index.
- [[checklist-institution-boundary-router-hub-selection-2026-05]] — 기관별 개별 hub boundary router 연결 전 선택 체크리스트.
- [[process-institution-boundary-router-hub-linking-2026-05]] — 기관별 개별 hub에 boundary router를 안전하게 연결하는 절차.
- [[faq-계약자료-공개자료와-업체민감정보는-어떻게-나누나]] — 계약자료 공개/업체민감정보 FAQ
- [[faq-조직정원-공식조직도와-업무분장은-어떻게-나누나]] — 조직정원 공식조직도/업무분장 FAQ
- [[faq-조직정원-boundary-router-공개문안-초안-2026-05]] — 조직정원 boundary router 공개문안 초안 FAQ.
- [[coverage-조직정원-boundary-router-공개문안-faq-2026-05]] — 조직정원 boundary router 공개문안 FAQ coverage.
- [[process-조직정원-boundary-router-공개문안-작성흐름-2026-05]] — 조직정원 boundary router 공개문안 작성흐름.
- [[coverage-조직정원-boundary-router-공개문안-process-2026-05]] — 조직정원 boundary router 공개문안 process coverage.
- [[checklist-예산대응-단계별분기-제출전검토]] — 예산대응 단계별분기 checklist
- [[faq-예산대응-boundary-router-공개문안-초안-2026-05]] — 예산대응 boundary router 공개문안 초안 FAQ.
- [[coverage-예산대응-boundary-router-공개문안-faq-2026-05]] — 예산대응 boundary router 공개문안 FAQ coverage.
- [[process-예산대응-boundary-router-공개문안-작성흐름-2026-05]] — 예산대응 boundary router 공개문안 작성흐름.
- [[coverage-예산대응-boundary-router-공개문안-process-2026-05]] — 예산대응 boundary router 공개문안 process coverage.
- [[checklist-민원대응-민감정보-masking-제출전검토]] — 민원대응 민감정보 masking checklist
- [[coverage-민원대응-boundary-router-walkthrough-2026-05]] — 민원 반복답변 boundary walkthrough coverage
- [[checklist-홍보대응-대외전환-문안분기-제출전검토]] — 홍보대응 대외전환 문안분기 checklist
- [[faq-법령설명-법률자문성결론은-어디서-멈추나]] — 법령설명 법률자문성 결론 FAQ
- [[coverage-법령대응-boundary-router-실행경계-2026-05]] — 법령대응 공개/비공개 실행경계 coverage
- [[manifest-newcomer-journey-법령대응-공개설명경계-2026-05]] — 법령대응 공개설명경계 journey manifest
