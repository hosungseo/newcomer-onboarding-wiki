---
title: 예산대응 onboarding refresh quality gate
kind: quality-gate
status: passed
created: 2026-05-07
updated: 2026-05-07
audience: 예산대응·전입자·agent
scope: 예산대응 refresh route 공개 노출 전 검증
confidentiality: public-only
---

# quality gate — 예산대응 onboarding refresh

## 판정

**통과.** 예산대응 refresh route는 [[section-예산대응-onboarding-refresh-2026-05-07]], [[coverage-예산대응-onboarding-refresh-2026-05-07]], [[manifest-newcomer-journey-예산대응-onboarding-refresh-2026-05-07]]로 요구 접수부터 공개경계까지 재탐색할 수 있다.

## 필수 경로 점검

- [x] budget request intake: [[walkthrough-예산대응-전입자-라우터-2026-05]]가 요청자, 요구항목, 양식, 제출기한을 첫 판단으로 둔다.
- [x] adjustment/execution-change classification: [[faq-예산대응-예산요구-예산조정-집행변경-국회의회설명자료-첫구분-2026-05]]가 예산요구·조정·집행변경·국회/의회 설명자료를 분리한다.
- [x] evidence bundle: [[source-예산대응-검토메모-작성전-증거묶음-2026-05]]가 공개·확정 예산자료, 요구 원문, 내부검토, 미확정 예산안을 나눈다.
- [x] coordination/deadline tracking: [[process-예산대응-요청접수-회신추적로그-2026-05]]가 담당, 회신기한, 보완요청, 후속조치, 추적상태를 기록한다.
- [x] National Assembly explanation materials: [[checklist-예산대응-요구자료-제출전검토]]가 제출용 확정 수치와 제외할 내부전략·잠정액을 점검한다.
- [x] disclosure boundary: [[faq-예산대응-공개자료와-내부검토는-어디서-갈리나]]가 공개자료와 비공개 내부검토의 멈춤선을 제공한다.
- [x] docs exposure: docs/index.html과 docs/gates.json이 section/coverage/quality/manifest root markdown을 가리킨다.

## 실행 전 금지선

다음 중 하나라도 포함되면 **중지/확인 요청**으로 판정한다.

- 공개·확정 원천으로 대조되지 않은 예산액, 집행액, 단가, 물량, 산출내역
- 미확정 예산안, 잠정액, 삭감·증액 협상전략, 국회·감사 대응전략
- 내부 검토의견, 부처 간 비공개 협의, 예상질의·답변 전략, 구두 협의 경위
- 개인정보, 업체별 가격·제안·평가·영업비밀, 입찰 전 검토자료
- 타기관 소관 예산을 우리 기관 확정 답변처럼 단정하는 문장

## 통과 기준

- 요구 접수·분류·근거묶음·협의기한·국회 설명자료·공개경계가 순서대로 보인다.
- 답변 초안 전에 공개 확정자료와 내부검토·미확정 예산안이 분리된다.
- 외부 공유 전 잠정 수치와 협상전략이 제거된다.
- gate 참조는 root markdown이며 `../` prefix를 쓰지 않는다.
