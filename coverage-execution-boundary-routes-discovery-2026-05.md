# Coverage — execution boundary routes discovery 2026-05

## 목적
최근 실행경계 route-map이 README, landing, docs, agent catalog에서 서로 끊기지 않고 발견되는지 점검한다.

## 핵심 entry
- [[section-execution-boundary-routes-2026-05]] — 계약조달·조직정원·감사국회·민원법령·정보공개협업회의·홍보대외협력 실행경계 route-map.
- [[landing-전입자-공통업무축-2026-05]] — 전입자가 먼저 보는 공통업무축 landing.
- [[manifest-agent-readable-catalog-v1-2026-05]] — agent-readable catalog entry.
- [[audit-section-execution-boundary-route-map-exposure-2026-05]] — route-map 노출 audit.
- [[audit-boundary-duplicate-root-notes-2026-05]] — 중복 root note 정리 audit.
- [[quality-gate-execution-boundary-routes-discovery-2026-05]] — discovery 품질 gate.

## Discovery path
1. README 또는 docs/index.html에서 route-map을 찾는다.
2. [[section-execution-boundary-routes-2026-05]]에서 업무축별 실행경계 route를 고른다.
3. 세부 업무축 coverage/manifest/quality gate로 내려간다.
4. 중복 note가 보이면 삭제하지 않고 [[audit-boundary-duplicate-root-notes-2026-05]]에서 superseded 후보로만 표시한다.


## 2026-05-06 노출 확인
- README: `신규자 실행경계 route`에서 [[section-execution-boundary-routes-2026-05]], [[index-execution-boundary-route-aliases-2026-05]], 4개 교차 route-map으로 진입한다.
- landing: [[landing-전입자-공통업무축-2026-05]]는 긴 route chain을 접고 section/route-map 및 [[index-execution-boundary-route-aliases-2026-05]] 중심으로 진입시킨다.
- docs/index.html: 실행경계 quick-links에서 [[section-execution-boundary-routes-2026-05]], [[index-execution-boundary-route-aliases-2026-05]], 4개 route-map을 직접 노출한다.
- route-map bridge: [[section-execution-boundary-routes-2026-05]]의 landing bridge가 [[walkthrough-계약조달-조직정원-실행경계-라우트맵-2026-05]], [[walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05]], [[walkthrough-정보공개기록관리-협업회의-실행경계-라우트맵-2026-05]], [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]]로 내려간다.
- alias triangle: [[index-execution-boundary-route-aliases-2026-05]] → [[manifest-newcomer-journey-execution-boundary-route-aliases-2026-05]] → [[quality-gate-execution-boundary-route-aliases-2026-05]]가 README/landing/docs 삼각 노출을 기록한다.
- alias release note: [[release-note-execution-boundary-route-aliases-2026-05]]가 alias index/router/FAQ와 4개 교차 route의 README/landing/docs/agent 노출 상태를 요약한다.
- alias question router: [[router-execution-boundary-route-aliases-newcomer-questions-2026-05]]가 신규자 질문 문장을 4개 교차 route alias로 보내는 진입점으로 작동한다.
- alias router examples: [[router-execution-boundary-route-aliases-newcomer-questions-2026-05]]의 예시 질문이 계약·조직, 예산·민원, 정보공개·협업회의, 홍보·법령 4개 alias coverage로 바로 연결된다.
- alias selection FAQ: [[faq-execution-boundary-route-aliases-어떤-교차-route를-먼저-고르나]]가 신규자가 어떤 교차 route를 먼저 고를지 빠르게 판단하게 한다.
- agent catalog: [[manifest-agent-readable-catalog-v1-2026-05]]의 Execution Boundary Route Map 섹션에서 alias index/manifest/quality gate를 직접 노출한다.

## 품질 기준
- placeholder wikilink 없이 실제 존재하는 note만 연결한다.
- docs/landing/README 노출은 공개 온보딩용 고수준 route만 다룬다.
- 실행경계 note는 개인정보·비공개 내부검토·미확정 정책안·감사/수사/징계/보안/업체 민감정보를 포함하지 않는다.

