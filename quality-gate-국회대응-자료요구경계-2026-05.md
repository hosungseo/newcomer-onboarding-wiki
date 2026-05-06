---
title: 국회대응 자료요구경계 quality gate
kind: quality-gate
status: draft
created: 2026-05-06
updated: 2026-05-07
audience: 국회대응·전입자·agent·reviewer
scope: 국회 자료요구 답변 공개 공유·제출 전 검증
confidentiality: public-only
---

# quality gate — 국회대응 자료요구경계

## 통과 조건

- [ ] [[section-국회대응-onboarding-coverage-2026-05-07]]에서 의원실 자료요구, 서면질의, 국감/상임위 요구, 현안보고 중 어느 흐름인지 먼저 분기했다.
- [ ] 요구 원문, 의원실·상임위, 요구일, 제출기한, 요구 항목 번호, 제출 형식이 보존되어 있다.
- [ ] [[source-국회대응-답변메모-작성전-증거묶음-2026-05]]에 따라 요구 원문, 공개·확정 원천, 확인 필요, 제외 자료, 제출 전용 자료를 분리했다.
- [ ] [[source-국회대응-자료요구-답변초안-대조순서]]에 따라 요구 원문, 소관, 공개·확정 원천, 제외·확인 필요를 분리했다.
- [ ] [[process-국회대응-자료요구-답변작성흐름]]에 따라 요구 항목 번호와 답변 번호가 맞는다.
- [ ] 공개·비공개 판단은 [[faq-정보공개-공개비공개-경계는-어디서-나누나]] 기준을 따른다.
- [ ] 국회 공개답변과 비공개 협의는 [[faq-국회대응-공개답변과-비공개협의는-어디서-나누나]] 기준으로 분리했다.
- [ ] 감사·국회 중복 자료요구는 [[process-감사국회대응-초안공개답변-분기흐름]]으로 공개답변/내부검토/확인요청을 분기했다.
- [ ] 제출 전 공통 점검은 [[checklist-감사국회대응-제출전-precheck]]를 통과했고, 일반 공개자료와 국회 제출 전용 자료를 구분했다.
- [ ] 예산·사업 수치가 있으면 [[source-예산대응-공개자료-대조순서]]와 [[checklist-예산대응-요구자료-제출전검토]]를 통과했다.
- [ ] agent 실행 route는 [[manifest-newcomer-journey-국회대응-자료요구경계-2026-05]]와 일치한다.
- [ ] 실제 노출면은 [[section-execution-boundary-routes-2026-05]]의 국회대응 행과 [[coverage-execution-boundary-routes-discovery-2026-05]]의 route 묶음이며, README.md·`docs/index.html`·landing에는 아직 직접 노출된 것으로 표시하지 않는다.
- [ ] 노출 순서는 현재 route root 기준 walkthrough → coverage → manifest → quality gate이고, 국회 실행 세부는 coverage/manifest 안에서 source → process → 국회 FAQ → shared process/precheck → 예산 branch/checklist 순서로 들어간다.
- [ ] 노출명은 [[coverage-execution-boundary-routes-discovery-2026-05]]와 같은 `국회대응 자료요구경계`를 사용한다.

## 실패 조건

- [ ] 의원실·상임위 비공개 협의문안, 구두 설명, 질의 대응전략, 예상 Q&A가 공식 제출 답변에 섞였다.
- [ ] 개인정보·식별 가능 사례, 감사·징계·수사·보안 세부가 답변 본문에 남아 있다.
- [ ] 검토 중 정책안, 잠정 수치, 미공표 일정, 확정 전 조직·정원·예산안이 확정 사실처럼 쓰였다.
- [ ] 타 기관 소관을 우리 부 결론처럼 단정했다.
- [ ] 공개 원문·확정자료 근거 없이 평가·책임판단 문장이 들어갔다.
- [ ] 국회 route에서 감사 착안점·조사기법·조치 미확정 내용을 답변 근거처럼 재사용했다.
- [ ] README/docs/landing 노출 문구에 의원실·상임위 비공개 협의문안, 구두 설명, 예상 Q&A, 질의 대응전략, 내부 보고라인별 쟁점 메모를 공식 제출 답변처럼 적었다.

## 노출 판정

- 실제 노출됨: `docs/index.html`, `docs/gates.json`, [[section-국회대응-onboarding-coverage-2026-05-07]], [[section-execution-boundary-routes-2026-05]] 국회대응 행, [[coverage-execution-boundary-routes-discovery-2026-05]] route 묶음.
- 아직 직접 노출로 쓰지 않음: README.md, [[landing-전입자-공통업무축-2026-05]]. 이 lane에서는 docs/index.html 직접 노출을 완료했고 README/landing은 건드리지 않는다.
- 노출 보류: source/process가 빠졌거나, 비공개 협의·내부검토 stop line을 세부 내용으로 노출했다.
- 권장 표시명: `국회대응 자료요구경계`.

## 관련 노트

- [[section-국회대응-onboarding-coverage-2026-05-07]]
- [[coverage-국회대응-자료요구경계-2026-05]]
- [[manifest-newcomer-journey-국회대응-자료요구경계-2026-05]]
- [[faq-국회대응-전입자-첫구분-자료요구-서면질의-국감상임위-현안보고-2026-05]]
- [[source-국회대응-답변메모-작성전-증거묶음-2026-05]]
- [[source-국회대응-자료요구-답변초안-대조순서]]
- [[process-국회대응-자료요구-답변작성흐름]]
- [[faq-국회대응-공개답변과-비공개협의는-어디서-나누나]]
- [[process-감사국회대응-초안공개답변-분기흐름]]
- [[checklist-감사국회대응-제출전-precheck]]
- [[coverage-execution-boundary-routes-discovery-2026-05]]
- [[section-execution-boundary-routes-2026-05]]
