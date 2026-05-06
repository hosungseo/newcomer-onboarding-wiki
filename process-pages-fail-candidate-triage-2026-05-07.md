# process — Pages FAIL 후보 triage

## 목적

반복 `WAIT` 후에도 live Pages가 gateway title을 계속 반환할 때, 문서 수정이 아니라 배포 경로를 점검한다.

## 순서

1. `git status --short --branch`로 local branch와 origin 동기화를 확인한다.
2. GitHub Pages live HTML에서 title, byte size, 핵심 route label을 기록한다.
3. local `docs/index.html`의 title, byte size, section count를 기록한다.
4. live가 `신규공무원 적응 위키 · 관문`이고 local이 `Execution Boundary Route Index`이면 `FAIL 후보`로 둔다.
5. 다음 wake에서는 GitHub Pages source branch/folder, Actions/Pages deployment 상태, custom workflow 여부를 확인한다.

## 연결

- [[faq-pages-repeated-gateway-title-fail-candidate-2026-05-07]]
- [[checklist-pages-url-response-comparison-2026-05-07]]
- [[checklist-third-wait-recheck-gateway-title-fail-2026-05-07]]
- [[router-existing-hub-entry-index-2026-05-07]]

## STOP

- STOP: source branch/folder 확인 전 `docs/index.html`을 또 덮어쓰지 않는다.
- STOP: live가 gateway title이면 content 작성이 아니라 deploy surface 확인으로 전환한다.

## FORBIDDEN

- FORBIDDEN: GitHub Pages 설정을 자동 변경하지 않는다.
- FORBIDDEN: README, landing, graph/data를 이 triage에서 수정하지 않는다.
