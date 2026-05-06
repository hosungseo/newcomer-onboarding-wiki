# FAQ — Why can the live gateway title persist while work is on `feature/search-priority-feedback-v2`?

## Atomic answer

GitHub Pages is configured to publish from `main:/docs`, so work done on `feature/search-priority-feedback-v2` does not change the live site until the relevant `docs/` source is merged or otherwise applied to `main` and Pages rebuilds from that source.

## Practical reading

If the live page still says `신규공무원 적응 위키 · 관문`, that can be normal stale/live-source behavior when the route-index work exists only on `feature/search-priority-feedback-v2`. The live title is not proof that the feature-branch route index is wrong; it is proof that the published source has not yet reflected the feature branch.

## Existing anchors

- [[faq-pages-gateway-title-while-local-route-index-wait-or-fail-2026-05-07]] — distinguishes WAIT vs FAIL when the gateway title persists.
- [[source-pages-gateway-title-route-index-wait-evidence-2026-05-07]] — records the stale-title evidence standard.
- [[checklist-pages-url-response-comparison-2026-05-07]] — compare live response content, not only HTTP status.

## Stop / forbidden lines

- STOP: Do not call the live title a deployment failure unless `main:/docs` has received the intended source and the Pages rebuild window has passed.
- STOP: If the feature branch is not merged to `main`, keep the conclusion limited to source-branch mismatch or pending publication.
- FORBIDDEN: commit, push, merge, deploy, edit `docs/`, rename files, delete files, or change GitHub Pages settings from this note.
- FORBIDDEN: expose tokens, cookies, deployment secrets, private repository settings, non-public personnel/budget/audit/security material, or unverified claims.
