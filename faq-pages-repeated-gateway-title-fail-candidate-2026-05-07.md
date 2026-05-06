# FAQ — Pages가 계속 gateway title이면 언제 FAIL 후보인가

## 짧은 답

GitHub Pages가 HTTP `200`을 반환해도 live HTML이 계속 `신규공무원 적응 위키 · 관문` title을 유지하고, local `docs/index.html`의 `Execution Boundary Route Index` title이 반복 확인에서 나타나지 않으면 `PASS`가 아니라 `FAIL 후보`로 다룬다.

## 이번 증거

- live status: `200`
- live bytes: `31,241`
- local bytes: `19,206`
- route title: absent
- gateway title: present

## 연결

- [[checklist-third-wait-recheck-gateway-title-fail-2026-05-07]]
- [[process-pages-wait-recheck-2026-05-07]]
- [[source-pages-200-is-not-docs-index-proof-2026-05-07]]

## STOP

- STOP: HTTP 200만으로 성공 판정하지 않는다.
- STOP: 반복 gateway title이면 새 노트 생산보다 Pages source/branch 설정 확인을 우선한다.

## FORBIDDEN

- FORBIDDEN: 민감자료나 내부자료를 live 확인용 placeholder로 만들지 않는다.
- FORBIDDEN: 배포 설정을 추정으로 변경하지 않는다.
