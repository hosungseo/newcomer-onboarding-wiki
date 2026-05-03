# link manifest — kgov-ready-demo agent-ready 경제·인프라 부처 연결지도 (2026-05)

- type: link-manifest
- scope: `kgov-ready-demo` ministry slug ↔ newcomer onboarding wiki hub/onboarding entry 연결
- demo base: `https://kgov-ready-demo.vercel.app/{slug}`
- agent-readable patterns: <https://kgov-ready-demo.vercel.app/{slug}/llms.txt>, <https://kgov-ready-demo.vercel.app/{slug}/index.md>
- shared concept: [[concept-공공서비스-AI-ready-interface-kgov-agent-plaza]]
- selection rule: 이번 문서는 demo slug를 신규자 위키의 **기관 hub / 전입 첫날 FAQ / 전입 첫날 path / 전입 첫주 process**에 매핑하는 manifest다. 기존 note만 연결하고, 존재하지 않는 note는 만들지 않는다.

## 이 문서의 목적
`kgov-ready-demo`의 agent-ready ministry surface를 newcomer wiki의 기관별 온보딩 surface와 이어 붙인다. 에이전트는 demo URL에서 `/llms.txt`와 `/index.md`를 먼저 읽고, 사람 또는 신규 전입자는 wiki의 `hub-*`, `faq-*-전입첫날-무엇부터-봐야-하나`, `newcomer-path-*-전입첫날-2026-05`, `process-*-전입첫주-적응흐름` 순서로 내려간다.

## 공통 caveat
- `motie`는 demo slug상 산업통상부/산업통상자원부 맥락이 섞일 수 있다. 이 manifest에서는 newcomer wiki의 현재 hub인 [[hub-산업통상자원부]]를 기준으로 연결한다.
- `me`는 demo slug상 `기후에너지환경부`라는 미래/개편 표기가 나타날 수 있다. 이 manifest에서는 newcomer wiki의 현재 hub인 [[hub-환경부]]를 기준으로 연결하고, `기후·에너지`는 환경부 맥락의 caveat로 표시한다.
- live demo URL의 실제 라우팅/표시는 `kgov-ready-demo` 배포 상태를 따른다. 이 문서는 wiki 쪽 연결 후보를 고정하는 manifest이지, demo repo의 route 존재를 수정하지 않는다.

## 공통 연결
- Plaza concept: [[concept-공공서비스-AI-ready-interface-kgov-agent-plaza]]
- 전입자 공통 FAQ: [[faq-전입자의-첫적응질문]]
- 전입 첫날 공통 FAQ: [[faq-전입첫날-무엇부터-다시-봐야-하나]]
- 전입 공통 path: [[newcomer-path-전입후첫재적응질문-2026-05]]
- 전입 첫주 공통 process: [[process-전입후-첫주-재적응]]

## slug별 연결

