# Release Candidate — 전입자 온보딩 v1 2026-05

이 문서는 `newcomer-onboarding-wiki`가 전 부처 전입자·신규자 온보딩 지식망으로 어느 정도 닫혔는지 확인하기 위한 v1 release candidate 체크포인트다. 목적은 더 많은 노트를 계속 만드는 것이 아니라, 지금까지 만든 기관군·공통업무축·상황형 경로가 실제 진입점으로 묶였는지 판정하는 것이다.

## v1 판정 기준

- 기관군별 전입 경로가 있다.
- 공통업무축 landing에서 주요 업무를 고를 수 있다.
- 주요 업무축은 `hub → path → FAQ → source → process → checklist → coverage → manifest → quality gate` 중 최소 핵심 경로를 갖는다.
- 공개/비공개 금지선이 반복적으로 명시돼 있다.
- README와 docs index에서 주요 묶음으로 진입할 수 있다.
- local wikilink missing refs가 0이다.

## 핵심 landing

- [[landing-전입자-기관군별-온보딩-2026-05]]
- [[landing-전입자-공통업무축-2026-05]]
- [[landing-전입자-전입첫주-전체기관-2026-05]]
- [[landing-전입자-전입첫주-FAQ-전체기관-2026-05]]

## 공통업무축 v1 묶음

- [[coverage-국회대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-국회대응-2026-05]] / [[quality-gate-국회대응-공통업무축-2026-05]]
- [[coverage-예산대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-예산대응-2026-05]] / [[quality-gate-예산대응-공통업무축-2026-05]]
- [[coverage-감사대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-감사대응-2026-05]] / [[quality-gate-감사대응-공통업무축-2026-05]]
- [[coverage-장관보고-공통업무축-2026-05]] / [[manifest-newcomer-journey-장관보고-2026-05]] / [[quality-gate-장관보고-2026-05]]
- [[coverage-홍보대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-홍보대응-2026-05]] / [[quality-gate-홍보대응-공통업무축-2026-05]]
- [[coverage-민원대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-민원대응-2026-05]] / [[quality-gate-민원대응-공통업무축-2026-05]]
- [[coverage-법령대응-공통업무축-2026-05]] / [[manifest-newcomer-journey-법령대응-2026-05]] / [[quality-gate-법령대응-공통업무축-2026-05]]

## 확장 업무축 v1 묶음

- [[coverage-문서기안-공통업무축-2026-05]] / [[manifest-newcomer-journey-문서기안-2026-05]] / [[quality-gate-문서기안-2026-05]]
- [[coverage-인사복무-공통업무축-2026-05]] / [[manifest-newcomer-journey-인사복무-2026-05]] / [[quality-gate-인사복무-2026-05]]
- [[coverage-협업회의운영-공통업무축-2026-05]] / [[manifest-newcomer-journey-협업회의운영-2026-05]] / [[quality-gate-협업회의운영-2026-05]]
- [[coverage-정보공개기록관리-공통업무축-2026-05]] / [[manifest-newcomer-journey-정보공개청구-2026-05]] / [[quality-gate-정보공개청구-2026-05]]
- [[coverage-조직정원-공통업무축-2026-05]] / [[manifest-newcomer-journey-조직정원-2026-05]] / [[quality-gate-조직정원-2026-05]]
- [[coverage-성과평가-공통업무축-2026-05]] / [[manifest-newcomer-journey-성과평가-2026-05]] / [[quality-gate-성과평가-2026-05]]
- [[coverage-대외협력현장소통-공통업무축-2026-05]] / [[manifest-newcomer-journey-대외협력현장소통-2026-05]] / [[quality-gate-대외협력현장소통-2026-05]]

## Agent-readable catalog
- [[manifest-agent-readable-catalog-v1-2026-05]]

## v1 이후 남은 고도화 후보

1. feature branch의 축적물을 main/docs 배포면에 반영할지 결정한다.
2. docs index를 단순 quick link 나열에서 `기관군 / 업무축 / 상황형 / 품질검증` 섹션형 UI로 나눈다.
3. journey manifest를 agent-readable catalog로 묶는 작업은 [[manifest-agent-readable-catalog-v1-2026-05]]로 시작했고 README/landing/docs 노출까지 완료됐다.
4. 중복된 coverage/quality gate 표현을 얇게 정리한다.
5. 실제 전입자 시나리오 3개를 골라 end-to-end walkthrough를 작성한다.

## 판정

현재 구조는 v1 release candidate로 볼 수 있다. 다음 단계는 무한 확장보다 배포면 반영, 탐색 UI 정리, agent-readable catalog화가 더 큰 가치가 있다.
