# Quality Gate — 법령대응 공통업무축 2026-05

## 목적
법령대응 업무축의 공개 온보딩 note 묶음이 전입자에게 안전한 실행 경로를 제공하는지, 그리고 법률자문성 결론·비공개 협의·미확정 정책판단을 공개 위키에 남기지 않는지 점검한다.

## 검사 대상
- [[hub-법령대응]]
- [[newcomer-path-법령제개정시즌-첫주-2026-05]]
- [[faq-법령제개정-처음-무엇부터-확인하나]]
- [[faq-법령제개정-조문보다-먼저-봐야-할-자료는]]
- [[faq-법령설명-법률자문성결론은-어디서-멈추나]]
- [[source-법령대응-자료대조순서]]
- [[source-법령대응-공개근거-우선순위]]
- [[source-법령대응-의견조회-공개자료-대조순서]]
- [[process-법령대응-설명초안-작성흐름]]
- [[process-법령대응-전입자-첫실행흐름]]
- [[checklist-법령대응-설명초안-제출전검토]]
- [[checklist-법령대응-공개문안-초안검토]]
- [[checklist-법령대응-boundary-router-질문형-검토]]
- [[coverage-법령대응-공통업무축-2026-05]]
- [[coverage-법령대응-boundary-router-실행경계-2026-05]]
- [[walkthrough-법령대응-기관상황업무축-공개경계-2026-05]]
- [[manifest-newcomer-journey-법령대응-2026-05]]
- [[coverage-법령대응-boundary-router-실행경계-2026-05]]

## Gate 1 — 경로 완성도
- [ ] hub에서 첫주 path, FAQ, source, process, checklist, coverage, manifest로 이동할 수 있는가?
- [ ] newcomer path에서 자료대조와 설명초안 작성 흐름으로 이동할 수 있는가?
- [ ] coverage가 FAQ → source → process → checklist 순서를 한 화면에서 보여 주는가?
- [ ] coverage가 walkthrough 독립 노트의 존재 여부와 다음 후보를 명확히 말해 주는가?
- [ ] manifest가 agent-readable route를 포함하는가?
- [ ] manifest가 FAQ/source/process/checklist/walkthrough 상태를 노출하는가?
- [ ] execution boundary coverage가 추가 FAQ/source/process/checklist를 실제 note로만 연결하는가?

## Gate 2 — 자료·근거 구분
- [ ] 조문안, 신구조문대비표, 제안이유, 설명자료, Q&A를 분리해 읽게 하는가?
- [ ] 공개자료와 내부확인 대상의 경계를 말하는가?
- [ ] FAQ 3종이 `처음 확인 → 선행자료 → 법률자문성 멈춤선` 순서로 배치되는가?
- [ ] source가 공개 근거와 내부 확인 대상을 분리하고, process가 그 결과를 설명초안으로 옮기는가?
- [ ] 의견조회·공개근거 source가 공개 가능 문장과 내부협의 문장을 분리하는가?
- [ ] checklist가 제출 전 법령층위·절차단계·공개/비공개 경계를 다시 닫는가?
- [ ] 공개문안·질문형 boundary checklist가 법률자문성 결론과 미확정 판단을 제거하는가?
- [ ] 법제, 정부입법, 국회대응, 홍보대응 등 인접 업무축 분기가 실제 존재하는 note로만 연결되는가?

## Gate 3 — 공개/비공개 금지선
- [ ] boundary 실행경계 coverage가 공개 설명·담당확인 후 제한공개·공개 note 제외·전환 필요를 구분하는가?
- [ ] 법률자문성 결론을 공개 note에 남기지 말라는 문장이 있는가?
- [ ] 비공개 협의 내용과 내부 검토의견 금지선이 있는가?
- [ ] 개인정보, 영업비밀, 사건별 수사·감사·감독 자료 금지선이 있는가?
- [ ] 미확정 정책판단을 확정 문장처럼 쓰지 말라는 멈춤선이 있는가?
- [ ] public/private decision point가 `공개자료 설명 → 담당 확인 → 공개 note 제외 → 국회/홍보/보고 전환` 순서로 구분되어 있는가?

## Boundary decision point
- 공개 가능: 조문 자체, 입법예고·공포 등 공개 절차 자료, 공개 설명자료, 일반 제도 설명.
- 담당 확인: 의견조회 반영 여부, 협의 중 쟁점, 규제·법제심사 보완사항, 국회심사 대응 문장.
- 공개 note 제외: 법률자문성 결론, 비공개 협의 내용, 내부 검토의견, 개인정보·영업비밀, 사건별 감독·수사·감사 자료, 미확정 정책판단의 확정 표현.
- 전환 필요: 국회 설명자료는 [[hub-국회대응]], 보도·설명자료는 [[hub-홍보대응]], 보고 문안은 [[hub-장관보고]]로 넘긴다.

## Gate 4 — 다음 고도화 후보
- 법령대응 입법예고 대응 path
- 법령대응 국회심사 대응 path
- 법령대응 규제심사 source/process
- 법령대응 법제심사 source/process
- 법령대응 walkthrough: 입법예고 의견 대응 또는 국회심사 설명자료 전환 시나리오

## 판정
현재 묶음은 `hub → path → FAQ → source → process → checklist → coverage → manifest`의 기본 실행 경로와 [[coverage-법령대응-boundary-router-실행경계-2026-05]] 기반 public/private decision point를 갖췄다. 다음 단계는 상황형 path를 세분화해 입법예고, 규제심사, 법제심사, 국회심사별로 분기하는 것이다.
