# Quality Gate — 조직정원·예산대응 실행경계 2026-05

## 목적
조직정원과 예산대응이 같은 설명자료에 걸릴 때, 조직 판단과 재정 설명 경계를 안전하게 확인한다.

## 검사 대상
- [[coverage-조직정원-예산대응-실행경계-2026-05]]
- [[manifest-newcomer-journey-조직정원-예산대응-실행경계-2026-05]]
- [[router-조직정원-예산대응-실행경계-2026-05]]
- [[release-note-조직정원-예산대응-실행경계-2026-05]]
- [[quality-gate-조직정원-2026-05]]
- [[quality-gate-예산대응-공통업무축-2026-05]]

## Gate 1 — 발견성
- [x] router, coverage, manifest가 서로 연결되는가?
- [x] 조직정원과 예산대응 각각의 coverage/quality로 내려갈 수 있는가?
- [x] README/landing/docs 노출은 router 또는 coverage entry를 통해 가능한가?

## Gate 2 — 안전성
- [x] 확정 조직도, 정원표, 업무분장, 예산 수치, 추정치, 내부 검토안을 분리하는가?
- [x] 미확정 조직개편안, 정원 요구안, 다음 연도 예산 요구안을 확정 문장으로 쓰지 않는가?
- [x] 인사·노무 민감정보, 보직·평정·징계 관련 정보, 협의 중 금액을 과노출하지 않는가?

## Gate 3 — 마무리 audit
- [x] [[audit-조직정원-예산대응-실행경계-final-2026-05]]가 router, coverage, manifest, quality, release note, 공개 진입점을 확인하는가?

## 판정
전용 entry는 조직정원 설명이 예산 설명을 포함할 때 공개 가능한 확정 사실과 보호해야 할 내부 검토·민감정보를 분리하기 위한 실행경계 alias로 유지한다.
