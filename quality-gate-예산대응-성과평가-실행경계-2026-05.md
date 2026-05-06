# Quality Gate — 예산대응·성과평가 실행경계 2026-05

## 목적
예산대응과 성과평가가 같은 수치와 설명자료를 공유할 때, 예산 단계와 평가 판단의 경계를 안전하게 확인한다.

## 검사 대상
- [[coverage-예산대응-성과평가-실행경계-2026-05]]
- [[manifest-newcomer-journey-예산대응-성과평가-실행경계-2026-05]]
- [[router-예산대응-성과평가-실행경계-2026-05]]
- [[release-note-예산대응-성과평가-실행경계-2026-05]]
- [[quality-gate-예산대응-공통업무축-2026-05]]
- [[quality-gate-성과평가-2026-05]]

## Gate 1 — 발견성
- [x] router, coverage, manifest가 서로 연결되는가?
- [x] 예산대응과 성과평가 각각의 coverage/quality로 내려갈 수 있는가?
- [x] README/landing/docs 노출은 router 또는 coverage entry를 통해 가능한가?

## Gate 2 — 안전성
- [x] 편성 요구, 확정 예산, 집행 실적, 결산·정산 단계를 섞지 않는가?
- [x] 성과 설명을 평가 점수·등급·순위처럼 쓰지 않는가?
- [x] 비공개 편성 전략, 삭감 대응논리, 내부 평가 기준, 업체 민감정보를 제외하는가?

## Gate 3 — 마무리 audit
- [x] [[audit-예산대응-성과평가-실행경계-final-2026-05]]가 router, coverage, manifest, quality, release note, 공개 진입점을 확인하는가?

## 판정
전용 entry는 예산 수치와 성과 설명이 같은 사안에 묶일 때 공개 확정 수치와 평가 판단을 분리하기 위한 실행경계 alias로 유지한다.
