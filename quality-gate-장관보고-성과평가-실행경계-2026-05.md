# Quality Gate — 장관보고·성과평가 실행경계 2026-05

## 목적
장관보고와 성과평가가 같은 자료를 공유할 때, 설명자료와 평가판단의 공개/비공개 경계를 안전하게 확인한다.

## 검사 대상
- [[coverage-장관보고-성과평가-실행경계-2026-05]]
- [[manifest-newcomer-journey-장관보고-성과평가-실행경계-2026-05]]
- [[router-장관보고-성과평가-실행경계-2026-05]]
- [[release-note-장관보고-성과평가-실행경계-2026-05]]
- [[quality-gate-장관보고-2026-05]]
- [[quality-gate-성과평가-2026-05]]

## Gate 1 — 발견성
- [x] router, coverage, manifest가 서로 연결되는가?
- [x] 장관보고와 성과평가 각각의 coverage/quality로 내려갈 수 있는가?
- [x] README/landing/docs 노출은 router 또는 coverage entry를 통해 가능한가?

## Gate 2 — 안전성
- [x] 보고 설명이 성과평가 결론·점수·등급처럼 쓰이지 않는가?
- [x] 비공개 평가 기준, 위원회 발언, 내부 심의자료를 공개문안으로 전환하지 않는가?
- [x] 개인별 성과·인사자료·민감정보를 공개 route에 포함하지 않는가?

## Gate 3 — 마무리 audit
- [x] [[audit-장관보고-성과평가-실행경계-final-2026-05]]가 router, coverage, manifest, quality, release note, 공개 진입점을 확인하는가?

## 판정
전용 entry는 장관보고와 성과평가가 같은 근거를 공유할 때 설명과 판단을 분리하기 위한 실행경계 alias로 유지한다.
