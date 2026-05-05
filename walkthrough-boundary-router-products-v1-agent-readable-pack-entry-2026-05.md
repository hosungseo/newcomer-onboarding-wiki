# Walkthrough — Boundary Router Products v1 Agent-readable Pack Entry 2026-05

## 목적
전입자나 agent가 boundary router products v1 자료를 읽을 때 agent-readable pack에서 human-facing 안내까지 이어지는 순서를 고정한다.

## 1. Agent-readable 시작점
- 먼저 [[manifest-boundary-router-products-v1-agent-readable-pack-2026-05]]에서 pack 범위를 확인한다.
- 다음으로 [[index-boundary-router-products-v1-agent-readable-pack-2026-05]]에서 entrypoint와 control 문서를 찾는다.
- release 여부는 [[release-candidate-boundary-router-products-v1-agent-readable-pack-2026-05]]로 확인한다.

## 2. 품질·노출 확인
- [[quality-gate-boundary-router-products-v1-agent-readable-pack-2026-05]]로 entrypoint/control/safety gate를 확인한다.
- [[coverage-boundary-router-products-v1-agent-readable-pack-2026-05]]와 [[coverage-boundary-router-products-v1-agent-readable-pack-release-2026-05]]로 docs/catalog 노출을 확인한다.

## 3. Human-facing 전환
- 전입자 안내는 [[landing-boundary-router-products-v1-2026-05]]로 넘긴다.
- 실제 탐색 순서는 [[walkthrough-boundary-router-products-v1-entry-2026-05]]에서 `기관 → 상황 → 업무축 → 자료 → 초안/체크리스트 → 공개/비공개 경계`로 안내한다.
- 섹션 단위 노출은 [[section-boundary-router-products-v1-2026-05]]로 확인한다.

## 멈춤선
개인정보, 비공개 내부검토, 미확정 정책안, 인사·감사·징계·수사·보안·업체 민감정보, 법률자문성 결론이 필요해 보이면 공개 문안 생성을 멈추고 [[manifest-institution-to-boundary-router-2026-05]]로 회귀한다.
