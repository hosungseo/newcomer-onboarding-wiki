---
title: 예산대응 onboarding refresh route
kind: section
status: exposed
created: 2026-05-07
updated: 2026-05-07
audience: 예산대응·전입자·agent
scope: budget request intake, adjustment/execution-change classification, evidence bundle, coordination/deadline tracking, National Assembly explanation materials, disclosure boundary
confidentiality: public-only
---

# section — 예산대응 onboarding refresh route

## 한 줄 요약

예산대응 전입자 route는 **요구 접수 → 조정/집행변경 분류 → 근거묶음 → 협의·기한 추적 → 국회 설명자료 → 공개/비공개 경계** 순서로 본다. 공개·확정 예산자료는 답변 근거가 되지만, 미확정 예산안·협상전략·내부 검토의견은 설명 문안에 섞지 않는다.

## route map

| 단계 | 열 노트 | 확인할 것 |
|---|---|---|
| 1. budget request intake | [[walkthrough-예산대응-전입자-라우터-2026-05]] | 요청자, 요구 항목, 양식, 제출기한, 소관 후보 |
| 2. adjustment/execution-change classification | [[faq-예산대응-예산요구-예산조정-집행변경-국회의회설명자료-첫구분-2026-05]] | 예산요구·예산조정·집행변경·국회/의회 설명자료 구분 |
| 3. evidence bundle | [[source-예산대응-검토메모-작성전-증거묶음-2026-05]] | 예산서·결산서·공식자료·요구 원문·내부검토·미확정 예산안 분리 |
| 4. coordination/deadline tracking | [[process-예산대응-요청접수-회신추적로그-2026-05]] | 협의부서, 담당자, 회신기한, 보완요청, 후속조치, 추적상태 |
| 5. National Assembly explanation materials | [[checklist-예산대응-요구자료-제출전검토]] | 국회·의회 제출용 수치, 설명 범위, 미확정·전략자료 제외 여부 |
| 6. disclosure boundary | [[faq-예산대응-공개자료와-내부검토는-어디서-갈리나]] | 공개·확정 자료와 내부검토·잠정액·협상전략 멈춤선 |

## 전입자 판단 순서

1. 요청 원문을 요약하기 전에 요청자, 양식, 제출기한, 회신 경로를 먼저 적는다.
2. 접수물을 예산요구, 조정 협의, 집행변경, 국회/의회 설명자료, 민원성 요구자료 중 하나로 표시한다.
3. 수치는 예산서·결산서·공식 보도자료·공식 누리집 등 공개·확정 원천으로만 답변 후보에 둔다.
4. 근거묶음은 공개 가능 수치, 담당 확인 필요, 내부검토, 미확정 예산안, 제외자료 다섯 칸으로 나눈다.
5. 협의가 필요한 항목은 담당부서, 회신기한, 보완요청, 국회 제출 여부, 다음 확인일을 추적 로그에 남긴다.
6. 국회·의회 설명자료는 제출용 확정 수치와 배경 설명만 남기고, 협상전략·예상질의·내부검토·잠정액은 공개 문안에서 제거한다.
7. 외부 공유 전에는 [[quality-gate-예산대응-onboarding-refresh-2026-05-07]]와 [[checklist-예산대응-요구자료-제출전검토]]를 통과한다.

## 노출 완료 기준

- [x] budget request intake가 단독 진입점으로 보인다.
- [x] adjustment/execution-change classification이 예산요구·조정·집행변경·설명자료를 분리한다.
- [x] evidence bundle이 공개 확정자료와 내부검토·미확정 예산안을 분리한다.
- [x] coordination/deadline tracking이 담당·기한·보완·후속상태를 기록한다.
- [x] National Assembly explanation materials가 제출용 설명과 비공개 전략을 나눈다.
- [x] disclosure boundary가 미확정 수치와 협의 전략을 외부 문안에서 제거한다.
- [x] docs/index.html과 docs/gates.json에서 section/coverage/quality/manifest로 재탐색할 수 있다.

## 공개 금지선

- 미확정 예산안, 잠정액, 협의 중 산출내역, 삭감·증액 대응전략
- 내부 검토의견, 부처 간 비공개 협의, 국회·감사 대응전략, 예상질의·답변 전략
- 개인정보, 업체별 가격·제안·평가·영업비밀, 입찰 전 검토자료
- 공개 원천으로 대조되지 않은 예산액·집행액·단가·물량
