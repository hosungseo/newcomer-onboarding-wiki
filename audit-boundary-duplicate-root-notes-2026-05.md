# boundary duplicate root notes audit 2026-05

최근 실행경계 노트가 빠르게 늘어나면서 audit/coverage/manifest/quality gate가 역할별로 겹쳐 보이는 구간을 점검한다. 삭제보다 superseded 표시와 route-map 노출을 우선한다.

## 1순위 중복 후보

- audit-execution-boundary-exposure-gaps-2026-05
- audit-civil-legal-boundary-exposure-gaps-2026-05
- audit-감사국회-실행경계-노출gap-2026-05
- audit-정보공개협업회의-실행경계-노출gap-2026-05
- audit-홍보대응-대외협력현장소통-실행경계-노출gap-2026-05

## 권장 정리 순서

1. 종합 진입은 [[section-execution-boundary-routes-2026-05]]로 둔다.
2. 축별 audit는 삭제하지 말고 superseded 후보로 표시한다.
3. coverage/manifest/quality-gate는 역할이 다르므로 즉시 삭제하지 않는다.
4. docs 노출 순서는 coverage-execution-boundary-routes-discovery-2026-05와 [[manifest-agent-readable-catalog-v1-2026-05]]를 기준으로 맞춘다.

## 멈춤선

README, docs/index, landing, graph/data를 이 audit에서 직접 수정하지 않는다. 개인정보, 비공개 내부검토, 비공개 협의, 미확정 정책안은 외부 문안화하지 않는다.
