# Source — Gateway title vs route index is WAIT evidence until deployment disproves it (2026-05-07)

## Atomic claim

A live Pages title of `신규공무원 적응 위키 · 관문` alongside a local `docs/index.html` title of `Execution Boundary Route Index` is evidence of a stale Pages artifact, not by itself evidence that the local route index is broken.

## WAIT evidence

Classify as `WAIT` when all of the following hold:

1. Live HTTP status is `200`.
2. Live title/h1 still match the previous gateway page.
3. Local `docs/index.html` title/h1 match the intended route index.
4. No live markdown links are known to point at missing root files or unsafe public material.

## FAIL evidence

Escalate to `FAIL` when one of these appears:

- the stale gateway title persists across the configured repeated rechecks;
- GitHub Actions or Pages metadata shows a failed deployment, wrong branch, wrong SHA, or wrong artifact;
- live HTML exposes missing-root markdown links, private material, or a different project entirely;
- local route-index labels are absent from live HTML after the deployment window has clearly passed.

## Existing anchors

- [[faq-pages-200-but-stale-index-how-to-tell-2026-05-07]] — user-facing explanation of stale HTTP 200 behavior.
- [[source-pages-live-response-verification-boundary-2026-05-07]] — boundary for what live-response checks may prove.
- [[process-pages-live-reflection-check-2026-05-07]] — reflection-check sequence for restored Pages content.

## Stop / forbidden lines

- STOP: If the only proof is HTTP 200, keep the result open as `WAIT` and collect content evidence.
- STOP: If live links point to missing or unsafe root markdown, stop exposure work and record `FAIL` evidence.
- FORBIDDEN: commit, push, deploy, edit existing root notes, edit `docs/index.html`, edit `docs/gates.json`, rename files, delete files, or create placeholder destinations from this source note.
- FORBIDDEN: print private tokens, cookies, credentials, non-public HR/budget/audit/security material, legal-advice conclusions, or unverified claims.
