# Quality Gate — new cross-boundary routes 2026-05

## 목적
신규 교차 실행경계 route 묶음이 기존 alias index와 중복되지 않고, 실제 router/coverage/manifest/audit까지 닫힌 route만 노출하는지 확인한다.

## 검사 대상
- [[index-new-cross-boundary-routes-2026-05]]
- [[release-note-new-cross-boundary-routes-2026-05]]
- [[audit-new-cross-boundary-routes-final-2026-05]]
- [[coverage-execution-boundary-routes-discovery-2026-05]]

## Gate 1 — 포함 기준
- [x] 신규 route는 router와 coverage가 모두 있는가?
- [x] 신규 route는 quality/manifest 또는 final audit으로 닫히는가?
- [x] 기존 4개 alias 묶음은 [[index-execution-boundary-route-aliases-2026-05]]에 남기고 이 index에서 반복하지 않는가?

## Gate 2 — 발견성
- [x] docs/index.html GitHub `.md` 링크 586개가 missing 0으로 유지되는가?
- [x] README, landing, docs/index.html, agent-readable catalog에서 신규 index 또는 release note로 들어올 수 있는가?
- [x] [[coverage-execution-boundary-routes-discovery-2026-05]]가 신규 route 후보와 index를 기록하는가?
- [x] 개별 route의 router → coverage → release note/audit 연결이 끊기지 않는가?
- [x] 상위 묶음 노출은 index/release note/quality gate/final audit으로 제한해 같은 route 설명을 반복하지 않는가?

## Gate 3 — 안전성
- [x] 개인정보, 비공개 내부검토, 미확정 정책안, 감사·수사·징계·보안·업체 민감정보를 포함하지 않는가?
- [x] 실제 파일 없는 placeholder wikilink를 만들지 않는가?
- [x] 공개형 문장과 내부 판단·검토 문장을 섞지 않는가?

## 판정
신규 교차 route index는 인사복무·문서기안 및 예산대응·성과평가 및 감사대응·문서기안 및 국회대응·문서기안 및 민원대응·문서기안 및 홍보대응·문서기안 및 계약조달·문서기안, 조직정원·문서기안, 법령대응·문서기안, 협업회의운영·문서기안, 정보공개기록관리·문서기안, 대외협력현장소통·협업회의운영, 예산대응·문서기안, 감사대응·계약조달, 국회대응·계약조달, 민원대응·계약조달, 홍보대응·계약조달, 조직정원·계약조달, 법령대응·계약조달, 협업회의운영·계약조달처럼 닫힌 route만 싣고, 기존 alias index와 중복 설명을 늘리지 않는 discovery 보조 index로 유지한다.
