---
title: 민원대응 onboarding refresh coverage
kind: coverage
status: exposed
created: 2026-05-07
updated: 2026-05-07
audience: 민원대응·전입자·agent
scope: 민원대응 refresh route 노출 점검
confidentiality: public-only
---

# coverage — 민원대응 onboarding refresh

## 한 줄 요약

민원대응 refresh route는 기존 예산·민원 묶음에서 민원 축을 분리해 **접수, 분류, 기한, 근거, 상향보고, 개인정보 경계**를 한 번에 재탐색하게 한다.

## 현재 연결된 제품군

| 층 | 노트 | 역할 |
|---|---|---|
| section | [[section-민원대응-onboarding-refresh-2026-05-07]] | refresh route의 한 화면 진입점 |
| entry | [[walkthrough-민원대응-전입자-라우터-2026-05]] | 질의·불만·고충·반복민원 첫 분류 |
| intake/classification | [[faq-민원대응-처음-질의-불만-고충-반복민원-구분-2026-05]] | 민원 유형과 답변 전 확인질문 분리 |
| deadline tracking | [[process-민원대응-접수부터-재민원로그-2026-05]] | 접수일, 처리기한, 보완, 이송, 재민원 로그 |
| reply evidence bundle | [[source-민원대응-첨부자료-공개근거-대조순서]] | 민원 원문·첨부·공개근거·제외자료 대조 |
| escalation | [[newcomer-path-민원대응-첫30분-소관이송-2026-05]] | 소관불명·타기관·반복/집단 민원 상향 확인 |
| disclosure/privacy boundary | [[checklist-민원대응-답변전-공개경계-precheck]] | 개인정보·제3자 정보·내부검토 제거 |
| quality gate | [[quality-gate-민원대응-onboarding-refresh-2026-05-07]] | route 완성도와 금지선 검증 |
| manifest | [[manifest-newcomer-journey-민원대응-onboarding-refresh-2026-05-07]] | agent-readable route |

## coverage 판정

- [x] docs/index.html에서 예산·민원 section 안에 민원 refresh route가 보인다.
- [x] docs/gates.json에서 section, coverage, qualityGate, manifest가 root markdown으로 연결된다.
- [x] 모든 참조는 공개 root markdown이며 graph/data export, README, landing 확장 없이 유지된다.
- [x] 민원 원문과 답변 근거가 개인정보·내부검토와 분리된다.

## 남은 고도화 후보

- 실제 기관별 민원 시스템 명칭은 공개 문서에서 확인된 경우에만 별도 source로 승격한다.
- 처리기한 예외는 법령·지침 근거가 확보될 때 별도 FAQ로 분리한다.
