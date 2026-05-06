---
title: 민원대응 onboarding refresh quality gate
kind: quality-gate
status: passed
created: 2026-05-07
updated: 2026-05-07
audience: 민원대응·전입자·agent
scope: 민원대응 refresh route 공개 노출 전 검증
confidentiality: public-only
---

# quality gate — 민원대응 onboarding refresh

## 판정

**통과.** 민원대응 refresh route는 [[section-민원대응-onboarding-refresh-2026-05-07]], [[coverage-민원대응-onboarding-refresh-2026-05-07]], [[manifest-newcomer-journey-민원대응-onboarding-refresh-2026-05-07]]로 접수부터 개인정보 경계까지 재탐색할 수 있다.

## 필수 경로 점검

- [x] complaint intake: [[faq-민원대응-처음-질의-불만-고충-반복민원-구분-2026-05]]가 접수 요지와 유형을 분리한다.
- [x] classification: [[walkthrough-민원대응-전입자-라우터-2026-05]]가 질의·불만·고충·반복민원·타기관 소관을 첫 판단으로 둔다.
- [x] deadline tracking: [[process-민원대응-접수부터-재민원로그-2026-05]]가 접수일, 보완요청, 이송, 답변기한, 반복민원 여부를 기록한다.
- [x] reply evidence bundle: [[source-민원대응-첨부자료-공개근거-대조순서]]가 민원 원문·첨부·공개근거·제외자료를 나눈다.
- [x] escalation: [[newcomer-path-민원대응-첫30분-소관이송-2026-05]]가 소관불명, 타기관 이송, 반복/집단 민원, 민감 쟁점을 담당자 단독 처리에서 멈춘다.
- [x] disclosure/privacy boundary: [[checklist-민원대응-답변전-공개경계-precheck]]가 개인정보·제3자 정보·내부검토·민감자료를 제거한다.
- [x] docs exposure: docs/index.html과 docs/gates.json이 section/coverage/quality/manifest root markdown을 가리킨다.

## 실행 전 금지선

다음 중 하나라도 포함되면 **중지/확인 요청**으로 판정한다.

- 민원인 또는 제3자의 개인정보·민감정보·식별 가능한 생활정보
- 신고자/피신고자 정보, 조사·감사·수사·소송·징계 관련 미확정 판단
- 내부 배정, 검토의견, 대응전략, 반복민원 처리전략, 상급자 보고 내용
- 공개 근거 없이 민원인의 주장을 사실로 확정하는 문장
- 법령·지침 확인 전 처분 가능성, 보상 가능성, 기관 책임을 단정하는 문장

## 통과 기준

- 접수·분류·기한·근거·상향보고·개인정보 경계가 순서대로 보인다.
- 답변 초안 전에 공개 근거와 제외자료가 분리된다.
- 외부 발송 전 개인정보와 내부검토가 제거된다.
- gate 참조는 root markdown이며 `../` prefix를 쓰지 않는다.
