# 공공서비스 AI-ready interface와 K-Gov Agent Plaza

`kgov-ready-demo`는 정부 공식 서비스가 아니라, 공공 웹사이트가 AI 에이전트에게 읽히고 라우팅될 수 있게 설계되면 어떤 형태가 되는지 보여 주는 공개 참조 시안이다.

- Live demo: https://kgov-ready-demo.vercel.app
- Repo: https://github.com/hosungseo/kgov-ready-demo
- Scanner: https://agent-ready-check.vercel.app

## 왜 신규공무원 적응 위키와 연결되는가

신규공무원·전입자는 기존에는 사람용 홈페이지, 법령, 업무계획, 보도자료를 직접 찾아 읽었다. AI 에이전트가 일상 업무 보조자가 되면 같은 자료도 사람이 보는 화면과 기계가 읽는 표준 인터페이스를 함께 가져야 한다.

이 위키의 `hub`, `faq`, `newcomer-path`, `process`는 사람이 이해할 수 있는 온보딩 경로다. 반면 `kgov-ready-demo`는 같은 공공서비스 정보를 AI가 발견하고 요약하고 호출하기 쉽게 만드는 인터페이스 참조모델이다. 둘을 함께 보면 “신규자가 어떤 맥락을 배워야 하는가”와 “그 맥락을 AI가 어떻게 읽고 연결해야 하는가”가 이어진다.

## demo surface

`kgov-ready-demo`는 19개 중앙부처 사이트를 AI-agent-readable한 형태로 다시 짠 시안이다. 주요 진입점은 다음과 같다.

- `/` — 19개 부처 카드와 scanner/dashboard/about 링크
- `/about` — 왜 agent-ready 공공사이트가 필요한지 설명
- `/dashboard` — AI-agent 방문 telemetry 시안
- `/{slug}` — 부처별 사람용 page
- `/{slug}/llms.txt` — 부처별 LLM 요약
- `/{slug}/index.md` — 부처별 markdown 본문
- `/index.md` — root markdown version

## agent-ready discovery endpoints

참조할 만한 endpoint는 아래와 같다.

- `/llms.txt`
- `/llms-full.txt`
- `/ai.txt`
- `/humans.txt`
- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- `/openapi.json`
- `/api/ministries`
- `/api/ministries/{slug}`
- `/.well-known/agent.json`
- `/.well-known/mcp.json`
- `/.well-known/ai-plugin.json`
- `/.well-known/openid-configuration`
- `/.well-known/security.txt`

Markdown negotiation도 핵심 패턴이다.

```bash
curl -H "Accept: text/markdown" https://kgov-ready-demo.vercel.app/mois
```

사람용 부처 page와 기계용 markdown page가 같은 정보공간에서 연결된다는 점이 중요하다.

## onboarding 관점의 활용법

신규자 교육에서는 이 demo를 사실 정보원으로 쓰기보다 다음 질문을 설명하는 예시로 쓰는 편이 안전하다.

1. 정부 사이트가 AI에게 “발견 가능”하려면 무엇을 노출해야 하는가?
2. 사람이 보는 화면과 LLM이 읽는 요약은 어떻게 나뉘어야 하는가?
3. OpenAPI, llms.txt, sitemap, well-known manifest는 각각 어떤 역할인가?
4. manifest가 있다는 것과 실제 backend protocol이 구현됐다는 것은 어떻게 구분해야 하는가?
5. 부처별 hub와 agent-ready interface가 만나면 신규자가 찾는 “업무 맥락”은 어떻게 더 빨리 연결되는가?

## 주의할 점

- 이 demo는 공식 정부 서비스나 정책이 아니다.
- 부처명은 2026년 정부조직 개편 가정을 반영한 시안이며, 일부 명칭은 현행 공식 명칭과 다르다.
- 실제 정책·서비스·연락처 확인은 공식 부처 사이트와 공개 원문을 기준으로 해야 한다.
- `/services/*` 링크 일부는 의도적으로 미구현된 예시다.
- `/.well-known/openid-configuration`은 stub이며 실제 OAuth/OIDC token service가 아니다.
- `/.well-known/mcp.json`은 `/mcp`를 광고하지만, local inspection 기준 실제 JSON-RPC MCP server 구현은 확인되지 않았다.
- 따라서 newcomer 문서에서는 “manifest exists”와 “backend protocol implemented”를 구분해 설명해야 한다.

## kgov slug ↔ newcomer hub 매니페스트

- [[link-manifest-kgov-agent-ready-행정사회부처-2026-05]] — `moef`, `mois`, `moe`, `mohw`, `moel`, `mpva`, `mogef`와 행정·사회정책 hub 연결
- [[link-manifest-kgov-agent-ready-경제인프라부처-2026-05]] — `msit`, `mcst`, `mafra`, `motie`, `me`, `molit`, `mof`, `mss`와 경제·인프라 hub 연결
- [[link-manifest-kgov-agent-ready-외교안보법무부처-2026-05]] — `mofa`, `unikorea`, `moj`, `mnd`와 외교·안보·법무 hub 연결

## 연결 노트

- [[concept-신규공무원-AI적응-핵심축]]
- [[concept-행정안전부-인공지능정부실-AI데이터디지털서비스연결축]]
- [[faq-AI적응과업무시스템은-행안부-어느-조직과-가까운가]]
- [[hub-행정안전부]]
- [[landing-전입자-기관군별-온보딩-2026-05]]
