# quality gate — 전입자 온보딩 커버리지 2026-05

이 note는 2026-05-03 기준 `newcomer-onboarding-wiki`의 전입자/신규자 온보딩 확장 상태를 다음 작업자가 빠르게 이어받기 위한 품질 게이트 기록이다.

## 확인 범위

- 중앙부처·위원회·청 단위 hub
- 기관별 전입 첫날 FAQ
- 기관별 first-day newcomer path
- 기관별 first-week process
- 기관군별 transfer landing
- kgov-ready-demo agent-ready manifest 연결

## 통과한 것

### 기관별 삼종 note 커버리지

국가인재원 계열을 제외한 기관 hub 46개 기준으로 아래 3종 note 존재 여부를 확인했다.

- pattern: `faq-{기관}-전입첫날-무엇부터-봐야-하나`
- pattern: `newcomer-path-{기관}-전입첫날-2026-05`
- pattern: `process-{기관}-전입첫주-적응흐름`

결과:

- institutions: 46
- missing triads: 0

### 전입자 gate 연결

최근 batch에서 다음 연결을 닫았다.

- 기관 hub → `gate-전입후첫재적응.md`
- 기관 FAQ → `gate-전입후첫재적응.md`
- 기관 first-day path → `gate-전입후첫재적응.md`
- 기관 first-week process → `gate-전입후첫재적응.md`
- 기관군 landing → 기관 hub/FAQ/path/process
- 기관 hub → 기관군 landing

### kgov-ready-demo 연결

- [[verification-kgov-ready-demo-plaza-2026-05]] — 대표 slug live page / llms.txt / index.md 응답 확인 기록

`kgov-ready-demo`는 공식 정보원이 아니라 AI-ready public interface 참조 시안으로 문서화했다.

- [[concept-공공서비스-AI-ready-interface-kgov-agent-plaza]]
- [[link-manifest-kgov-agent-ready-행정사회부처-2026-05]]
- [[link-manifest-kgov-agent-ready-경제인프라부처-2026-05]]
- [[link-manifest-kgov-agent-ready-외교안보법무부처-2026-05]]

kgov manifest 3개는 19개 demo slug를 newcomer wiki의 관련 hub/FAQ/path/process로 연결한다. 관련 21개 hub도 자기 kgov manifest로 되돌아가는 backlink를 갖는다.

## 2026-05-03 21:40 재검증

first-entry FAQ cleanup과 추가 기관 packet 확장 이후 중앙부처·위원회·청 단위 coverage를 재스캔했다.

확인한 기관 범위:

- 18부 + 주요 처·위원회·청 + 국무조정실 + 새 기관/독립기관
- `문화재청`은 현재 명칭인 `국가유산청` packet으로 대체 확인했다.

확인한 5종 파일:

- pattern: `source-{기관}-홈` 또는 `source-{기관}-*`
- pattern: `hub-{기관}`
- pattern: `faq-{기관}-전입첫날-무엇부터-봐야-하나`
- pattern: `newcomer-path-{기관}-전입첫날-2026-05`
- pattern: `process-{기관}-전입첫주-적응흐름`

결과:

- checked agencies: 50
- legacy name excluded: `문화재청` → `국가유산청`으로 확인
- agencies with missing 5-file packet: 0
- 기관군 landing files checked: 6
- landing local `.md` missing refs: 0

최근 추가로 coverage를 닫은 기관:

- `국가유산청`
- `새만금개발청`
- `우주항공청`
- `고위공직자범죄수사처`
- `검찰청`

따라서 이 시점 기준 중앙행정기관 전입자 온보딩의 기본 5-file packet coverage는 clean 상태다. 다음 작업은 새 기관을 더 찾기보다 각 기관 hub의 깊이를 늘리거나, README/docs/index 노출과 전체 repo missing refs cleanup으로 넘어가는 편이 낫다.

## 2026-05-04 02:05 전입첫주 path/FAQ coverage 재검증

전입자 온보딩 확장을 `첫날`에서 `첫주`까지 넓힌 뒤, 전체 기관 coverage와 노출 경로를 다시 확인했다.

