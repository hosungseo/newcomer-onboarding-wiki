---
title: 조직정원 onboarding refresh quality gate
kind: quality-gate
status: draft
created: 2026-05-07
updated: 2026-05-07
audience: 조직정원·전입자·agent
scope: 조직정원 onboarding refresh route 검증
confidentiality: public-only
---

# quality gate — 조직정원 onboarding refresh

## 판정

**통과 가능.** refresh route는 조직개편 intake, 정원조정, 직제·시행규칙 개정, 인력배치 boundary, evidence bundle, 협의·기한 tracking, 공개/인사민감 boundary를 모두 같은 경로에 노출한다. 단, 공개 설명은 확정·공표 자료와 공개 법령 원문 범위에서만 가능하다.

## 필수 경로 점검

- [x] section: [[section-조직정원-onboarding-refresh-2026-05-07]]가 refresh route 여섯 칸을 제공한다.
- [x] entry: [[newcomer-path-조직정원-공개경계]]가 조직정원 공개경계 기본 흐름을 제공한다.
- [x] boundary FAQ: [[faq-조직정원-첫구분-조직개편-정원조정-직제개정-인력배치]]가 조직개편·정원조정·직제개정·인력배치 요청을 먼저 분기한다.
- [x] legal/source check: [[source-조직정원-공개자료-대조순서]]가 직제·시행규칙 등 공개 원문 확인 순서를 제공한다.
- [x] evidence bundle: [[source-조직정원-검토메모-작성전-증거묶음]]이 공개 원천, 내부 확인, 제외자료, 담당자 질문을 분리한다.
- [x] coordination/deadline tracking: [[process-조직정원-요청접수-결정추적-log-2026-05]]가 협의 대상, 기한, 결정/보류, 다음 확인일을 기록한다.
- [x] disclosure/personnel-sensitive boundary: [[checklist-조직정원-boundary-router-공개문안-제출전검토-2026-05]]가 공개문안 전 인사민감정보와 내부검토를 멈춘다.
- [x] coverage: [[coverage-조직정원-onboarding-refresh-2026-05-07]]가 route exposure를 점검한다.
- [x] manifest: [[manifest-newcomer-journey-조직정원-onboarding-refresh-2026-05-07]]가 agent-readable route를 제공한다.

## 중지 조건

다음 중 하나라도 포함되면 **공개/제출 전 확인 요청**으로 전환한다.

- 확정·공표 전 조직개편안, 직제개정안, 정원 증감 시나리오
- 기관 간 정원 협의전략, 삭감/증원 요구 의견, 내부 쟁점표, 보고라인
- 개인별 보직·평정·고충·건강·가족·연락처·인사이력
- 결원관리, 충원 우선순위, 직급·부서별 세부 배치전략
- 공개 원문을 넘는 보안·조사·감독·감사·수사 관련 세부 인력운용
- 최종 법률자문처럼 보이는 직제 해석·권한 판단 단정

## 통과 기준

- 요청 유형이 조직개편, 정원조정, 직제·시행규칙 개정, 인력배치 중 무엇인지 표시되어 있다.
- 공개 원천, 내부 확인자료, 제외자료, 담당자 질문이 서로 다른 칸에 있다.
- 협의 대상, 회신기한, 보완요청, 결정/보류 사유, 다음 확인일이 tracking log에 있다.
- 공개 설명은 공개 조직도·직제·시행규칙·정원 총괄자료와 확정 사실로만 작성한다.

## 복사용 안전 문장

```text
이 설명은 공개 조직도·직제·시행규칙·정원 총괄자료와 확정된 사실에 한정한다. 미확정 조직개편안, 정원 협의전략, 세부 배치전략, 개인 인사정보는 제외한다.
```
