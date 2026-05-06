# GitHub Pages WAIT 재점검 프로세스 (2026-05-07)

## 목적
GitHub Pages가 `WAIT` 상태일 때 같은 확인을 반복하지 않고, 라이브 반영 여부를 status, title, byte delta로 짧게 판정한다.

## 연결 문서
- [[process-pages-live-reflection-check-2026-05-07]]
- [[source-pages-live-response-verification-boundary-2026-05-07]]
- [[faq-pages-200-but-stale-index-how-to-tell-2026-05-07]]
- [[faq-pages-live-response-after-index-restore-2026-05-07]]

## 재점검 입력
- local file: 현재 branch의 `docs/index.html` 또는 배포 대상 HTML.
- live URL: GitHub Pages URL.
- expected title: local HTML의 `<title>` 값 또는 이번 변경에서 의도한 대표 문구.
- expected marker: 이번 변경에서 새로 들어간 고유한 짧은 문구 1개.

## 실행 순서
1. local file의 byte size, `<title>`, expected marker 존재 여부를 기록한다.
2. live URL을 fetch한다.
3. HTTP status가 `200`인지 확인한다.
4. live `<title>`이 local `<title>`과 같은지 확인한다.
5. live byte size와 local byte size의 차이를 계산한다.
6. live HTML에 expected marker가 있는지 확인한다.
7. 아래 판정 기준에 따라 `PASS`, `WAIT`, `FAIL` 중 하나만 남긴다.

## 판정 기준
### PASS
- HTTP status가 `200`이다.
- live title이 local title과 일치한다.
- expected marker가 live HTML에 있다.
- local/live byte delta가 합리적 범위다. 기본 허용선은 `±5%` 또는 `±2048 bytes` 중 더 큰 값이다.

### WAIT
- HTTP status는 `200`이지만 title이 이전 값이거나 expected marker가 아직 없다.
- byte delta가 큰데 live HTML이 명백히 이전 빌드처럼 보인다.
- GitHub Actions는 성공했으나 Pages edge cache가 아직 뒤따라오는 중이다.
- 이 경우 새 변경 없이 다음 recheck 시각만 남긴다.

### FAIL
- HTTP status가 `200`이 아니다.
- live title이 전혀 다른 사이트/프로젝트를 가리킨다.
- expected marker가 없고 byte delta도 local과 맞지 않으며, Actions/Pages 배포 로그에 실패 또는 다른 SHA가 보인다.
- 같은 원인으로 `WAIT`가 3회 연속 반복된다.

## stop / forbidden
- STOP: `WAIT` 판정만으로 새 docs/index를 다시 생성하거나 덮어쓰지 않는다.
- STOP: status `200` 하나만 보고 `PASS`로 닫지 않는다.
- FORBIDDEN: live HTML의 민감하지 않은 공개 문구 확인을 넘어서 private token, cookie, credential을 출력하지 않는다.
- FORBIDDEN: 이 프로세스 파일 작성만 맡은 lane에서는 commit, push, 배포, 외부 메시지를 하지 않는다.
- FORBIDDEN: 기존 root markdown을 수정해 링크를 노출하지 않는다.

## 기록 형식
```text
pages-wait-recheck YYYY-MM-DD HH:mm KST
local: bytes=<n>, title=<title>, marker=<present|missing>
live: status=<code>, bytes=<n>, title=<title>, marker=<present|missing>
delta: <n> bytes / <percent>%
result: PASS|WAIT|FAIL
next: <없음 또는 다음 재점검 시각과 이유>
```
