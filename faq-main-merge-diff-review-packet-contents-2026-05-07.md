# FAQ — main merge diff review packet에는 무엇이 들어가야 하나

## 질문
[[quality-gate-main-diff-risk-2026-05-07]] 이후 main merge를 검토할 때, 리뷰어에게 어떤 내용을 한 묶음으로 전달해야 하나?

## 답
리뷰 packet은 “merge 가능/불가” 의견보다 먼저, 검토자가 같은 증거를 재현할 수 있는 최소 묶음이어야 한다. 핵심은 branch 범위, 큰 diff의 파일별 의미, 링크 검증, live-route 검증 계획/결과를 한 화면에 놓는 것이다.

## Packet contents
- Branch range: `origin/main..HEAD` 또는 실제 review 대상 branch range.
- Large diff summary: commit count, `docs/index.html` line diff, publication-facing file list.
- Bucket split: generated index / landing / metadata / assets / deletions.
- Preservation check: 기존 navigation, canonical link, newcomer entry point가 유지됐는지.
- Link integrity: root markdown wikilink missing count와 docs index relative `.md` link missing count.
- Live-route proof: HTTP 200이 아니라 route title/marker가 기대 문서와 일치하는지.
- Decision line: merge / hold / split / revert 중 하나와 rollback boundary.

## Related anchors
- [[process-large-docs-index-diff-premerge-pages-source-2026-05-07]]
- [[checklist-safe-main-docs-publication-2026-05-07]]
- [[README]]
- [[QUALITY-GATE]]

## Stop
STOP: branch range, large diff bucket, link validation, live-route proof 중 하나라도 비어 있으면 main merge packet을 완료로 보지 않는다.

## Forbidden
FORBIDDEN: “문서 변경이라 안전함” 또는 “HTTP 200이라 반영됨”만으로 main merge 검토를 통과시키지 않는다.
