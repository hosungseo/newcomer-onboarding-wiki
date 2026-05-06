# GitHub Pages live reflection check — docs index and gates

## Purpose
Confirm that the live GitHub Pages surface reflects both local `docs/index.html` and local `docs/gates.json`, without introducing broken Markdown links or widening the public surface.

## Scope
- Local source: `docs/index.html`
- Local gate contract: `docs/gates.json`
- Live target: GitHub Pages site for this repository
- Related root notes: [[process-docs-gates-index-exposure-review-2026-05-07]], [[router-existing-hub-entry-index-2026-05-07]], [[coverage-low-density-hub-path-exposure-2026-05-07]], [[quality-gate-router-existing-hub-entry-index-2026-05-07]]

## Pre-check
1. Confirm the branch/worktree state without modifying existing files.
2. Read `docs/gates.json` and record every gate `id`, `entry`, `coverage`, `qualityGate`, and `manifest` target.
3. Read `docs/index.html` and confirm those gate targets are reachable from the docs index, directly or through the named docs/landing exposure section.
4. Fetch the live GitHub Pages HTML and compare the key route labels, not just HTTP status.

## Live reflection checklist
- [ ] Live page returns HTTP 200.
- [ ] Live `<title>` and `<h1>` match local `docs/index.html` intent.
- [ ] Live page contains the docs/landing exposure row for `existing hub router`, low-density section, and low-density coverage.
- [ ] Every `docs/gates.json` gate has a visible or intentionally routed counterpart in live HTML.
- [ ] Live HTML does not show stale route labels that were removed locally.
- [ ] All live `.md` links resolve to existing root Markdown files in the repository.
- [ ] Root Markdown wikilinks still resolve with zero missing references.

## Suggested verification commands
Run from repository root, adapting the live URL if the Pages slug differs:

```bash
python3 - <<'PY'
from pathlib import Path
import json, re, urllib.request

base = Path('.')
gates = json.loads(Path('docs/gates.json').read_text())
index = Path('docs/index.html').read_text()

for gate in gates['gates']:
    for key in ['entry', 'coverage', 'qualityGate', 'manifest']:
        target = gate.get(key)
        if target and target not in index:
            print('LOCAL_INDEX_MISSING_GATE_TARGET', gate['id'], key, target)

missing = []
for href in re.findall(r'href="([^"#?]+\.md)"', index):
    path = (Path('docs') / href).resolve().relative_to(base.resolve())
    if not path.exists():
        missing.append(href)
print('LOCAL_DOCS_MD_LINKS', len(re.findall(r'href="([^"#?]+\.md)"', index)), 'MISSING', len(missing))
for item in missing[:20]: print('MISSING', item)
PY
```

Then fetch live HTML and compare the same labels:

```bash
python3 - <<'PY'
import urllib.request
url = 'https://hosungseo.github.io/newcomer-onboarding-wiki/'
html = urllib.request.urlopen(url, timeout=20).read().decode('utf-8', 'replace')
needles = [
  'Execution Boundary Route Index',
  'existing hub router',
  '저밀도 hub/path section',
  'coverage-low-density-hub-path-exposure-2026-05-07.md',
]
for n in needles:
    print(('LIVE_HAS' if n in html else 'LIVE_MISSING'), n)
PY
```

## Stop lines
- Stop if GitHub Pages is still serving stale HTML after a successful deployment; record the stale/missing labels instead of editing more files.
- Stop if any `.md` link in `docs/index.html` points outside root Markdown or resolves missing.
- Stop if any `docs/gates.json` target is not represented by `docs/index.html` or an explicitly documented route.
- Stop if the task would require commit, push, README edits, generated catalog edits, graph/data exports, or new hub creation.

## Forbidden lines
- Do not commit or push from this lane.
- Do not edit `docs/index.html`, `docs/gates.json`, README, catalogs, graph data, or existing root notes.
- Do not create additional checklist/process files for this lane.
- Do not treat HTTP 200 alone as proof of propagation; compare live content against local source labels.
