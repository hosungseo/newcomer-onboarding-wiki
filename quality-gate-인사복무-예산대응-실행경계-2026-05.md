# Quality Gate — 인사복무·예산대응 실행경계 2026-05

## 목적
인사복무와 예산대응이 같은 설명자료에 걸릴 때 인사정보와 재정 설명 경계를 안전하게 확인한다.

## 검사 대상
- [[coverage-인사복무-예산대응-실행경계-2026-05]]
- [[manifest-newcomer-journey-인사복무-예산대응-실행경계-2026-05]]
- [[router-인사복무-예산대응-실행경계-2026-05]]
- [[release-note-인사복무-예산대응-실행경계-2026-05]]
- [[quality-gate-인사복무-2026-05]]
- [[quality-gate-예산대응-공통업무축-2026-05]]

## Gate 1 — 발견성
- [x] router, coverage, manifest가 서로 연결되는가?
- [x] 인사복무와 예산대응 각각의 coverage/quality로 내려갈 수 있는가?
- [x] README/landing/docs 노출은 router 또는 coverage entry를 통해 가능한가?

## Gate 2 — 안전성
- [x] 확정·공개된 제도 기준과 개인별 인사·복무 정보를 분리하는가?
- [x] 총액·집행 기준과 내부 인력운영 검토·미확정 예산 요구안을 구분하는가?
- [x] 개인별 근무·수당·평정·징계·복무 이력, 개인정보를 과노출하지 않는가?

## Gate 3 — 마무리 audit
- [x] [[audit-인사복무-예산대응-실행경계-final-2026-05]]가 router, coverage, manifest, quality, release note, 공개 진입점을 확인하는가?

## 판정
전용 entry는 인사복무 제도 설명과 예산 집행 설명이 섞일 때 공개 가능한 확정 사실과 보호해야 할 인사·재정 민감정보를 분리하기 위한 실행경계 alias로 유지한다.
