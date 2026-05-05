# Coverage — execution boundary routes discovery 2026-05

## 목적
최근 실행경계 route-map이 README, landing, docs, agent catalog에서 서로 끊기지 않고 발견되는지 점검한다.

## 핵심 entry
- [[section-execution-boundary-routes-2026-05]] — 계약조달·조직정원·감사국회·민원법령·정보공개협업회의·홍보대외협력 실행경계 route-map.
- [[landing-전입자-공통업무축-2026-05]] — 전입자가 먼저 보는 공통업무축 landing.
- [[manifest-agent-readable-catalog-v1-2026-05]] — agent-readable catalog entry.
- [[audit-section-execution-boundary-route-map-exposure-2026-05]] — route-map 노출 audit.
- [[audit-boundary-duplicate-root-notes-2026-05]] — 중복 root note 정리 audit.
- [[quality-gate-execution-boundary-routes-discovery-2026-05]] — discovery 품질 gate.

## Discovery path
1. README 또는 docs/index.html에서 route-map을 찾는다.
2. [[section-execution-boundary-routes-2026-05]]에서 업무축별 실행경계 route를 고른다.
3. 세부 업무축 coverage/manifest/quality gate로 내려간다.
4. 중복 note가 보이면 삭제하지 않고 [[audit-boundary-duplicate-root-notes-2026-05]]에서 superseded 후보로만 표시한다.


## 2026-05-06 노출 확인
- README: `신규자 실행경계 route`에서 [[section-execution-boundary-routes-2026-05]], [[index-execution-boundary-route-aliases-2026-05]], 4개 교차 route-map으로 진입한다.
- landing: [[landing-전입자-공통업무축-2026-05]]는 긴 route chain을 접고 section/route-map 및 [[index-execution-boundary-route-aliases-2026-05]] 중심으로 진입시킨다.
- docs/index.html: 실행경계 quick-links에서 [[section-execution-boundary-routes-2026-05]], [[index-execution-boundary-route-aliases-2026-05]], 4개 route-map을 직접 노출한다.
- route-map bridge: [[section-execution-boundary-routes-2026-05]]의 landing bridge가 [[walkthrough-계약조달-조직정원-실행경계-라우트맵-2026-05]], [[walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05]], [[walkthrough-정보공개기록관리-협업회의-실행경계-라우트맵-2026-05]], [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]]로 내려간다.
- alias triangle: [[index-execution-boundary-route-aliases-2026-05]] → [[manifest-newcomer-journey-execution-boundary-route-aliases-2026-05]] → [[quality-gate-execution-boundary-route-aliases-2026-05]]가 README/landing/docs 삼각 노출을 기록한다.
- agent catalog: [[manifest-agent-readable-catalog-v1-2026-05]]의 Execution Boundary Route Map 섹션에서 alias index/manifest/quality gate를 직접 노출한다.

## 품질 기준
- placeholder wikilink 없이 실제 존재하는 note만 연결한다.
- docs/landing/README 노출은 공개 온보딩용 고수준 route만 다룬다.
- 실행경계 note는 개인정보·비공개 내부검토·미확정 정책안·감사/수사/징계/보안/업체 민감정보를 포함하지 않는다.