| slug | demo ministry label | live demo | agent-readable | newcomer wiki hub | first-day FAQ | first-day path | first-week process | caveat |
|---|---|---|---|---|---|---|---|---|
| `msit` | 과학기술정보통신부 | `https://kgov-ready-demo.vercel.app/msit` | `/msit/llms.txt`, `/msit/index.md` | [[hub-과학기술정보통신부]] | [[faq-과학기술정보통신부-전입첫날-무엇부터-봐야-하나]] | [[newcomer-path-과학기술정보통신부-전입첫날-2026-05]] | [[process-과학기술정보통신부-전입첫주-적응흐름]] | 과학기술혁신·R&D·디지털·정보통신·전파 축으로 읽는다. |
| `mcst` | 문화체육관광부 | `https://kgov-ready-demo.vercel.app/mcst` | `/mcst/llms.txt`, `/mcst/index.md` | [[hub-문화체육관광부]] | [[faq-문화체육관광부-전입첫날-무엇부터-봐야-하나]] | [[newcomer-path-문화체육관광부-전입첫날-2026-05]] | [[process-문화체육관광부-전입첫주-적응흐름]] | 문화예술·콘텐츠·관광·체육·국제문화홍보 축으로 읽는다. |
| `mafra` | 농림축산식품부 | `https://kgov-ready-demo.vercel.app/mafra` | `/mafra/llms.txt`, `/mafra/index.md` | [[hub-농림축산식품부]] | [[faq-농림축산식품부-전입첫날-무엇부터-봐야-하나]] | [[newcomer-path-농림축산식품부-전입첫날-2026-05]] | [[process-농림축산식품부-전입첫주-적응흐름]] | 생산·식량·축산·방역·식품유통·농촌복지 축으로 읽는다. |
| `motie` | 산업통상부 → 산업통상자원부 context | `https://kgov-ready-demo.vercel.app/motie` | `/motie/llms.txt`, `/motie/index.md` | [[hub-산업통상자원부]] | [[faq-산업통상자원부-전입첫날-무엇부터-봐야-하나]] | [[newcomer-path-산업통상자원부-전입첫날-2026-05]] | [[process-산업통상자원부-전입첫주-적응흐름]] | demo/public 표기는 산업통상부로 보일 수 있으나, wiki 연결은 산업통상자원부 hub 기준이다. |
| `me` | 기후에너지환경부 → 환경부 context | `https://kgov-ready-demo.vercel.app/me` | `/me/llms.txt`, `/me/index.md` | [[hub-환경부]] | [[faq-환경부-전입첫날-무엇부터-봐야-하나]] | [[newcomer-path-환경부-전입첫날-2026-05]] | [[process-환경부-전입첫주-적응흐름]] | demo/public 표기는 기후에너지환경부로 보일 수 있으나, wiki 연결은 환경부 hub 기준이다. |
| `molit` | 국토교통부 | `https://kgov-ready-demo.vercel.app/molit` | `/molit/llms.txt`, `/molit/index.md` | [[hub-국토교통부]] | [[faq-국토교통부-전입첫날-무엇부터-봐야-하나]] | [[newcomer-path-국토교통부-전입첫날-2026-05]] | [[process-국토교통부-전입첫주-적응흐름]] | 국토·도시·주거·토지·건설·교통·물류 축으로 읽는다. |
| `mof` | 해양수산부 | `https://kgov-ready-demo.vercel.app/mof` | `/mof/llms.txt`, `/mof/index.md` | [[hub-해양수산부]] | [[faq-해양수산부-전입첫날-무엇부터-봐야-하나]] | [[newcomer-path-해양수산부-전입첫날-2026-05]] | [[process-해양수산부-전입첫주-적응흐름]] | 해양정책·수산·어촌·해운항만·운영시스템 축으로 읽는다. |
| `mss` | 중소벤처기업부 | `https://kgov-ready-demo.vercel.app/mss` | `/mss/llms.txt`, `/mss/index.md` | [[hub-중소벤처기업부]] | [[faq-중소벤처기업부-전입첫날-무엇부터-봐야-하나]] | [[newcomer-path-중소벤처기업부-전입첫날-2026-05]] | [[process-중소벤처기업부-전입첫주-적응흐름]] | 중소기업·벤처창업·소상공인·보증자금·수출스마트화 축으로 읽는다. |

## 에이전트가 읽는 순서 제안
1. demo route: `https://kgov-ready-demo.vercel.app/{slug}`
2. agent-readable summary: `https://kgov-ready-demo.vercel.app/{slug}/llms.txt`
3. markdown index: `https://kgov-ready-demo.vercel.app/{slug}/index.md`
4. wiki bridge: [[concept-공공서비스-AI-ready-interface-kgov-agent-plaza]]
5. ministry hub: 위 표의 `hub-*`
6. newcomer onboarding: 위 표의 `faq-*` → `newcomer-path-*` → `process-*`

## 검증 메모
이 manifest는 작성 시점에 위 표의 local wiki `.md` target들이 모두 존재하는 것을 전제로 한다. demo live URL은 링크 패턴을 기록한 것이며, 개별 route의 HTTP 검증은 별도 배포 검증에서 수행한다.
