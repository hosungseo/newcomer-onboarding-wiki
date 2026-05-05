# Coverage — 전입자 walkthrough 시나리오 v1 2026-05

## 목적
v1 release candidate 이후 실제 전입자 질문을 end-to-end로 따라갈 수 있는 walkthrough 묶음의 현재 완성도와 다음 빈칸을 보인다. 단순 note 목록이 아니라 `상황 → 업무축 → 자료/초안 → checklist → 공개/비공개 멈춤선` 순서가 살아 있는지 확인한다.

## 현재 walkthrough 묶음
- [[section-전입자-walkthrough-시나리오-v1-2026-05]]
- [[walkthrough-전입자-시나리오-국회감사민원-대외전환-2026-05]] — 현장소통 자료가 국회·감사·민원 대응으로 전환되는 교차 상황.
- [[walkthrough-전입자-시나리오-정보공개청구-첫검토-2026-05]] — 정보공개청구 첫 검토에서 공개자료/내부검토자료/민감정보 경계를 확인하는 상황.
- [[walkthrough-전입자-시나리오-예산시즌-자료요구-2026-05]] — 예산 시즌 자료요구에서 수치 기준과 제출 전 멈춤선을 확인하는 상황.
- [[walkthrough-전입자-시나리오-보도자료초안-공개경계-2026-05]] — 보도자료 초안에서 공개 문장과 미확정 정보 경계를 확인하는 상황.
- [[walkthrough-전입자-시나리오-회의후속조치-공개전환-2026-05]] — 회의 후속조치가 공개 문장으로 전환되기 전 경계를 확인하는 상황.
- [[walkthrough-전입자-시나리오-민원폭주-반복답변경계-2026-05]] — 민원 폭주 상황에서 반복답변과 개인정보·사건정보 경계를 확인하는 상황.

## Coverage 판정
- [[quality-gate-전입자-walkthrough-시나리오-v1-2026-05]]
- [[manifest-newcomer-journey-walkthrough-v1-2026-05]]
- [[index-전입자-walkthrough-시나리오-v1-2026-05]]
- [x] 공통업무축 landing에서 진입 가능하다.
- [x] agent-readable catalog에서 시나리오 묶음으로 진입 가능하다.
- [x] release candidate에서 walkthrough 후보 상태를 확인할 수 있다.
- [x] 각 walkthrough는 최소 2개 이상 기존 note와 연결된다.
- [x] 각 walkthrough에는 공개/비공개 멈춤선이 있다.
- [x] walkthrough section과 quality gate는 README 계열 진입점(landing/release candidate)과 docs quick link에 노출됐다.
- [ ] docs index는 현재 quick link 노출은 되어 있으나, walkthrough 전용 section UI로는 아직 분리되지 않았다.

## 다음 후보
1. 언론 대응/홍보 질의 walkthrough는 [[walkthrough-전입자-시나리오-보도자료초안-공개경계-2026-05]]로 추가했다. 다음 후보는 장관 보고 또는 회의 후속조치 walkthrough다.
2. 회의 후속조치 walkthrough는 [[walkthrough-전입자-시나리오-회의후속조치-공개전환-2026-05]]로 추가했다. 다음 후보는 장관 보고 walkthrough다.
3. docs index를 `기관군 / 업무축 / 상황형 walkthrough / 품질검증 / agent-readable` 섹션으로 재배치한다.
4. walkthrough 6개는 [[manifest-agent-readable-catalog-v1-2026-05]]와 [[llms-newcomer-onboarding-v1]] 안에서 high-signal scenarios로 따로 묶었다. 다음 후보는 docs index UI의 section화다.

## Related
- [[release-candidate-전입자온보딩-v1-2026-05]]
- [[manifest-agent-readable-catalog-v1-2026-05]]
- [[llms-newcomer-onboarding-v1]]
- [[landing-전입자-공통업무축-2026-05]]

## 금지선
개인정보, 민원인 식별정보, 업체별 민감정보, 비공개 내부검토 의견, 미확정 정책안, 감사·조사·수사·보안 세부, 법률자문성 결론은 포함하지 않는다.