## 신규 교차 route 후보
- PR budget boundary: [[router-홍보대응-예산대응-실행경계-2026-05]]가 홍보 문안과 예산 설명의 실행경계를 나누는 신규 교차 route 후보로 작동한다.
- civil budget boundary: [[router-민원대응-예산대응-실행경계-2026-05]]가 민원 답변과 예산 설명의 실행경계를 나누는 신규 교차 route 후보로 작동한다.
- audit budget boundary: [[router-감사대응-예산대응-실행경계-2026-05]]가 감사 제출 범위와 재정 설명 경계를 나누는 신규 교차 route 후보로 작동한다.
- assembly budget boundary: [[router-국회대응-예산대응-실행경계-2026-05]]가 국회 제출 범위와 재정 설명 경계를 나누는 신규 교차 route 후보로 작동한다.
- HR procurement boundary: [[router-인사복무-계약조달-실행경계-2026-05]]가 인사·복무 정보와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- external field procurement boundary: [[router-대외협력현장소통-계약조달-실행경계-2026-05]]가 현장 공유 범위와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- budget procurement boundary: [[router-예산대응-계약조달-실행경계-2026-05]]가 재정 설명 범위와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- disclosure records procurement boundary: [[router-정보공개기록관리-계약조달-실행경계-2026-05]]가 정보공개 판단 범위와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- collaboration meeting procurement boundary: [[router-협업회의운영-계약조달-실행경계-2026-05]]가 회의 공유 범위와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- legal procurement boundary: [[router-법령대응-계약조달-실행경계-2026-05]]가 법령 검토 범위와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- organization staffing procurement boundary: [[router-조직정원-계약조달-실행경계-2026-05]]가 조직정원 검토 범위와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- public relations procurement boundary: [[router-홍보대응-계약조달-실행경계-2026-05]]가 홍보 공개문안과 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- civil complaint procurement boundary: [[router-민원대응-계약조달-실행경계-2026-05]]가 민원 회신 범위와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- parliamentary procurement boundary: [[router-국회대응-계약조달-실행경계-2026-05]]가 국회 제출 범위와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- audit procurement boundary: [[router-감사대응-계약조달-실행경계-2026-05]]가 감사 제출 범위와 계약 민감정보를 나누는 신규 교차 route 후보로 작동한다.
- budget drafting boundary: [[router-예산대응-문서기안-실행경계-2026-05]]가 예산 검토자료와 결재 가능한 기안문을 나누는 신규 교차 route 후보로 작동한다.
- external field collaboration meeting boundary: [[router-대외협력현장소통-협업회의운영-실행경계-2026-05]]가 현장 발언·민원성 요구와 회의 확정 조치사항을 나누는 신규 교차 route 후보로 작동한다.
- disclosure records drafting boundary: [[router-정보공개기록관리-문서기안-실행경계-2026-05]]가 공개 판단 기록과 결재 가능한 기안문을 나누는 신규 교차 route 후보로 작동한다.
- collaboration meeting drafting boundary: [[router-협업회의운영-문서기안-실행경계-2026-05]]가 회의 논의·검토안과 결재 가능한 기안문을 나누는 신규 교차 route 후보로 작동한다.
- legal drafting boundary: [[router-법령대응-문서기안-실행경계-2026-05]]가 법령 검토 한계와 내부 결재 기안문을 나누는 신규 교차 route 후보로 작동한다.
- organization drafting boundary: [[router-조직정원-문서기안-실행경계-2026-05]]가 조직정원 민감자료와 내부 결재 기안문을 나누는 신규 교차 route 후보로 작동한다.
- procurement drafting boundary: [[router-계약조달-문서기안-실행경계-2026-05]]가 계약조달 민감자료와 내부 결재 기안문을 나누는 신규 교차 route 후보로 작동한다.
- PR drafting boundary: [[router-홍보대응-문서기안-실행경계-2026-05]]가 대외 홍보문안과 내부 결재 기안문을 나누는 신규 교차 route 후보로 작동한다.
- civil complaint drafting boundary: [[router-민원대응-문서기안-실행경계-2026-05]]가 민원 답변 문안과 내부 결재 기안문을 나누는 신규 교차 route 후보로 작동한다.
- assembly drafting boundary: [[router-국회대응-문서기안-실행경계-2026-05]]가 국회 제출 문안과 내부 결재 기안문을 나누는 신규 교차 route 후보로 작동한다.
- audit drafting boundary: [[router-감사대응-문서기안-실행경계-2026-05]]가 감사자료 제출 판단과 기안문 공개 범위를 나누는 신규 교차 route 후보로 작동한다.
- budget performance boundary: [[router-예산대응-성과평가-실행경계-2026-05]]가 예산 수치와 성과 설명·평가 판단을 나누는 신규 교차 route 후보로 작동한다.
- HR drafting boundary: [[router-인사복무-문서기안-실행경계-2026-05]]가 인사복무 사실과 기안문 공개 범위를 나누는 신규 교차 route 후보로 작동한다.
- [[quality-gate-new-cross-boundary-routes-2026-05]] — 신규 교차 route 묶음 포함·발견성·안전성 gate.
- new cross-boundary index: [[index-new-cross-boundary-routes-2026-05]]가 최근 추가된 장관보고·성과평가, 대외협력·홍보, 대외협력·정보공개, 인사복무·문서기안 route 묶음을 모은다.
- external records boundary: [[router-대외협력현장소통-정보공개기록관리-실행경계-2026-05]]가 현장 소통 기록과 정보공개·기록관리 경계를 나누는 신규 교차 route 후보로 작동한다.
- external communication PR boundary: [[router-대외협력현장소통-홍보대응-실행경계-2026-05]]가 현장 소통과 공식 홍보문안의 실행경계를 나누는 신규 교차 route 후보로 작동한다.
- minister performance boundary: [[coverage-장관보고-성과평가-실행경계-2026-05]]가 장관보고 설명과 성과평가 판단을 분리하는 신규 교차 route coverage로 작동한다.

## docs link count checkpoint
- 2026-05-06 기준 docs/index.html GitHub `.md` 링크는 607개이며 missing 0으로 확인했다.
- 신규 route 묶음은 [[quality-gate-new-cross-boundary-routes-2026-05]]와 [[audit-new-cross-boundary-routes-final-2026-05]]에서 중복 노출과 안전성을 함께 점검한다.
- 민원대응·예산대응 route까지 신규 route index에 반영한 뒤 607개 링크 checkpoint를 갱신했다.
