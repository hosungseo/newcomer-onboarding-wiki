# verification — kgov-ready-demo Plaza 연결 확인 2026-05

## 한 줄
`kgov-ready-demo`는 공식 정부 시스템이 아니라 AI-ready 공공서비스 인터페이스 참조 시안이다. 이 note는 newcomer onboarding wiki의 kgov manifest가 실제 demo URL 패턴과 이어지는지 확인한 기록이다.

## 확인 범위
대표 slug 6개를 골라 사람용 HTML, agent-readable `llms.txt`, markdown markdown index가 응답하는지 확인했다.

| slug | 계열 | live page | llms.txt | index.md | wiki 연결 |
|---|---|---:|---:|---:|---|
| `mois` | 행정·사회 | 200 | 200 | 200 | [[hub-행정안전부]] / [[link-manifest-kgov-agent-ready-행정사회부처-2026-05]] |
| `moef` | 행정·사회·재정 | 200 | 200 | 200 | [[hub-기획재정부]] / [[link-manifest-kgov-agent-ready-행정사회부처-2026-05]] |
| `msit` | 경제·인프라·과학 | 200 | 200 | 200 | [[hub-과학기술정보통신부]] / [[link-manifest-kgov-agent-ready-경제인프라부처-2026-05]] |
| `mofa` | 외교·안보 | 200 | 200 | 200 | [[hub-외교부]] / [[link-manifest-kgov-agent-ready-외교안보법무부처-2026-05]] |
| `moj` | 법무 | 200 | 200 | 200 | [[hub-법무부]] / [[link-manifest-kgov-agent-ready-외교안보법무부처-2026-05]] |
| `mnd` | 안보 | 200 | 200 | 200 | [[hub-국방부]] / [[link-manifest-kgov-agent-ready-외교안보법무부처-2026-05]] |

## 확인 명령 요약
- base: `https://kgov-ready-demo.vercel.app/{slug}`
- agent-readable summary: `https://kgov-ready-demo.vercel.app/{slug}/llms.txt`
- markdown index: `https://kgov-ready-demo.vercel.app/{slug}/index.md`
- 응답 content-type은 각각 `text/html`, `text/plain`, `text/markdown` 계열로 확인했다.

## 해석
- 대표 6개 slug는 live page / llms.txt / index.md 패턴이 모두 살아 있다.
- 따라서 newcomer wiki의 kgov manifest 3개는 demo URL 패턴과 연결된 상태로 볼 수 있다.
- 단, 이 검증은 대표 표본 확인이다. 전체 19개 slug의 전수 검증은 별도 check note로 분리할 수 있다.

## 경계
- 이 note는 demo URL 가용성과 wiki 연결 패턴을 확인한 것이다.
- 정부 공식 정보의 최신성·법적 효력·민원 처리 가능성을 보증하지 않는다.
- 실제 업무 판단은 각 부처 공식 사이트, 법령, 내부 지침을 확인해야 한다.

## Related Notes
- [[concept-공공서비스-AI-ready-interface-kgov-agent-plaza]]
- [[link-manifest-kgov-agent-ready-행정사회부처-2026-05]]
- [[link-manifest-kgov-agent-ready-경제인프라부처-2026-05]]
- [[link-manifest-kgov-agent-ready-외교안보법무부처-2026-05]]
- [[quality-gate-전입자-온보딩-커버리지-2026-05]]
- [[landing-전입자-기관군별-온보딩-2026-05]]
