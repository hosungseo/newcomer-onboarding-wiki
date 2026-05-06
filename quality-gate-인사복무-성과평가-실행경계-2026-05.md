# Quality Gate — 인사복무·성과평가 실행경계 2026-05

## 목적
인사복무와 성과평가가 같은 설명자료에 걸릴 때 인사복무 자료와 평가용 문안 경계를 안전하게 확인한다.

## 검사 대상
- [[coverage-인사복무-성과평가-실행경계-2026-05]]
- [[manifest-newcomer-journey-인사복무-성과평가-실행경계-2026-05]]
- [[router-인사복무-성과평가-실행경계-2026-05]]
- [[release-note-인사복무-성과평가-실행경계-2026-05]]
- [[coverage-인사복무-공통업무축-2026-05]]
- [[quality-gate-성과평가-2026-05]]

## Gate 1 — 발견성
- [x] router, coverage, manifest가 서로 연결되는가?
- [x] 인사복무와 성과평가 각각의 coverage/quality로 내려갈 수 있는가?
- [x] README/landing/docs 노출은 router 또는 coverage entry를 통해 가능한가?

## Gate 2 — 안전성
- [x] 공개 가능한 집계 실적과 개인별 근무상황·평정자료를 분리하는가?
- [x] 징계·감사·고충, 건강·가족 등 민감정보를 성과 문안으로 옮기지 않는가?
- [x] 인사복무 개선 효과를 개인 사례가 아니라 익명·집계 기준으로만 설명하는가?

## Gate 3 — 마무리 audit
- [x] [[audit-인사복무-성과평가-실행경계-final-2026-05]]가 router, coverage, manifest, quality, release note, 공개 진입점을 확인하는가?

## 판정
전용 entry는 인사복무와 성과평가가 섞일 때 공개 가능한 집계 실적과 보호해야 할 개인별 자료·민감정보·비공개 인사검토를 분리하기 위한 실행경계 alias로 유지한다.
