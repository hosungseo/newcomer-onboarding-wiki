# Quality Gate — Institution Boundary Hub Expansion 2026-05

## 목적
기관군 section에서 시작한 boundary router가 핵심 업무 hub와 대응형 업무 hub까지 확장된 상태를 점검한다.

## Gate 1 — section coverage
- [x] [[coverage-institution-boundary-router-section-2026-05]]에서 대표 6개 기관군 section 연결을 확인할 수 있다.
- [x] [[manifest-institution-to-boundary-router-2026-05]]가 section→업무축 boundary 회귀 route를 제공한다.

## Gate 2 — core hub coverage
- [x] [[coverage-institution-boundary-core-hubs-2026-05]]에서 계약조달·조직정원·예산·민원대응·홍보대응·법령대응 hub 연결을 확인할 수 있다.
- [x] 각 core hub는 직접 민감정보를 설명하지 않고 boundary router로 짧게 회귀한다.

## Gate 3 — response hub coverage
- [x] 감사원·조달청 기관별 개별 hub에서 [[manifest-institution-to-boundary-router-2026-05]]로 회귀할 수 있다.
- [x] [[coverage-institution-boundary-response-hubs-2026-05]]에서 감사대응·국회대응·정보공개기록관리·협업회의운영 hub 연결을 확인할 수 있다.
- [x] 대응형 hub는 감사·국회·정보공개·회의 상황의 민감한 세부 대신 공개/비공개 경계 route로 회귀한다.

## Gate 4 — 실행 기준
- [x] [[faq-기관별-hub-boundary-router는-언제-직접-연결하나]]로 직접 연결 필요성을 판단할 수 있다.
- [x] [[checklist-institution-boundary-router-hub-selection-2026-05]]로 hub 선별 전 금지선을 점검할 수 있다.
- [x] [[process-institution-boundary-router-hub-linking-2026-05]]로 안전한 연결 절차를 확인할 수 있다.

## 다음 후보
- [[coverage-institution-boundary-agency-hubs-2026-05]] — 감사원·조달청 기관별 hub의 boundary router 직접 연결 coverage.
- 감사원, 조달청 등 기관별 개별 hub에서 직접 boundary router가 필요한지 선별한다.
- direct hub 연결이 충분하면 walkthrough/router에서 전입자 질문형 진입을 보강한다.

## 금지선
개인정보, 비공개 내부검토, 미확정 정책안, 업체별 민감정보, 법률자문성 결론, 감사·수사·보안 세부는 포함하지 않는다.
