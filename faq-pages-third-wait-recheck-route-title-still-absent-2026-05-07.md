# FAQ — Pages third WAIT recheck route title still absent (2026-05-07)

## Question
On the third Pages recheck, should HTTP `200` with live bytes `31,241` close the restored route index as live?

## Answer
No. Keep this as `WAIT` evidence unless the process owner applies the “same cause repeated three times” rule and explicitly escalates it to `FAIL`. The third recheck still shows transport success but content mismatch: live HTTP status is `200`, live bytes are `31,241`, local `docs/index.html` bytes are `19,194`, the local route-index title is absent, and the gateway title is still present.

## Why this matters
The repeated title mismatch is stronger evidence than the status code. A reachable GitHub Pages response can still be an older artifact, so the route index is not proven live until the live title/marker/link identity matches local `docs/index.html`.

## Link onward
- [[source-pages-third-wait-recheck-evidence-2026-05-07]]
- [[faq-pages-second-wait-recheck-byte-title-mismatch-2026-05-07]]
- [[faq-pages-200-but-stale-index-how-to-tell-2026-05-07]]

## Stop / forbidden
- Stop at `WAIT` evidence recording unless the owner explicitly invokes the repeated-WAIT failure threshold.
- Forbidden: call this `PASS`, rewrite generated Pages output, commit, push, deploy, edit existing root markdown, create placeholder wikilink targets, or delete/rename notes.
