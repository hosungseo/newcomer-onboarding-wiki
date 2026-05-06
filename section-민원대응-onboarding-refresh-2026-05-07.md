---
title: 민원대응 onboarding refresh route
kind: section
status: exposed
created: 2026-05-07
updated: 2026-05-07
audience: 민원대응·전입자·agent
scope: complaint intake, classification, deadline tracking, reply evidence bundle, escalation, disclosure/privacy boundary
confidentiality: public-only
---

# section — 민원대응 onboarding refresh route

## 한 줄 요약

민원대응 전입자 route는 **접수 → 분류 → 처리기한 추적 → 답변 근거묶음 → 이송·상향보고 → 공개/개인정보 경계** 순서로 본다. 민원인의 사실관계와 첨부자료는 답변 근거가 될 수 있지만, 개인정보·민감한 사정·내부 검토의견은 공개 문안에 섞지 않는다.

## route map

| 단계 | 열 노트 | 확인할 것 |
|---|---|---|
| 1. complaint intake | [[faq-민원대응-처음-질의-불만-고충-반복민원-구분-2026-05]] | 접수 채널, 민원 요지, 신청인, 첨부자료, 소관 후보 |
| 2. classification | [[walkthrough-민원대응-전입자-라우터-2026-05]] | 질의·불만·고충·반복민원·타기관 소관 여부 |
| 3. deadline tracking | [[process-민원대응-접수부터-재민원로그-2026-05]] | 접수일, 보완요청, 이송기한, 답변기한, 연장/재분류 사유 |
| 4. reply evidence bundle | [[source-민원대응-첨부자료-공개근거-대조순서]] | 민원 원문, 첨부, 공개 법령·지침, 사실확인, 제외자료 |
| 5. escalation/transfer | [[newcomer-path-민원대응-첫30분-소관이송-2026-05]] | 소관 불명, 반복·집단 민원, 쟁점 민감도, 부서장 보고 필요성 |
| 6. disclosure/privacy boundary | [[checklist-민원대응-답변전-공개경계-precheck]] | 개인정보, 제3자 정보, 내부검토, 수사·감사·분쟁 민감정보 제거 |

## 전입자 판단 순서

1. 민원 원문을 요약하기 전에 접수 채널과 접수일을 먼저 적고, 기한 계산 기준을 표시한다.
2. 질의·불만·고충·반복민원·단순 안내·타기관 소관을 먼저 분류한다. 분류가 흔들리면 답변 초안보다 보완질문/소관 확인을 앞세운다.
3. 첨부자료와 민원인 주장은 그대로 공개 근거가 아니다. 공개 법령·지침·공고·기존 공식답변과 대조한다.
4. 답변 근거묶음은 공개 가능한 사실, 확인 중인 사실, 내부 확인 필요, 제외자료 네 칸으로 나눈다.
5. 반복민원·집단민원·언론/국회/감사로 번질 수 있는 사안은 담당자 단독 답변 전에 상향보고·협조부서 확인 여부를 기록한다.
6. 외부 발송 전에는 [[quality-gate-민원대응-onboarding-refresh-2026-05-07]]와 [[checklist-민원대응-답변전-공개경계-precheck]]를 통과한다.

## 노출 완료 기준

- [x] complaint intake와 classification이 단독 진입점으로 보인다.
- [x] deadline tracking이 접수·보완·이송·답변·연장 상태를 분리한다.
- [x] reply evidence bundle이 민원 원문/첨부/공개근거/제외자료를 분리한다.
- [x] escalation route가 반복·집단·소관불명·민감 쟁점을 멈춘다.
- [x] disclosure/privacy boundary가 개인정보와 내부검토를 외부 문안에서 제거한다.
- [x] docs/index.html과 docs/gates.json에서 section/coverage/quality/manifest로 재탐색할 수 있다.

## 공개 금지선

- 주민등록번호, 연락처, 주소, 가족관계, 건강·복지·징계·분쟁 등 민감정보
- 제3자 식별정보, 신고자·피신고자 정보, 내부 민원 배정·검토의견
- 감사·수사·소송·징계·인사 관련 판단, 미확정 처분 방향, 기관 대응전략
- 민원인을 평가·비난하는 표현, 반복민원 대응전략, 내부 협의 경위
