---
title: 국회대응 자료요구경계 coverage
kind: coverage
status: draft
created: 2026-05-06
updated: 2026-05-07
audience: 국회대응·전입자·agent·docs maintainer
scope: 국회 자료요구 답변 공개자료 기반 실행 경계
confidentiality: public-only
---

# coverage — 국회대응 자료요구경계

## 한 줄 요약

국회대응 route는 **요구 원문 고정 → 소관·기한 확인 → 공개·확정자료 대조 → 비공개 협의·내부검토 분리 → 답변 문장화 → 담당 확인**으로 움직인다. docs/landing에는 “국회대응 자료요구경계”라는 이름으로 묶고, coverage에서 사람용 판단을 시작한 뒤 manifest와 quality gate로 agent 실행·수락을 통제한다.

## route 구성

| 단계 | 기존 노트 | 역할 |
|---|---|---|
| section | [[section-국회대응-onboarding-coverage-2026-05-07]] | 의원실 자료요구·서면질의·국감/상임위·현안보고 onboarding 네 칸을 한 화면에 묶는다. |
| walkthrough | [[walkthrough-국회대응-전입자-라우터-2026-05]] | 국회 자료요구를 요구 원문·소관·기한·업무축·자료·답변 초안 순서로 나눈다. |
| boundary FAQ | [[faq-국회대응-전입자-첫구분-자료요구-서면질의-국감상임위-현안보고-2026-05]] | 의원실 자료요구, 서면질의, 국감/상임위 요구, 현안보고를 제출 전 첫 분기로 나눈다. |
| evidence bundle | [[source-국회대응-답변메모-작성전-증거묶음-2026-05]] | 요구 원문, 제출기한, 공개·확정 원천, 내부 확인 필요, 제외 자료를 답변 작성 전에 분리한다. |
| source | [[source-국회대응-자료요구-답변초안-대조순서]] | 요구 문장, 공개 가능한 확정 사실, 비공개 협의·내부검토 경계를 대조한다. |
| process | [[process-국회대응-자료요구-답변작성흐름]] | 답변 작성 흐름과 stop line을 순서화한다. |
| FAQ | [[faq-국회대응-공개답변과-비공개협의는-어디서-나누나]] | 공개 제출 답변과 의원실·상임위 비공개 협의의 분리 기준을 확인한다. |
| shared process | [[process-감사국회대응-초안공개답변-분기흐름]] | 감사와 국회가 겹치는 자료요구를 공개답변/내부검토/확인요청으로 분기한다. |
| shared checklist | [[checklist-감사국회대응-제출전-precheck]] | 감사·국회 공통 제출 직전의 개인정보·비공개 협의·미확정 사실과 국회 제출 전용/일반공개 경계를 걸러낸다. |
| 예산 branch | [[source-예산대응-공개자료-대조순서]] | 예산·사업 수치의 기준일·단위·회계 구분을 맞춘다. |
| 예산 checklist | [[checklist-예산대응-요구자료-제출전검토]] | 요구자료 제출 전 공개/비공개·수치·원천 검토를 빌려 쓴다. |
| 정보공개 FAQ | [[faq-정보공개-공개비공개-경계는-어디서-나누나]] | 공개·비공개 판단 기준을 확인한다. |
| discovery | [[coverage-execution-boundary-routes-discovery-2026-05]] | 실행경계 묶음 안에서 국회 route의 노출명과 삼각형 완성도를 확인한다. |
| manifest | [[manifest-newcomer-journey-국회대응-자료요구경계-2026-05]] | agent-readable route와 branch/stop line을 고정한다. |
| quality gate | [[quality-gate-국회대응-자료요구경계-2026-05]] | 공개 공유·답변 제출·agent 결과 수락 전 마지막 검증이다. |

## docs/landing 노출 권장명

- 노출명: `국회대응 자료요구경계`
- 권장 순서: coverage → walkthrough → source → process → 국회 FAQ → shared process/checklist → 예산 branch/checklist → 정보공개 FAQ → discovery → manifest → quality gate
- landing 카드 문구: “국회 자료요구 답변을 공개·확정자료 기준으로 작성하고, 비공개 협의·내부검토·미확정 정책·예산과 개인정보를 답변 본문에서 분리한다.”

## 완성도 체크

- [x] 전입자 첫 판단용 onboarding section과 walkthrough가 있다.
- [x] 의원실자료요구·서면질의·국감상임위·현안보고 boundary가 연결되어 있다.
- [x] 답변메모 작성 전 evidence bundle이 연결되어 있다.
- [x] 자료요구 답변초안 source가 있다.
- [x] 답변작성 process가 있다.
- [x] 국회 공개답변/비공개협의 FAQ가 연결되어 있다.
- [x] 감사·국회 공통 분기 process/checklist로 중복 자료요구 route가 두꺼워졌다.
- [x] 예산 요구자료 branch와 정보공개 boundary가 연결되어 있다.
- [x] manifest와 quality gate가 서로 이 coverage를 참조한다.
- [x] docs/landing 노출명과 순서를 사람이 읽을 수 있게 정했다.
- [x] discovery coverage에 같은 route명으로 묶여 있어 section-level 노출과 충돌하지 않는다.

## stop lines

- 의원실·상임위와 비공개로 조율한 문안, 구두 설명 내용, 질의 대응전략, 예상 Q&A는 공식 제출 답변과 분리한다.
- 개인정보·식별 가능 사례, 감사·징계·수사·보안 세부, 내부검토·협의 중 문안은 답변 본문에 넣지 않는다.
- 검토 중 정책안, 잠정 수치, 미공표 일정, 확정 전 조직·정원·예산안은 확정 사실처럼 쓰지 않는다.
- 타 기관 소관을 우리 부 결론처럼 단정하지 않는다.
