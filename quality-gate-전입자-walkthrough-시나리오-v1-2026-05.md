# Quality Gate — 전입자 walkthrough 시나리오 v1 2026-05

## 목적
상황형 walkthrough 묶음이 공개 온보딩 위키에서 안전하게 쓰일 수 있는지, 전입자가 `상황 → 업무축 → 자료/초안 → checklist → 공개/비공개 멈춤선` 순서로 길을 잃지 않는지 점검한다.

## 점검 대상
- [[section-전입자-walkthrough-시나리오-v1-2026-05]]
- [[manifest-newcomer-journey-walkthrough-v1-2026-05]]
- [[index-전입자-walkthrough-시나리오-v1-2026-05]]
- [[coverage-전입자-walkthrough-시나리오-v1-2026-05]]
- [[walkthrough-전입자-시나리오-국회감사민원-대외전환-2026-05]]
- [[walkthrough-전입자-시나리오-정보공개청구-첫검토-2026-05]]
- [[walkthrough-전입자-시나리오-예산시즌-자료요구-2026-05]]
- [[walkthrough-전입자-시나리오-보도자료초안-공개경계-2026-05]]

## Gate
- [x] 각 walkthrough는 최소 2개 이상의 기존 note와 연결된다.
- [x] 각 walkthrough는 관련 hub/path 또는 landing에서 진입할 수 있다.
- [x] 각 walkthrough는 checklist 또는 quality gate로 내려간다.
- [x] 각 walkthrough에는 공개/비공개 멈춤선이 있다.
- [x] agent-readable catalog와 llms metadata에서 high-signal scenario로 찾을 수 있다.
- [x] docs/landing/release candidate에서 quality gate 진입 경로가 노출됐다.
- [x] walkthrough index가 docs/landing/README/coverage/quality gate에 노출됐다.
- [ ] docs index는 아직 상황형 walkthrough 전용 section UI로 분리되지 않았다.

## 공개 안전 점검
- 개인정보·민원인 식별정보를 예시로 확정하지 않는다.
- 업체별 민감정보와 계약·집행 세부를 공개 문장으로 풀지 않는다.
- 비공개 내부검토 의견과 미확정 정책안은 공식 입장처럼 쓰지 않는다.
- 감사·조사·수사·보안 세부와 법률자문성 결론은 공개 위키 판단으로 단정하지 않는다.
- 현장 의견은 개인 평가나 기관 공식 입장으로 왜곡하지 않는다.

## 다음 조치
1. docs index를 `기관군 / 업무축 / 상황형 walkthrough / 품질검증 / agent-readable` 섹션형 UI로 나눈다.
2. 장관 보고 또는 회의 후속조치 walkthrough를 추가한다.
3. 민원 폭주 walkthrough를 추가해 대량 반복 답변의 공개/비공개 경계를 보강한다.

## Related
- [[manifest-agent-readable-catalog-v1-2026-05]]
- [[llms-newcomer-onboarding-v1]]
- [[release-candidate-전입자온보딩-v1-2026-05]]
- [[landing-전입자-공통업무축-2026-05]]
