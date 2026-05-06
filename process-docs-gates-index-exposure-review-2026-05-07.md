---
type: process
created: 2026-05-07
scope: docs/gates.json and docs/index exposure review
status: draft
---

# docs/gates.json · docs/index 노출 검토 프로세스

## 목적

`docs/gates.json`이 없거나 바뀌었을 때, `docs/index.html`의 노출 링크를 함부로 깨지 않고 기존 route·coverage·quality gate 흐름과 맞춰 검토한다.

## 시작점

- 현재 확인 대상: `docs/gates.json`, `docs/index.html`
- 현재 연결 기준: [[section-execution-boundary-routes-2026-05]], [[coverage-execution-boundary-routes-discovery-2026-05]], [[quality-gate-execution-boundary-routes-discovery-2026-05]]
- 기존 hub 진입 기준: [[router-existing-hub-entry-index-2026-05-07]], [[quality-gate-router-existing-hub-entry-index-2026-05-07]]

## 검토 순서

1. **파일 존재 확인**
   - `docs/gates.json`이 존재하는지 먼저 본다.
   - 없으면 새 스키마를 추정하지 말고, `docs/index.html`에 이미 노출된 gate·coverage 링크를 임시 기준으로 삼는다.

2. **index 링크 수집**
   - `docs/index.html`의 `href="../*.md"`만 수집한다.
   - 같은 문서가 quick links와 본문에 중복 노출되어도, 중복 자체를 오류로 보지 않는다.

3. **링크 존재 검증**
   - 수집한 상대경로가 workspace root에 실제 존재하는지 확인한다.
   - 존재하지 않는 항목은 “삭제”가 아니라 “수정 후보”로만 표시한다.

4. **gate 성격 분류**
   - quality gate 문서: [[quality-gate-execution-boundary-routes-discovery-2026-05]], [[quality-gate-router-existing-hub-entry-index-2026-05-07]]
   - coverage 문서: [[coverage-execution-boundary-routes-discovery-2026-05]], [[coverage-router-existing-hub-entry-index-2026-05-07]], [[coverage-low-density-hub-path-exposure-2026-05-07]]
   - manifest 문서: [[manifest-router-existing-hub-entry-index-2026-05-07]]

5. **수정 판단**
   - 링크가 살아 있으면 `docs/index.html`은 유지한다.
   - `docs/gates.json`이 없으면 “생성 필요”가 아니라 “상위 지시 또는 기존 스키마 확인 필요”로 기록한다.
   - 새 gate를 추가하려면 먼저 기존 route/gate 축 중 어디에 붙는지 확인한다.

## STOP lines

- STOP: `docs/gates.json`이 없다는 이유만으로 새 JSON 스키마를 임의 생성하지 않는다.
- STOP: `docs/index.html`의 링크를 삭제하기 전에 실제 파일 존재 여부와 대체 진입점을 둘 다 확인한다.
- STOP: quick links, 본문 section, quality gate가 서로 다른 route를 가리키면 수정하지 말고 충돌 후보로 남긴다.

## Forbidden

- FORBIDDEN: 존재 확인 없이 `docs/index.html` 링크를 일괄 정리하거나 이름을 바꾸지 않는다.
- FORBIDDEN: 루트 markdown 파일명을 바꾸거나 이동하지 않는다.
- FORBIDDEN: `docs/gates.json` 부재를 근거로 quality gate 문서를 실패 처리하지 않는다.
- FORBIDDEN: 깨진 링크를 숨기려고 노출 항목을 삭제하지 않는다.

## 완료 기준

- `docs/index.html`의 markdown 링크가 모두 실제 파일로 해소된다.
- `docs/gates.json`의 존재/부재가 명시되어 있다.
- 새로 추가하는 노출은 기존 router·coverage·quality gate 중 하나와 연결된다.
- 검토 결과는 [[coverage-router-existing-hub-entry-index-2026-05-07]] 또는 [[coverage-low-density-hub-path-exposure-2026-05-07]] 같은 coverage 문서에 후속 기록할 수 있는 형태로 남긴다.
