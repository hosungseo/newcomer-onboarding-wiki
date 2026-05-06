# Quality Gate — 민원대응·성과평가 실행경계 2026-05

## 목적
민원대응과 성과평가가 같은 설명자료에 걸릴 때 민원 처리 사실과 평가용 문안 경계를 안전하게 확인한다.

## 검사 대상
- [[coverage-민원대응-성과평가-실행경계-2026-05]]
- [[manifest-newcomer-journey-민원대응-성과평가-실행경계-2026-05]]
- [[router-민원대응-성과평가-실행경계-2026-05]]
- [[release-note-민원대응-성과평가-실행경계-2026-05]]
- [[coverage-민원대응-공통업무축-2026-05]]
- [[quality-gate-성과평가-2026-05]]

## Gate 1 — 발견성
- [x] router, coverage, manifest가 서로 연결되는가?
- [x] 민원대응과 성과평가 각각의 coverage/quality로 내려갈 수 있는가?
- [x] README/landing/docs 노출은 router 또는 coverage entry를 통해 가능한가?

## Gate 2 — 안전성
- [x] 확정된 민원 처리 실적과 민원인 개인정보·개별 사건 원문을 분리하는가?
- [x] 미확정 답변안, 내부 검토, 감사·수사 관련 정보를 성과 문안으로 옮기지 않는가?
- [x] 성과 설명이 개별 민원 판단이나 권리구제 결과를 사후적으로 확정한 것처럼 보이지 않는가?

## Gate 3 — 마무리 audit
- [x] [[audit-민원대응-성과평가-실행경계-final-2026-05]]가 router, coverage, manifest, quality, release note, 공개 진입점을 확인하는가?

## 판정
전용 entry는 민원대응과 성과평가가 섞일 때 공개 가능한 민원 처리 사실과 보호해야 할 개인정보·사건 민감정보를 분리하기 위한 실행경계 alias로 유지한다.
