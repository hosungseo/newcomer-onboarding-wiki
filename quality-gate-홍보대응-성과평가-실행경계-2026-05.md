# Quality Gate — 홍보대응·성과평가 실행경계 2026-05

## 목적
홍보대응과 성과평가가 같은 설명자료에 걸릴 때 홍보 문안과 평가용 문안 경계를 안전하게 확인한다.

## 검사 대상
- [[coverage-홍보대응-성과평가-실행경계-2026-05]]
- [[manifest-newcomer-journey-홍보대응-성과평가-실행경계-2026-05]]
- [[router-홍보대응-성과평가-실행경계-2026-05]]
- [[release-note-홍보대응-성과평가-실행경계-2026-05]]
- [[coverage-홍보대응-공통업무축-2026-05]]
- [[quality-gate-성과평가-2026-05]]

## Gate 1 — 발견성
- [x] router, coverage, manifest가 서로 연결되는가?
- [x] 홍보대응과 성과평가 각각의 coverage/quality로 내려갈 수 있는가?
- [x] README/landing/docs 노출은 router 또는 coverage entry를 통해 가능한가?

## Gate 2 — 안전성
- [x] 확정된 홍보 실적과 미공개 보도자료·엠바고 자료를 분리하는가?
- [x] 내부 메시지 전략, 미확정 수치, 개인정보·민감 사례를 성과 문안으로 옮기지 않는가?
- [x] 성과 설명이 홍보성 과장이나 기관 입장을 과도하게 확정한 것처럼 보이지 않는가?

## Gate 3 — 마무리 audit
- [x] [[audit-홍보대응-성과평가-실행경계-final-2026-05]]가 router, coverage, manifest, quality, release note, 공개 진입점을 확인하는가?

## 판정
전용 entry는 홍보대응과 성과평가가 섞일 때 공개 가능한 홍보 실적과 보호해야 할 미공개 메시지·민감 사례를 분리하기 위한 실행경계 alias로 유지한다.
