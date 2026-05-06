---
title: 장관보고·성과평가 실행경계 newcomer journey manifest
kind: manifest
status: draft
created: 2026-05-07
updated: 2026-05-07
audience: 장관보고·성과평가·전입자·agent
scope: 공개자료 기반 장관보고/성과설명/평가절차 실행 경로
confidentiality: public-only
---

# manifest — 장관보고·성과평가 실행경계 newcomer journey

```yaml
id: newcomer-journey-minister-report-performance-boundary-2026-05
label: 장관보고·성과평가 실행경계
entry: section-장관보고-성과평가-onboarding-coverage-2026-05-07
router: router-장관보고-성과평가-실행경계-2026-05
coverage: coverage-장관보고-성과평가-실행경계-2026-05
quality_gate: quality-gate-장관보고-성과평가-실행경계-2026-05
discovery_coverage: coverage-execution-boundary-routes-discovery-2026-05
audience:
  - 장관보고 전입자
  - 성과 설명자료 작성자
  - agent routing
route:
  - step: section
    file: section-장관보고-성과평가-onboarding-coverage-2026-05-07
    purpose: 장관보고·실국장보고·성과지표점검·평가자료제출 onboarding 네 칸을 노출한다.
  - step: router
    file: router-장관보고-성과평가-실행경계-2026-05
    purpose: 요청을 장관보고, 실국장보고, 성과지표 점검, 평가자료 제출 중 하나로 분기한다.
  - step: first_boundary
    file: faq-장관보고-성과평가-전입자-첫구분-2026-05
    purpose: minister/senior briefing/performance metric/evaluation submission boundary를 확인한다.
  - step: evidence_bundle
    file: source-장관보고-성과평가-초안전-근거묶음-2026-05
    purpose: 공개·확정 근거와 제외자료를 evidence bundle로 분리한다.
  - step: report_path
    file: newcomer-path-첫보고서작성-공통행정업무
    purpose: 보고 목적, 독자, 근거, 쟁점, 선택지, 후속조치와 briefing/revision/tracking checklist를 분리한다.
  - step: performance_boundary
    file: faq-공적설명절차와-별도평가절차는-무엇이-다른가
    purpose: 성과·공적 설명을 평가 결론이나 심의 판단으로 바꾸지 않는다.
  - step: budget_support
    file: faq-예산대응-편성과-집행자료는-어떻게-구분하나
    purpose: 예산 편성 논리, 확정 예산, 집행 실적, 결산·정산 자료를 구분한다.
  - step: coverage
    file: coverage-장관보고-성과평가-실행경계-2026-05
    purpose: 제품군 노출, 판단 순서, 남은 고도화 후보를 점검한다.
  - step: quality_gate
    file: quality-gate-장관보고-성과평가-실행경계-2026-05
    purpose: 공개 설명 전 public/private/unconfirmed-performance 금지선과 통과 기준을 검증한다.
  - step: discovery_coverage
    file: coverage-execution-boundary-routes-discovery-2026-05
    purpose: 실행경계 route 묶음의 상위 발견성을 확인한다.
branch_to:
  budget_response:
    when: 성과자료가 예산 요구·집행 실적과 직접 연결되는 경우
    file: faq-예산대응-편성과-집행자료는-어떻게-구분하나
  general_report:
    when: 평가나 성과 설명이 아니라 일반 보고서 초안인 경우
    file: newcomer-path-첫보고서작성-공통행정업무
stop_lines:
  - 수신자, 산출물, 판단권한, 공개·확정 근거가 불명확하면 장관보고/실국장보고/성과지표점검/평가자료제출 문안으로 넘기지 않는다.
  - 장관보고 내부 보고라인, 구두 지시, 비공개 검토의견, 미확정 정책결정은 공개형 초안에 쓰지 않는다.
  - 성과평가 점수, 등급, 비교순위, 위원회 발언, 내부 심의자료, 비공개 세부 평가 기준은 제외한다.
  - 개인별 성과, 인사자료, 징계·고충·건강·가족 등 민감정보는 성과 설명자료로 재가공하지 않는다.
  - 공개 근거 없는 우수·미흡·문제 없음·위법 소지 없음 단정은 작성하지 않는다.
completion_rule: quality_gate를 통과하거나 중지/확인 요청으로 종료한다.
```

## 읽는 순서

1. [[section-장관보고-성과평가-onboarding-coverage-2026-05-07]]
2. [[router-장관보고-성과평가-실행경계-2026-05]]
3. [[faq-장관보고-성과평가-전입자-첫구분-2026-05]]
4. [[source-장관보고-성과평가-초안전-근거묶음-2026-05]]
5. [[newcomer-path-첫보고서작성-공통행정업무]]
6. [[faq-공적설명절차와-별도평가절차는-무엇이-다른가]]
7. [[faq-예산대응-편성과-집행자료는-어떻게-구분하나]]
8. [[coverage-장관보고-성과평가-실행경계-2026-05]]
9. [[quality-gate-장관보고-성과평가-실행경계-2026-05]]
10. [[coverage-execution-boundary-routes-discovery-2026-05]]
