# FAQ — 왜 db8b681 main merge는 명시적 승인이 필요한가

## Question
HEAD `db8b681` 기준으로 `origin/main` 대비 변경 파일이 `1593`개라면, main merge approval decision을 자동 승인처럼 처리할 수 있는가?

## Answer
아니다. 이 규모는 단순 문서 반영이 아니라 공개 진입점, 링크 구조, 게이트 파일, route map, checklist 노출이 함께 바뀔 수 있는 merge surface다. 따라서 추천은 계속 `REVIEW_REQUIRED`이며, main merge approval decision은 명시적 승인 없이는 진행하지 않는다.

## Decision rule
- `changed_files_vs_origin_main = 1593`이면 대형 변경으로 분류한다.
- `HEAD = db8b681`의 packet이 재현 가능한 diff evidence를 갖고 있어도, 그 evidence는 승인 대체물이 아니라 승인 요청 근거다.
- 추천 문구는 `REVIEW_REQUIRED`로 유지한다.
- 승인자는 “merge할지 / hold할지 / split할지”를 명시적으로 선택해야 한다.

## Existing links
- [[process-merge-review-recommendation-from-packet-2026-05-07]]
- [[manifest-main-merge-diff-review-packet-2026-05-07]]
- [[quality-gate-main-diff-risk-2026-05-07]]

## Stop / forbidden
STOP: If `HEAD db8b681` still has `1593` changed files versus `origin/main`, do not treat the merge approval decision as implicit or already granted.

FORBIDDEN: commit, push, merge, rebase, cherry-pick, deploy, change Pages settings, edit `docs/`, or approve the main merge from this FAQ lane.
