# Checklist — second WAIT recheck logging and gateway-title FAIL escalation (2026-05-07)

## Purpose
Record the second GitHub Pages `WAIT` recheck without masking stale-live evidence, and decide when repeated gateway-title evidence must become `FAIL` instead of another wait.

## Existing anchors
- [[process-pages-wait-recheck-2026-05-07]]
- [[process-github-pages-live-html-vs-docs-index-2026-05-07]]
- [[source-pages-gateway-title-route-index-wait-evidence-2026-05-07]]
- [[faq-pages-gateway-title-while-local-route-index-wait-or-fail-2026-05-07]]
- [[faq-pages-200-but-stale-index-how-to-tell-2026-05-07]]

## Inputs to capture before the second recheck
- [ ] Recheck number: `2`.
- [ ] Recheck time in KST.
- [ ] Local `docs/index.html` byte size.
- [ ] Local `<title>` and visible `h1`.
- [ ] Expected route-index marker from the current local artifact.
- [ ] Live HTTP status.
- [ ] Live byte size.
- [ ] Live `<title>` and visible `h1`.
- [ ] Live presence/absence of the expected route-index marker.
- [ ] GitHub Actions or Pages metadata if already available without deploying or pushing.

## Second WAIT logging rule
Use `WAIT-2` only when all are true:

- [ ] Live HTTP status is `200`.
- [ ] Local title/h1 still match the intended route index.
- [ ] Live title/h1 still match the previous gateway page, including `신규공무원 적응 위키 · 관문` or equivalent gateway wording.
- [ ] Expected route-index marker is missing from live HTML.
- [ ] No evidence shows a failed deployment, wrong branch, wrong SHA, wrong artifact, missing-root links, or unsafe public exposure.
- [ ] The next recheck time and reason are recorded in one line.

Suggested log line:

```text
pages-wait-recheck-2 YYYY-MM-DD HH:mm KST | local=<title/h1/bytes/marker> | live=<status/title/h1/bytes/marker> | result=WAIT-2 | next=<time + reason>
```

## Escalate repeated gateway-title evidence to FAIL
Record `FAIL` instead of another `WAIT` when any one is true:

- [ ] The gateway title/h1 persists into the configured third recheck or past the agreed wait window.
- [ ] GitHub Actions or Pages metadata shows failed deployment, wrong branch, wrong SHA, or wrong artifact.
- [ ] Live HTML points to missing root markdown files or unsafe public material.
- [ ] Live title/h1 points to a different project entirely.
- [ ] Local route-index labels and expected marker remain absent from live HTML after deployment metadata says the intended artifact is already live.

Suggested FAIL log line:

```text
pages-wait-recheck YYYY-MM-DD HH:mm KST | repeated-gateway-title=true | evidence=<brief evidence> | result=FAIL | next=<inspect deployment metadata or stop exposure work>
```

## Stop / forbidden lines
- STOP: Do not convert `WAIT-2` to `PASS` from HTTP `200` alone.
- STOP: Do not rewrite `docs/index.html` or create placeholder markdown files merely because live Pages is stale.
- STOP: If live links expose missing-root markdown or unsafe public material, stop exposure work and record `FAIL` evidence.
- FORBIDDEN: commit, push, deploy, rename files, delete files, edit existing root notes, edit `docs/index.html`, or edit `docs/gates.json` from this checklist lane.
- FORBIDDEN: print or copy private tokens, cookies, credentials, non-public HR/budget/audit/security material, legal-advice conclusions, or unverified claims.
