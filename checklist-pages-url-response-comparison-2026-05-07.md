# Checklist — Pages URL response comparison (2026-05-07)

## Purpose

Verify the actual GitHub Pages URL response against local `docs/index.html` without editing, committing, pushing, or widening public exposure. This checklist treats HTTP status, byte size, and title comparison as separate signals.

## Existing anchors

- [[process-github-pages-live-html-vs-docs-index-2026-05-07]] — broader local/live HTML comparison procedure.
- [[process-pages-live-reflection-check-2026-05-07]] — docs index and gates reflection check.
- [[source-pages-200-is-not-docs-index-proof-2026-05-07]] — why HTTP 200 alone is insufficient.
- [[source-pages-live-response-verification-boundary-2026-05-07]] — verification boundary and stop rules.
- [[faq-pages-live-response-after-index-restore-2026-05-07]] — FAQ framing for post-restore live response checks.

## Inputs

- Local source: `docs/index.html`
- Live URL: `https://hosungseo.github.io/newcomer-onboarding-wiki/`
- Required transport result: HTTP `200`
- Required content signal: non-zero byte size close enough to the expected Pages artifact to rule out an error shell or empty response
- Required title signal: live `<title>` matches local `<title>` exactly; a mismatch is not a pass even when status is `200`

## Response comparison checklist

- [ ] Fetch local `docs/index.html` and record local byte size and local `<title>`.
- [ ] Fetch the actual Pages URL and record HTTP status.
- [ ] Confirm HTTP status is `200`; if not, mark `FAIL`.
- [ ] Record live response byte size; if size is `0`, tiny, or clearly an error shell, mark `FAIL`.
- [ ] Compare live byte size with local byte size; if it is materially different, mark `WAIT` when deployment lag is plausible, otherwise `FAIL`.
- [ ] Compare live `<title>` with local `<title>`; if it mismatches, mark `WAIT` only when Pages propagation lag is plausible, otherwise `FAIL`.
- [ ] If status is `200`, byte size is plausible, and title matches, continue to route-label/link checks in [[process-github-pages-live-html-vs-docs-index-2026-05-07]].

## Minimal command

```bash
python3 - <<'PY'
from pathlib import Path
import re, urllib.request

LOCAL = Path('docs/index.html')
URL = 'https://hosungseo.github.io/newcomer-onboarding-wiki/'

def title_of(html):
    m = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
    return re.sub(r'\s+', ' ', m.group(1)).strip() if m else ''

local_bytes = LOCAL.read_bytes()
local_html = local_bytes.decode('utf-8', 'replace')
req = urllib.request.Request(URL, headers={'User-Agent': 'OpenClaw Pages response comparison'})
with urllib.request.urlopen(req, timeout=20) as r:
    status = r.status
    live_bytes = r.read()
live_html = live_bytes.decode('utf-8', 'replace')

local_title = title_of(local_html)
live_title = title_of(live_html)
print('LOCAL_BYTES', len(local_bytes))
print('LIVE_STATUS', status)
print('LIVE_BYTES', len(live_bytes))
print('LOCAL_TITLE', local_title)
print('LIVE_TITLE', live_title)
print('STATUS_OK', status == 200)
print('TITLE_MATCH', local_title == live_title)
print('BYTE_DELTA', len(live_bytes) - len(local_bytes))
PY
```

## Wait / fail criteria

- `WAIT`: status is `200`, but byte size or title suggests stale Pages content shortly after a known deployment; record the mismatch and re-check later without editing files.
- `FAIL`: status is not `200`, live bytes are empty/tiny/error-shell-like, title mismatch persists beyond plausible propagation lag, or live response appears to expose stale/missing/forbidden content.
- `PASS`: status is `200`, live byte size is plausible for the local artifact, and live title equals local title; then proceed to link/label verification.

## Stop lines

- STOP: Do not treat HTTP `200` alone as success.
- STOP: If byte size or title mismatches, record `WAIT`/`FAIL` before any further exposure work.
- STOP: If the response suggests stale or forbidden public content, report evidence only; do not fix by editing unrelated files.
- STOP: If resolution requires deploy, commit, push, README changes, `docs/index.html` edits, `docs/gates.json` edits, graph/data regeneration, or placeholder destinations, end this lane.

## Forbidden lines

- FORBIDDEN: commit, push, deploy, publish, rename, delete, or edit existing files from this checklist lane.
- FORBIDDEN: create additional process/checklist files for this lane.
- FORBIDDEN: expose private HR records, personal data, internal deliberation, non-public budget strategy, audit/security details, legal-advice conclusions, or unverified source claims.
