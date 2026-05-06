# main 병합 diff review packet 작성 프로세스

## 목적

main 병합 직전에 “무엇이 들어가고, 공개 진입점이 어떻게 바뀌며, GitHub Pages 소스에 어떤 영향을 주는지”를 한 장짜리 review packet으로 고정한다.

이 프로세스는 [[process-large-docs-index-diff-premerge-pages-source-2026-05-07]], [[quality-gate-main-diff-risk-2026-05-07]], [[source-main-publication-diff-risk-review-trigger-2026-05-07]], [[faq-main-publication-why-diff-risk-review-first-2026-05-07]]를 따른다.

## 입력

- 현재 작업 브랜치명
- 기준 브랜치: `main`
- 비교 범위: `main...HEAD`를 기본값으로 한다.
- 공개 진입점 후보: `README.md`, `docs/index.html`, `docs/gates.json`, 루트 `landing-*`, `router-*`, `section-*`, `hub-*`, `newcomer-path-*`
- 관련 품질 기준: QUALITY-GATE, [[README]]

## 산출물

review packet은 아래 순서로만 작성한다.

1. `commit range`
2. `changed file summary`
3. `docs/index section delta`
4. `link validation`
5. `Pages source impact`
6. `merge recommendation`
7. `stop / forbidden lines`

## 1. commit range 고정

```bash
git status --short
git branch --show-current
git merge-base main HEAD
git log --oneline --decorate --max-count=20 main..HEAD
git diff --stat main...HEAD
```

기록할 것:

- 비교 기준: `main...HEAD`
- merge-base SHA
- 포함 commit 수
- 위험 신호: 대량 삭제, 바이너리 변경, `docs/` 변경, 루트 인덱스성 파일 변경

## 2. changed file summary

```bash
git diff --name-status main...HEAD
```

파일을 네 묶음으로 분류한다.

- 공개 진입점: `README.md`, `docs/index.html`, `docs/gates.json`
- 라우팅·허브: `landing-*`, `router-*`, `section-*`, `hub-*`, `newcomer-path-*`
- 검증·근거: `source-*`, `coverage-*`, `quality-gate-*`, `audit-*`, `manifest-*`, `faq-*`
- 위험 변경: 삭제, rename, 대형 HTML 재생성, 외부 URL 추가, 스크립트 추가

## 3. docs/index section delta

`docs/index.html`이 변경된 경우에만 섹션 단위로 본다. 변경이 없으면 `No docs/index.html delta`라고 적는다.

```bash
git diff --word-diff=plain main...HEAD -- docs/index.html | head -200
git diff main...HEAD -- docs/index.html | grep -E '^[-+].*(href=|<h[1-6]|<section|<li|title)' | head -120
```

packet에 적을 것:

- 새로 노출된 섹션명
- 제거된 섹션명
- 링크가 새로 추가된 루트 문서명
- 같은 의미의 중복 진입점 여부
- `docs/gates.json`과의 불일치 여부

## 4. link validation

로컬 markdown wikilink는 “존재하는 루트 파일 또는 명시적으로 확인한 파일”만 허용한다.

```bash
python3 - <<'PY'
import pathlib, re, sys
root = pathlib.Path('.')
files = {p.stem for p in root.rglob('*.md') if '.git' not in p.parts}
missing = []
for p in root.rglob('*.md'):
    if '.git' in p.parts:
        continue
    text = p.read_text(errors='ignore')
    for m in re.findall(r'\[\[([^\]|#]+)', text):
        if m not in files:
            missing.append((str(p), m))
if missing:
    for path, target in missing[:80]:
        print(f'MISSING {path}: {target}')
    sys.exit(1)
print('wikilinks ok')
PY
```

HTML/link 쪽은 최소한 다음을 확인한다.

```bash
python3 - <<'PY'
from pathlib import Path
import re, sys
html = Path('docs/index.html')
if not html.exists():
    print('no docs/index.html')
    sys.exit(0)
missing=[]
for href in re.findall(r'href=["\']([^"\']+)["\']', html.read_text(errors='ignore')):
    if href.startswith(('http://','https://','#','mailto:')):
        continue
    target = (html.parent / href.split('#')[0]).resolve()
    if href.split('#')[0] and not target.exists():
        missing.append(href)
if missing:
    print('\n'.join(f'MISSING href {x}' for x in missing[:80]))
    sys.exit(1)
print('docs hrefs ok')
PY
```

## 5. Pages source impact

확인 순서:

```bash
git remote -v
git branch -vv
git status --short
```

packet에 적을 것:

- GitHub Pages가 `main/docs`를 바라본다는 전제인지, 다른 브랜치·폴더인지
- 이번 diff가 `docs/index.html` 또는 `docs/gates.json`를 바꾸는지
- Pages가 stale일 때 이번 병합으로 해결되는 문제인지, 별도 Pages 설정 문제인지
- 실제 공개 반영 검증은 병합 뒤 별도 단계인지

참조 판단은 [[source-main-docs-publication-decision-after-feature-mismatch-2026-05-07]]와 [[faq-main-docs-publication-decision-after-branch-mismatch-2026-05-07]]에 맞춘다.

## 6. merge recommendation 문장

아래 셋 중 하나만 쓴다.

- `MERGE OK` — commit range, docs/index delta, wikilink, docs href, Pages source 영향이 모두 설명됨.
- `MERGE HOLD` — 공개 진입점·링크·Pages 소스 중 하나가 불명확함.
- `MERGE NO` — 삭제, 깨진 링크, 의도 불명 docs 재생성, main 외 Pages source mismatch가 확인됨.

## stop / forbidden lines

- STOP: `git status --short`에 의도하지 않은 수정·삭제가 있으면 packet 작성만 하고 병합하지 않는다.
- STOP: `docs/index.html`이 대량 변경됐는데 섹션 delta를 설명하지 못하면 병합하지 않는다.
- STOP: wikilink 또는 `docs/index.html` href 검증이 실패하면 병합하지 않는다.
- STOP: Pages source가 `main/docs`가 아닌 정황이 있으면 병합하지 않는다.
- FORBIDDEN: 이 프로세스 실행 중 `git commit`, `git push`, `git merge`, `git rebase`, `gh pr merge`를 하지 않는다.
- FORBIDDEN: 깨진 링크를 “나중에 고침”으로 두고 공개 진입점만 먼저 병합하지 않는다.
- FORBIDDEN: `docs/index.html` 200 응답만으로 최신 공개 반영을 확인했다고 쓰지 않는다.
- FORBIDDEN: private/internal 검토 흔적을 공개 랜딩 링크로 승격하지 않는다.

## 완료 기준

- packet에 commit range가 명시되어 있다.
- `docs/index.html` 변경 여부와 섹션 delta가 명시되어 있다.
- wikilink 검증과 docs href 검증 결과가 들어 있다.
- Pages source impact가 `main/docs`, 다른 source, 불명확 중 하나로 결론났다.
- merge recommendation이 `MERGE OK`, `MERGE HOLD`, `MERGE NO` 중 하나다.
