---
title: 감사대응 자료제출경계 coverage
kind: coverage
status: draft
created: 2026-05-06
updated: 2026-05-07
audience: 감사대응·전입자·agent·docs maintainer
scope: 감사 요구자료와 조치결과 공개본 실행 경계
confidentiality: public-only
---

# coverage — 감사대응 자료제출경계

## 한 줄 요약

감사대응 route는 **자료요구·사실확인·지적사항·후속조치 첫 구분 → evidence bundle 구성 → 공개/비공개/감사정보 경계 확인 → 제출·후속추적**으로 움직인다. docs/landing에 노출할 때는 사람이 먼저 읽는 coverage에서 시작하고, agent 실행은 manifest로 넘기며, 제출 직전에는 quality gate로 막는다.

## route 구성

| 단계 | 기존 노트 | 역할 |
|---|---|---|
| walkthrough | [[walkthrough-감사대응-전입자-라우터-2026-05]] | 감사 요구를 기관·상황·업무축·자료·초안/체크리스트 순서로 나눈다. |
| FAQ | [[faq-감사대응-전입자-첫구분-자료요구-사실확인-처분요구-후속조치-2026-05]] | 자료요구·사실확인·지적사항/처분요구·후속조치 중 무엇인지 먼저 나눈다. |
| FAQ | [[faq-감사대응-자료제출은-어디까지-하나]] | 감사 요구자료 제출 가능 범위와 멈춤선을 확인한다. |
| FAQ | [[faq-감사대응-조치결과-이행은-어떻게-정리하나]] | 처분요구·조치결과 이행 상태와 증빙 범위를 정리한다. |
| source | [[source-정보공개기록관리-공개자료-대조순서]] | 공개자료와 내부검토를 분리하는 공통 원천 대조 순서다. |
| source | [[source-감사대응-답변초안전-증거묶음-2026-05]] | 요구 원문, 공개·확정 원천, 담당 확인, 감사정보 보류, 제외자료를 evidence bundle로 묶는다. |
| source | [[source-감사대응-증거원천-우선순위-대조순서]] | 감사 요구자료의 증거 원천 우선순위와 확인 필요 표시를 고정한다. |
| FAQ | [[faq-감사대응-공개비공개-경계와-마스킹은-어디서-멈추나]] | 공개본 마스킹·비공개 범주·별도 확인 지점을 재확인한다. |
| shared process | [[process-감사국회대응-초안공개답변-분기흐름]] | 감사와 국회가 겹치는 자료요구를 공개답변/내부검토/확인요청으로 분기한다. |
| shared checklist | [[checklist-감사국회대응-제출전-precheck]] | 감사·국회 공통 제출 직전의 개인정보·비공개 협의·미확정 사실을 걸러낸다. |
| process/checklist | [[process-감사대응-요청접수-제출후속조치-log-2026-05-07]] | 요청접수, 제출 묶음, 확인 필요, 조치/후속 owner, 완료 증빙, 다음 점검을 추적한다. |
| checklist | [[checklist-감사대응-자료제출-조치결과-제출전검토]] | 제출 전 개인정보·내부검토·감사/징계/수사/보안 세부와 감사정보 멈춤선을 걸러낸다. |
| discovery | [[coverage-execution-boundary-routes-discovery-2026-05]] | 실행경계 묶음 안에서 감사 route의 노출명과 삼각형 완성도를 확인한다. |
| manifest | [[manifest-newcomer-journey-감사대응-자료제출경계-2026-05]] | agent-readable route와 branch/stop line을 고정한다. |
| quality gate | [[quality-gate-감사대응-자료제출경계-2026-05]] | 공개 공유·초안 제출·agent 결과 수락 직전의 마지막 검증이다. |

## docs/landing 노출 권장명

- 노출명: `감사대응 자료제출경계`
- 권장 순서: coverage → walkthrough → 첫구분 FAQ → evidence bundle source → submission/follow-up tracking → public/private/audit-info checklist → discovery → manifest → quality gate
- landing 카드 문구: “감사 요구자료와 조치결과를 공개·확정자료 기준으로 정리하고, 개인정보·내부검토·감사/징계/수사/보안 세부를 제출본에서 분리한다.”

## 완성도 체크

- [x] 전입자 첫 판단용 walkthrough가 있다.
- [x] 자료요구/사실확인/지적사항/후속조치 첫구분 FAQ, 자료제출 범위 FAQ, 조치결과 이행 FAQ가 있다.
- [x] 공개자료/내부검토 분리 source, 감사 evidence bundle source, 감사 증거원천 source가 연결되어 있다.
- [x] 감사·국회 공통 분기 process/checklist로 중복 자료요구 route가 두꺼워졌다.
- [x] 제출/follow-up tracking checklist와 제출 전 public/private/audit-info checklist가 있다.
- [x] manifest와 quality gate가 서로 이 coverage를 참조한다.
- [x] docs/landing 노출명과 순서를 사람 읽기 기준으로 정했다.
- [x] discovery coverage에 같은 route명으로 묶여 있어 section-level 노출과 충돌하지 않는다.

## stop lines

- 민원인·신고자·피조사자·담당자 연락처 등 개인 식별정보는 원문 또는 요약에 남기지 않는다.
- 감사 착안점, 조사기법, 징계위원회 자료, 수사 의뢰·진행상황, 보안 취약점 세부는 별도 권한 확인 전 제출본에서 제외한다.
- 책임소재 검토, 법무·감사 협의 메모, 내부 대응전략, 미확정 조치계획은 완료 증빙처럼 쓰지 않는다.
- 공개 원문·확정자료 근거가 없으면 “확인 필요”로 남긴다.
