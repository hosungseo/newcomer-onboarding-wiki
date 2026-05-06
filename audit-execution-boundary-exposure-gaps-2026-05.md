---
title: 실행경계 노출 gap audit
kind: audit
status: draft
created: 2026-05-06
updated: 2026-05-06
audience: maintainer·agent
scope: README/docs index/landing 노출 전 점검
confidentiality: public-only
---

# 실행경계 노출 gap audit — 2026-05

## 한 줄 결론

최근 실행경계 제품군은 root 노트로는 존재하지만 README, `docs/index.html`, `landing-*` 진입면에는 아직 직접 노출되지 않았다. 다음 노출 작업은 기존 문서를 수정하기 전에 아래 exact notes를 우선순위대로 연결하면 된다.

## 다음에 노출할 existing notes

1. [[coverage-조직정원-실행경계-2026-05]] — 조직정원 공개자료 경로와 비공개 내부검토 멈춤선을 묶은 coverage.
2. [[quality-gate-조직정원-실행경계-2026-05]] — 조직정원 실행 전 stop line으로 쓸 quality gate.
3. [[manifest-newcomer-journey-조직정원-실행경계-2026-05]] — 조직정원 실행경계 agent-readable route.
4. [[coverage-계약조달-실행경계-2026-05]] — 예산대응·계약조달 실행경계 coverage.
5. [[quality-gate-계약조달-실행경계-2026-05]] — 예산·계약·조달 공개자료 기반 실행 전 검증.
6. [[manifest-newcomer-journey-계약조달-실행경계-2026-05]] — 계약조달 실행경계 agent-readable route.
7. [[checklist-계약조달-공개비공개-실행경계]] — 계약조달 공개/비공개 판정 체크리스트.

## 추천 노출 순서

- README: `coverage`와 `quality gate` 4개를 먼저 요약 링크로 노출한다.
- `docs/index.html`: 조직정원 묶음과 계약조달 묶음 아래에 `coverage → manifest → quality gate → checklist` 순서로 추가한다.
- `landing-*`: 전입자 공통업무축 landing 또는 실행경계 관련 landing이 있을 경우, 조직정원/계약조달 카드의 하위 링크로 붙인다.

## privacy / sensitive stop lines

- 조직정원: 개인별 보직·평정·고충·징계·복무·건강·가족 사정, 직급별 세부 배치, 결원·충원전략, 정원 협의·조정 내부검토, 미확정 조직개편안은 공개 노출 금지.
- 계약조달·예산: 미확정 예산안·잠정액, 삭감·증액 대응전략, 업체별 제안·가격·원가·영업비밀·기술자료, 예정가격 산정 세부, 평가위원 논의, 공고 전 초안·낙찰 전망은 공개 노출 금지.
- 공통: 공개 원문·확정자료 근거가 없으면 단정하지 말고 “확인 필요”로 남긴다.

## 이번 audit에서 하지 않은 일

- README.md, `docs/index.html`, `landing-*`, graph/data는 수정하지 않았다.
- commit/push는 하지 않았다.
