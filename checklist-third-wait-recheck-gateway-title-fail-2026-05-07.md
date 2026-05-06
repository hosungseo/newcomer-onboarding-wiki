# Checklist — third WAIT recheck and gateway-title FAIL escalation (2026-05-07)

## Purpose
Decide the third GitHub Pages stale-live recheck without turning transport success into route-index proof. A third repeated gateway-title response is the threshold where the lane should usually escalate from `WAIT` to `FAIL` unless deployment metadata clearly proves that a fresh Pages artifact is still pending.

## Existing anchors
- [[process-pages-wait-recheck-2026-05-07]]
- [[process-github-pages-live-html-vs-docs-index-2026-05-07]]
- [[checklist-second-wait-recheck-gateway-title-fail-2026-05-07]]
- [[source-pages-third-wait-recheck-evidence-2026-05-07]]
- [[source-pages-second-wait-recheck-evidence-2026-05-07]]
- [[faq-pages-gateway-title-while-local-route-index-wait-or-fail-2026-05-07]]
- [[faq-pages-second-wait-recheck-byte-title-mismatch-2026-05-07]]

## Inputs to capture before deciding
- [ ] Recheck number: `3`.
- [ ] Recheck time in KST.
- [ ] Local `docs/index.html` byte size.
- [ ] Local `<title>` and visible `h1`.
- [ ] Expected route-index marker from the local artifact.
- [ ] Live HTTP status.
- [ ] Live response byte size.
- [ ] Live `<title>` and visible `h1`.
- [ ] Gateway-title presence in live HTML, especially `신규공무원 적응 위키 · 관문` or equivalent gateway wording.
- [ ] Route-index title/marker presence or absence in live HTML.
- [ ] Any available GitHub Actions or Pages metadata showing deployment status, branch, SHA, or artifact identity.

## Third recheck decision rule
Use `PASS` only when all are true:

- [ ] Live HTTP status is `200`.
- [ ] Live title/h1 match the local route-index title/h1.
- [ ] Expected route-index marker is present in live HTML.
- [ ] Local/live byte delta is plausible under [[process-pages-wait-recheck-2026-05-07]].

Use `FAIL` when the third recheck still shows repeated gateway-title evidence and no fresh deployment metadata explains the lag:

- [ ] Live HTTP status is `200`, but live title/h1 still match the older gateway page.
- [ ] The local route-index title or expected marker remains absent from live HTML.
- [ ] Byte size remains materially different from local, or otherwise points to a stale artifact.
- [ ] This is the third WAIT-style observation for the same gateway-title mismatch.
- [ ] No reliable metadata shows the intended route-index artifact is still queued or newly propagating.

Use a narrowly bounded `WAIT-3` only when deployment metadata gives a concrete reason to wait, such as a just-completed Pages deployment whose SHA/artifact matches the local route-index build and is still within the agreed propagation window.

## Suggested log lines
For escalation:

```text
pages-wait-recheck-3 YYYY-MM-DD HH:mm KST | local=<title/h1/bytes/marker> | live=<status/title/h1/bytes/marker> | repeated-gateway-title=true | result=FAIL | next=inspect Pages deployment metadata before any exposure work
```

For the rare bounded wait:

```text
pages-wait-recheck-3 YYYY-MM-DD HH:mm KST | local=<title/h1/bytes/marker> | live=<status/title/h1/bytes/marker> | result=WAIT-3 | reason=<matching fresh deployment metadata> | next=<single concrete recheck time>
```

## Stop / forbidden lines
- STOP: Do not call the third repeated gateway-title response `PASS` from HTTP `200`, non-empty bytes, or a large live byte count alone.
- STOP: Do not keep issuing open-ended `WAIT` results after the third repeated gateway-title mismatch; record `FAIL` unless fresh matching deployment metadata justifies one bounded `WAIT-3`.
- STOP: If live content exposes missing-root links, unsafe public material, or a different project identity, stop exposure work and record `FAIL` evidence.
- STOP: If escalation is required, hand off the evidence; do not fix it inside this checklist lane.
- FORBIDDEN: commit, push, deploy, rename files, delete files, edit existing root notes, edit `docs/index.html`, edit `docs/gates.json`, regenerate graph/data files, or create placeholder markdown destinations from this lane.
- FORBIDDEN: print or copy private tokens, cookies, credentials, non-public HR/budget/audit/security material, legal-advice conclusions, or unverified claims.
