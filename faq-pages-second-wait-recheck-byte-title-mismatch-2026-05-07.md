# FAQ — Pages second WAIT recheck byte/title mismatch (2026-05-07)

## Question
On the second GitHub Pages recheck, does HTTP 200 plus larger live HTML mean the restored route index is live?

## Answer
No. Record the result as `WAIT`, not `PASS`, because the content signals still point to stale Pages output: the live response returned HTTP `200` and `31,241` bytes, while local `docs/index.html` was `19,192` bytes; the local route-index title was absent from the live response, and the older gateway title was still present.

## Why this matters
HTTP status and byte count are transport clues, not route-index proof. The second recheck confirms Pages is serving a non-empty artifact, but the title mismatch shows that the served artifact has not reflected the local restored route index yet.

## Link onward
- [[faq-pages-gateway-title-while-local-route-index-wait-or-fail-2026-05-07]] — explains why gateway-title/live versus route-index/local is a WAIT condition before the failure window expires.
- [[checklist-pages-url-response-comparison-2026-05-07]] — separates HTTP status, byte size, and title comparison into independent verification signals.
- [[source-pages-200-is-not-docs-index-proof-2026-05-07]] — source note for why HTTP 200 alone is insufficient.

## Stop / forbidden
- Stop at evidence recording and classification as `WAIT`; do not rewrite `docs/index.html` to chase a stale live response.
- Forbidden: commit, push, deploy, edit generated Pages assets, create placeholder markdown targets, delete notes, or call this `PASS` until the live title/labels and links match local `docs/index.html`.
