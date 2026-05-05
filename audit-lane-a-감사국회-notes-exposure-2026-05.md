# audit — 감사국회 notes exposure 2026-05

## 목적
감사대응·국회대응 자료제출/자료요구 경계 노트가 coverage, manifest, quality gate에서 끊기지 않고 발견되는지 재확인한다.

## 확인한 route
- 감사 자료제출: [[coverage-감사대응-자료제출경계-2026-05]] → [[manifest-newcomer-journey-감사대응-자료제출경계-2026-05]] → [[quality-gate-감사대응-자료제출경계-2026-05]]
- 국회 자료요구: [[coverage-국회대응-자료요구경계-2026-05]] → [[manifest-newcomer-journey-국회대응-자료요구경계-2026-05]] → [[quality-gate-국회대응-자료요구경계-2026-05]]
- 공통 진입: [[section-execution-boundary-routes-2026-05]] / [[coverage-execution-boundary-routes-discovery-2026-05]]

## 판단
- coverage와 manifest는 감사 자료제출·국회 자료요구 route를 모두 노출한다.
- 국회 quality gate는 [[walkthrough-국회대응-전입자-라우터-2026-05]] 직접 링크를 포함해 전입자 route를 검증한다.
- README/docs/landing 직접 노출은 고수준 route-map을 통해 처리하고, 세부 감사·국회 route는 section과 coverage에서 내려가게 둔다.

## 멈춤선
감사·국회 route에는 개인정보, 비공개 내부검토, 감사·수사·징계·보안 정보, 의원실 비공개 협의 경위를 공개문안으로 확정하는 표현을 넣지 않는다.
