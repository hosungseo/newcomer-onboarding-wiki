# section — GitHub Pages source branch mismatch

## Scope

Record why the live GitHub Pages surface still shows the gateway page while this feature branch contains `docs/index.html` route-index work.

## Evidence

- GitHub Pages API: `status=built`, `source.branch=main`, `source.path=/docs`, `html_url=https://hosungseo.github.io/newcomer-onboarding-wiki/`.
- Current working branch: `feature/search-priority-feedback-v2`.
- `origin/main:docs/index.html` title: `신규공무원 적응 위키 · 관문`.
- Feature branch `docs/index.html` title: `Execution Boundary Route Index`.
- Live response: HTTP 200, about 31,241 bytes, gateway title present, route-index title absent.

## Classification

This is a **source-branch mismatch**, not a content FAIL. GitHub Pages is correctly built from `main:/docs`; the route-index content exists on a different feature branch and is not expected to appear live until it is merged/deployed to the configured Pages source.

## Guardrail

Do not keep editing `docs/index.html` to fix the live mismatch. The next action belongs to merge/deploy/source-branch handling, not content repair.
