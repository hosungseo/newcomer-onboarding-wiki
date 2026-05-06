# process — docs/index.html restore safety

## 목적

`docs/index.html`을 복구하거나 재생성할 때 기존 섹션을 잃지 않고, GitHub Pages에서 노출되는 `.md` 링크가 실제 root 문서로 이어지는지 확인하는 절차다.

## 연결 문서

- [[process-docs-gates-index-exposure-review-2026-05-07]]
- [[process-pages-live-reflection-check-2026-05-07]]
- [[faq-github-pages-live-exposure-newcomer-wiki-2026-05]]
- [[router-existing-hub-entry-index-2026-05-07]]
- [[section-low-density-hub-path-exposure-2026-05-07]]
- [[coverage-low-density-hub-path-exposure-2026-05-07]]

## 복구 순서

1. 현재 `docs/index.html`을 먼저 백업하거나 `git show HEAD:docs/index.html`로 기준본을 확인한다.
2. 새 index를 만들기 전에 기존 `<section>` heading 목록을 추출한다.
3. 복구본에는 기존 heading 목록을 모두 유지한 뒤, 새 링크는 가장 가까운 기존 섹션에만 추가한다.
4. 중복 섹션을 만들지 말고, route map quick links → 업무축 섹션 → quality/coverage 섹션 순서를 보존한다.
5. `.md` 링크는 `../파일명.md` 형태로만 넣고, 해당 파일이 root에 실제 존재하는지 확인한다.
6. 링크 추가 후 `docs/index.html` 안의 GitHub/Pages 대상 `.md` 링크 수와 missing 수를 검증한다.
7. missing이 1개라도 있으면 커밋하지 말고 링크명 또는 파일명부터 고친다.

## 멈춤선

- STOP: 기존 `<section>` heading 수가 줄어들면 즉시 중단한다.
- STOP: 기존 업무축 섹션의 순서가 바뀌면 즉시 중단한다.
- STOP: `docs/index.html`의 `.md` 링크 검증에서 missing이 발생하면 즉시 중단한다.

## 금지선

- FORBIDDEN: `docs/index.html` 전체를 새 템플릿으로 덮어써서 기존 섹션을 잃는 작업.
- FORBIDDEN: root에 없는 `.md` 파일을 docs index에 먼저 노출하는 작업.
- FORBIDDEN: 검증 없이 GitHub Pages 노출 링크 수만 늘리는 작업.
- FORBIDDEN: 내부 메모, 비공개 판단, 개인정보가 섞인 문서를 public index에 연결하는 작업.

## 최소 검증

- root `.md` wikilink missing refs: 0.
- `docs/index.html` GitHub `.md` links missing: 0.
- `git diff -- docs/index.html`에서 기존 섹션 삭제가 없는지 확인.
