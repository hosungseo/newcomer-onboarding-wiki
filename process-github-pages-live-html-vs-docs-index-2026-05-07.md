# process — GitHub Pages live HTML vs docs/index.html 비교

## 목적

GitHub Pages가 반환하는 live HTML이 local `docs/index.html`의 현재 route/link 의도와 같은지 확인한다. 이 절차는 배포 반영 여부를 보는 검증 전용이며, 문서 수정·커밋·푸시는 하지 않는다.

## 연결 문서

- [[process-pages-live-reflection-check-2026-05-07]]
- [[process-docs-index-restore-safety-2026-05-07]]
- [[process-docs-gates-index-exposure-review-2026-05-07]]
- [[faq-github-pages-live-exposure-newcomer-wiki-2026-05]]
- [[source-docs-index-safe-restoration-anchors-2026-05-07]]

## 비교 기준

- Local 기준본: `docs/index.html`
- Live 대상: GitHub Pages가 현재 제공하는 HTML
- 비교 단위: HTTP status가 아니라 `<title>`, `<h1>`, section heading, 핵심 route label, `.md` href 목록
- 허용 차이: Pages 캐시/배포 지연으로 인한 stale HTML은 기록만 하고 추가 편집하지 않는다.

## 실행 순서

1. `git status --short`로 현재 작업트리를 확인하되 아무 파일도 수정하지 않는다.
2. `docs/index.html`에서 `<title>`, `<h1>`, `<section>` heading, `.md` href 목록을 추출한다.
3. GitHub Pages live HTML을 fetch하고 같은 항목을 추출한다.
4. local에는 있는데 live에는 없는 heading/link를 `LIVE_MISSING`으로 기록한다.
5. live에는 있는데 local에는 없는 heading/link를 `LIVE_STALE_OR_EXTRA`로 기록한다.
6. live `.md` href가 root Markdown 파일로 해석되는지 확인한다. `../파일.md` 또는 root 상대 링크만 허용한다.
7. 결과가 불일치하면 “배포 지연/캐시 가능성”과 “local index 누락 가능성”을 분리해서 적는다.

## 최소 확인 명령

```bash
python3 - <<'PY'
from pathlib import Path
import re, urllib.request

ROOT = Path('.').resolve()
LOCAL = Path('docs/index.html')
LIVE_URL = 'https://hosungseo.github.io/newcomer-onboarding-wiki/'

def extract(html):
    title = re.search(r'<title>(.*?)</title>', html, re.I|re.S)
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.I|re.S)
    headings = re.findall(r'<h[23][^>]*>(.*?)</h[23]>', html, re.I|re.S)
    hrefs = re.findall(r'href=["\']([^"\'#?]+\.md)["\']', html, re.I)
    clean = lambda s: re.sub(r'<[^>]+>', '', s).strip()
    return {
        'title': clean(title.group(1)) if title else '',
        'h1': clean(h1.group(1)) if h1 else '',
        'headings': [clean(x) for x in headings],
        'hrefs': hrefs,
    }

def root_md_exists(href):
    name = href.split('/')[-1]
    return (ROOT / name).is_file()

local_html = LOCAL.read_text(encoding='utf-8')
live_html = urllib.request.urlopen(LIVE_URL, timeout=20).read().decode('utf-8', 'replace')
local = extract(local_html)
live = extract(live_html)

for key in ['title', 'h1']:
    print(key.upper(), 'OK' if local[key] == live[key] else 'DIFF', 'local=', local[key], 'live=', live[key])

for item in sorted(set(local['headings']) - set(live['headings'])):
    print('LIVE_MISSING_HEADING', item)
for item in sorted(set(live['headings']) - set(local['headings'])):
    print('LIVE_STALE_OR_EXTRA_HEADING', item)
for item in sorted(set(local['hrefs']) - set(live['hrefs'])):
    print('LIVE_MISSING_HREF', item)
for item in sorted(set(live['hrefs']) - set(local['hrefs'])):
    print('LIVE_STALE_OR_EXTRA_HREF', item)

missing_files = [href for href in live['hrefs'] if not root_md_exists(href)]
print('LOCAL_HREF_COUNT', len(local['hrefs']))
print('LIVE_HREF_COUNT', len(live['hrefs']))
print('LIVE_MD_LINKS_MISSING_ROOT_FILES', len(missing_files))
for href in missing_files[:50]:
    print('MISSING_ROOT_FILE_FOR_LIVE_HREF', href)
PY
```

## 판정

- PASS: title/h1이 같고, local 기준 핵심 heading과 `.md` href가 live에 모두 있으며, live `.md` href가 root Markdown 파일로 모두 해석된다.
- WAIT: local 기준 항목이 live에 없지만 배포 직후라 stale 가능성이 높다. 이 경우 파일을 고치지 말고 시간차 재확인 대상으로 남긴다.
- FAIL: live가 local에 없는 민감·폐기·missing root 문서를 노출하거나, live `.md` 링크가 root에 존재하지 않는 파일을 가리킨다.

## 멈춤선

- STOP: live HTML이 200이어도 title/h1/route label이 local `docs/index.html`과 다르면 성공으로 보지 않는다.
- STOP: live `.md` href 중 root에 없는 파일이 하나라도 있으면 추가 노출 작업을 중단한다.
- STOP: 비교 과정에서 내부 메모, 개인정보, 비공개 판단 문서가 Pages에 노출된 정황이 보이면 검증 결과만 기록하고 편집하지 않는다.
- STOP: 해결에 commit, push, README 수정, `docs/index.html` 수정, graph/data 재생성이 필요해지면 이 lane을 중단한다.

## 금지선

- FORBIDDEN: 이 절차에서 commit 또는 push를 수행하지 않는다.
- FORBIDDEN: `docs/index.html`, `docs/gates.json`, README, 기존 root note, graph/data 산출물을 수정하지 않는다.
- FORBIDDEN: HTTP 200만으로 배포 반영을 판정하지 않는다.
- FORBIDDEN: missing live link를 고치기 위해 placeholder root Markdown을 새로 만들지 않는다.
- FORBIDDEN: 이 lane에서 checklist/process 파일을 추가로 만들지 않는다.
