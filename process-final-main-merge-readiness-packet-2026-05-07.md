# Process — final main merge readiness packet (2026-05-07)

## Purpose

Prepare a final, explicit readiness packet before any main merge. This process converts the existing review materials into one approve/defer/reject decision, without performing the merge.

Use this as the last human/process-owner checkpoint after [[process-main-merge-diff-review-packet-2026-05-07]], [[quality-gate-main-diff-risk-2026-05-07]], and [[faq-main-merge-baseline-pages-source-2026-05-07]].

## Scope

- Allowed output: one final readiness packet in root markdown.
- Allowed decision values: `APPROVE`, `DEFER`, `REJECT`.
- This process is advisory only. It does not authorize automatic merge, push, deploy, or Pages setting changes.

## Required packet sections

### 1. Branch / source check

Record exactly:

```bash
git status --short
git branch --show-current
git branch -vv
git remote -v
git merge-base main HEAD
git log --oneline --decorate --max-count=20 main..HEAD
git diff --stat main...HEAD
git diff --name-status main...HEAD
```

Minimum interpretation:

- Current branch is identified.
- Baseline is `main...HEAD` unless the process owner explicitly chooses another range.
- Untracked/private workspace noise is separated from merge-candidate files.
- Any modified tracked file outside the intended packet is called out.

### 2. Pages source mismatch check

Record the Pages assumption and evidence:

- Expected Pages source: `main:/docs`, unless verified otherwise.
- Local docs files changed: `docs/index.html`, `docs/gates.json`, or other `docs/**`.
- Live Pages proof is not accepted from HTTP 200 alone; expected route title/marker must match.
- If live Pages still reflects another title, stale content, or another branch/source, decision must be `DEFER` or `REJECT`.

Reference: [[faq-main-merge-baseline-pages-source-2026-05-07]], [[faq-pages-200-but-stale-index-how-to-tell-2026-05-07]], [[process-pages-source-branch-triage-2026-05-07]].

### 3. Validation gates

Run or record why skipped:

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
    rel = href.split('#')[0]
    if rel and not (html.parent / rel).exists():
        missing.append(href)
if missing:
    print('\n'.join(f'MISSING href {x}' for x in missing[:80]))
    sys.exit(1)
print('docs hrefs ok')
PY
```

Also record:

- `docs/index.html` section delta if changed.
- `docs/gates.json` consistency if changed.
- Any broken wikilink or missing docs href as a blocking failure.

### 4. Diff risk

Classify risk as one of:

- `LOW`: small, explained, validation clean, no public route deletion.
- `MEDIUM`: docs/public route changes exist but are section-explained and validation clean.
- `HIGH`: large docs/index regeneration, route deletion, unclear Pages source, broken links, scripts/binaries, or private/internal exposure.

Risk notes must mention:

- public entrypoint changes: `README.md`, `docs/index.html`, `docs/gates.json`;
- route-map changes: `landing-*`, `router-*`, `section-*`, `hub-*`, `newcomer-path-*`;
- validation evidence from [[quality-gate-main-diff-risk-2026-05-07]].

### 5. Explicit outcome

Write exactly one outcome:

- `APPROVE` — validation clean, Pages source understood, diff risk accepted by process owner. Manual merge may be considered after approval.
- `DEFER` — more review, live Pages check, diff split, or owner decision is needed.
- `REJECT` — broken links, unintended deletion, unsafe exposure, or wrong Pages source makes merge inappropriate.

The outcome line must include:

- reviewer/process-owner name or `not recorded`;
- timestamp;
- commit range;
- one-sentence reason.

## STOP / FORBIDDEN

- STOP: If `git status --short` contains unexplained tracked changes, do not approve.
- STOP: If Pages source is not verified or conflicts with the packet assumption, do not approve.
- STOP: If wikilink or docs href validation fails, do not approve.
- STOP: If `docs/index.html` has a large unexplained section delta, do not approve.
- STOP: If private/internal notes are newly exposed from public entrypoints, do not approve.
- FORBIDDEN: Do not run `git commit`, `git push`, `git merge`, `git rebase`, or `gh pr merge` while preparing this packet.
- FORBIDDEN: Do not treat this process file as automatic merge approval.
- FORBIDDEN: Do not use HTTP 200 alone as proof that GitHub Pages reflects the intended docs index.
- FORBIDDEN: Do not hide broken links under a future cleanup note.

## Completion criteria

A final readiness packet is complete only when it contains branch/source evidence, Pages source mismatch evidence, validation gate outputs, diff-risk classification, and exactly one `APPROVE`, `DEFER`, or `REJECT` outcome.
