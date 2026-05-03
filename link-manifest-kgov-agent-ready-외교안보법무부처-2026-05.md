# link manifest — kgov-ready-demo 외교·안보·법무 부처 agent-ready 연결 (2026-05)

- type: link-manifest
- external layer: `kgov-ready-demo`
- scope: `mofa` 외교부, `unikorea` 통일부, `moj` 법무부, `mnd` 국방부
- purpose: kgov-ready-demo의 부처별 agent-readable demo URL을 newcomer wiki의 기관 hub / 첫날 FAQ / path / process note와 연결한다.
- caveat: **이 문서는 데모 연결 manifest다. `kgov-ready-demo`는 정부 공식 사이트가 아니며, 아래 URL과 설명은 AI-ready 공공서비스 인터페이스 참조 시안이다. 실제 민원·인사·업무 처리는 각 부처 공식 사이트와 내부 지침을 확인해야 한다.**

## 공통 기준

`kgov-ready-demo`는 부처별 화면을 사람용 HTML과 에이전트용 텍스트 레이어로 나눠 보여준다. newcomer wiki에서는 사람이 먼저 읽는 온보딩 note를 유지하고, demo layer에서는 AI 에이전트가 읽을 수 있는 공식 출처·업무경계·다음 행동 후보의 형태를 확인한다.

공통 진입점은 다음 패턴을 따른다.

- live page: `https://kgov-ready-demo.vercel.app/{slug}`
- LLM summary: `https://kgov-ready-demo.vercel.app/{slug}/llms.txt`
- markdown index: `https://kgov-ready-demo.vercel.app/{slug}/index.md`
- plaza concept: [[concept-공공서비스-AI-ready-interface-kgov-agent-plaza]]

## 부처별 mapping

### `mofa` — 외교부

- live page: https://kgov-ready-demo.vercel.app/mofa
- LLM summary: https://kgov-ready-demo.vercel.app/mofa/llms.txt
- markdown index: https://kgov-ready-demo.vercel.app/mofa/index.md
- newcomer hub: [[hub-외교부]]
- first-day FAQ: [[faq-외교부-전입첫날-무엇부터-봐야-하나]]
- first-day path: [[newcomer-path-외교부-전입첫날-2026-05]]
- first-week process: [[process-외교부-전입첫주-적응흐름]]

**연결 의도:** 외교부 newcomer hub는 외교정책·재외국민·국제협력의 업무 맥락을 사람이 읽는 시작점으로 둔다. `mofa` demo layer는 같은 영역을 AI 에이전트가 발견 가능한 입구, 요약, markdown 본문으로 읽게 하는 확인용 연결이다.

### `unikorea` — 통일부

- live page: https://kgov-ready-demo.vercel.app/unikorea
- LLM summary: https://kgov-ready-demo.vercel.app/unikorea/llms.txt
- markdown index: https://kgov-ready-demo.vercel.app/unikorea/index.md
- newcomer hub: [[hub-통일부]]
- first-day FAQ: [[faq-통일부-전입첫날-무엇부터-봐야-하나]]
- first-day path: [[newcomer-path-통일부-전입첫날-2026-05]]
- first-week process: [[process-통일부-전입첫주-적응흐름]]

**연결 의도:** 통일부 newcomer note는 남북관계·북한정보·교류협력·정착지원 같은 정책 맥락을 먼저 정렬한다. `unikorea` demo layer는 그 맥락을 에이전트가 부처 slug 단위로 발견하고, 텍스트 요약과 markdown 본문으로 재사용하는 경로를 보여준다.

### `moj` — 법무부

- live page: https://kgov-ready-demo.vercel.app/moj
- LLM summary: https://kgov-ready-demo.vercel.app/moj/llms.txt
- markdown index: https://kgov-ready-demo.vercel.app/moj/index.md
- newcomer hub: [[hub-법무부]]
- first-day FAQ: [[faq-법무부-전입첫날-무엇부터-봐야-하나]]
- first-day path: [[newcomer-path-법무부-전입첫날-2026-05]]
- first-week process: [[process-법무부-전입첫주-적응흐름]]

**연결 의도:** 법무부 newcomer hub는 법무행정·출입국·교정·범죄피해자 지원 등 권리와 처분이 얽히는 업무 경계를 먼저 잡는다. `moj` demo layer는 이런 고위험·권리연결 업무에서 AI가 공식 출처와 인간 검토 지점을 우선하도록 설계된 agent-ready 입구로 연결한다.

### `mnd` — 국방부

- live page: https://kgov-ready-demo.vercel.app/mnd
- LLM summary: https://kgov-ready-demo.vercel.app/mnd/llms.txt
- markdown index: https://kgov-ready-demo.vercel.app/mnd/index.md
- newcomer hub: [[hub-국방부]]
- first-day FAQ: [[faq-국방부-전입첫날-무엇부터-봐야-하나]]
- first-day path: [[newcomer-path-국방부-전입첫날-2026-05]]
- first-week process: [[process-국방부-전입첫주-적응흐름]]

**연결 의도:** 국방부 newcomer note는 국방정책·병무/군무·방위력·보훈/군인 지원 등 보안성과 공공서비스성이 함께 있는 업무 맥락을 정렬한다. `mnd` demo layer는 AI 에이전트가 민감·보안 경계를 넘지 않으면서 공식 정보 입구를 찾는 참조 시안으로 연결한다.

## 검증 메모

- 2026-05-03 로컬 파일 존재 확인: 위 newcomer wiki links의 `.md` 대상은 모두 존재한다.
- 2026-05-03 live URL 확인: 각 slug의 live page, `/llms.txt`, `/index.md`가 모두 HTTP 200으로 응답했다.
- 이 manifest는 연결 후보를 모으는 문서이며, 기존 hub/FAQ/path/process 파일에는 아직 삽입하지 않았다.