확인한 파일군:

- filename pattern: `newcomer-path-*-전입첫주-2026-05` (wildcard pattern; `.md` extension omitted to avoid treating it as a local note ref)
- filename pattern: `faq-*-전입첫주-무엇부터-읽어야-하나` (wildcard pattern; `.md` extension omitted to avoid treating it as a local note ref)
- `landing-전입자-전입첫주-전체기관-2026-05.md`
- `landing-전입자-전입첫주-FAQ-전체기관-2026-05.md`
- `README.md`
- `docs/index.html`

결과:

- first-week path files: 51
- first-week FAQ files: 51
- path는 있으나 FAQ가 없는 기관: 0
- FAQ는 있으나 path가 없는 기관: 0
- `landing-전입자-전입첫주-전체기관-2026-05.md`: 전입첫주 path filename refs 51개
- `landing-전입자-전입첫주-FAQ-전체기관-2026-05.md`: FAQ refs 51개 + path refs 51개
- README: 두 first-week landing 모두 wikilink로 노출
- docs/index.html: 두 first-week landing 모두 GitHub `.md` quick link로 노출

판정:

- 중앙부처·위원회·청 단위 전입첫주 path/FAQ coverage는 51/51로 clean하다.
- 사용자는 기관명을 아는 경우 `전입첫주 path landing` 또는 `전입첫주 FAQ landing`에서 바로 소속 기관 entry로 내려갈 수 있다.
- 이 품질 게이트 기준으로는 전입자 온보딩의 기본 coverage 확장 작업이 `첫날 triad`에서 `첫주 path+FAQ`까지 완료된 상태다.

다음 작업 방향:

1. 전체 repo missing refs cleanup을 별도 wave로 분리한다.
2. 실제 사용성이 높은 FAQ placeholder를 우선 만들고, 설계문서 예시·외부 archive path는 표기 규칙으로 분류한다.
3. 기관별 hub 깊이 보강은 51개를 한 번에 반복하기보다 기관군별로 `자주 막히는 첫 질문`이나 `조심할 민감정보 boundary`를 얇게 늘린다.

## 남은 품질 이슈

전체 repo의 `.md` reference 전체 검사는 아직 clean하지 않다. 2026-05-03 20:25 점검에서 `md_files 547`, `missing_refs 186`이 나왔다.

이 missing refs는 대부분 이번 전입자 확장 batch에서 새로 만든 파일이 아니라, 기존 FAQ/설계/manifest의 미래 확장 placeholder 또는 외부 archive 경로다. 따라서 이번 전입자 온보딩 핵심 경로의 blocker라기보다는 별도 cleanup wave로 다뤄야 한다.

대표 유형:

1. FAQ 안의 후속 FAQ placeholder
2. `structure-design-2026-04.md`, `atomization-rules-2026-04.md` 같은 설계 문서의 예시 파일명
3. `link-manifest-행정안전부-인사혁신처-기획재정부-2026-04.md` 안의 외부 archive/data/readable-final 경로
4. 보도자료·관보 archive 경로처럼 repo root 기준 local file이 아닌 참조

## 다음 추천 작업

1. 전입자 경로 자체는 새 note를 무리하게 더 만들기보다, README/docs live 노출 상태를 확인한다.
2. 별도 cleanup wave로 `missing_refs`를 아래처럼 분류한다.
   - 실제로 만들어야 할 FAQ
   - 의도적 placeholder
   - 외부 archive path
   - 오탈자
3. placeholder 중 자주 등장하는 FAQ 묶음만 1개 기관군 또는 1개 주제군씩 생성한다.
4. `link-manifest-행정안전부-인사혁신처-기획재정부-2026-04.md`는 외부 archive path를 local wiki link로 오인하지 않도록 표기 규칙을 정리한다.

## 연결 노트

- [[landing-전입자-기관군별-온보딩-2026-05]]
- [[gate-전입후첫재적응]]
- [[concept-공공서비스-AI-ready-interface-kgov-agent-plaza]]
- [[README]]
