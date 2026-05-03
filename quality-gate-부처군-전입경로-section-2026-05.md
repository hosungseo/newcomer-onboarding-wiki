# quality gate — 부처군 전입경로 section 커버리지 2026-05

## 한 줄
전입자 온보딩은 개별 기관 hub/path만 있으면 흩어지기 쉽다. 이 gate는 6개 부처군 section이 전체 기관 진입을 실제로 묶고 있는지 점검한다.

## 현재 section 묶음
- [[section-경제산업부처-전입경로]]
- [[section-사회안전부처-전입경로]]
- [[section-법무거버넌스부처-전입경로]]
- [[section-외교안보부처-전입경로]]
- [[section-국토환경부처-전입경로]]
- [[section-교육문화과학부처-전입경로]]

## 통과 기준
1. 각 section은 기존 local hub/path/FAQ만 연결한다.
2. 각 section 내부 local refs missing은 0이어야 한다.
3. [[landing-전입자-기관군별-온보딩-2026-05]]에서 6개 section이 모두 보인다.
4. 개별 기관군 landing에서 관련 section으로 갈 수 있다.
5. README와 웹 관문(`docs/index.html`)에서 section shortcut이 노출된다.
6. 비공개 문서, 개인정보, 사건별 민감정보, 내부 심의·작전·평가·조사 세부는 포함하지 않는다.

## 현재 확인 상태
- 전체 repo local `.md` missing refs: 0
- README section shortcut: 있음
- docs/index.html quick links: 있음
- 기관군 master landing shortcut: 있음
- 개별 landing shortcut: 보강 완료
- 첫날·첫주 연결 숫자표: [[coverage-부처군-section-첫날첫주-2026-05]]

## 다음 점검 후보
- section별 중복 기관 배치가 적절한지 확인한다.
- 기관군 이름과 기존 landing 이름이 혼동되지 않는지 README 문구를 더 다듬는다.
- section에서 첫날 FAQ와 첫주 FAQ가 모두 연결되는지 coverage table을 추가한다.

## Related Notes
- [[landing-전입자-기관군별-온보딩-2026-05]]
- [[quality-gate-전입자-온보딩-커버리지-2026-05]]
- [[hub-기관또는기능]]
- [[newcomer-path-주제또는시점]]
