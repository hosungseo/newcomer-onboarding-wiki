# FAQ — main merge baseline에서 Pages source가 왜 중요한가

## 질문
`HEAD f1dab6d`, `docs/index` diff `+183/-671` versus `origin/main`, Pages source `main:/docs`라는 baseline이면 무엇을 조심해야 하나?

## 답
GitHub Pages source가 `main:/docs`이면 feature branch의 `docs/index` 변경은 그 자체로 live proof가 아니다. 특히 `+183/-671`처럼 줄 수가 크게 줄어든 diff는 “정리”일 수도 있지만 기존 공개 진입점 삭제일 수도 있으므로, main merge 전에 packet에서 삭제·유지·대체 경로를 분리해야 한다.

## Reviewer checklist
- `HEAD f1dab6d` 기준으로 review range를 고정한다.
- `docs/index`의 제거된 링크와 새로 남은 링크를 구분한다.
- Pages live 확인은 HTTP 200이 아니라 expected title/marker 일치로 본다.
- merge decision은 `merge / hold / split / revert` 중 하나로만 적는다.

## Related anchors
- [[faq-main-merge-diff-review-packet-contents-2026-05-07]]
- [[process-main-merge-diff-review-packet-2026-05-07]]
- [[source-main-docs-publication-decision-after-feature-mismatch-2026-05-07]]

## Stop
STOP: Pages source가 `main:/docs`인 상태에서 feature-branch `docs/index`만 보고 live 반영 또는 안전성을 확정하지 않는다.

## Forbidden
FORBIDDEN: Do not collapse a large `docs/index` diff into “docs-only”; do not publish without preserving or explicitly replacing the removed public routes.
